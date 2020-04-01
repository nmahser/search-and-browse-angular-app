import { Component } from "@angular/core";
import { faDog, faPaw, faBone } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "search-and-browse-angular-app";
  // fontawesome icons
  dog = faDog;
  paw = faPaw;
  bone = faBone;
}
