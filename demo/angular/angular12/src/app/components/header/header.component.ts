import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() isExpanded: boolean;
  @Output() expand = new EventEmitter();

  items = [
    {
      title: 'Home',
      link: '/home',
    },
    {
      title: 'Form',
      link: '/form',
    },
  ];

  ngOnInit(): void {}

  toggleMobileMenu(event): void {
    const header = document.getElementsByClassName('sdds-nav')[0];
    header.classList.toggle('sdds-nav__mob-menu--opened');
  }

  closeDropdownsFromOverlay(event): void {
    const header = document.getElementsByClassName('sdds-nav')[0];
    header.classList.remove('sdds-nav__mob-menu--opened');
  }

  removeActiveClass(): void {
    const inlineMenuItems = document.querySelectorAll('.sdds-nav__item');
    inlineMenuItems.forEach((item) => {
      item.classList.remove('sdds-nav__item--active');
    });
  }

  inlineMenuClick(event): void {
    this.removeActiveClass();
    event.closest('.sdds-nav__item').classList.add('sdds-nav__item--active');
  }

  logoClick(): void {
    this.removeActiveClass();
  }
}
