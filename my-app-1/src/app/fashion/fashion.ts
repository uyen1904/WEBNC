import { Component } from '@angular/core';
import { FashionAPIService } from '../myservices/fashion-api.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fashion',
  standalone: false,
  templateUrl: './fashion.html',
  styleUrl: './fashion.css',
})
export class Fashion {
  fashions:any; 
  errMessage:string='' 
  constructor(private _service: FashionAPIService, private sanitizer: DomSanitizer, private router: Router) {
    this._service.getFashions().subscribe({
      next: (data) => {
        this.fashions = data.map((item: any) => ({
          ...item,
          safeImage: this.sanitizer.bypassSecurityTrustUrl('data:image/jpeg;base64,' + item.fashion_image)
        }))
      },
      error: (err) => { this.errMessage = err }
    })
  }
  view_detail(id: string) {
  console.log('Navigating to id:', id);
  this.router.navigate(['/ex53', id]);
  }
  get_image(base64:string)
  {
  if(base64==null)return ""
  let prefix="data:image/jpeg;base64,"
  if (base64.startsWith(prefix))
    return base64
  return prefix + base64
  }
}
