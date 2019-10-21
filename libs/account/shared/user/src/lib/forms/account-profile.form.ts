import { FormGroup, FormBuilder, Validators } from '@angular/forms';

const fb = new FormBuilder
export const accountProfileForm = fb.group({
  name: ['', [
    Validators.required,
    Validators.maxLength(32)
  ]]
})