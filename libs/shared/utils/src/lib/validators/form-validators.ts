import { FormControl } from '@angular/forms';
import { regex } from './regex';

export function validateEmail(c: FormControl) {
  return regex.EMAIL_REGEXP.test(c.value) ? null : {
    validateEmail: {
      valid: false
    }
  };
}

export function validateNumber(c: FormControl) {
  return regex.NUMBER_REGEXP.test(c.value) ? null : {
    validateNumber: {
      valid: false
    }
  };
}

export function validateUrl(c: FormControl) {
  return regex.URL_REGEXP.test(c.value) ? null : {
    validateUrl: {
      valid: false
    }
  };
}

export function validateSubdomain(c: FormControl) {
  console.log(regex.SUBDOMAIN_REGEXP.test(c.value), c)
  return regex.SUBDOMAIN_REGEXP.test(c.value) ? null : {
    validateSubdomain: {
      valid: false
    }
  };
}