import {NavLink, Outlet} from "react-router-dom";

export default function Navbar() {
  return (
      <>
      <nav id="header" className="navbar sticky-top navbar-expand-lg">
        <div className="container-fluid">
          <ul className="navbar-nav  mb-2 mb-lg-0 ">
            <li className="nav-item navbar-hover">
              <NavLink to="sortReact" className="nav-link">sortReact</NavLink>
            </li>
            <li className="nav-item navbar-hover">
              <NavLink to="todoApp" className="nav-link">todoApp</NavLink>
            </li>
            <li className="nav-item navbar-hover">
              <NavLink to="product" className="nav-link">product</NavLink>
            </li>
            <li className="nav-item navbar-hover">
              <NavLink to="dropdown" className="nav-link">Country</NavLink>
            </li>
            <li className="nav-item navbar-hover">
              <NavLink to="counter" className="nav-link">Counter</NavLink>
            </li>
            <li className="nav-item navbar-hover">
              <NavLink to="accordion" className="nav-link">Accordion</NavLink>
            </li>
            <li className="nav-item navbar-hover">
              <NavLink to="carousel" className="nav-link">Carousel</NavLink>
            </li>
            <li className="nav-item navbar-hover">
              <NavLink to="debounce" className="nav-link">Debounce</NavLink>
            </li>
            <li className="nav-item navbar-hover">
              <NavLink to="rateLimiter"
                       className="nav-link">rateLimiter</NavLink>
            </li>
            <li className="nav-item navbar-hover">
              <NavLink to="nestedComments"
                       className="nav-link">NestedComments</NavLink>
            </li>
            <li className="nav-item navbar-hover">
              <NavLink to="undoRedoList"
                       className="nav-link">UndoRedoList</NavLink>
            </li>
          </ul>
        </div>
      </nav>
        <main>
          <Outlet/>
        </main>
      </>
  );
}