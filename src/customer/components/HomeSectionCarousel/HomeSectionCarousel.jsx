import HomeSectionCard from '../HomeSectionCard/HomeSectionCard'; 
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
export default function HomeSectionCarousel() {
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 4 },
    };
    const items = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => <HomeSectionCard key={index} />);

    

    return (
        <div>
            <AliceCarousel
                items={items}
                disableButtonsControls={true}
                autoPlay
                autoPlayInterval={1500}
                infinite
                responsive={responsive}
                controlsStrategy="alternate" />
        </div>
    );
}