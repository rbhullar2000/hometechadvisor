'use client';
import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'true');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 w-full bg-gray-900 text-white text-sm p-4 z-50 text-center shadow-lg">
      <p>
        This site uses cookies for affiliate tracking and analytics.{' '}
        <button onClick={acceptCookies} className="underline ml-2">
          Accept
        </button>
      </p>
    </div>
  );
}