
import { useOutletContext } from "react-router";


const MyBag = ()=>{

  const {basket} = useOutletContext<{
    basket:{
      id: number;
      name: string;
      price: number;
      amount: number; }[]
    }>();

    // Calculate sub total price dynamically
    const subTotal = basket.reduce((sum, item) => sum + item.price * item.amount, 0);
    //Calculate VAT
    const vatAmount = subTotal * 0.2;
    // Calculate total appling VAT
    const totalPrice = subTotal + vatAmount;

  return (
        <section id="myBag" className="mx-auto w-5/6 pt-24 pb-32 mt-20">
            <h1 className="text-3xl font-bold text-left mb-8">Your Bag</h1>

            {basket.length === 0 ? (
                <p className="text-center text-lg">Your bag is empty.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Left: List of Products */}
                    <div className="md:col-span-2 flex flex-col gap-4">
                        {basket.map((item, index) => (
                            <div key={index} className="flex items-center justify-between p-4 shadow-md">
                                <div>
                                    <h2 className="text-xl font-semibold">{item.name}</h2>
                                    <p className="text-lg text-red-500">Price: £{item.price.toFixed(2)}</p>
                                    <div className="flex top-2 right-2 bg-red-500 text-white text-sm px-2 py-1 rounded-full">
                                        <p className="px-2">Amount: </p> {item.amount}
                                    </div>
                                </div>
                                
                            </div>
                        ))}
                    </div>

                    {/* Right: Summary */}
                    <div className="p-6 border rounded-sm shadow-md h-fit">
                        <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
                        <p className="text-lg">Subtotal: <span className="font-bold px-8">£{subTotal.toFixed(2)}</span></p>
                        <p className="text-lg">VAT (20%): <span className="font-bold px-6">£{vatAmount.toFixed(2)}</span></p>
                        <p className="text-xl font-bold text-red-500">Total:<span className="font-bold px-12">£{totalPrice.toFixed(2)}</span></p>
                        <button className="mt-6 w-full bg-primary-500 text-white py-2 rounded hover:bg-green-500">
                            Checkout
                        </button>
                    </div>
                </div>
            )}
            
        </section>

  )
}

export default MyBag;