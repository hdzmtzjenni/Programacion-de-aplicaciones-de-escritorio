import { Component } from '@angular/core';

interface Contact {
  name: String;
  image: String;
  user: String;
  link?: String;
}
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contacts: Contact[];

  constructor() {
    this.contacts = [
      {
        name: 'Linkedin',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png',
        user: 'Jennifer Hernández',
        link: 'https://www.linkedin.com/in/jennifer-hern%C3%A1ndez-b74692216'
      },
      {
        name: 'Github',
        image: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
        user: 'Hdzmtzjenni',
        link: 'https://github.com/hdzmtzjenni'
      },
      {
        name: 'Gmail',
        image: 'https://graffica.info/wp-content/uploads/2021/06/logodegmailgraffica-1-1024x646.png',
        user: 'jennifer.ariadna.hernandez@gmail.com',
      }
    ]
  }
}
