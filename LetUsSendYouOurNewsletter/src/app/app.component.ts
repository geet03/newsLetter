import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { fnBrowserDetect } from './helpers/helper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LetUsSendYouOurNewsletter';

  submitted = false;
  newsLetterForm = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email, Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')])
  });
  public browserInfo = []; 

  constructor(private modalService: NgbModal) {}

  get email() {
    return this.newsLetterForm.get('email');
  }

  displayBrowserInfo(content) {    
    this.modalService.open(content, { size: 'sm' });
    this.browserInfo = [
      {
        name: 'Browser Code Name',
        value: navigator.appCodeName 
      },
      {
        name: 'Browser Name',
        value: fnBrowserDetect() 
      },
      {
        name: 'Platform',
        value: navigator.platform
      },
      {
        name: 'Is Cookie Enabled',
        value: navigator.cookieEnabled
      },
      {
        name: 'Cookie',
        value: document.cookie
      }
    ];
}

  onSubmit(){
    console.log(this.newsLetterForm.value);
  }

}
