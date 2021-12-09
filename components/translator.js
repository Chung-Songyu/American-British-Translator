const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require('./british-only.js');

class Translator {
  toBritish(text) {
    const originalText = text.slice(0);
    let replaceCounter = 0;

    for(const [key, value] of Object.entries(americanOnly)) {
      let regexText = "\\b" + key + "\\b";
      let regex = new RegExp(regexText, "ig");
      if(regex.test(originalText)) {
        replaceCounter++;
        text = text.replace(regex, "<span class=\"highlight\">" + value + "</span>");
      };
    };

    for(const [key, value] of Object.entries(americanToBritishSpelling)) {
      let regexText = "\\b" + key + "\\b";
      let regex = new RegExp(regexText, "ig");
      if(regex.test(originalText)) {
        replaceCounter++;
        text = text.replace(regex, "<span class=\"highlight\">" + value + "</span>");
      };
    };

    for(let [key, value] of Object.entries(americanToBritishTitles)) {
      let regexText = "\\b" + value + "\\b\\.";
      let regex = new RegExp(regexText, "ig");
      value = value[0].toUpperCase() + value.substring(1);
      if(regex.test(originalText)) {
        replaceCounter++;
        text = text.replace(regex, "<span class=\"highlight\">" + value + "</span>");
      };
    };

    let timeRegex = /(\d?\d):(\d\d)/;
    if(originalText.match(timeRegex)) {
      replaceCounter++;
      let match = originalText.match(timeRegex);
      text = text.replace(timeRegex, "<span class=\"highlight\">" + match[1] + "." + match[2] + "</span>");
    };

    if(replaceCounter==0) {
      return {text: originalText, translation: "Everything looks good to me!"};
    } else {
      return {text: originalText, translation: text};
    };
  };

  toAmerican(text) {
    const originalText = text.slice(0);
    let replaceCounter = 0;

    for(const [key, value] of Object.entries(britishOnly)) {
      let regexText = "\\b" + key + "\\b";
      let regex = new RegExp(regexText, "ig");
      if(regex.test(originalText)) {
        replaceCounter++;
        text = text.replace(regex, "<span class=\"highlight\">" + value + "</span>");
      };
    };

    for(const [key, value] of Object.entries(americanToBritishSpelling)) {
      let regexText = "\\b" + value + "\\b";
      let regex = new RegExp(regexText, "ig");
      if(regex.test(originalText)) {
        replaceCounter++;
        text = text.replace(regex, "<span class=\"highlight\">" + key + "</span>");
      };
    };

    for(let [key, value] of Object.entries(americanToBritishTitles)) {
      let regexText = "\\b" + value + "\\b";
      let regex = new RegExp(regexText, "ig");
      key = key[0].toUpperCase() + key.substring(1);
      if(regex.test(originalText)) {
        replaceCounter++;
        text = text.replace(regex, "<span class=\"highlight\">" + key + "</span>");
      };
    };

    let timeRegex = /(\d?\d)\.(\d\d)/;
    if(originalText.match(timeRegex)) {
      replaceCounter++;
      let match = originalText.match(timeRegex);
      text = text.replace(timeRegex, "<span class=\"highlight\">" + match[1] + ":" + match[2] + "</span>");
    };

    if(replaceCounter==0) {
      return {text: originalText, translation: "Everything looks good to me!"};
    } else {
      return {text: originalText, translation: text};
    };
  };
}

module.exports = Translator;
