import { Component, OnInit } from '@angular/core';
import { Period } from '../domain/period';
import { PeriodService } from '../shared/period.service';

@Component({
  selector: 'cc-admin-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
})
export class ReportComponent implements OnInit {
  periodList: Period[] = [];
  errorMessage = '';

  constructor(private periodService: PeriodService) {}

  ngOnInit(): void {
    this.fetchPeriodList();
  }

  fetchPeriodList() {
    this.periodService.getPeriods().subscribe({
      next: (data) => (this.periodList = data.periodResponseList),
      error: (err) => (this.errorMessage = err),
    });
  }
}
