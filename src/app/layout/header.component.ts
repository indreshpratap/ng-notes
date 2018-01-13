import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    template: `
    <mat-toolbar color="primary">
  <mat-toolbar-row>
    <span>NG Notes</span>
    <a mat-button routerLink="/home/admin-dashboard">Admin Dashboard</a>
    <a  mat-button routerLink="/home/user-dashboard">User Dashboard</a>
  </mat-toolbar-row>
</mat-toolbar>

    `
})
export class HeaderComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}