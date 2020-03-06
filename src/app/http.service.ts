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

  public getVideos() {
    return this.http
      .get(
        `https://www.googleapis.com/youtube/v3/search?key=${this.API_KEY}&part=snippet&type=video&q=dog`
      )
      .pipe(retry(2), catchError(this.handleError)); // makes the second call if first one fails
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
