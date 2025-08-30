import { lazy, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";

const About = lazy(() => import("./pages/About.tsx"));
const Home = lazy(() => import("./pages/Home.tsx"));
const Contact = lazy(() => import("./pages/Contact.tsx"));
const OfflinePage = lazy(() => import("./pages/OfflinePage.tsx"));

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./sw.js")
    .then((registration) => {
      console.log("service worker registered", registration);
    })
    .catch((err) => {
      console.error("service worker not registered", err);
    });
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="offline" element={<OfflinePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
