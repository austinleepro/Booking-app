import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "./layouts/Layout";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout title="Home Page">
              <p>Home Page</p>
            </Layout>
          }
        />
        <Route
          path="/search"
          element={
            <Layout title="Search">
              <p>Search page</p>
            </Layout>
          }
        />
        <Route
          path="/register"
          element={
            <Layout title="Register">
              <Register />
            </Layout>
          }
        />
        <Route
          path="/sign-in"
          element={
            <Layout title="Sign In">
              <SignIn />
            </Layout>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
