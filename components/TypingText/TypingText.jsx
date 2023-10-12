"use client";

const TypingText = ({ title, textStyles }) => (
  <p className={`${textStyles}`}>
    {Array.from(title).map((letter, index) => (
      <span key={index}>{letter === " " ? "\u00A0" : letter}</span>
    ))}
  </p>
);

export default TypingText;
