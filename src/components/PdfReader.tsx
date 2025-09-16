"use client";
import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { Box, Typography, IconButton, Slider } from "@mui/material";
import { ArrowBack, ArrowForward, ZoomIn, ZoomOut } from "@mui/icons-material";

// Worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

interface PdfReaderProps {
  pdfUrl: string;
  title: string;
}

const PdfReader: React.FC<PdfReaderProps> = ({ pdfUrl, title }) => {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [scale, setScale] = useState<number>(1.2);

  const onDocumentLoadSuccess = ({ numPages }: any) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  const goToPrevPage = () => setPageNumber((prev) => Math.max(prev - 1, 1));
  const goToNextPage = () => setPageNumber((prev) => Math.min(prev + 1, numPages));

  const zoomIn = () => setScale((prev) => prev + 0.2);
  const zoomOut = () => setScale((prev) => Math.max(prev - 0.2, 0.5));

  return (
    <Box sx={{ maxWidth: "800px", mx: "auto", p: 2 }}>
      {/* Header */}
      <Typography variant="h5" fontWeight="bold" gutterBottom textAlign="center">
        {title}
      </Typography>

      {/* PDF Document */}
      <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} scale={scale} />
      </Document>

      {/* PDF Tools */}
      <Box
        sx={{
          mt: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Box>
          <IconButton onClick={goToPrevPage} disabled={pageNumber === 1}>
            <ArrowBack />
          </IconButton>
          <Typography variant="body2" component="span">
            Page {pageNumber} / {numPages}
          </Typography>
          <IconButton onClick={goToNextPage} disabled={pageNumber === numPages}>
            <ArrowForward />
          </IconButton>
        </Box>

        <Box>
          <IconButton onClick={zoomOut}>
            <ZoomOut />
          </IconButton>
          <IconButton onClick={zoomIn}>
            <ZoomIn />
          </IconButton>
        </Box>

        <Box sx={{ width: { xs: "100%", md: 200 } }}>
          <Slider
            value={scale}
            min={0.5}
            max={3}
            step={0.1}
            onChange={(e, val) => setScale(val as number)}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default PdfReader;
