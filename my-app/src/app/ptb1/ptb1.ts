import { Component } from '@angular/core';

@Component({
  selector: 'app-ptb1',
  templateUrl: './ptb1.html',
  styleUrl: './ptb1.css',
})
export class Ptb1 {

  solution(a: number, b: number): string {
    if (a === 0 && b === 0) {
      return 'Vô số nghiệm';
    } else if (a === 0 && b !== 0) {
      return 'Vô nghiệm';
    } else {
      const x = -b / a;
      return 'Nghiệm x = ' + x;
    }
  }

  get_solution(a: string, b: string, tdrs: HTMLElement) {
    const a_number = parseFloat(a);
    const b_number = parseFloat(b);

    if (isNaN(a_number) || isNaN(b_number)) {
      tdrs.innerHTML = 'Vui lòng nhập số hợp lệ';
      return;
    }

    const r = this.solution(a_number, b_number);
    tdrs.innerHTML = r;
  }

  clear_data(
    a: HTMLInputElement,
    b: HTMLInputElement,
    tdr: HTMLElement
  ) {
    a.value = '';
    b.value = '';
    tdr.innerHTML = '';
    a.focus();
  }
}
