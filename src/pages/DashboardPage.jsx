import TopBar from "../components/common/topBar";
import { useState,useEffect,useCallback } from "react";
import PropertyCard from "../components/dashboard/propertyCard";
import useRazorpay from "react-razorpay";
import { BASE_URL } from "../constants";
import axios from "axios";




const DashboardPage = () => {

    const [Razorpay] = useRazorpay();

    const [isOwner, setIsOwner] = useState(false);
    const [modal, setModal] = useState(true);
    const [data, setData] = useState([]);
    const [ownerRating, setOwnerRating] = useState(1);
    const [propertyRating, setPropertyRating] = useState(1);
    const uid = JSON.parse(localStorage.getItem("userData")).uid;

    const getOwnerData = async () => {
        axios.post(BASE_URL+"api/owner/getprops",{
            uid: uid
        }
        ).then((res) => {
            console.log(res.data);
            setData(res.data['Properties']);
        }
        ).catch((err) => {
            console.log(err);
        }
        )
    }

    const getTenantData = async () => {
        
        axios.post(BASE_URL+"api/tenant/getprops",{
            uid: uid
        }
        ).then((res) => {
            console.log(res.data);
            setData(res.data['Properties']);
        }
        ).catch((err) => {
            console.log(err);
        }
        )
    }
    
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
    
      

    useEffect(() => {
        if(isOwner){
            getOwnerData();
        }
        else{
            getTenantData();
        }
    }
    ,[isOwner]);

    return (
        <div>
            <TopBar toggle={true} setIsOwner={setIsOwner}/>   
            <div className=" text-white text-2xl">
                <div className="mx-20 my-10">
                    <div className="my-3">
                        Current {isOwner?"Tenants":"House"}
                    </div>
                    {data.length!= 0 && data?.map((d)=>{
                    
                        return <PropertyCard data={d} isOwner={isOwner}/>
                    }
                    )}
                    {/* <PropertyCard data={data}  isOwner={isOwner}/> */}
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