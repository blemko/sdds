import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() isExpanded: boolean;
  @Output() expand = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  toggleMobileMenu(event): void {
    const header = document.getElementsByClassName('sdds-nav')[0];
    header.classList.toggle('sdds-nav__mob-menu--opened');
  }

  closeDropdownsFromOverlay(event): void {
    const header = document.getElementsByClassName('sdds-nav')[0];
    header.classList.remove('sdds-nav__mob-menu--opened');
  }
}
