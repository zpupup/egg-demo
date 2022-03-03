'use strict';

import { Service } from 'egg';

export default class InventoryService extends Service {
  public async order(id: string) {

    const product = await this.ctx.model.Inventory.findByPk(id);

    if (!product) {
      this.ctx.throw(404, 'product not found');
    }

    if (product.currentInventory <= 0) {
      this.ctx.throw(400, 'product is sold out');
    }

    // In order to increment/decrement values of an instance without running into concurrency issues
    await product.decrement("currentInventory");

    return await product.reload();
  }

  public async reset(){
    const result = await this.ctx.model.Inventory.sequelize!.query("UPDATE `inventories` SET `current_inventory` = `default_inventory`");
    console.log("reset:",result);
    return result;
  }
}
