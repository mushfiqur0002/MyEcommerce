import Navbar from "@/scenes/navbar";
import { useEffect, useState } from "react";
import { SelectedPage } from "./shared/types";
import { Outlet } from "react-router";
import Footer from "./scenes/footer";



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
    <div className=" flex flex-col min-h-screen">
      <Navbar
        isTopOfPage = {isTopOfPage}
        selectedPage={selectedPage} 
        setSelectedPage={setSelectedPage}
      />
      <Outlet context={{ setSelectedPage }}/>
      <Footer/>
    </div>
)}

export default App;
