import { Component, NgZone } from '@angular/core';
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
  constructor(public navCtrl: NavController, private ngzone: NgZone) {
    for (let i = 0; i < 10; i++) {
      this.posts[i] = {
        text: 'Canción ' + i,
        created_at: (i + 1),
      };
    }







  }

  ngAfterViewInit() {
    //$('#titulo').hide();

    this.mostrar_titulo = false;



  }


  onScroll($event) {
    //console.log($event.scrollTop)
    var div = $("#titulo");

    if ($event.scrollTop > 290) {
      this.ngzone.run(() => {

        this.mostrar_titulo = true;
      });

      if ($event.scrollTop < 300) {

        $('.animacion').css('opacity', '0.1');

      }

      else if ($event.scrollTop < 330) {

        $('.animacion').css('opacity', '0.2');

      }

      else if ($event.scrollTop < 350) {

        $('.animacion').css('opacity', '0.3');

      }

      else if ($event.scrollTop < 370) {

        $('.animacion').css('opacity', '0.4');

      }

      else if ($event.scrollTop < 390) {

        $('.animacion').css('opacity', '0.5');

      }

      else if ($event.scrollTop < 400) {

        $('.animacion').css('opacity', '0.6');

      }

      else if ($event.scrollTop < 410) {

        $('.animacion').css('opacity', '0.7');

      }

      else if ($event.scrollTop < 430) {

        $('.animacion').css('opacity', '0.8');

      }

      else if ($event.scrollTop < 450) {

        $('.animacion').css('opacity', '1');

      }


      //$('#titulo').show(600);
      //$('#titulo').fadeIn("slow");
    }
    else if ($event.scrollTop <= 290) {
      this.ngzone.run(() => {
        this.mostrar_titulo = false;
      });
      //$('#titulo').hide(600);
      //$('#titulo').fadeOut("slow");
    }
  }


}


