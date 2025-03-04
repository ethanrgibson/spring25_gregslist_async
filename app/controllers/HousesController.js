import { HouseService } from "../services/HousesService.js";
import { Pop } from "../utils/Pop.js";

export class HousesController {
  constructor() {


    this.getHouses()



  }

  async getHouses() {
    try {
      await HouseService.getHouses()
      Pop.success("We got houses!")
    } catch (error) {
      Pop.error('Houses not loading!')
    }
  }







}