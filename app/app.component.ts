import { Component } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,RouterModule,NgbPaginationModule, NgbAlertModule,NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'crickfront';
}
