import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Member } from '../model/member';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  membersUrl = 'api/members'

  constructor(private http: HttpClient) { }

  getMembers(): Observable<Member[]> {
    return this.http.get<Member[]>(this.membersUrl);
  }
}
