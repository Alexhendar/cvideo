import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  templateUrl: 'register.html'
})


export class RegisterPage{
  private registForm: FormGroup;

  constructor(private  formBuilder: FormBuilder){
    this.registForm = this.formBuilder.group({
      username : ['', Validators.required],
      password : ['']
    });
  }

  register(){
    console.log(this.registForm.value)
  }
}
