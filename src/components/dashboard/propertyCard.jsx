import React from "react";
import Button from '@mui/material/Button';
import { Modal, Rating, Typography } from "@mui/material";

const PropertyCard = ({ isOwner = false , price="10k",data, handlePayment, owner = "Sourav Rao Apte" }) => {
    const [modal, setModal] = React.useState(false);
    const [ownerRating, setOwnerRating] = React.useState(1);
    const [propertyRating, setPropertyRating] = React.useState(1);
    

    const handleModalSubmit = () => {
        if(handlePayment){

        const data = {};
        handlePayment(price, data).then(()=>{
            setModal(false);
        });
    }
    }
    
    return (
        <div    >
            <div className="flex flex-row w-full h-80  shadow-lg bg-nak-light-gray rounded-3xl mx-auto my-auto">
                <div className="flex flex-row w-[70%] h-[100%] bg-nak-dark-gray rounded-tl-3xl rounded-bl-3xl gap-x-5">
                    <div className="flex flex-col ">
                        <img src="https://images.livemint.com/rf/Image-621x414/LiveMint/Period1/2014/12/16/Photos/house-ktQD--621x414@LiveMint.jpg" alt="property" className="w-[18vw] h-30 rounded-3xl ml-5 mt-5" />
                        <div className="text-white ml-5 mt-5 w-max font-sans"> Rent Period</div>
                        <div className="text-white ml-5 mt-5 w-max font-sans text-3xl "> 5 Months</div>
                    </div>
                    <div className="flex flex-col justify-start mt-5">
                        <div className="text-white  mt-3 font-sans text-3xl font-extrabold"> {data?.title||"Property Name"}</div>
                        <div className="text-white  mt-3 font-sans text-md"> location:{data?.address || "asdu aus duw das od aoisd oisd osiad "} </div>
                        {isOwner ? <div>
                            <div className="flex flex-row w-max mt-5">
                                <div className="text-white  font-sans text-2xl font-bold ">Current Tenants: </div>
                                <div className=" flex flex-row ml-4 bg-white w-max rounded-3xl">
                                    <div className="bg-black rounded-full w-6 h-6 m-3"></div>
                                    <div className="m-auto font-bold font-sans mr-5">Naksh</div>
                                </div>
                            </div>
                            <img src="/Docs.png" className="w-[4vw] mt-6" />
                        </div> : <div>
                            <div className="flex flex-row w-max mt-5">
                                <div className="text-white  font-sans text-2xl font-bold ">Owner: {owner}</div>
                                <div className="ml-[20px]">
                                <Button variant="contained" className="ml-[10px]" style={{
                                    backgroundColor: "#4A4A4A",
                                    borderRadius: "20px",
                                    fontWeight: "bold",
                                }}>View Profile</Button>
                                </div>
                            </div>
                            <div className="mt-10"><Button variant="contained" 
                            onClick={()=>{setModal(true)}}
                             style={{
                                backgroundColor: "#1C450D",
                                width: "12vw",
                                borderRadius: "20px",

                            }} >Pay latest Rent</Button></div>
                        </div>}
                    </div>
                        

                </div>
                <div className="flex flex-col justify-center mx-auto ">
                    <div className="text-8xl text-white">
                        {data?.price || "10"}k
                    </div>
                    <div className="text-white text-2xl mx-auto">
                        per mo
                    </div>

                </div>


            </div>
            <Modal
                open={modal}
                onClose={()=>{setModal(false)}}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                // style={{}}
                className="flex justify-center items-center"
            >
                <div className="bg-nak-dark-gray w-1/3 p-5 border-[#2D2D2D] border-8  rounded-lg">
                    <div className="text-white text-2xl mb-3"> Give Property Review and Pay Rent</div>
                    <div className="rounded-xl bg-[#2D2D2D] p-4 text-[#ADADAD]">
                        Help us give you a better user experience. 
                        Fill the feedback form before paying your monthly rent
                    </div>
                    <div className="flex flex-row justify-evenly gap-x-5 mt-5 text-white">
                        <div>
                            <Typography component="legend">Owner Rating</Typography>
                            <Rating
                                name="simple-controlled"
                                value={ownerRating}
                                onChange={(event, newValue) => {
                                setOwnerRating(newValue);
                                }}
                            />
                        </div>
                        <div>
                            <Typography component="legend">Property Rating</Typography>
                            <Rating
                                name="simple-controlled"
                                value={propertyRating}
                                onChange={(event, newValue) => {
                                setPropertyRating(newValue);
                                }}
                            />
                        </div>
                    </div>
                    <Button variant="contained" 
                    onClick={handleModalSubmit}
                        style={{margin:"0.5rem auto", display:"block"}} color="primary" >
                    Pay {data?.price || "10"}k for this Month</Button>
                        
                        
                    
                </div>
            </Modal>   
        </div>

    );
}

export default PropertyCard;