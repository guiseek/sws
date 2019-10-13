import { AsyncTableMetadata, AsyncTableConfig, AsyncTableBehavior } from './index';

export interface AsyncTableResource {
  meta: AsyncTableMetadata
  config?: AsyncTableConfig,
  behavior?: AsyncTableBehavior
}