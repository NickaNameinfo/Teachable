import React, { useState, useEffect } from "react";
import { quizData } from "./quizData";
import emailjs from "emailjs-com"; // Import EmailJS SDK
import { useNavigate } from "react-router-dom";

const MainQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [myAnswer, setMyAnswer] = useState(null);
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [disabled, setDisabled] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [questions, setQuestions] = useState("");
  const [code, setCode] = useState("");
  const [answer, setAnswer] = useState("");
  const [timer, setTimer] = useState(null);
  const [allkMyAnswer, setAllMyAnswer] = useState([]);
  const [mailid, setMailId] = useState(null);
  const navigate = useNavigate();
  const quizitem = localStorage.getItem("quizData");
  const loadQuizData = () => {
    setQuestions(quizData[currentQuestion].question);
    setAnswer(quizData[currentQuestion].answer);
    setOptions(quizData[currentQuestion].options);
    setCode(quizData[currentQuestion].code);
    setMyAnswer(null);
    setDisabled(true);
  };

  useEffect(() => {
    loadQuizData();
  }, [currentQuestion]);

  React.useEffect(() => {
    if (Number(quizitem) === 1) {
      navigate("/");
    }
  }, [quizitem]);

  useEffect(() => {
    if (timer) {
      const countdown = setInterval(() => {
        setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
      }, 1000);

      if (timer === 0) {
        clearInterval(countdown);
        handleNext();
      }
      return () => clearInterval(countdown);
    }
  }, [timer]);

  React.useEffect(() => {
    if (isEnd) {
      setTimeout(() => {
        navigate("/");
        localStorage.setItem("quizData", "1");
      }, 4000);
    }
  }, [isEnd]);

  const handleNext = () => {
    if (myAnswer === answer) {
      setScore(score + 1);
    }
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setTimer(30);
    } else {
      setIsEnd(true);
      sendEmail(); // Send email when quiz ends
    }
  };

  const checkAnswer = (selectedAnswer) => {
    setAllMyAnswer([...allkMyAnswer, selectedAnswer]);
    setMyAnswer(selectedAnswer);
    setDisabled(false);
  };

  const finishHandler = () => {
    if (myAnswer === answer) {
      setScore(score + 1);
    }
    setIsEnd(true);
    sendEmail(); // Send email when quiz ends
  };

  const sendEmail = () => {
    const submittedAnswers = quizData
      .map((item, index) => {
        return `Question: ${item.question}\nYour Answer: ${allkMyAnswer[index]}`; // Answer will be on a new line
      })
      .join("\n\n"); // Separate each question-answer pair with an extra newline

    // Create a string with the correct answers
    const correctAnswers = quizData
      .map((item, index) => {
        return `Question: ${item.question}\nCorrect Answer: ${item.answer}`; // Answer will be on a new line
      })
      .join("\n\n"); // Separate each question-answer pair with an extra newline

    const templateParams = {
      to_name: mailid, // Recipient name (you can dynamically set this if needed)
      message: "Answer Submitted", // Message to indicate the action
      score: `Score: ${score}`, // The score from the quiz
      submitted_answer: submittedAnswers, // Combined string of your answers
      correct_answer: correctAnswers,
      from_name: "Krosum Labs", // Sender's name
    };

    emailjs
      .send(
        "service_xhac60p", // EmailJS service ID
        "template_1oxgasa", // EmailJS template ID
        templateParams,
        "CPwpSD89fYszJBsBE" // Your user ID from EmailJS dashboard
      )
      .then(
        (response) => {
          console.log("Email sent successfully", response);
        },
        (error) => {
          console.error("Error sending email:", error);
        }
      );
  };

  if (isEnd) {
    return (
      <div className="quationanswer text-center" style={{ height: "85vh" }}>
        <div>
          <h3>Test Completed. Your final score is {score} points.</h3>
          <button className="ui inverted button mt-3">
            Your answers have been submitted successfully. Our team will contact
            you shortly.
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="quationanswer text-center"
      style={{ height: timer ? "" : "80vh" }}
    >
      {timer ? (
        <div>
          <h1>{questions}</h1>
          <code>{code}</code>
          <br />
          <span>{`Questions ${currentQuestion + 1} of ${
            quizData.length
          }`}</span>
          <div className="timer">Time remaining: {timer} seconds</div>
          {options.map((option, index) => (
            <>
              <p
                key={index}
                className={`ui floating message options ${
                  myAnswer === option ? "selected" : ""
                }`}
                onClick={() => checkAnswer(option)}
              >
                {option}
              </p>
            </>
          ))}
          {currentQuestion < quizData.length - 1 && (
            <button
              className="ui inverted button"
              disabled={disabled}
              onClick={handleNext}
            >
              Next
            </button>
          )}
          {currentQuestion === quizData.length - 1 && (
            <button className="ui inverted button" onClick={finishHandler}>
              Finish
            </button>
          )}
        </div>
      ) : (
        <div className="text-center">
          <h3>Please enter your mail ID to continue with the test.</h3>
          <div className="my-2">
            <input
              type="email"
              placeholder="Enter Your Mail id"
              style={{
                border: "none",
                boxShadow: "0px 0px 7px 0px #bdbdbd",
                padding: "15px",
                width: "100%",
                margin: "10px",
                background: mailid ? "" : "#ff000017",
              }}
              onChange={(e) => setMailId(e.target.value)}
            />
          </div>
          <button
            className="ui inverted button"
            onClick={() => {
              if (mailid) {
                setTimer(30);
              } else {
                alert("Please enter your mail id");
              }
            }}
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default MainQuiz;
