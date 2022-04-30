import { render } from "react-dom";
import { StrictMode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./Details";

// import Pet from "./Pet";
import SearchParams from "./SearchParams";
const App = () => {
  return (
    <StrictMode>
      <div>
        <BrowserRouter>
          <h1>Adopt Me!</h1>
          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </BrowserRouter>
        ;
      </div>
    </StrictMode>
  );
};
render(<App />, document.getElementById("root"));
