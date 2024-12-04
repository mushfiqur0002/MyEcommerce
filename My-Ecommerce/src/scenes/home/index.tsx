import { SelectedPage } from '@/shared/types';
import ActionButton from '@/shared/ActionButton';
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import HomePageText from "@/assets/HomePageText.png";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';
import Design1 from '@/assets/design1.png';
import Design2 from '@/assets/design2.png';
import Design3 from '@/assets/design3.png';
import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import ContactUs from '../contactus';
import Footer from '../footer';
type ContextType = { setSelectedPage: (value: SelectedPage) => void };

const Home = () => {
    const { setSelectedPage } = useOutletContext<ContextType>();
    // const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
    const [hovered, setHovered] = useState([false, false, false, false]);
    const handleMouseEnter = (index: number) => {
        const newHoveredImages = [...hovered];
        newHoveredImages[index] = true;
        setHovered(newHoveredImages);
      };
    
    const handleMouseLeave = (index: number) => {
        const newHoveredImages = [...hovered];
        newHoveredImages[index] = false;
        setHovered(newHoveredImages);
      };
      const buttonStyles = (isHovered: boolean) =>
        `absolute bottom-10 transition-opacity duration-300 bg-secondary-500 text-white font-bold py-2 px-8 rounded  hover:bg-green-500 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`;

  return(<section id='home' className='gap-16 bg-gray-20 pb-10 py-10 md:h-full md:pb-0'>
    {/* Home Image and text */}
    <motion.div className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6' onViewportEnter= {()=> setSelectedPage(SelectedPage.Home)}>
        {/* Main Header */}
        <div className='z-10 mt-32 md:basis-3/5'>
            {/* Headings */}
            < motion.div 
            className='md:-mt-20 ' 
            initial= 'hidden' 
            whileInView='visible' 
            viewport={{once: true, amount: 0.5}} 
            transition={{duration: 0.5}} 
            variants={{hidden: {opacity: 0, x:-50}, 
            visible:{opacity: 1, x:0}}}>

                <div className='relative '>
                    <div>
                        <img alt='home-page-text' src={HomePageText}/>
                    </div>
                </div>

                <p className='mt-4 text-sm'>
                    Step into comfort with our ultra-lightweight Runners designed to feel like a second skin! 
                    With breathable materials and unbeatable cushioning, these sneakers keep you moving effortlessly all day every day.
                </p>
            </motion.div>
            {/* Actions */}
            <motion.div 
            className='mt-8 flex items-center gap-8 md:justify-start' 
            initial= 'hidden' 
            whileInView='visible' 
            viewport={{once: true, amount: 0.5}} 
            transition={{delay: 0.2, duration: 0.5}} 
            variants={{hidden: {opacity: 0, x:-50}, 
            visible:{opacity: 1, x:0}}}>

                <ActionButton to="/mybag"> Shop Now</ActionButton>
                <AnchorLink className='text-sm font-bold text-primary-500 underline hover:text-secondary-500 ' onClick={()=> setSelectedPage(SelectedPage.ContactUs)}
                href={`#${SelectedPage.ContactUs}`}/>
                <p className='text-sm font-bold text-primary-500 underline cursor-pointer'> Learn More</p>
            </motion.div>
        </div>

        {/* home image */}
        <div className='flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end '>
            <img alt='home-page-image' src={HomePageGraphic}/>
        </div>
    </motion.div>
    {/* SPONSORS */}
    {/* //{isAboveMediumScreens && ( */}
        <div className="h-[397px] w-full">
            <div className="mx-auto w-5/6">
                    <div className=" grid grid-cols-2 gap-8 md:flex md:items-center md:justify-between">
                        
                        {/* Image 1 with price */}
                        <div className=" relative group flex flex-col items-center w-3/4" 
                            onMouseEnter={() => handleMouseEnter(0)}
                            onMouseLeave={() => handleMouseLeave(0)}>

                            <img alt="runners-one" src={Design1} className="w-full mx-auto md:w-full bg-primary-100 "/>
                            {/* Button appears when hovering over the image */}
                            <button className={buttonStyles(hovered[0])} >
                                Add to Bag
                            </button>
                            <p className="mt-8 text-lg font-bold text-red-600">$39.99</p>
                        </div>

                        {/* Image 2 with price */}
                        <div className=" relative group flex flex-col items-center w-3/4"
                            onMouseEnter={() => handleMouseEnter(1)}
                            onMouseLeave={() => handleMouseLeave(1)}>

                            <img alt="runners-two" src={HomePageGraphic} className="w-full mx-auto md:w-full bg-red-300 " />
                            <button className={buttonStyles(hovered[1])} >
                                Add to Bag
                            </button>
                            <p className="mt-8 text-lg font-bold text-red-600">$89.99</p>
                        </div>

                        {/* Image 3 with price */}
                        <div className="relative group flex flex-col items-center w-3/4"
                            onMouseEnter={() => handleMouseEnter(2)}
                            onMouseLeave={() => handleMouseLeave(2)}>

                            <img alt="runners-three" src={Design2} className="w-full mx-auto md:w-full bg-primary-100 " />
                            <button className={buttonStyles(hovered[2])}  >
                                Add to Bag
                            </button>
                            <p className="mt-8 text-lg font-bold  text-red-600">$49.99</p>
                        </div>

                        {/* Image 4 with price */}
                        <div className=" relative group flex flex-col items-center w-3/4"
                            onMouseEnter={() => handleMouseEnter(3)}
                            onMouseLeave={() => handleMouseLeave(3)}>

                            <img alt="runners-four" src={Design3} className="w-full mx-auto md:w-full bg-red-300 " />
                            <button className={buttonStyles(hovered[3])}  >
                                Add to Bag
                            </button>
                            <p className="mt-8 text-lg font-bold  text-red-600">$59.99</p>
                        </div>
                    </div>
            </div>
        </div>
        <div>
            <ContactUs setSelectedPage={setSelectedPage}/>
        </div>
        <div>
            <Footer/>
        </div>
    </section>
  
  );
}

export default Home;