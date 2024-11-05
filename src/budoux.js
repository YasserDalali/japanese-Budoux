import { loadDefaultJapaneseParser } from "budoux";

function runParser() {
  if (document.documentElement.lang === "ja") {
    const parser = loadDefaultJapaneseParser();
    const ele = document.querySelector("body");
    parser.applyToElement(ele);
  }
}
// Expose the runParser function so that it can be called
// from the browser console if needed.
window.runParser = runParser;
// Run the parser as soon as the page's DOM has finished loading.
window.onload = function () {
  console.log("onload");
  runParser();
};
