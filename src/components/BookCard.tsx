
"use client";
import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

interface BookCardProps {
  title: string;
  image: string;
  onClick: () => void;
}

const BookCard: React.FC<BookCardProps> = ({ title, image, onClick }) => {
  return (
    <Card 
      sx={{ width: 150, cursor: "pointer", m: 1, flex: 1 }} 
      onClick={onClick}
      elevation={3}
    >
      <CardMedia
        component="img"
        height="220"
        image={image}
        alt={title}
      />
      <CardContent>
        <Typography variant="body2" textAlign="center">{title}</Typography>
      </CardContent>
    </Card>
  );
};

export default BookCard;
