# `@shogitter/ai`

## Development

```shell
pnpm dev
```

This generates following code to be consumed for local development:

* For `@shogitter/core`:
  * `/dist/` - ESM for Node.js
  * http://localhost:8090 (serves `/dist/`) - ESM for browsers to consume within WebWorkers
* For `@shogitter/ai`:
  * `lib/` - ESM for Node.js
  * http://localhost:8091 (serves `lib-devserver/`) - ESM for browsers to consume within WebWorkers
    * `lib-devserver` has a replaced imports on `@shogitter/core`. This is a workaround for [absence of importmaps in WebWorkers](https://github.com/WICG/import-maps/issues/2)

## License

`@shogitter/ai` is licensed under [GNU AGPL v3.0](./agpl-3.0.txt), except for usages in applications that are listed in [agpl-exempted-applications.txt](./agpl-exempted-applications.txt) where GPL v3.0 is applied. The list is subject to change in future with an approval of the original author, na2hiro.
