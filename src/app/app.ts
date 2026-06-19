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

  quantity: number = 2;
  unitPrice: number = 1580;

  getTotalPrice(): number {
    const qty = this.quantity > 0 ? this.quantity : 0;
    return qty * this.unitPrice;
  }

  getTotalPriceString(): string {
    const total = this.getTotalPrice();
    return total.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }

  deleteProduct() {
    this.quantity = 0;
  }

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
