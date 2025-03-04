import { AppState } from "../AppState.js";
import { House } from "../models/House.js";
import { api } from "../utils/Axios.js";

class HousesService {


  async getHouses() {

    const response = await api.get('api/houses')
    console.log('house data', response);
    const house = response.data.map(pojo => new House(pojo))
    console.log('formatted house data', house);
    AppState.houses = house

  }








}



export const HouseService = new HousesService()