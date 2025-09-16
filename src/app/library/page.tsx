
"use client";
import React, { useState } from "react";
import { Box, Grid, Modal } from "@mui/material";
import BookCard from "@/components/BookCard";
import PDFReader from "@/components/PDFReader";

const books = [
  { title: "Sample 1", image: "/book.jpg", pdf: "https://www.nielit.gov.in/sites/default/files/Kohima/103-IT Tools %26 Application.pdf" },
  { title: "Sample 2", image: "/book.jpg", pdf: "https://www.nielit.gov.in/sites/default/files/Kohima/103-IT Tools %26 Application.pdf" },
  { title: "Sample 3", image: "/book.jpg", pdf: "https://www.nielit.gov.in/sites/default/files/Kohima/103-IT Tools %26 Application.pdf" },
  { title: "Sanple 4", image: "/book.jpg", pdf: "https://www.nielit.gov.in/sites/default/files/Kohima/103-IT Tools %26 Application.pdf" },
];

export default function Library() {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

  return (
    <Box sx={{ p: 2 }}>
      <Grid container spacing={2} justifyContent="center">
        {books.map((book, index) => (
          <Grid item xs={6} sm={3} key={index}>
            <BookCard 
              title={book.title} 
              image={book.image} 
              onClick={() => setSelectedPdf(book.pdf)} 
            />
          </Grid>
        ))}
      </Grid>

      <Modal open={!!selectedPdf} onClose={() => setSelectedPdf(null)}>
        <Box sx={{ width: "100%", height: "100%" }}>
          {selectedPdf && <PDFReader pdfUrl={selectedPdf} />}
        </Box>
      </Modal>
    </Box>
  );
}
