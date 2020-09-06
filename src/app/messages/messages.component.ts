import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  messages = [{text: 'some text', owner: 'Tome'},
              {text: 'Other Messages', owner: 'Jane'}            
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
