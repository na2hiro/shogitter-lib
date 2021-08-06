# `shogitter-core`

`shogitter-core` is a core logic of [http://shogitter.com](http://shogitter.com)

## Status

* This library is currently NOT used by the shogitter itself. shogitter still uses code written in PHP (it wasn't an apparently bad choice in 2010 when I was an undergrad student!), and `shogitter-core` is an almost direct translation of PHP code to TypeScript.
  * Because of that, some code look not fluent in TypeScript.
  * Though, it's not a totally "poetic" code: There's a prototype of a new version of shogitter called ["shogitter alpha"](https://alpha.shogitter.com) which uses this code. It's only a prototype and I decided not to release this as a replacement of existing shogitter.
* The code is covered by some integration tests. You can see how to use it

## Plan

* Integrate `shogitter-core` to the shogitter itself
* (optional) Provide an example UI to play around with what `shogitter-core` can do

## File structure
* `integration-tests`: Integration tests
* `src`: main source code
  * `db`: definitions of rules. It looks like an output of `mongoexport` command because it is.
    * `koma.ts`: definition of pieces
    * `rule.ts`: definition of rules
    * `rulegenre.ts`: definition of rule genres (categories)
  * `strategy`: "strategies" which can customize behavior of `Shogi` class

## Disclaimer
* There's no clearly defined interface. I can change any interface at any moment
