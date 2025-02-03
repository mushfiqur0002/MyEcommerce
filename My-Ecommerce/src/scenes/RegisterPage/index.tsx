import HomePageText from "@/assets/HomePageText.png";
import RegisterForm from "@/shared/RegisterForm";


const RegisterPage = () => {

    return (
        <section id='login' className="mx-auto w-5/6 pt-24 pb-32 mt-20">
          <div className="flex content-center my-20 mx-20">
            {/* Login form section */}
            <div className="">
              <h1 className="text-lg font-bold text-red-600"> Register</h1>
              <div>
                  <RegisterForm/>
              </div>
            </div>
            <div className="mx-20">
              <img alt="runners-two" 
              src={HomePageText} 
              className="w-full mx-auto md:w-4/5 lg:w-full " />
            </div>
          </div>
        </section>
      )
}
export default RegisterPage;