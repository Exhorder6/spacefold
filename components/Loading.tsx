import React, { useState } from "react";
import Image from "next/image";
import {IMAGE_PATH} from "../constants"

export default function Loading({ initializing, message }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <div className={initializing ? "Loading" : "Loading Loading-fadeout"}>
      <div
        className="Loading-Circle"
        style={{ display: imageLoaded ? "block" : "none" }}
      >
        <Image src={IMAGE_PATH.gifs.loading} alt="loading" width={96} height={96} onLoad={() => setImageLoaded(true)}/>
      </div>
      <div className="Loading-Message">{message}</div>
    </div>
  );
}