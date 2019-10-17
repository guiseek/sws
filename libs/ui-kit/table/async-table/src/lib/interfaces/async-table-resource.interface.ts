import { AsyncTableMetadata, AsyncTableConfig, AsyncTableBehavior } from './index';

export interface AsyncTableResource<T = any> {
  meta: AsyncTableMetadata
  config?: AsyncTableConfig,
  behavior?: AsyncTableBehavior<T>
}