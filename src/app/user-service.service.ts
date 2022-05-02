import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  public userArray: any = [];
  public indexOfUser:any= ""
  
  constructor() {}
  getAllUser() {
    if (localStorage['LawwyUser']) {
      this.userArray = JSON.parse(localStorage['LawwyUser']);
      this.indexOfUser = JSON.parse(localStorage['myIndexLaw']);
    } else {
      this.userArray = [];
    }

    return this.userArray;
  }

  pushMyUser(userDetails: any) {
    // this.userArray.push(userDetails);
    this.userArray[this.indexOfUser] =  userDetails
    console.log(this.userArray)
    console.log(userDetails);
    localStorage.setItem('LawwyUser', JSON.stringify(this.userArray));
  }
  
  

}
