import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cenzor',
  templateUrl: './cenzor.component.html',
  styleUrls: ['./cenzor.component.css']
})
export class CenzorComponent implements OnInit {
  badWords: string = 'sociable';
  words: string = '';
  inputPlaceholder: string = 'word here..';
  text: string = '';
  textareaPlaceholder: string = 'word here..';
  stars: string = '';
  inputBorderColor = 'lightblue';
  textareaBorderColor = 'lightblue';
  newWords: Array<string> = [];
  result: string;
  regex = new RegExp(/ /gi);
  arr: Array<string>
  constructor() { }

  ngOnInit(): void {
  }

  add(): void{
    if(this.words == ''){
      this.inputPlaceholder = 'Please write a word!'
      this.inputBorderColor = 'red';
    }
    else if (this.badWords == ''){
      this.badWords += this.words;
      this.words = '';
      this.inputBorderColor = 'lightblue';
      this.inputPlaceholder = 'word here..'
    }
    else{
      this.badWords += `,${this.words}`;
      this.inputBorderColor = 'lightblue';
      this.words = '';
      this.inputPlaceholder = 'word here..'
      this.arr = this.badWords.split(',');
    }
  }

  reset(): void{
    this.badWords = '';
  }

  cenzor() {
    if(this.text == ''){
      this.textareaPlaceholder = 'Please write a word!';
      this.textareaBorderColor = 'red';
    }
    for (let i = 0; i < this.arr.length; i++){
      this.newWords = this.arr;
      this.stars = ''
      for(let j = 0; j < this.newWords[i].length; j++){
          this.stars += '*';
      }
      this.regex = new RegExp(`\\b${this.newWords[i]}\\b`, 'gi');
      this.result = this.text.replace(this.regex, this.stars);
      this.text = this.result
    }
    
  }
}
