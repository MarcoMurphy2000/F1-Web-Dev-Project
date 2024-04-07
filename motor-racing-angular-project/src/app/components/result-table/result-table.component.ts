import {Component, inject} from '@angular/core';
import {F1ServiceService} from '../../services/f1-service.service';
import {AsyncPipe} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-result-table',
  templateUrl: './result-table.component.html',
  standalone: true,
  imports: [MatCardModule, MatTableModule, AsyncPipe],
  styleUrls: ['./result-table.component.scss']
})

export class ResultTableComponent {
  f1Service = inject(F1ServiceService);
  results$ = this.f1Service.results$;
  displayedColumns: string[] = ['position', 'name', 'time', 'nationality', 'points'];
}
