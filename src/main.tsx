import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import Header from "@/components/Header.tsx";
import Footer from "@/components/Footer.tsx";
import ThankYou from "./Completed.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/completed" element={<ThankYou />} />
            </Routes>
            <Footer />
        </Router>
    </StrictMode>
);
