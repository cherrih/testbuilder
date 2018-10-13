// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  if (cardNumber[0] === '3'){
      if (cardNumber.length === 14){
        if (cardNumber[1] === '8' || cardNumber[1] === '9'){
          return 'Diner\'s Club';
        }
      }
      if (cardNumber.length === 15){
        if (cardNumber[1] === '4' || cardNumber[1] === '7'){
           return 'American Express';
        }
      }
  }
  if (cardNumber[0] === '4'){
      if (cardNumber.length === 13){
        return 'Visa';
      }
      if (cardNumber.length === 16 || cardNumber.length === 19){
        if (cardNumber.slice(0, 4) !== '4903' && cardNumber.slice(0, 4) !== '4905' && cardNumber.slice(0, 4) !== '4911' && cardNumber.slice(0, 4) !== '4936'){
          return 'Visa';
        }
      }
  }
  if (cardNumber[0] === '5'){
      if (cardNumber.length === 16 && parseInt(cardNumber[1]) >= 1 && parseInt(cardNumber[1]) <= 5){
        return 'MasterCard';
      }
  }
    //Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
    //Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.
  if (cardNumber.length === 16 || cardNumber.length === 19){
      if (cardNumber.slice(0, 4) === '6011' || (parseInt(cardNumber.slice(0, 3)) >= 644 && parseInt(cardNumber.slice(0, 3)) <= 649) || cardNumber.slice(0, 2) === '65'){
        return 'Discover';
      }
    }
    if (cardNumber.length >= 12 && cardNumber.length <= 19){
        if (cardNumber.slice(0,4) === '5018' || cardNumber.slice(0,4) === '5020' || cardNumber.slice(0,4) === '5038' || cardNumber.slice(0,4) === '6304'){
          return 'Maestro';
        }
    }

//China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.


  if (cardNumber.length >= 16 && cardNumber.length <= 19){
    if (parseInt(cardNumber.slice(0, 6)) >= 622126 && parseInt(cardNumber.slice(0, 6)) <= 622925){
      return 'China UnionPay';
    }
    if (parseInt(cardNumber.slice(0, 3)) >= 624 && parseInt(cardNumber.slice(0, 3)) <= 626){
      return 'China UnionPay';
    }
    if (parseInt(cardNumber.slice(0, 4)) >= 6282 && parseInt(cardNumber.slice(0, 4)) <= 6288){
      return 'China UnionPay';
    }
  }
  
//Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.
//Heads up! Switch and Visa seem to have some overlapping card numbers - in any apparent conflict, you should choose the network with the longer prefix.

if (cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19){
  if (cardNumber.slice(0, 4) === '4903' || cardNumber.slice(0, 4) === '4905' || cardNumber.slice(0, 4) === '4911' || cardNumber.slice(0, 4) === '4936' || cardNumber.slice(0,4) === '6333' || cardNumber.slice(0,4) === '6759'){
    return 'Switch';
  }
  if (cardNumber.slice(0, 6) === '564182' || cardNumber.slice(0, 6) === '633110'){
    return 'Switch';
  }
}


};


