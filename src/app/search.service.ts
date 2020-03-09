import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "../environments/environment";

@Injectable({
  providedIn: "root"
})
export class SearchService {
  // set API_KEY
  API_KEY: string = environment.API_KEY;

  baseUrl: string = `https://www.googleapis.com/youtube/v3/search?key=${this.API_KEY}&part=snippet&type=video&maxResults=10&q=dog`;

  constructor(private http: HttpClient) {}

  // search method
  search(queryString: string) {
    let url = this.baseUrl + queryString;
    return this.http.get(url);
  }
}
