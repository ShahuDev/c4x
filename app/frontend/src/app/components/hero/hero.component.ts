import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Hero section with a plant walkthrough video that plays only while the
 * section is scrolled into view (via IntersectionObserver) and pauses once
 * the visitor scrolls past it — saves bandwidth and matches the brief.
 *
 * To go live: drop the real clip at src/assets/video/plant-walkthrough.mp4
 * and set hasVideo = true below (or just add a <source> — see template).
 */
@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements AfterViewInit, OnDestroy {
  @ViewChild('heroSection') heroSection!: ElementRef<HTMLElement>;
  @ViewChild('plantVideo') plantVideo!: ElementRef<HTMLVideoElement>;

  /** Flip to true once assets/video/plant-walkthrough.mp4 is in place. */
  hasVideo = true;

  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    if (!this.hasVideo) return;

    this.observer = new IntersectionObserver(
      (entries) => {
        const video = this.plantVideo.nativeElement;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.4 }
    );
    this.observer.observe(this.heroSection.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
