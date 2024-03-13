import { Component,Input,Output,EventEmitter } from '@angular/core';
import { products,Product } from '../products';

@Component({
  selector: 'app-app-item',
  templateUrl: './app-item.component.html',
  styleUrls: ['./app-item.component.css']
})
export class AppItemComponent {
  products = products;
  @Input() selectedProduct:string | undefined;

  like(product:Product){
    product.likes+=1;
  }

  removelike(product:Product){
    if(product.likes>0) product.likes-=1;
  }
  remove(product:Product){
    // for(let i=0; i<products.length; i++){
    //   if(products[i]==product){
    //     delete products[i];
    //     break;
    //   }
    // }
    let index = this.products.indexOf(product);
    if (index !== -1) {
      this.products.splice(index, 1);
    }

  }

  share(src: string | URL | undefined) {
    // window.alert('The product has been shared!');
    window.open("https://wa.me/79172907400?text=Хочу приобрести товар по ссылке " + src,  'menubar=off,toolbar=off')
  }
  
  kaspi(a:string|undefined) {
    window.open("https://kaspi.kz/shop/c/smartphones/"+a);
  }

}