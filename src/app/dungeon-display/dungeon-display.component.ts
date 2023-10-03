import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Tile } from './models/room';
import { RandomTileGeneratorService } from './services/random-tile-generator.service';

@Component({
  selector: 'app-dungeon-display',
  templateUrl: './dungeon-display.component.html',
  styleUrls: ['./dungeon-display.component.css']
})
export class DungeonDisplayComponent implements OnInit {

  dungeon: Tile[][] = []

  generatorForm = new FormGroup({
    width: new FormControl(30),
    height : new FormControl(30),
    roomCount : new FormControl(4)
  })

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

  ngOnInit() {
    this.generate()
  }

  generate() {
    const width = this.generatorForm.get("width")?.value
    const height = this.generatorForm.get("height")?.value
    const roomCount = this.generatorForm.get("roomCount")?.value
    if (width && height && roomCount) {
      this.dungeon = this.randomTileGenerator.generate(roomCount,width,height)
    }
  }

}
