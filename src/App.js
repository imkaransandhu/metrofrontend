import { useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

// Context
import LoggedUserContext from "./Context/LoggedUserContext";

// Pages or Components
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Newsletter from "./Components/Newsletter/Newsletter";
import Home from "./Pages/Home/Home";
import RentalProcess from "./Pages/RentalProcess/RentalProcess";
import TenantServices from "./Pages/TenantServices/TenantServices";
import BuyHomeWhileRenting from "./Pages/BuyHomeWhileRenting/BuyHomeWhileRenting";
import MeetOurProfessionals from "./Pages/MeetOurProfessionals/MeetOurProfessionals";
import PropertySearch from "./Pages/PropertySearch/PropertySearch";
import ExistingUser from "./Pages/MyProfile/ExistingUser/ExistingUser";
import WelcomeBoard2 from "./Components/CommonComponents/WelcomeBoard2/WelcomeBoard2";
import NewUser from "./Pages/MyProfile/NewUser/NewUser";
import TAYourDetail from "./Pages/TenancyApplication/TAYourDetails";
import TAComplete from "./Pages/TenancyApplication/TAComplete";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import WelcomeBoard1 from "./Pages/WelcomBoard/WelcomeBoard1";
import UserNavbar from "./Components/UserNav/UserNavbar";
import Md1Account from "./Pages/MyDairy/Md1AccountPage";
import Md2Favorite from "./Pages/MyDairy/Md2FavoritePage";
import Md2Applications from "./Pages/MyDairy/Md3ApplicationsPage";

// Css
import "./App.css";

const App = () => {
  const loggedUser = useState(null);

  return (
    <HashRouter>
      {/* User context/state  */}
      <LoggedUserContext.Provider value={loggedUser}>
        {/* The rest of your app goes here */}
        <Header />
        <UserNavbar />
        {/* our routes */}
        <Routes HashRouter={HashRouter}>
          <Route path="/metrofrontend" element={<Home />} />
          <Route
            path="metrofrontend/rental-process"
            element={<RentalProcess />}
          />
          <Route
            path="metrofrontend/tenant-services"
            element={<TenantServices />}
          />
          <Route
            path="metrofrontend/buy-a-home-while-renting"
            element={<BuyHomeWhileRenting />}
          />
          <Route
            path="metrofrontend/meet-our-professionals"
            element={<MeetOurProfessionals />}
          />
          <Route
            path="metrofrontend/property-search"
            element={<PropertySearch />}
          />

          <Route exact path="/metrofrontend/login" element={<Login />} />
          <Route path="metrofrontend/register" element={<Signup />} />
          {/* My Dairy Site */}
          <Route
            path="metrofrontend/welcome-board-1"
            element={<WelcomeBoard1 />}
          />
          <Route
            path="metrofrontend/welcome-board-2"
            element={<WelcomeBoard2 />}
          />
          <Route path="metrofrontend/my-dairy/new-user" element={<NewUser />} />
          <Route
            path="metrofrontend/my-dairy/existing-user"
            element={<ExistingUser />}
          />
          <Route path="metrofrontend/my-dairy" element={<NewUser />} />
          <Route
            path="metrofrontend/my-dairy/my-account"
            element={<Md1Account />}
          />
          <Route
            path="metrofrontend/my-dairy/my-favorite"
            element={<Md2Favorite />}
          />
          <Route
            path="metrofrontend/my-dairy/my-applications"
            element={<Md2Applications />}
          />

          {/* Tenancy Application Site */}
          <Route
            path="metrofrontend/tenancy-application"
            element={<TAYourDetail />}
          />
          <Route
            path="metrofrontend/tenancy-application-complete"
            element={<TAComplete />}
          />
        </Routes>
        <Newsletter />
        <Footer />
      </LoggedUserContext.Provider>
    </HashRouter>
  );
};

export default App;
