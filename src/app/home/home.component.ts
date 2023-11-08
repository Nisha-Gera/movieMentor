import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  trendingMovies: any;
  theatreMovies: any;
  popularMovies: any;
 
  constructor(private http: HttpClient, private routes:Router) {}
  ngOnInit(): void {
    this.getTrendingMovies();
    this.gettheatreMovies();
    this.getpopularMovies();
  }
  getTrendingMovies() {
    this.http
      .get('/assets/data/trending-movies.json')
      .subscribe((movies) => {
        this.trendingMovies = movies;
        console.log('Success');
        console.log(this.trendingMovies)
      });
    // get trending movies here
  }
  gettheatreMovies() {
    this.http
      .get('/assets/data/theatre-movies.json')
      .subscribe((movies) => {
        this.theatreMovies = movies;
        console.log('Success');
        console.log(this.theatreMovies)
      });
    // get trending movies here
  }
  getpopularMovies() {
    this.http
      .get('/assets/data/popular-movies.json')
      .subscribe((movies) => {
        this.popularMovies = movies;
        console.log('Success');
        console.log(this.popularMovies)
      });
    // get trending movies here
  }
  goToMovie(type:string, id:string){
this.routes.navigate(['movie',type,id]);
  }
}
