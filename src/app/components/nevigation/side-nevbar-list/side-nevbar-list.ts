import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-side-nevbar-list',
  standalone: false,
  templateUrl: './side-nevbar-list.html',
  styleUrl: './side-nevbar-list.css'
})
export class SideNevbarList implements OnInit {
@Output() closeSideNav = new EventEmitter();

  constructor() { }

   onToggleClose() {
    this.closeSideNav.emit();
}

  ngOnInit() {
  }
}
