'use client';

import { useState } from 'react';
import Image from 'next/image';
import StudyPack from '@/components/StudyPack';

export default function Home() {
  const [text, setText] = useState('');
  const [studyPack, setStudyPack] = useState<any>(null);

  const handleGenerateStudyPack = async () => {
    if (text.trim() === '') return;

    setStudyPack({
      summary: text,
      quizzes: [],
    });
  };

  return (
    <div className="p-4">
      <div className="flex items-center space-x-4 mb-6">
        <Image src="/mika.png" width={50} height={50} alt="Mika" className="rounded-full" />
        <h1 className="text-3xl font-bold text-white">Kayuni's StudyBuddy - History</h1>
      </div>

      <div className="hidden">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="요약이 필요하면 내용을 입력해..."
          className="w-full p-2 border rounded mb-4"
          rows={8}
        />

        <button
          onClick={handleGenerateStudyPack}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mb-4"
        >
          스터디 팩 만들기
        </button>
      </div>

      <StudyPack data={studyPack || undefined} />
    </div>
  );
}
