/* eslint-disable no-unused-vars */

/**
 * Retrieve card from cards array at the 0-based position
 *
 * @param {number[]} cards
 * @param {number} position
 *
 * @returns {number} the card
 */
export function cardPosition(cards, position) {
    return cards[position]; 
}
  
  /**
   * Exchange card with replacementCard at the 0-based position
   *
   * @param {number[]} cards
   * @param {number} position
   * @param {number} replacementCard
   *
   * @returns {number[]} the cards with the change applied
   */
export function addCard(cards, position, replacementCard) {
    cards[position] = replacementCard;
    return cards;
}
  
  /**
   * Insert newCard at the end of the cards array
   *
   * @param {number[]} cards
   * @param {number} newCard
   *
   * @returns {number[]} the cards with the newCard applied
   */
export function addItemToEndOfArray(cards, newCard) {
    cards.push(newCard); 
    return cards; 
}
  
  /**
   * Remove the card at the 0-based position
   *
   * @param {number[]} cards
   * @param {number} position
   *
   * @returns {number[]} the cards without the removed card
   */
export function deleteItem(cards, position) {
    cards.splice(position, 1); 
    return cards;  
}
  
  /**
   * Remove card from the end of the cards array
   *
   * @param {number[]} cards
   *
   * @returns {number[]} the cards without the removed card
   */
export function deleteLastItem(cards) {
    cards.pop(); 
    return cards;
}
  
  /**
   * Insert newCard at beginning of the cards array
   *
   * @param {number[]} cards
   * @param {number} newCard
   *
   * @returns {number[]} the cards including the new card
   */
export function addItemToTop(cards, newCard) {
    cards.unshift(newCard); 
    return cards;
}
  
  /**
   * Remove card from the beginning of the cards cards
   *
   * @param {number[]} cards
   *
   * @returns {number[]} the cards without the removed card
   */
export function deleteFirstItem(cards) {
    const remove = cards.shift();
    return cards;
}
  
  /**
   * Compare the number of cards with the given stackSize
   *
   * @param {number[]} cards
   * @param {number} stackSize
   *
   * @returns {boolean} true if there are exactly stackSize number of cards, false otherwise
   */
export function checkArrayLength(cards, stackSize) {
    if (cards.length === stackSize){
        return true;
    } else {
        return false;
    }
}
  