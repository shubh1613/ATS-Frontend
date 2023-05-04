import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
    // declare form
    myForm = new FormGroup({
      file: new FormControl('', [Validators.required]),
      fileSource: new FormControl('', [Validators.required])
    });

    //constructor
    constructor(private http: HttpClient) { }


    get f(){
      return this.myForm.controls;
    }


    /**
   * Write code on Method
   *
   * @return response()
   */
  onFileChange(event:any) {

    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.myForm.patchValue({
        fileSource: file
      });
      this.submit(file);
    }
    
  } 

  submit(file: string | Blob){
    if(this.myForm.get('fileSource')){
        let formData = new FormData();
        formData.append('file', file);
        this.http.post('http://localhost:4000/upload', formData)
          .subscribe(res => {
            console.log(res);
          })
      }
    }
}
