const ideas = [
  "A local-first habit tracker that works fully offline and syncs later.",
  "A browser tool that turns messy notes into a 3-bullet standup update.",
  "An accessibility checker that scores any pasted HTML snippet.",
  "A campus event finder that maps clubs, talks, and food in one feed.",
  "A study timer that blocks distracting sites until the session ends.",
  "A recipe remixer that adapts meals to whatever is in your fridge.",
  "A neighborhood lost-and-found board with photo search.",
  "A carbon-aware commute planner that prefers lower-impact routes.",
  "A karaoke queue app so rooms can vote the next song fairly.",
  "A plant-care reminder that uses weather and last-watered dates.",
  "A resume rewriter that turns bullet points into STAR stories.",
  "A micro-grant matcher for student clubs and hackathon prizes.",
  "A live caption overlay for in-person talks using the device mic.",
  "A shared grocery list that splits costs as items get checked off.",
  "A mental-load dashboard for roommates: chores, bills, and leftovers.",
  "A spoiler-free recap generator for shows you paused mid-season.",
  "A park-finder that filters by shade, restrooms, and stroller access.",
  "A one-page portfolio builder from a GitHub username.",
  "A flashcard app that turns lecture slides into spaced-repetition decks.",
  "A noise-level map for cafes so people can pick a focus-friendly spot.",
];

const THEME_KEY = "theme";
const ideaEl = document.querySelector("#idea");
const generateBtn = document.querySelector("#generate-btn");
const themeToggle = document.querySelector("#theme-toggle");

let lastIndex = -1;

function pickRandomIdea() {
  if (ideas.length === 0) {
    return "Add some ideas to get started.";
  }

  let index = Math.floor(Math.random() * ideas.length);
  if (ideas.length > 1) {
    while (index === lastIndex) {
      index = Math.floor(Math.random() * ideas.length);
    }
  }

  lastIndex = index;
  return ideas[index];
}

function showIdea() {
  ideaEl.textContent = pickRandomIdea();
}

generateBtn.addEventListener("click", showIdea);

function isDarkMode() {
  return document.documentElement.classList.contains("dark");
}

function applyTheme(dark) {
  document.documentElement.classList.toggle("dark", dark);
  localStorage.setItem(THEME_KEY, dark ? "dark" : "light");
  themeToggle.setAttribute("aria-pressed", String(dark));
  themeToggle.setAttribute(
    "aria-label",
    dark ? "Switch to light mode" : "Switch to dark mode"
  );
}

function initTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  const dark = saved ? saved === "dark" : true;
  applyTheme(dark);
}

themeToggle.addEventListener("click", () => {
  applyTheme(!isDarkMode());
});

initTheme();
