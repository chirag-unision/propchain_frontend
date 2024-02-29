import React from "react";

const PropertyCard = () => {
    return (
        <div className="h-screen bg-white ">
            <div className=" w-[80%] h-80  shadow-lg bg-nak-light-gray rounded-3xl mx-auto my-auto">
                <div className="flex flex-row w-[70%] h-[100%] bg-nak-dark-gray rounded-tl-3xl rounded-bl-3xl gap-x-5">
                    <div className="flex flex-col ">
                        <img src="https://mui.com/static/images/cards/contemplative-reptile.jpg" alt="property" className="w-[10vw] h-30 rounded-3xl ml-5 mt-5" />
                        <div className="text-white w-max font-sans"> Rent Period</div>
                        <div className="text-white w-max font-sans text-3xl "> 5 Months</div>
                    </div>
                    <div className="flex flex-col justify-start">
                        <div className="text-white  mt-3 font-sans text-3xl font-extrabold"> Property Name</div>
                        <div className="text-white  mt-3 font-sans text-sm"> location: ererfef  wfewfwfw f  wfewfwfwfwfw   wfw </div>
                        <div className="flex flex-row">
                            <div className="text-white  mt-3 font-sans text-2xl font-bold">Current Tenants: </div>
                            <div className="bg-white w-10 "></div>
                        </div>

                    </div>


                </div>

            </div>
        </div>
        
    );
}

export default PropertyCard;