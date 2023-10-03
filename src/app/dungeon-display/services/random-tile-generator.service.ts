import { Injectable } from '@angular/core';
import { Tile } from '../models/room';

@Injectable({
  providedIn: 'root'
})
export class RandomTileGeneratorService {

  constructor() { }

  public generate(roomsAmount: number, width: number, height: number): Tile[][] {

    let dungeon = [[]]

    //Determine Room Locations

    //Determine Shape and Size of Rooms

    //Find Connections for Rooms through hallways

    //Adapt 'room' tiles to have specific attributes based on position

    return dungeon;
  }
}
