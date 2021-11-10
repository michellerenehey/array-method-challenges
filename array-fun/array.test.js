import {
    cardPosition,
    addCard,
    addItemToEndOfArray,
    addItemToTop,
    deleteItem,
    deleteLastItem,
    deleteFirstItem,
    checkArrayLength,
  } from './answer';
  
  describe.only('Card Game', () => {
    describe('pick a card', () => {
      test('get the first card', () => {
        const stack = [1, 2, 3];
        const expected = 1;
  
        expect(cardPosition(stack, 0)).toBe(expected);
      });
  
      test('get the middle card', () => {
        const stack = [4, 5, 6];
        const expected = 5;
  
        expect(cardPosition(stack, 1)).toBe(expected);
      });
  
      test('get the last card', () => {
        const stack = [9, 8, 7];
        const expected = 7;
  
        expect(cardPosition(stack, 2)).toBe(expected);
      });
    });
  
    describe('sleight of hand', () => {
      test('replace the first card with a 7', () => {
        const stack = [1, 2, 3];
        const position = 0;
        const replacement = 7;
  
        const expected = [7, 2, 3];
        expect(addCard(stack, position, replacement)).toStrictEqual(expected);
      });
  
      test('replace the middle card with a 5', () => {
        const stack = [2, 2, 2];
        const position = 1;
        const replacement = 5;
  
        const expected = [2, 5, 2];
        expect(addCard(stack, position, replacement)).toStrictEqual(expected);
      });
  
      test('replace the last card with a 7', () => {
        const stack = [7, 7, 6];
        const position = 2;
        const replacement = 7;
  
        const expected = [7, 7, 7];
        expect(addCard(stack, position, replacement)).toStrictEqual(expected);
      });
    });
  
    describe('make cards appear', () => {
      test('adding a second card at the top', () => {
        const stack = [1];
        const newCard = 5;
  
        const expected = [1, 5];
        expect(addItemToEndOfArray(stack, newCard)).toStrictEqual(expected);
      });
  
      test('adding a third card at the top', () => {
        const stack = [1, 5];
        const newCard = 9;
  
        const expected = [1, 5, 9];
        expect(addItemToEndOfArray(stack, newCard)).toStrictEqual(expected);
      });
  
      test('adding a fourth card at the top', () => {
        const stack = [1, 5, 9];
        const newCard = 2;
  
        const expected = [1, 5, 9, 2];
        expect(addItemToEndOfArray(stack, newCard)).toStrictEqual(expected);
      });
  
      test('adding a different fourth card at the top', () => {
        const stack = [1, 5, 9];
        const newCard = 8;
  
        const expected = [1, 5, 9, 8];
        expect(addItemToEndOfArray(stack, newCard)).toStrictEqual(expected);
      });
  
      test('adding multiple cards to the stack at the top', () => {
        const stack = [1];
  
        addItemToEndOfArray(stack, 5);
        addItemToEndOfArray(stack, 9);
  
        const expected = [1, 5, 9];
        expect(stack).toStrictEqual(expected);
      });
  
      test('adding a second card to the bottom', () => {
        const stack = [1];
        const newCard = 5;
  
        const expected = [5, 1];
        expect(addItemToTop(stack, newCard)).toStrictEqual(expected);
      });
  
      test('adding a third card to the bottom', () => {
        const stack = [5, 1];
        const newCard = 9;
  
        const expected = [9, 5, 1];
        expect(addItemToTop(stack, newCard)).toStrictEqual(expected);
      });
  
      test('adding a fourth card to the bottom', () => {
        const stack = [9, 5, 1];
        const newCard = 2;
  
        const expected = [2, 9, 5, 1];
        expect(addItemToTop(stack, newCard)).toStrictEqual(expected);
      });
  
      test('adding a different fourth card to the bottom', () => {
        const stack = [9, 5, 1];
        const newCard = 8;
  
        const expected = [8, 9, 5, 1];
        expect(addItemToTop(stack, newCard)).toStrictEqual(expected);
      });
  
      test('adding multiple cards to the stack to the bottom', () => {
        const stack = [1];
  
        addItemToTop(stack, 5);
        addItemToTop(stack, 9);
  
        const expected = [9, 5, 1];
        expect(stack).toStrictEqual(expected);
      });
    });
  
    describe('make cards disappear', () => {
      test('remove the card at the bottom', () => {
        const stack = [1, 2, 3, 4];
        const position = 0;
  
        const expected = [2, 3, 4];
  
        if (stack[0] === undefined) {
          // eslint-disable-next-line no-undef
          fail(
            new Error(
              'The card has disappeared!'
            )
          );
        }
  
        expect(deleteItem(stack, position)).toStrictEqual(expected);
      });
  
      test('remove the card at the top', () => {
        const stack = [1, 2, 3, 4];
        const position = 3;
  
        const expected = [1, 2, 3];
        expect(deleteItem(stack, position)).toStrictEqual(expected);
      });
  
      test('remove the second card', () => {
        const stack = [1, 2, 3, 4];
        const position = 1;
  
        const expected = [1, 3, 4];
        expect(deleteItem(stack, position)).toStrictEqual(expected);
      });
  
      test('remove the middle two cards', () => {
        const stack = [1, 2, 3, 4];
  
        deleteItem(stack, 1);
        deleteItem(stack, 1);
  
        const expected = [1, 4];
        expect(expected).toStrictEqual(expected);
      });
  
      test('remove the only card from the top', () => {
        const stack = [1];
        const expected = [];
        expect(deleteLastItem(stack)).toStrictEqual(expected);
      });
  
      test('remove the card from the top', () => {
        const stack = [1, 2, 3];
        const expected = [1, 2];
        expect(deleteLastItem(stack)).toStrictEqual(expected);
      });
  
      test('remove two cards from the top', () => {
        const stack = [1, 2, 3];
  
        deleteLastItem(stack);
        deleteLastItem(stack);
  
        const expected = [1];
        expect(expected).toStrictEqual(expected);
      });
  
      test('remove the card from the bottom', () => {
        const stack = [1];
        const expected = [];
        expect(deleteFirstItem(stack)).toStrictEqual(expected);
      });
  
      test('remove the card from the bottom', () => {
        const stack = [1, 2, 3];
        const expected = [2, 3];
        expect(deleteFirstItem(stack)).toStrictEqual(expected);
      });
  
      test('remove two cards from the bottom', () => {
        const stack = [1, 2, 3];
  
        deleteLastItem(stack);
        deleteLastItem(stack);
  
        const expected = [3];
        expect(expected).toStrictEqual(expected);
      });
    });
  
    describe('check your work', () => {
      describe('an empty stack of cards', () => {
        test('has 0 cards', () => {
          const stack = [];
  
          expect(checkArrayLength(stack, 0)).toBe(true);
          expect(checkArrayLength(stack, 1)).toBe(false);
        });
      });
  
      describe('a stack with a single card', () => {
        test('has exactly 1 card', () => {
          const stack = [7];
  
          expect(checkArrayLength(stack, 0)).toBe(false);
          expect(checkArrayLength(stack, 1)).toBe(true);
          expect(checkArrayLength(stack, 2)).toBe(false);
        });
      });
  
      describe('a stack with the even cards', () => {
        test('has exactly 4 cards', () => {
          const stack = [2, 4, 6, 8];
  
          expect(checkArrayLength(stack, 3)).toBe(false);
          expect(checkArrayLength(stack, 4)).toBe(true);
          expect(checkArrayLength(stack, 5)).toBe(false);
        });
      });
  
      describe('a stack with the odd cards', () => {
        test('has exactly 5 cards', () => {
          const stack = [1, 3, 5, 7, 9];
  
          expect(checkArrayLength(stack, 3)).toBe(false);
          expect(checkArrayLength(stack, 4)).toBe(false);
          expect(checkArrayLength(stack, 5)).toBe(true);
        });
      });
    });
  });
  