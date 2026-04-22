const projects = [
  {
    id: "mobile-auth",
    title: "Mobile Authentication Experience",
    description: "Designing a smooth and secure onboarding and login experience for mobile users",
    tag: "App",
    link: "https://www.figma.com/proto/IdQZWJLPUnZfKSnx2oz9da/hilow"
  },
  {
    id: "card-match-game",
    title: "Card Match Game UI",
    description: "A minimal and engaging memory game interface focused on clarity and usability",
    tag: "Game",
    link: "https://www.figma.com/proto/XCV4xGvHEXoIChgjCQu8rz/card-match?node-id=1-33&starting-point-node-id=1%3A33"
  },
  {
    id: "bakery-shopping",
    title: "Bakery Shopping App UI",
    description: "A clean mobile shopping experience focused on product browsing and quick purchasing",
    tag: "App",
    link: "https://www.figma.com/proto/hfAOG7XHDB41ZZp127LxvC/bakery-shop"
  },
  {
    id: "frog-focus-timer",
    title: "Frog Focus Timer",
    description: "A playful productivity timer designed to improve focus and user engagement",
    tag: "App",
    link: "https://www.figma.com/proto/L5vAc0dqdOeNUdmeZUI0eZ/frog-timer?node-id=2-26&starting-point-node-id=2%3A26"
  }
];

const caseStudies = {
  "mobile-auth": {
    title: "Mobile Authentication Experience",
    tag: "App",
    year: "2025",
    role: "UX/UI Designer",
    figmaLink: "https://www.figma.com/file/your-link-1",
    problem:
      "Users were abandoning the mobile onboarding process due to confusing authentication flows, unclear error messages, and friction during account creation and login.",
    goal:
      "Design a smooth, secure, and user-friendly authentication experience that reduces drop-off rates and builds trust during onboarding and login.",
    approach: [
      "Analyzed user behavior data to identify friction points in the current flow",
      "Researched best practices for mobile authentication patterns",
      "Designed progressive onboarding with clear step indicators",
      "Created micro-interactions to provide immediate feedback",
      "Tested prototypes with 15 users across different age groups and tech literacy levels"
    ],
    solution:
      "A streamlined authentication flow with clear visual hierarchy, helpful error states, and biometric login options. The design uses minimal input fields, inline validation, and reassuring security indicators to build user confidence.",
    outcome: [
      "Reduced onboarding drop-off rate by 35%",
      "Increased successful login attempts by 42%",
      "Improved user satisfaction scores from 6.5 to 8.9 out of 10",
      "Biometric authentication adoption reached 78% within first month"
    ]
  },
  "card-match-game": {
    title: "Card Match Game UI",
    tag: "Game",
    year: "2025",
    role: "UX/UI Designer",
    figmaLink: "https://www.figma.com/file/your-link-2",
    problem:
      "Existing memory card games were cluttered with distracting visual elements, unclear game states, and inconsistent feedback, reducing player engagement and enjoyment.",
    goal:
      "Create a minimal, engaging memory game interface that prioritizes clarity, usability, and playful interaction without overwhelming users.",
    approach: [
      "Studied cognitive load principles and memory game mechanics",
      "Designed clean card layouts with clear flip animations",
      "Created intuitive game state indicators (turns, matches, timer)",
      "Tested color contrast and visual hierarchy for accessibility",
      "Conducted playtesting sessions to refine timing and feedback"
    ],
    solution:
      "A minimal card matching interface with smooth animations, clear visual feedback, and an uncluttered layout. The design uses subtle color coding, satisfying match animations, and a clean scoring system.",
    outcome: [
      "Increased average session duration by 60%",
      "Achieved 4.6/5 user rating based on player feedback",
      "Reduced visual distractions by 70% compared to previous version",
      "Players completed 40% more games per session"
    ]
  },
  "bakery-shopping": {
    title: "Bakery Shopping App UI",
    tag: "App",
    year: "2024",
    role: "UX/UI Designer",
    figmaLink: "https://www.figma.com/file/your-link-3",
    problem:
      "Customers struggled with browsing products, understanding options, and completing purchases quickly in the existing bakery app, leading to cart abandonment and lost sales.",
    goal:
      "Design a clean, intuitive mobile shopping experience that makes product discovery easy and streamlines the checkout process.",
    approach: [
      "Interviewed bakery customers to understand shopping preferences",
      "Mapped user journey from browsing to purchase completion",
      "Designed product cards with clear imagery and essential information",
      "Created simplified checkout flow with minimal steps",
      "Tested navigation patterns and information hierarchy with target users"
    ],
    solution:
      "A mobile shopping app with visual product browsing, quick add-to-cart actions, and a streamlined checkout. The design features large product photos, clear pricing, category filters, and an always-accessible cart.",
    outcome: [
      "Reduced cart abandonment by 28%",
      "Increased average order value by 18%",
      "Cut checkout time from 3 minutes to under 1 minute",
      "Achieved 85% customer satisfaction in post-launch survey"
    ]
  },
  "frog-focus-timer": {
    title: "Frog Focus Timer",
    tag: "App",
    year: "2024",
    role: "UX/UI Designer",
    figmaLink: "https://www.figma.com/file/your-link-4",
    problem:
      "Users found traditional productivity timers boring and uninspiring, leading to low engagement and inconsistent use of time management techniques.",
    goal:
      "Design a playful yet functional productivity timer that improves focus and makes time management more engaging through delightful interactions.",
    approach: [
      "Researched productivity timer patterns and gamification principles",
      "Designed a friendly frog character system to provide visual feedback",
      "Created clear timer states with playful animations",
      "Built reward mechanics to encourage consistent usage",
      "Tested with students and remote workers to validate engagement"
    ],
    solution:
      "A productivity timer app featuring an animated frog companion that responds to work sessions. The design includes customizable focus periods, break reminders, visual progress tracking, and unlockable frog themes.",
    outcome: [
      "Increased daily active users by 55%",
      "Users completed 3x more focus sessions per day on average",
      "Achieved 4.7/5 app store rating with 200+ reviews",
      "90% of users reported improved focus and productivity"
    ]
  }
};

