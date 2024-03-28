import SignatureCanvas from "react-signature-canvas";
import { ColorPicker, useColor } from "react-color-palette";
import { useEffect, useRef, useState } from "react";
function App() {
  const [bgcolor, setBgcolor] = useState("black");
  const [penColor, setPencolor] = useState("black");
  const [type, settype] = useState("jpeg");
  const signatureCanvasRef = useRef(null);

  const clearSignature = () => {
    signatureCanvasRef.current.clear();
  };

  const downloadSignature = () => {
    const SignatureImage = signatureCanvasRef.current.toDataURL(
      `image/${type}`
    );
    const DownloadLink = document.createElement("a");
    DownloadLink.href = SignatureImage;
    DownloadLink.download = `Signature.${type}`;
    document.body.append = DownloadLink;
    DownloadLink.click();
    document.body.remove = DownloadLink;
  };

  const style = {
    sign: {
      marginTop: "150px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "20px",
    },
    button: {
      padding: "10px 20px",
      fontWeight: "bold",
    },
    divcon: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "10px",
    },
    border: {
      border: "2px solid black",
    },
  };
  useEffect(() => {}, [bgcolor, penColor]);

  return (
    <div style={style.sign}>
      <div style={style.border}>
        <SignatureCanvas
          ref={signatureCanvasRef}
          penColor={penColor}
          canvasProps={{ width: 500, height: 200 }}
        />
      </div>
      <div style={style.divcon}>
        <button style={style.button} onClick={clearSignature}>
          Clear Signature
        </button>
        <button style={style.button} onClick={downloadSignature}>
          Download Signature
        </button>
      </div>
      <div style={style.divcon}>
        <input
          type="text"
          value={penColor}
          onChange={(e) => {
            setPencolor(e.target.value);
          }}
          placeholder="Enter Pen Color"
        />
        <select
          value={type}
          onChange={(e) => {
            settype(e.target.value);
          }}
        >
          <option value={"jpeg"}>jpeg</option>
          <option value={"png"}>png</option>
        </select>
      </div>
    </div>
  );
}

export default App;
