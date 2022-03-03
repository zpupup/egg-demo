import { Application } from 'egg';

export default function(app: Application) {
  const { STRING, BIGINT, DATE } = app.Sequelize;

  const Inventory = app.model.define('inventory', {
    id: {
      type: STRING,
      primaryKey: true,
      // autoIncrement: true,
    },
      currentInventory: { type: BIGINT, field: 'current_inventory' },
      defaultInventory: { type: BIGINT, field: 'default_inventory' },
      createdAt: { type: DATE, field: 'created_at' },
      updatedAt: { type: DATE, field: 'updated_at' },
  });

  return class extends Inventory {
      declare id: string;
      declare currentInventory: number;
      declare defaultInventory: number;
      declare createdAt: Date;
      declare updatedAt: Date;
  }
}
