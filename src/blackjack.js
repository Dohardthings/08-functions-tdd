/**
 * Should return the basic numeric value of a card
 * @param  {String} cardName
 * @return {Number}
 */
function cardValue(cardName) {

if (cardName === 'ace') {
  return 11;
}

if (cardName === 'jack') {
  return 10;
}

if (cardName === 'queen') {
  return 10;
}

  if (cardName === 'king') {
    return 10;
  }

    else {return parseInt(cardName, 10)};
}

/**
 * Returns the numeric sum of two numbers
 * @param  {Number} a
 * @param  {Number} b
 * @return {Number}
 */

function sum(a, b) {
return a + b
};

/**
 * Returns if a dealer should split doubles
 * @param  {String} cardOne
 * @param  {String} cardTwo
 * @return {Boolean}
 */
function shouldSplit(cardOne, cardTwo) {
if (cardValue(cardOne) === cardValue(cardTwo)) {
  return true
}
else {return false}
};

/**
 * Returns if a dealer should hit given two cards
 * @param  {String} cardOne
 * @param  {String} cardTwo
 * @return {Boolean}
 */
function shouldHit(cardOne, cardTwo) {

  if (shouldSplit(cardOne,cardTwo)) {
    return false
  }

  if (cardValue(cardOne) + cardValue(cardTwo) < 17) {
    return true
  }
  else { return false }
};

/**
 * Returns what the dealer should do
 * @param  {String} cardOne
 * @param  {String} cardTwo
 * @return {String}
 */
function selectAction(cardOne, cardTwo) {
if (shouldSplit(cardOne,cardTwo)) {return 'split'}
else if (shouldHit(cardOne, cardTwo)) {return 'hit'}
else {return 'stay'}
};
