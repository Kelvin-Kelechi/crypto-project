import React,{useState} from "react";
import Featured from "./component/Featured";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Signup from "./component/Signup";
import { UserContext } from "./context/UserContext";
 

 
function App() {
  const [data, setData]= useState(null);
  return (
    < >
       <UserContext.Provider value={{setData,data}}>
       <Navbar />
       <Hero />
       <Featured />
       <Signup />
       <Footer />
       </UserContext.Provider>
    </ >
  );
}

export default App;
