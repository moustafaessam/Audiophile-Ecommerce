import { Routes, Route } from "react-router-dom";
import GlobalStyles from "./assets/GlobalStyles";
import { Suspense, lazy } from "react";
const Home = lazy(() => import("./pages/Home/Home"));
const NotFound = lazy(() => import("./pages/Not Found/NotFound"));
const ProductHomePage = lazy(
  () => import("./pages/ProductHomePage/ProductHomePage")
);

function App() {
  return (
    <>
      <GlobalStyles />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="home" element={<Home />} />
          </Route>
          <Route path="/:productType" element={<ProductHomePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
