import React, { useEffect, useState } from "react";
import HeaderComp from "./../components/HeaderComp";

import QRCode from "react-qr-code";

const HomePage = () => {
  const [url, setUrl] = useState("");
  const [qrIsVisible, setQrIsVisible] = useState(false);
  const handleQrCodeGenerator = () => {
    if (!url) {
      return;
    }
    setQrIsVisible(true);
  };

  return (
    <div className="h-svh flex flex-col gap-4 bg-white">
      <div className="mt-3 ml-3">
        <HeaderComp />
      </div>

      <div className="qrcode__container">
        <h1>QR Code Generator</h1>
        <div className="qrcode__container--parent">
          <div className="qrcode__input">
            <input
              type="text"
              placeholder="Enter a URL"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />

            <button onClick={handleQrCodeGenerator}>Generate QR Code</button>
          </div>
          {qrIsVisible && (
            <div className="qrcode__download">
              <div className="qrcode__image">
                <QRCode value={url} size={300} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
