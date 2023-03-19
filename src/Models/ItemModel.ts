import { Item } from './Item';

export class ItemModel {
  static create(
    id: string,
    itemImage: string,
    itemName: string,
    itemManufacturer: string,
    corpoLogo: string,
    itemSalesPitch: string,
    itemFunctionality: string
  ): Item {
    return {
      id,
      itemImage,
      itemName,
      itemManufacturer,
      corpoLogo,
      itemSalesPitch,
      itemFunctionality,
    };
  }
}