import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class AppComponent {
  // 用來控制目前顯示哪一個頁面：'list' (列表) | 'detail' (明細) | 'cart' (購物車)
  currentView: string = 'list';

  // 切換到商品列表
  showListView() {
    this.currentView = 'list';
  }

  // 切換到商品明細
  showDetailView() {
    this.currentView = 'detail';
  }

  // 切換到購物車結帳頁
  showCartView() {
    this.currentView = 'cart';
  }
}
