import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var $: any;
declare var window: any;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  posts = [];
  imageUrl: string = 'assets/imgs/profile/perfil.jpg';
  mostrar_titulo: boolean;
  constructor(public navCtrl: NavController) {
    for (let i = 0; i < 10; i++) {
      this.posts[i] = {
        text: 'Canción ' + i,
        created_at: (i + 1),
      };
    }

    this.mostrar_titulo = false;



  }

  ngAfterViewInit() {
    $('#titulo').hide();

  }


  onScroll($event) {
    console.log($event.scrollTop)

    if ($event.scrollTop > 290) {
      // this.mostrar_titulo = true;
      //$('#titulo').show(600);
      $('#titulo').fadeIn("slow");
    }
    else {
      // this.mostrar_titulo = false;
      //$('#titulo').hide(600);
      $('#titulo').fadeOut("slow");
    }
  }


}


