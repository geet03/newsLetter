import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  get email() {
    return this.newsLetterForm.get('email');
  }

}
