import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface BlockSize {
  label: string;
  dims: string;
  widthPx: number;
  pricePerPiece: string;
}

interface SpecRow {
  label: string;
  value: string;
}

/**
 * Products section: "C4X AAC Blocks" expands on click to reveal every size
 * variant with pricing from the brochure, and "Technical Specifications"
 * expands to show the block's engineering spec sheet.
 */
@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  openCard: 'blocks' | 'specs' | null = null;

  readonly blockSizes: BlockSize[] = [
    { label: '600×200×100', dims: '0.012 cu.m/block', widthPx: 62, pricePerPiece: '₹43.20' },
    { label: '600×200×150', dims: '0.018 cu.m/block', widthPx: 68, pricePerPiece: '₹64.80' },
    { label: '600×200×200', dims: '0.024 cu.m/block', widthPx: 74, pricePerPiece: '₹86.41' },
    { label: '600×200×230', dims: '0.0276 cu.m/block', widthPx: 78, pricePerPiece: '₹99.44' },
    { label: '300×200×100', dims: '0.006 cu.m/block', widthPx: 40, pricePerPiece: '₹21.60' },
    { label: '300×200×150', dims: '0.009 cu.m/block', widthPx: 46, pricePerPiece: '₹32.40' },
    { label: '300×200×200', dims: '0.012 cu.m/block', widthPx: 52, pricePerPiece: '₹43.20' },
    { label: '300×200×230', dims: '0.0138 cu.m/block', widthPx: 56, pricePerPiece: '₹49.68' },
  ];

  readonly specRows: SpecRow[] = [
    { label: 'Length (L)', value: '600mm / 300mm' },
    { label: 'Height (H)', value: '200mm' },
    { label: 'Width (W)', value: '75, 100, 125, 150, 200, 230, 300mm' },
    { label: 'Density (oven dry)', value: '550–650 kg/cum' },
    { label: 'Compressive Strength', value: 'As per IS 2185 Part (III)' },
    { label: 'Thermal Conductivity', value: '0.142 w/m k' },
    { label: 'Fire Resistance', value: '4–6 hrs, depending upon thickness' },
    { label: 'Sound Reduction Index', value: '37–49 dB, depending upon thickness' },
    { label: 'Design Density', value: '850 kg/cum' },
  ];

  toggle(card: 'blocks' | 'specs'): void {
    this.openCard = this.openCard === card ? null : card;
  }
}
