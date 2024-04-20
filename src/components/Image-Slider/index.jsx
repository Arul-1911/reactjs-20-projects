import { useEffect, useState } from "react";
import "./style.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export default function ImageSlider({ url, limit, page }) {
  const [images, setImages] = useState([]);
  const [currentimg, setCurrentImg] = useState(0);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  //FUNCTION TO FETCH API URL

  async function fetchImages(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?${page}=1&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (error) {
      console.log("Error in fetching images:", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  //PREVIOUS SLIDER FUNCTION
  function handlePrevious() {
    setCurrentImg(currentimg === 0 ? images.length - 1 : currentimg - 1);
  }

  //NEXT SLIDER FUNCTION
  function handleNext() {
    setCurrentImg(currentimg === images.length - 1 ? 0 : currentimg + 1);
  }

  useEffect(() => {
    if (url !== "") {
      fetchImages(url);
    }
  }, [url]);

  if (loading) {
    return <div>Loading Data ! Please Wait....</div>;
  }

  if (error) {
    return <div>Error in Fetching data {error.message}</div>;
  }

  console.log(images);

  return (
    <>
      <div className="container">
        <BsArrowLeftCircleFill
          onClick={handlePrevious}
          className="arrow arrow-left"
        />
        {images && images.length
          ? images.map((imageItem, index) => (
              <img
                key={imageItem.id}
                alt={imageItem.download_url}
                src={imageItem.download_url}
                className={
                  currentimg === index ? "current-image" : "hide-image"
                }
              />
            ))
          : ""}

        <BsArrowRightCircleFill
          onClick={handleNext}
          className="arrow arrow-right"
        />
        <span className="circle-indicators">
          {images && images.length
            ? images.map((_, index) => (
                <button
                  key={index}
                  className={
                    currentimg === index
                      ? "current-indicator"
                      : "hide-indicator"
                  }
                  onClick={() => setCurrentImg(index)}
                ></button>
              ))
            : null}
        </span>
      </div>
    </>
  );
}
