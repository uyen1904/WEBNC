import { Component } from '@angular/core';

@Component({
  selector: 'app-mybinding',
  imports: [],
  templateUrl: './mybinding.html',
  styleUrl: './mybinding.css',
})
export class Mybinding {
  public full_name:string="Uyên"
  public email:string="uyen1904@gmail.com"
  public is_readonly:boolean=true
  public personal_style={
    color:"red",
    fontsize:"20pt",
    fontstyle:"italic"
  }
  public td_fullname: string = "";
  get_fullname(
    fn:string,
    mn:string,
    ln:string)
  {
    this.full_name=fn+" "+mn+" "+ln;
  }
}
