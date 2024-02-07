import { useEffect, useState } from "react";
import { ITrans } from "../types";
const ACCESS_TOKEN =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxYTRlNzgyZi1iNmNiLTQ5M2EtOTA2Yi0xMTU2NzU4MDhiNjEiLCJpc3MiOiJhd2Vzb21lLWJhbmsifQ.dC4LVBLd1Cx-akLoEZoq1lFjh_hvlHOwdLl3MAi2kxY";

export const useFetchTrans = () => {
    const [data, setData] = useState<ITrans[] | null>(null);
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const result = await fetch(
                    "https://awesome-bank.xyz/api/transactions",
                    {
                        method: "GET",
                        headers: {
                            "X-Access-Token": ACCESS_TOKEN,
                        },
                    }
                );
                const data = await result.json();
                setData(data);
            } catch (e) {
                console.log("error", e);
            }
        };
        fetchUser();
    }, []);

    return data;
};
