import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Harlequins CC';

  signedIn=false;

  contents = [
    {
      title: "News",
      icon: "newspaper",
      link: "news"
    },
    {
      title: "Videos",
      icon: "video_library",
      link: "videos"
    },
    {
      title: "Stadium",
      icon: "stadium",
      link: "stadium"
    },
    {
      title: "Squad",
      icon: "groups",
      link: "squad"
    },
    {
      title: "History",
      icon: "timeline",
      link: "history"
    },
    {
      title: "Shop",
      icon: "shopping_cart",
      link: "shop"
    },
    {
      title: "Join the Quins Club",
      icon: "account_circle",
      link: "join-the-club"
    }
  ]
}
