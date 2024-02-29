

const TopBar = ({ iconUrl = "/User.png", user_name = "Nakshatra Chandna", showAdd = true }) => {
    return (
        <div className="w-full bg-[rgba(183,0,24,0.43)]  p-3 flex flex-row justify-between">
            <div className=" flex flex-row gap-x-2">
                <div className="">
                    <img src={iconUrl} className="h-[2rem] w-[2rem] rounded-md "></img>
                </div>

                <div className="text-white text-center ">
                    {user_name}
                </div>

            </div>

            <span>

            </span>

        </div>
    );
}

export default TopBar;