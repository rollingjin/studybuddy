import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { prompt } = await req.json();

  const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
    },
    body: JSON.stringify({
        model: 'llama3-70b-8192',
        messages: [
          {
            role: 'system',
            content: '당신은 학생들을 돕는 공부 도우미입니다. 모든 답변은 반드시 한국어로 작성하세요.',
          },
          {
            role: 'user',
            content: prompt,
          },
        ],
        temperature: 0.7,
      }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('Groq 에러', errorText);
    return NextResponse.json({ error: 'Groq 호출 실패' }, { status: 500 });
  }

  const data = await response.json();
  const text = data.choices[0]?.message?.content || '응답 없음';
  return NextResponse.json({ text });
}