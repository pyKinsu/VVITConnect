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
      sx={{ width: "100%", cursor: "pointer", flex: 1 }} 
      onClick={onClick}
      elevation={3}
    >
      <CardMedia
        component="img"
        height="200"
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
