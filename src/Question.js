import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = (question) => {
  const [showItem, setShowItem] = useState(false);

    return ( 
        <div className="accordion">
          <div className="accordion-header">
            <h3>{question.title}</h3>
            <button className="btn" onClick={() => setShowItem(!showItem)}>
              {!showItem ? <AiOutlinePlus /> : <AiOutlineMinus />}
            </button>
          </div>
          {showItem && <p>{question.info}</p>}
        </div>
     );
}
 
export default Question;