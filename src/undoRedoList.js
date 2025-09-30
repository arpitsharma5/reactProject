import {useReducer, useState} from "react";

function reducer(state, action) {
  switch(action.type) {
    case "ADD":
      return {
        past: [...state.past, state.present],
        present: [...state.present, action.item],
        future: []
      };
    case "REMOVE":
      return {
        past: [...state.past, state.present],
        present: state.present.filter((item, idx) => idx !== action.index),
        future: []
      };
    case "UNDO":
      if (state.past.length === 0) return state;
      const previous = state.past[state.past.length - 1];
      return {
        past: state.past.slice(0, -1),
        present: previous,
        future: [state.present, ...state.future]
      };
    case "REDO":
      if (state.future.length === 0) return state;
      const next = state.future[0];
      return {
        past: [...state.past, state.present],
        present: next,
        future: state.future.slice(1)
      };
    default:
      return state;
  }
}


const initialState = {
  past: [],
  present: [],
  future: []
};

export default function UndoRedoList() {
  const [input, setInput] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);

  return(
      <div>
        <input value={input}
               onChange={e => setInput(e.target.value)}
               placeholder="Add Item"
        />
        <button
            onClick={() => {
              if (input.trim()) {
                dispatch({type: "ADD", item: input});
                setInput("");
              }
            }}> Add
        </button>
        <ul>
          {state.present.map((item, idx) => (
              <li key={idx}>
                {item}
                <button onClick={() => dispatch({type: "REMOVE", index: idx})}>
                  Remove
                </button>
              </li>
          ))}
        </ul>
        <button onClick={() => dispatch({type: "UNDO"})}
                disabled={state.past.length === 0}
        >
          Undo
        </button>
        <button onClick={() => dispatch({type: "REDO"})}
                disabled={state.future.length === 0}>
          Redo
        </button>
      </div>
  );
}
