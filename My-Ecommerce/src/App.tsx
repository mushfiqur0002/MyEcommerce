import Navbar from "@/scenes/navbar";
import { useEffect, useState } from "react";
import { SelectedPage } from "./shared/types";
import { Outlet } from "react-router";
import Footer from "./scenes/footer";


function App() {
  const [basket, setBasket] = useState<{id: number, name: string, price: number , amount: number}[]>([]);
   const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
   const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

    const addToBasket = (item: {id: number; name: string; price:number}) =>{
      setBasket((prevBasket) => {
        const existingItem = prevBasket.find((b) => b.id === item.id);
        
        if (existingItem) {
          return prevBasket.map((b) =>
            b.id === item.id ? { ...b, amount: b.amount + 1 } : b
          );
        } else {
          return [...prevBasket, { ...item, amount: 1 }];
        }
      });
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
        basketCount={basket.reduce((sum, item) => sum + item.amount, 0)}
      />
      <Outlet context={{ setSelectedPage, addToBasket, basket}}/>
      <Footer/>
    </div>
)}

export default App;
