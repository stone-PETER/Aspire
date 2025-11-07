import React from "react";
import "./PhasesSection.css";

const phases = [
  {
    title: "Track 1 – Signal Processing Fundamentals",
    desc: "Explore core concepts in digital signal processing, including filtering, transforms, and spectral analysis. Perfect for beginners looking to build a strong foundation.",
    details: (
      <>
        <strong>🎯 Focus Areas</strong>
        <ul>
          <li>Time & Frequency Domain Analysis</li>
          <li>Digital Filters & Design</li>
          <li>Fourier Transforms & Applications</li>
        </ul>
      </>
    ),
  },
  {
    title: "Track 2 – Machine Learning in Signal Processing",
    desc: "Discover how AI and ML techniques are revolutionizing signal processing applications, from speech recognition to biomedical signal analysis.",
    details: (
      <>
        <strong>💡 Key Topics</strong>
        <ul>
          <li>Deep Learning for Signal Classification</li>
          <li>Feature Extraction Techniques</li>
          <li>Real-time Signal Processing with ML</li>
        </ul>
      </>
    ),
  },
  {
    title: "Track 3 – Communication Systems",
    desc: "Dive into modern communication technologies including 5G, wireless networks, and emerging protocols that shape our connected world.",
    details: (
      <>
        <strong>📡 Explore</strong>
        <ul>
          <li>5G Network Architecture</li>
          <li>Digital Modulation Techniques</li>
          <li>IoT Communication Protocols</li>
        </ul>
      </>
    ),
  },
  {
    title: "Track 4 – Biomedical Signal Processing",
    desc: "Learn how signal processing transforms healthcare through ECG analysis, brain-computer interfaces, and medical imaging applications.",
    details: (
      <>
        <span role="img" aria-label="Medical">
          �
        </span>
        <strong>🔬 Applications:</strong>
        <ul>
          <li>ECG & EEG Signal Analysis</li>
          <li>Medical Image Processing</li>
          <li>Wearable Health Monitoring</li>
        </ul>
      </>
    ),
  },
];

export default function PhasesSection() {
  return (
    <section className="phases">
      <div className="section-inner">
        <h2>Technical Track Sessions</h2>
        <p className="section-description">
          Multiple parallel tracks designed by Student Branch Chapters across
          the Travancore Hub, each offering unique perspectives on Signal
          Processing applications and innovations.
        </p>
        <div className="phases-list auto-grid">
          {phases.map((p, i) => (
            <article
              className="phase-card card"
              key={i}
              tabIndex={0}
              aria-labelledby={`phase-${i}-title`}
            >
              <h3 id={`phase-${i}-title`}>{p.title}</h3>
              <p>{p.desc}</p>

              <div
                className="phase-hover-content"
                role="region"
                aria-hidden="false"
              >
                {p.details}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
