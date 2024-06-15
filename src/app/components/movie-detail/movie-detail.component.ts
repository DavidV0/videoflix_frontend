import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { CommonModule } from '@angular/common';
import { VideoPlayerComponent } from '../video-player/video-player.component';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [CommonModule, VideoPlayerComponent],
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movie: any;
  errorMessage: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.movieService.getMovie(id).subscribe(
      data => {
        this.movie = data;
      },
      error => this.errorMessage = 'Could not load movie details'
    );
  }

  getVideoUrl(videoPath: string): string {
    return `http://localhost:8000/media/${videoPath}`;
  }

  goBack(): void {
    this.router.navigate(['/home']);
  }
}
