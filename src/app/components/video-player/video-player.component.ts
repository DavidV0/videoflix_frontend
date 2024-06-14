import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import videojs from 'video.js';

@Component({
  selector: 'app-video-player',
  standalone: true,
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit, OnDestroy {
  @Input() playerId: string = 'videoPlayer';
  @Input() videoUrl480p: string = '';
  @Input() videoUrl720p: string = '';
  @ViewChild('videoPlayerElement') videoPlayerElement!: ElementRef;
  player!: videojs.Player;

  ngOnInit(): void {
    this.player = videojs(this.videoPlayerElement.nativeElement, {
      controls: true,
      autoplay: false,
      preload: 'auto',
      sources: [{ src: this.videoUrl480p, type: 'video/mp4' }]
    });
  }

  ngOnDestroy(): void {
    if (this.player) {
      this.player.dispose();
    }
  }

  switchResolution(resolution: string): void {
    const newSource = resolution === '720p' ? this.videoUrl720p : this.videoUrl480p;
    this.player.src({ src: newSource, type: 'video/mp4' });
    this.player.load();
    this.player.play();
  }
}
