import { useEffect, useState } from "react";
import "./scroll.css";

export default function ScrollIndicator({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [scrollPercent, setScrollPercent] = useState(0);

  const fetchData = async (getUrl) => {
    try {
      setLoading(true);
      const res = await fetch(getUrl);
      const data = await res.json();
      // console.log(data);
      if (data?.products?.length > 0) {
        setData(data.products);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

  const handleScrollPercentage = () => {
    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setScrollPercent((howMuchScrolled / height) * 100);
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  if(errorMessage){
   return <div>Error in Fetching Data!!!!</div>
  }

  if(loading){
   return <div>Loading Data....</div>
  }

  console.log(scrollPercent);
  return (
    <>
      <div className="top-conatainer">
        <h1 className="title">Custom Scroll Indicator</h1>
        <div className="scroll-progress-container">
          <div
            className="cuurent-progress"
            style={{ width: `${scrollPercent}%` }}
          ></div>
        </div>
      </div>
      <div className="data-container">
        {data?.length > 0
          ? data.map((dataItem) => <div className="content" key={dataItem.id}>{dataItem.id}. {dataItem.title}</div>)
          : null}
      </div>
    </>
  );
}
