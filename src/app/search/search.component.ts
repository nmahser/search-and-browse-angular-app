import { Component, OnInit, ViewChild } from "@angular/core";
import { FormControl } from "@angular/forms";
import { SearchService } from "../search.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"]
})
export class SearchComponent implements OnInit {
  searchInput: string;

  // used form control to hold search input value
  queryField: FormControl = new FormControl();

  constructor(private searchService: SearchService, private router: Router) {}

  ngOnInit(): void {
    // subscribe to search input
    this.searchService.currentSearchinput.subscribe(
      searchInput => (this.searchInput = searchInput)
    );
  }

  homeComponentFunction() {
    this.searchService.onSearchInput();
  }

  searchThis(event: any) {
    // updates video object in video component
    this.searchService.updateSearchInput(this.queryField.value);
  }
}
