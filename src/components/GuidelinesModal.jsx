import React from "react";
import "./GuidelinesModal.css";

const GuidelinesModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-container">
        <div className="modal-header">
          <h2>Competition Guidelines</h2>
          <div className="modal-actions">
            <button
              className="register-btn"
              onClick={() => window.open("https://www.yepdesk.com/sign-to-sound", "_blank")}
            >
              Register Now
            </button>
            <button className="close-btn" onClick={onClose}>
              ×
            </button>
          </div>
        </div>

        <div className="modal-content">
          <div className="guidelines-content">
            <section>
              <h3>About the Competition</h3>
              <p>
                Sign2Sound is a global assistive technology innovation challenge
                focused on bridging the communication gap between the deaf and
                hearing communities through cutting-edge AI and signal
                processing solutions. The competition will be conducted entirely
                online and comprises three rounds - from idea conception to
                final prototype development and evaluation.
              </p>
            </section>

            <section>
              <h3>Team Formation & Eligibility</h3>
              <ol>
                <li>Each team must consist of 2 to 4 members.</li>
                <li>
                  Teams can include only students pursuing any degree
                  (undergraduate / postgraduate / PhD) and not necessarily from
                  the same college/institute.
                </li>
                <li>
                  Each team must designate one Team Leader as the primary point
                  of contact.
                </li>
                <li>A participant can be a member of only one team.</li>
              </ol>
            </section>

            <section>
              <h3>Registration</h3>
              <ol>
                <li>
                  <strong>Registration fee:</strong>
                  <ul>
                    <li>Team-Lead has IEEE SPS Membership: $4</li>
                    <li>Team-Lead has IEEE Membership: $4.5</li>
                    <li>Non-IEEE Membered Team: $5</li>
                  </ul>
                  <em>(Registration Fee is non-refundable).</em>
                </li>
                <li>
                  Registrations must be completed through the official YepDesk
                  event portal link.
                </li>
                <li>
                  Upon successful registration, teams will receive a unique team
                  ID and access to competition updates.
                </li>
                <li>
                  Teams must provide accurate details during registration.
                  Incorrect or misleading information may lead to
                  disqualification.
                </li>
              </ol>
            </section>

            <section>
              <h3>Competition Structure</h3>

              <h4>Phase 1 - Idea Submission</h4>
              <ul>
                <li>
                  Teams submit their concept or proposal outlining their
                  approach to translating sign language to sound using assistive
                  technologies.
                </li>
                <li>
                  Submission should include:
                  <ul>
                    <li>Problem statement</li>
                    <li>Proposed solution</li>
                    <li>Technology stack / tools planned</li>
                    <li>Expected outcomes or social impact</li>
                  </ul>
                </li>
              </ul>
              <p>
                <strong>
                  Top 25 teams will be shortlisted for the next round.
                </strong>
              </p>

              <h4>Phase 2 – Model Development & Presentation</h4>
              <ul>
                <li>
                  Shortlisted teams will receive small development grants in the
                  form of Google Colab Pro subscriptions to support their
                  computational requirements.
                </li>
                <li>
                  Teams are expected to:
                  <ul>
                    <li>
                      Develop and train a functional model demonstrating the
                      core concept.
                    </li>
                    <li>
                      Submit documentation explaining model architecture, data
                      handling, and outputs.
                    </li>
                    <li>
                      Submit a 5-minute video demonstrating the functioning of
                      the trained model using the required sensors of their
                      proposed prototype.
                    </li>
                  </ul>
                </li>
                <li>
                  The organizing committee will:
                  <ul>
                    <li>
                      Provide access to three curated sign language datasets —
                      American Sign Language (ASL), Indian Sign Language (ISL),
                      and Malayalam Sign Language (MSL) sourced from IEEE
                      DataPort.
                    </li>
                    <li>
                      Teams must use at least one of these three datasets but
                      are also allowed to use or combine additional external
                      datasets, provided that one of the official datasets is
                      included in their work.
                    </li>
                    <li>
                      Support teams in accessing tools via IEEE DataPort and
                      other relevant resources.
                    </li>
                  </ul>
                </li>
              </ul>

              <h4>Phase 3 – Final Submission & Evaluation</h4>
              <ul>
                <li>
                  Finalists refine their work into a complete prototype
                  integrating the trained model.
                </li>
                <li>
                  Final submission must include:
                  <ul>
                    <li>Demonstration video (5–10 minutes)</li>
                    <li>Technical documentation (PDF)</li>
                    <li>
                      Model files / code access (link or GitHub repository)
                    </li>
                  </ul>
                </li>
              </ul>
            </section>

            <section>
              <h3>Awards & Recognition</h3>
              <ul>
                <li>
                  Winners will receive prize money and gadgets worth $25 per
                  winner.
                </li>
                <li>
                  Certificates will be awarded to:
                  <ul>
                    <li>Winning teams</li>
                    <li>Finalists</li>
                    <li>Best innovation (special mention)</li>
                  </ul>
                </li>
                <li>
                  Selected top projects may be featured on the competition's
                  official page and recommended for IEEE DataPort or open-source
                  publication.
                </li>
              </ul>
            </section>

            <section>
              <h3>General Rules & Conduct</h3>
              <ol>
                <li>
                  All submissions must be the original work of the team.
                  Plagiarism of code will lead to immediate disqualification.
                </li>
                <li>
                  Teams must use at least one of the official datasets (ASL,
                  ISL, or MSL) and may combine or integrate additional external
                  datasets if required.
                </li>
                <li>
                  Any external datasets used must be obtained ethically,
                  respecting copyrights and patent laws.
                </li>
                <li>
                  Decisions made by the evaluation committee will be final and
                  binding.
                </li>
                <li>
                  Any attempt to manipulate results, submit false data, or
                  violating fair play principles will result in
                  disqualification.
                </li>
                <li>
                  Teams must adhere to deadlines announced by the organizing
                  team. Late submissions may not be accepted.
                </li>
                <li>
                  Communication from the organizing committee will be done via
                  email and the official competition portal only.
                </li>
                <li>
                  Teams must maintain professional conduct during all
                  interactions, meetings, and communications.
                </li>
              </ol>
            </section>

            <section>
              <h3>Technical Guidelines</h3>
              <ol>
                <li>
                  Development may be done using Python, TensorFlow, PyTorch,
                  OpenCV, or other suitable frameworks.
                </li>
                <li>
                  Google Colab Pro subscriptions (or equivalent) provided are to
                  be used strictly for project-related purposes.
                </li>
                <li>
                  Teams must maintain proper documentation and version control
                  for their projects.
                </li>
                <li>
                  Dataset handling must comply with data privacy and ethical AI
                  guidelines.
                </li>
                <li>
                  All models and prototypes should be capable of being
                  demonstrated remotely through video or live online sessions.
                </li>
              </ol>
            </section>

            <section>
              <h3>Judging Criteria</h3>
              <p>
                Projects will be evaluated based on innovation, technical
                execution, accuracy, multilingual adaptability, and social
                impact.
              </p>
            </section>

            <section>
              <h3>Intellectual Property</h3>
              <ol>
                <li>
                  The intellectual property of the developed prototype remains
                  with the team.
                </li>
                <li>
                  However, the organizers reserve the right to showcase,
                  publish, or feature the submitted ideas or prototypes (with
                  proper credit to the creators).
                </li>
                <li>
                  Teams are responsible for ensuring their work does not
                  infringe on any third-party rights or existing patents.
                </li>
              </ol>
            </section>

            <section>
              <h3>Important Dates</h3>
              <p>
                <strong>December 1 - Last date for Registration</strong>
              </p>
            </section>

            <section>
              <h3>Contact & Support</h3>
              <p>For any queries or technical assistance:</p>
              <div className="contact-info">
                <p>
                  📧 Email:{" "}
                  <a href="mailto:sign2sound@gmail.com">sign2sound@gmail.com</a>
                </p>
                <p>
                  📞 Resha Fathima:{" "}
                  <a href="tel:+917034749249">+91 7034749249</a>
                </p>
                <p>
                  📞 Deepak Santhosh:{" "}
                  <a href="tel:+919400353443">+91 9400353443</a>
                </p>
                <p>
                  📞 Bharath Krishna:{" "}
                  <a href="tel:+917902270491">+91 7902270491</a>
                </p>
                <p>
                  📞 Muhammed Basim P:{" "}
                  <a href="tel:+918606120327">+91 8606120327</a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuidelinesModal;
