import { FilterCondition } from '../interfaces/filter-condition.interface';
import { CondOperator } from '@nestjsx/crud-request';

    // : FilterCondition[] = [
export const filterOperators: Record<keyof typeof CondOperator, string> = {
  EQUALS: 'igual',
  NOT_EQUALS: 'diferente',
  GREATER_THAN: 'maior que',
  LOWER_THAN: 'menor que',
  GREATER_THAN_EQUALS: 'maior ou igual',
  // LOWER_THAN_EQAULS: 'menor ou igual',
  LOWER_THAN_EQUALS: 'menor ou igual',
  STARTS: 'começando',
  ENDS: 'terminando',
  CONTAINS: 'contém',
  EXCLUDES: 'não contém',
  IN: 'no intervalo',
  NOT_IN: 'fora do intervalo',
  IS_NULL: 'nulo',
  NOT_NULL: 'não nulo',
  BETWEEN: 'entre',
}

export type CondOperatorReadable = {
  [K in CondOperator]: string
}
export const condOperatorReadable: CondOperatorReadable = {
  'eq': 'igual',
  'ne': 'diferente',
  'gt': 'maior que',
  'lt': 'menor que',
  'gte': 'maior ou igual',
  'lte': 'menor ou igual',
  'starts': 'começando',
  'ends': 'terminando',
  'cont': 'contém',
  'excl': 'não contém',
  'in': 'no intervalo',
  'notin': 'fora do intervalo',
  'isnull': 'nulo',
  'notnull': 'não nulo',
  'between': 'entre'
}