#!/usr/bin/env node
import { spawnSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const targets = {
  "native-ui": {
    packageDir: "packages/react-native-ui",
    packageName: "@jixic/react-native-ui",
  },
  ui: {
    packageDir: "packages/ui",
    packageName: "@jixic/react-ui",
  },
};

const args = process.argv.slice(2);
const targetArg = args.find((arg) => !arg.startsWith("--"));
const bump = getOption("--bump") ?? "patch";
const tag = getOption("--tag") ?? "latest";
const otp = getOption("--otp");
const isDryRun = args.includes("--dry-run");

if (!targetArg || (!targets[targetArg] && targetArg !== "all")) {
  printUsage();
  process.exit(1);
}

if (!["major", "minor", "patch"].includes(bump)) {
  console.error(`Unsupported bump "${bump}". Use major, minor, or patch.`);
  process.exit(1);
}

const selectedTargets = targetArg === "all" ? [targets.ui, targets["native-ui"]] : [targets[targetArg]];

ensureNpmLogin();

for (const target of selectedTargets) {
  releasePackage(target);
}

function releasePackage(target) {
  const packageJsonPath = resolve(target.packageDir, "package.json");
  const packageJson = JSON.parse(readFileSync(packageJsonPath, "utf8"));
  const currentVersion = packageJson.version;
  const publishedVersion = getPublishedVersion(target.packageName);
  const baseVersion =
    publishedVersion && compareVersions(publishedVersion, currentVersion) > 0
      ? publishedVersion
      : currentVersion;
  const nextVersion = bumpVersion(baseVersion, bump);

  packageJson.version = nextVersion;
  writeFileSync(packageJsonPath, `${JSON.stringify(packageJson, null, 2)}\n`);

  console.log(`\n${target.packageName}: ${currentVersion} -> ${nextVersion}`);
  if (publishedVersion) {
    console.log(`Latest npm version: ${publishedVersion}`);
  }
  run("npm", ["--workspace", target.packageName, "run", "typecheck"]);
  run("npm", ["--workspace", target.packageName, "pack", "--dry-run"]);

  const publishArgs = [
    "--workspace",
    target.packageName,
    "publish",
    "--access",
    "public",
    "--tag",
    tag,
  ];

  if (otp) {
    publishArgs.push("--otp", otp);
  }

  if (isDryRun) {
    publishArgs.push("--dry-run");
  }

  run("npm", publishArgs);
}

function ensureNpmLogin() {
  const result = spawnSync("npm", ["whoami"], {
    encoding: "utf8",
    stdio: ["inherit", "pipe", "pipe"],
  });

  if (result.status === 0) {
    console.log(`npm logged in as ${result.stdout.trim()}`);
    return;
  }

  console.log("npm login required. Follow the browser/terminal prompt, then the release will continue.");
  run("npm", ["login", "--auth-type=web"]);
}

function bumpVersion(version, releaseType) {
  const match = version.match(/^(\d+)\.(\d+)\.(\d+)$/);

  if (!match) {
    throw new Error(`Cannot bump non-semver version "${version}".`);
  }

  const major = Number(match[1]);
  const minor = Number(match[2]);
  const patch = Number(match[3]);

  if (releaseType === "major") {
    return `${major + 1}.0.0`;
  }

  if (releaseType === "minor") {
    return `${major}.${minor + 1}.0`;
  }

  return `${major}.${minor}.${patch + 1}`;
}

function getPublishedVersion(packageName) {
  const result = spawnSync("npm", ["view", packageName, "version"], {
    encoding: "utf8",
    stdio: ["inherit", "pipe", "pipe"],
  });

  if (result.status !== 0) {
    return undefined;
  }

  const version = result.stdout.trim();
  return version || undefined;
}

function compareVersions(left, right) {
  const leftParts = left.split(".").map(Number);
  const rightParts = right.split(".").map(Number);

  for (let index = 0; index < 3; index += 1) {
    const difference = (leftParts[index] ?? 0) - (rightParts[index] ?? 0);

    if (difference !== 0) {
      return difference;
    }
  }

  return 0;
}

function getOption(name) {
  const prefix = `${name}=`;
  const inline = args.find((arg) => arg.startsWith(prefix));

  if (inline) {
    return inline.slice(prefix.length);
  }

  const index = args.indexOf(name);

  if (index >= 0) {
    return args[index + 1];
  }

  return undefined;
}

function run(command, commandArgs) {
  const result = spawnSync(command, commandArgs, {
    stdio: "inherit",
  });

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

function printUsage() {
  console.log(`Usage:
  npm run release:ui
  npm run release:native-ui
  npm run release:all

Options:
  -- --bump patch       Increment patch version. Default.
  -- --bump minor       Increment minor version.
  -- --bump major       Increment major version.
  -- --tag latest       Publish with an npm dist tag. Default latest.
  -- --otp 123456       Pass an npm two-factor auth code.
  -- --dry-run          Build, pack, and run npm publish in dry-run mode.
`);
}
