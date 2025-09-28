import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  standalone: false,
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.css'
})
export class Toolbar {

   @Output() SideNavToggle = new EventEmitter();  

  openSidenav() {
   this.SideNavToggle.emit();
}

}
