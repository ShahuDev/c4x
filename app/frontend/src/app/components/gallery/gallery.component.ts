import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface PlantPhoto {
  caption: string;
  src: string | null;
}

/**
 * Plant photo gallery. Each entry's `src` is null until you drop a real
 * photo into src/assets/images/plant/ and point it here — the placeholder
 * texture renders automatically whenever src is null so nothing looks broken
 * in the meantime.
 */
@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent {
  readonly photos: PlantPhoto[] = [
    { caption: 'Manufacturing unit & silos', src: 'assets/images/plant/plant-silos-exterior.jpg' },
    { caption: 'Production block', src: 'assets/images/plant/production-block-building.jpg' },
    { caption: 'Autoclaving & curing line', src: 'assets/images/plant/autoclave-curing-line.jpg' },
    { caption: 'Aerial view of storage & dispatch yard', src: 'assets/images/plant/aerial-dispatch-yard.jpg' },
    { caption: 'Loading for dispatch', src: 'assets/images/plant/forklift-truck-loading.jpg' },
  ];
}
