import React from "react";
import CelebrityCard from "./CelebrityCard";

function App() {
  const celebrities = [
    {
      title: "Bob Dylan",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Bob_Dylan_-_Azkena_Rock_Festival_2010_2.jpg/330px-Bob_Dylan_-_Azkena_Rock_Festival_2010_2.jpg",
      buttonLabel: "Go to Wikipedia",
      buttonUrl: "https://en.wikipedia.org/wiki/Bob_Dylan",
      description: "Bob Dylan is an American singer, songwriter and cultural icon who has influenced music for more than five decades."
    },
    {
      title: "Paul McCartney",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Paul_McCartney_in_October_2018.jpg/240px-Paul_McCartney_in_October_2018.jpg",
      buttonLabel: "Go to Wikipedia",
      buttonUrl: "https://en.wikipedia.org/wiki/Paul_McCartney",
      description: "Paul McCartney is an English singer, songwriter, and musician best known as a member of the Beatles."
    }
  ];

  const planets = ["Mars", "Venus", "Jupiter", "Earth", "Saturn", "Neptune"];

  return (
    <div style={{ fontFamily: "Segoe UI, sans-serif", padding: "30px", background: "#f9fafb", minHeight: "100vh" }}>
      <header style={{ textAlign: "center", marginBottom: "30px" }}>
        <h1 style={{ color: "#111827" }}>Day 4 - Exercises XP Gold</h1>
      </header>

      {/* Exercise 1 : Celebrity Cards */}
      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ color: "#374151", borderBottom: "2px solid #e5e7eb", paddingBottom: "8px" }}>
          Exercise 1: Celebrity Cards
        </h2>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px", marginTop: "20px" }}>
          {celebrities.map((celebrity, index) => (
            <CelebrityCard
              key={index}
              title={celebrity.title}
              imageUrl={celebrity.imageUrl}
              description={celebrity.description}
              buttonLabel={celebrity.buttonLabel}
              buttonUrl={celebrity.buttonUrl}
            />
          ))}
        </div>
      </section>

      {/* Exercise 2 : Planets List */}
      <section style={{ maxWidth: "480px", margin: "auto" }}>
        <h2 style={{ color: "#374151", borderBottom: "2px solid #e5e7eb", paddingBottom: "8px" }}>
          Exercise 2: Planets List
        </h2>
        <ul style={{ listStyle: "none", padding: 0, marginTop: "16px" }}>
          {planets.map((planet, index) => (
            <li
              key={index}
              style={{
                border: "1px solid #e5e7eb",
                padding: "12px 18px",
                marginBottom: "8px",
                borderRadius: "8px",
                backgroundColor: "#ffffff",
                boxShadow: "0 2px 4px rgba(0,0,0,0.03)",
                fontWeight: "500",
                color: "#1f2937"
              }}
            >
              🪐 {planet}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;
