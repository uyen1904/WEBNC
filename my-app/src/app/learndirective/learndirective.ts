import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-learndirective',
  imports: [CommonModule],
  templateUrl: './learndirective.html',
  styleUrl: './learndirective.css',
})
export class Learndirective {
  show_view:number=1
  changeView()
  {
    if(this.show_view==1)
      this.show_view=2
    else
      this.show_view=1
  }

  Provinces=["Hà Nội","Huế","Đà Nẵng","HCM","Cần Thơ"]
  Products=[{"id":"p1","name":"coca","price":100,"image":"assets/img/488-4885716_coca-cola-250ml-can-hd-png-download.png"},
            {"id":"p2","name":"juice","price":120,"image":"assets/img/ai-generated-watermelon-juice-in-a-glass-isolated-on-transparent-background-png.png"},
            {"id":"p3","name":"water","price":50,"image":"assets/img/pngtree-water-cup-water-glass-container-png-image_3213206.jpg"},

  ]
}

