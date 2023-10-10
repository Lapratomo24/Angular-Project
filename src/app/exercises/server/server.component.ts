import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {

  serverId = 4;
  serverStatus = "shutdown";

  showPara = false;
  log: any = [];

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'running' : 'shutdown'
  }

  ngOnInit(): void {
      
  }

  getStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'running' ? 'limegreen' : 'red';
  }

  onClick() {
    this.showPara = true;
  }

  onDisplay() {
    this.showPara = !this.showPara;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }

}
