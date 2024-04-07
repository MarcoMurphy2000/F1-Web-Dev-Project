import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {NgForOf} from '@angular/common';
import {F1ServiceService} from '../../services/f1-service.service';

@Component({
  selector: 'app-season-list',
  templateUrl: './season-list.component.html',
  styleUrl: './season-list.component.scss',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule, NgForOf],
})
export class SeasonListComponent {
  //Service can be brought in with constructor or just injected as here.
  f1Service = inject(F1ServiceService);
  seasons: string[] = [];

  constructor() {
  }
  ngOnInit(): void {
    this.f1Service.seasons$.subscribe(seasons => this.seasons = seasons);
    this.handleGetSeasonsForDropdown();
  }

  changeValue(event: string) {
    this.f1Service.Year = event;
    this.handleGetRounds()
  }

  handleGetSeasonsForDropdown() {
    this.f1Service.getSeasons();
  }

  handleGetRounds() {
    this.f1Service.getRounds();
  }
}

