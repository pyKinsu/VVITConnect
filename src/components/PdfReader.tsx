"use client";
import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { Box, Typography, Button, IconButton, Slider } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function PDFReader({ fileUrl, title }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.2);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  return (
    <Box sx={{ maxWidth: 800, mx: "auto", p: 2 }}>
      {/* Header */}
      <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
        {title || "PDF Reader"}
      </Typography>

      {/* PDF Viewer */}
      <Document file={fileUrl} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} scale={scale} />
      </Document>

      {/* Toolbar */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 2, flexWrap: "wrap" }}>
        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <IconButton disabled={pageNumber <= 1} onClick={() => setPageNumber(pageNumber - 1)}>
            <ArrowBackIosNewIcon />
          </IconButton>
          <Typography>
            Page {pageNumber} / {numPages}
          </Typography>
          <IconButton disabled={pageNumber >= numPages} onClick={() => setPageNumber(pageNumber + 1)}>
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>

        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <IconButton onClick={() => setScale(scale + 0.2)}>
            <ZoomInIcon />
          </IconButton>
          <IconButton onClick={() => setScale(Math.max(scale - 0.2, 0.5))}>
            <ZoomOutIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
