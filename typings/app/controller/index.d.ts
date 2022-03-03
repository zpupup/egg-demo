// This file is created by egg-ts-helper@1.30.2
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome from '../../../app/controller/home';
import ExportInventory from '../../../app/controller/inventory';

declare module 'egg' {
  interface IController {
    home: ExportHome;
    inventory: ExportInventory;
  }
}
