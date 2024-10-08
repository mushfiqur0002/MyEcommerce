import { SelectedPage } from "@/shared/types";
type Props = {
  setSelectedPage: (value: SelectedPage)=> void;
}

const Discover = ({setSelectedPage}: Props) => {
  return <section id = "discover" className="mx-auto w-5/6 pt-24 pb-32"  >
  </section>
}

export default Discover;
