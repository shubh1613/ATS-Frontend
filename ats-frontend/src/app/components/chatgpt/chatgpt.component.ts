import { Component } from '@angular/core';

interface Option{
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-chatgpt',
  templateUrl: './chatgpt.component.html',
  styleUrls: ['./chatgpt.component.scss']
})
export class ChatgptComponent {
    selectedValue: string | undefined;
    jobTitle: string | undefined;
    options: Option[] = [
      {value: 'ResumeOptimising', viewValue: 'Need suggestions for optimising your Resume?'},
      {value: 'Skills Required', viewValue: 'Need skills suggestion for any particular job?'},
    ];

  }
