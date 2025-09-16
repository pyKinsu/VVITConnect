
"use client";
import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { Box, IconButton, Typography } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos, Brightness4 } from "@mui/icons-material";
import { useSwipeable } from "react-swipeable";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

interface PdfReaderProps {
  pdfUrl: string;
}

const PdfReader: React.FC<PdfReaderProps> = ({ pdfUrl }) => {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [darkMode, setDarkMode] = useState(false);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => setPageNumber(prev => Math.min(prev + 1, numPages)),
    onSwipedRight: () => setPageNumber(prev => Math.max(prev - 1, 1)),
    trackMouse: true,
  });

  useEffect(() => {
    let wakeLock: any = null;
    if ("wakeLock" in navigator) {
      const requestWakeLock = async () => {
        try {
          wakeLock = await (navigator as any).wakeLock.request("screen");
        } catch (err) {
          console.log("Wake Lock error:", err);
        }
      };
      requestWakeLock();
    }
    return () => wakeLock?.release();
  }, []);

  return (
    <Box 
      {...handlers}
      sx={{ 
        height: "100vh", 
        width: "100vw", 
        display: "flex", 
        flexDirection: "column",
        bgcolor: darkMode ? "#111" : "#fff",
        color: darkMode ? "#fff" : "#000",
        p: 2,
        overflow: "auto"
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
        <IconButton onClick={() => setPageNumber(prev => Math.max(prev - 1, 1))}>
          <ArrowBackIos />
        </IconButton>
        <Typography>{pageNumber} / {numPages}</Typography>
        <IconButton onClick={() => setPageNumber(prev => Math.min(prev + 1, numPages))}>
          <ArrowForwardIos />
        </IconButton>
        <IconButton onClick={() => setDarkMode(!darkMode)}>
          <Brightness4 />
        </IconButton>
      </Box>

      <Box sx={{ flex: 1, overflow: "auto" }}>
        <Document
          file={pdfUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          options={{ disableStream: true }}
        >
          <Page pageNumber={pageNumber} width={window.innerWidth - 20} />
        </Document>
      </Box>
    </Box>
  );
};

export default PdfReader;
