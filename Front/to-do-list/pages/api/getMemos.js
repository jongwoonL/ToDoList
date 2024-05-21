export default async function handler(req, res) {
  const response = await fetch('http://localhost:8080/getMemos');
  const data = await response.json(); // text로 받음

  // const response2 = await fetch('http://localhost:8080/hello2'); // 두 개도 받아보자
  // const data2 = await response2.text();

  // res.status(200).send(data); // text로 보냄
  // res.status(200).send(`data1=${data1}&data2=${data2}`); // 두 개 보내기

  // json으로 보내면 json으로 파싱
  res.status(200).json({data});
}