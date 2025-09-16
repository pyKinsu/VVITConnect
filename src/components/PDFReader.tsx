"use client";

import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { Box, IconButton, Typography, Slider } from "@mui/material";
import { ZoomIn, ZoomOut, NavigateBefore, NavigateNext } from "@mui/icons-material";

// PDF.js worker setup
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export interface PDFReaderProps {
  pdfUrl: string;
}

const PDFReader: React.FC<PDFReaderProps> = ({ pdfUrl }) => {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [scale, setScale] = useState<number>(1.0);

  const handleDocumentLoad = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      {/* PDF Viewer */}
      <Box sx={{ flex: 1, overflow: "auto", display: "flex", justifyContent: "center" }}>
        <Document file={pdfUrl} onLoadSuccess={handleDocumentLoad}>
          <Page pageNumber={pageNumber} scale={scale} />
        </Document>
      </Box>

      {/* Controls */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 2,
          gap: 2,
          borderTop: "1px solid #ccc",
          backgroundColor: "#fafafa",
        }}
      >
        <IconButton onClick={() => setScale((s) => s + 0.2)}>
          <ZoomIn />
        </IconButton>
        <IconButton onClick={() => setScale((s) => Math.max(0.5, s - 0.2))}>
          <ZoomOut />
        </IconButton>

        <IconButton disabled={pageNumber <= 1} onClick={() => setPageNumber((p) => p - 1)}>
          <NavigateBefore />
        </IconButton>
        <Typography>
          {pageNumber} / {numPages}
        </Typography>
        <IconButton disabled={pageNumber >= numPages} onClick={() => setPageNumber((p) => p + 1)}>
          <NavigateNext />
        </IconButton>

        <Box sx={{ width: 200 }}>
          <Slider
            value={pageNumber}
            min={1}
            max={numPages}
            onChange={(_, value) => setPageNumber(value as number)}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default PDFReader;
