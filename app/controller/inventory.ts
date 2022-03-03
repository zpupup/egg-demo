'use strict';

import { Controller } from 'egg';

export default class InventoryController extends Controller {

  async order() {
    const ctx = this.ctx;
    const id = ctx.params.id;
    ctx.body = await ctx.service.inventory.order(id);
  }

}
