import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-author',
  standalone: true,
  imports: [],
  templateUrl: './author.component.html',
  styleUrl: './author.component.scss'
})
export class AuthorComponent implements OnInit {

  authorList:any = [];

  constructor(private authorService: AuthorService) {}

  ngOnInit(): void {
    this.loadAuthors();
  }

  loadAuthors() {
    this.authorService.getAuthorsList().subscribe({
      next:(result:any) =>{
        console.log(result);
        this.authorList = result.results;
       
      },
      error:(error) =>{
        console.log(error)
      }
    })
  }
  

}
