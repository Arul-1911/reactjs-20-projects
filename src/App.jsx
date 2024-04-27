// import Accordian from './components/Accordian'
// import RandomColor from './components/Random-color'

// import Generator from "./components/QR-code-generator";
// import TreeView from "./components/Tree-view";
// import menus from "./components/Tree-view/data";
import ThemeChanger from "./components/light-dark-mode";
import ScrollIndicator from "./components/scroll-indicator";

// import ImageSlider from "./components/Image-Slider";
// import LoadMore from "./components/Load-More";
// import StarRating from "./components/Star-Rating"

function App() {
  return (
    <>
      {/* <RandomColor/> */}
      {/* <StarRating totalStars={10} /> */}
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      /> */}
      {/* <LoadMore/> */}
      {/* <TreeView menus={menus}/> */}
      {/* <Generator/> */}
      {/* <ThemeChanger/> */}
      <ScrollIndicator url={`https://dummyjson.com/products?limit=100`}/>
    </>
  );
}

export default App
