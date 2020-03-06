import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  //set API_KEY
  API_KEY: string = environment.API_KEY;

  constructor(private http: HttpClient) {}

  public getVideos() {}
}
