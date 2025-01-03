import React from "react";
import NavbaPage from "./components/navbar/navbat";
import Hero from "./components/hero_section/Hero";
import TestRedux from "./components/TestRedux";

export default function Home() {
  return (
    <div>
      <NavbaPage />
      <Hero />
      <TestRedux />
    </div>
  );
}
