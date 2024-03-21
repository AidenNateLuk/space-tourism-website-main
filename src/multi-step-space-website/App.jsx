import { useState } from "react";
import { Header } from "./Header/index";
import { HomePage } from "./Home-Page/index";
import "./App.css";
function App() {
  const [steps, setSteps] = useState([
    {
      name: "Home",
      index: 1,
    },
    { name: "Destination", index: 2 },
    {
      name: "CREW",
      index: 3,
    },
    {
      name: "Technology",
      index: 4,
    },
  ]);
  const [currentStep, setCurrentStep] = useState(steps[0]);

  return (
    <>
      <div className="container">
        <Header />
        <main>
          <HomePage />
        </main>
      </div>
    </>
  );
}

export default App;
