const facts_area = document.querySelector("#facts_area");
const button = document.querySelector("#button");
const numberFacts = [];
export function getFacts() {
  const input = document.querySelector("#number").value;
  const card_title = document.querySelector("#card_title");
  const card_text = document.querySelector("#card_text");
  fetch(`https://cors-anywhere.herokuapp.com/http://numbersapi.com/${input}`)
    .then((response) => response.text())
    .then((data) => {
      card_title.innerHTML = input;
      card_text.innerHTML = data;
	  if (!numberFacts.includes(data)) {
        numberFacts.push(data);
  }
	  facts_area.innerHTML = numberFacts.join(`<br>`);
	})};
	


button.addEventListener('click', getFacts);
