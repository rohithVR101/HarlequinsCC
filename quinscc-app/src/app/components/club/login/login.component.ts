import { Component } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
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

  constructor(
    private memberService: MemberMicroService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router) {
    this.form = formBuilder.group({
      user: this.user,
      password: this.password,
    }, { validators: StringMatchValidator.isMatching('password', 'confirmPassword') });
  }

  login() {
    this.memberService
      .authenticateMember(
        this.user.value!,
        this.password.value!,
      ).subscribe({
        next: () => {
          this.router.navigateByUrl("/index");
        },
        error: () => alert("Invalid credentials"),
        complete: () => console.log('complete')
      });
  }

  openSnackBar(message: string) {
    this.snackBar.open(message);
  }
}
