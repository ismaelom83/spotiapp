import { SpotifyService } from './../../service/spotify.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent  {

  artistas: any[] = [];
  loading: boolean;

  constructor( private spotify: SpotifyService ) {

    this.loading = true;

   }

buscar(termino: string) {
this.spotify.getArtistas( termino )
  .subscribe( (data: any ) => {
    console.log(data);
    this.artistas = data;
    this.loading = false;
  });

}

}
