import { useState } from "react";

const Question = (question) => {
  const [showItem, setShowItem] = useState(false);
  console.log(question);

    return ( 
        <div>
          <div className="accordion-header">
            <h3>{question.title}</h3>
            <button className="btn" onClick={() => setShowItem(!showItem)}>
              +
            </button>
          </div>
          {showItem && <p>{question.info}</p>}
        </div>
     );
}
 
export default Question;