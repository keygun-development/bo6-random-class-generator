import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.tsx";
import Header from "@/components/Header.tsx";
import Footer from "@/components/Footer.tsx";
import ThankYou from "./Completed.tsx";
import NotFound from "@/NotFound.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/completed" element={<ThankYou />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </Router>
    </StrictMode>
);
