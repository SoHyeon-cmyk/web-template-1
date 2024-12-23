import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const EQData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://apihub.kma.go.kr/api/typ01/url/eqk_now.php?tm=201311231215&disp=0&help=1`,
        `https://apihub.kma.go.kr/api/typ01/url/eqk_list.php?tm1=201211231215&tm2=201311231215&disp=0&help=1`,
        `https://apihub.kma.go.kr/api/typ02/openApi/EqkInfoService/getEqkMsgList?pageNo=1&numOfRows=10&dataType=XML&fromTmFc=20171101&toTmFc=20171129`,
        `https://apihub.kma.go.kr/api/typ02/openApi/EqkInfoService/getEqkMsg?pageNo=1&numOfRows=10&dataType=XML&fromTmFc=20171101&toTmFc=20171129`,
        {
          
          params: {
            serviceKey: "znrJLEHdRlS6ySxB3VZUqQ",
            numOfRows: "10",
            pageNo: "1",
            fromTmFc: "20151001",
            toTmFc: "20151013",
            dataType: "JSON",
          },
        }
      );

      console.log("Response Data:", response.data);

      if (response.data?.response?.body?.items?.item) {
        setData(response.data.response.body.items.item);
      } else {
        console.warn("No data found in response.");
        setData([]);
      }
    } catch (err) {
      console.error("Error fetching data:", err);
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    EQData();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : data && data.length > 0 ? (
        data.map((item, id) => (
          <li key={id}>
            <span>{item.img}</span>
          </li>
        ))
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
};

export default App;
