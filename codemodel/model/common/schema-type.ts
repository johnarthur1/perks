/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/** possible schema types that indicate the type of schema.
 * 
 * @note - this is essentially a discriminator for Schema
 */
export enum SchemaType {
  /** a collection of items */
  Array = 'array',

  /** an associative array (ie, dictionary, hashtable, etc) */
  Dictionary = 'dictionary',

  /** a true or false value */
  Boolean = 'boolean',

  /** an integer value */
  Integer = 'integer',

  /** a number value */
  Number = 'number',

  /** an object of some type */
  Object = 'object',

  /** a string  */
  String = 'string',

  /** a choice between one of several  values (ie, 'enum')
   * 
   * @description - this is essentially can be thought of as an 'enum' 
   * that is a choice between one of several strings
   */
  Choice = 'choice',

  /** a constant value */
  Constant = 'constant',

  And = 'and',

  Or = 'or',

  Xor = 'xor',

  Not = 'not',
  /** the type is not known.
   * 
   * @description it's possible that we just may make this an error 
   * in representation.
   */
  Unknown = 'unknown'
}

/** Compound schemas are used to construct complex objects or offer choices of a set of schemas.
 * 
 * (ie, allOf, anyOf, oneOf )
 * 
 * @note - historically 'allOf' was used to manage object hierarchy. 
 * 
   */
export type CompoundSchemaTypes =
  SchemaType.And |
  SchemaType.Or |
  SchemaType.Xor;

/** Schema types that are primitive language values */
export type PrimitiveSchemaTypes =
  SchemaType.Boolean |
  SchemaType.Integer |
  SchemaType.Number |
  SchemaType.String;

/** schema types that are non-object or complex types */
export type ValueSchemaTypes =
  PrimitiveSchemaTypes |
  SchemaType.Array |
  SchemaType.Choice;

/** schema types that can be objects */
export type ObjectSchemaTypes =
  SchemaType.And |
  SchemaType.Or |
  SchemaType.Dictionary |
  SchemaType.Object;

/** all schema types */
export type AllSchemaTypes =
  ValueSchemaTypes | ObjectSchemaTypes | SchemaType.Constant;
