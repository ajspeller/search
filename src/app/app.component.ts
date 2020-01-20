import { Component } from '@angular/core';

import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private service: WikipediaService) {}

  onTerm(term: string) {
    const results = this.service.search(term);
    console.log(results);
  }
}
