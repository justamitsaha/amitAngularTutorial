import { Component } from '@angular/core';
import { IMAGE_URL } from '../../../db-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'amitAngularTutorial';
  url: string = IMAGE_URL[0].prinse_of_persia;
  data = {
    title: 'Angular tutorial'
  }

  onKeyUp(input: string) {
    this.data.title = input;
  }

  onLogoClicked() {
    alert("Logo Clicked");
  }

}
