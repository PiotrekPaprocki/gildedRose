const { Shop, Item } = require('../src/gilded_rose');
const expect = require('expect');

describe("Gilded Rose", function() {
  const testCases = [
    {
      name: 'name',
      items: [ new Item("Aged Brie", 10, 10) ],
      expectedItems: {"name": "Aged Brie", "quality": 11, "sellIn": 9},
    },
  ];

  testCases.forEach((testCase) => {
    it(`should output expected items for ${testCase.name}`, () => {
      const gildedRose = new Shop(testCase.items);
      const items = gildedRose.updateQuality();
      expect(items[0]).toEqual(testCase.expectedItems);
    })
  })
});
