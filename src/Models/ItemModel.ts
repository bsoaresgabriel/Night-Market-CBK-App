// ItemModel.ts
import { Item } from './Item';

export class ItemModel implements Item {
  id: string;
  itemImage: string;
  itemName: string;
  itemManufacturer: string;
  corpoLogo: string;
  itemSalesPitch: string;
  itemFunctionality: string;

  constructor(
    id: string,
    itemImage: string,
    itemName: string,
    itemManufacturer: string,
    corpoLogo: string,
    itemSalesPitch: string,
    itemFunctionality: string
  ) {
    this.id = id;
    this.itemImage = itemImage;
    this.itemName = itemName;
    this.itemManufacturer = itemManufacturer;
    this.corpoLogo = corpoLogo;
    this.itemSalesPitch = itemSalesPitch;
    this.itemFunctionality = itemFunctionality;
  }
}