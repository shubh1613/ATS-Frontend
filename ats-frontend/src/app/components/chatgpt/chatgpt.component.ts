import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';


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
  JobsDone = false;
  myForm = new FormGroup({
    variable: new FormControl('', [Validators.required])
  });


    selectedValue: string | undefined;
    variable: string | undefined;
    options: Option[] = [
      {value: 'Skills Required', viewValue: 'Need skills suggestion for any particular job?'}
    ];
    public Jobs : any = [];

    constructor(private http: HttpClient) { }
    
    getMessage(jobTitle: any){
          let data = {'jobtitle': jobTitle};
          this.http.post('http://localhost:4000/chatgpt', data)
            .subscribe(res => {
              console.log(this.Jobs.data)
                this.JobsDone = true;
                this.Jobs = res;
                console.log(this.Jobs);
              })
        }
      
  }
