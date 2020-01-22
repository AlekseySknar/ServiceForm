import React from "react";
import ReactDOM from "react-dom";
import ServiceForm from "./ServiceForm";
import AppHeader from "./Header";
import AppFooter from "./Footer";

function App() {
  return (
    <div>
      <AppHeader />
      <div style={{ height: 100 }} />
      <ServiceForm />

      <AppFooter />
    </div>
  );
}

export default App;
