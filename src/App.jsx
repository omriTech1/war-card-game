import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GamePage from "./pages/GamePage";
import HomePage from "./pages/HomePage";
import { userDetailsStore } from "./context";

function App() {
  const [context, setContext] = useState('שחקן 1');

  return (
    <userDetailsStore.Provider value={[context, setContext]}>
      <Router>
        <Routes>
          <Route element={<HomePage />} path={"/"} />
          <Route element={<GamePage />} path={"/room/123"} />
        </Routes>
      </Router>
    </userDetailsStore.Provider>
  );
}

export default App;
