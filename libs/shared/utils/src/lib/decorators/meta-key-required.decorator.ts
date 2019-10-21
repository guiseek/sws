import "reflect-metadata";

export const requiredMetadataKey = Symbol("required");

export function required(target: Object, propertyKey: string | symbol, parameterIndex: number) {
  const existingRequiredParameters: number[] = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyKey) || [];
  existingRequiredParameters.push(parameterIndex);
  Reflect.defineMetadata(requiredMetadataKey, existingRequiredParameters, target, propertyKey);
}

export function validate(target: any, propertyName: string, descriptor: TypedPropertyDescriptor<Function>) {
  const method = descriptor.value;
  descriptor.value = function () {
    const requiredParameters: number[] = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyName);
    if (requiredParameters) {
      for (const parameterIndex of requiredParameters) {
        if (parameterIndex >= arguments.length || arguments[parameterIndex] === undefined) {
          throw new Error(`Missing required argument.`);
        }
      }
    }

    return method.apply(this, arguments);
  }
}

export function validator<T>(target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<T>) {
  const set = descriptor.set;
  descriptor.set = function (value: T) {
    const type = Reflect.getMetadata("design:type", target, propertyKey);
    if (!(value instanceof type)) {
      throw new TypeError(`${propertyKey}: Invalid type.`);
    }
    set.call(target, value);
  }
}