import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  navItems: Array<string> = ['Home','Shop','ContactUS']
  inputVal:any
  size:string = '24px'
  constructor() { }

  onClick(e:Event){
    this.size = '48px'
  }

  ngOnInit() {
  }

}
