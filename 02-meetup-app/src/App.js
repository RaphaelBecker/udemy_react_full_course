// In the App component which is wrapped by BrowserRouter,
// we have to import all pages which should be able to be routed to and import the Route package.
import { Route, Routes } from "react-router-dom";
// custom files: Pages and navigation
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupsPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/ui/Layout";

function App() {
  // Routing Version 6 + !!!
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path="/new-meetup" element={<NewMeetupsPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
