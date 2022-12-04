const quotes = [
  {
    quote: "Be yourself; everyone else is already taken.  ",
    author : "Oscar Wilde",
  },
  {
    quote: "You only live once, but if you do it right, once is enough.  ",
    author : "Mae West",
  },
  {
    quote: "In three words I can sum up everything I've learned about life: it goes on.  ",
    author : "Robert Frost",
  },
  {
    quote: "Everything you can imagine is real.  ",
    author : "Pablo Picasso",
  },
  {
    quote: "Life isn't about finding yourself. Life is about creating yourself.  ",
    author : "George Bernard Shaw",
  },
  {
    quote: "The purpose of our lives is to be happy.  ",
    author : "Dalai Lama",
  },
  {
    quote: "Get busy living or get busy dying.  ",
    author : " Stephen King",
  },
  {
    quote: " Success is not an accident, success is actually a choice.  ",
    author : "Stephen Curry",
  },
  {
    quote: "We are here to add what we can to life, not to get what we can from life.  ",
    author : "William Osler",
  },
  {
    quote: "If you do the best you can, you have nothing to be ashamed of. A defeat is not a disgrace.  ",
    author : "  Dirk Nowitzki",
  },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuoto = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuoto.quote;
author.innerText = todaysQuoto.author;
