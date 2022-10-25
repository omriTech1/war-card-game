import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GamePage from "./pages/GamePage";
import HomePage from "./pages/HomePage";
import { Context } from "./context";

function App() {
  const [context, setContext] = useState('שחקן 1');

  return (
    <Context.Provider value={[context, setContext]}>
      <div className="h-screen bg-red-900">
      <Router>
        <Routes>
          <Route element={<HomePage />} path={"/"} />
          <Route element={<GamePage />} path={"/room/123"} />
        </Routes>
      </Router>
      </div>
    </Context.Provider>
  );
}

export default App;
