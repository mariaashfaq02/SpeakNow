import React,{useState,useRef,useEffect} from 'react'
{/*import CameraComponent from './CameraComponent';
import RecordComponent from './RecordComponent';

const Record = () => {
  const [cameraStream, setCameraStream] = useState(null);
  return (
    <div>
      <CameraComponent onStreamChange={setCameraStream} />
      {cameraStream && <RecordComponent />}
    </div>
  )
}

export default Record*/}


const Record = () => {
  const videoRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const recordedChunksRef = useRef([]);


  const [isRecording, setIsRecording] = useState(false);

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: { width: 1920, height: 1080 },audio:true })
      .then((stream) => {
        let video = videoRef.current;
        if ('srcObject' in video) {
          video.srcObject = stream;
        } else {
          // For older browsers that don't support srcObject
          video.src = window.URL.createObjectURL(stream);
        }
        video.play().catch((err) => {
          console.error('Error playing video:', err);
        });

        // Initialize the MediaRecorder for video recording
        mediaRecorderRef.current = new MediaRecorder(stream);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleDataAvailable = (event) => {
    if (event.data && event.data.size > 0) {
      recordedChunksRef.current.push(event.data);
    }
  };

  const startRecording = () => {
    setIsRecording(true);

    // Reset the recordedChunks array
    recordedChunksRef.current = [];

    mediaRecorderRef.current.ondataavailable = handleDataAvailable;


    mediaRecorderRef.current.start();
  };

  const stopRecording = () => {
        mediaRecorderRef.current.onstop = () => {
      const blob = new Blob(recordedChunksRef.current, { type: 'video/webm' });

      // Create a download link for the recorded video
      const downloadLink = document.createElement('a');
      downloadLink.href = URL.createObjectURL(blob);
      downloadLink.download = 'recorded-video.webm';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);

      setIsRecording(false);
    };
    mediaRecorderRef.current.stop();
  };

  useEffect(() => {
    getVideo();
  }, [videoRef]);

  return (
    <div className='container-fluid'>

      <div className='camera'>
        <video ref={videoRef}></video>
        {isRecording ? (
          <button onClick={stopRecording}>Stop Recording</button>
        ) : (
          <button onClick={startRecording}>Start Recording</button>
        )}
      </div>
    </div>
  );
};

export default Record;