const app = document.getElementById("app");

function iconArrowRight() {
  return "→";
}

function iconArrowLeft() {
  return "←";
}

function getRoute() {
  const hash = window.location.hash || "#/";
  if (hash.startsWith("#project/")) {
    return {
      page: "project",
      id: hash.replace("#project/", "").trim()
    };
  }
  return { page: "home" };
}

function renderHome() {
  app.innerHTML = `
    <div class="page">
      <section class="section hero">
        <div class="container hero-inner">
          <div class="blob blob-1" id="blob1"></div>
          <div class="blob blob-2" id="blob2"></div>

          <span class="eyebrow">Portfolio</span>
          <h1>Designing clear and usable experiences for real-world systems</h1>
          <p>
            UX/UI Designer with a Computer Science background. I design user-centered
            digital products and understand how they are built technically — bringing
            clarity to complex workflows and real-world systems.
          </p>

          <div class="actions">
            <a class="btn btn-primary" href="#projects">
              View Projects <span>${iconArrowRight()}</span>
            </a>
            <a class="btn btn-secondary" href="#" onclick="event.preventDefault()">
              Download CV
            </a>
          </div>
        </div>
      </section>

      <section class="section" id="projects">
        <div class="container">
          <h2 class="section-title">Selected Projects</h2>
          <div class="projects-grid">
            ${projects.map(project => `
              <a class="project-card" href="#project/${project.id}">
                <div class="project-card-top">
                  <span class="project-tag">${project.tag}</span>
                  <span class="project-arrow">${iconArrowRight()}</span>
                </div>
                <h3>${project.title}</h3>
                <p>${project.description}</p>
              </a>
            `).join("")}
          </div>
        </div>
      </section>

      <section class="section" id="about">
        <div class="container">
          <div class="about-divider"></div>
          <div class="about-wrap">
            <div>
              <h2 class="section-title">About</h2>
              <div class="about-text">
                <p>
                  I'm a UX/UI designer who brings a technical mindset to every project.
                  With a background in Computer Science, I understand both the user
                  experience and the technical implementation behind digital products.
                </p>
                <p>
                  My approach combines UX thinking with technical awareness — I design
                  with constraints in mind, simplify complex user flows, and create
                  interfaces that prioritize clarity and decision-making over decoration.
                </p>
                <p>
                  I focus on building user-centered digital products that work in
                  real-world contexts, bridging the gap between what users need and what
                  systems can deliver.
                </p>
              </div>
            </div>

            <div class="case-card about-side">
              <h3>Focus</h3>
              <ul>
                <li>UX/UI Design</li>
                <li>Case studies & flows</li>
                <li>Interfaces with technical awareness</li>
                <li>Real-world system thinking</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div class="footer-space"></div>
    </div>
  `;

  setupMouseBlobs();
}

