import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  /* Create Interface for the properties */
  videos;
  videoId;

  constructor(private http: HttpService) {}

  ngOnInit(): void {
    this.http.getVideos().subscribe(data => {
      console.log(data);
      this.videos = data["items"];
    });
  }

  displayVideo(event: any) {
    this.videoId = event.target.value;
  }
}
