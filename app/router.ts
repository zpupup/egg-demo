'use strict';

import { Application } from 'egg';

export default function(app: Application) {
  const { controller, router } = app;

  router.get('/', controller.home.index);
  router.get('/inventory/:id/order', controller.inventory.order);
}
