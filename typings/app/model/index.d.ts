// This file is created by egg-ts-helper@1.30.2
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportInventory from '../../../app/model/inventory';

declare module 'egg' {
  interface IModel {
    Inventory: ReturnType<typeof ExportInventory>;
  }
}
