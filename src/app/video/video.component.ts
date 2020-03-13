import { Component, OnInit, Input } from "@angular/core";
import { VideoService } from "../video.service";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-video",
  templateUrl: "./video.component.html",
  styleUrls: ["./video.component.scss"]
})
export class VideoComponent implements OnInit {
  videoObject;
  videoTitle: string;
  videoChannelTitle: string;
  videoId: string;
  youtubeVideoLink: string = "https://www.youtube.com/embed/";

  constructor(
    private videoService: VideoService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    // subscribe to video object. Video object is passed from home component
    this.videoService.currentVideoObject.subscribe(
      videoObject => (this.videoObject = videoObject)
    );
    // assign title and channelTitle from video object
    this.videoTitle = this.videoObject["snippet"].title;
    this.videoChannelTitle = this.videoObject["snippet"].channelTitle;
    this.videoId = this.videoObject["id"].videoId;
    // paste videoId into youtube embed link
    this.youtubeVideoLink = this.youtubeVideoLink.concat(this.videoId);
  }

  // bypass the sanitizer security check
  byPassSanitizer() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.youtubeVideoLink);
  }
}
