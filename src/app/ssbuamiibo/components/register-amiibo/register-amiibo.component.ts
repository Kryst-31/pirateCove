import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register-amiibo',
  templateUrl: './register-amiibo.component.html',
  styleUrls: ['./register-amiibo.component.css']
})
export class RegisterAmiiboComponent {
  registerForm = new FormGroup({
    name: new FormControl()
  })

  constructor() {

  }
}
