import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Member } from 'src/app/model/member';
import { PostResponse } from 'src/app/model/post-response';
import { User } from 'src/app/model/user';

@Injectable({
  providedIn: 'root'
})
export class MemberMicroService {
  baseUrl = 'http://localhost:8080/members';

  constructor(private http: HttpClient) { }

  public createMember(member: Member) {
    return this.http.post<PostResponse>(`${this.baseUrl}/create`, member, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  public authenticateMember(user: User) {
    return this.http.post<HttpResponse<any>>(`${this.baseUrl}/login`, user, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      observe: 'response' as 'body'
    });
  }
}
