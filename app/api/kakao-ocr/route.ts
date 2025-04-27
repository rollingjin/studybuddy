export const runtime = 'nodejs';

import { NextRequest, NextResponse } from 'next/server';
import FormData from 'form-data';

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get('image') as File | null;

  if (!file) {
    return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
  }

  // Read file as buffer
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const form = new FormData();
  form.append('image', buffer, {
    filename: file.name,
    contentType: file.type || 'image/jpeg',
  });

  const kakaoResponse = await fetch('https://dapi.kakao.com/v2/vision/text/ocr', {
    method: 'POST',
    headers: {
      Authorization: `KakaoAK ${process.env.KAKAO_REST_API_KEY}`,
      ...form.getHeaders(), // important!!
    },
    body: form,
  });

  const result = await kakaoResponse.json();

  if (!result.result) {
    console.error('Kakao OCR Error:', result);
    return NextResponse.json({ error: 'Kakao OCR failed', detail: result }, { status: 500 });
  }

  const texts = result.result.map((item: any) => item.recognition_words.join(' ')).join(' ');

  return NextResponse.json({ text: texts });
}