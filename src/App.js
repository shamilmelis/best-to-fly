import {Routes, Route} from "react-router-dom";
import React from 'react'
import HomePage from "./Pages/Home-Page";
import CompanyPage from "./Pages/Company-Page";
function App() {
  return (
      <Routes>
        <Route path={"*"} element={<HomePage></HomePage>}></Route>
          <Route path={"company"} element={<CompanyPage></CompanyPage>}></Route>
          <Route path={"tours"}></Route>
          <Route path={"search/tours/:id"}></Route>
          <Route path={"contacts"}></Route>
      </Routes>
  )
}

export default App;
