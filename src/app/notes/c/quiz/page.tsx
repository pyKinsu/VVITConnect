"use client";

import React, { useState, useEffect } from "react";
import { Button, LinearProgress, Typography, Box, RadioGroup, FormControlLabel, Radio, Paper } from "@mui/material";

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
const mcqData: Topic[] = [
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
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [timeLeft, setTimeLeft] = useState(30); // ⏱ 30 sec per question
  const [completed, setCompleted] = useState(false);

  const questions = mcqData.flatMap((t) => t.questions); // flatten topics

  // Timer effect
  useEffect(() => {
    if (completed) return;
    if (timeLeft <= 0) {
      handleNext();
      return;
    }
    const timer = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, completed]);

  const handleSelect = (value: string) => {
    setUserAnswers((prev) => ({ ...prev, [current]: value }));
  };

  const handleNext = () => {
    if (current < questions.length - 1) {
      setCurrent(current + 1);
      setTimeLeft(30);
    } else {
      setCompleted(true);
    }
  };

  const handlePrev = () => {
    if (current > 0) {
      setCurrent(current - 1);
      setTimeLeft(30);
    }
  };

  // Score
  const score = questions.reduce(
    (acc, q, idx) => (userAnswers[idx] === q.answer ? acc + 1 : acc),
    0
  );

  if (completed) {
    return (
      <Box className="p-6 max-w-xl mx-auto">
        <Typography variant="h4" gutterBottom>
          🎉 Quiz Completed
        </Typography>
        <Typography variant="h6">
          Your Score: {score} / {questions.length}
        </Typography>
        <Box mt={3}>
          {questions.map((q, idx) => (
            <Paper key={idx} className="p-4 mb-3">
              <Typography fontWeight="bold">
                Q{idx + 1}: {q.question}
              </Typography>
              <Typography
                color={userAnswers[idx] === q.answer ? "green" : "red"}
              >
                Your Answer: {userAnswers[idx] || "Not Answered"}
              </Typography>
              <Typography color="blue">Correct: {q.answer}</Typography>
            </Paper>
          ))}
        </Box>
      </Box>
    );
  }

  const currentQ = questions[current];

  return (
    <Box className="p-6 max-w-xl mx-auto">
      {/* Progress bar */}
      <LinearProgress
        variant="determinate"
        value={((current + 1) / questions.length) * 100}
      />
      <Typography className="mt-2 text-gray-600">
        Question {current + 1} of {questions.length}
      </Typography>

      {/* Timer */}
      <Typography className="text-red-500 mt-2">
        ⏱ Time left: {timeLeft}s
      </Typography>

      {/* Question */}
      <Typography variant="h6" className="mt-4">
        {currentQ.question}
      </Typography>

      {/* Options */}
      <RadioGroup
        value={userAnswers[current] || ""}
        onChange={(e) => handleSelect(e.target.value)}
      >
        {currentQ.options.map((opt, i) => (
          <FormControlLabel key={i} value={opt} control={<Radio />} label={opt} />
        ))}
      </RadioGroup>

      {/* Nav buttons */}
      <Box className="flex justify-between mt-4">
        <Button
          variant="outlined"
          disabled={current === 0}
          onClick={handlePrev}
        >
          Previous
        </Button>
        <Button variant="contained" onClick={handleNext}>
          {current === questions.length - 1 ? "Finish" : "Next"}
        </Button>
      </Box>
    </Box>
  );
};

export default QuizApp;
