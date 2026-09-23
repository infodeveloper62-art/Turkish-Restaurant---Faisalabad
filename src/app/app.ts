import {
  ChangeDetectionStrategy,
  Component,
  computed,
  HostListener,
  inject,
  OnInit,
  PLATFORM_ID,
  signal
} from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import {
  RESTAURANT_INFO,
  POPULAR_DISHES,
  FULL_MENU,
  REVIEWS,
  GALLERY_ITEMS,
  WHY_CHOOSE_US
} from './data/restaurant.data';
import {
  MenuItem,
  Review,
  GalleryItem,
  ConfirmedBooking,
  ReservationRequest
} from './models/restaurant.model';

@Component({
  selector: 'app-root',
  imports: [CommonModule, ReactiveFormsModule, MatIconModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App implements OnInit {
  private readonly platformId = inject(PLATFORM_ID);

  // Restaurant details
  readonly restaurantInfo = RESTAURANT_INFO;
  readonly popularDishes: MenuItem[] = POPULAR_DISHES;
  readonly fullMenu: MenuItem[] = FULL_MENU;
  readonly reviews: Review[] = REVIEWS;
  readonly galleryItems: GalleryItem[] = GALLERY_ITEMS;
  readonly whyChooseUs = WHY_CHOOSE_US;

  // UI state signals
  readonly isScrolled = signal<boolean>(false);
  readonly mobileMenuOpen = signal<boolean>(false);
  readonly activeSection = signal<string>('hero');
  readonly selectedCategory = signal<string>('all');
  readonly menuSearchQuery = signal<string>('');
  readonly selectedGalleryCategory = signal<string>('all');
  readonly selectedDishModal = signal<MenuItem | null>(null);
  readonly lightboxItem = signal<GalleryItem | null>(null);
  readonly confirmedBooking = signal<ConfirmedBooking | null>(null);
  readonly toastMessage = signal<string | null>(null);
  readonly toastType = signal<'success' | 'info'>('success');
  readonly isSubmittingReservation = signal<boolean>(false);
  readonly isSubmittingInquiry = signal<boolean>(false);
  readonly newsletterSubmitted = signal<boolean>(false);

  // Minimum date for reservation (today)
  readonly minReservationDate = signal<string>('');

  // Reactive Reservation Form
  readonly reservationForm = new FormGroup({
    fullName: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(3)]
    }),
    phone: new FormControl<string>('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.pattern(/^((\+92)|(0092)|(0))?3[0-9]{2}[-]?[0-9]{7}$/)
      ]
    }),
    email: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email]
    }),
    date: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required]
    }),
    time: new FormControl<string>('20:00', {
      nonNullable: true,
      validators: [Validators.required]
    }),
    guests: new FormControl<number>(2, {
      nonNullable: true,
      validators: [Validators.required, Validators.min(1), Validators.max(30)]
    }),
    seatingArea: new FormControl<string>('family-cabana', {
      nonNullable: true,
      validators: [Validators.required]
    }),
    specialRequests: new FormControl<string>('', { nonNullable: true })
  });

  // Reactive Contact / Inquiry Form
  readonly inquiryForm = new FormGroup({
    name: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(3)]
    }),
    contact: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required]
    }),
    subject: new FormControl<string>('General Table Inquiry', {
      nonNullable: true
    }),
    message: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(10)]
    })
  });

  // Newsletter control
  readonly newsletterControl = new FormControl<string>('', {
    nonNullable: true,
    validators: [Validators.required, Validators.email]
  });

  // Computed filtered menu items
  readonly filteredMenuItems = computed(() => {
    const category = this.selectedCategory();
    const query = this.menuSearchQuery().trim().toLowerCase();

    return this.fullMenu.filter((dish) => {
      const matchesCategory =
        category === 'all' || dish.category === category;

      const matchesSearch =
        !query ||
        dish.name.toLowerCase().includes(query) ||
        dish.turkishName.toLowerCase().includes(query) ||
        dish.description.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  });

  // Computed filtered gallery items
  readonly filteredGalleryItems = computed(() => {
    const category = this.selectedGalleryCategory();
    if (category === 'all') {
      return this.galleryItems;
    }
    return this.galleryItems.filter((item) => item.category === category);
  });

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Set default minimum date to today
      const today = new Date();
      const yyyy = today.getFullYear();
      const mm = String(today.getMonth() + 1).padStart(2, '0');
      const dd = String(today.getDate()).padStart(2, '0');
      const formattedDate = `${yyyy}-${mm}-${dd}`;
      this.minReservationDate.set(formattedDate);
      this.reservationForm.patchValue({ date: formattedDate });
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const scrollPos = window.scrollY || document.documentElement.scrollTop;
    this.isScrolled.set(scrollPos > 60);

    // Track active section for nav highlight
    const sections = ['hero', 'about', 'popular', 'menu', 'why-us', 'gallery', 'reviews', 'reservation', 'contact'];
    for (const sectionId of sections) {
      const element = document.getElementById(sectionId);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 140 && rect.bottom >= 140) {
          this.activeSection.set(sectionId);
          break;
        }
      }
    }
  }

  scrollToSection(sectionId: string, event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    this.mobileMenuOpen.set(false);
    if (!isPlatformBrowser(this.platformId)) return;

    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      this.activeSection.set(sectionId);
    }
  }

  scrollToTop(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update((v) => !v);
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }

  setMenuCategory(category: string): void {
    this.selectedCategory.set(category);
  }

  setGalleryCategory(category: string): void {
    this.selectedGalleryCategory.set(category);
  }

  onSearchChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.menuSearchQuery.set(input.value);
  }

  clearSearch(): void {
    this.menuSearchQuery.set('');
  }

  openDishModal(dish: MenuItem): void {
    this.selectedDishModal.set(dish);
  }

  closeDishModal(): void {
    this.selectedDishModal.set(null);
  }

  openLightbox(item: GalleryItem): void {
    this.lightboxItem.set(item);
  }

  closeLightbox(): void {
    this.lightboxItem.set(null);
  }

  submitReservation(): void {
    if (this.reservationForm.invalid) {
      this.reservationForm.markAllAsTouched();
      this.showToast('Please check all reservation fields with correct details.', 'info');
      return;
    }

    this.isSubmittingReservation.set(true);

    // Simulate swift instant confirmation
    setTimeout(() => {
      const val = this.reservationForm.getRawValue();
      const randomNum = Math.floor(10000 + Math.random() * 90000);
      const bookingId = `TRK-${randomNum}`;

      const confirmed: ConfirmedBooking = {
        bookingId,
        createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        details: {
          fullName: val.fullName,
          phone: val.phone,
          email: val.email,
          date: val.date,
          time: val.time,
          guests: val.guests,
          seatingArea: val.seatingArea as ReservationRequest['seatingArea'],
          specialRequests: val.specialRequests
        }
      };

      this.confirmedBooking.set(confirmed);
      this.isSubmittingReservation.set(false);
      this.showToast(`Table confirmed! Reference #${bookingId}. We look forward to hosting you.`, 'success');
    }, 600);
  }

  closeBookingModal(): void {
    this.confirmedBooking.set(null);
    this.reservationForm.reset({
      fullName: '',
      phone: '',
      email: '',
      date: this.minReservationDate(),
      time: '20:00',
      guests: 2,
      seatingArea: 'family-cabana',
      specialRequests: ''
    });
  }

  getWhatsAppShareUrl(booking: ConfirmedBooking): string {
    const d = booking.details;
    const text = encodeURIComponent(
      `*Table Reservation Confirmation - Turkish Restaurant Faisalabad*\n` +
      `Booking Ref: ${booking.bookingId}\n` +
      `Guest Name: ${d.fullName}\n` +
      `Guests: ${d.guests} Persons\n` +
      `Date & Time: ${d.date} at ${d.time}\n` +
      `Seating Area: ${d.seatingArea}\n` +
      `Location: Sheikhupura Rd, near Misaq ul Mall, Nishatabad, Faisalabad\n` +
      `Looking forward to authentic Turkish taste!`
    );
    return `https://wa.me/${this.restaurantInfo.whatsapp}?text=${text}`;
  }

  submitInquiry(): void {
    if (this.inquiryForm.invalid) {
      this.inquiryForm.markAllAsTouched();
      this.showToast('Please complete all message fields.', 'info');
      return;
    }

    this.isSubmittingInquiry.set(true);
    setTimeout(() => {
      this.isSubmittingInquiry.set(false);
      this.inquiryForm.reset({
        name: '',
        contact: '',
        subject: 'General Table Inquiry',
        message: ''
      });
      this.showToast('Thank you! Your message has reached our team. We will call you back shortly.', 'success');
    }, 500);
  }

  submitNewsletter(): void {
    if (this.newsletterControl.invalid) {
      this.newsletterControl.markAsTouched();
      this.showToast('Please enter a valid email address.', 'info');
      return;
    }

    this.newsletterSubmitted.set(true);
    const email = this.newsletterControl.value;
    this.newsletterControl.reset();
    this.showToast(`Hoş geldiniz! ${email} has been subscribed to Turkish Restaurant specials.`, 'success');
  }

  showToast(message: string, type: 'success' | 'info' = 'success'): void {
    this.toastMessage.set(message);
    this.toastType.set(type);

    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        if (this.toastMessage() === message) {
          this.toastMessage.set(null);
        }
      }, 4500);
    }
  }

  dismissToast(): void {
    this.toastMessage.set(null);
  }

  handleImageFallback(event: Event): void {
    const target = event.target as HTMLImageElement;
    if (target && !target.src.endsWith('/images/hero-turkish-grill.jpg')) {
      target.src = '/images/hero-turkish-grill.jpg';
    }
  }
}
