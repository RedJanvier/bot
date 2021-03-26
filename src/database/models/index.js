/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import { readdirSync } from 'fs';
import { basename as _basename, join } from 'path';

const db = {};
const basename = _basename(__filename);

readdirSync(__dirname)
  .filter((file) => file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js')
  .forEach((file) => {
    const Model = require(join(__dirname, file));
    const { modelName } = Model.default;
    db[modelName] = Model.default;
  });

export default db;
