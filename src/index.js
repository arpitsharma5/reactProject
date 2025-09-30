import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SortReact from './sortReact';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import TodoApp from "./TodoApp";
import ProductListing from "./ProductListing";
import Navbar from "./navbar";
import DropDown from "./dropdown";
import Counter from "./counter";
import Accordion from "./accordion";
import Carousel from "./carousel";
import Debounce from "./debounce";
import RateLimiter from "./rateLimiter";
import NestedComments from "./nestedComments";
import UndoRedoList from "./undoRedoList";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/sortReact" element={<SortReact />}/>
        <Route path="/todoApp" element={<TodoApp />}/>
        <Route path="/product" element={<ProductListing />}/>
        <Route path="/dropdown" element={<DropDown />}/>
        <Route path="/counter" element={<Counter />}/>
        <Route path="/accordion" element={<Accordion />}/>
        <Route path="/carousel" element={<Carousel />}/>
        <Route path="/debounce" element={<Debounce />}/>
        <Route path="/rateLimiter" element={<RateLimiter />}/>
        <Route path="/nestedComments" element={<NestedComments />}/>
        <Route path="/undoRedoList" element={<UndoRedoList />}/>
      </Routes>
    </BrowserRouter>
);

