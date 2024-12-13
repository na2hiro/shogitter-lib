# Shogitter Lib

A monorepo of libraries for Shogi variants (変則将棋、フェアリー将棋). This is used for [将棋ったー (shogitter.com)](http://shogitter.com)

* [`@shogitter/core`](./packages/core) - Legal move generation and validation
* [`@shogitter/ai`](./packages/ai) - AI for shogi variants, which uses `core`

## How to publish

```shell
cd packages/core
pnpm version <patch|minor|major>
cd ../ai
pnpm version <patch|minor|major>
git add ../.. && git ci -m "chore: bump versions"
cd ../core && pnpm publish && cd ../ai && pnpm publish
```
