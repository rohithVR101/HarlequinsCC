import { Component } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from 'src/app/model/user';
import { MemberMicroService } from 'src/app/service/member-micro-service/member-micro.service';
import { StringMatchValidator } from 'src/app/validators/string-match.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form: FormGroup = new FormGroup({});
  user = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  hide = true;

  constructor(private memberService: MemberMicroService, private formBuilder: FormBuilder, private snackBar: MatSnackBar) {
    this.form = formBuilder.group({
      user: this.user,
      password: this.password,
    }, { validators: StringMatchValidator.isMatching('password', 'confirmPassword') });
  }

  login() {
    this.memberService
      .authenticateMember(new User(
        this.user.value!,
        this.password.value!,
      ))
      .subscribe({
        next: (v) => {
          if (v.headers.get('authorization')) {
            this.openSnackBar("Welcome");
          }
        },
        error: (e) => 
        this.openSnackBar("Invalid credentials"),
        complete: () => console.log('complete')
      });
  }

  openSnackBar(message: string) {
    this.snackBar.open(message);
  }
}
