import { Button } from "@mui/material"
import TopBar from "../components/common/topBar"
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants";



const PropertyPage = ({ pid = 1 }) => {

    const [data, setData] = useState([]);

    const getPropertyData = (pid) => {
        axios.post(BASE_URL + "api/tenant/getpropinfo", {
            pid: pid
        }
        ).then((res) => {
            console.log(res.data);
            setData(res.data);
        }
        ).catch((err) => {
            console.log(err);
        }
        )
    }
    useEffect(() => {
        getPropertyData(pid);
    }
        , [])

    return (
        <div>
            <TopBar />
            <div className="p-20 w-full">
                <div className="flex flex-row  bg-nak-dark-gray h-full rounded-2xl">
                    <div className="flex flex-col p-10 w-[30vw]">
                        <img src="https://images.livemint.com/rf/Image-621x414/LiveMint/Period1/2014/12/16/Photos/house-ktQD--621x414@LiveMint.jpg" alt="property" className=" rounded-2xl " />
                        <div className="flex flex-col bg-nak-light-gray rounded-2xl mt-20">
                            <div className="text-8xl text-white mx-auto mt-20"></div>
                            <div className="text-2xl text-[#7B7B7B] mx-auto mb-20">per mo</div>

                        </div>

                    </div>
                    <div className="flex flex-col">
                        <div className="text-5xl text-white mt-10">Property Name</div>
                        <div className="text-2xl text-white mt-10">2 BHK Builder Floor For Sale in Salasar Luxury Floors,Neharpar, Faridab   </div>
                        <div className="flex flex-row bg-nak-light-gray w-100% h-[10vh] mr-10 mt-5 rounded-2xl">
                            <div className="text-white m-auto font-bold ">2 Beds</div>
                            <div className="border-r-2 h-[70%] m-auto border-white"></div>
                            <div className="m-auto font-bold text-white">2 Baths</div>
                            <div className="border-r-2 h-[70%] m-auto border-white"></div>
                            <div className="m-auto font-bold text-white">Semi Furnished</div>
                        </div>
                        <div className="flex flex-row px-auto">

                            <Button variant="contained" className="bg-nak-light-gray text-white mt-10" style={{
                                backgroundColor: "#60121D",
                                borderRadius: "40px",
                                width: "20vw",
                                height: "7vh",
                                fontSize: "1.5vw",
                                fontWeight: "bold",
                                margin: "auto",
                                marginLeft: "0vw",
                                marginTop: "7vh"
                            }}>Send Request</Button>

                            <Button variant="contained" className="bg-nak-light-gray text-white mt-10 " style={{
                                backgroundColor: "#2D2D2D",
                                borderRadius: "10px",
                                width: "20vw",
                                margin: "auto",
                                marginRight: "3.5vw",
                                marginTop: "7vh",
                                height: "7vh",
                            }}>
                                <div className="flex flex-row ">
                                    <div className="bg-nak-dark-gray text-white flex flex-row p-1 rounded-3xl mr-3">
                                        <div className="text-md my-auto mr-1 ml-3 text-white">4</div>
                                        <img src="/src/assets/star.png" className="w-5 h-5 m-auto mr-3" />
                                    </div>
                                    <div className="bg-nak-dark-gray text-white flex flex-row p-1 rounded-3xl">
                                        <div className="text-md my-auto mx-5  text-white">300</div>
                                    </div>
                                    <div className="m-auto ml-4">
                                        Reviews
                                    </div>

                                </div>
                            </Button>
                        </div>
                        <div className="bg-nak-light-gray w-[95%] h-[26vh] mb-10 mt-10 rounded-2xl">

                        </div>
                    </div>
                </div>


                <div className='w-full'></div>


            </div>
        </div>
    )
}

export default PropertyPage