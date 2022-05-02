import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  public registrationForm: any;
  public hasAnError: boolean = true;
  public userObj: any;
  public errorMsg: string = '';
  public userService: any;
  public userArrayAtStepOne: any;
  public currentUserDetailsAtStepOne: any;
  public getCurrentUserIndexAtStepOne: any;

  constructor(
    private _fb: FormBuilder,
    private _userService: UserServiceService,
    public router: Router
  ) {}

  get email() {
    return this.registrationForm.get('email');
  }
  get password() {
    return this.registrationForm.get('password');
  }

  ngOnInit(): void {
    this.registrationForm = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      personalData: [[]],
      profileDetails: [[]],
      question:[[]]
    });
    this.userService = this._userService.getAllUser();
  }

  validselect(value: any) {
    if (value === 'default') {
      this.hasAnError = true;
    } else {
      this.hasAnError = false;
    }
  }

  submitForm() {
    this.userObj = this.registrationForm.value;
    console.log(this.userObj);
    if (this.userObj.email == '' && this.userObj.password == '') {
      this.errorMsg = 'Please fill in your details';
    } else if (this.userObj.email == '' || this.userObj.password == '') {
      this.errorMsg = 'please up the missing details';
    } else if (this.userObj.password < 6) {
      this.errorMsg = 'Your password is less than 6';
    } else {
      this._userService.pushMyUser(this.registrationForm.value);
       localStorage.setItem("meLaw", JSON.stringify(this.registrationForm.value) )
       console.log(this._userService.userArray);
       this.currentUserDetailsAtStepOne = this._userService.userArray.find((val:any)=>val.email== this.userObj.email)

       this.getCurrentUserIndexAtStepOne=this._userService.userArray.indexOf(this.currentUserDetailsAtStepOne)
       console.log(this.getCurrentUserIndexAtStepOne);
       localStorage.setItem("myIndexLaw", JSON.stringify(this.getCurrentUserIndexAtStepOne))

      this.router.navigate(['/stepone']);
    }
  }
}
