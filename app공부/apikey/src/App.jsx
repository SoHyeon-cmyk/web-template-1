import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const EQData = async () => {

      setLoading(true);
      const response = await axios.get(
        `https://apihub.kma.go.kr/api/typ01/url/eqk_now.php?tm=202512251226&disp=0&help=1&authKey=znrJLEHdRlS6ySxB3VZUqQ`,
        {
          
          params: {
            numOfRows: "10",
            pageNo: "1",
            fromTmFc: "20241225",
            toTmFc: "20241226",
            dataType: "JSON",
          },
        }
      );
    }
      
      return (
        <div>

    </div>
  );
};

export default App;
