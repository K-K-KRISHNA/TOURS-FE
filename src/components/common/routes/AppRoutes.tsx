import { Route, Routes } from "react-router-dom";
import BookTour from "../../bookTour/BookTour";
import Favourites from "../../favourites/Favourites";
import Home from "../../home/Home";
import Login from "../../login/Login";
import Transactions from "../../transactions/Transactions";
import UpcomingTours from "../../upcomingTours/UpcomingTours";
import Layout from "../layout/Layout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/" element={<Layout />}>
        <Route path="home" element={<Home />} />
        <Route path="book" element={<BookTour />} />
        <Route path="favourites" element={<Favourites />} />
        <Route path="transactions" element={<Transactions />} />
        <Route path="upcoming-tours" element={<UpcomingTours />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
