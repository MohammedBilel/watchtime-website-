import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  constructor(private service:MovieApiServiceService, private router:ActivatedRoute){}
  getMovieDetailResult:any;
  getMovieVideoResult:any;
  getMovieCastResult:any;

  ngOnInit(): void {
      let getParamId = this.router.snapshot.paramMap.get('id');
      console.log(getParamId,'getparamid#');

      this.getMovie(getParamId);
      this.getVideo(getParamId);
      this.getMovieCast(getParamId);
  }

  getMovie(id:any){
    this.service.getMovieDetails(id).subscribe((res)=>{
      console.log(res, 'getmoviedetails#');
      this.getMovieDetailResult = res;
    })
  }

  getVideo(id:any)
  {
    this.service.getMovieVideo(id).subscribe((res)=>{
      console.log(res, 'getMovieVideo#');
      res.results.forEach((element:any) => {
        if(element.type=="Trailer")
        {
          this.getMovieVideoResult = element.key;
        }
        });
      
      
    });
  }

  getMovieCast(id:any)
  {
    this.service.getMovieCast(id).subscribe((res)=>{
      console.log(res, 'movieCast#');
      this.getMovieCastResult = res.cast;
    })
  }
}
