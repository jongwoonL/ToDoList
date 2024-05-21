'use client';

import Link from "next/link";
import React, { useState } from 'react';

const CreateMemo = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:8080/createMemo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, content }),
      });

      if (response.ok) {
        console.log('Memo saved successfully');
        window.location.href = 'http://localhost:3000/';
        // Optional: Redirect or display a success message
      } else {
        console.error('Failed to save memo');
        // Optional: Display an error message
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <h1 className='text-3xl font-bold mb-8'>새 메모 생성 페이지</h1>
      <div className="mb-4">
        <label htmlFor="title" className="block text-lg font-semibold mb-2">제목</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={handleTitleChange}
          className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-8">
        <label htmlFor="content" className="block text-lg font-semibold mb-2">내용</label>
        <textarea
          id="content"
          value={content}
          onChange={handleContentChange}
          className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
          rows={5}
        />
      </div>
      <button
        onClick={handleSubmit}
        className='mb-8 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition-colors'
      >
        저장
      </button>
      <Link href="/">
        <button
          className='px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-700 transition-colors'
        >
          + 뒤로가기
        </button>
      </Link>
    </div>
  );
};

export default CreateMemo;