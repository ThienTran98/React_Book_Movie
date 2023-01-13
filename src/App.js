import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutDefault from "./HOC/LayoutDefault";
import HomePage from "./Pages/HomePage/HomePage";
import DetailPage from "./Pages/DetailPage/DetailPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import BuyTicketsPage from "./Pages/BuyTicketsPage/BuyTicketsPage";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import Spinner from "./Component/Spinner/Spinner";

function App() {
  return (
    <div>
      <Spinner />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <LayoutDefault>
                <HomePage />
              </LayoutDefault>
            }
          />
          <Route
            path="/detail/:id"
            element={
              <LayoutDefault>
                <DetailPage />
              </LayoutDefault>
            }
          />
          <Route
            path="/login"
            element={
              <LayoutDefault>
                <LoginPage />
              </LayoutDefault>
            }
          />
          <Route
            path="/register"
            element={
              <LayoutDefault>
                <RegisterPage />
              </LayoutDefault>
            }
          />
          <Route
            path="/buy-tickets/:id"
            element={
              <LayoutDefault>
                <BuyTicketsPage />
              </LayoutDefault>
            }
          />
          <Route
            path="*"
            element={
              <LayoutDefault>
                <NotFoundPage />
              </LayoutDefault>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
