
"use client";
import React, { useState } from "react";
import { Box, Grid, Modal } from "@mui/material";
import BookCard from "@/components/BookCard";
import PdfReader from "@/components/PdfReader";

const books = [
  { title: "Book 1", image: "/book1.jpg", pdf: "https://example.com/book1.pdf" },
  { title: "Book 2", image: "/book2.jpg", pdf: "https://example.com/book2.pdf" },
  { title: "Book 3", image: "/book3.jpg", pdf: "https://example.com/book3.pdf" },
  { title: "Book 4", image: "/book4.jpg", pdf: "https://example.com/book4.pdf" },
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
          {selectedPdf && <PdfReader pdfUrl={selectedPdf} />}
        </Box>
      </Modal>
    </Box>
  );
}
