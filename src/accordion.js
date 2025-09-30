import {useState} from "react";

function Accordion() {

  const[openIndex, setOpenIndex] = useState([]);

  const faqItems = [
    { question: "What is React?", answer: "A JavaScript library for building UIs." },
    { question: "What is a component?", answer: "Reusable building block in React." },
    { question: "What is a hook?", answer: "Reusable building block in"
          + " React." },
  ];

  const handleToggle = (key) => {
    if(openIndex.includes(key)) {
      setOpenIndex(openIndex.filter(idx => idx !== key));
    } else {
      setOpenIndex([...openIndex, key]);
    }
  }
  return(
      <div>
        {faqItems.map((item, key) => (
            <div key={key}>
              <button
                  onClick={event => handleToggle(key)}
                  style={{ display: "block", width: "100%", textAlign: "center" }}
              >
                {item.question}
              </button>
              {openIndex.includes(key) && (
                  <div style={{padding: "8px 16px"}}>{item.answer}</div>
              )}
            </div>
        ))}
      </div>
  );

}

export default Accordion;