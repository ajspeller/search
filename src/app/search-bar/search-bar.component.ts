import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  term;
  @Output() submitted = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  onFormSubmit(event: any) {
    console.log(this.term);
    event.preventDefault();
    this.submitted.emit(this.term);
  }

}
