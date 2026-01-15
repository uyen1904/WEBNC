import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  contact_name:string="Dao Thao Uyen"
  contact_email:string="uyen19042005@gmail.com"
  contact_phone:string="0703 479 608"
  sendContact(your_name:string):void
  {
    alert("Bạn ["+your_name+"] muốn gửi contact?")
  }
}
