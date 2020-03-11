import { Component, OnInit, Input } from "@angular/core";
import { VideoService } from "../video.service";

@Component({
  selector: "app-video",
  templateUrl: "./video.component.html",
  styleUrls: ["./video.component.scss"]
})
export class VideoComponent implements OnInit {
  videoObject: object;
  videoTitle: string;
  videoChannelTitle: string;

  constructor(private videoService: VideoService) {}

  ngOnInit(): void {
    // subscribe to video object. Video object is passed from home component
    this.videoService.currentVideoObject.subscribe(
      videoObject => (this.videoObject = videoObject)
    );
    // assign title and channelTitle from video object
    this.videoTitle = this.videoObject["snippet"].title;
    this.videoChannelTitle = this.videoObject["snippet"].channelTitle;
  }
}
