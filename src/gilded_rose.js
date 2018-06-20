module.exports.Item = class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

module.exports.Shop = class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    return this.items.map((item) => {
      if (item.name === 'Sulfuras, Hand of Ragnaros') {
        return item;
      }
      item.sellIn = item.sellIn - 1;

      if (item.name === 'Aged Brie' && item.quality < 50) {
        item.quality += 1;
        if (item.sellIn < 0) {
          item.quality += 1;
        }
        return item;
      }

      if (item.name === 'Backstage passes to a TAFKAL80ETC concert' && item.quality < 50) {
        item.quality += 1;
        if (item.quality < 50) {
          if (item.sellIn < 10) {
            item.quality += 1;
          }
          if (item.sellIn < 5) {
            item.quality += 1;
          }
        }
        if (item.sellIn < 0) {
          item.quality = 0;
        }
        return item;
      }

      if (item.quality > 0) {
        if(item.sellIn < 0 ) {
          item.quality -= 1;
        }
        item.quality -= 1;
      }

      return item;
    });
  }
};
