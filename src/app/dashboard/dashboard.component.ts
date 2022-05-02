import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public lawwyUser:any
  public indexOfLawwyUser: any;
  public lawwyArray: any;
  public userProfilePic:any

  constructor(private _userService:UserServiceService) { }

  ngOnInit(): void {
    this.lawwyUser = this._userService.getAllUser()
    this.indexOfLawwyUser = JSON.parse(localStorage['myIndexLaw']);
     this.lawwyArray=this.lawwyUser[this.indexOfLawwyUser]
     this.lawwyArray= this.lawwyUser[this.indexOfLawwyUser].profileDetails
     console.log(this.lawwyArray);
     for (let i = 0; i < this.lawwyArray.length; i++){
       console.log(this.lawwyArray);
       
       
       
     }
    //  this.userProfilePic=Object.fromEntries(
    //    this.lawwyArray(y=>y.userPtofilePic)
    //    .map(({userPtofilePic, ...o})=>[y])
    //  )
 //})

     
     
     
     

  }

}
