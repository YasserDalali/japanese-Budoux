import {loadDefaultJapaneseParser} from "budoux";


/**
 * Applies the Japanese parser to the element with class "word-wrap".
 * First, it stores the original text of the element in the data attribute "originalText".
 * Then, it runs the parser on the element.
 */
function runParser() {
    console.log("SUCCESS");
    
  const parser = loadDefaultJapaneseParser();
  
  const ele = document.querySelector("body");

  parser.applyToElement(ele);
}


const fontsize = document.getElementById('fontsize');
fontsize.addEventListener('input', (event) => {
    const main = document.querySelector('body');
    main.style.fontSize = `${event.target.value}rem`;
})

const buttonCheck = document.getElementById('WWcheckbox');
buttonCheck.addEventListener('click', () => {
        try { runParser(); }

        catch (e) { console.error("error: " + e); }

         finally { buttonCheck.classList.add('disabled'); } 
    });



    // Expose the runParser function so that it can be called
    // from the browser console if needed.
    window.runParser = runParser;
    // Run the parser as soon as the page's DOM has finished loading.
    window.onload = function() {
        console.log("onload");
        runParser();
    };

/* const selectCSS = document.getElementById('selectCSS'); 
const p = document.querySelector('p');
selectCSS.addEventListener('change', () => {
    const lineBreakVal = selectCSS.value;
    p.className = `break-${lineBreakVal}`;
    console.log(document.body.style)
}); */