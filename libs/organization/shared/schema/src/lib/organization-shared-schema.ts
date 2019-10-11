import 'reflect-metadata';
import { Injectable, ReflectiveInjector, Injector } from '@angular/core';
import { Validators, FormGroup } from '@angular/forms';
import { FormValidator, FormElement } from '@sws/ui-kit/form/builder';



// @Injectable()
// class Engine {
// }

// @Injectable()
// class Car {
//   constructor(public engine: Engine) { }
// }

// // const providers = Injector
// const providers = ReflectiveInjector.resolve([Car, Engine]);
// const injector = ReflectiveInjector.fromResolvedProviders(providers);

// console.log(injector.get(Car))


// export function logReturnType(target: any, key: string) {
//   const t = Reflect.getMetadata("design:returntype", target, key);
//   console.log(t)

// }
// export function logType(target: any, key: string) {
//   // const t = Reflect.getMetadata()
//   const t = Reflect.getMetadata("design:type", target, key);
//   console.log(`${key} type: ${t.name}`);
//   console.log('t: ', t)
// }

// function logParamTypes(target: any, key: string) {
//   const types = Reflect.getMetadata("design:paramtypes", target, key);
//   const s = types.map(a => a.name).join();
//   console.log(`${key} param types: ${s}`);
// }  

// class Foo { }
// interface IFoo { }

// export class UserSchema {
//   email: string;
//   isActive: boolean;
//   @logReturnType
//   doSomething(
//     param1: string,
//     param2: number,
//     param3: Foo,
//     param4: { test: string },
//     param5: IFoo,
//     param6: Function,
//     param7: (a: number) => void,
//   ): number {
//     return 1
//   }
// }

// @Frozen
// export class CompanySchema {
//   @logType
//   name: string;

//   @logParamTypes
//   populate(
//     name: string,
//     domain: string,
//     description?: string,
//     users?: UserSchema[]
//   ) {}
// }

// function Frozen(constructor: Function) {
//   console.log(constructor)
//   Object.freeze(constructor);
//   Object.freeze(constructor.prototype);
// }

// console.log(Object.isFrozen(CompanySchema));


function FieldRequired() {
  return function (target: Object, key: string | symbol) {
    console.log('target: ', target, 'key: ', key)
    target['validations'] = [{
      name: 'required',
      message: 'Obrigatório',
      validator: Validators
    }]
  }
}

function UseState(seed: any) {
  return function (target, key) {
    target[key] = seed;
    target[`set${key.replace(/^\w/, c => c.toUpperCase())}`] = (val) => target[key] = val;
  };
}

// const getValidation = (name) => {
//   const required = {
//     name: 'required',
//     message: 'Obrigatório',
//     validator: Validators.required
//   }
//   const minlength = (min: number) => {
//     return {
//       name: 'minlength',
//       message:
//     }
//   }
// }

interface IElement {
  type?: string;
  name?: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  email?: boolean;
  minlength?: number;
  maxlength?: number;
  min?: number;
  max?: number;
}
function SelectAsyncElement() {

}

function Element(el: IElement) {
  const validations = []
  if (el.required) {
    validations.push({
      name: 'required',
      // message: 'Obrigatório',
      validator: Validators.required
    })
    delete el.required
  }
  if (el.email) {
    validations.push({
      name: 'email',
      validator: Validators.email
    })
    delete el.email
  }
  if (el.minlength) {
    validations.push({
      name: 'email',
      validator: Validators.minLength(el.minlength)
    })
    delete el.minlength
  }
  if (el.maxlength) {
    validations.push({
      name: 'email',
      validator: Validators.maxLength(el.maxlength)
    })
    delete el.maxlength
  }
  return function (target, key) {
    // target.elements.push(el)
    // const element: FormElement = el
    if (!target['elements']) {
      target['elements'] = []
    }
    const t = Reflect.getMetadata("design:type", target, key);

    el.name = key
    console.log('el: ', el)
    console.log(t.name)

    
    const tc = Reflect.getMetadata("design:type", target, key);
    console.table(tc)
    el['validations'] = validations
    target['elements'].push(
      el
    )
    console.log('target: ', target['elements'])

    // target.elements[key].name = key

    // switch ()
  }
}
interface IElementSchema<T> {
  elements: IElement[]
  endpoint: string;
}

export class CompanySchema {
  public elements: IElement[]
  collection = '/api/companies'
  keyValue = 'id'
  viewValue = 'name'

  @Element({
    type: 'input',
    label: 'Nome',
    placeholder: 'Nome da organização',
    required: true,
    maxlength: 100
  })
  name: string;

  @Element({
    type: 'input',
    label: 'Domínio',
    required: true,
    maxlength: 100
  })
  domain: string;

  @Element({
    type: 'input',
    label: 'Descrição'
  })
  description: string;
}
export class ProjectSchema {
  public form: FormGroup;
  public elements: IElement[]

  // @FieldRequired()
  // name: string

  // @UseState('required')
  // desc: string

  @Element({
    type: 'input',
    label: 'Nome',
    placeholder: 'Qual o nome do projeto?',
    required: true,
    maxlength: 100
  })
  name: string

  @Element({
    type: 'input',
    label: 'Descrição',
    placeholder: 'Escreva uma descrição',
    required: true,
    minlength: 2,
    maxlength: 6
  })
  description: string

  @Element({
    type: 'checkbox',
    label: 'Projeto ativo'
  })
  isActive: boolean

  @Element({
    type: 'asyncSelect',
    required: true
  })
  companyId: CompanySchema
}


export class IceCreamComponent {
  @Emoji()
  flavor = 'vanilla';
}

// Property Decorator
function Emoji() {
  return function (target: Object, key: string | symbol) {

    let val = target[key];

    const getter = () => {
      return val;
    };
    const setter = (next) => {
      console.log('updating flavor...');
      val = `🍦 ${next} 🍦`;
    };

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    });

  };
}