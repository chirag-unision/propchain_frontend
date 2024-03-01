import React from "react";

const PropertyCard = ({}) => {
    return (
        <div    >
            <div className="flex flex-row w-[80%] h-80  shadow-lg bg-nak-light-gray rounded-3xl mx-auto my-auto">
                <div className="flex flex-row w-[70%] h-[100%] bg-nak-dark-gray rounded-tl-3xl rounded-bl-3xl gap-x-5">
                    <div className="flex flex-col ">
                        <img src="https://mui.com/static/images/cards/contemplative-reptile.jpg" alt="property" className="w-[18vw] h-30 rounded-3xl ml-5 mt-5" />
                        <div className="text-white ml-5 mt-5 w-max font-sans"> Rent Period</div>
                        <div className="text-white ml-5 mt-5 w-max font-sans text-3xl "> 5 Months</div>
                    </div>
                    <div className="flex flex-col justify-start mt-5">
                        <div className="text-white  mt-3 font-sans text-3xl font-extrabold"> Property Name</div>
                        <div className="text-white  mt-3 font-sans text-md"> location: ererfef  wfewfwfw f  wfewfwfwfwfw   wfw </div>
                        <div className="flex flex-row w-max mt-5">
                            <div className="text-white  font-sans text-2xl font-bold ">Current Tenants: </div>
                            <div className=" flex flex-row ml-4 bg-white w-max rounded-3xl">
                                <div className="bg-black rounded-full w-6 h-6 m-3"></div>
                                <div className="m-auto font-bold font-sans mr-5">Naksh</div>
                            </div>
                        </div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP0Jjiu0LQj59Wm8RUTVgn52VdNzkE0oMUcc6-Q4fJ6vgcA6regpZEfuVn4wtCbqCzoYY&usqp=CAU"  className="w-[4vw] mt-6"/>
                    </div>


                </div>
                <div className="flex flex-col justify-center mx-auto ">
                    <div className="text-8xl text-white">
                        10k
                    </div>
                    <div className="text-white text-2xl mx-auto">
                        per mo
                    </div>
                    
                </div>
                

            </div>
        </div>

    );
}

export default PropertyCard;