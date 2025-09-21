"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Button,
  Typography,
  Box,
  Paper,
  LinearProgress,
} from "@mui/material";

// ------------------ Types ------------------
interface Question {
  question: string;
  options: string[];
  answer: string;
}

interface Topic {
  title: string;
  questions: Question[];
}

// ------------------ Data ------------------
const quizData: Topic[] = [
  {
    title: "Introduction",
    questions: [
      {
        question: "C language was developed by?",
        options: ["Dennis Ritchie", "James Gosling", "Ken Thompson", "Bjarne Stroustrup"],
        answer: "Dennis Ritchie",
      },
      {
        question: "Which year was C language developed?",
        options: ["1969", "1972", "1980", "1990"],
        answer: "1972",
      },
    ],
  },
];

// ------------------ Component ------------------
const QuizApp: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [completed, setCompleted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(20); // per question

  const questions = quizData.flatMap((t) => t.questions);

  // Timer
  useEffect(() => {
    if (completed) return;
    if (timeLeft <= 0) {
      handleNext();
      return;
    }
    const timer = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, completed]);

  const handleAnswer = (opt: string) => {
    setAnswers({ ...answers, [current]: opt });
  };

  const handleNext = () => {
    if (current < questions.length - 1) {
      setCurrent(current + 1);
      setTimeLeft(20);
    } else {
      setCompleted(true);
    }
  };

  const handlePrev = () => {
    if (current > 0) {
      setCurrent(current - 1);
      setTimeLeft(20);
    }
  };

  const score = questions.reduce(
    (acc, q, idx) => (answers[idx] === q.answer ? acc + 1 : acc),
    0
  );

  // ------------------ Completed View ------------------
  if (completed) {
    return (
      <Box className="p-6 max-w-2xl mx-auto">
        <Typography variant="h4" gutterBottom align="center">
          🎉 Quiz Finished
        </Typography>
        <Typography variant="h6" align="center" className="mb-6">
          Score: {score} / {questions.length}
        </Typography>

        {questions.map((q, idx) => (
          <Paper key={idx} className="p-4 mb-4 rounded-xl shadow-md">
            <Typography fontWeight="bold">
              Q{idx + 1}: {q.question}
            </Typography>
            <Typography
              color={answers[idx] === q.answer ? "green" : "red"}
              fontWeight="bold"
            >
              Your Answer: {answers[idx] || "Not Answered"}
            </Typography>
            <Typography color="blue">Correct: {q.answer}</Typography>
          </Paper>
        ))}

        <Box textAlign="center" mt={4}>
          <Button variant="contained" onClick={() => window.location.reload()}>
            Restart Quiz
          </Button>
        </Box>
      </Box>
    );
  }

  // ------------------ Question View ------------------
  const currentQ = questions[current];

  return (
    <Box className="p-6 max-w-2xl mx-auto">
      {/* Progress */}
      <LinearProgress
        variant="determinate"
        value={((current + 1) / questions.length) * 100}
      />
      <Typography align="center" className="mt-2 text-gray-600">
        Question {current + 1} of {questions.length}
      </Typography>

      {/* Timeline dots */}
      <Box className="flex justify-center gap-2 my-3">
        {questions.map((_, idx) => (
          <div
            key={idx}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              idx === current
                ? "bg-blue-600"
                : answers[idx]
                ? "bg-green-400"
                : "bg-gray-300"
            }`}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </Box>

      {/* Timer */}
      <Typography className="text-center text-red-500">
        ⏱ {timeLeft}s left
      </Typography>

      {/* Question Card */}
      <motion.div
        key={current}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-6"
      >
        <Paper className="p-6 rounded-2xl shadow-lg">
          <Typography variant="h6" gutterBottom>
            {currentQ.question}
          </Typography>

          <Box className="grid gap-3 mt-4">
            {currentQ.options.map((opt, i) => {
              const isSelected = answers[current] === opt;
              return (
                <Button
                  key={i}
                  variant={isSelected ? "contained" : "outlined"}
                  color={isSelected ? "primary" : "inherit"}
                  onClick={() => handleAnswer(opt)}
                  className="w-full justify-start"
                >
                  {opt}
                </Button>
              );
            })}
          </Box>
        </Paper>
      </motion.div>

      {/* Nav Buttons */}
      <Box className="flex justify-between mt-6">
        <Button onClick={handlePrev} disabled={current === 0}>
          ⬅ Prev
        </Button>
        <Button
          variant="contained"
          onClick={handleNext}
          disabled={!answers[current]}
        >
          {current === questions.length - 1 ? "Finish" : "Next ➡"}
        </Button>
      </Box>
    </Box>
  );
};

export default QuizApp;
