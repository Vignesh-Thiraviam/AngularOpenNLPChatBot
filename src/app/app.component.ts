import { Component,ViewChild } from '@angular/core';
import { RestService } from '../app/rest/rest.service';
import { ScrollToBottomDirective } from './scroll-to-bottom.directive'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild(ScrollToBottomDirective,{ read: true, static: false })
  scroll: ScrollToBottomDirective;

  constructor(public rest:RestService)
  {

  } 

  
  title = 'my-chat-bot';
  heroes = [];
  childTitle:string = 'This text is passed to child';
  textInputFromUser:string;
  showloader:boolean = false;

  toggleLoader(){
    this.showloader = !this.showloader;
  }

  myFunc(){
    console.log("Entered");
  }

  onSubmit() {


    console.log("Hee" + this.textInputFromUser);
    this.heroes.push(this.textInputFromUser);

    let dataToSend = {
      username:"Vignesh",
      userText:this.textInputFromUser
    };
    
    // this.rest.getProduct().subscribe((data : {}) =>{
    //   console.log(data);
    // });

    let audio = new Audio("../assets/notification.mp3");
    audio.play();

    this.rest.addProduct(dataToSend).subscribe((data : {}) =>{
      console.log(data);
      let output = data["response"];
      this.heroes.push(output);
    });

    this.textInputFromUser = "";
  }

  
}
