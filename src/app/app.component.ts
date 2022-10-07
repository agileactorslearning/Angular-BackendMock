import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'httpint';
  
  public products: Product[] = [];
  private productsUrl = 'api/products/';
  constructor(private http: HttpClient) { }
  
  ngOnInit() {
    debugger;
    this.http.get<Product[]>(this.productsUrl).subscribe(p => {
      debugger;
      this.products = p
      const k = 1;
      debugger;
    });
    debugger;    
  }
}

export interface Product {
  id: number;
  name: string;
}