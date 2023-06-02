import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import "./Result.css";

const Result = ({ score }) => {
  return (
    <div className="result">
      <span className="title">Final Score: {score}</span>
      <Link to="/">
        <Button
          variant="contained"
          color="secondary"
          size="large"
          style={{ alignSelf: "center", marginTop: 20 }}
        >
          Go to Homepage
        </Button>
      </Link>
    </div>
  );
};

export default Result;
