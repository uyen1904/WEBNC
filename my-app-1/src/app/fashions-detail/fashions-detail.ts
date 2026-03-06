import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FashionAPIService } from '../myservices/fashion-api.service';

@Component({
  selector: 'app-fashions-detail',
  standalone: false,
  templateUrl: './fashions-detail.html',
  styleUrl: './fashions-detail.css',
})
export class FashionsDetail {
  fashion:any = null; 
  errMessage:string='';

  constructor(
    private route:ActivatedRoute,
    private _service: FashionAPIService, 
    private router:Router,
    private cdr: ChangeDetectorRef ) {} 

  ngOnInit(): void{
   console.log('FashionsDetail INIT');

  this.route.paramMap.subscribe(params => {
    console.log('PARAM MAP = ', params);

    const id = params.get('id');
    console.log('ID = ', id);

    if (id) {
      this._service.getFashion(id).subscribe({
        next: data => {
          console.log('FASHION FROM API = ', data);
          this.fashion = data;
          this.cdr.detectChanges();
        },
        error: err => console.log('API ERROR = ', err)
      });
    }
  });
}

  get_image(base64: string): string {
    if (!base64) return '';
    const prefix = 'data:image/jpeg;base64,';
    if (base64.startsWith(prefix)) return base64;
    return prefix + base64;
  }
  
  go_back() {
    this.router.navigate(['/ex53']);
  }
}

