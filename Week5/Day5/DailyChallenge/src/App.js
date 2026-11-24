import React, { useState } from 'react';

function App() {
  const [languages, setLanguages] = useState([
    { name: 'Php', votes: 0 },
    { name: 'Python', votes: 0 },
    { name: 'JavaSript', votes: 0 },
    { name: 'Java', votes: 0 }
  ]);

  const increaseVote = (index) => {
    setLanguages((prevLanguages) =>
      prevLanguages.map((language, i) =>
        i === index ? { ...language, votes: language.votes + 1 } : language
      )
    );
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-6">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <h1 className="mb-6 text-center text-3xl font-bold text-slate-800">
          Vote Your Language!
        </h1>
        <div className="flex flex-col gap-3">
          {languages.map((language, index) => (
            <div
              key={language.name}
              className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-lg font-bold text-emerald-700">
                  {language.votes}
                </span>
                <span className="text-lg font-semibold text-slate-800">
                  {language.name}
                </span>
              </div>
              <button
                type="button"
                onClick={() => increaseVote(index)}
                className="rounded-lg bg-emerald-500 px-4 py-2 font-semibold text-white shadow-sm transition hover:bg-emerald-600 active:scale-95"
              >
                Click Here
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
