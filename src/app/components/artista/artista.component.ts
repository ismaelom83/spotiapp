import { SpotifyService } from './../../service/spotify.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent  {

  artista: any = {};
  topTRacks: any [] = [];
 loading: boolean;
  constructor(private router: ActivatedRoute,
              private spotify: SpotifyService) {
    this.router.params.subscribe( params => {
      this.getArtista( params.id );
      this. getTopTracks( params.id );
    });
    this.loading = true;
  }


  getArtista(id: string) {
    this.spotify.getArtista( id )
       .subscribe( artista => {
         console.log(artista);
         this.artista = artista;
         this.loading = false;
       });
  }

  getTopTracks(id: string) {
    this.spotify.getTopTracks( id )
       .subscribe( topTracks => {
         console.log(topTracks);
         this.topTRacks = topTracks;
       });
  }
}
