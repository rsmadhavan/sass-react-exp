import React from "react";  
import { useState } from "react";

const Accordion = (props) => {
  const {header,content} = props;
  const [expand,setExpand] = useState(false);
  const toggleExpand = () => setExpand(prevState => !prevState);
  return (
    <div className="accordion">
      <button onClick={toggleExpand}>{header}<span>{expand ? '-':'+'}</span></button>
      <>
        {expand && <div className="content">{content}</div>}
      </>
    </div>
  );
}

export default Accordion;