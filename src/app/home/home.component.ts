import { Component, OnInit, ViewChild } from "@angular/core";
import { HttpService } from "../http.service";
import { Router } from "@angular/router";
import { NgForm, FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  /* Create Interface for the properties */
  videos;
  description;
  angForm: FormGroup;
  videoId;
  channelTitle;
  title;
  video;

  // get the reference to the #videoInfo form in home html
  @ViewChild("videoInfo") videoInfo: NgForm;

  constructor(
    private http: HttpService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.createForm();
  }
  /* For Reactive Form */
  createForm() {
    this.angForm = this.fb.group({
      videoId: this.videoId,
      channelTitle: this.channelTitle,
      title: this.title
    });
  }
  onSubmit() {
    console.log(this.angForm);
  }
  /*     */

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
    this.title = this.videoInfo.value.title;

    this.router.navigate(["/video", this.videoId]);
  }
}
