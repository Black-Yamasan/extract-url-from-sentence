export const extractUrlFromSentence = (sentence: string): string[] =>
{
  const urlAndEmailRule: RegExp = /(?!.*<)([a-z0-9@/:-]{2,})([.]{1,})(.*)+[\w/]{2,}/gi
  const emailRule: RegExp = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/gi
  const urlAndEmailPattern: RegExp = new RegExp(urlAndEmailRule)
  const hasUrlText: boolean = urlAndEmailPattern.test(sentence)

  if (!hasUrlText) {
    return []
  }

  let duplecatedSentence: string = sentence.slice()

  const urlAndEmailPatternText: RegExpMatchArray = duplecatedSentence.match(urlAndEmailPattern)

  // remove multi byte string
  const extractSingleByteText: string[] = urlAndEmailPatternText.map((text) => {
    const duplicatedText: string = text.slice()
    return duplicatedText.split(/[^\x01-\x7E]/gm)
  })
    .flat()
    .filter((singleByteText) => singleByteText.length > 0)

  // remove white space and email
  const extractUrlText: string[] = extractSingleByteText.map((text) => {
    const duplicatedText: string = text.slice()
    return duplicatedText.split(/\s/gi)
  })
    .flat()
    .filter((text) => {
      const pattern: RegExp = new RegExp(urlAndEmailRule)
      return pattern.test(text)
    })
    .filter((text) => {
      const emailPattern: RegExp = new RegExp(emailRule)
      return !emailPattern.test(text)
    })
  console.log(extractUrlText)
  
  return extractUrlText 
}
