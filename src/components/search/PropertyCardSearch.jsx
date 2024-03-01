import React from "react";
import Button from '@mui/material/Button';

const PropertyCardSearch = ({ isRequest = true }) => {
    return (
        <div    >
            <div className="flex flex-row w-[80vw] h-[40vh]  shadow-lg bg-nak-light-gray rounded-3xl mx-auto my-auto">
                <div className="flex flex-row w-[65vw] h-[100%] bg-nak-dark-gray rounded-tl-3xl rounded-bl-3xl gap-x-5">
                    <div className="flex flex-col ">
                        <img src="https://mui.com/static/images/cards/contemplative-reptile.jpg" alt="property" className="w-[18vw] h-30 rounded-3xl ml-5 mt-5" />
                        <div className="text-white ml-5 mt-5 w-max font-sans"> Owner</div>
                        <div className="text-white ml-5 mt-5 w-max font-sans text-3xl "> Chirag Ahluwalia</div>
                    </div>
                    <div className="flex flex-col justify-start mt-5">
                        <div className="text-white  mt-3 ml-5 font-sans text-3xl font-extrabold"> Property Name</div>
                        <div className="flex flex-row bg-nak-light-gray w-[40vw] h-[10vh] ml-5 mt-5  mr-5 rounded-2xl">
                            <div className="text-white m-auto font-bold ">2 Beds</div>
                            <div className="border-r-2 h-[70%] m-auto border-white"></div>
                            <div className="m-auto font-bold text-white">2 Baths</div>
                            <div className="border-r-2 h-[70%] m-auto border-white"></div>
                            <div className="m-auto font-bold text-white">Semi Furnished</div>
                        </div>
                        <div className="text-[#5B5B5B]  mt-3 ml-5 font-sans text-md font-extrabold"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, impedit! Recusandae doloremque temporibus quasi? Animi alias quos pariatur quod, ducimus, .</div>

                    </div>


                </div>
                <div className="flex flex-col justify-center mx-auto ">
                    {isRequest ? <div className="flex flex-col">
                        <div className="text-7xl text-white mx-auto font-bold">
                            10k
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
                            10k
                        </div>
                        <div className="text-white text-2xl mx-auto mb-5">
                            per mo
                        </div>
                        <Button variant="contained" className="bg-nak-light-gray text-white mt-5" style={{
                            backgroundColor: "#60121D",
                            borderRadius: "40px",
                            width: "10vw",
                        }}>Send Request</Button>
                        <Button variant="outlined" className="bg-nak-light-gray text-white mt-10" style={{
                            color: "white",
                            borderRadius: "40px",
                            borderColor: "#60121D",
                            widows: "10vw",
                            marginTop: "2vh"

                        }}>View Details</Button>
                    </div>}

                </div>


            </div>
        </div>

    );
}

export default PropertyCardSearch;