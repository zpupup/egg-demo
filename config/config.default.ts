'use strict';

import { EggAppConfig, PowerPartial } from 'egg';

export default function(appInfo: EggAppConfig) {
  const config = {} as PowerPartial<EggAppConfig>;

  config.keys = appInfo.name + '123123';

  config.sequelize = {
    database: 'egg-sequelize-ts-dev',
  };

  const bizConfig = {
    // your biz config
  };

  // orm config
  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    database: 'example',
    username: 'root',
    password: 'example',
  };

  return {
    ...config as {},
    ...bizConfig,
  };
}
