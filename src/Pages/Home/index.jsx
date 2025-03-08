import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router';

const Home = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

 
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('http://localhost:3000/products');
        setImages(response.data.map(product => product.images));
      } catch (error) {
        console.error("Resimler alınırken hata oluştu:", error);
      }
    };

    fetchImages();
  }, []);

 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 300);

    return () => clearInterval(interval);
  }, [images]);

  if (images.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className='grid justify-center items-center w-full h-[calc(100vh-80px)] px-5 bg-[var(--background)]'>
        {
            <Link to="/products" className='w-full h-[calc(60vh)] border-15 border-[#86A788]'>
                <img src={images[currentIndex]} alt="carousel" className='h-full'/>
            </Link>
        }
    </div>
  );
};

export default Home;