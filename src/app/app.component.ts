import { Component } from '@angular/core';

import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  results = [];
  constructor(private service: WikipediaService) {}

  onTerm(term: string) {
    this.service.search(term).subscribe(pages => {
      this.results = pages;
      console.log('results: ', this.results);
    });
  }
}
