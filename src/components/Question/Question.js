import { useState } from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import "./Question.css";

const Question = ({
  currQuesNum,
  setCurrQuesNum,
  questions,
  setQuestions,
  options,
  correct,
  score,
  setScore,
}) => {
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);

  const handleSelect = (i) => {
    if (selected === i && selected === correct) {
      return "select";
    } else if (selected === i && selected !== correct) {
      return "wrong";
    } else if (i === correct) {
      return "select";
    }
  };

  const handleCheck = (i) => {
    setSelected(i);
    if (i === correct) setScore(score + 1);
    setError(false);
  };

  const navigate = useNavigate();

  const handleNext = () => {
    if (currQuesNum > 3) {
      navigate("/result");
    } else if (selected) {
      setCurrQuesNum(currQuesNum + 1);
      setSelected();
    } else {
      setError("Please select your answer");
    }
  };

  const handleQuit = () => {
    setCurrQuesNum(0);
    setScore(0);
    setQuestions("");
    navigate("/");
  };

  return (
    <div className="question">
      <h1>Question {currQuesNum + 1}</h1>

      <div className="singleQuestion">
        <h2
          dangerouslySetInnerHTML={{ __html: questions[currQuesNum].question }}
        ></h2>
        <div className="options">
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {options &&
            options.map((i) => (
              <button
                onClick={() => handleCheck(i)}
                className={`singleOption ${selected && handleSelect(i)}`}
                key={i}
                disabled={selected}
              >
                {i}
              </button>
            ))}
        </div>

        <div className="controls">
          <Button
            variant="contained"
            color="secondary"
            size="large"
            style={{ width: 185 }}
            onClick={() => handleQuit()}
          >
            {" "}
            Quit
          </Button>

          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ width: 185 }}
            onClick={handleNext}
          >
            Next Question
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Question;
