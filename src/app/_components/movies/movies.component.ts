import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/_services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.moviesService.getMostPopularMovies().subscribe((movies) => {
      console.log('Found movies most popular', movies);
    })
  }

}
