import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Member } from 'src/app/model/member';
import { PostResponse } from 'src/app/model/post-response';
import { BehaviorSubject, Observable, map, shareReplay, tap } from "rxjs";
import { User } from 'src/app/model/user';

const AUTH_DATA = "auth_data";

@Injectable({
  providedIn: 'root'
})
export class MemberMicroService {
  baseUrl = 'http://localhost:8080/members';

  //Authentication
  private subject = new BehaviorSubject<User | null>(null);
  user$: Observable<User | null> = this.subject.asObservable();
  isLoggedIn$: Observable<boolean>;
  isLoggedOut$: Observable<boolean>;

  constructor(private http: HttpClient) {
    this.isLoggedIn$ = this.user$.pipe(map(user => !!user));
    this.isLoggedOut$ = this.isLoggedIn$.pipe(map(loggedIn => !loggedIn));
    const user = localStorage.getItem(AUTH_DATA);
    if (user) {
      this.subject.next(JSON.parse(user));
    }
  }

  public createMember(member: Member) {
    return this.http.post<PostResponse>(`${this.baseUrl}/create`, member, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  public authenticateMember(user: string, password: string): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/login`, { user, password }, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      observe: 'response' as 'body'
    }).pipe(
      tap(user => {
        localStorage.setItem(AUTH_DATA, JSON.stringify(user));
      }),
      shareReplay()
    );
  }

  logoutMember() {
    this.subject.next(null);
    localStorage.removeItem(AUTH_DATA);
  }
}
