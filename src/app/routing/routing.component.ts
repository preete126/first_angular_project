import { Component,OnInit  } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css']
})
export class RoutingComponent implements OnInit {
  title = 'HopitalManagementSystem';
  reactiveForm: FormGroup;
  passer:any;
  ngOnInit() {
    this.reactiveForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required])
    })
    this.passer  = this.reactiveForm.controls
  };
  message: string
  onSubmit(){
    // if (this.passer.email.value == null || this.passer.firstName.value == null || this.passer.lastName.value == null || this.passer.password.value == null) {
    //   this.message = 'Please fill out the required fields'
    //   console.log(this.message);
      
    // }
    if (this.passer.password.errors) {
      if (this.passer.password.errors.required) {
        this.message = 'Please fill out the required fields'
      }
      else if (this.passer.password.errors.minlength) {
        this.message = 'Your password must be at least 8 characters long'
      }
    }
    else if (this.passer.email.errors){
      if (Validators.email) {
        this.message = 'Please input valid email address'
      }
    }
    else if(this.passer.firstName.errors){
      if (this.passer.firstName.errors.required) {
        this.message = 'Please fill out the required fields'
      }
    }else if(this.passer.lastName.errors){
      if (this.passer.lastName.errors.required) {
        this.message = 'Please fill out the required fields'
      }
    }
    
    // console.log(this.passer);
    
    
  }

}
