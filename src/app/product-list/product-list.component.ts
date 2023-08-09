import { Component} from '@angular/core';
// import { catchError } from 'rxjs';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent  {
  title = "Api-data";
  newdata: any;
  constructor(private _apiService: ServiceService) { }
  message:"heyyy"
  ngOnInit() {
    this._apiService.getData().subscribe(res => {
      this.newdata = res
      console.log(this.newdata)
    });

  }


  receiveMessage($event){
    this.message = $event
  }
 
}
