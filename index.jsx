import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Home.jsx";
import Contact from "./components/Contact.jsx";
import CountryDetail from "./components/CountryDetail.jsx";
const NotFound = () => (
    <div>
      <h2>404 - Page Not Found</h2>
      <p>The page you're looking for doesn't exist.</p>
      <a href="/">Go back to Home</a>
    </div>
  );
const App = () => <App/>;
const Home= () => <Home/>
const Contact = () => <Contact/>;
const CountryDetail= ()=> <CountryDetail/>
const Main = () => {
    return (
      <Router future={{ v7_startTransition: true ,v7_relativeSplatPath: true}} >
          <Routes>
            <Route path="/" element={<App />}>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/:country" element={<CountryDetail />} />
            </Route>
            {/* Catch-all route for unmatched URLs */}
          <Route path="*" element={<NotFound />} />
          </Routes>
      </Router>
    );
  };
const root = createRoot(document.getElementById("root"));
root.render(<Main />);

