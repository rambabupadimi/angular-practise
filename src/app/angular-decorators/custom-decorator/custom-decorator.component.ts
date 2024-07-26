import { Component, OnInit } from '@angular/core';
import { printLog } from '../print-log-decorator';

@Component({
  selector: 'app-custom-decorator',
  standalone: true,
  imports: [],
  templateUrl: './custom-decorator.component.html',
  styleUrl: './custom-decorator.component.scss'
})
export class CustomDecoratorComponent implements OnInit {

  result:any;
  ngOnInit(): void {
    this.result =  this.hello();
  }

  @printLog('testing')
  hello(){
    return Math.random() * 10;
  }
}
