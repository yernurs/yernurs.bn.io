import { Component } from '@angular/core';
import { faTwitter, faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'application';
  faTwitter = faTwitter;
  faGoogle = faGoogle;
  faGithubAlt = faGithub;
}
