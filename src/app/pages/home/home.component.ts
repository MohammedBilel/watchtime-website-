import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private service: MovieApiServiceService) {}

  bannerResult: any = [];
  trendingMovieResult: any = [];
  actionMovieResult: any = [];
  adventureMovieResult: any = [];
  animationMovieResult: any = [];
  comedyMovieResult: any = [];
  documentaryMovieResult: any = [];
  sciencefictionMovieResult: any = [];
  thrillerMovieResult: any = [];

  ngOnInit(): void {
    this.bannerData();
    this.trendingData();
    this.actionMovie();
    this.adventureMovie();
    this.comedyMovie();
    this.animationMovie();
    this.documentaryMovie();
    this.sciencefictionMovie();
    this.thrillerMovie();
  }

  bannerData() {
    this.service.bannerApiData().subscribe((res) => {
      console.log(res, 'bannerresult#');
      this.bannerResult = res.results;
    });
  }

  trendingData() {
    this.service.trendingMovieApiData().subscribe((res) => {
      console.log(res, 'trendingresult#');
      this.trendingMovieResult = res.results;
      //this.trendingMovieResult
    });
  }

  // action
  actionMovie() {
    this.service.fetchActionMovies().subscribe((res) => {
      this.actionMovieResult = res.results;
    });
  }

   // adventure
   adventureMovie() {
    this.service.fetchAdventureMovies().subscribe((res) => {
      this.adventureMovieResult = res.results;
    });
  }

   // animation
   animationMovie() {
    this.service.fetchAnimationMovies().subscribe((res) => {
      this.animationMovieResult = res.results;
    });
  }

   // comedy
   comedyMovie() {
    this.service.fetchComedyMovies().subscribe((res) => {
      this.comedyMovieResult = res.results;
    });
  }

   // documentary
   documentaryMovie() {
    this.service.fetchDocumentaryMovies().subscribe((res) => {
      this.documentaryMovieResult = res.results;
    });
  }

   // science-fiction
   sciencefictionMovie() {
    this.service.fetchScienceFictionMovies().subscribe((res) => {
      this.sciencefictionMovieResult = res.results;
    });
  }

   // thriller
   thrillerMovie() {
    this.service.fetchThrillerMovies().subscribe((res) => {
      this.thrillerMovieResult = res.results;
    });
  }
}
