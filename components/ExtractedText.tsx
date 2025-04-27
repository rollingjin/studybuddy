'use client';

import { useState } from 'react';

interface ExtractedTextProps {
  text: string;
}

export default function ExtractedText({ text }: ExtractedTextProps) {
  const [studyPack, setStudyPack] = useState<string | null>(null);

  const handleGenerate = async () => {
    const res = await fetch('/api/study-pack', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt: text }),
    });
  
    if (!res.ok) {
        const errorText = await res.text();
        console.error('스터디 팩 생성 실패', errorText || '(서버 응답 없음)');
        return;
      }
  
    const data = await res.json(); // 정상 응답만 JSON으로 파싱
    setStudyPack(data.text);
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-2">📄 추출된 텍스트</h2>
      <p className="mb-4 whitespace-pre-line">{text}</p>

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleGenerate}
      >
        ✨ 스터디 팩 만들기
      </button>

      {studyPack && (
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h3 className="text-md font-bold mb-2">🧠 생성된 스터디 팩</h3>
          <p className="whitespace-pre-line">{studyPack}</p>
        </div>
      )}
    </div>
  );
}