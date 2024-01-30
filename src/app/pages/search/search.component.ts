import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor(private service:MovieApiServiceService){}

  ngOnInit():void {}

  searchResult:any;
  searchForm = new FormGroup({
    'movieName': new FormControl(null)
  });

  submitForm()
  {
    console.log(this.searchForm.value, 'searchForm#');
    this.service.getSearchMovie(this.searchForm.value).subscribe((res)=>{
      console.log(res, 'searchmovie##');
      this.searchResult = res.results;
    })
  }
}
