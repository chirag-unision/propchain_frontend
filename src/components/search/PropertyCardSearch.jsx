import React from "react";
import { useState } from "react";
import Button from '@mui/material/Button';

const   PropertyCardSearch = ({ isRequest = true ,data = {
    pid: 1,
    uid: "Chirag Ahluwalia",
    title: "Property Name",
    address: "pta nahi",
    price: "10k"
},sendRequest }) => {

    const [sent,setSendRequest] = useState(false);

    return (
        <div onClick={()=>{
            console.log("component Clicked");
        }}>
            <div className="flex flex-row w-[80vw] h-[40vh]  shadow-lg bg-nak-light-gray rounded-3xl mx-auto my-auto">
                <div className="flex flex-row w-[65vw] h-[100%] bg-nak-dark-gray rounded-tl-3xl rounded-bl-3xl gap-x-5">
                    <div className="flex flex-col ">
                        <img src="https://images.livemint.com/rf/Image-621x414/LiveMint/Period1/2014/12/16/Photos/house-ktQD--621x414@LiveMint.jpg" alt="property" className="w-[18vw] h-30 rounded-3xl ml-5 mt-5" />
                        <div className="text-white ml-5 mt-5 w-max font-sans"> Owner</div>
                        <div className="text-white ml-5 mt-5 w-max font-sans text-3xl "> {data?.uid || `Chirag Ahluwalia`}</div>
                    </div>
                    <div className="flex flex-col justify-start mt-5">
                        <div className="flex flex-row">
                        <div className="text-white  mt-3 mr-5 ml-5 font-sans text-3xl font-extrabold"> {data?.title || `Property Name`}</div>
                        <div className="bg-nak-light-gray p-3 rounded-3xl text-white">
                            {data?.no_of_person || 4} people
                        </div>
                        </div>
                        <div className="flex flex-row bg-nak-light-gray w-[40vw] h-[10vh] ml-5 mt-5  mr-5 rounded-2xl">
                            <div className="text-white m-auto font-bold ">2 Beds</div>
                            <div className="border-r-2 h-[70%] m-auto border-white"></div>
                            <div className="m-auto font-bold text-white">2 Baths</div>
                            <div className="border-r-2 h-[70%] m-auto border-white"></div>
                            <div className="m-auto font-bold text-white">Semi Furnished</div>
                        </div>
                        <div className="text-[#5B5B5B]  mt-3 ml-5 font-sans text-md font-extrabold">{data.address || `pta nahi`}</div>

                    </div>


                </div>
                <div className="flex flex-col justify-center mx-auto ">
                    {isRequest ? <div className="flex flex-col">
                        <div className="text-7xl text-white mx-auto font-bold">
                            {data.price || `10k`}
                        </div>
                        <div className="text-white text-2xl mx-auto">
                            per mo
                        </div>
                        <Button variant="outlined" className="bg-nak-light-gray text-white mt-10" style={{
                            color: "white",
                            borderRadius: "40px",
                            borderColor: "#60121D",
                            widows: "10vw",
                            marginTop: "2vh"

                        }}>View Details</Button>
                    </div> : <div className="flex flex-col justify-center mx-auto ">
                        <div className="text-6xl font-bold text-white mx-auto">
                            {data.price || `10k`}
                        </div>
                        <div className="text-white text-2xl mx-auto mb-5">
                            per mo
                        </div>
                        <Button variant="contained" className="bg-nak-light-gray text-white mt-5" onClick={()=>{
                            sendRequest();
                            setSendRequest(true);
                        }} style={{
                            backgroundColor: "#60121D",
                            borderRadius: "40px",
                            width: "10vw",

                        }}>{sent?`Sent`:`Send Request`}</Button>
                        <a href={"/property?pid="+data?.pid} className="w-full">
                        <Button variant="outlined" className="bg-nak-light-gray w-full text-white mt-10" style={{
                            color: "white",
                            borderRadius: "40px",
                            borderColor: "#60121D",
                            widows: "10vw",
                            marginTop: "2vh"

                        }}>View Details</Button>
                        </a>
                    </div>}

                </div>


            </div>
        </div>

    );
}

export default PropertyCardSearch;