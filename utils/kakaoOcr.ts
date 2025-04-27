export async function extractTextFromImage(file: File): Promise<string> {
    const fileData = await file.arrayBuffer();
    const base64Image = Buffer.from(fileData).toString('base64');
  
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_CLOUD_VISION_API_KEY;
  
    const response = await fetch(
      `https://vision.googleapis.com/v1/images:annotate?key=${apiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          requests: [
            {
              image: {
                content: base64Image,
              },
              features: [
                {
                  type: 'TEXT_DETECTION',
                },
              ],
            },
          ],
        }),
      }
    );
  
    const result = await response.json();
  
    if (!result.responses || !result.responses[0].fullTextAnnotation) {
      console.error('OCR Error:', result);
      return '';
    }
  
    return result.responses[0].fullTextAnnotation.text;
  }