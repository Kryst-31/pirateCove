import { Component } from '@angular/core';
import { Tile } from './models/room';
import { RandomTileGeneratorService } from './services/random-tile-generator.service';

@Component({
  selector: 'app-dungeon-display',
  templateUrl: './dungeon-display.component.html',
  styleUrls: ['./dungeon-display.component.css']
})
export class DungeonDisplayComponent {

  dungeon: Tile[][] = []

  dungeonExample: Tile[][] = [
    [
    {type: "room", attribute: "corner-tl"},
    {type: "room", attribute: "wall-t"},
    {type: "room", attribute: "corner-tr"},
    ],
    [
    {type: "room", attribute: "wall-l"},
    {type: "room", attribute: ""},
    {type: "room", attribute: "wall-r"},
    ],
    [
    {type: "room", attribute: "corner-bl"},
    {type: "room", attribute: "wall-b"},
    {type: "room", attribute: "corner-br"},
    ],
  ]

  constructor(private randomTileGenerator: RandomTileGeneratorService) {
  }

  generate() {
    this.dungeon = this.randomTileGenerator.generate(4,20,20)
  }

}
