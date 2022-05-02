import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-reg-step-two',
  templateUrl: './reg-step-two.component.html',
  styleUrls: ['./reg-step-two.component.css'],
})
export class RegStepTwoComponent implements OnInit{
  public userObj: any;

  public hasNoProfile: boolean = true;
  public hasProfile: boolean = false;
  public defaultImg: string = '/assets/images/avater-removebg-preview (1).png';
  public nickName: string = '';
  public aboutMe: string = '';
  public errorMsg: string = '';

  public myImg: any;
  public lawwyUser:any
  public indexOfLawwyUser: any;
  public lawwyArray: any;
  constructor( private _userService:UserServiceService, private router:Router) {}

  ngOnInit(): void {
    this.lawwyUser = this._userService.getAllUser()
    this.indexOfLawwyUser = JSON.parse(localStorage['myIndexLaw']);
	this.lawwyArray=this.lawwyUser[this.indexOfLawwyUser]
    console.log(this.lawwyArray);
  }

  fileSelect(e: any) {
    console.log(e.target.files[0]);
    const newFile = e.target.files[0];
    console.log(newFile);
    const reader = new FileReader();
    reader.readAsDataURL(newFile);
    reader.onload = () => {
      console.log(reader.result);
      this.myImg = reader.result;
    };
    console.log(this.myImg);
  }

   addItem(){
    // initializing the time and date
    let myDate = new Date;
      let months=  ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEPT","OCT","NOV","DEC"];
      let month=months[myDate.getMonth()]
       let fullYear=myDate.getFullYear()
       let allMyDate= month+ "-" + fullYear
    
    if (this.nickName == '' && this.aboutMe == '') {
      this.errorMsg = 'Please check your About';
    } else if (this.nickName =='' || this.aboutMe =='') {
      this.errorMsg = 'Please check the missing about';
    } else {
      this.userObj = {
        userName: this.nickName,
        bio: this.aboutMe,
        userPtofilePic: this.myImg,
        timmy:allMyDate
      };

      this.lawwyArray.profileDetails.push(this.userObj)
      console.log(this.lawwyArray)
      this._userService.pushMyUser(this.lawwyArray)
      console.log(this._userService.getAllUser())
      this.router.navigate(["/stepthree"])

    }
  }
}
