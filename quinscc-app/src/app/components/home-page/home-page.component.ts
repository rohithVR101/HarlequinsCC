import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { interval, takeWhile } from 'rxjs';
import { repeat } from 'rxjs/operators';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent {
  progressValue: number = 0;
  timer = interval(10000);
  result: any;

  newsList = [
    {
      title: "Harlequins CC Pull Off Last-Ball Thriller Against Archrivals",
      summary: "The air crackled with anticipation as the final delivery of the Premier League match sailed towards the batsman. Scores were tied, and the tension was palpable. With all eyes glued to the action, Harlequins' star batsman, the swashbuckling Joe Compton, unleashed a glorious cover drive that sent the ball soaring over the boundary for a match-winning six! The stadium erupted in a cacophony of cheers as Harlequins secured a dramatic victory against their archrivals, the Red Dragons. This nail-biting finish cemented Harlequins' place at the top of the table and solidified their rivalry with the Red Dragons as one of the most thrilling in cricket history.",
      image: "https://images.pexels.com/photos/10469894/pexels-photo-10469894.jpeg",
      url: "https://www.technologyreview.com/2023/12/28/1064546/major-breakthrough-quantum-computing-mit/",
    },
    {
      title: "Harlequins CC Groundsman's Dog Becomes Accidental Match Hero",
      summary: "In a heartwarming turn of events during a recent Harlequins CC match, the team's beloved groundsman's dog, a scruffy terrier named Lucky, became an unlikely hero. With the game evenly poised, a crucial catch sailed towards the boundary. Just as it seemed destined to go for six, Lucky sprang into action, leaping spectacularly and snagging the ball inches from the rope. The stunned silence of the crowd erupted into joyous cheers as Lucky trotted back to his owner, tail wagging proudly. This adorable incident not only saved the day for Harlequins but also stole the hearts of fans and solidified Lucky's place as the team's mascot and good luck charm.",
      image: "https://images.pexels.com/photos/1959055/pexels-photo-1959055.jpeg",
      url: "https://www.bbc.com/news/world-europe-63546758",
    },
    {
      title: "Harlequins CC Launches Initiative to Empower Girl Cricketers",
      summary: "HCC has embarked on a commendable initiative to empower young girls from underprivileged communities to pursue cricket. Partnering with local NGOs, Rohan has launched a program that provides girls with access to free coaching, equipment, and mentorship from experienced cricketers. This program has already seen a surge in participation and ignited a passion for cricket in countless young girls.",
      image: "https://images.pexels.com/photos/13509971/pexels-photo-13509971.jpeg",
      url: "https://www.sciencedaily.com/releases/2023/12/231228105455.htm",
    },
    {
      title: "HCC Coach Embraces Technology with Groundbreaking AI-Powered Training Program",
      summary: "HCC head coach has become the talk of the cricketing world after unveiling his revolutionary AI-powered training program. The program utilizes advanced data analysis and personalized training simulations to optimize player performance and identify areas for improvement. Early results have been astounding, with players showing significant improvement in batting averages, bowling strike rates, and overall fitness levels. Other teams are now scrambling to catch up, with Rahul's pioneering approach promising to reshape the future of cricket coaching.",
      image: "https://images.pexels.com/photos/4770740/pexels-photo-4770740.jpeg",
      url: "https://www.nature.com/articles/s41591-023-01354-z",
    }
  ];

  selectedNews = new FormControl(0);
  constructor() {
    this.result = this.timer.pipe(
      repeat()
    );
    this.result.subscribe(() => {
      this.changeNewsSlide();
    });
  }

  changeNewsSlide(): void {
    let current: number = this.selectedNews.value == null ? 0 : this.selectedNews.value;
    this.changeSlide(current == this.newsList.length - 1 ? 0 : current + 1);
  }

  changeSlide(index: number) {
    this.selectedNews.setValue(index);
  }

  videoList = [
    { id: "KRmVx8aeQsk", title: "Full Highlights : Harlequins CC vs Bradford Vipers", thumbnail: "https://images.pexels.com/photos/9828008/pexels-photo-9828008.jpeg?auto=compress&cs=tinysrgb&w=600"},
    { id: "AOkNx8KAtR4", title: "HCC Academy Discovers Unpolished Gem in Village Tournament", thumbnail: "https://images.pexels.com/photos/3718433/pexels-photo-3718433.jpeg?auto=compress&cs=tinysrgb&w=600"},
    { id: "hK8POwUShVw", title: "Interview with the captain", thumbnail: "https://images.pexels.com/photos/11023866/pexels-photo-11023866.jpeg?auto=compress&cs=tinysrgb&w=600"},
    { id: "JI7PzCDCfwM", title: "Interview with the coach", thumbnail: "https://images.pexels.com/photos/2872418/pexels-photo-2872418.jpeg?auto=compress&cs=tinysrgb&w=600"},
  ];
}
