import { useEffect, useState } from "react";
import axios from "../../node_modules/axios/index";
import { ErrorResponse } from "../types";

export const useGetData = <TData, TError = ErrorResponse>(
  url: string,
): [data: TData | null, error: TError | null] => {
  const [data, setData] = useState<TData | null>(null);
  const [error, setError] = useState<TError | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get<TData>(url, {
          headers: {
            "X-Access-Token": import.meta.env.VITE_ACCESS_TOKEN,
          },
        });
        if (response.status === 200) {
          setData(response.data);
          setError(null);
        }
      } catch (error) {
        console.warn(error);
        if (axios.isAxiosError<TError>(error) && error.response) {
          setError(error.response.data);
          setData(null);
        }
      }
    })();
  }, [url]);

  return [data, error];
};
