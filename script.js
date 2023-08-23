let txtInput = document.querySelector('#txt-input');
let btnTranslate = document.querySelector('#btn-translate');
let OutputDiv = document.querySelector('#txt-output');

let serverURL = 'https://api.funtranslations.com/translate/minion.json';

const getTranslationURL=input=>`${serverURL}?text=${input}`;


const errorHandler=error=>{
  console.log('error occured', error);
  alert('Server down!! Try later');
}

const clickHandler=()=>{
  let inputText = txtInput.value;

  fetch(getTranslationURL(inputText))
    .then((response) => response.json())
    .then((json) => {
      let translatedText = json.contents.translated;
      OutputDiv.innerText = translatedText;
    })
    .catch(errorHandler);
}

btnTranslate.addEventListener('click', clickHandler);
