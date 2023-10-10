import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {

  allowNewServer = false;
  createServer = 'no server created';
  serverName = 'TEST';

  username = '';
  notEmpty = false;

  serverCreated = false;

  constructor() {
   setTimeout(() => {
    this.allowNewServer = true;
   }, 3000)
  }

  ngOnInit(): void {
      
  }

  onCreateServer() {
    this.serverCreated = true;
    this.createServer = 'server ' + this.serverName + ' now created';
  }

  onUserInput(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onReset() {
    this.username = '';
  }

  getColor() {
    return this.username === this.username ? 'skyblue' : 'red';
  }

}
