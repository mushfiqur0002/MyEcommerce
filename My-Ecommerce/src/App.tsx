import Navbar from "@/scenes/navbar";
import Home from "@/scenes/home";
import { useEffect, useState } from "react";
import { SelectedPage } from "./shared/types";
import Footer from "@/scenes/footer";
import { Outlet } from "react-router";
import ContactUs from "./scenes/contactus";


function App() {
   const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
   const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
    useEffect(()=>{
      const handleScroll = ()=>{
        if (window.scrollY === 0){
          setIsTopOfPage(true);
          setSelectedPage(SelectedPage.Home);
        }
        if (window.scrollY !== 0) {
          setIsTopOfPage(false);
        }
      }
      window.addEventListener("scroll", handleScroll);
      return()=> window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
    <>
      <Navbar
        isTopOfPage = {isTopOfPage}
        selectedPage={selectedPage} 
        setSelectedPage={setSelectedPage}
      />
      <Outlet context={{ setSelectedPage }}/>
    </>
)}

export default App;
