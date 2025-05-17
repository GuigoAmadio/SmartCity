import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
function lazyWithPreload(factory) {
  const Component = lazy(factory);
  Component.preload = factory;
  return Component;
}
const LazyLandingPage = lazyWithPreload(() => import("./pages/landingPage"));
const Checkout = lazy(() => import("./pages/checkout"));
const Quiz = lazy(() => import("./pages/quiz"));
const MainPage = lazy(() => import("./pages/main"));

export { LazyLandingPage }; // Exporta para uso no quiz

export default function App() {
  return (
    <Suspense fallback={<div>Carregando Pagina...</div>}>
      <Routes>
        <Route path="/" element={<Quiz />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/landingPage" element={<LazyLandingPage />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </Suspense>
  );
}
