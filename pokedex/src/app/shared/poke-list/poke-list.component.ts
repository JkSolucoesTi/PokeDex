import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  public getAllPokemons: any;
  public setAllPokemons: any;

  public apiError:boolean = false;

   constructor(private pokeApi : PokeApiService) { }

  ngOnInit(): void {
    this.pokeApi.apiListAllPokemon.subscribe(res =>{
      this.setAllPokemons = res.results;
      this.getAllPokemons = this.setAllPokemons;
    },
    error =>{
      this.apiError = true;
    })
  }

  public getSearch(value:string){
    const filter = this.setAllPokemons.filter( (res:any) =>{
      return !res.name.indexOf(value.toLowerCase())
    });

    this.getAllPokemons = filter;
  }

}
