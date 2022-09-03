var quotes = [
    "Try To Fail Don\`t Fail To Try ",
    "Choose To Be Optimistic It Feels Better",
    "Start Every Day With An Attitude Of Gratitude",
]

function nextQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById("quoteDisplay").innerHTML = quotes[randomNumber];
}