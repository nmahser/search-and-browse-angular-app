import { Component, OnInit, ViewChild } from "@angular/core";
import { HttpService } from "../http.service";
import { Router } from "@angular/router";
import { VideoService } from "../video.service";
import { SearchService } from "../search.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  /* Create Interface for the properties */
  description: string;
  channelTitle: string;
  videoId: string;
  title: string;
  videos;

  // variables for infinite scroll
  notMoreVideos = true;
  notscrolly = true;
  nextPageToken: string;

  // variables for data sharing among components
  videoObject: object;
  searchInput: string;

  constructor(
    private http: HttpService,
    private router: Router,
    private videoService: VideoService,
    private searchService: SearchService
  ) {}

  // on loading
  ngOnInit(): void {
    this.http.getVideos().subscribe(data => {
      this.videos = data["items"];
      // get nextPageToken to be used in loadNextVideos()
      this.nextPageToken = data["nextPageToken"];
    });
    // subscribe to video object
    this.videoService.currentVideoObject.subscribe(
      videoObject => (this.videoObject = videoObject)
    );
    // subscribe to search input
    this.searchService.currentSearchinput.subscribe(
      searchInput => (this.searchInput = searchInput)
    );
  }

  // on form submission
  onClickWatch(video: any) {
    this.description = video.snippet.title;
    this.channelTitle = video.snippet.channelTitle;
    this.videoId = video.id.videoId;
    this.title = video.snippet.title;
    // updates video object in video component
    this.videoService.changeMessage(video);
    // navigates to video component
    this.navigateToVideo();
  }

  // navigates to video component
  navigateToVideo() {
    this.router.navigate(["/video", this.videoId]);
  }

  // triggered when scrolled down
  onScroll() {
    if (this.notscrolly && this.notMoreVideos) {
      this.notscrolly = false;
      this.loadNextVideos();
    }
  }

  // triggerred when search input is entered
  searchGetVideos() {
    //getvideos
    //this.nextPageToken = data["nextPageToken"];
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
