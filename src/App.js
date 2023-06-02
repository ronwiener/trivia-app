import React, { useState } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Quiz from "./pages/Quiz/Quiz";
import Result from "./pages/Result/Result";
import "./App.css";

function App() {
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=5${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );
    setQuestions(data.results);
  };

  return (
    <>
      <div
        className="app"
        style={{ backgroundImage: "url(./quiz.png", backgroundSize: "cover" }}
      >
        <Header />
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<Home fetchQuestions={fetchQuestions} />}
            />
            <Route
              path="quiz"
              element={
                <Quiz
                  questions={questions}
                  score={score}
                  setScore={setScore}
                  setQuestions={setQuestions}
                />
              }
            />
            <Route path="result" element={<Result score={score} />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
