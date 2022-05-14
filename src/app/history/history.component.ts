import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor() { }
  history : any = []

  ngOnInit(): void {
    this.history = JSON.parse(localStorage.getItem("history") || '{}')
    console.log(this.history)
  }
  clearSearch(){
    localStorage.setItem('history','')
    this.history = []
  }


}


