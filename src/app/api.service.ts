// api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl: string = 'https://api.example.com/';

  constructor(private http: HttpClient) { }

  getReferralList() {
    return this.http.get(`${this.baseUrl}/referral`);
  }

  getServicesList() {
    return this.http.get(`${this.baseUrl}/services`);
  }
}
