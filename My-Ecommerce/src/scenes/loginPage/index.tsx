import LoginForm from "@/shared/LoginForm"
import HomePageText from "@/assets/HomePageText.png";

type Props =  {}

function LoginPage({}: Props) {
  return (
    <section id='login' className="mx-auto w-5/6 pt-24 pb-32 mt-20">
      <div className="flex content-center my-20 mx-20">
        <div className="">
          <h1 className="text-lg font-bold text-red-600"> Log in</h1>
          <div>
              <LoginForm/>
          </div>
        </div>
        <div className="mx-20">
          <img alt="runners-two" src={HomePageText} className="w-full mx-auto md:w-full " />
        </div>
      </div>
    </section>
  )
}

export default LoginPage