import React, { useEffect, useState } from "react";
import TopBar from "../components/common/topBar";
import PropertyCard from "../components/dashboard/propertyCard";
import PropertyCardSearch from "../components/search/PropertyCardSearch";
import { Button } from "@mui/material";
import axios from "axios";
import { BASE_URL } from "../constants";

function RequestsPage() {

    const [data, setData] = useState([
        {
            title: "Property Title",
            address: "Property Address",
            price: 0,
            beds: 0,
            baths: 0,
            furnished: false,
        }
    ]);

    const uid  = JSON.parse(localStorage.getItem("userData")).uid;

    const getRequestsData = () => {
        axios.post(BASE_URL + "api/owner/getrequests", {
            uid: uid
        }
        ).then((res) => {
            console.log(res.data);
            setData(res.data["requests"]);
        }
        ).catch((err) => {
            console.log(err);
        }
        )
    }

    useEffect(() => {
        getRequestsData();
    }, [])


    return (
        <div>
            <TopBar />
            <div className="flex flex-col">
               {data.map((item) => {
                    <>
                    asdsduiasdiu
                <div className="flex flex-row bg-nak-dark-gray h-[10vh] mx-[10vw] rounded-3xl m-10">

                    

                    <div className="text-white m-auto  ">
                        Chirag Ahluwalia is interested in this
                    </div>
                    <div className="m-auto">
                        <Button variant="contained" className="bg-nak-light-gray text-white mt-10 " style={{
                            borderRadius: "40px",
                            backgroundColor: "#1C450D",
                            width: "10vw",
                            height: "5vh",
                            margin: "auto",
                            marginRight: "2vw"
                        }}>Accept</Button>
                        <Button variant="contained" className="bg-nak-light-gray text-white mt-10 " style={{
                            borderRadius: "40px",
                            backgroundColor: "#60121D",
                            width: "10vw",
                            height: "5vh",
                            margin: "auto",
                            marginRight: "2vw"
                        }}>Reject</Button>
                        <Button variant="contained" className="bg-nak-light-gray text-white mt-10 " style={{
                            borderRadius: "40px",
                            backgroundColor: "#2D2D2D",
                            width: "10vw",
                            height: "5vh",
                            margin: "auto",
                        }}>View Profile</Button>
                    </div>

                </div>
                <PropertyCardSearch />
                </>
                    })
                 }
                 </div>
        </div>
    );
}
export default RequestsPage;
