import React from "react";
import {Container,Row,Col} from "reactstrap";
import carData from '../assets/data/carData';
import CarItem from "../components/pages/CarItems";


const Home =()=> {
return(
  <section>
    <Container>
      <Row>
        <Col lg='12' className="text-center mb-5">
          <h6 className="section__subtitle">Come with</h6>
          <h2 className="section__title">hot offers</h2>
        </Col>

        {
          carData.slice(0,6).map(item =>(
            <CarItem item={item} key={item.id}/>
          ))
        }
        </Row>
      </Container>
    </section>
);
};

export default Home;