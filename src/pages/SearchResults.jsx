import React, { useEffect } from "react";
import TopBar from "../components/common/topBar";
import { useState } from "react";
import PropertyCardSearch from "../components/search/PropertyCardSearch";
import { BASE_URL } from "../constants";
import axios from "axios";

function SearchResults() {

    function handleRequest() {
        console.log("Request Sent");
    }
    const [data, setData] = useState([
        {
            uid: "Chirag Ahluwalia",
            title: "Property Name",
            address: "pta nahi",
            price: "10k"

        }
    ]);


    const getTenantData = async () => {
        let queryString = window.location.search;
        queryString.replace("?", "");
        queryString = queryString.split("=")[1]
        queryString = queryString.split("%20").join(" ");
        console.log(queryString);

        axios.post(BASE_URL + "api/tenant/getprops", {
            query: queryString
        }
        ).then((res) => {
            console.log(res.data);
            setData(res.data['property']);
        }
        ).catch((err) => {
            console.log(err);
        }
        )
    }
    const sendRequest = async (pid) => {
        console.log("Request Sent");
        axios.post(BASE_URL + "api/tenant/sendrequest", {
            uid: 1,
            pid: pid
        }
        ).then((res) => {
            console.log(res);
        }
        ).catch((err) => {
            console.log(err);
        }
        )
        setsreenRequest(true);

    }


    useEffect(() => {
        getTenantData();
    }
        , [])

    return (
        <div>
            <TopBar />
            <div className="flex flex-col p-10">
                {/* <PropertyCardSearch isRequest={false} sendRequest={() => { sendRequest(1) }} /> */}
                {
                    data.map((item) => {
                        return (
                            <PropertyCardSearch isRequest={false} data={item} sendRequest={() => { sendRequest(item.pid) }} />
                        )
                    })
                }
            </div>
        </div>
    );
}

export default SearchResults;
