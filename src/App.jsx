import SignatureCanvas from "react-signature-canvas";
import { ColorPicker, useColor } from "react-color-palette";
import { useRef, useState } from "react";
function App() {
  const [color, setColor] = useColor("#ffff");
  const [image, setimage] = useState();
  const signatureCanvasRef = useRef(null);

  const clearSignature = () => {
    signatureCanvasRef.current.clear();
  };

  const downloadSignature = () => {
    const SignatureImage = signatureCanvasRef.current.toDataURL("image/png");
    const DownloadLink = document.createElement("a");
    DownloadLink.href = SignatureImage;
    DownloadLink.download = "Sign.png";
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
  };

  return (
    <div style={style.sign}>
      <SignatureCanvas
        ref={signatureCanvasRef}
        penColor="white"
        canvasProps={{ width: 500, height: 200 }}
        backgroundColor="black"
      />
      <div style={style.divcon}>
        <button style={style.button} onClick={clearSignature}>
          Clear Signature
        </button>
        <button style={style.button} onClick={downloadSignature}>
          Download Signature
        </button>
      </div>
      <div>
        <input type="text" placeholder="Enter Background Color" />
        <input type="text" placeholder="Enter Pen Color" />
        <select defaultValue={"jpeg"}>
          <option value={"jpeg"}>jpeg</option>
          <option value={"png"}>png</option>
        </select>
      </div>
    </div>
  );
}

export default App;
