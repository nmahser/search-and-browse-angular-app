import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  /* Create Interface for the properties */
  videos;
  videoId;

  constructor(private http: HttpService, private router: Router) {}

  // on loading
  ngOnInit(): void {
    this.http.getVideos().subscribe(data => {
      console.log(data);
      this.videos = data["items"];
    });
  }

  // gets the video Id
  displayVideo(event: any) {
    this.videoId = event.target.value;
    console.log(this.videoId);
  }

  // redirects to video component
  redirectToVideo() {
    console.log(this.videoId);
    this.router.navigate(["/video", this.videoId]);
  }
}
