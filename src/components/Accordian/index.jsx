import { useState } from "react";
import data from "./data";
import './style.css'

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [multiSelection,setmultiSelction] = useState(false);
  const [multiple, setmultiple] = useState([])

  const handleSingleSelection = (currentId) => {
    setSelected(currentId === selected ? null : currentId);
  };

  const handleMultiSelection = (currentId) => {
      const multipleCopy = [...multiple];
      const findIndexofCurrentId = multipleCopy.indexOf(currentId);

      console.log(findIndexofCurrentId);
      if(findIndexofCurrentId === -1) multipleCopy.push(currentId);
      else multipleCopy.splice(findIndexofCurrentId, 1);

      setmultiple(multipleCopy)
  }

  console.log(selected, multiple);

  return (
    <>
      <div className="wrapper">
    <button onClick={() => setmultiSelction(!multiSelection)}>{multiSelection ? 'Multi Selection Mode' : 'Single Selection Mode'}</button>
        <div className="accordian">
          {data && data.length > 0 ? (
            data.map((dataItem, id) => (
              <div className="item" key={id}>
                <div
                  className="title"
                  onClick={multiSelection ? () => handleMultiSelection(dataItem.id) :() => handleSingleSelection(dataItem.id)}
                >
                  <h3>{dataItem.question}</h3>
                  <span>+</span>
                </div>
                { multiSelection ? multiple.indexOf(dataItem.id) !== -1 && (
                  <div className="content">{dataItem.answer}</div>
                ) : (
                  selected === dataItem.id && <div className="content">{dataItem.answer}</div>
                )}
              </div>
            ))
          ) : (
            <div>No data found..</div>
          )}
        </div>
      </div>
    </>
  );
}