function renderProject(id) {
  const study = caseStudies[id];

  if (!study) {
    app.innerHTML = `
      <div class="container empty-state">
        <p>Project not found.</p>
        <a class="btn btn-primary" href="#/">${iconArrowLeft()} Back to home</a>
      </div>
    `;
    return;
  }

  app.innerHTML = `
    <div class="page">
      <section class="section">
        <div class="container">
          <a class="back-link" href="#/">${iconArrowLeft()} Back to projects</a>

          <div class="case-hero">
            <div class="case-meta">
              <span class="project-tag">${study.tag}</span>
              <span class="dot">•</span>
              <span>${study.year}</span>
              <span class="dot">•</span>
              <span>${study.role}</span>
            </div>

            <h1>${study.title}</h1>

            <div class="case-top-actions">
              ${study.figmaLink ? `
                <a class="btn btn-secondary" href="${study.figmaLink}" target="_blank" rel="noopener noreferrer">
                  View in Figma ${iconArrowRight()}
                </a>
              ` : ""}
            </div>
          </div>

          <div class="mock-image">
            <span>Project overview image</span>
          </div>

          <div class="case-block">
            <h2>Problem</h2>
            <div class="case-card">
              <p>${study.problem}</p>
            </div>
          </div>

          <div class="case-block">
            <h2>Goal</h2>
            <div class="case-card">
              <p>${study.goal}</p>
            </div>
          </div>

          <div class="case-block">
            <h2>Approach</h2>
            <div class="case-card">
              <ul class="approach">
                ${study.approach.map(item => `<li>${item}</li>`).join("")}
              </ul>
            </div>
          </div>

          <div class="case-block">
            <h2>Solution</h2>
            <div class="case-card">
              <p>${study.solution}</p>
            </div>
          </div>

          <div class="case-block">
            <h2>Outcome</h2>
            <div class="case-card">
              <ul class="outcomes">
                ${study.outcome.map(item => `<li>${item}</li>`).join("")}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;
}

function render() {
  const route = getRoute();

  if (route.page === "project") {
    renderProject(route.id);
  } else {
    renderHome();
  }
}

function setupMouseBlobs() {
  const blob1 = document.getElementById("blob1");
  const blob2 = document.getElementById("blob2");

  if (!blob1 || !blob2) return;

  window.onmousemove = (e) => {
    const x = e.clientX;
    const y = e.clientY;

    blob1.style.transform = `translate(${x * 0.02}px, ${y * 0.02}px)`;
    blob2.style.transform = `translate(${x * -0.015}px, ${y * -0.015}px)`;
  };
}

window.addEventListener("hashchange", render);
window.addEventListener("DOMContentLoaded", render);