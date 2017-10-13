import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gabotron First Angular App';
  author = 'Gabriel Porras';
  count = 0;
  imageSource = './../favicon.ico';
  buttonEnabled = '';
  buttonValue = 'Disable My Button';
  onClickMe() {
    this.buttonEnabled = this.buttonEnabled === 'disable' ? '' : 'disable';
    this.buttonValue = this.buttonValue === 'Disable My Button' ? 'Enable My Button' : 'Disable My Button';
  }
}
