import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { HomeActions, homeFeature } from './store'
import { AsyncPipe } from '@angular/common'
import { HomeService } from './services/home.service'
import {
  MatCard, MatCardActions,
  MatCardAvatar,
  MatCardContent,
  MatCardHeader, MatCardImage,
  MatCardSubtitle,
  MatCardTitle,
} from '@angular/material/card'
import { MatButton } from '@angular/material/button'

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    AsyncPipe,
    MatCardTitle,
    MatCardSubtitle,
    MatCardAvatar,
    MatCardHeader,
    MatCard,
    MatCardContent,
    MatCardImage,
    MatCardActions,
    MatButton,
  ],
  providers: [
    HomeService
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {
  constructor(private store: Store) {
  }



  categories$ = this.store.select(homeFeature.selectCatalogs);

  ngOnInit(): void {
    this.store.dispatch(HomeActions.loadCatalogs());
  }
}
