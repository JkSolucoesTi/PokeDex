import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  private url = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100";

  constructor(private httpClient:HttpClient) { }

  get apiListAllPokemon():Observable<any>{
    return this.httpClient.get<any>(this.url).pipe(
      tap( res => res ),
      tap(res => {
        res.results.map( (ResPokemons:any) =>{

         this.apiGetPokemons(ResPokemons.url).subscribe(
           res => ResPokemons.status= res

           )
      })
    })
  )}

  public apiGetPokemons(url:string):Observable<any>{
   return this.httpClient.get<any>(url).pipe(
      map(
        res => res                            
      )
    )
  }
}

