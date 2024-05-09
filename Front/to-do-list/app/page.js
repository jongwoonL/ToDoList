'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState([]); // [] 배열로 받도록 설정
//  const [data2, setData2] = useState(''); // 두 번째 값 받기

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/getList');
      // const data1 = await response.text(); // text로 받음

      // json으로 보냈으면 json으로 받음
      const {data} = await response.json();

      setData(data); // 1개 받을때

      // 2개 이상 받을 때는 URLSearchParams 필요
      // const params = new URLSearchParams(data);
      // setData1(params.get('data1'));
      // setData2(params.get('data2'));
    }

    fetchData();
  }, []);

  // 실제로 출력되는 부분
  return (
    <div>
      <h1>Data from API:</h1>
      <br></br>
      {data.map(item => (
        <div key={item.id}>
          <p>Subject: {item.subject}</p>
          <p>Content: {item.content}</p>
          <p>Create Date: {item.createDate}</p>
          <br></br>
        </div>
      ))}
    </div>
  );
}