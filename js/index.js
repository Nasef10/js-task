
var quotes = [
    "“Be yourself; everyone else is already taken.” - Oscar Wilde",
    "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.” - Albert Einstein",
    "“In three words I can sum up everything I've learned about life: it goes on.” - Robert Frost",
    "“If you tell the truth, you don't have to remember anything.” - Mark Twain",
    "“Without music, life would be a mistake.” - Friedrich Nietzsche",
    "“We accept the love we think we deserve.” - Stephen Chbosky",
    "“It is our choices, Harry, that show what we truly are, far more than our abilities.” - J.K. Rowling",
    "“Success is not final, failure is not fatal: It is the courage to continue that counts.” - Winston S. Churchill",
    "“Do what you can, with what you have, where you are.” - Theodore Roosevelt",
    "“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.” - Ralph Waldo Emerson"
  ];
  
  var colors = [
    "#FF6F61", "#6B5B95", "#88B04B", "#F7CAC9", "#92A8D1",
    "#F4A460", "#EFC050", "#45B8AC", "#A8D5BA", "#D65076"
  ];
  
  var lastIndex = -1;
  
  
  function getRandomIndex() {
    var randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === lastIndex);
    lastIndex = randomIndex;
    return randomIndex;
  }
  
  
  document.getElementById("new-quote").addEventListener("click", function () {
    var index = getRandomIndex();
    var quoteContainer = document.getElementById("quote-container");
    quoteContainer.textContent = quotes[index];
    quoteContainer.style.backgroundColor = colors[index];
  });
  