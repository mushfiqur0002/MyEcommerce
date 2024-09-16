
import { useState } from "react";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";
import Logo from "@/assets/logo.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
type Props = {
    selectedPage: SelectedPage ;
    setSelectedPage: (value: SelectedPage) => void;
}

const Navbar = ({selectedPage, setSelectedPage }: Props) => {
    const flexBetween = "flex items-center justify-between";
    const [isMenuToggled, setIsMenuToggled] = useState <boolean> (false);
    const isAboveMediaScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <nav> {/* Navigation bar */}
        <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
            <div className={`${flexBetween} mx-auto w-5/6`}>
                <div className={`${flexBetween} w-full gap-16`}>
                    {/* Left side */}
                    <img alt="logo" src={Logo}/>

                    {/* Right side */}
                    {isAboveMediaScreens ? <div className={`${flexBetween} w-full`}>
                        <div> </div>
                        <div className={`${flexBetween} gap-4 text-sm`} >
                            <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            <Link page="My Wish list" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                            <Link page="My Bag" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                            <button> Sign in / Register</button>
                        </div>
                    {/* HM button right side */}
                    </div>
                    : (
                        <button className="rounded-full bg-secondary-500 p-2" onClick={()=>setIsMenuToggled(!isMenuToggled)
                        }>
                            <Bars3Icon className="h-6 w-6 text-white" />
                        </button>
                    )}
                </div> 
            </div>
        </div>
    </nav>
  )
};


export default Navbar;

