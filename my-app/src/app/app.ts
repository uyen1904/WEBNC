import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Mybinding } from './mybinding/mybinding';
import { Ptb1 } from './ptb1/ptb1';
import { Gpa } from './gpa/gpa';
import { Ptb2 } from './ptb2/ptb2';
import { Learndirective } from './learndirective/learndirective';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, About, Contact, Mybinding, Ptb1, Gpa, Ptb2, Learndirective],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-app');
}
