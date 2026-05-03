# VU Quest Game 🎮

Candy Crush style MCQ game for Virtual University Pakistan students.

## Setup & Run

```bash
# 1. Install dependencies
npm install

# 2. Start the app
npm start

# 3. Open browser
http://localhost:3000
```

## Project Structure

```
src/
├── data/
│   ├── subjects.js      ← Subject list (MTH101, CS101, etc.)
│   └── data.js          ← ALL MCQ data (add new lectures here)
├── pages/
│   ├── Home.js          ← Subject selection screen
│   ├── Levels.js        ← Candy Crush level map
│   └── Quiz.js          ← Quiz screen with lives + progress
├── App.js               ← Router
└── App.css              ← Full game UI styling
```

## How to Add a New Lecture's MCQs

Open `src/data/data.js` and find the subject.
Replace the empty `questions: []` for that lecture with real MCQs.

### MCQ Format:
```js
{
  lecture: 2,
  title: "Sets and Functions",
  questions: [
    {
      q: "Your question here?",
      options: [
        "A. Option one",
        "B. Option two",
        "C. Option three",
        "D. Option four"
      ],
      answer: "A. Option one",   // must match exactly
      diff: "easy"               // easy | medium | hard
    },
    // ... more questions
  ]
}
```

## Game Rules
- 20 MCQs per lecture (recommended)
- 3 lives per quiz
- 70% score needed to pass & unlock next level
- Wrong answer = lose 1 life
- Best scores saved in localStorage

## Subjects & Levels
| Subject | Lectures |
|---------|----------|
| MTH101  | 45       |
| MTH202  | 45       |
| PHY101  | 45       |
| CS101   | 125      |
| PAK101  | 45       |
| ENG101  | 45       |
