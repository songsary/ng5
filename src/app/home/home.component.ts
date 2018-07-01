import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
itemCount:number=4;
btnText:string='เพิ่มรายการใหม่';
listText:string='';
listAll=[];
  constructor() { }

  ngOnInit() {
    this.itemCount=this.listAll.length;
  }
  addItem(){
    if(this.listText != '' ){
          this.listAll.push(this.listText);
      this.listText='';
      this.itemCount=this.listAll.length;
    }
  }
}
