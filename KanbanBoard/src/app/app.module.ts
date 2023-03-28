import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { StakeholderComponent } from './components/stakeholder/stakeholder.component';
import { ExternalLinkComponent } from './components/external-link/external-link.component';
import { LabelComponent } from './components/label/label.component';
import { AvatarComponent } from './components/avatar/avatar.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    StakeholderComponent,
    ExternalLinkComponent,
    LabelComponent,
    AvatarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
