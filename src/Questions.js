import { useState } from "react";
import Question from "./Question";

const Questions = ({ questions }) => {

  return (
    <>
      {questions.map((question) => (
        <Question key={question.id} title={question.title} info={question.info}/>
      ))}
    </>
  );
};

export default Questions;
