import React from "react";
import Webcam from "react-webcam";


function App() {
  const videoConstraints = {
    width: 640,
    height: 360,
    facingMode: "environment"
  };

  return (
    <div>
      <div style={{ position: "absolute" }}>
        <Webcam
          audio={false}
          height={360}
          screenshotFormat="image/jpeg"
          width={640}
          videoConstraints={videoConstraints}
        >
          {({ getScreenshot }) => (
            <button
              onClick={() => {
                const imageSrc = getScreenshot()
              }}
            >
              Capture photo
            </button>
          )}
        </Webcam>
      </div>
      <div style={{
        background: "transparent", position: "absolute", width: "360px",
        height: "640px"
      }}>
        <img src={"https://png.pngtree.com/png-vector/20230501/ourmid/pngtree-luxury-golden-rectangle-certificate-border-pattern-line-photo-frame-islamic-wedding-vector-png-image_7077586.png"} />
      </div>


    </div>

    //
  );
}

export default App;
