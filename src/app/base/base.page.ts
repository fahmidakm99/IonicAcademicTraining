import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';


// import { IonHeader, IonToolbar, IonTitle, IonContent,IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-base',
  templateUrl: 'base.page.html',
  styleUrls: ['base.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class BasePage {
  text="Default Text";
  constructor(
    private router: Router
  ) {}
  
  login(){
    this.router.navigate(['/login']);

  }
  register(){
    this.router.navigate(['/register']);

  }
}
