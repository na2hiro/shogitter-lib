# `shogitter-core`

`shogitter-core` is a core logic of [http://shogitter.com](http://shogitter.com)

## Status

- This library is used by shogitter, to generate legal move for each shogi variant rules and validate users' moves.
- Shogitter had been using PHP code (it wasn't an apparently bad choice in 2010 when I was an undergrad student!), and `shogitter-core` is an almost direct translation of PHP code to TypeScript.
  - Because of that, some code look not fluent in TypeScript.
- The code is covered by some integration tests. You can see how to use it

## Plan

- [x] Integrate `shogitter-core` to the shogitter itself
- [ ] (optional) Provide an example UI to play around with what `shogitter-core` can do

## File structure

- `integration-tests`: Integration tests
- `src`: main source code
  - `db`: definitions of rules. It looks like an output of `mongoexport` command because it is.
    - `koma.ts`: definition of pieces
    - `rule.ts`: definition of rules
    - `rulegenre.ts`: definition of rule genres (categories)
  - `strategy`: "strategies" which can customize behavior of `Shogi` class

## Disclaimer

- There's no clearly defined interface. I can change any interface at any moment
