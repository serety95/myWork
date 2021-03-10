import { Component, OnInit } from '@angular/core';
import { faFacebookSquare, faGithubSquare, faTwitterSquare, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import {faChevronUp} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
faFacebook=faFacebookSquare;
faGithub=faGithubSquare;
faTwitter=faTwitterSquare;
faLinkedin=faLinkedinIn;
faChevronUp=faChevronUp;
  constructor() { }

  ngOnInit(): void {
  }

}
