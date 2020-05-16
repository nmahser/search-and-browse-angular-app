import { Component, OnInit, Input } from "@angular/core";
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
    private sanitizer: DomSanitizer,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    // get videoObject stored in home component
    this.videoObject = JSON.parse(localStorage.getItem("videoObject"));
    // assign title, videoId and channelTitle from video object
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

/*
// assign title and channelTitle from video object
    this.videoTitle = this.videoObject["snippet"].title;
    this.videoChannelTitle = this.videoObject["snippet"].channelTitle;
    this.videoId = this.videoObject["id"].videoId;
    // paste videoId into youtube embed link
    this.youtubeVideoLink = this.youtubeVideoLink.concat(this.videoId);
/*

/* // save videoTitle, channelTitle and videoId. When the page is refreshed, these values are retained in the browser.
    // setters for videoTitle, videoChannelTitle, videoID
    localStorage.setItem("storedTitle", this.videoObject["snippet"].title);

    localStorage.setItem(
      "storedChannelTitle",
      this.videoObject["snippet"].channelTitle
    );
    localStorage.setItem("storedVideoId", this.videoObject["id"].videoId);

    // getters for videoTitle, videoChannelTitle, videoID
    this.videoTitle = localStorage.getItem("storedTitle");
    this.videoChannelTitle = localStorage.getItem("storedChannelTitle");
    this.videoId = localStorage.getItem("storedVideoId");
    */
