(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.extractUrlFromSentence = factory());
})(this, (function () { 'use strict';

  const extractUrlFromSentence = (sentence) => {
      const urlAndEmailRule = /(?!.*<)([a-z0-9@/:-]{2,})([.]{1,})(.*)+[\w/]{2,}/gi;
      const emailRule = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/gi;
      const urlAndEmailPattern = new RegExp(urlAndEmailRule);
      const hasUrlText = urlAndEmailPattern.test(sentence);
      if (!hasUrlText) {
          return [];
      }
      let duplecatedSentence = sentence.slice();
      const urlAndEmailPatternText = duplecatedSentence.match(urlAndEmailPattern);
      // remove multi byte string
      const extractSingleByteText = urlAndEmailPatternText.map((text) => {
          const duplicatedText = text.slice();
          return duplicatedText.split(/[^\x01-\x7E]/gm);
      })
          .flat()
          .filter((singleByteText) => singleByteText.length > 0);
      // remove white space and email
      const extractUrlText = extractSingleByteText.map((text) => {
          const duplicatedText = text.slice();
          return duplicatedText.split(/\s/gi);
      })
          .flat()
          .filter((text) => {
          const pattern = new RegExp(urlAndEmailRule);
          return pattern.test(text);
      })
          .filter((text) => {
          const emailPattern = new RegExp(emailRule);
          return !emailPattern.test(text);
      });
      return extractUrlText;
  };

  return extractUrlFromSentence;

}));
//# sourceMappingURL=extractUrlFromSentence.umd.js.map
