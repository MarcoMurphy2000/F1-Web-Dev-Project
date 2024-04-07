import { Component, OnInit } from '@angular/core';
import {F1ServiceService, PodiumDetails, ResultDetails} from '../../services/f1-service.service';
import {NgClass, NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-result-podium',
  templateUrl: './result-podium.component.html',
  standalone: true,
  imports: [
    NgClass,
    NgIf,
    NgForOf
  ],
  styleUrls: ['./result-podium.component.scss']
})
export class ResultPodiumComponent implements OnInit {
  podium: PodiumDetails[] = [];


  constructor(protected f1Service: F1ServiceService) { }

  ngOnInit(): void {
    this.f1Service.podium$.subscribe(podium => {
      this.podium = podium.sort((a, b) => (+a.givenName) - (+b.givenName)).slice(0, 3);
    });
    this.f1Service.getPodium();
  }
}
