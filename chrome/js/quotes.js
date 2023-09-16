const quotes = [
  {
    quote: "I never dreamed about success, I worked for it.",
    author: "Estee Lauder",
  },
  {
    quote: "Do not try to be original, Just try to be good.",
    author: "Paul Rand",
  },
  {
    quote: "Do not be afraid to give up the good to go for the great.",
    author: "John D. Rockefeller",
  },
  {
    quote: "It is better to fail in originality than to succeed in imtation.",
    author: "Herman Melville",
  },
  {
    quote:
      "Success is walking frin failure to failure with no loss of enthusiasm.",
    author: "Winston Churchil",
  },
  {
    quote: "All progress takes place outside the comfort zone.",
    author: "Michael John Bobak",
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    quote: "In order to succeed, we must first believe that we can.",
    author: "Nikos Kazantzakis",
  },
  {
    quote:
      "The only place where success comes befire work is in the dictionay.",
    author: "Vidal Sassoon",
  },
  {
    quote: "Rome is not built in a day.",
    author: "Somebody",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
