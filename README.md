# extract-url-from-sentence

## Description
文章からウェブサイトURLを配列で返すライブラリ

## Version
v1.0.0

## Usage

### 必要要件

- Node: 16系
- npm: 8系
- typescript: 4.4〜(本ライブラリのtypescriptのバージョンは `4.7.4`)

### install

1. `package.json` の `dependencies` または `devDependencies` に以下のように追記

``` package.json
  "extract-url-from-sentence": "https://github.com/Black-Yamasan/extract-url-from-sentence.git"
```

2. `package.json` の `devDependencies` に以下のように追記

``` package.json
  "@types/extract-url-from-sentence": "https://github.com/Black-Yamasan/extract-url-from-sentence.git"
```

3. ライブラリを利用するリポジトリで `npm i` または `yarn` を実行


## Example

eg. [Example Code](https://github.com/Black-Yamasan/extract-url-from-sentence/blob/main/examples/example.ts)

``` typescript
import extractUrlFromSentence from 'extract-url-from-sentence'

const text = `
url: https://hogehoge.hoge\n
url2: hogehoge2.hoge
`

const result = extractUrlFromSentence(text)
// expected output: ["https://hogehoge.hoge", "hogehoge2.hoge"]
```
