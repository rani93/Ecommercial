import React from 'react';
import MainCarousel from '../../components/HomeCarousel/MainCarousel';
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel';


const HomePage = () => {
  return (
    <div>
        <MainCarousel />
        <div className='flex flex-col justify-center px-5 py-20 space-y-10 lg:px-10'>
            other section
            <HomeSectionCarousel  />
            <HomeSectionCarousel />
            <HomeSectionCarousel />
            <HomeSectionCarousel />
            <HomeSectionCarousel />
            <HomeSectionCarousel />
        </div>
      
    </div>
  );
}
export default HomePage;