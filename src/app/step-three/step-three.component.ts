import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-step-three',
  templateUrl: './step-three.component.html',
  styleUrls: ['./step-three.component.css'],
})
export class StepThreeComponent implements OnInit {
  public answer: any;
  public lawwyUser: any;
  public indexOfLawwyUser: any;
  public lawwyArray: any;
  public displayquestion: any;
  public userQuestion: any;

  constructor(
    private _userService: UserServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.lawwyUser = this._userService.getAllUser();
    this.indexOfLawwyUser = JSON.parse(localStorage['myIndexLaw']);
    this.lawwyArray = this.lawwyUser[this.indexOfLawwyUser];
    const questions = [
      'What do you term as freedom of speech?',
      'Are you willing to give voice to the voiceless?',
      'Are you willing to give your view on hot topics?',
      'Are you willing to contribute on trendy topics?',
      'What is your purpose of opening lawwyaccount?',
    ];
    const random = Math.floor(Math.random() * questions.length);
    this.displayquestion = questions[random];

    // console.log(random, questions[random]);
  }

  submitQuestion() {
    this.userQuestion = {
      quest: this.displayquestion,
      ans: this.answer,
    };

    this.lawwyArray.question.push(this.userQuestion);
    console.log(this.lawwyArray);
    this._userService.pushMyUser(this.lawwyArray);
    console.log(this._userService.getAllUser());
    this.router.navigate(['/dashboard']);
  }

  skip() {
    this.router.navigate(['/dashboard']);
  }
}
