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
      for (let j=0; j<width; j++) {
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
        if (!distances.some( dist => dist < 7)) {
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
    roomOrigins.forEach((origin) => {

      //START WITH RECTANGLE ROOMS ONLY
      const originRow = origin[0]
      const originColumn = origin[1]

      //check distances possible horizontally from the room origin
      let row = this.dungeon[originRow]
      let rowRange = this.distanceAvail(originColumn, row)

      //set initial possible width out from room
      let lowWidth = originColumn - Math.floor(rowRange[0]/2)
      let highWidth = originColumn + Math.floor(rowRange[1]/2)

      //check distances possible vertically from the room origin and distances possible with vertical span
      let col = this.dungeon.map(function(value, index) {return value[originColumn]})
      let colRange = this.distanceAvail(originRow, col)

      //set initial possible height out from room
      let lowHeight = originRow - Math.floor(colRange[0]/2)
      let highHeight = originRow + Math.floor(colRange[1]/2)

      //change width or height accordingly to ensure no room overlap

      //change empty spaces to room once generation is done
      for (let i=lowHeight; i <= highHeight; i++) {
        for (let j=lowWidth; j<= highWidth; j++) {
          this.initialRenderTile([i,j], [lowHeight, highHeight], [lowWidth, highWidth], origin);
        }
      }
    })
  }

  private distanceAvail(originPoint: number, tileArray: Tile[]): number[] {
    let lowBound = 0;
    let highBound = 0;

    for (let i=originPoint - 1; i>=0; i--) {
      if (tileArray[i].type=="empty") {
        lowBound += 1
      }
      else if (tileArray[i].type=="room") {
        break
      }
    }

    for (let i=originPoint + 1; i<tileArray.length; i++) {
      if (tileArray[i].type=="empty") {
        highBound += 1
      }
      else if (tileArray[i].type=="room") {
        break
      }
    }

    return [lowBound,highBound]
  }

  private initialRenderTile(tilePoint: number[], rowRange: number[], colRange: number[], originPoint: number[]) {
    let row = tilePoint[0]
    let column = tilePoint[1]

    if (this.dungeon[row][column].type == "empty" || tilePoint[0] == originPoint[0] && tilePoint[1] == originPoint[1]) {
      this.dungeon[row][column]={type:"room"}

      if (row == rowRange[0] && row == rowRange[1] && column == colRange[0] && column == colRange[1]) {
        this.dungeon[row][column].attribute="closed-room"
      }
      else if (row == rowRange[0] && row == rowRange[1] && column == colRange[0]) {
        this.dungeon[row][column].attribute="deadend-l"
      }
      else if (row == rowRange[0] && row == rowRange[1] && column == colRange[1]) {
        this.dungeon[row][column].attribute="deadend-r"
      }
      else if (column == colRange[0] && column == colRange[1] && row == rowRange[0]) {
        this.dungeon[row][column].attribute="deadend-t"
      }
      else if (column == colRange[0] && column == colRange[1] && row == rowRange[1]) {
        this.dungeon[row][column].attribute="deadend-b"
      }
      else if (row == rowRange[0] && column == colRange[0]) {
        this.dungeon[row][column].attribute="corner-tl"
      }
      else if (row == rowRange[0] && column == colRange[1]) {
        this.dungeon[row][column].attribute="corner-tr"
      }
      else if (row == rowRange[1] && column == colRange[0]) {
        this.dungeon[row][column].attribute="corner-bl"
      }
      else if (row == rowRange[1] && column == colRange[1]) {
        this.dungeon[row][column].attribute="corner-br"
      }
      else if (row == rowRange[0] && row == rowRange[1]) {
        this.dungeon[row][column].attribute="hall-h"
      }
      else if (column == colRange[0] && column == colRange[1]) {
        this.dungeon[row][column].attribute="hall-v"
      }
      else if (row == rowRange[0]) {
        this.dungeon[row][column].attribute="wall-t"
      }
      else if (row == rowRange[1]) {
        this.dungeon[row][column].attribute="wall-b"
      }
      else if (column == colRange[0]) {
        this.dungeon[row][column].attribute="wall-l"
      }
      else if (column == colRange[1]) {
        this.dungeon[row][column].attribute="wall-r"
      }
    }
  }
}
