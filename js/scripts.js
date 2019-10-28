var suits = ["clubs", "spades", "hearts", "diamonds"];
var cards = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"]
$(document).ready(function()
{
  suits.forEach(function(suit)
  {
    cards.forEach(function(card)
    {
      console.log(card + " of " + suit);
      $(".list-cards").append("<li>" + card + " of " + suit + "</li>") 
    });
  });
});
