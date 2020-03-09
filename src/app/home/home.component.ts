import { Component, OnInit, ViewChild } from "@angular/core";
import { HttpService } from "../http.service";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  /* Create Interface for the properties */
  videos;
  description;
  channelTitle;
  videoId;
  title;
  // Properties for infinite scroll
  notMoreVideos = true;
  notscrolly = true;
  nextPageToken;

  constructor(private http: HttpService, private router: Router) {}

  // on loading
  ngOnInit(): void {
    this.http.getVideos().subscribe(data => {
      this.videos = data["items"];
      // get nextPageToken to be used in loadNextVideos()
      this.nextPageToken = data["nextPageToken"];
    });
  }

  // on form submission
  onClickWatch(video: any) {
    this.description = video.snippet.title;
    this.channelTitle = video.snippet.channelTitle;
    this.videoId = video.id.videoId;
    this.title = video.snippet.title;
    // routes to video component
    this.router.navigate(["/video", this.videoId]);
  }

  // triggered when scrolled down
  onScroll() {
    if (this.notscrolly && this.notMoreVideos) {
      this.notscrolly = false;
      this.loadNextVideos();
    }
  }

  // loads next set of videos
  loadNextVideos() {
    let nextPageToken = this.nextPageToken;
    this.http.infiteScroll(nextPageToken).subscribe(data => {
      const newData = data["items"];
      this.nextPageToken = data["nextPageToken"];
      if (newData.length === 0) {
        this.notMoreVideos = false;
      }
      // add new videos to do existing videos
      this.videos = this.videos.concat(newData);
      this.notscrolly = true;
    });
  }
}
