import { ImageCarousel } from "./getImage";
import '..//index.css';

function App() {
    const images = [
        '../images/logo.jpg  ',
        '../images/logo2.jpg ',
        '../images/logo3.jpg ',
        '../images/logo4.jpg ',
        '../images/logo5.jpg ',
        '../images/logo6.jpg ',
        '../images/logo7.jpg ',
        '../images/logo8.jpeg',
        '../images/logo9.jpeg',
        '../images/logo10.jpeg',
        '../images/logo11.jpeg'
      // Add more image URLs as needed
    ];

    
    return (
      <div>
        <h1>Image Carousel</h1>
        <ImageCarousel images={images} />
      </div>
    );
  }
  
  export default App;
  