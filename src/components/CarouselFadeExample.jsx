import Carousel from 'react-bootstrap/Carousel';
import c1 from '../assets/carousel/c1.jpg';
import c2 from '../assets/carousel/c2.jpg';
import c3 from '../assets/carousel/c3.jpg';
import '../stylesheet/carousel/carousel.css'; // Import CSS file
import 'bootstrap/dist/css/bootstrap.min.css';
function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img className='carousel-img' src={c1} text="First slide" />
        <Carousel.Caption>
          <h3>Welcome to <span style={{ color: '#FFD700', fontFamily: 'Times New Roman, Times, serif' }}
          >SWARA INFRA</span></h3>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='carousel-img' src={c2} text="Second slide" />
        <Carousel.Caption>
          <h3>Welcome to <span style={{ color: '#FFD700', fontFamily: 'Times New Roman, Times, serif' }}>SWARA INFRA</span></h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='carousel-img' src={c3} text="Third slide" />
        <Carousel.Caption>
          <h3>Welcome to <span style={{ color: '#FFD700', fontFamily: 'Times New Roman, Times, serif' }}
          >SWARA INFRA</span></h3>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;