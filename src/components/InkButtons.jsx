"use client";
import { useState, useEffect } from "react";

export default function InkButtons() {
  const [storedWords, setStoredWords] = useState([]);

  useEffect(() => {
    let temp = localStorage.getItem("storedWords");
    if (temp != null) {
      let tempArr = temp.split("@#@");
      tempArr = tempArr.splice(0, tempArr.length - 1);
      setStoredWords(tempArr);
    }
  }, [setStoredWords]);

  useEffect(() => {
    let pollingeIntervalId = setInterval(() => {
      let wordsStr = "";
      for (let i = 0; i < storedWords.length; i++) {
        if (storedWords[i] == "" || storedWords[i] == " ") {
          i++;
        }
        wordsStr += storedWords[i] + `@#@`;
      }
      localStorage.setItem("storedWords", wordsStr);
    }, 1000);
    return () => clearInterval(pollingeIntervalId);
  }, [storedWords]);
  async function handleSelected(e) {
    window.getSelection() != "" && window.getSelection() != " "
      ? setStoredWords([...storedWords, `${window.getSelection()}`])
      : null;
  }
  function deleteSnippet(i) {
    setStoredWords(storedWords.toSpliced(i, 1));
  }
  return (
    <>
      <div id="controls" className="buttons">
        <button id="rewind" title="Restart story from beginning">
          restart
        </button>
        <button id="save" title="Save progress">
          save
        </button>
        <button id="reload" title="Reload from save point">
          load
        </button>
        <button id="theme-switch" title="Switch theme">
          theme
        </button>
        <button
          id="snippet"
          title="Save selected text in notes"
          onClick={(e) => handleSelected()}
        >
          snippet
        </button>
      </div>
      <section id="word-storage" className="">
        <h2>Snippets:</h2>
        {storedWords.map((word, i) => (
          <div key={i}>
            {i == 0 ? (
              <p className="p-2.5 storedWord topStoredWord">{word}</p>
            ) : (
              <p className="p-2.5 storedWord">{word}</p>
            )}
            <textarea
              className="border-solid border-black border w-full"
              rows={2}
            ></textarea>
            <button onClick={() => deleteSnippet(i)}>delete snippet</button>
          </div>
        ))}
      </section>
    </>
  );
}
