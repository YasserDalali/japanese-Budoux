/* const start = performance.now(); // Start timing
 */

import { loadDefaultJapaneseParser } from "budoux";
function runParser() {

  const parser = loadDefaultJapaneseParser();
  const ele = document.querySelector(".word-wrap");
  ele.dataset.originalText = ele.innerHTML;

  parser.applyToElement(ele);
}

const fontsize = document.getElementById('fontsize');
fontsize.addEventListener('input', (event) => {
    const main = document.querySelector('main');
    main.style.fontSize = `${event.target.value}rem`;
})

const buttonCheck = document.getElementById('WWcheckbox');
buttonCheck.addEventListener('click', () => {
    if (!document.body.classList.contains('word-wrap')) {
        document.body.classList.add('word-wrap');
        buttonCheck.setAttribute('disabled', true);
        runParser();
    } else {
        document.body.classList.remove('word-wrap');
    }
});

const selectCSS = document.getElementById('selectCSS'); 
const p = document.querySelector('p');
selectCSS.addEventListener('change', () => {
    const lineBreakVal = selectCSS.value;
    p.className = `break-${lineBreakVal}`;
    console.log(document.body.style)
});