// export type EntityType = 'input' | 'textarea' | 'date'

// export interface EntityMetadataArgs {

//   /**
//    * Class to which table is applied.
//    * Function target is a table defined in the class.
//    * String target is a table defined in a json schema.
//    */
//   target: Function | string;

//   /**
//    * Table's name. If name is not set then table's name will be generated from target's name.
//    */
//   name?: string;

//   /**
//    * Table type. Tables can be abstract, closure, junction, embedded, etc.
//    */
//   type: EntityType;

//   /**
//      * Database name. Used in MySql and Sql Server.
//      */
//   database?: string;

//   /**
//    * Schema name. Used in Postgres and Sql Server.
//    */
//   schema?: string;
// }
// /**
//  * Describes all entity's options.
//  */
// export interface EntityOptions {

//   /**
//    * Table name.
//    * If not specified then naming strategy will generate table name from entity name.
//    */
//   name?: string;
// }

// // import {getMetadataArgsStorage } from "../../";
// // import { TableMetadataArgs } from "../../metadata-args/TableMetadataArgs";

// export function Entity(options?: EntityOptions): Function;

// /**
//  * This decorator is used to mark classes that will be an entity (table or document depend on database type).
//  * Database schema will be created for all classes decorated with it, and Repository can be retrieved and used for it.
//  */
// export function Entity(name?: string, options?: EntityOptions): Function;

// /**
//  * This decorator is used to mark classes that will be an entity (table or document depend on database type).
//  * Database schema will be created for all classes decorated with it, and Repository can be retrieved and used for it.
//  */
// export function Entity(nameOrOptions?: string | EntityOptions, maybeOptions?: EntityOptions): Function {
//   const options = (typeof nameOrOptions === "object" ? nameOrOptions as EntityOptions : maybeOptions) || {};
//   const name = typeof nameOrOptions === "string" ? nameOrOptions : options.name;

//   return function (target: Function) {
//     getMetadataArgsStorage().tables.push({
//       target: target,
//       name: name,
//       type: "regular",
//       orderBy: options.orderBy ? options.orderBy : undefined,
//       engine: options.engine ? options.engine : undefined,
//       database: options.database ? options.database : undefined,
//       schema: options.schema ? options.schema : undefined,
//       synchronize: options.synchronize
//     } as TableMetadataArgs);
//   };
// }

// // export function EntitySchema(constructor: Function) {

// // }

// declare type EntityClassDecorator = <TFunction extends Function>(
//   target: TFunction
// ) => TFunction | void;

// declare type EntityPropertyDecorator = (
//   target: Object,
//   propertyKey: string | symbol
// ) => void;

// declare type EntityMethodDecorator = <T>(
//   target: Object,
//   propertyKey: string | symbol,
//   descriptor: TypedPropertyDescriptor<T>
// ) => TypedPropertyDescriptor<T> | void;

// declare type EntityParameterDecorator = (
//   target: Object,
//   propertyKey: string | symbol,
//   parameterIndex: number
// ) => void;
