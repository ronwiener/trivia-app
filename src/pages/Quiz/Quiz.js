import React, { useState, useEffect } from "react";
import Question from "../../components/Question/Question";
import CircularProgress from "@mui/material/CircularProgress";
import "./Quiz.css";

const Quiz = ({
  score,
  questions,
  setQuestions,
  setScore,
  currQuesNum,
  setCurrQuesNum,
}) => {
  const [options, setOptions] = useState();

  useEffect(() => {
    setOptions(
      questions &&
        handleShuffle([
          questions[currQuesNum]?.correct_answer,
          ...questions[currQuesNum]?.incorrect_answers,
        ])
    );
  }, [questions, currQuesNum]);

  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };
  return (
    <div className="quiz">
      <span className="subtitle">Test your knowledge with these Questions</span>

      {questions ? (
        <>
          <div className="quizInfo">
            <span>{questions[currQuesNum].category}</span>
            <span>Score: {score}</span>
          </div>
          <Question
            currQuesNum={currQuesNum}
            setCurrQuesNum={setCurrQuesNum}
            questions={questions}
            setQuestions={setQuestions}
            options={options}
            correct={questions[currQuesNum]?.correct_answer}
            score={score}
            setScore={setScore}
          />
        </>
      ) : (
        <CircularProgress
          color="inherit"
          size={150}
          thickness={1}
          style={{ margin: 100 }}
        />
      )}
    </div>
  );
};

export default Quiz;
