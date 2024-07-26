import { AfterViewInit, Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit , AfterViewInit{

  usersList:any = [];
  postsList:any = [];
  selectedUser:any;

  constructor(private service: UsersService){}
 
  ngAfterViewInit(): void {
   
  }

  ngOnInit(): void {
    this.loadUsers();
    this.loadPosts(-1);  
  }

  loadUsers(){
    this.service.getUsers().subscribe({
      next:(result)=>{
          this.usersList = result;
          console.log(this.usersList);
      },
      error:(error)=>{

      }
    })
  }

  loadPosts(id:number) {
    this.service.getPosts(id).subscribe({
      next:(result)=>{
          this.postsList = [];
          this.postsList = result;
          console.log(this.postsList);
      },
      error:(error)=>{

      }
    })
  }

  onUserSelect(event:any) {
    console.log(event.target.value);
    this.loadPosts(event.target.value);
  }
}
