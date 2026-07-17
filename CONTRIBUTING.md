# Contributing

Thanks for improving `react-ui-component-library`.

## Setup

```bash
pnpm install
pnpm dev
```

## Quality Checks

Run these before opening a pull request:

```bash
pnpm format:check
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

## Component Guidelines

- Use TypeScript for every public API.
- Export components and types from `packages/ui/src/index.ts`.
- Do not add default exports.
- Do not add deep-import public API paths.
- Keep the UI package free of Next.js APIs.
- Use tokenized CSS variables instead of inline product colors.
- Include unit tests and docs for every component.
- Preserve accessible names, keyboard support, focus states, disabled states, and loading states.

## Changesets

Run this for package changes:

```bash
pnpm changeset
```

Choose the correct semver bump and write a concise public changelog entry.

## Publishing

Publishing is handled by GitHub Actions. Configure npm trusted publishing for this repository or add an `NPM_TOKEN` repository secret as a fallback. Never commit npm tokens.
