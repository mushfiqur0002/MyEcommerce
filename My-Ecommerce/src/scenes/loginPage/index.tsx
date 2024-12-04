import LoginForm from "@/shared/LoginForm"
import Footer from "../footer"
import HomePageText from "@/assets/HomePageText.png";

type Props =  {}

function LoginPage({}: Props) {
  return (
    <section id='login' className='gap-16 bg-gray-20 pb-10 py-10 md:h-full md:pb-0'>
      <div className="flex content-center mt-20 mx-40">
        <div className="">
          <h1 className="text-lg font-bold text-red-600"> Log in</h1>
          <div>
              <LoginForm/>
          </div>
        </div>
        <div className="mx-40">
          <img alt="runners-two" src={HomePageText} className="w-full mx-auto md:w-full " />

        </div>
      </div>
      <div className="mt-10">
        <Footer/>
      </div>
    </section>
  )
}

export default LoginPage