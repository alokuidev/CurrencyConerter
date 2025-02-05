import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
      .then((res) => res.json()) // ✅ Return JSON properly
      .then((res) => {
        setData(res.rates); // ✅ Use `res.rates`, not `res[currency]`
      })
      .catch((error) => console.error("Error fetching currency data:", error));
  }, [currency]); // ✅ Add `currency` as a dependency
  console.table(data);
  return data;
}

export default useCurrencyInfo;
