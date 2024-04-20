// import Accordian from './components/Accordian'
// import RandomColor from './components/Random-color'

import ImageSlider from "./components/Image-Slider";
// import StarRating from "./components/Star-Rating"

function App() {
  return (
    <>
      {/* <RandomColor/> */}
      {/* <StarRating totalStars={10} /> */}
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />
    </>
  );
}

export default App
