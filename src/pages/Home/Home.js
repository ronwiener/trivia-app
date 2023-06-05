import { useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Categories from "../../components/Data/Categories";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

const Home = ({ fetchQuestions }) => {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!category || !difficulty) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestions(category, difficulty);
      navigate("/quiz");
    }
  };

  return (
    <div className="content">
      <div className="settings">
        <span style={{ fontSize: 30, textAlign: "center" }}>
          Select for Game Play
        </span>

        <div className="settings_select">
          {error && <ErrorMessage>Please fill all the fields</ErrorMessage>}

          <TextField
            style={{ marginBottom: 30, color: "black" }}
            select
            label="Category"
            variant="outlined"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            {Categories.map((cat) => (
              <MenuItem key={cat.category} value={cat.value}>
                {cat.category}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            select
            label="Difficulty Level"
            variant="outlined"
            style={{ marginBottom: 30 }}
            onChange={(e) => setDifficulty(e.target.value)}
            value={difficulty}
          >
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
          </TextField>

          <Button
            style={{ width: "100%" }}
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSubmit}
          >
            Start Trivia
          </Button>
        </div>
      </div>
      <img src="./trivia.png" className="banner" alt="trivia img" />
    </div>
  );
};

export default Home;
