
//passed data as props
import React from 'react';
import {Col} from 'reactstrap';
import {Link} from 'react-router-dom';
import '../../styles/car-item.css'

const CarItem = (props) => {

const {id, imgUrl, model, carName, price} = props.item

  return <Col lg='4' md='4' sm='6' className='mb-5'>
    <div className="car__item">
      <div className="car__img">
          <img src={imgUrl} alt="" className='w-100'/>
      </div>
      <div className="car__item-content mt-4">
        <h4 className="section__title text-center">{carName}</h4>
        <h6 className="rent__price text-center mt-4">{price}.00
        <span>/Day</span></h6>


        <div className="car__item-info d-flex align-items-center justify-content-betweenmt-3 mb-4">
          <span className='d-flex align-item-center gap-1'><i class="ri-car-line"></i>{model}</span>
          <span className='d-flex align-item-center gap-1'><i class="ri-timer-flash-line"></i>{speed}</span>

        </div>

<button className="car__item-btn car__btn-details"></button>
<Link to ={`/cars/${carName}`}>Details</Link>

      </div>
    </div>
  </Col>
}

export default CarItem;