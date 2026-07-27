import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  submitting = false;
  submitted = false;
  errorMsg = '';

  // Contact Form
  form!: FormGroup;

  // Company phone numbers
  readonly phoneNumbers = [
    { display: '+91 91309 96878', tel: 'tel:+919130996878' },
    { display: '+91 70208 44548', tel: 'tel:+917020844548' },
  ];

  readonly email = 'pc4xaacblocks2023@gmail.com';
  readonly whatsappNumber = '919130996878';
  readonly instagram = 'https://instagram.com/parshwanathc4x';

  readonly address =
      'Khasra No. 81, Maouja, Shirpur, Kamptee, Nagpur, Maharashtra, 441401';

  readonly mapEmbedUrl: SafeResourceUrl;

  constructor(
      private fb: FormBuilder,
      private contactService: ContactService,
      private sanitizer: DomSanitizer
  ) {
    // Initialize Form
    this.form = this.fb.group({
      name: ['', Validators.required],
      mobile: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[6-9]\d{9}$/),
        ],
      ],
      message: [''],
    });

    // Google Map
    const rawUrl =
        'https://www.google.com/maps?q=' +
        encodeURIComponent(this.address) +
        '&output=embed';

    this.mapEmbedUrl =
        this.sanitizer.bypassSecurityTrustResourceUrl(rawUrl);
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.submitting = true;
    this.errorMsg = '';

    this.contactService.submitEnquiry(this.form.getRawValue()).subscribe({
      next: () => {
        this.submitting = false;
        this.submitted = true;
        this.form.reset();
      },
      error: () => {
        this.submitting = false;
        this.errorMsg =
            'Could not send right now — please call or WhatsApp us directly.';
      },
    });
  }
}