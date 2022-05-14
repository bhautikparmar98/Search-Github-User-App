import { Component, OnInit } from '@angular/core';
import { SearchServiceService } from '../search-service.service';
import {User} from '../User'
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private searchservice:SearchServiceService) { }
  userInfo : User ={
    avatar_url:'',
    name:'',
    html_url:''
  }
  showInfo:boolean=false
  errorMessage:string=''
  value : string = ''

  searchHistory:any=[]

  ngOnInit(): void {
    this.searchHistory = JSON.parse(localStorage.getItem("history") || '{}')
    console.log(Array.isArray(this.searchHistory))
  }
  addinginSearchHistory(value:string, status:string){
    if(!Array.isArray(this.searchHistory)){
      this.searchHistory = []
      this.searchHistory.push({name:value , status:status})
    }else{
      this.searchHistory.push({name:value , status:status})
    } 
  }
  search(value: string){
    this.searchservice.search(value).subscribe(data=>{
        this.showInfo=true
        this.errorMessage=''
        this.userInfo.avatar_url=data.avatar_url;
        this.userInfo.name = data.name;
        this.userInfo.html_url = data.html_url;
        this.addinginSearchHistory(value,'success')
        localStorage.setItem("history",JSON.stringify(this.searchHistory))
    },err=>{
      this.errorMessage=err.error.message
      this.addinginSearchHistory(value,'fail')
      localStorage.setItem('history',JSON.stringify(this.searchHistory))
    })
  }
  
}
