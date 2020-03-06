import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  videos;
  constructor(private http: HttpService) {}

  ngOnInit(): void {
    this.http.getVideos().subscribe(data => {
      console.log(data);
      this.videos = data["items"];
    });
  }
}
