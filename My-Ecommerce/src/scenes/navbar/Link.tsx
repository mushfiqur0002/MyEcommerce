import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll"
import { HomeIcon, ShoppingBagIcon} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

type Props = {
    page: string;
    selectedPage: SelectedPage ;
    setSelectedPage: (value: SelectedPage) => void;
}

const LinkPage = ({page, selectedPage, setSelectedPage }: Props) => {
    const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

    const renderIcon = () => {
      switch (page) {
          case "Home":
              return <Link to="/"><HomeIcon className="h-6 w-6"/></Link>;
          case "My Bag":
              return <ShoppingBagIcon className="h-6 w-6" />;
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