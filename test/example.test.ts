import extractUrlFromSentence from '../src/extractUrlFromSentence'

const sampleText1 = `
URL1つ目: https://a1.hogehoge.hoge
URL2つ目と3つ目:  https://a2.hogehoge.hogeウェブサイト https://a3.hogehoge.hoge
メールアドレス: b1@hogehoge.hoge
メールアドレスと4つ目のURL: b2@hogehoge.hoge web site url a4.hogehoge.hoge
`

describe('extractUrlFromSentence test', () => {

  test('文章中に含まれるURLの数をテスト', () => {
    expect(extractUrlFromSentence(sampleText1).length === 4)
  })

  test('先頭のウェブサイトURLをテスト', () => {
    expect(extractUrlFromSentence(sampleText1)[0] === 'https://a1.hogehoge.hoge')
  })
})
