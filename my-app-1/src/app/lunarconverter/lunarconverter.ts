import { Component, OnInit } from '@angular/core';
import { Lunaryear } from '../lunaryear/lunaryear';

@Component({
  selector: 'app-lunarconverter',
  standalone: false,
  templateUrl: './lunarconverter.html',
  styleUrl: './lunarconverter.css',
})
export class Lunarconverter implements OnInit {

  //Dữ liệu nguồn cho Dropdown
  days: number[] = [];
  months: number[] = [];
  years: number[] = [];

  //Biến để binding với giao diện (lưu giá trị người dùng chọn)
  selectedDay: number = 19;
  selectedMonth: number = 4;
  selectedYear: number = 2005;

  //Biến lưu kết quả hiển thị
  lunarResult: any = null;

  //Hằng số Can - Chi
  readonly CAN = ['Canh', 'Tân', 'Nhâm', 'Quý', 'Giáp', 'Ất', 'Bính', 'Đinh', 'Mậu', 'Kỷ'];
  readonly CHI = ['Thân', 'Dậu', 'Tuất', 'Hợi', 'Tý', 'Sửu', 'Dần', 'Mão', 'Thìn', 'Tỵ', 'Ngọ', 'Mùi'];

  constructor() { }

  ngOnInit(): void {
    
    this.days = Array.from({ length: 31 }, (_, i) => i + 1);
    this.months = Array.from({ length: 12 }, (_, i) => i + 1);
   
    for (let i = 1900; i <= 2100; i++) {
      this.years.push(i);
    }
   
    this.updateDays(); 
  }

  
  updateDays(): void {
    
    
    const daysInMonth = new Date(this.selectedYear, this.selectedMonth, 0).getDate();
    
    
    this.days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

   
    if (this.selectedDay > daysInMonth) {
      this.selectedDay = 1; 
    }
  }

 
  findLunarYearDetail(): void {
    
    const lunarObj = new Lunaryear(this.selectedDay, this.selectedMonth, this.selectedYear);

   
    const date = new Date(lunarObj.year, lunarObj.month - 1, lunarObj.day);
    
   
    const daysOfWeek = ['Chủ Nhật', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'];
    const thuTrongTuan = daysOfWeek[date.getDay()];

    
    const canYear = this.CAN[lunarObj.year % 10];
    const chiYear = this.CHI[lunarObj.year % 12];
    const namAmLichText = `${canYear} ${chiYear}`;

  
    const lunarDay = lunarObj.day > 20 ? lunarObj.day - 10 : lunarObj.day + 5; 
    const lunarMonth = lunarObj.month > 1 ? lunarObj.month - 1 : 12;
    const lunarYearNum = lunarObj.month === 1 ? lunarObj.year - 1 : lunarObj.year;

    
    const thangAmText = "Quý Tỵ"; 
    const ngayAmText = "Kỷ Mùi";  

    
    this.lunarResult = {
      thu: `Ngày ${thuTrongTuan}`, 
      ngayThangNam: `${lunarDay}/${lunarMonth}/${lunarYearNum}`,
      namAm: namAmLichText,
      thangAm: thangAmText,
      ngayAm: ngayAmText
    };
  }

}
