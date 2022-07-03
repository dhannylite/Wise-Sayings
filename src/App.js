import { Route, Routes } from "react-router-dom";
import Navigation from "./components/layout/Navigation";
import AllQuotes from "./pages/AllQuotes";
import NewQuotes from "./pages/NewQuotes";
import QuoteDetail from "./pages/QuoteDetail"
import './App.css'
import Comments from "./components/comments/Comments";

function App() {
  return (
    <div className="app">
    <Navigation />
      <Routes>
        <Route path="" element={<p className='home-text'>Hello, Welcome To Wise Sayings</p>} />
      <Route path="/quotes" element={<AllQuotes />} />
      <Route path="/new-quote" element={<NewQuotes />} />
        <Route path="/detail/:id" element={<QuoteDetail />}>
          <Route path={`comments`} element={<Comments />} />
      </Route>
    </Routes>
    </div>
  );
}

export default App;
