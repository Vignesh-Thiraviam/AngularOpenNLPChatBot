import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserChatComponent } from './user-chat/user-chat.component';
import { AiChatComponent } from './ai-chat/ai-chat.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TypeloaderComponent } from './typeloader/typeloader.component';
import { ScrollToBottomDirective } from './scroll-to-bottom.directive';

@NgModule({
  declarations: [
    AppComponent,
    UserChatComponent,
    AiChatComponent,
    TypeloaderComponent,
    ScrollToBottomDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
