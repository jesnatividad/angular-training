import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { NgModule } from '@angular/core';
import { HeroesComponent } from '../list/heroes/heroes.component';
@NgModule({
  declarations: [HeroesComponent],

})

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  hero:Hero = new Hero(1,"Juggernaut");
  input:number[]=[1,2,3,4,5];
  first:number;
  second:number[];
  constructor() {  }

  ngOnInit() {
   [this.first,...this.second] = this.input;
   
  }

}
