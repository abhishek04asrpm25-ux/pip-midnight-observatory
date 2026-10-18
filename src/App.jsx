import { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import "./App.css";
import pipAvatar from "./assets/pip_avatar_cloud.webp";
import Projects from "./components/Projects";
import Story from "./components/Story";

function App() {
  const [mousePosition, setMousePosition] = useState({
  x: 0,
  y: 0,
});
const [dreamMode, setDreamMode] = useState(false);
const [soundOn, setSoundOn] = useState(true);
const [pipClicks, setPipClicks] = useState(0);
const [secretFound, setSecretFound] = useState(false);
const playChime = () => {
  if (!soundOn) return;

  const AudioContext =
    window.AudioContext || window.webkitAudioContext;

  const audioContext = new AudioContext();

  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();

  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(
    660,
    audioContext.currentTime
  );

  oscillator.frequency.exponentialRampToValueAtTime(
    880,
    audioContext.currentTime + 0.12
  );

  gainNode.gain.setValueAtTime(
    0.0001,
    audioContext.currentTime
  );

  gainNode.gain.exponentialRampToValueAtTime(
    0.08,
    audioContext.currentTime + 0.02
  );

  gainNode.gain.exponentialRampToValueAtTime(
    0.0001,
    audioContext.currentTime + 0.18
  );

  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);

  oscillator.start();
  oscillator.stop(audioContext.currentTime + 0.18);
};
const handlePipClick = () => {
  const nextClicks = pipClicks + 1;

  setPipClicks(nextClicks);

  if (nextClicks === 5) {
    setSecretFound(true);

    confetti({
      particleCount: 120,
      spread: 80,
      origin: {
        y: 0.6,
      },
    });

    playChime();
  }
};
useEffect(() => {
  const handleMouseMove = (event) => {
    setMousePosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  window.addEventListener("mousemove", handleMouseMove);

  return () => {
    window.removeEventListener("mousemove", handleMouseMove);
  };
}, []);
  return (
    <>
     <main className={`hero ${dreamMode ? "dream-mode" : ""}`}>
        <div className="stars" aria-hidden="true">
          ✦ ⋆ ✧ ✦ ⋆
        </div>

        <div className="hero-content">
         <button
  className="mode-toggle"
  onClick={() => {
    setDreamMode(!dreamMode);
    playChime();
  }}
>
  <button
  className="sound-toggle"
  onClick={() => setSoundOn(!soundOn)}
  aria-label={soundOn ? "Mute sounds" : "Enable sounds"}
>
  {soundOn ? "🔊 Sound On" : "🔇 Sound Off"}
</button>
  {dreamMode ? "☀️ Day Mode" : "🌙 Dream Mode"}
</button>
          <p className="eyebrow">
            MIDNIGHT NURSERY · DREAM DEPARTMENT
          </p>

          <h1>Meet Pip.</h1>

          <p className="role">
            Junior Dream Engineer
          </p>

          <p className="tagline">
            I build the dreams you fall asleep inside.
          </p>

          <button
  className="dream-button"
  onClick={playChime}
>
  Enter the Dream Lab ✦
</button>
        </div>

        <div className="pip-container">
        <div
  className="pip-avatar-wrapper"
  style={{
    "--mouse-x": `${mousePosition.x}px`,
    "--mouse-y": `${mousePosition.y}px`,
  }}
>
  <img
  src={pipAvatar}
  alt="Pip, the gentle Skull Baby"
  className="pip-avatar"
  onClick={handlePipClick}
/>
{secretFound && (
  <div className="secret-message">
    <p>✨ DREAM DELIVERY COMPLETE ✨</p>
    <h3>You found Pip's secret!</h3>
    <span>
      The Midnight Nursery has a little surprise
      for curious dreamers.
    </span>
  </div>
)}
</div>
<div
  className="cursor-orb"
  style={{
    left: mousePosition.x,
    top: mousePosition.y,
  }}
/>
        </div>

        <p className="scroll-hint">
          ↓ scroll to explore Pip's world ↓
        </p>
      </main>

      <Projects />

      <Story />
    </>
  );
}

export default App;