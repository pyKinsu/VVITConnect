"use client";

import React from "react";
import {
  Container,
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Card,
} from "@mui/material";
import LessonNav from "@/components/LessonNav";

// Local NoteImage component (no external ImageCard)
const NoteImage: React.FC<{ src: string; alt: string; caption: string }> = ({
  src,
  alt,
  caption,
}) => (
  <Box sx={{ textAlign: "center", mb: 3 }}>
    <img
      src={src}
      alt={alt}
      style={{
        maxWidth: "100%",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
      }}
    />
    <Typography variant="caption" display="block" sx={{ mt: 1, fontStyle: "italic" }}>
      {caption}
    </Typography>
  </Box>
);

const Datatypes: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 6 }}>
      <Typography variant="h4" gutterBottom color="primary">
        C Programming – Data Types
      </Typography>

      <Typography variant="body1" sx={{ textAlign: "justify", mb: 3 }}>
        Data types define the type of data a variable can hold. It helps the compiler understand
        how much memory to allocate and what kind of operations can be performed on the data.
      </Typography>

      <Typography variant="body1" sx={{ textAlign: "justify", mb: 3 }}>
        Suppose we have a mix of dry fruits. It is very difficult to separate individual dry fruits
        from the mix. So, it is better to arrange them in different containers to make the process
        easier. Data types work in a similar way—we define a data type according to the kind of data,
        just like choosing the right container based on the item.
      </Typography>

      {/* Example Images */}
      <Box sx={{ display: "flex", justifyContent: "center", gap: 4, flexWrap: "wrap", mb: 4 }}>
        <NoteImage src="/dryfruits.png" alt="Mix Dry Fruits" caption="Mix Dry Fruits" />
        <NoteImage src="/fruit.png" alt="Fruits" caption="Fruit in Container" />
      </Box>

      <Typography variant="h6" gutterBottom color="primary">
        C also supports different categories of Data Types
      </Typography>

      <NoteImage
        src="/datatypes.png"
        alt="Datatype categories"
        caption="C supports multiple data type categories."
      />

      {/* Data Types Table */}
      <TableContainer component={Paper} sx={{ overflowX: "auto", mb: 4 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Types</strong></TableCell>
              <TableCell><strong>Description</strong></TableCell>
              <TableCell><strong>Data Types</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Primitive Data Types</TableCell>
              <TableCell>Used for representing simple values</TableCell>
              <TableCell>int, char, float, double, void</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Derived Types</TableCell>
              <TableCell>Derived from primitive types</TableCell>
              <TableCell>array, pointers, function</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>User Defined Data Types</TableCell>
              <TableCell>Defined by the user</TableCell>
              <TableCell>structure, union, enum</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      {/* ✅ Lesson Navigation */}
      <LessonNav
        quiz={{ href: "/quiz/datatypes" }}
        prev={{ href: "/notes/c/keywords", label: "Previous Lesson" }}
        next={{ href: "/notes/c/constants", label: "Next Lesson" }}
      />
    </Container>
  );
};

export default Datatypes;
