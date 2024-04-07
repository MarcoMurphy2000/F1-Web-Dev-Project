import {Component, inject} from '@angular/core';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatOption} from '@angular/material/autocomplete';
import {MatSelect} from '@angular/material/select';
import {F1ServiceService} from '../../services/f1-service.service';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-round-list',
  standalone: true,
  imports: [
    MatFormField,
    MatLabel,
    MatOption,
    MatSelect,
    AsyncPipe
  ],
  templateUrl: './round-list.component.html',
  styleUrl: './round-list.component.scss'
})
export class RoundListComponent {
  f1Service = inject(F1ServiceService);

  rounds$ = this.f1Service.rounds$;

  changeValue(round: any) {
    this.f1Service.Round = round.roundNumber;
    this.f1Service.RoundName = round.raceName;
    this.handleGetResults();
    this.handleGetPodium();
  }


  handleGetResults() {
    this.f1Service.getResults();
  }

  handleGetPodium() {
    this.f1Service.getPodium();
  }
}
