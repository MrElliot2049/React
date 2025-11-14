import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      `http://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then(res => res.json())
      .then(json => {
        setData(json[currency]);
      })
      .catch(err => console.log("API ERROR:", err));
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
