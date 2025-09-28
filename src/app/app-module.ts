import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './components/header/header';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Toolbar } from './components/nevigation/toolbar/toolbar';
import { SideNevbarList } from './components/nevigation/side-nevbar-list/side-nevbar-list';
import { Home } from './components/home/home';
import { Profile } from './components/profile/profile';



@NgModule({
  declarations: [
    App,
    Header,
    Toolbar,
    SideNevbarList,
    Home,
    Profile
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      MatButtonModule,
  MatBadgeModule,
  MatSidenavModule,
  MatToolbarModule,
  MatTabsModule,
  MatListModule,
  MatIconModule 
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection()
  ],
  bootstrap: [App]
})
export class AppModule { }
