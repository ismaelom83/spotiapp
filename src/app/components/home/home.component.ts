import { SpotifyService } from './../../service/spotify.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent  {

nuevasCanciones: any[] = [];
error: boolean;
loading: boolean;
mensajeError: any;

  constructor( private spotify: SpotifyService ) {

    this.loading = true;
    this.error = false;

    this.spotify.getNewReleases()
      .subscribe( (date: any) => {
        this.nuevasCanciones = date;
        this.loading = false;
      }, (errorServicio) => {
        this.error = true;
        this.loading = false;
        this.mensajeError = errorServicio.error.error.message;
      });
   }


}
