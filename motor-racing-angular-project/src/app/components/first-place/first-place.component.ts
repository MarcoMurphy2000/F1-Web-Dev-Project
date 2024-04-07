import {Component, inject} from '@angular/core';
import {F1ServiceService, PodiumDetails} from '../../services/f1-service.service';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-first-place',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './first-place.component.html',
  styleUrl: './first-place.component.scss'
})
export class FirstPlaceComponent {

}

