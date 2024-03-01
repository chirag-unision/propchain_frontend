import React from "react";
import TopBar from "../components/common/topBar";
import PropertyCard from "../components/dashboard/propertyCard";
import PropertyCardSearch from "../components/search/PropertyCardSearch";
import { Button } from "@mui/material";

function RequestsPage() {
    return (
        <div>
            <TopBar />
            <div className="flex flex-col">
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
            </div>
        </div>
    );
}
export default RequestsPage;
