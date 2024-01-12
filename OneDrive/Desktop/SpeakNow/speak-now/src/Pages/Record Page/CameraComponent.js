import React, { useRef } from 'react';

const CameraComponent = () => {
  const videoRef = useRef(null);

  const openCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
    } catch (error) {
      console.error('Error opening camera:', error);
    }
  };

  const closeCamera = () => {
    const stream = videoRef.current.srcObject;
    const tracks = stream.getTracks();

    tracks.forEach((track) => track.stop());
    videoRef.current.srcObject = null;
  };

  return (
    <div>
      <video ref={videoRef} autoPlay playsInline></video>
      <button onClick={openCamera}>Open Camera</button>
      <button onClick={closeCamera}>Close Camera</button>
    </div>
  );
};

export default CameraComponent;
