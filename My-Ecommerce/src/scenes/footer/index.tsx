import Logo from "@/assets/logo.png";

// Footer section
const Footer = () => {
  return <footer className="bg-primary-100 py-4  mt-auto">
    <div className=" justify-content mx-auto w-5/6 gap-16 md:flex">
      <div className="mt-4 basis-1/2 md:mt-0">
        <img alt="logo" src={Logo}/>
        <p className="my-5">This is an example website created to showcase functionality and design.</p>
        <p>© Runners All Rights Reserved.</p>
      </div>
      <div className="mt-4 basis-1/4 md:mt-0">
        <h4 className="font-bold">Customer services</h4>
        <p className="my-5">FAQ's</p>
        <p className="my-5">Orders & payments</p>
        <p className="my-5">Delivery & return</p>
        <p className="my-5">Track order</p>
      </div>
      <div className="mt-4 basis-1/4 md:mt-0">
      <h4 className="font-bold">About us</h4>
      <p className="my-5">Careers</p>
        <p className="my-5">Terms & conditions</p>
        <p className="my-5">Promotion terms</p>
        <p className="my-5">Affiliates</p>
      </div>
    </div>
  </footer>
}

export default Footer;