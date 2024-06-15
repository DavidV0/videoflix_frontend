import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movies: any[] = [];
  errorMessage: string | null = null;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getMovies().subscribe(
      data => {
        this.movies = data;
      },
      error => this.errorMessage = 'Could not load movies'
    );
  }

  truncateDescription(description: string): string {
    return description.length > 30 ? description.substring(0, 30) + '...' : description;
  }

  getThumbnailUrl(thumbnailPath: string): string {
    if (!thumbnailPath) {
      return 'http://via.placeholder.com/150'; 
    }
    return thumbnailPath; 
  }
}
