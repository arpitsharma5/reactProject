import {useEffect, useState} from "react";

function Debounce() {
  const fruits = [
    "Apple", "Banana", "Orange", "Mango", "Grape", "Pineapple", "Strawberry"
  ];
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(fruits);

  useEffect(() => {
    const timer = setTimeout(() => {
      setResults(
          fruits.filter(fruit => (
              fruit.toLowerCase().includes(query.toLowerCase())
          ))
      )
      return () => clearTimeout(timer);
    }, 500)

  }, [query]);

  return (
      <>
      <input type="text"
             value={query}
             placeholder="Search fruits..."
             onChange={e => setQuery(e.target.value)}
      />
        <ul>
          {results.map((fruit, index) => (
              <li key={index}>{fruit}</li>
          ))}
        </ul>
      </>
  );
}

export default Debounce;