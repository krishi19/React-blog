import React, { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/pages/About";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";

// import SignUp from "./components/pages/SignUp";
import AddBlog from "./components/pages/AddBlog";
import BlogDetails from "./components/pages/BlogDetails";
import {UserContext, UserProvider} from "../src/context/UserContext"
import EditBlog from "./components/pages/EditBlog";

function App() {

  const [blogitems, setBlogItem] = useState([]);

  const addBlogItem = (newBlog) => {
    console.log(newBlog);
    setBlogItem([newBlog, ...blogitems]);
  };

  return (
    <>
    <UserProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/addblog" component={AddBlog} addBlogItem={addBlogItem}/>
          <Route path="/login" component={Login} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/blogdetails" component={BlogDetails} />
          <Route path="/edit" component={EditBlog}/>
        </Switch>
      </Router>
      </UserProvider>
    </>
  );
}

export default App;
