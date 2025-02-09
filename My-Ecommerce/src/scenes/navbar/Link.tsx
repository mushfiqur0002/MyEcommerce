import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll"
import { HomeIcon, ShoppingBagIcon, ChatBubbleLeftEllipsisIcon} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

type Props = {
    page: string;
    selectedPage: SelectedPage ;
    setSelectedPage: (value: SelectedPage) => void;
    basketCount?: number;

}

const LinkPage = ({page, selectedPage, setSelectedPage, basketCount = 0  }: Props) => {
    const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

    const renderIcon = () => {
      switch (page) {
          case "Home":
              return <Link to="/"><HomeIcon className="h-6 w-6"/></Link>;
              case "My Bag":
                return (
                    <Link to="/mybag">
                        <div className="relative flex items-center">
                            <ShoppingBagIcon className="h-6 w-6" />
                            {basketCount > 0 && ( // Show only when > 0
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex justify-center items-center">
                                    {basketCount}
                                </span>
                            )}
                        </div>
                    </Link>
                );
          case "Contact Us":
            return <Link to="/">< ChatBubbleLeftEllipsisIcon className="h-6 w-6"/></Link>;
                    
          default:
              return null;
      }
    };

  return (
    <AnchorLink
    className={`${
      selectedPage === lowerCasePage ? "text-primary-500" : ""} 
      flex items-center gap-2 transition duration-500 hover:text-primary-300`} 
      href={`#${lowerCasePage}`}
      onClick={()=> setSelectedPage(lowerCasePage)}>
        {renderIcon()}
        <span>{page}</span>
    </AnchorLink>
  )
}

export default LinkPage