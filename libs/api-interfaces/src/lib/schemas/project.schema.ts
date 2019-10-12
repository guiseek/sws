import "reflect-metadata";

const formatMetadataKey = Symbol("format");

function format(formatString: string) {
  return Reflect.metadata(formatMetadataKey, formatString);
}

function getFormat(target: any, propertyKey: string) {
  return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
}

const requiredMetadataKey = Symbol("required");
function required(target: Object, propertyKey: string | symbol, parameterIndex: number) {
  const existingRequiredParameters: number[] = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyKey) || [];
  existingRequiredParameters.push(parameterIndex);
  Reflect.defineMetadata(requiredMetadataKey, existingRequiredParameters, target, propertyKey);
}

function validate(target: any, propertyName: string, descriptor: TypedPropertyDescriptor<Function>) {
  const method = descriptor.value;
  descriptor.value = function () {
    const requiredParameters: number[] = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyName);
    if (requiredParameters) {
      for (const parameterIndex of requiredParameters) {
        if (parameterIndex >= arguments.length || arguments[parameterIndex] === undefined) {
          throw new Error("Missing required argument.");
        }
      }
    }

    return method.apply(this, arguments);
  }
}
export class Greeter {
  @format("Hello, %s")
  greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }

  greet() {
    const formatString = getFormat(this, "greeting");
    return formatString.replace("%s", this.greeting);
  }
  @validate
  getFilter(@required name?: string) {
    return "Hello " + name + ", " + this.greeting;
  }
}


// import 'reflect-metadata';
// import { IProject } from '../project.interface';

// export class ProjectSchema implements IProject, ISchemaConfig {
//   api: {
//     get: ''
//   }
//   form: {
//     name: null
//     placeholder?: null
//     required?: null
//     email?: null
//     minlength?: null
//     maxlength?: null
//     min?: null
//     max?: null
//   }
//   filter: {
//     select: IFilterProperty[]
//   } = {
//     select: []
//   }

//   id?: number;

//   // @Filter
//   // @Proper
//   @FilterProperty({
//     type: 'input',
//     label: 'Nome'
//   })
//   name?: string;
//   description: string;
//   isActive?: boolean;
//   companyId?: number;

//   userProjects
//   users
//   createdAt?: Date;
//   updatedAt?: Date;
//   // createdAt
// }

// // function Property(prop: IProperty) {
// // }
// function FormProperty(el: IFormProperty) {

// }
// function FilterProperty(el: IFilterProperty) {
//   return function (target, key) {
//     // target.elements.push(el)
//     // const element: FormElement = el
//     if (!target['elements']) {
//       target['elements'] = [];
//     }
//     // const t = Reflect.getMetadata('design:type', target, key);
//     el.field = key;
//     console.log(target)
//     // target['filter'].select.push(el)
//     // target.filter[key].select.push(el)
//     console.log('el: ', el);
//     // console.log(t.name);
//   }
// }
// export function getType(target: any, key: string) {
//   // const t = Reflect.getMetadata()
//   const t = Reflect.getMetadata("design:type", target, key);
//   console.log(`${key} type: ${t.name}`);
//   console.log('t: ', t)
// }

// export interface IFilterProperty {
//   type: string
//   field?: string
//   label: string
// }
// export interface ISchemaConfig {
//   api: {
//     get: string
//     post?: string
//     put?: string
//     delete?: string
//   }
//   filter: {
//     select: IFilterProperty[]
//     options?
//     // type: string
//     // field: string
//     // label: string
//   }
//   form: {
//     [P in keyof IFormProperty]: IFormProperty[P]
//   }
// }
// interface IFormProperty {
//   name: string;
//   placeholder?: string;
//   required?: boolean;
//   email?: boolean;
//   minlength?: number;
//   maxlength?: number;
//   min?: number;
//   max?: number;
// }
// export enum CommonTypeComponents {
//   String = 'input',
//   Date = 'date',
//   Boolean = 'checkbox'
// }
// export type commonTypes = String | Date | Boolean
// export function convertCommonTypes(type: commonTypes) {

// }

// const ConOperatorMapper = {

// }

// const schema = new ProjectSchema()