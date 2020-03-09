import { Component, OnInit, ViewChild } from "@angular/core";
import { FormControl } from "@angular/forms";
import { debounceTime, distinctUntilChanged, switchMap } from "rxjs/operators";
import { SearchService } from "../search.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"]
})
export class SearchComponent implements OnInit {
  results;
  queryField: FormControl = new FormControl();

  constructor(private searchService: SearchService, private router: Router) {}

  ngOnInit(): void {
    console.log(this.queryField);
  }

  // gets search box input and makes the api call
  searchThis(event: any) {
    this.searchService.search(this.queryField.value).subscribe(result => {
      if (result == null) {
        return;
      } else {
        this.results = result["items"];
      }
    });
  }
}
