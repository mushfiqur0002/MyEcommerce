import Navbar from "@/scenes/navbar";
import { useEffect, useState } from "react";
import { SelectedPage } from "./shared/types";
import { Outlet } from "react-router";
import Footer from "./scenes/footer";


function App() {
  const [basket, setBasket] = useState<{id: number, name: string, price: number}[]>([]);
   const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
   const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

    const addToBasket = (item: {id: number; name: string; price:number}) =>{
          setBasket((prevBasket)=>[...prevBasket, item]); // Add new item to basket
    };

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
        basketCount={basket.length}
      />
      <Outlet context={{ setSelectedPage, addToBasket, basket}}/>
      <Footer/>
    </div>
)}

export default App;
