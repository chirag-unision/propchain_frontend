import TopBar from "../components/common/topBar";
import { useState,useEffect,useCallback } from "react";
import PropertyCard from "../components/dashboard/propertyCard";
import useRazorpay from "react-razorpay";




const DashboardPage = () => {

    const [Razorpay] = useRazorpay();

    const [isOwner, setIsOwner] = useState(false);
    const [modal, setModal] = useState(true);
    const [ownerRating, setOwnerRating] = useState(1);
    const [propertyRating, setPropertyRating] = useState(1);
    
    const handlePayment = useCallback(async (price) => {
        const order = await createOrder(params);
    
        const options = {
          key: "",
          amount: price,
          currency: "INR",
          name: "Acme Corp",
          description: "Test Transaction",
          image: "https://example.com/your_logo",
          order_id: order.id,
          handler: (res) => {
            console.log(res);
          },
          prefill: {
            name: "Piyush Garg",
            email: "youremail@example.com",
            contact: "9999999999",
          },
          notes: {
            address: "Razorpay Corporate Office",
          },
          theme: {
            color: "#3399cc",
          },
        };
    
        const rzpay = new Razorpay(options);
        rzpay.open();
      }, [Razorpay]);
    



    return (
        <div>
            <TopBar toggle={true} setIsOwner={setIsOwner}/>   
            <div className=" text-white text-2xl">
                <div className="mx-20 my-10">
                    <div className="my-3">
                        Current {isOwner?"Tenants":"House"}
                    </div>
                    <PropertyCard isOwner={isOwner}/>
                </div>

                <div className="mx-20 my-10">
                <div className="my-3">
                        Past {isOwner?"Tenants":"House"}
                    </div>
                    <PropertyCard handlePayment={handlePayment} isOwner={isOwner}/>
                </div>
            </div>         
            
        </div>
    );
}

export default DashboardPage;