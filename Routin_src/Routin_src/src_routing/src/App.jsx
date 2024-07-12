import "./App.css";
import AboutPage from "./pages/AboutPage/AboutPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import Layout from "./containers/Layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import BooksPage from "./pages/BooksPage/BooksPage";
import BooksContextProvider from "./context/BooksContextProvider";
import BookPage from "./pages/BookPage/BookPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <NavBar></NavBar>
          <BooksContextProvider>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/books" element={<BooksPage />} />
              <Route path="/books/:id" element={<BookPage />} />
            </Routes>
          </BooksContextProvider>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
