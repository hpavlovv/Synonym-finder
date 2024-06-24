// Information to reach API
const url = 'https://api.datamuse.com/words?';
const queryParams = 'rel_syn=';

// Selects page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// Async GET request function

const getSuggestions = async () => {
  const wordQuery = inputField.value;
  const endpoint = (`${url}${queryParams}${wordQuery}`);

  try {
    const response = await fetch(endpoint)
    if(response.ok) {
      const jsonResponse = await response.json();
      renderResponse(jsonResponse);
    }
  } catch (error) {
    console.log(error);
  }
}

// Clears previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  getSuggestions();
};

submit.addEventListener('click', displaySuggestions);
