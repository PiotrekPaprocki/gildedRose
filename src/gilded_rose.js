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

      if (item.name !== 'Aged Brie' && item.name !== 'Backstage passes to a TAFKAL80ETC concert' && item.quality > 0) {
        item.quality = item.quality - 1;
      } else if (item.quality < 50) {
        item.quality = item.quality + 1;
        if (item.name === 'Backstage passes to a TAFKAL80ETC concert' && item.quality < 50) {
          if (item.sellIn < 11) {
            item.quality = item.quality + 1;
          }
          if (item.sellIn < 6) {
            item.quality = item.quality + 1;

          }
        }
      }

      if(item.sellIn < 0 && item.name === 'Aged Brie' && item.quality < 50) {

      }

      if (item.sellIn < 1) {
        if (item.name === 'Aged Brie' && item.quality < 50) {
          item.quality = item.quality + 1;
        } else if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
          item.quality = 0;
        } else if (item.quality > 0) {
          item.quality = item.quality - 1;
        }
      }

      item.sellIn = item.sellIn - 1;

      return item;
    });
  }
};
