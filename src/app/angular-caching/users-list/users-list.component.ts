import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent implements OnInit {

  usersList:any = [];
  originalList:any = [];
  count = 0;

  constructor(private service: UsersService){}

  ngOnInit(): void {
    console.log('init');
  }

  showList(){
    this.service.getUsersList().subscribe({
      next:(result)=>{
        this.usersList = result;
        this.originalList = JSON.parse(JSON.stringify(this.usersList));
       
      },
      error:(error)=>{
        console.log(error);
      }
    })
  }

  applySort(){

  this.count = this.count +1;
  const tempList = this.usersList.map(
    (item:any) => { 
          const temp = {...item, nameSize: item.name.length};  
          return temp;
        });
   
  if(this.count == 1) {
      this.usersList = tempList.sort((item1:any,item2:any) => item1.nameSize - item2.nameSize );
  } else if(this.count == 2) {
       this.usersList = tempList.sort((item1:any,item2:any) => item2.nameSize - item1.nameSize );
  } else if(this.count == 3) {
       this.usersList = this.originalList;  
  } else {
    this.usersList = tempList.sort((item1:any,item2:any) => item1.nameSize - item2.nameSize );
    this.count = 0;
  }


  }


  

}
