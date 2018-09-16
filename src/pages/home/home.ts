import { Component, NgZone } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  posts = [];
  imageUrl: string = 'assets/imgs/profile/perfil.jpg';
  mostrar_titulo: boolean;
  constructor(public navCtrl: NavController, private ngzone: NgZone) {
    for (let i = 0; i < 10; i++) {
      this.posts[i] = {
        text: 'Canción ' + i,
        created_at: (i + 1),
      };
    }

  }

  ngAfterViewInit() {


    this.mostrar_titulo = false;



  }


  onScroll($event) {


    if ($event.scrollTop > 290) {
      this.ngzone.run(() => {

        let scroll = $event.scrollTop;

        let opacidad = scroll / 450 - 150 / 450;

        var myElements = document.querySelectorAll(".animacion");

        for (var i = 0; i < myElements.length; i++) {
          (myElements[i] as any).style.opacity = opacidad;
        }

        this.mostrar_titulo = true;
      });

    }
    else if ($event.scrollTop <= 290) {
      this.ngzone.run(() => {
        this.mostrar_titulo = false;

      });

    }
  }


}


