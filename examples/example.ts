import extractUrlFromSentence from '../src/extractUrlFromSentence'

const example1 = `
あいうえおウェブサイトhttps://a1.hogedomain.com/\n
あいうえおwww.a2.hogedomain.comあいうえおhttps://a3.hogedomain.comかきくけこ
メールアドレスb1@hogedomain.com\n
めーるあどれすb2@hogedomain.comメールアドレスb3@hogedomain.comうぇぶさいとhttps://a4.hogedomain.comかきくけこ\n

aiueo www.a5.hogedomain.com web site url\n
aiueo https://a6.hogedomain.com email b4@hogedomain.com\n

1. あいうえおhttps://a7.hogedomain.com かきくけこあいうえお a8.hogedomain.comかきくけこ\n
2. あいうえおhttps://a9.hogedomain.comメールアドレスb5@hogedomain.comあいうえお\n

a. aiueo https://a10.hogedomain.com?q=hoge&fuga=fuga1 aiueo\n
b. b6@hogedomain.com

🐱https://a11.hogedomain.com?q=hoge&fuga=fuga1🐈\n
🐱b7@hogedomain.com🐈
`

const example2 = `
あいうえおhttps://a1.hogedomain.com/うぇぶさいとのURL\n
メールアドレスb1@hogedomain.com\n
`

extractUrlFromSentence(example1)
extractUrlFromSentence(example2)
