import { Routes } from '@angular/router';
import { Contact } from './contact/contact';
import { About } from './about/about';
import { Mybinding } from './mybinding/mybinding';
import { Ptb1 } from './ptb1/ptb1';
import { Gpa } from './gpa/gpa';
import { Ptb2 } from './ptb2/ptb2';
import { Learndirective } from './learndirective/learndirective';

export const routes: Routes = [
  { path: '', redirectTo: 'learndirective', pathMatch: 'full' },
  { path: 'mybinding', component: Mybinding },
  { path: 'contact', component: Contact },
  { path: 'about', component: About },
  { path: 'ptb1', component: Ptb1 },
  { path: 'gpa', component: Gpa },
  { path: 'ptb2', component: Ptb2 },
  { path: 'learndirective', component: Learndirective }
];
