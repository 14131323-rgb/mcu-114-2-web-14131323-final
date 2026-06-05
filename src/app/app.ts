import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class AppComponent {
  currentView: string = 'list';

  customerName: string = '';
  customerAddress: string = '';
  customerPhone: string = '';

  showListView() {
    this.currentView = 'list';
  }
  showDetailView() {
    this.currentView = 'detail';
  }
  showCartView() {
    this.currentView = 'cart';
  }
}
