const button = document.querySelector(".new-quote"); //or #js-new-quote
button.addEventListener('click', getQuote);

const abutton = document.querySelector("#js-tweet");
abutton.addEventListener('click', showAnswer)

const endpoint = "https://trivia.cyberwisp.com/getrandomchristmasquestion";

async function getQuote() {
    // console.log("it worked!");
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw Error(response.ststusText);
        }
        const json = await response.json();
        // console.log(json.question);
        displayQuote(json.question);
    }
    catch (err) {
        console.log(err);
    alert('Failed to fetch new trivia');
    }
}

function displayQuote(quote) {
    const quoteText = document.querySelector("#js-quote-text");
    quoteText.textContent = quote;
}

getQuote();

