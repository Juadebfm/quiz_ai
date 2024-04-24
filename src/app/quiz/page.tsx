"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import ProgressBar from "@/components/progressBar";
import { ChevronLeft, X } from "lucide-react";
import ResultCard from "./ResultCard";

const questions = [
  {
    questionText: "What is React?",
    answers: [
      {
        answerText: "A Library for building user faces",
        isCorrect: false,
        id: 1,
      },
      {
        answerText: "A Library for building user laptops",
        isCorrect: false,
        id: 2,
      },
      {
        answerText: "A Library for building user interfaces",
        isCorrect: true,
        id: 3,
      },
      {
        answerText: "A Library for building user cars",
        isCorrect: false,
        id: 4,
      },
    ],
  },
  {
    questionText: "What is HTML?",
    answers: [
      { answerText: "Hyper Text Markup Language", isCorrect: true, id: 1 },
      { answerText: "Hypertext Markup Laptop", isCorrect: false, id: 2 },
      { answerText: "Hyper Tool Markup Language", isCorrect: false, id: 3 },
      { answerText: "Hyper Text Markup Laptop", isCorrect: false, id: 4 },
    ],
  },
  {
    questionText: "What is CSS?",
    answers: [
      { answerText: "Cascading Style Sheets", isCorrect: true, id: 1 },
      { answerText: "Cascading Styling System", isCorrect: false, id: 2 },
      { answerText: "Cascading System Sheets", isCorrect: false, id: 3 },
      { answerText: "Cascading Style Software", isCorrect: false, id: 4 },
    ],
  },
  {
    questionText: "What is JavaScript?",
    answers: [
      { answerText: "A programming language", isCorrect: true, id: 1 },
      { answerText: "A markup language", isCorrect: false, id: 2 },
      { answerText: "A styling language", isCorrect: false, id: 3 },
      { answerText: "A design language", isCorrect: false, id: 4 },
    ],
  },
  {
    questionText: "What is Node.js?",
    answers: [
      { answerText: "A JavaScript runtime", isCorrect: true, id: 1 },
      { answerText: "A server-side language", isCorrect: false, id: 2 },
      { answerText: "A front-end framework", isCorrect: false, id: 3 },
      { answerText: "A database management system", isCorrect: false, id: 4 },
    ],
  },
  {
    questionText: "What is MongoDB?",
    answers: [
      { answerText: "A NoSQL database", isCorrect: false, id: 1 },
      { answerText: "A relational database", isCorrect: true, id: 2 },
      { answerText: "A file storage system", isCorrect: false, id: 3 },
      { answerText: "A programming language", isCorrect: false, id: 4 },
    ],
  },
];

export default function Home() {
  const [started, setStarted] = useState<boolean>(false);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleNext = () => {
    if (!started) {
      setStarted(true);
      return;
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }

    setSelectedAnswer(null);
    setIsCorrect(null);
  };

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer.id);
    const isCurrentCorrect = answer.isCorrect;
    if (isCurrentCorrect) {
      setScore(score + 1);
    }
    setIsCorrect(isCurrentCorrect);
  };

  return (
    <div className="flex flex-col flex-1">
      <div className="position-sticky top-0 z-10 shadow-md py-4 w-full">
        <header className="grid grid-cols-[auto,1fr,auto] grid-flow-col items-center justify-between gap-2 py-2">
          <Button size="icon" variant="outline">
            <ChevronLeft />
          </Button>
          <ProgressBar value={(currentQuestion / questions.length) * 100} />

          <Button size="icon" variant="outline">
            <X />
          </Button>
        </header>
      </div>
      <main className="flex justify-center">
        {!started ? (
          <h1 className="text-3xl font-bold">Welcome To The Quiz Page</h1>
        ) : (
          <div>
            <h2 className="text-3xl font-bold">
              {questions[currentQuestion].questionText}{" "}
            </h2>
            <div className="grid grid-cols-1 gap-6 mt-6">
              {questions[currentQuestion].answers.map((answer) => {
                return (
                  <Button
                    key={answer.id}
                    variant={"secondary"}
                    onClick={() => handleAnswer(answer)}
                  >
                    {answer.answerText}
                  </Button>
                );
              })}
            </div>
          </div>
        )}
      </main>
      <footer className="footer pb-9 absolute bottom-0 mb-0 px-6">
        <ResultCard
          isCorrect={isCorrect}
          correctAnswer={
            questions[currentQuestion].answers.find(
              (answer) => answer.isCorrect === true
            )?.answerText
          }
        />
        <Button variant="neo" size="lg" onClick={handleNext}>
          {!started ? "Start" : "Next"}
        </Button>
      </footer>
    </div>
  );
}
