"use client";

import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import type { PDFDocumentProxy } from "pdfjs-dist";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

// Worker for react-pdf
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface PDFReaderProps {
  url: string;
  title?: string;
}

export default function PDFReader({ url, title }: PDFReaderProps) {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [scale, setScale] = useState<number>(1.2);

  function onDocumentLoadSuccess({ numPages }: PDFDocumentProxy) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="bg-blue-600 text-white py-3 px-6 shadow-md">
        <h1 className="text-lg font-bold">{title || "PDF Reader"}</h1>
      </header>

      {/* PDF Viewer */}
      <div className="flex-1 overflow-auto flex justify-center items-start bg-gray-100 p-4">
        <Document file={url} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} scale={scale} />
        </Document>
      </div>

      {/* Toolbar */}
      <footer className="bg-white border-t shadow-inner py-3 px-4 flex items-center justify-between">
        <div className="flex gap-2">
          <button
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
            onClick={() => setPageNumber((prev) => prev - 1)}
            disabled={pageNumber <= 1}
          >
            ◀ Prev
          </button>
          <button
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
            onClick={() => setPageNumber((prev) => prev + 1)}
            disabled={!!numPages && pageNumber >= numPages}
          >
            Next ▶
          </button>
        </div>

        <span className="text-sm">
          Page {pageNumber} of {numPages || "--"}
        </span>

        <div className="flex gap-2">
          <button
            className="px-3 py-1 bg-gray-200 rounded"
            onClick={() => setScale((s) => Math.max(0.6, s - 0.2))}
          >
            ➖ Zoom Out
          </button>
          <button
            className="px-3 py-1 bg-gray-200 rounded"
            onClick={() => setScale((s) => Math.min(3, s + 0.2))}
          >
            ➕ Zoom In
          </button>
        </div>
      </footer>
    </div>
  );
}
