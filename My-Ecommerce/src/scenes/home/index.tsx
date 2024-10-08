import useMediaQuery from '@/hooks/useMediaQuery';
import { SelectedPage } from '@/shared/types';
import ActionButton from '@/shared/ActionButton';
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import HomePageText from "@/assets/HomePageText.png";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';
type Props = {
    setSelectedPage : (value: SelectedPage) =>void;
}

const Home = ({setSelectedPage}: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)"); 
  return <section id='home' className='gap-16 bg-gray-20 pb-10 py-10 md:h-full md:pb-0'>
    {/* Home Image and text */}
    <motion.div className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6' onViewportEnter= {()=> setSelectedPage(SelectedPage.Home)}>
        {/* Main Header */}
        <div className='z-10 mt-32 md:basis-3/5'>
            {/* Headings */}
            < motion.div className='md:-mt-20 ' initial= 'hidden' whileInView='visible' viewport={{once: true, amount: 0.5}} transition={{duration: 0.5}} variants={{hidden: {opacity: 0, x:-50}, visible:{opacity: 1, x:0}}}>

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
            <motion.div className='mt-8 flex items-center gap-8 md:justify-start' initial= 'hidden' whileInView='visible' viewport={{once: true, amount: 0.5}} transition={{delay: 0.2, duration: 0.5}} variants={{hidden: {opacity: 0, x:-50}, visible:{opacity: 1, x:0}}}>
                <ActionButton setSelectedPage={setSelectedPage}> Shop Now</ActionButton>
                <AnchorLink className='text-sm font-bold text-primary-500 underline hover:text-secondary-500 ' onClick={()=> setSelectedPage(SelectedPage.ContactUs)}
                href={`#${SelectedPage.ContactUs}`}/>
                <p className='text-sm font-bold text-primary-500 underline'> Learn More</p>
            </motion.div>
        </div>

        {/* home image */}
        <div className='flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end '>
            <img alt='home-page-image' src={HomePageGraphic}/>
        </div>
    </motion.div>
    {/* SPONSORS */}
    {isAboveMediumScreens && (
        <div className="h-[350px] w-full bg-primary-100 py-10">
            <div className="mx-auto w-5/6">
                <div className="flex w-1/6 items-center justify-between gap-40">
                    <img alt="runners-one" src={HomePageGraphic} />
                    <img alt="runners-two" src={HomePageGraphic} />
                    <img alt="runners-three" src={HomePageGraphic} />
                    <img alt="runners-four" src={HomePageGraphic} />
                </div>
            </div>
        </div>
    )}
  </section>;
}

export default Home;