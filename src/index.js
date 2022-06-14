import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Header from "../src/components/App";
import RecommendedFilters from './components/RecommendedFilters/RecommendedFilters';
import Carousel from './components/Card-Carousel/Card-Carousel'

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div>
      <Header />
      <RecommendedFilters />
      <Carousel />
    </div>
  </StrictMode>
);
