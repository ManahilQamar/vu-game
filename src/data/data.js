// ============================================================
//  VU QUEST - MCQ DATA FILE
//  Structure: data[SUBJECT_ID][lectureIndex] = { lecture, questions[] }
//  To add a new lecture: paste its questions array in the right subject.
//  Lectures with no questions show "Coming Soon" in the level map.
// ============================================================

const data = {

  // ──────────────────────────────────────────
  //  MTH101  (45 lectures)
  // ──────────────────────────────────────────
  MTH101: [
    // ── Lecture 1 ── Coordinates, Graphs and Lines ──
    {
      lecture: 1,
      title: "Coordinates, Graphs & Lines",
      questions: [
        {
          q: "Calculus is primarily the study of:",
          options: [
            "A. Shapes and geometry",
            "B. Continuous rates of change of quantities",
            "C. Discrete mathematics",
            "D. Complex number theory"
          ],
          answer: "B. Continuous rates of change of quantities",
          diff: "easy"
        },
        {
          q: "Which of the following is the correct hierarchy from smallest to largest set of numbers?",
          options: [
            "A. Natural → Integer → Rational → Real",
            "B. Integer → Natural → Rational → Real",
            "C. Natural → Rational → Integer → Real",
            "D. Rational → Integer → Natural → Real"
          ],
          answer: "A. Natural → Integer → Rational → Real",
          diff: "medium"
        },
        {
          q: "The number zero (0) belongs to which set but NOT the natural numbers?",
          options: [
            "A. Rational numbers",
            "B. Irrational numbers",
            "C. Integers",
            "D. Complex numbers"
          ],
          answer: "C. Integers",
          diff: "easy"
        },
        {
          q: "Who demonstrated the existence of irrational numbers in the 5th century BC?",
          options: [
            "A. Pythagoras",
            "B. Descartes",
            "C. Hippasus of Metapontum",
            "D. Euclid"
          ],
          answer: "C. Hippasus of Metapontum",
          diff: "medium"
        },
        {
          q: "Pythagoras believed that all physical quantities could be expressed as:",
          options: [
            "A. Irrational numbers",
            "B. Ratios of integers",
            "C. Infinite decimals",
            "D. Negative numbers"
          ],
          answer: "B. Ratios of integers",
          diff: "medium"
        },
        {
          q: "Which number is proven to be irrational using a right triangle with base and height equal to 1?",
          options: [
            "A. √3",
            "B. π",
            "C. √2",
            "D. 1/3"
          ],
          answer: "C. √2",
          diff: "easy"
        },
        {
          q: "A rational number in decimal form will always:",
          options: [
            "A. Be a whole number",
            "B. End quickly or repeat in a pattern forever",
            "C. Be an infinite non-repeating decimal",
            "D. Be negative"
          ],
          answer: "B. End quickly or repeat in a pattern forever",
          diff: "medium"
        },
        {
          q: "The concept of the coordinate line (analytic geometry) was developed by:",
          options: [
            "A. Pythagoras in ancient Greece",
            "B. Hippasus in 5th century BC",
            "C. Descartes in the 1600s",
            "D. Newton in the 1700s"
          ],
          answer: "C. Descartes in the 1600s",
          diff: "easy"
        },
        {
          q: "On a standard coordinate line, the positive direction is:",
          options: [
            "A. Upward",
            "B. Downward",
            "C. To the left",
            "D. To the right"
          ],
          answer: "D. To the right",
          diff: "easy"
        },
        {
          q: "According to Order Properties, if b − a is positive, then:",
          options: [
            "A. a > b",
            "B. b > a",
            "C. a = b",
            "D. b < a"
          ],
          answer: "B. b > a",
          diff: "medium"
        },
        {
          q: "The expression a < b < c means:",
          options: [
            "A. a < b only",
            "B. b < c only",
            "C. a < b AND b < c",
            "D. a < c only"
          ],
          answer: "C. a < b AND b < c",
          diff: "easy"
        },
        {
          q: "According to Theorem 1.1.1, when you multiply both sides of an inequality by a NEGATIVE number:",
          options: [
            "A. The inequality direction stays the same",
            "B. The inequality direction reverses",
            "C. Both sides become equal",
            "D. The inequality becomes undefined"
          ],
          answer: "B. The inequality direction reverses",
          diff: "hard"
        },
        {
          q: "The closed interval [a, b] is defined as:",
          options: [
            "A. {x : a < x < b}",
            "B. {x : a ≤ x < b}",
            "C. {x : a < x ≤ b}",
            "D. {x : a ≤ x ≤ b}"
          ],
          answer: "D. {x : a ≤ x ≤ b}",
          diff: "medium"
        },
        {
          q: "The open interval (a, b) is defined as:",
          options: [
            "A. {x : a ≤ x ≤ b}",
            "B. {x : a < x < b}",
            "C. {x : a ≤ x < b}",
            "D. {x : a < x ≤ b}"
          ],
          answer: "B. {x : a < x < b}",
          diff: "easy"
        },
        {
          q: "A half-open interval [a, b) includes:",
          options: [
            "A. Both endpoints a and b",
            "B. Neither endpoint",
            "C. Only endpoint a (not b)",
            "D. Only endpoint b (not a)"
          ],
          answer: "C. Only endpoint a (not b)",
          diff: "medium"
        },
        {
          q: "The interval (−∞, b] is classified as:",
          options: [
            "A. Finite and open",
            "B. Infinite and open",
            "C. Infinite and closed",
            "D. Finite and closed"
          ],
          answer: "C. Infinite and closed",
          diff: "hard"
        },
        {
          q: "What does A ∩ B represent in set notation?",
          options: [
            "A. All elements in A or B",
            "B. Elements in A but not B",
            "C. Elements that are in both A and B",
            "D. Elements in B but not A"
          ],
          answer: "C. Elements that are in both A and B",
          diff: "medium"
        },
        {
          q: "When solving an inequality, multiplying both sides by zero is:",
          options: [
            "A. Always allowed",
            "B. Not allowed as it can change the solution set",
            "C. Allowed only for positive values",
            "D. Allowed only if x is unknown"
          ],
          answer: "B. Not allowed as it can change the solution set",
          diff: "hard"
        },
        {
          q: "A nonnegative number is defined as a number that satisfies:",
          options: [
            "A. a > 0",
            "B. a < 0",
            "C. a ≥ 0",
            "D. a ≤ 0"
          ],
          answer: "C. a ≥ 0",
          diff: "medium"
        },
        {
          q: "If a < b and c < d, then according to Theorem 1.1.1 (property d):",
          options: [
            "A. a − c < b − d",
            "B. a + c < b + d",
            "C. ac < bd",
            "D. a/c < b/d"
          ],
          answer: "B. a + c < b + d",
          diff: "hard"
        }
      ]
    },

    // ── Lectures 2-45: Add questions here as handouts are received ──
    ...Array.from({ length: 44 }, (_, i) => ({
      lecture: i + 2,
      title: `Lecture ${i + 2}`,
      questions: [] // Empty = "Coming Soon" on map
    }))
  ],

  // ──────────────────────────────────────────
  //  MTH202  (45 lectures)
  // ──────────────────────────────────────────
  MTH202: Array.from({ length: 45 }, (_, i) => ({
    lecture: i + 1,
    title: `Lecture ${i + 1}`,
    questions: []
  })),

  // ──────────────────────────────────────────
  //  PHY101  (45 lectures)
  // ──────────────────────────────────────────
  PHY101: Array.from({ length: 45 }, (_, i) => ({
    lecture: i + 1,
    title: `Lecture ${i + 1}`,
    questions: []
  })),

  // ──────────────────────────────────────────
  //  CS101  (125 lectures)
  // ──────────────────────────────────────────
  CS101: Array.from({ length: 125 }, (_, i) => ({
    lecture: i + 1,
    title: `Lecture ${i + 1}`,
    questions: []
  })),

  // ──────────────────────────────────────────
  //  PAK101  (45 lectures)
  // ──────────────────────────────────────────
  PAK101: Array.from({ length: 45 }, (_, i) => ({
    lecture: i + 1,
    title: `Lecture ${i + 1}`,
    questions: []
  })),

  // ──────────────────────────────────────────
  //  ENG101  (45 lectures)
  // ──────────────────────────────────────────
  ENG101: Array.from({ length: 45 }, (_, i) => ({
    lecture: i + 1,
    title: `Lecture ${i + 1}`,
    questions: []
  })),
};

export default data;
