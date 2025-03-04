export class House {

  constructor(data) {

    this.id = data.id
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bedrooms
    this.levels = data.levels
    this.imgUrl = data.imgUrl
    this.year = data.year
    this.price = data.price
    this.description = data.description
    this.creatorId = data.creatorId
    this.creator = data.creator

  }


  get houseCard() {

    return `
    <div class="row bg-light shadow car-border mb-3" style="border-color: coral;">
    <div class="col-md-7">
      <div class="d-flex justify-content-between p-2">
        <div>
          <p class="fs-2"> ${this.year} </p>
          <p>${this.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
          <p>${this.bedrooms} Bedrooms</p>
          <p>${this.levels} Levels</p>
          <p>${this.bathrooms} Bathrooms</p>
          <p class ="fs-3"> Description:</p> 
          <p>${this.description}</p>
        </div>
      </div>
    </div>
    <div class="col-md-5 p-0">
      <img src="${this.imgUrl}" alt="${this.year} ${this.price}"
        class="house-form-img">
    </div>
    </div>

  
  `
  }


}