import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-ai-chat',
  templateUrl: './ai-chat.component.html',
  styleUrls: ['./ai-chat.component.css']
})
export class AiChatComponent implements OnInit {

	 @Input() title:string;
  constructor() { }

  ngOnInit() {
  }

}
