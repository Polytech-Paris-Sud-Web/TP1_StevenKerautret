import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Output()
  messageEvent = new EventEmitter<string>();

  text!: string;

  constructor() { }

  ngOnInit() {
  }

  sendMessage(text : string) {
    this.messageEvent.emit(text);
  }
}
