'use client';

import { useRouter } from 'next/navigation';

export default function GoBackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      title="Go Back"
      aria-label="Go back to previous page"
      type="button"
      className="go-back-btn"
    >
      Go Back
    </button>
  );
}
