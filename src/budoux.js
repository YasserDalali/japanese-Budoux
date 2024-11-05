import { loadDefaultJapaneseParser } from "budoux";
import { loadDefaultThaiParser } from "budoux";

function runParser() {
  if (document.documentElement.lang === "ja") {
    const parser = loadDefaultJapaneseParser();
    const ele = document.querySelector("body");
    parser.applyToElement(ele);
  }
  else if (document.documentElement.lang === "th") {
    const parser = loadDefaultThaiParser();
    const ele = document.querySelector("body");
    parser.applyToElement(ele);
  }

  // runParser should be run:
  // 1. On page load (After siteTran finishes transation and changes HTML lang)
  // 2. Whenever the language is changed.
}

window.runParser = runParser;
// Run the parser as soon as the page's DOM has finished loading.
