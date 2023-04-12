import React, { useState } from "react";
import styled from "styled-components";



const QuestionForm = () => {
  const [question, setQuestion] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await fetch("http://localhost:4000/send-question", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question }),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setQuestion("");
        window.alert(
        "Your feedback has been sent to Dubs. Thank you, your contribution helps provide a better experience.")
      } else {
        const error = await response.json();
        console.error("Error:", error);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Enter your feedback"
      />
      <Button type="submit">Send Feedback</Button>
    </Form>
  );
};

const Button = styled.button`
background-color: #21F292;
text-decoration: none;
margin-top: 10px;
width: 50%;
height: 50px;
border-radius: 5px;

`

const Input = styled.textarea`
  font-size: 20px;
  width: 100%;
  height: 100%;
  padding: 10px;
  line-height: 20px; // Adjust the line-height property
  border-radius: 5px;
`

const Form = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 200px;
overflow: hidden;
`

export default QuestionForm;
