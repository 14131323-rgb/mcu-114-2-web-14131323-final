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

  // 基本資料繫結變數
  customerName: string = '';
  customerAddress: string = '';
  customerPhone: string = '';

  // 產品購買數量與單價
  quantity: number = 2;
  unitPrice: number = 1580;

  // 1. 純數值計算 (按鈕啟用條件或內部邏輯使用)
  getTotalPrice(): number {
    const qty = this.quantity > 0 ? this.quantity : 0;
    return qty * this.unitPrice;
  }

  // 2. 新增這個：直接轉成帶有千分位和小數點兩位的字串，避開 HTML Pipe 的紅線問題！
  getTotalPriceString(): string {
    const total = this.getTotalPrice();
    return total.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
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
