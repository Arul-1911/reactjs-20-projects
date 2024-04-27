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
    console.log(
      document.body.scrollTop,
      document.documentElement.scrollTop,
      document.documentElement.scrollHeight,
      document.documentElement.clientHeight
    );
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

  console.log(data, loading);
  return (
    <>
      <h1>custom Scroll Indicator</h1>
      <div className="data-container">
        {data?.length > 0
          ? data.map((dataItem) => <li key={dataItem.id}>{dataItem.title}</li>)
          : null}
      </div>
    </>
  );
}
