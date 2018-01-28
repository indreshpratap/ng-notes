import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-errors',
    template: `
    <div *ngIf="errors">
    <span *ngIf="errors.required">{{msgs && msgs.required?msgs.required: ((label?label:'Field') +' required')}}</span>
    <span *ngIf="errors.minlength">Minimum {{errors.minlength.requiredLength}} chararcters needed</span>
    <span *ngIf="errors.maxlength">Maximum {{errors.maxlength.requiredLength}} chararcters needed</span>
    <span *ngIf="errors.pattern">{{msgs && msgs.pattern?msgs.pattern:"Pattern mismatch"}}</span>
    <span *ngIf="errors.lowercaseonly">{{ (label?label:'Field')}} only lowercase chararacters allowed</span>
    </div>
    `
    
})
export class ErrorsComponent implements OnInit {
    @Input() errors:any;
    @Input() msgs:any;
    @Input() label:any;
    constructor() { }

    ngOnInit() {
        var msg = this.label? this.label:'Field';
     }
}