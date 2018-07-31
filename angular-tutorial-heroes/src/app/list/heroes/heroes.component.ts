import { Component, OnInit } from '@angular/core';
import { Hero } from '../../hero/hero';

@Component({
  selector: 'list-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes:Hero[];
  constructor() {
    
  }

  ngOnInit() {
   this.heroes = Hero.getMockHeroList();
  }

}
