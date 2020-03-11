import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class VideoService {
  // allows both way communication, publish and subscribe
  private homeMessageSource = new BehaviorSubject<object>([]);
  currentVideoObject = this.homeMessageSource.asObservable();

  constructor() {}

  changeMessage(videoObject: object) {
    this.homeMessageSource.next(videoObject);
  }
}
