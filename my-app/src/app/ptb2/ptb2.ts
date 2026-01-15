import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ptb2',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ptb2.html',
  styleUrl: './ptb2.css',
})
export class Ptb2 {

  a_number: number = 0;
  b_number: number = 0;
  c_number: number = 0;
  result: string = '...';

  get_solution() {
    if (this.a_number === 0) {
      // Phương trình bậc 1
      if (this.b_number === 0 && this.c_number === 0) {
        this.result = 'Tùm lum nghiệm';
      }
      else if (this.b_number === 0 && this.c_number !== 0) {
        this.result = 'Vô nghiệm';
      }
      else {
        let x = -this.c_number / this.b_number;
        this.result = 'x = ' + x;
      }
    }
    else {
      // Phương trình bậc 2
      let delta = Math.pow(this.b_number, 2) - 4 * this.a_number * this.c_number;

      if (delta < 0) {
        this.result = 'Phương trình vô nghiệm';
      }
      else if (delta === 0) {
        let x = -this.b_number / (2 * this.a_number);
        this.result = 'Nghiệm kép x = ' + x;
      }
      else {
        let x1 = (-this.b_number + Math.sqrt(delta)) / (2 * this.a_number);
        let x2 = (-this.b_number - Math.sqrt(delta)) / (2 * this.a_number);
        this.result = 'x1 = ' + x1 + ', x2 = ' + x2;
      }
    }
  }

  clear_data() {
    this.a_number = 0;
    this.b_number = 0;
    this.c_number = 0;
    this.result = '...';
  }
}
