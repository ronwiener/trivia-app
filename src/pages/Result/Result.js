import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import "./Result.css";

const Result = ({ score, setCurrQuesNum, setScore, setQuestions }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    setCurrQuesNum(0);
    setScore(0);
    setQuestions("");
    navigate("/");
  };
  return (
    <div className="result">
      <span className="title">Final Score: {score}</span>

      <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        onClick={() => handleClick()}
      >
        Go to Homepage
      </Button>
    </div>
  );
};

export default Result;
