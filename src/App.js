import { BrowserRouter, Routes, Route } from "react-router-dom"

import './App.scss'
import Home from "./pages/Home";
import { useMediaQuery } from "@mui/material";

function App() {
  const is_lg = useMediaQuery('(max-width: 990px)')

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/login" element={<Login />} /> */}
        <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;  
