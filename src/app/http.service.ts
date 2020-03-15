import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { environment } from "../environments/environment";
import { catchError, retry } from "rxjs/operators";
import { throwError } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  // set API_KEY
  API_KEY: string = environment.API_KEY;
  constructor(private http: HttpClient) {}

  // base url
  baseUrl: string = `https://www.googleapis.com/youtube/v3/search?key=${this.API_KEY}&part=snippet&type=video&&maxResults=9&q=dog`;

  // get videos - home page
  public getVideos(searchInput?: string) {
    // if searchInput is not passed on the function, assign it to empty string
    if (searchInput == undefined) {
      searchInput = "";
    }
    this.baseUrl =
      `https://www.googleapis.com/youtube/v3/search?key=${this.API_KEY}&part=snippet&type=video&&maxResults=9&q=dog` +
      " " +
      searchInput;
    return this.http
      .get(this.baseUrl)
      .pipe(retry(2), catchError(this.handleError));
    // makes the second call if first one fails
  }

  // infinite scroll
  public infiteScroll(PageToken: string, searchInput?: string) {
    // if searchInput is not passed on the function, assign it to empty string
    if (searchInput == undefined) {
      searchInput = "";
    }
    console.log(PageToken);
    let nextPageToken = PageToken;
    const url =
      `https://www.googleapis.com/youtube/v3/search?key=${this.API_KEY}&part=snippet&type=video&maxResults=9&pageToken=${nextPageToken}&q=dog` +
      " ";
    searchInput;
    console.log(url);
    return this.http.get(url).pipe(retry(2), catchError(this.handleError));
  }

  // error handler
  handleError(error) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
