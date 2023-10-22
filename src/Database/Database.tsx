
import React, { useEffect, useState } from 'react';

const HomePage = () => {
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    fetch('/api')
      .then(response => response.text())
      .then(data => setMessage(data));
  }, []);

  return (
    <div>
      {message}
    </div>
  );
};

export default HomePage;
