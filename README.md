# react-ui-component-library

A production-ready public React UI component library monorepo using TypeScript, pnpm workspaces, Turborepo, Changesets, Vitest, React Testing Library, and a Next.js documentation site.

The public package is `@jixic/react-ui`. It is built for React and Next.js web applications, but the package itself does not depend on Next.js APIs.

## Installation

```bash
pnpm add @jixic/react-ui react react-dom
```

```tsx
import { Button, Card, CardContent, Input } from "@jixic/react-ui";
import "@jixic/react-ui/styles.css";

export function Example() {
  return (
    <Card>
      <CardContent>
        <Input label="Email" type="email" />
        <Button>Continue</Button>
      </CardContent>
    </Card>
  );
}
```

## Local Development

```bash
pnpm install
pnpm dev
```

Useful commands:

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm build
pnpm build:ui
pnpm build:docs
```

## Versioning

Create a changeset for public package changes:

```bash
pnpm changeset
```

Then version packages:

```bash
pnpm version-packages
```

## Publishing to npm

Before publishing, confirm your npm account owns the `@jixic` scope and update author, repository, and license ownership fields.

Local package verification:

```bash
pnpm install --frozen-lockfile
pnpm lint
pnpm typecheck
pnpm test
pnpm build
cd packages/ui
npm pack --dry-run
```

The release workflow is configured for npm trusted publishing through GitHub OIDC. It publishes from `packages/ui` with `npm publish --access public` and does not require an npm token.

Required trusted publishing configuration:

- Enable GitHub Actions for the repository.
- Push this repository to GitHub.
- On npmjs.com, configure a trusted publisher for `@jixic/react-ui`.
- Use workflow filename `release.yml`.
- Use environment name `npm-production`.
- Allow `npm publish`.
- Configure the `npm-production` environment in GitHub if you want manual approval before publish.

If npm does not allow trusted publishing before the first version exists, publish `@jixic/react-ui@0.1.0` once manually with a one-time password or a granular access token with publish permission, then enable trusted publishing for future releases.

## Package Design

- React and React DOM are peer dependencies and are not bundled.
- Consumers import only from the root package.
- Styles are shipped as `@jixic/react-ui/styles.css`.
- Theme tokens use CSS variables and support light and dark themes.
- Type declarations and source maps are generated during build.

## License

MIT. See [LICENSE](./LICENSE).

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md).
