import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😊": "smiling",
  "😀": "grinning face",
  "😂": "Face With Tears of Joy",
  "😃": "Smiling Face With Open Mouth",
  "😍": "Smiling Face With Heart-Eyes",
  "😘": "Face Blowing a Kiss",
  "😇": "Smiling Face With Halo",
  "😉": "wink",
  "😐": "neutral face",
  "😌": "relieved face",
  "😟": "worried",
  "😳": "disbelief",
  "😒": "annoyance",
  "😔": "dissatisfaction and frustration",
  "😕": "Confused",
  "😣": "struggling",
  "😖": "extremely dismayed and bewildered",
  "😫": "tired",
  "😩": "weary face",
  "😢": "crying face",
  "😭": "loudly crying face",
  "😤": "Face With Look of Triumph",
  "🤬": "cursing",
  "😠": "Angry Face",
  "😡": "Pouting Face",
  "😷": "masked face",
  "😵": "dizzy",
  "😯": "Speechless Face",
  "😦": "Frowning Face With Open Mouth",
  "😮": "surprised",
  "😲": "Astonished Face",
  "🧐": "Face with monocle",
  "🤯": "Mind blown",
  "🤓": "Nerd face",
  "❤️": "love"
};

const emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState(
    "Click on the emoji below or search for emoji 👆"
  );

  function emojiInputHandler(event) {
    const userInput = event.target.value;

    if (userInput in emojiDictionary) {
      setMeaning(emojiDictionary[userInput]);
    } else {
      setMeaning("Failure to recognise this emoji");
    }
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <header>
        <h1>Find your Emoji🔎 </h1>
      </header>
      <input onChange={emojiInputHandler}></input>

      <h2> {meaning} </h2>

      <h3> Emojis We Know </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
      <hr />
      <footer className="footer">
        <h1 className="footer-header">About an App</h1>
        <p className="para">
          You can use this app to select emoji or type emoji to know the meaning
          of an emoji.
        </p>
      </footer>
    </div>
  );
}
