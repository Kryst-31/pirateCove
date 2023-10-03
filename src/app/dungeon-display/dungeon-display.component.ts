import { Component } from '@angular/core';
import { Tile } from './models/room';

@Component({
  selector: 'app-dungeon-display',
  templateUrl: './dungeon-display.component.html',
  styleUrls: ['./dungeon-display.component.css']
})
export class DungeonDisplayComponent {

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

  constructor() {
  }

}
