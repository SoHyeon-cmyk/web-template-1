import axios from 'axios';
import React, { useEffect, useState } from 'react';
// const serviceKey = "znrJLEHdRlS6ySxB3VZUqQ";
// let numOfRows = "12"; // 1시간당 기상 정보가 최저기온,최고기온을 제외하면 12개이므로 12개가 편하다
// let pageNo = "1"; // 페이지 번호
// let dataType = "JSON"; // 요청자료형식
// let base_date = "20220810"; // 발표일자
// let base_time = "2300"; // 발표시각
// let nx = "10"; // X좌표
// let ny = "127"; // Y좌표
// let url;


const App = () => {
  
  // const APIURL = "https://apihub.kma.go.kr/api/typ01/url/eqk_now.php?tm=201311231215&disp=0&help=1&authKey=znrJLEHdRlS6ySxB3VZUqQ"
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  const [info, setInfo] = useState({
    TP: { code: "TP", name: "국내지진", unit: "%" },
    SEQ: { code: "SEQ", name: "발표일련번호", unit: "코드값" },
    MSC: { code: "MSC", name: "진앙시", unit: "h" },
    LAT: { code: "LAT", name: "진앙위도", unit: "deg" },
    LOC: { code: "LOC", name: "진앙위치", unit: "범주(1 cm)" },
    REM: { code: "REM", name: "참고사항", unit: "코드값" },
    TM_FC: { code: "TM_FC", name: "발표시간", unit: "Y.M.D.H.M.S" },
    TM_EQK: { code: "TM_EQK", name: "진앙시", unit: "m/s" },
    MT: { code: "MT", name: "규모", unit: "m/s" },
    LON: { code: "LON", name: "진앙 경도", unit: "deg" },
    INT: { code: "INT", name: "진도", unit: "deg" },
    COR: { code: "COR", name: "수정사항", unit: "m/s" },
  })
  const EQData = async () => {
    try {
      setLoading(true)
      const response = await axios.get(`https://apihub.kma.go.kr/api/typ01/url/eqk_now.php?tm=201311231215&disp=0&help=1&authKey=znrJLEHdRlS6ySxB3VZUqQ`,
        {
          params: {
            serviceKey: "znrJLEHdRlS6ySxB3VZUqQ",
            numOfRows: "12", // 
            pageNo: "1", // 페이지 번호
            dataType: "JSON", // 요청자료형식
            base_date: "20241220", // 발표일자
            base_time: "1800", // 발표시각
            nx: "60", // X좌표
            ny: "127" // Y좌표
          },
        }
      );
      setData(response.data.response.body.items.item);

    } catch (err) {
      console.error(err)
    }
  }
  useEffect(() => {
    EQData()
  }, [])





  return (
    // const res = await axios.get('https://apihub.kma.go.kr/api/typ01/url/eqk_now.php?tm=201311231215&disp=0&help=1&authKey=znrJLEHdRlS6ySxB3VZUqQ');
    <div>
      
      {data && data.map((item, id) => (
        <li key={id}>
          <span>{item.base_date}</span>
        </li>
      ))
      }
    </div>
  );
};

export default App;
