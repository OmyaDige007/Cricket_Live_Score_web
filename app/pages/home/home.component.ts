import { Component } from '@angular/core';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgbPaginationModule, NgbAlertModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
