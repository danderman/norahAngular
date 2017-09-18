import { Component, OnInit } from '@angular/core';
import { ConfigurePiwikTracker, UsePiwikTracker } from 'angular2piwik';
import { AuthService } from '../auth/auth.service';


declare const $: any;
declare const jQuery: any;
@Component({
  selector: 'app-game-maker-start',
  templateUrl: './game-maker-start.component.html',
  styleUrls: ['./game-maker-start.component.css'],
  providers:[ConfigurePiwikTracker,UsePiwikTracker]
})
export class GameMakerStartComponent implements OnInit {

  constructor( private configurePiwikTracker: ConfigurePiwikTracker,
    private usePiwikTracker: UsePiwikTracker,
    private authService: AuthService) { 
     
    }

  ngOnInit() {
  }
  ngAfterViewInit() {
    $(window).load(() => {
      this.configurePiwikTracker.setDocumentTitle();
    if(this.authService.authenticated){
      console.log(this.authService.currentUser.email);
      this.configurePiwikTracker.setUserId(`"${this.authService.currentUser.email}"`);
      this.usePiwikTracker.trackPageView();
    }else {console.log("Not authenticated");
    this.usePiwikTracker.trackPageView();}
  });
}
}
