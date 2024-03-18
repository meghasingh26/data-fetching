//import all images from assets/images directory
import img01 from "../all-images/cars-img/nissan-offer.png"
import img02 from "../all-images/cars-img/offer-toyota.png"
import img03 from "../all-images/cars-img/offer-bmw.png"
import img04 from "../all-images/cars-img/nissan-offer.png"
import img05 from "../all-images/cars-img/offer-toyota.png"
import img06 from "../all-images/cars-img/mercedes-offer.png"

const carData =[
  {
    id:1,
    carName:"BMW UX",
    imgUrl: img01,
    km:"17 km/hr",
    price: 250,
    person: 4,
    parking: "Extra Charge",
    
  },
  {
    id:2,
    carName: "KIA UX",
    price: 140,
    person: 6,
      parking: "Extra Charge",
      km: "17 km/hr",
      imgUrl: img02 ,
  },
  {
    id:3,
    carName: "BMW UX",
    price: 100,
    person: 7,
    parking: "Extra Charge",
    km: "17 km/hr",
    imgUrl: img03,
   
  },
  {
    id:4,
    carName: "Toyota UX",
    price: 120,
    person: 2,
    parking: "Extra Charge",
    km: "17 km/hr",
    imgUrl: img04,
  },
  {
    id:5,
    carName: "Honda UX",
    price: 110,
    person: 4,
    parking: "Extra Charge",
    km: "17 km/hr",
    imgUrl: img05,
  },
  {
    id:6,
    carName: "Tesla UX",
      price: 180,
      person: 7,
      parking: "Extra Charge",
      km: "17 km/hr",
      image: img06,
  }
 
]

export default carData;
