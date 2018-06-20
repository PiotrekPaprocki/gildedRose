const {Shop, Item} = require('../src/gilded_rose');
const expect = require('expect');

describe("Gilded Rose", function () {
  const testCases = [
    {
      name: 'name',
      items: [
        new Item("Aged Brie", 10, 10),
        new Item('+5 Dexterity Vest', 10, 20),
        new Item('+5 Dexterity Vest', 10, 60),
        new Item('Aged Brie', 2, 60),
        new Item('Aged Brie', 2, 0),
        new Item('Aged Brie', 0, 2),
        new Item('Elixir of the Mongoose', 5, 7),
        new Item('Sulfuras, Hand of Ragnaros', 0, 80),
        new Item('Sulfuras, Hand of Ragnaros', -1, 80),
        new Item('Sulfuras, Hand of Ragnaros', 10, 80),
        new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20),
        new Item('Backstage passes to a TAFKAL80ETC concert', 10, 49),
        new Item('Backstage passes to a TAFKAL80ETC concert', 5, 49),
        new Item('Backstage passes to a TAFKAL80ETC concert', 5, 48),
        new Item('Backstage passes to a TAFKAL80ETC concert', 5, 60),
      ],
      expectedItems: [
        {"name": "Aged Brie", "quality": 11, "sellIn": 9},
        {"name": "+5 Dexterity Vest", "quality": 19, "sellIn": 9},
        {"name": "+5 Dexterity Vest", "quality": 59, "sellIn": 9},
        {"name": "Aged Brie", "quality": 60, "sellIn": 1},
        {"name": "Aged Brie", "quality": 1, "sellIn": 1},
        {"name": "Aged Brie", "quality": 4, "sellIn": -1},
        {"name": "Elixir of the Mongoose", "quality": 6, "sellIn": 4},
        {"name": "Sulfuras, Hand of Ragnaros", "quality": 80, "sellIn": 0},
        {"name": "Sulfuras, Hand of Ragnaros", "quality": 80, "sellIn": -1},
        {"name": "Sulfuras, Hand of Ragnaros", "quality": 80, "sellIn": 10},
        {"name": "Backstage passes to a TAFKAL80ETC concert", "quality": 21, "sellIn": 14},
        {"name": "Backstage passes to a TAFKAL80ETC concert", "quality": 50, "sellIn": 9},
        {"name": "Backstage passes to a TAFKAL80ETC concert", "quality": 50, "sellIn": 4},
        {"name": "Backstage passes to a TAFKAL80ETC concert", "quality": 50, "sellIn": 4},
        {"name": "Backstage passes to a TAFKAL80ETC concert", "quality": 60, "sellIn": 4},
      ],
    },
  ];

  testCases.forEach((testCase) => {
    it(`should output expected items for ${testCase.name}`, () => {
      const gildedRose = new Shop(testCase.items);
      const items = gildedRose.updateQuality();
      expect(items).toEqual(testCase.expectedItems);
    })
  })
});
