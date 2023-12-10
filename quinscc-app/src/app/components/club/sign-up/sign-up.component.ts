import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Member } from 'src/app/model/member';
import { MemberMicroService } from 'src/app/service/member-micro-service/member-micro.service';
import { StringMatchValidator } from 'src/app/validators/string-match.validator'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  form: FormGroup = new FormGroup({});
  phoneno = new FormControl('', [
    Validators.required,
    Validators.pattern('(0/91)?[7-9][0-9]{9}'),
  ]);
  username = new FormControl('', [Validators.required, Validators.minLength(3)]);
  firstName = new FormControl('', [Validators.required]);
  lastName = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);
  confirmPassword = new FormControl('', [Validators.required]);
  hide = true;

  constructor(private memberService: MemberMicroService, private formBuilder: FormBuilder, private snackBar: MatSnackBar) {
    this.form = formBuilder.group({
      phoneno: this.phoneno,
      firstName: this.firstName,
      lastName: this.lastName,
      username: this.username,
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword,
    }, { validators: StringMatchValidator.isMatching('password', 'confirmPassword') });
  }

  matchPassword(control: FormControl) {
    const password = this.form.get('password')?.value;
    const confirmPassword = control.value;
    if (password !== confirmPassword) {
      return { passwordMismatch: true };
    }
    return null;
  }

  getErrorMessage() {
    if (this.form.get('phoneno')?.hasError('required')) {
      return 'Enter a valid Phoneno';
    }
    return this.form.get('phoneno')?.hasError('Phone') ? 'Not a valid phone no' : '';
  }

  createMember() {
    this.memberService
      .createMember(new Member(
        this.phoneno.value!,
        this.username.value!,
        this.firstName.value!,
        this.lastName.value!,
        this.email.value!,
        this.password.value!,
      ))
      .subscribe({
        next: (v) => { if (v.successful) { this.openSnackBar(`Welcome to Quins Club ${this.firstName.value} ${this.lastName.value}!`, "Sign in"); } console.log(v); },
        error: (e) => console.error(e),
        complete: () => console.log('complete')
      });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action);
  }
}

