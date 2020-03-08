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

  // get the reference to the #videoInfo form in home html
  @ViewChild("videoInfo") videoInfo: NgForm;

  constructor(private http: HttpService, private router: Router) {}

  // on loading
  ngOnInit(): void {
    this.http.getVideos().subscribe(data => {
      this.videos = data["items"];
    });
  }

  // on form submission
  onClickWatch() {
    this.description = this.videoInfo.value.description;
    this.channelTitle = this.videoInfo.value.channelTitle;
    this.videoId = this.videoInfo.value.videoId;
    this.router.navigate(["/video", this.videoId]);
    this.videoInfo.resetForm();
  }
}
