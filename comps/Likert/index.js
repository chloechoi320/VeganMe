import React from 'react';
import Likert from 'react-likert-scale';
import './likert.css';
 
export default () => {
  const likertOptions = {
    // question: "What is your blah blah?",
    responses: [
      { value: 1, text: "1" },
      { value: 2, text: "2" },
      { value: 3, text: "3" },
      { value: 4, text: "4" },
      { value: 5, text: "5" }
    ],
    picked: val => {
      console.log(val);
    }
  };
  return (
    <Likert {...likertOptions} />
  )
}