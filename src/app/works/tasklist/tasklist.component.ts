import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {
  inputSave:string;
  save: boolean = false;
  num: number;

  task: string = '';
  sendTask: string;
  tasks = {};
  status: boolean = false;
  list: Array<any> = [
    this.tasks = {
      task: 'HTML5',
      progress: 'Done',
      status: true
    },
    this.tasks = {
      task: 'JavaScript',
      progress: 'In PROGRESS',
      status: false
    },
    this.tasks = {
      task: 'Angular',
      progress: 'In PROGRESS',
      status: false
    },
  ];
  counter = this.list.length;
  progress: string = 'IN PROGRESS';

  constructor() { }

  ngOnInit(): void {
  }

  add(): void {
    if(this.task !== ''){
      this.tasks = {
        task: this.task,
        progress: this.progress,
        status: this.status
      }
    }
    this.list.push(this.tasks)
    this.task = '';
    this.counter = this.list.length;
  }
  getCount(count: number): void{
    this.counter = count;
  }

  change(i): void {
    if (this.list[i].status === false){
      this.list[i].progress = 'DONE';
      this.list[i].status = true;
    }
    else{
      this.list[i].progress = 'IN PROGRESS';
      this.list[i].status = false;
    }
  }

  delete(index: number): void{
    this.list.splice(index, 1);
    this.counter = this.list.length;
  }

  edit(index: number): void {
    this.save = true;
    this.inputSave = this.list[index].task;
    this.num = index;
  }

  saveBtn(): void {
    this.list[this.num].task = this.inputSave;
    this.save = false;
  } 

}
