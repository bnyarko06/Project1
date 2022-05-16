const url = "https://api.quotable.io/random"

const $quote = $('#quote');
const $author = $('#author');
const $getQuote = $('#getQuote');



$getQuote.on('click', getQuote);


function getQuote(event) {
    console.log(event)
    event.preventDefault()
    $.ajax(url).then(function (data) {
        $quote.text(data.content)
        $author.text(data.author),
            function (error) {
                console.log("Something is wrong");
                console.log(error);
            }
    }
    )
}
