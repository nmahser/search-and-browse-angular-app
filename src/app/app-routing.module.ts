import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { VideoComponent } from "./video/video.component";
import { SearchComponent } from "./search/search.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "video/:videoId", component: VideoComponent },
  { path: "search", component: SearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
