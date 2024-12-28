import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Button } from "@mui/material";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { useState ,useRef} from "react";
// import { mens_kurta } from "../../../Data/mens_kurta";
export default function HomeSectionCarousel({data, sectionName}) {
    const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 4 },
  };
  const slidePrev = () => {
    setActiveIndex(activeIndex.item - 1)
    console.log(activeIndex.item);
    carouselRef.current.slidePrev();
  };
  const slideNext = () => {
    setActiveIndex(activeIndex.item + 1)
    console.log(activeIndex.item);
    carouselRef.current.slideNext();
  }
  const syncActiveIndex = (e) => setActiveIndex(e);
  // const items = mens_kurta.slice(0,10).map(
    const items = data.slice(0,10).map(
    (item, index) => <HomeSectionCard key={index} product={item}/>
  );

  return (
    <div className="relative px-4 border lg:px-8">
      <h2 className="py-5 text-2xl font-extrabold text-gray-800" >{sectionName}</h2>
      <div className="relative p-7">
        <AliceCarousel
         ref={carouselRef}
          items={items}
          disableButtonsControls        
          responsive={responsive}
          disableDotsControls
          onSlideChange={syncActiveIndex}
          activeIndex={activeIndex}
        />
        {activeIndex !== items.length - 4 && (
          <Button
            onClick={slideNext}
            className="z-50 bg-white"
            variant="contained"
            sx={{
              position: "absolute",
              top: "10rem",
              right: "-2rem",
              transform: "translateX(50%) rotate(90deg)",
              bgcolor: "white",
            }}
            aria-label="next"
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(90deg)", color: "black" }}
            />
          </Button>
        )}
        {activeIndex!==0 &&<Button
          onClick={slidePrev}
          className="z-50 bg-white"
          variant="contained"
          sx={{
            position: "absolute",
            top: "10rem",
            left: "-2rem",
            transform: "translateX(-50%) rotate(90deg)",
            bgcolor: "white",
          }}
          aria-label="next"
        >
          <KeyboardArrowLeftIcon
            sx={{ transform: "rotate(-90deg)", color: "black" }}
          />
        </Button>}
      </div>
    </div>
  );
}
