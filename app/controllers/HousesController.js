import { AppState } from "../AppState.js";
import { HouseService } from "../services/HousesService.js";
import { Pop } from "../utils/Pop.js";

export class HousesController {
  constructor() {

    AppState.on('houses', this.drawHouses)
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

  drawHouses() {
    const houses = AppState.houses
    let content = ''

    houses.forEach(house => content += house.houseCard)

    const houseCardElem = document.getElementById('houseListings')
    houseCardElem.innerHTML = content
  }






}