

const TopBar = ({ iconUrl = "/User.png", user_name = "Nakshatra Chandna", showAdd = true }) => {
    return (
        <div className="w-full bg-[rgba(183,0,24,0.43)] px-8 py-4 flex flex-row justify-between">
            <div className=" flex flex-row gap-x-6">

                <div className="">
                    <img src={iconUrl} className="h-[2rem] w-[2rem] rounded-md "></img>
                </div>

                <div className="text-white h-min mt-[0.25rem]">
                    {user_name}
                </div>

                <div className="text-white bg-[#1E2021] px-3 py-1 h-min rounded-lg ">
                    Edit Profile 
                </div>

            </div>

            <div className="flex flex-row gap-x-6">
               { showAdd &&
                <div className="text-white bg-[#1E2021] px-3 py-1 h-min rounded-lg ">
                    <a href="/addProperty">
                    Add Another Property 
                    </a>
                </div>
                }
                <div className="">
                    <img src={"/Wallet.png"} className="h-[2rem] w-[2rem] rounded-md "></img>
                </div>
                

            </div>

        </div>
    );
}

export default TopBar;