"use client";
import React, { useState } from "react";

export default function CopyBtnDemo({ textToCopy = '0x000000000000000000000000000000000000dEaD' }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(textToCopy).then(
      () => {
        setCopied(true);
        // changing back to default state after 2 seconds.
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      },
      (err) => {
        console.log("failed to copy", err.mesage);
      }
    );
  };

  const btnStyle = copied ? "bg-gray-500 text-white" : "";

  return (
    <div className="text-center my-5">
      <button
        onClick={copyToClipboard}
        className={
          btnStyle +
          " relative z-10 text-sm font-clash border w-56 border-gray-500 rounded p-2 transition"
        }
      >
        {copied ? "Copied to clipboard" : "Click to copy $PIY contract"}
      </button>
    </div>
  );
}