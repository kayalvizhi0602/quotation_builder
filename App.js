import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import TravelSearchForm from "./TravelSearchForm";
import LoginPage from "./LoginPage";
import ForgetPasswordPage from "./ForgetPasswordPage";
import Navbar from "./Navbar";
import TravelBookingForm from "./TravelBookingForm";
import TravelPackagesExplorer from "./TravelPackagesExplorer";
import PackageExplore from "./PackageExplore";
import TravelItinerary from "./TravelItinerary";
import RegisterPage from "./RegisterPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout Route with Navbar */}
        <Route path="/" element={<Navbar />}>
          {/* Index route renders HomePage */}
          <Route index element={<HomePage />} />
          <Route path="search" element={<TravelSearchForm />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="forgot-password" element={<ForgetPasswordPage />} />
          <Route path="travelbooking" element={<TravelBookingForm/>}/>
          <Route path="packageExplore" element={<PackageExplore/>}/>
          <Route path="travelItinerary" element={<TravelItinerary/>}/>
          <Route path="registerPage" element={<RegisterPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    // <TravelPackagesExplorer/>
    // <TravelItinerary/>
    
  );
}

export default App;
