import { Component, OnInit,HostListener } from '@angular/core';
import { faFacebookSquare, faGithubSquare, faTwitterSquare, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import {faChevronUp} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  isShow: boolean=false;
  topPosToStartShowing = 100;

faFacebook=faFacebookSquare;
faGithub=faGithubSquare;
faTwitter=faTwitterSquare;
faLinkedin=faLinkedinIn;
faChevronUp=faChevronUp;


  constructor() { }
  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }
  ngOnInit(): void {
  }
  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }
}
