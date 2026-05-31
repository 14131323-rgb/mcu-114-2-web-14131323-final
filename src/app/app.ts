import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.html',  
  styleUrl: './app.css'       
})
export class AppComponent {
  // 控制顯示列表還是明細
  showDetail: boolean = false;

  showDetailView() {
    this.showDetail = true;
  }

  showListView() {
    this.showDetail = false;
  }
}