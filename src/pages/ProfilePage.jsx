import { useEffect } from "react";
import TopBar from "../components/common/topBar";
import { useState } from "react";
import { BASE_URL } from "../constants";

const ProfilePage = ({ uid = 1 }) => {

    const [userData, setUserData] = useState({
        uid: 1,
        name: "Chirag Ahluwalia",
        email: "sharma@gmail.com",
        phone: "7617439147",
        address: "Delhi",

        aadhar: "1234567890",
    });

    const getUserData = async (uid) => {
        axios.post(BASE_URL + "api/user/getuser", {
            uid: uid
        }
        ).then((res) => {
            console.log(res.data);
            setUserData(res.data);
        }
        ).catch((err) => {
            console.log(err);
        }
        )
    }
    useEffect(() => {
        getUserData();
    }
        , [])

    return (
        <div>
            <TopBar />
            <div className="flex flex-col w-[100vw] ">
                <div className="text-6xl text-white font-sans font-bold mx-auto mt-20 mb-10 bg-[#5B5B5B] p-10 rounded-3xl">Welcome, {userData.name}</div>
                <div className="bg-[#5B5B5B] mx-auto rounded-2xl p-10 align-middle justify-center w-[50vw] text-lg font-bold text-white">
                    Email<div className="text-white text-3xl mx-auto mb-10 font-bold">{userData.email}</div>
                    Phone Number<div className="text-white text-3xl mx-auto mb-10 font-bold">{userData.phone}</div>
                    Aadhar number<div className="font-bold text-white text-3xl mx-auto mb-10">{userData.aadhar}</div>
                    Location<div className="font-bold  text-white text-3xl mx-auto ">{userData.address}</div>
                </div>
            </div>


        </div>
    );
}
export default ProfilePage;