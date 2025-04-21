import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import HeroPage from "../pages/HeroPage";
import Menu from "../components/Menu";
import Skills from "../pages/Skills";
import Project from "../pages/Project";
import About from "../pages/About";
import ContactMe from "../pages/ContactMe";
import { PathTrackerProvider } from "../helper/PathTrackerContext";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <PathTrackerProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HeroPage />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactMe />} />
          </Route>
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </PathTrackerProvider>
    </BrowserRouter>
  );
};

export default AppRoutes;
