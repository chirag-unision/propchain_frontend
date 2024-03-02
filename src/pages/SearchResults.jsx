import React, { useEffect } from "react";
import TopBar from "../components/common/topBar";
import { useState } from "react";
import PropertyCardSearch from "../components/search/PropertyCardSearch";
import { BASE_URL } from "../constants";

function SearchResults() {


    const [data, setData] = useState([]);

    const getTenantData = async () => {
        axios.post(BASE_URL + "api/tenant/getprops", {
            uid: 1
        }
        ).then((res) => {
            console.log(res.data);
            setData(res.data['Properties']);
        }
        ).catch((err) => {
            console.log(err);
        }
        )
    }

    useEffect(() => {
        getTenantData();
    }
        , [])

    return (
        <div>
            <TopBar />
            <div className="flex flex-col p-10">
            <PropertyCardSearch isRequest={false}  />
                {
                    data.map((item) => {
                        return (
                            <PropertyCardSearch isRequest={false} data={item} />
                        )
                    })
                }
            </div>
        </div>
    );
}

export default SearchResults;
