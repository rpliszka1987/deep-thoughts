import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import NoMath from "./pages/NoMatch";
import SingleThoght from "./pages/SingleThought";
import Profile from "./pages/Profile";
import SignUp from "./pages/Signup";
import ThoughtList from "./components/ThoughtList";

// Connection between front and back end
const httpLink = createHttpLink({
  uri: "/graphql",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Routes>
              {/* Homepage */}
              <Route path="/" element={<Home />} />
              {/* Login Page */}
              <Route path="/login" element={<Login />} />
              {/* Sign up page */}
              <Route path="/signup" element={<SignUp />} />
              {/* Profile page */}
              <Route path="/profile" element={<Profile />} />
              {/* Single Thought page */}
              <Route path="/thought" element={<SingleThoght />} />
              {/* Any other route that dont match anthing */}
              <Route path="*" element={<NoMath />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
