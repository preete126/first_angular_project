import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input()
  products: { id: number, body: string, title: string }
  
  @Output() 
  messageEvent = new EventEmitter<string>();
  message:string = "hello world!"

  sendMessage(param:any){
    this.messageEvent.emit(param);
  }
}
