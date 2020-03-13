/* search.service.ts does two things => passes search input to home component and invokes searchGetVideos() in home component */
import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";
import { BehaviorSubject } from "rxjs";
import { Subscription } from "rxjs/internal/Subscription";

@Injectable({
  providedIn: "root"
})
export class SearchService {
  // set API_KEY
  API_KEY: string = environment.API_KEY;
  baseUrl: string = `https://www.googleapis.com/youtube/v3/search?key=${this.API_KEY}&part=snippet&type=video&maxResults=9&q=dog`;

  // allows both way communication, publish and subscribe
  private searchMessageSource = new BehaviorSubject<string>("");
  currentSearchinput = this.searchMessageSource.asObservable();

  // invokes searchGetVideos() in home component
  invokeSearchGetVideos = new EventEmitter();
  subsVar: Subscription;

  constructor() {}

  // update search input
  updateSearchInput(searchInput: string) {
    this.searchMessageSource.next(searchInput);
  }

  // on search input - event handlers: enter or click
  onSearchInput() {
    this.invokeSearchGetVideos.emit();
  }
}
