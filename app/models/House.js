export class House {

  constructor(data) {

    this.id = this.id
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bedrooms
    this.levels = data.levels
    this.imgUrl = data.imgUrl
    this.year = this.year
    this.price = this.price
    this.description = this.description
    this.creatorId = this.creatorId
    this.creator = data.creator

  }


  get houseCard() {


    return `
    <div class="col-md-8">
      <div class="d-flex justify-content-between p-2">
        <div>
          <p class="fs-2"> ${this.year} </p>
          <p>${this.price.toLocaleString()}}</p>
          <p>${this.bedrooms} <span>${this.levels}</span></p>
          <p>${this.bathrooms}</p>
          <p>${this.description}</p>
        </div>
      </div>
    </div>
    <div class="col-md-4 p-0">
      <img src="${this.imgUrl}" alt="${this.year} ${this.price}"
        class="house-form-img img-fluid">
    </div>
</div>
  
  `
  }


}