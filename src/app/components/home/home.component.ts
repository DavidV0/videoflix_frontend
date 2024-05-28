import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MovieService } from '../../services/movie.service';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, RouterModule, HttpClientModule], // Import HttpClientModule here
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    movies: any[] = [];
    errorMessage: string = '';

    constructor(private movieService: MovieService) { }

    ngOnInit(): void {
        this.movieService.getMovies().subscribe(
            data => {
                this.movies = data;
                if (this.movies.length === 0) {
                    this.errorMessage = 'Currently no movies to watch.';
                }
            },
            error => {
                this.errorMessage = 'An error occurred while fetching movies.';
            }
        );
    }
}
