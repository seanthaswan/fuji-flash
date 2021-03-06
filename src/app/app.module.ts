import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { StudyComponent } from './study/study.component';
import { FlashCardsComponent } from './flash-cards/flash-cards.component';
import { KanaTablesComponent } from './kana-tables/kana-tables.component';
import { NameToKanaComponent } from './name-to-kana/name-to-kana.component';
import { StudyHomeComponent } from './study-home/study-home.component';
import { WhyLearnComponent } from './why-learn/why-learn.component';
import { HowDoesItWorkComponent } from './how-does-it-work/how-does-it-work.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    StudyComponent,
    FlashCardsComponent,
    KanaTablesComponent,
    NameToKanaComponent,
    StudyHomeComponent,
    WhyLearnComponent,
    HowDoesItWorkComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
