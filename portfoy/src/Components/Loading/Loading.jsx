// WaveLoading.jsx
import React, { useEffect, useState } from 'react';
import './Loading.css';

const Loading = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 9000); // 3 saniye sonra yükleme tamamlanacak
    }, []);
  return (
    <>
        {
            loading ? (<div className="sphere"></div>) : ""
        }
    </>
  );
};

export default Loading;
