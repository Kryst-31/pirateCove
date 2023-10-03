import { Injectable } from '@angular/core';
import { Tile } from '../models/room';

@Injectable({
  providedIn: 'root'
})
export class RandomTileGeneratorService {

  dungeon: Tile[][] = [];

  constructor() { }

  /**
   * Generates the dungeon array for viewing
   * @param roomsAmount 
   * @param width 
   * @param height 
   * @returns 
   */

  public generate(roomsAmount: number, width: number, height: number): Tile[][] {

    this.dungeon = []

    for (let i=0; i<height; i++) {
      let emptyRow: Tile[] = []
      for (let j=0; j<height; j++) {
        emptyRow.push({type: "empty"})
      }
      this.dungeon.push(emptyRow)
    }

    //Determine Room Locations
    const roomOrigins = this.locateRooms(roomsAmount)

    //Determine Shape and Size of Rooms
    if (roomOrigins) {
      this.generateRooms(roomOrigins)
    }

    //Find Connections for Rooms through hallways

    //Adapt 'room' tiles to have specific attributes based on position

    return this.dungeon;
  }

  /**
   * Finds valid locations for the room origins based on the amount of rooms desired as well as the size of the board in question
   * @param roomsAmount 
   */

  private locateRooms(roomsAmount: number): number[][] | void {
    if (this.dungeon.length > 0) {
      let roomOrigins: number[][] = []
      let loops = 0
      while (roomOrigins.length < roomsAmount) {    

        //-2 with +1 later guartuntees that the room origin can't be along the outermost walls of the dungeon
        let row = Math.floor(Math.random() * (this.dungeon.length - 2) + 1);
        let column = Math.floor(Math.random() * (this.dungeon[0].length - 2) + 1);

        //Finds distances between the room going to be generated and previously generated ones
        let distances: number[] = []
        roomOrigins.forEach( (origin) => {
          distances.push(((origin[0] - row)**2 + (origin[1] - column)**2)**0.5)
        });

        //Only adds room if the distance is satisfactory
        if (!distances.some( dist => dist < 5)) {
          this.dungeon[row][column] = {type: "room"};
          roomOrigins.push([row, column])
        }
        //safeguard in case there is not enough room for rooms to generate
        if (loops > 1000) {
          console.log("Not enough room in dungeon for rooms!")
          break
        }

        loops += 1
      }

      return roomOrigins
    };
  }

  private generateRooms(roomOrigins: number[][]) {
    
  }
}
