import Tesseract from 'tesseract.js';

export async function extractTextFromImage(file: File): Promise<string> {
  const { data: { text } } = await Tesseract.recognize(
    file,
    'kor', 
    {
      logger: m => console.log(m),
      langPath: 'https://tessdata.projectnaptha.com/4.0.0',
    }
  );
  return text;
}