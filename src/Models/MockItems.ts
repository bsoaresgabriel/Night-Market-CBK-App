import { Item } from './Item';
import { ItemModel } from './ItemModel';

export const generateMockItems = (count: number): Item[] => {
  const mockItems: Item[] = [];

  for (let i = 0; i < count; i++) {
    const id = `item-${i + 1}`;
    const itemImage = `https://example.com/item-${i + 1}-image.jpg`;
    const itemName = `Item Name ${i + 1}`;
    const itemManufacturer = `Manufacturer ${i + 1}`;
    const corpoLogo = `https://example.com/corpo-${i + 1}-logo.png`;
    const itemSalesPitch = `This is the sales pitch for Item ${i + 1}`;
    const itemFunctionality = `This is the functionality description for Item ${i + 1}`;

    const mockItem = ItemModel.create(
      id,
      itemImage,
      itemName,
      itemManufacturer,
      corpoLogo,
      itemSalesPitch,
      itemFunctionality
    );

    mockItems.push(mockItem);
  }

  return mockItems;
};