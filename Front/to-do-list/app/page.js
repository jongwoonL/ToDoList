'use client';

import Link from "next/link" // Link 쓰려면 import 해야함

import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState([]); // [] 배열로 받도록 설정
//  const [data2, setData2] = useState(''); // 두 번째 값 받기

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/getMemos');
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
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <h1 className='text-3xl font-bold text-center mb-8'>할 일 메모</h1>
      <div className='grid gap-6 w-full max-w-4xl'>
          {data.map(item => (
              <div 
                  key={item.id} 
                  className='border border-gray-300 p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-gray-100'
              >
                  <p className='font-semibold mb-2'>제목 : {item.subject}</p>
                  <p className='mb-2'>내용 : {item.content}</p>
                  <p className='text-gray-500'>작성 날짜 : {item.createDate}</p>
              </div>
          ))}
      </div>
      <br></br>
      <Link href="/createMemo">
        <button
          className='mb-8 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition-colors'
        >
          + 새 메모
        </button>
      </Link>
    </div>
  );
}