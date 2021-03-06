// This file is created by egg-ts-helper@1.30.2
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportInventory from '../../../app/service/inventory';
import ExportTest from '../../../app/service/test';

declare module 'egg' {
  interface IService {
    inventory: AutoInstanceType<typeof ExportInventory>;
    test: AutoInstanceType<typeof ExportTest>;
  }
}
