import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SeasonListComponent} from './components/season-list/season-list.component';
import {RoundListComponent} from './components/round-list/round-list.component';
import {ResultTableComponent} from './components/result-table/result-table.component';
import {ResultPodiumComponent} from './components/result-podium/result-podium.component';
import {FirstPlaceComponent} from './components/first-place/first-place.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SeasonListComponent, RoundListComponent, ResultTableComponent, ResultPodiumComponent, FirstPlaceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'motor-racing-angular-project';
}
