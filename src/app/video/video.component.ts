import { Component, OnInit, Input } from "@angular/core";
import { VideoService } from "../video.service";
import { DomSanitizer } from "@angular/platform-browser";
import { SearchService } from "../search.service";

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

  // variables for data sharing among components
  searchInput: string;

  constructor(
    private videoService: VideoService,
    private sanitizer: DomSanitizer,
    private searchService: SearchService
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

    // subscribe to search input
    this.searchService.currentSearchinput.subscribe(
      searchInput => (this.searchInput = searchInput)
    );
  }

  // bypass the sanitizer security check
  byPassSanitizer() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.youtubeVideoLink);
  }
}
