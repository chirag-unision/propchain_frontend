import { Stack, Switch, Typography } from "@mui/material";


const TopBar = ({ toggle=false, setIsOwner = ()=>{return;}, iconUrl = "/User.png", user_name = "Nakshatra Chandna", showAdd = true }) => {
    return (
        <div className="w-full bg-[rgba(183,0,24,0.43)] px-8 py-4 flex flex-row justify-between">
            <div className=" flex flex-row gap-x-6">

                <div className="">
                    <img src={iconUrl} className="h-[2rem] w-[2rem] rounded-md "></img>
                </div>

                <div className="text-white h-min mt-[0.25rem]">
                    {user_name}
                </div>

                <div className="text-white cursor-pointer bg-[#1E2021] px-3 py-1 h-min rounded-lg "
                    onClick={()=>{
                        localStorage.removeItem("userData");
                        window.location.href = "/";
                    }}
                >
                    Logout
                </div>

                {toggle &&
                <Stack direction="row" spacing={1} alignItems="center">
                    <Typography className="text-white">Tenant</Typography>
                    <Switch onChange={(e,d)=>{setIsOwner(d)}} />
                    <Typography className="text-white">Owner</Typography>
                </Stack>}

            </div>

            <div className="flex flex-row gap-x-6">
               { showAdd &&
                <div className="text-white bg-[#1E2021] px-3 py-1 h-min rounded-lg ">
                    <a href="/addProperty">
                    Add Another Property 
                    </a>
                </div>
                }
                <div className="cursor-pointer">
                    <a href="/requests">
                    <img src={"/Inbox.svg"} className="h-[2rem] w-[2rem] rounded-md "></img>
                    </a>
                </div>
                

            </div>

        </div>
    );
}

export default TopBar;