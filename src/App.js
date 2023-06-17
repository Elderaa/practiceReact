import { useState } from "react";

export default function App() {
  const [advice, setAdvice] = useState("");

  async function grtAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
  }

  return (
    <div>
      <h1>{advice ? advice : "Click the button below to get an advice "}</h1>
      <button onClick={grtAdvice}>Get Advice</button>
    </div>
  );
}
