import { HouseService } from "../services/HousesService.js";

export class HousesController {
  constructor() {

    console.log('Live From Houses Controller');
    this.getHouses()



  }

  getHouses() {

    try {
      HouseService.getHouses()


    } catch (error) {

    }



  }




}