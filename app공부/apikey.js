function callJsonApi(url, saveFilePath) {  // Text API 호출 함수
  fetch(`https://apihub.kma.go.kr/api/typ01/url/eqk_now.php?tm=20241418&disp=0&help=1&authKey=znrJLEHdRlS6ySxB3VZUqQ`)  // fetch를 통해 API 호출
    .then(response => response.json())  // 응답을 JSON으로 변환
    .then(data => {
      console.log(data);  // 데이터 출력
      // saveFilePath를 사용하여 데이터를 저장하거나 추가적인 처리를 수행할 수 있습니다.
    })
    .catch(error => {
      console.error('API 호출 중 오류가 발생했습니다:', error);
      // 오류 처리를 수행할 수 있습니다.
    });
    const apiUrl = "https://apihub.kma.go.kr/api/json?authKey=znrJLEHdRlS6ySxB3VZUqQ";
    const savePath = "/path/to/save/file.json";
    callJsonApi(apiUrl, savePath);
}

const serviceKey ="znrJLEHdRlS6ySxB3VZUqQ";
let numOfRows = "12"; // 1시간당 기상 정보가 최저기온,최고기온을 제외하면 12개이므로 12개가 편하다
let pageNo = "1"; // 페이지 번호
let dataType = "JSON"; // 요청자료형식
let base_date = "20220810"; // 발표일자
let base_time = "2300"; // 발표시각
let nx = "10"; // X좌표
let ny = "127"; // Y좌표
let url;

let array_code = {
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
};
// 사용 예시
function create_url() {
  return (
    "https://apihub.kma.go.kr/api/json?authKey=znrJLEHdRlS6ySxB3VZUqQ" +
    "serviceKey=" +
    serviceKey +
    "&numOfRows=" +
    numOfRows +
    "&pageNo=" +
    pageNo +
    "&dataType=" +
    dataType +
    "&base_date=" +
    base_date +
    "&base_time=" +
    base_time +
    "&nx=" +
    nx +
    "&ny=" +
    ny
  );
}