import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../users.service';
import { CacheService } from '../../cache.service';
import { DynamicTableComponent } from '@rambabupadimi123/dynamic-table';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-custom-cache',
  standalone: true,
  imports: [ DynamicTableComponent,AsyncPipe],
  templateUrl: './custom-cache.component.html',
  styleUrl: './custom-cache.component.scss'
})
export class CustomCacheComponent implements OnInit {


  title = 'angular-table-lib';

  displayedColumns: string[] = [
    'name',
    'email',
   
  ];
  public columns: any[] = [
    {name:'name',label: 'Name'},
    { name: 'email', label: 'Email' },
  ];

  list$ = Promise.resolve([{name:'Rambabu',email: 'babu.ramu111@gmail.com'},{name:'Kiran',email: 'kiran@gmail.com'}])

  constructor(private userService: UsersService, private cacheService: CacheService){

  }

  ngOnInit(): void {
    setInterval(()=>{

      // const result = this.cacheService.get('')

      this.loadUsers();
      // setInterval;
    },5000)

  }

  loadUsers(){
    this.userService.getUsersList().subscribe({
      next:(result)=>{
        console.log(result);
      },
      error:(error)=>{
        console.log(error);
      }
    })
  }

}
