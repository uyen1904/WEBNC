import { Component } from '@angular/core';

@Component({
  selector: 'app-gpa',
  imports: [],
  templateUrl: './gpa.html',
  styleUrl: './gpa.css',
})

export class Gpa {

  get_gpa(
    qt: string,
    gk: string,
    ck: string,
    result: HTMLElement
  ) {
    const qt_num = parseFloat(qt);
    const gk_num = parseFloat(gk);
    const ck_num = parseFloat(ck);

    if (isNaN(qt_num) || isNaN(gk_num) || isNaN(ck_num)) {
      result.innerHTML = 'Vui lòng nhập đầy đủ điểm hợp lệ';
      return;
    }

    const gpa = qt_num * 0.3 + gk_num * 0.2 + ck_num * 0.5;

    let rank = '';
    if (gpa >= 9) {
      rank = 'Xuất sắc';
    } else if (gpa >= 8) {
      rank = 'Giỏi';
    } else if (gpa >= 7) {
      rank = 'Khá';
    } else if (gpa >= 5) {
      rank = 'Trung bình';
    } else {
      rank = 'Yếu';
    }

    result.innerHTML = `GPA = ${gpa.toFixed(2)} – ${rank}`;
  }

  clear_data(
    qt: HTMLInputElement,
    gk: HTMLInputElement,
    ck: HTMLInputElement,
    result: HTMLElement
  ) {
    qt.value = '';
    gk.value = '';
    ck.value = '';
    result.innerHTML = '';
    qt.focus();
  }
}

