// candidate-home.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-candidate-home',
  templateUrl: './candidate-home.component.html',
  styleUrls: ['./candidate-home.component.css']
})
export class CandidateHomeComponent implements OnInit {
  referralList: any[] = [];
  servicesList: any[] = [];
  searchQuery: string = '';

  constructor(
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (!localStorage.getItem('loggedIn')) {
      this.router.navigate(['/login']);
    }
    this.getReferralList();
    this.getServicesList();
  }

  getReferralList(): void {
    this.apiService.getReferralList().subscribe((data: any) => {
      this.referralList = data;
    });
  }

  getServicesList(): void {
    this.apiService.getServicesList().subscribe((data: any) => {
      this.servicesList = data;
    });
  }

  onSearch(query: string): void {
    this.searchQuery = query;
  }

  logout(): void {
    localStorage.removeItem('loggedIn');
    this.router.navigate(['/login']);
  }
}
