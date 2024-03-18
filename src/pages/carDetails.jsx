//imported cardata 
// import form already created
import React,{useEffect} from 'react';
import carData from  "../assets/data/carData";
import {Container,Row,Col } from "reactstrap";
import Helmet from '../components/Helmet/Helmet';
import {useParams} from "react-router-dom";
import BookingForm from "../components/pages/BookingForm'"

const carDetails =() => {


const {slug} = useParams()

const singleCarItem = carData.find(item=>item.carName == slug) 


  return <Helmet title={singleCarItem.carName}>

    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <img scr={singleCarItem.imgUrl} alt ="" className="w-100"/>

          </Col>
          <Col lg='6'>
            <div className="car__info">
              <h2 className="section__title">{singleCarItem.carName}</h2>
              <div className="d-flex align-items-center gap-5 mb-4mt-3">
                <h6 className="rent__price fw-bold fs -4">{singleCarItem.price}.00/Day
                </h6>
                <h6 className="rent__price ">{singleCarItem.parking}
                </h6>
                <h6 className="rent__price ">{singleCarItem.person}
                </h6>
                <h6 className="rent__price ">{singleCarItem.km}
                </h6>
                
              <span className="d-flex align-item-center gap-2">
                  <span></span>
              </span>

              </div>

            </div>
          <Col lg="7" className="mt-5">
             <div className="booking form">
               <h5 className="mb-4 fw-bold"> BOOKING FORM</h5>
                <BookingForm/>
               </div>
          </Col>
         
          </Col>
          </Row>
        </Container>
      </section>
  </Helmet>
        
};
export default carDetails;