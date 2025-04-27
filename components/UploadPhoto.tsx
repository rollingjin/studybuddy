'use client';

// Change import to kakaoOcr
import { extractTextFromImage } from '../utils/kakaoOcr';

interface UploadPhotoProps {
  setImage: (file: File | null) => void;
  setText: (text: string) => void;
  setLoadingOCR: (loading: boolean) => void;
}

export default function UploadPhoto({ setImage, setText, setLoadingOCR }: UploadPhotoProps) {
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setLoadingOCR(true);
      const extracted = await extractTextFromImage(file);
      setText(extracted);
      setLoadingOCR(false);
    }
  };

  return (
    <div style={{ marginBottom: '1rem' }}>
      <input
        type="file"
        accept="image/*"
        capture="environment"
        onChange={handleChange}
        style={{ marginBottom: '1rem' }}
      />
    </div>
  );
}