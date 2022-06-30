import React from 'react';
import '../../App.css';
import Cards from '../Cards';

import Footer from '../Footer';
import {useContext} from "react"
import { UserContext } from '../../context/UserContext';

function Home() {
  const[user]=useContext(UserContext)

  console.log("USer is",user?.user)
  return (
    <>
   
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
