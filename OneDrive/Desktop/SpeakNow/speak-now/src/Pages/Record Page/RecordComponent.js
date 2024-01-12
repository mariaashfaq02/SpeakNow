import React, { useState, useRef } from 'react';

const RecordComponent = ({ cameraStream }) => {
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const videoRef = useRef(null);

  const startRecording = () => {
    if (cameraStream) {
      const mediaRecorderInstance = new MediaRecorder(cameraStream);

      mediaRecorderInstance.ondataavailable = (event) => {
        if (event.data && event.data.size > 0) {
          setRecordedChunks((prevChunks) => [...prevChunks, event.data]);
        }
      };

      mediaRecorderInstance.onstop = () => {
        const blob = new Blob(recordedChunks, { type: 'video/webm' });
        const videoUrl = URL.createObjectURL(blob);

        // Handle the recorded video URL as needed (e.g., save, display, etc.)
        console.log('Recorded Video URL:', videoUrl);

        // Clear the recorded chunks for the next recording
        setRecordedChunks([]);
      };

      setMediaRecorder(mediaRecorderInstance);
      mediaRecorderInstance.start();
    }
  };

  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
    }
  };

  return (
    <div>
      <h2>Record Component</h2>
      <video ref={videoRef} autoPlay playsInline></video>
      <button onClick={startRecording}>Start Recording</button>
      <button onClick={stopRecording}>Stop Recording</button>
    </div>
  );
};

export default RecordComponent;
