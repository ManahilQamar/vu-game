const mcqs = {

  // ─────────────────────────────────────────
  //  MTH101
  // ─────────────────────────────────────────
  MTH101: {
    1: {
      title: 'Coordinates, Graphs & Lines',
      summary: `**Key Topics Covered:**
- Number systems and their hierarchy
- Irrational numbers and their history
- Coordinate line and analytic geometry
- Order properties and inequalities
- Intervals and set notation

**Important Concepts:**

**Number Systems Hierarchy:**
Natural numbers are the smallest set, followed by Integers (which include zero and negatives), then Rational numbers (fractions/ratios), and finally Real numbers (which include both rational and irrational).

**Irrational Numbers:**
Hippasus of Metapontum (5th century BC) proved that √2 cannot be expressed as a ratio of integers — using a right triangle with base and height = 1. Rational numbers always end or repeat in decimal form. Irrational numbers like π and √2 are infinite non-repeating decimals.

**Coordinate Line:**
Descartes developed analytic geometry in the 1600s. On a standard coordinate line, the positive direction is to the right. If b − a is positive, then b > a.

**Intervals:**
- Closed [a, b] = includes both endpoints (a ≤ x ≤ b)
- Open (a, b) = excludes both endpoints (a < x < b)
- Half-open [a, b) = includes a, excludes b
- (−∞, b] = infinite and closed

**Inequality Rules:**
- Multiplying by a NEGATIVE number REVERSES the inequality
- Multiplying by zero is NOT allowed
- If a < b and c < d, then a + c < b + d

**Key Facts to Remember:**
- Zero belongs to Integers but NOT Natural numbers
- Pythagoras believed all quantities were ratios of integers — Hippasus proved him wrong
- A ∩ B = elements in BOTH A and B
- A nonnegative number: a ≥ 0
- a < b < c means a < b AND b < c

**Quick Revision Points:**
- Natural ⊂ Integer ⊂ Rational ⊂ Real
- √2 is irrational (right triangle with sides 1, 1, √2)
- Positive direction on number line = right
- Multiply inequality by negative → direction reverses
- [a,b] includes endpoints, (a,b) excludes endpoints
- A ∩ B = intersection = common elements`,
      questions: [
        {
          q: 'Which hierarchy from smallest to largest set is correct?',
          options: ['A. Natural → Integer → Rational → Real', 'B. Integer → Natural → Rational → Real', 'C. Natural → Rational → Integer → Real', 'D. Rational → Integer → Natural → Real'],
          answer: 'A. Natural → Integer → Rational → Real',
          diff: 'medium',
        },
        {
          q: 'The number zero (0) belongs to which set but NOT to natural numbers?',
          options: ['A. Rational numbers', 'B. Irrational numbers', 'C. Integers', 'D. Complex numbers'],
          answer: 'C. Integers',
          diff: 'easy',
        },
        {
          q: 'Who demonstrated the existence of irrational numbers in the 5th century BC?',
          options: ['A. Pythagoras', 'B. Descartes', 'C. Hippasus of Metapontum', 'D. Euclid'],
          answer: 'C. Hippasus of Metapontum',
          diff: 'medium',
        },
        {
          q: 'Pythagoras believed all physical quantities could be expressed as:',
          options: ['A. Irrational numbers', 'B. Ratios of integers', 'C. Infinite decimals', 'D. Negative numbers'],
          answer: 'B. Ratios of integers',
          diff: 'medium',
        },
        {
          q: 'Which number is proven irrational by a right triangle with base and height equal to 1?',
          options: ['A. √3', 'B. π', 'C. √2', 'D. 1/3'],
          answer: 'C. √2',
          diff: 'easy',
        },
        {
          q: 'A rational number in decimal form will always:',
          options: ['A. Be a whole number', 'B. End or repeat in a pattern forever', 'C. Be an infinite non-repeating decimal', 'D. Be negative'],
          answer: 'B. End or repeat in a pattern forever',
          diff: 'medium',
        },
        {
          q: 'Analytic geometry and the coordinate line were developed by:',
          options: ['A. Pythagoras in ancient Greece', 'B. Hippasus in 5th century BC', 'C. Descartes in the 1600s', 'D. Newton in the 1700s'],
          answer: 'C. Descartes in the 1600s',
          diff: 'easy',
        },
        {
          q: 'On a standard coordinate line, the positive direction is:',
          options: ['A. Upward', 'B. Downward', 'C. To the left', 'D. To the right'],
          answer: 'D. To the right',
          diff: 'easy',
        },
        {
          q: 'According to Order Properties, if b − a is positive, then:',
          options: ['A. a > b', 'B. b > a', 'C. a = b', 'D. b < a'],
          answer: 'B. b > a',
          diff: 'medium',
        },
        {
          q: 'The expression a < b < c means:',
          options: ['A. a < b only', 'B. b < c only', 'C. a < b AND b < c', 'D. a < c only'],
          answer: 'C. a < b AND b < c',
          diff: 'easy',
        },
        {
          q: 'When multiplying both sides of an inequality by a NEGATIVE number, the direction:',
          options: ['A. Stays the same', 'B. Reverses', 'C. Both sides become equal', 'D. Becomes undefined'],
          answer: 'B. Reverses',
          diff: 'hard',
        },
        {
          q: 'The closed interval [a, b] is defined as:',
          options: ['A. {x : a < x < b}', 'B. {x : a ≤ x < b}', 'C. {x : a < x ≤ b}', 'D. {x : a ≤ x ≤ b}'],
          answer: 'D. {x : a ≤ x ≤ b}',
          diff: 'medium',
        },
        {
          q: 'The open interval (a, b) is defined as:',
          options: ['A. {x : a ≤ x ≤ b}', 'B. {x : a < x < b}', 'C. {x : a ≤ x < b}', 'D. {x : a < x ≤ b}'],
          answer: 'B. {x : a < x < b}',
          diff: 'easy',
        },
        {
          q: 'The half-open interval [a, b) includes:',
          options: ['A. Both endpoints', 'B. Neither endpoint', 'C. Only endpoint a (not b)', 'D. Only endpoint b (not a)'],
          answer: 'C. Only endpoint a (not b)',
          diff: 'medium',
        },
        {
          q: 'The interval (−∞, b] is classified as:',
          options: ['A. Finite and open', 'B. Infinite and open', 'C. Infinite and closed', 'D. Finite and closed'],
          answer: 'C. Infinite and closed',
          diff: 'hard',
        },
        {
          q: 'What does A ∩ B represent in set notation?',
          options: ['A. All elements in A or B', 'B. Elements in A but not B', 'C. Elements in both A and B', 'D. Elements in B but not A'],
          answer: 'C. Elements in both A and B',
          diff: 'medium',
        },
        {
          q: 'When solving an inequality, multiplying both sides by zero is:',
          options: ['A. Always allowed', 'B. Not allowed — it can change the solution set', 'C. Allowed for positive values only', 'D. Allowed only if x is unknown'],
          answer: 'B. Not allowed — it can change the solution set',
          diff: 'hard',
        },
        {
          q: 'A nonnegative number is one that satisfies:',
          options: ['A. a > 0', 'B. a < 0', 'C. a ≥ 0', 'D. a ≤ 0'],
          answer: 'C. a ≥ 0',
          diff: 'medium',
        },
        {
          q: 'If a < b and c < d, by Theorem 1.1.1 property (d):',
          options: ['A. a − c < b − d', 'B. a + c < b + d', 'C. ac < bd', 'D. a/c < b/d'],
          answer: 'B. a + c < b + d',
          diff: 'hard',
        },
      ],
    },


  // lecture 2
  2: {
    title: 'Absolute Values',
    summary: `**Key Topics Covered:**
- Definition of Absolute Value
- Properties of Absolute Value
- Relationship between Square Roots and Absolute Values
- Geometric Interpretation of Absolute Value
- Triangle Inequality

**Important Concepts:**

**Absolute Value Definition:**
The absolute value of a real number a, written as |a|, is:
- |a| = a, if a ≥ 0 (non-negative)
- |a| = −a, if a < 0 (negative)
So |a| is ALWAYS non-negative for all values of a.

**Key Note on +a and −a:**
Do NOT assume +a is always positive and −a is always negative. If a itself is negative, then −a is positive and +a is negative. This is a common mistake students make.

**Square Root and Absolute Value:**
- √(a²) = |a| for ALL real numbers (NOT just a = a)
- Writing √(a²) = a is a common ERROR when a is negative
- Example: if a = −4, then √(a²) = √16 = 4 = |−4| ✅ (not −4)

**Properties of Absolute Value:**
- |−a| = |a| (a number and its negative have the same absolute value)
- |ab| = |a| × |b| (absolute value of product = product of absolute values)
- |a/b| = |a|/|b| (absolute value of ratio = ratio of absolute values)
- |aⁿ| = |a|ⁿ

**Distance Formula:**
Distance d between points A(a) and B(b) on a coordinate line:
d = |b − a|
- |x − a| = distance between x and a
- |x + a| = distance between x and −a
- |x| = distance between x and origin

**Solving Absolute Value Equations:**
|x − 3| = 4 means: x − 3 = 4 OR x − 3 = −4 → x = 7 or x = −1

**Solving Absolute Value Inequalities:**
- |x − a| < k → −k < x − a < k (between)
- |x − a| ≥ k → x − a ≤ −k OR x − a ≥ k (outside)

**Triangle Inequality:**
For any real numbers a and b: |a + b| ≤ |a| + |b|
This is one of the most important inequalities in mathematics. It is related to the famous Heisenberg Uncertainty Principle in Quantum Physics.

**Key Facts to Remember:**
- |a| ≥ 0 always — absolute value is NEVER negative
- −|a| ≤ a ≤ |a| always holds
- √(a²) = |a|, NOT a (common exam mistake)
- Triangle inequality: |a + b| ≤ |a| + |b|
- Distance between two points = |b − a|

**Quick Revision Points:**
- |a| = a if a ≥ 0, |a| = −a if a < 0
- Zero is non-negative (neither positive nor negative)
- |−a| = |a| always
- |ab| = |a||b| always
- √(a²) = |a| for all real a
- |x − 3| = 4 → x = 7 or x = −1
- |x − 3| < 4 → −1 < x < 7 → interval (−1, 7)
- Triangle inequality: |a + b| ≤ |a| + |b|`,
    questions: [
      {
        q: 'The absolute value of a real number a is defined as:',
        options: [
          'A. Always equal to a',
          'B. a if a ≥ 0, and −a if a < 0',
          'C. Always positive',
          'D. −a for all values of a',
        ],
        answer: 'B. a if a ≥ 0, and −a if a < 0',
        diff: 'easy',
      },
      {
        q: 'The absolute value |a| is always:',
        options: [
          'A. Positive',
          'B. Negative',
          'C. Non-negative',
          'D. Greater than 1',
        ],
        answer: 'C. Non-negative',
        diff: 'easy',
      },
      {
        q: 'Zero is considered:',
        options: [
          'A. Positive',
          'B. Negative',
          'C. Both positive and negative',
          'D. Non-negative (neither positive nor negative)',
        ],
        answer: 'D. Non-negative (neither positive nor negative)',
        diff: 'easy',
      },
      {
        q: 'If a is a negative number, then −a is:',
        options: [
          'A. Negative',
          'B. Positive',
          'C. Zero',
          'D. Cannot be determined',
        ],
        answer: 'B. Positive',
        diff: 'medium',
      },
      {
        q: 'Which of the following is a correct statement?',
        options: [
          'A. +a is always positive',
          'B. −a is always negative',
          'C. If a is negative, then −a is positive',
          'D. |a| can be negative',
        ],
        answer: 'C. If a is negative, then −a is positive',
        diff: 'medium',
      },
      {
        q: 'What is |−4/7|?',
        options: [
          'A. −4/7',
          'B. 4/7',
          'C. 7/4',
          'D. −7/4',
        ],
        answer: 'B. 4/7',
        diff: 'easy',
      },
      {
        q: 'For any real number a, √(a²) equals:',
        options: [
          'A. a',
          'B. −a',
          'C. |a|',
          'D. a²',
        ],
        answer: 'C. |a|',
        diff: 'medium',
      },
      {
        q: 'If a = −4, what is √(a²)?',
        options: [
          'A. −4',
          'B. 4',
          'C. 16',
          'D. −16',
        ],
        answer: 'B. 4',
        diff: 'medium',
      },
      {
        q: 'Which of the following is a COMMON ERROR in mathematics?',
        options: [
          'A. √(a²) = |a|',
          'B. √(a²) = a (for all values of a)',
          'C. |ab| = |a||b|',
          'D. |−a| = |a|',
        ],
        answer: 'B. √(a²) = a (for all values of a)',
        diff: 'medium',
      },
      {
        q: 'Which property states that |−a| = |a|?',
        options: [
          'A. A number and its negative have the same absolute value',
          'B. Absolute value of a product',
          'C. Triangle inequality',
          'D. Distance formula',
        ],
        answer: 'A. A number and its negative have the same absolute value',
        diff: 'easy',
      },
      {
        q: '|ab| equals:',
        options: [
          'A. |a| + |b|',
          'B. |a| − |b|',
          'C. |a| × |b|',
          'D. |a| / |b|',
        ],
        answer: 'C. |a| × |b|',
        diff: 'easy',
      },
      {
        q: '|(2)(−3)| equals:',
        options: [
          'A. −6',
          'B. 6',
          'C. 1',
          'D. 5',
        ],
        answer: 'B. 6',
        diff: 'easy',
      },
      {
        q: 'The distance between points A(a) and B(b) on a coordinate line is:',
        options: [
          'A. a − b',
          'B. b − a',
          'C. |b − a|',
          'D. |a + b|',
        ],
        answer: 'C. |b − a|',
        diff: 'medium',
      },
      {
        q: '|x − a| on a coordinate line represents:',
        options: [
          'A. The distance between x and origin',
          'B. The distance between x and a',
          'C. The distance between x and −a',
          'D. The value of x',
        ],
        answer: 'B. The distance between x and a',
        diff: 'medium',
      },
      {
        q: '|x| on a coordinate line represents:',
        options: [
          'A. The distance between x and 1',
          'B. The distance between x and −1',
          'C. The distance between x and the origin',
          'D. The value of −x',
        ],
        answer: 'C. The distance between x and the origin',
        diff: 'easy',
      },
      {
        q: 'Solve |x − 3| = 4. What are the values of x?',
        options: [
          'A. x = 7 only',
          'B. x = −1 only',
          'C. x = 7 or x = −1',
          'D. x = 1 or x = −7',
        ],
        answer: 'C. x = 7 or x = −1',
        diff: 'medium',
      },
      {
        q: 'The inequality |x − 3| < 4 is equivalent to:',
        options: [
          'A. x − 3 < 4 only',
          'B. −4 < x − 3 < 4',
          'C. x − 3 > −4 only',
          'D. x − 3 < −4 or x − 3 > 4',
        ],
        answer: 'B. −4 < x − 3 < 4',
        diff: 'hard',
      },
      {
        q: 'Solving |x − 3| < 4 gives the solution:',
        options: [
          'A. (−∞, −1) ∪ (7, +∞)',
          'B. (−1, 7)',
          'C. [−1, 7]',
          'D. x > 7',
        ],
        answer: 'B. (−1, 7)',
        diff: 'hard',
      },
      {
        q: 'The Triangle Inequality states that for real numbers a and b:',
        options: [
          'A. |a + b| = |a| + |b|',
          'B. |a + b| ≥ |a| + |b|',
          'C. |a + b| ≤ |a| + |b|',
          'D. |a + b| < |a| − |b|',
        ],
        answer: 'C. |a + b| ≤ |a| + |b|',
        diff: 'medium',
      },
      {
        q: 'The Triangle Inequality is related to which famous principle in physics?',
        options: [
          'A. Newton\'s Law of Motion',
          'B. Heisenberg Uncertainty Principle in Quantum Physics',
          'C. Einstein\'s Theory of Relativity',
          'D. Archimedes\' Principle',
        ],
        answer: 'B. Heisenberg Uncertainty Principle in Quantum Physics',
        diff: 'hard',
      },
      {
        q: 'For any real number a, which inequality always holds?',
        options: [
          'A. a ≤ |a|',
          'B. −|a| ≤ a ≤ |a|',
          'C. a ≥ |a|',
          'D. −a ≤ |a|',
        ],
        answer: 'B. −|a| ≤ a ≤ |a|',
        diff: 'hard',
      },
      {
        q: '|5/4| equals:',
        options: [
          'A. −5/4',
          'B. 4/5',
          'C. 5/4',
          'D. −4/5',
        ],
        answer: 'C. 5/4',
        diff: 'easy',
      },
      {
        q: 'If |aⁿ| = |a|ⁿ, then |2³| equals:',
        options: [
          'A. 6',
          'B. 9',
          'C. 8',
          'D. −8',
        ],
        answer: 'C. 8',
        diff: 'medium',
      },
    ],
  },


  // lecture 3
  3: {
    title: 'Coordinate Planes and Graphs',
    summary: `**Key Topics Covered:**
- Coordinate plane (Cartesian plane)
- Ordered pairs (x, y)
- Plotting points
- Quadrants
- Graph of equations
- Intercepts (x-intercept, y-intercept)
- Symmetry (x-axis, y-axis, origin)

**Important Concepts:**

**Coordinate Plane:**
A coordinate plane is formed by two perpendicular lines (x-axis and y-axis) intersecting at 90°. It is also called the rectangular coordinate system.

**Ordered Pair:**
A point in the plane is represented as (x, y):
- x = horizontal position
- y = vertical position

Example: (4, 3)

**Quadrants:**
The plane is divided into 4 quadrants:
- Quadrant I: (+, +)
- Quadrant II: (−, +)
- Quadrant III: (−, −)
- Quadrant IV: (+, −)

**Graph of Equation:**
Graph = set of all points that satisfy the equation.
Example: y = x² gives a curve (parabola).

**Intercepts:**
- x-intercept → where graph cuts x-axis → (a, 0)
- y-intercept → where graph cuts y-axis → (0, b)

**Symmetry:**
- About x-axis → (x, y) ↔ (x, −y)
- About y-axis → (x, y) ↔ (−x, y)
- About origin → (x, y) ↔ (−x, −y)

**Key Facts to Remember:**
- Plane = two perpendicular number lines
- Graph = all solutions of equation
- Intercepts help in sketching graph
- Symmetry reduces calculation work

**Quick Revision Points:**
- (x, y) → location of point
- x-axis horizontal, y-axis vertical
- Quadrants numbered anti-clockwise
- x-intercept → y = 0
- y-intercept → x = 0
- Symmetry helps draw graph faster`,

    questions: [
      {
        q: 'A coordinate plane is formed by:',
        options: [
          'A. Two parallel lines',
          'B. Two perpendicular lines',
          'C. Three axes',
          'D. One number line',
        ],
        answer: 'B. Two perpendicular lines',
        diff: 'easy',
      },
      {
        q: 'An ordered pair (x, y) represents:',
        options: [
          'A. A line',
          'B. A point in plane',
          'C. A graph',
          'D. A function',
        ],
        answer: 'B. A point in plane',
        diff: 'easy',
      },
      {
        q: 'In the pair (4, 3), the value 4 represents:',
        options: [
          'A. y-coordinate',
          'B. x-coordinate',
          'C. Origin',
          'D. Axis',
        ],
        answer: 'B. x-coordinate',
        diff: 'easy',
      },
      {
        q: 'Which quadrant contains the point (−3, 5)?',
        options: [
          'A. Quadrant I',
          'B. Quadrant II',
          'C. Quadrant III',
          'D. Quadrant IV',
        ],
        answer: 'B. Quadrant II',
        diff: 'medium',
      },
      {
        q: 'Quadrants are numbered:',
        options: [
          'A. Clockwise',
          'B. Anti-clockwise',
          'C. Randomly',
          'D. Left to right',
        ],
        answer: 'B. Anti-clockwise',
        diff: 'easy',
      },
      {
        q: 'Graph of an equation represents:',
        options: [
          'A. Random points',
          'B. All solutions of equation',
          'C. Only one point',
          'D. Only x values',
        ],
        answer: 'B. All solutions of equation',
        diff: 'easy',
      },
      {
        q: 'The x-intercept occurs when:',
        options: [
          'A. x = 0',
          'B. y = 0',
          'C. x = y',
          'D. x = 1',
        ],
        answer: 'B. y = 0',
        diff: 'medium',
      },
      {
        q: 'The y-intercept occurs when:',
        options: [
          'A. y = 0',
          'B. x = 0',
          'C. x = y',
          'D. y = 1',
        ],
        answer: 'B. x = 0',
        diff: 'medium',
      },
      {
        q: 'Point symmetric to (x, y) about x-axis is:',
        options: [
          'A. (−x, y)',
          'B. (x, −y)',
          'C. (−x, −y)',
          'D. (y, x)',
        ],
        answer: 'B. (x, −y)',
        diff: 'medium',
      },
      {
        q: 'Point symmetric to (x, y) about y-axis is:',
        options: [
          'A. (−x, y)',
          'B. (x, −y)',
          'C. (−x, −y)',
          'D. (y, x)',
        ],
        answer: 'A. (−x, y)',
        diff: 'medium',
      },
      {
        q: 'Point symmetric to (x, y) about origin is:',
        options: [
          'A. (x, y)',
          'B. (−x, y)',
          'C. (x, −y)',
          'D. (−x, −y)',
        ],
        answer: 'D. (−x, −y)',
        diff: 'medium',
      },
      {
        q: 'Which of the following lies in Quadrant III?',
        options: [
          'A. (2, 3)',
          'B. (−2, 3)',
          'C. (−2, −3)',
          'D. (2, −3)',
        ],
        answer: 'C. (−2, −3)',
        diff: 'easy',
      },
      {
        q: 'The origin is:',
        options: [
          'A. (1,1)',
          'B. (0,1)',
          'C. (1,0)',
          'D. (0,0)',
        ],
        answer: 'D. (0,0)',
        diff: 'easy',
      },
      {
        q: 'The graph of y = x² is:',
        options: [
          'A. Straight line',
          'B. Circle',
          'C. Parabola',
          'D. Triangle',
        ],
        answer: 'C. Parabola',
        diff: 'medium',
      },
      {
        q: 'Which axis is horizontal?',
        options: [
          'A. y-axis',
          'B. z-axis',
          'C. x-axis',
          'D. none',
        ],
        answer: 'C. x-axis',
        diff: 'easy',
      },
      {
        q: 'Which axis is vertical?',
        options: [
          'A. x-axis',
          'B. y-axis',
          'C. z-axis',
          'D. none',
        ],
        answer: 'B. y-axis',
        diff: 'easy',
      },
      {
        q: 'Symmetry helps in graphing because:',
        options: [
          'A. It increases calculation',
          'B. It reduces work',
          'C. It removes points',
          'D. It changes graph',
        ],
        answer: 'B. It reduces work',
        diff: 'medium',
      },
      {
        q: 'If a graph is symmetric about y-axis, we only need:',
        options: [
          'A. Negative x values',
          'B. Positive x values',
          'C. Only y values',
          'D. No values',
        ],
        answer: 'B. Positive x values',
        diff: 'hard',
      },
      {
        q: 'If (3,2) satisfies an equation, it means:',
        options: [
          'A. Equation is false',
          'B. It is a solution',
          'C. It is random',
          'D. It is invalid',
        ],
        answer: 'B. It is a solution',
        diff: 'easy',
      },
    ],
  },


  // lecture 4
  4: {
    title: 'Lines and Definition of Slope',
    summary: `**Key Topics Covered:**
- Definition of slope (rise/run)
- Types of slope (positive, negative, zero, undefined)
- Angle of inclination
- Parallel and perpendicular lines
- Equation of lines (point-slope, slope-intercept)
- General form of line

**Important Concepts:**

**Slope (m):**
Slope measures steepness of a line:
m = (y₂ − y₁) / (x₂ − x₁)

- Rise = change in y
- Run = change in x

**Types of Slope:**
- Positive → line goes upward (↗)
- Negative → line goes downward (↘)
- Zero → horizontal line
- Undefined → vertical line

**Angle of Inclination:**
m = tan(θ)

- θ is angle with positive x-axis
- 0 ≤ θ ≤ π

**Parallel Lines:**
m₁ = m₂

**Perpendicular Lines:**
m₁ × m₂ = −1  
(slopes are negative reciprocals)

**Equations of Lines:**

1. Point-Slope Form:
y − y₁ = m(x − x₁)

2. Slope-Intercept Form:
y = mx + b  
(b = y-intercept)

3. General Form:
Ax + By + C = 0

**Special Lines:**
- Vertical line → x = a
- Horizontal line → y = b

**Key Facts to Remember:**
- Vertical line slope = undefined
- Horizontal line slope = 0
- Parallel → same slope
- Perpendicular → negative reciprocal
- Straight line = first degree equation

**Quick Revision Points:**
- m = rise/run
- y = mx + b most important form
- x = a → vertical line
- y = b → horizontal line
- m₁m₂ = -1 → perpendicular lines`,

    questions: [
      {
        q: 'Slope of a line is defined as:',
        options: [
          'A. run/rise',
          'B. rise/run',
          'C. x/y',
          'D. y/x',
        ],
        answer: 'B. rise/run',
        diff: 'easy',
      },
      {
        q: 'Formula for slope between two points is:',
        options: [
          'A. (x₂ − x₁)/(y₂ − y₁)',
          'B. (y₂ − y₁)/(x₂ − x₁)',
          'C. x₁ + y₁',
          'D. x₂ + y₂',
        ],
        answer: 'B. (y₂ − y₁)/(x₂ − x₁)',
        diff: 'easy',
      },
      {
        q: 'Slope of a vertical line is:',
        options: [
          'A. 0',
          'B. 1',
          'C. Undefined',
          'D. Infinite',
        ],
        answer: 'C. Undefined',
        diff: 'easy',
      },
      {
        q: 'Slope of a horizontal line is:',
        options: [
          'A. 0',
          'B. 1',
          'C. Undefined',
          'D. Infinite',
        ],
        answer: 'A. 0',
        diff: 'easy',
      },
      {
        q: 'A positive slope means:',
        options: [
          'A. Line goes down',
          'B. Line goes up',
          'C. Line is vertical',
          'D. Line is flat',
        ],
        answer: 'B. Line goes up',
        diff: 'easy',
      },
      {
        q: 'Parallel lines have:',
        options: [
          'A. Same slope',
          'B. Opposite slope',
          'C. Zero slope',
          'D. Undefined slope',
        ],
        answer: 'A. Same slope',
        diff: 'medium',
      },
      {
        q: 'Perpendicular lines satisfy:',
        options: [
          'A. m₁ = m₂',
          'B. m₁ + m₂ = 0',
          'C. m₁ × m₂ = −1',
          'D. m₁/m₂ = 1',
        ],
        answer: 'C. m₁ × m₂ = −1',
        diff: 'medium',
      },
      {
        q: 'Negative reciprocal of 2 is:',
        options: [
          'A. 1/2',
          'B. -1/2',
          'C. -2',
          'D. 2',
        ],
        answer: 'B. -1/2',
        diff: 'medium',
      },
      {
        q: 'Slope-intercept form of line is:',
        options: [
          'A. Ax + By + C = 0',
          'B. y = mx + b',
          'C. x = a',
          'D. y = a',
        ],
        answer: 'B. y = mx + b',
        diff: 'easy',
      },
      {
        q: 'In y = mx + b, b represents:',
        options: [
          'A. slope',
          'B. x-intercept',
          'C. y-intercept',
          'D. origin',
        ],
        answer: 'C. y-intercept',
        diff: 'easy',
      },
      {
        q: 'Equation of vertical line is:',
        options: [
          'A. y = b',
          'B. x = a',
          'C. y = mx + b',
          'D. Ax + By = 0',
        ],
        answer: 'B. x = a',
        diff: 'easy',
      },
      {
        q: 'Equation of horizontal line is:',
        options: [
          'A. x = a',
          'B. y = b',
          'C. y = mx + b',
          'D. Ax + By = 0',
        ],
        answer: 'B. y = b',
        diff: 'easy',
      },
      {
        q: 'Point-slope form is:',
        options: [
          'A. y = mx + b',
          'B. Ax + By + C = 0',
          'C. y − y₁ = m(x − x₁)',
          'D. x = a',
        ],
        answer: 'C. y − y₁ = m(x − x₁)',
        diff: 'medium',
      },
      {
        q: 'General form of line is:',
        options: [
          'A. y = mx + b',
          'B. x = a',
          'C. Ax + By + C = 0',
          'D. y = a',
        ],
        answer: 'C. Ax + By + C = 0',
        diff: 'medium',
      },
      {
        q: 'If slope m = 1, angle of inclination is:',
        options: [
          'A. π/2',
          'B. π/4',
          'C. π',
          'D. 0',
        ],
        answer: 'B. π/4',
        diff: 'hard',
      },
      {
        q: 'If slope m = -1, angle of inclination is:',
        options: [
          'A. π/4',
          'B. π/2',
          'C. 3π/4',
          'D. π',
        ],
        answer: 'C. 3π/4',
        diff: 'hard',
      },
      {
        q: 'Slope represents:',
        options: [
          'A. Area',
          'B. Rate of change',
          'C. Distance',
          'D. Volume',
        ],
        answer: 'B. Rate of change',
        diff: 'medium',
      },
      {
        q: 'If two lines are perpendicular, their slopes are:',
        options: [
          'A. Equal',
          'B. Opposite',
          'C. Negative reciprocals',
          'D. Zero',
        ],
        answer: 'C. Negative reciprocals',
        diff: 'easy',
      },
      {
        q: 'Line passing through (2,3) with slope m is given by:',
        options: [
          'A. y = mx + b',
          'B. y − 3 = m(x − 2)',
          'C. x = 2',
          'D. y = 3',
        ],
        answer: 'B. y − 3 = m(x − 2)',
        diff: 'medium',
      },
    ],
  },


  // lecture 5
  5: {
    title: 'Distance, Circles, and Quadratic Equations',
    summary: `**Key Topics Covered:**
- Distance between two points
- Midpoint formula
- Equation of circle (standard + general form)
- Finding center and radius
- Degenerate cases of circle
- Quadratic equations and parabolas
- Vertex and intercepts

**Important Concepts:**

**Distance Formula:**
Distance between two points:
d = √[(x₂ − x₁)² + (y₂ − y₁)²]

- Based on Pythagoras theorem
- Works for any two points in plane

**Midpoint Formula:**
Midpoint of two points:
M = ((x₁ + x₂)/2 , (y₁ + y₂)/2)

- Simply average of coordinates

**Circle (Standard Form):**
(x − x₀)² + (y − y₀)² = r²

- (x₀, y₀) = center
- r = radius

**General Form of Circle:**
x² + y² + Dx + Ey + F = 0

- Convert to standard form using completing square

**Degenerate Cases:**
- r² > 0 → Circle
- r² = 0 → Point
- r² < 0 → No graph

**Parabola (Quadratic Equation):**
y = ax² + bx + c

- Graph is a parabola

**Shape of Parabola:**
- a > 0 → opens upward
- a < 0 → opens downward

**Vertex Formula:**
x = -b / 2a

- Gives turning point of parabola

**Intercepts:**
- y-intercept → x = 0
- x-intercept → y = 0

**Key Facts to Remember:**
- Distance uses square root formula
- Midpoint = average
- Circle needs center + radius
- Quadratic → parabola
- Vertex = max/min point

**Quick Revision Points:**
- d = distance formula
- midpoint = average
- (x-h)² + (y-k)² = r²
- y = ax² + bx + c
- vertex = -b/2a
`,

    questions: [
      {
        q: 'Distance between two points is based on:',
        options: [
          'A. Algebra',
          'B. Pythagoras theorem',
          'C. Geometry only',
          'D. Trigonometry',
        ],
        answer: 'B. Pythagoras theorem',
        diff: 'easy',
      },
      {
        q: 'Distance formula is:',
        options: [
          'A. (x₂ + x₁)',
          'B. √[(x₂ − x₁)² + (y₂ − y₁)²]',
          'C. (y₂ − y₁)',
          'D. x² + y²',
        ],
        answer: 'B. √[(x₂ − x₁)² + (y₂ − y₁)²]',
        diff: 'easy',
      },
      {
        q: 'Midpoint of two points is:',
        options: [
          'A. Difference',
          'B. Product',
          'C. Average',
          'D. Square',
        ],
        answer: 'C. Average',
        diff: 'easy',
      },
      {
        q: 'Standard form of circle is:',
        options: [
          'A. y = mx + b',
          'B. (x − h)² + (y − k)² = r²',
          'C. x² + y²',
          'D. ax² + bx + c',
        ],
        answer: 'B. (x − h)² + (y − k)² = r²',
        diff: 'easy',
      },
      {
        q: 'Center of circle is represented by:',
        options: [
          'A. (r, r)',
          'B. (x, y)',
          'C. (h, k)',
          'D. (0,0)',
        ],
        answer: 'C. (h, k)',
        diff: 'easy',
      },
      {
        q: 'If r² = 0, graph is:',
        options: [
          'A. Circle',
          'B. Line',
          'C. Point',
          'D. No graph',
        ],
        answer: 'C. Point',
        diff: 'medium',
      },
      {
        q: 'If r² < 0, graph is:',
        options: [
          'A. Circle',
          'B. Point',
          'C. No graph',
          'D. Line',
        ],
        answer: 'C. No graph',
        diff: 'medium',
      },
      {
        q: 'General equation of circle is:',
        options: [
          'A. y = mx + b',
          'B. ax² + bx + c',
          'C. x² + y² + Dx + Ey + F = 0',
          'D. x = a',
        ],
        answer: 'C. x² + y² + Dx + Ey + F = 0',
        diff: 'medium',
      },
      {
        q: 'Graph of quadratic equation is:',
        options: [
          'A. Line',
          'B. Circle',
          'C. Parabola',
          'D. Triangle',
        ],
        answer: 'C. Parabola',
        diff: 'easy',
      },
      {
        q: 'If a > 0, parabola opens:',
        options: [
          'A. Downward',
          'B. Upward',
          'C. Left',
          'D. Right',
        ],
        answer: 'B. Upward',
        diff: 'easy',
      },
      {
        q: 'Vertex formula is:',
        options: [
          'A. x = b/2a',
          'B. x = -b/2a',
          'C. x = a/b',
          'D. x = b/a',
        ],
        answer: 'B. x = -b/2a',
        diff: 'medium',
      },
      {
        q: 'y-intercept is found by:',
        options: [
          'A. y = 0',
          'B. x = 1',
          'C. x = 0',
          'D. y = 1',
        ],
        answer: 'C. x = 0',
        diff: 'easy',
      },
      {
        q: 'x-intercept is found by:',
        options: [
          'A. x = 0',
          'B. y = 0',
          'C. x = 1',
          'D. y = 1',
        ],
        answer: 'B. y = 0',
        diff: 'easy',
      },
      {
        q: 'Unit circle equation is:',
        options: [
          'A. x² + y² = 1',
          'B. x + y = 1',
          'C. x² − y² = 1',
          'D. y = x²',
        ],
        answer: 'A. x² + y² = 1',
        diff: 'easy',
      },
      {
        q: 'Vertex represents:',
        options: [
          'A. Starting point',
          'B. Highest/lowest point',
          'C. End point',
          'D. Midpoint',
        ],
        answer: 'B. Highest/lowest point',
        diff: 'medium',
      },
    ],
  },


  // lecture 6
  6: {
    title: 'Functions',
    summary: `**Key Topics Covered:**
- Definition of function
- Function notation (f(x))
- Domain of a function
- Range of a function
- Natural and Restricted domains
- Piecewise functions
- Reversing variables

**Important Concepts:**

**Function:**
A function is a relation where each value of x gives exactly ONE value of y.

y = f(x)

Example:
f(x) = x²

- f(2) = 4
- f(-2) = 4

**Not a Function:**
y = ±x  
Because one x gives two y values.

---

**Function Notation:**
y = f(x)

- x → Independent variable
- y → Dependent variable
- f(x) means "function of x"

Example:
f(x) = 2x² - 1  
f(3) = 17

---

**Domain:**
Set of all allowed values of x

Types:
1. Natural Domain → from formula
2. Restricted Domain → from real-life conditions

Example:
1 / (x - 1) → x ≠ 1

---

**Range:**
Set of all possible values of y

Example:
f(x) = x²  
Range = y ≥ 0

---

**Natural Domain:**
All values where function is defined

Example:
1 / (x-1)(x-3)  
x ≠ 1, 3

---

**Restricted Domain:**
Domain limited by conditions

Example:
Length → cannot be negative

---

**Piecewise Function:**
Different formula for different x values

Example:
f(x) = {
  1.75         if 0 < x ≤ 1
  1.75 + 0.5(x-1)  if x > 1
}

---

**Same Functions:**
g(x) = x² and g(c) = c² → SAME

---

**Reversing Variables:**
Sometimes:
x = f(y)

Example:
3x + 2y = 6  
y = -3/2 x + 3  
or  
x = -2/3 y + 2

---

**Key Facts to Remember:**
- Function → one input, one output
- Domain → allowed x values
- Range → possible y values
- Division by zero NOT allowed
- Square root of negative NOT allowed (in real numbers)
- f(x) is NOT multiplication

---

**Quick Revision Points:**
- y = f(x)
- Domain → x values
- Range → y values
- Not function → multiple outputs
- Check denominator ≠ 0
- Piecewise → multiple rules`,

    questions: [
      {
        q: 'A function is defined as:',
        options: [
          'A. One input gives many outputs',
          'B. One input gives exactly one output',
          'C. Many inputs give one output',
          'D. No relation',
        ],
        answer: 'B. One input gives exactly one output',
        diff: 'easy',
      },
      {
        q: 'In f(x), x is:',
        options: [
          'A. Dependent variable',
          'B. Constant',
          'C. Independent variable',
          'D. Output',
        ],
        answer: 'C. Independent variable',
        diff: 'easy',
      },
      {
        q: 'In f(x), f(x) represents:',
        options: [
          'A. Multiplication',
          'B. Output value',
          'C. Constant',
          'D. Equation',
        ],
        answer: 'B. Output value',
        diff: 'easy',
      },
      {
        q: 'Which is a function?',
        options: [
          'A. y = ±x',
          'B. y² = x',
          'C. y = 2x + 1',
          'D. x = y²',
        ],
        answer: 'C. y = 2x + 1',
        diff: 'medium',
      },
      {
        q: 'Domain of function is:',
        options: [
          'A. All y values',
          'B. All x values',
          'C. All constants',
          'D. All equations',
        ],
        answer: 'B. All x values',
        diff: 'easy',
      },
      {
        q: 'Range of function is:',
        options: [
          'A. All x values',
          'B. All y values',
          'C. All constants',
          'D. All domains',
        ],
        answer: 'B. All y values',
        diff: 'easy',
      },
      {
        q: 'Natural domain is:',
        options: [
          'A. Given by teacher',
          'B. From formula itself',
          'C. Always positive',
          'D. Always integers',
        ],
        answer: 'B. From formula itself',
        diff: 'medium',
      },
      {
        q: 'Which value is NOT allowed in 1/(x-2)?',
        options: [
          'A. 0',
          'B. 1',
          'C. 2',
          'D. 3',
        ],
        answer: 'C. 2',
        diff: 'easy',
      },
      {
        q: 'Range of f(x) = x² is:',
        options: [
          'A. All real numbers',
          'B. y ≥ 0',
          'C. y ≤ 0',
          'D. y ≠ 0',
        ],
        answer: 'B. y ≥ 0',
        diff: 'medium',
      },
      {
        q: 'Piecewise function means:',
        options: [
          'A. One formula',
          'B. Multiple formulas',
          'C. No formula',
          'D. Only graph',
        ],
        answer: 'B. Multiple formulas',
        diff: 'easy',
      },
      {
        q: 'Function f(x) = x² and g(c) = c² are:',
        options: [
          'A. Different',
          'B. Same',
          'C. Opposite',
          'D. Undefined',
        ],
        answer: 'B. Same',
        diff: 'medium',
      },
      {
        q: 'Which is NOT a function?',
        options: [
          'A. y = x²',
          'B. y = 2x + 1',
          'C. y = ±√x',
          'D. y = x³',
        ],
        answer: 'C. y = ±√x',
        diff: 'medium',
      },
      {
        q: 'Restricted domain comes from:',
        options: [
          'A. Formula only',
          'B. Real-life conditions',
          'C. Graph only',
          'D. Numbers only',
        ],
        answer: 'B. Real-life conditions',
        diff: 'medium',
      },
      {
        q: 'If denominator becomes zero, function is:',
        options: [
          'A. Valid',
          'B. Undefined',
          'C. Infinite',
          'D. Linear',
        ],
        answer: 'B. Undefined',
        diff: 'easy',
      },
      {
        q: 'f(3) for f(x)=x² is:',
        options: [
          'A. 6',
          'B. 9',
          'C. 3',
          'D. 1',
        ],
        answer: 'B. 9',
        diff: 'easy',
      },
      {
        q: 'Square root of negative number gives:',
        options: [
          'A. Real number',
          'B. Undefined (in real)',
          'C. Integer',
          'D. Zero',
        ],
        answer: 'B. Undefined (in real)',
        diff: 'medium',
      },
      {
        q: 'Range depends on:',
        options: [
          'A. Domain',
          'B. Output values',
          'C. Input values',
          'D. Equation only',
        ],
        answer: 'B. Output values',
        diff: 'medium',
      },
      {
        q: 'If one input gives two outputs, it is:',
        options: [
          'A. Function',
          'B. Not a function',
          'C. Linear',
          'D. Constant',
        ],
        answer: 'B. Not a function',
        diff: 'easy',
      },
    ],
  },


  // lecture 7
  7: {
    title: 'Operations on Functions',
    summary: `**Key Topics Covered:**
- Arithmetic operations on functions
- Sum, difference, product, quotient
- Domain rules in operations
- Composition of functions
- Decomposition of functions
- Types of functions

**Important Concepts:**

**Arithmetic Operations on Functions:**

If f(x) and g(x) are functions:

1. Sum:
(f + g)(x) = f(x) + g(x)

2. Difference:
(f − g)(x) = f(x) − g(x)

3. Product:
(f . g)(x) = f(x) × g(x)

4. Quotient:
(f / g)(x) = f(x) / g(x),  where g(x) ≠ 0

---

**Domain Rules:**
- For +, −, × → Domain = common (intersection) domain
- For ÷ → Domain = intersection BUT g(x) ≠ 0

---

**Example:**
f(x) = x², g(x) = x

(f + g)(x) = x² + x

---

**Composition of Functions:**

(f ∘ g)(x) = f(g(x))

Steps:
1. First apply g(x)
2. Then apply f()

Example:
f(x) = x³  
g(x) = x + 4  

(f ∘ g)(x) = f(x+4) = (x+4)³

---

**Important Rule:**
(f ∘ g)(x) ≠ (g ∘ f)(x)

Order matters!

---

**Domain of Composition:**
Domain = all x in domain of g such that g(x) lies in domain of f

---

**Decomposition:**
Breaking a function into smaller functions

Example:
h(x) = (x + 1)²  

Let:
f(x) = x + 1  
g(x) = x²  

Then:
h(x) = g(f(x))

---

**Function Powers:**
f²(x) = f(x) × f(x)

Example:
(sin x)² = sin²(x)

---

**Types of Functions:**

1. Constant Function:
f(x) = 2

2. Monomial:
f(x) = cxⁿ  (n ≥ 0)

Example:
3x², 5x⁴

3. Polynomial:
f(x) = a₀ + a₁x + a₂x² + ... + aₙxⁿ

---

**Key Facts to Remember:**
- Operations work like numbers
- Domain is VERY important
- Division → denominator ≠ 0
- Composition order matters
- f(g(x)) → inner first, outer second

---

**Quick Revision Points:**
- (f+g)(x) = f(x)+g(x)
- (f/g)(x) → g(x) ≠ 0
- (f ∘ g)(x) = f(g(x))
- Order matters in composition
- Domain = intersection
- Break complex functions into parts`,

    questions: [
      {
        q: 'Sum of two functions is:',
        options: [
          'A. f(x)g(x)',
          'B. f(x)+g(x)',
          'C. f(x)-g(x)',
          'D. f(x)/g(x)',
        ],
        answer: 'B. f(x)+g(x)',
        diff: 'easy',
      },
      {
        q: 'Product of functions is:',
        options: [
          'A. f(x)+g(x)',
          'B. f(x)-g(x)',
          'C. f(x)×g(x)',
          'D. f(x)/g(x)',
        ],
        answer: 'C. f(x)×g(x)',
        diff: 'easy',
      },
      {
        q: 'Quotient of functions is:',
        options: [
          'A. f(x)/g(x)',
          'B. f(x)+g(x)',
          'C. f(x)-g(x)',
          'D. f(x)×g(x)',
        ],
        answer: 'A. f(x)/g(x)',
        diff: 'easy',
      },
      {
        q: 'In f(x)/g(x), what must be true?',
        options: [
          'A. f(x)=0',
          'B. g(x)=0',
          'C. g(x)≠0',
          'D. x=0',
        ],
        answer: 'C. g(x)≠0',
        diff: 'easy',
      },
      {
        q: 'Domain of (f+g)(x) is:',
        options: [
          'A. Union of domains',
          'B. Intersection of domains',
          'C. Only f domain',
          'D. Only g domain',
        ],
        answer: 'B. Intersection of domains',
        diff: 'medium',
      },
      {
        q: 'Composition of functions is:',
        options: [
          'A. f(x)+g(x)',
          'B. f(x)-g(x)',
          'C. f(g(x))',
          'D. f(x)g(x)',
        ],
        answer: 'C. f(g(x))',
        diff: 'easy',
      },
      {
        q: '(f ∘ g)(x) means:',
        options: [
          'A. g(f(x))',
          'B. f(g(x))',
          'C. f(x)+g(x)',
          'D. f(x)/g(x)',
        ],
        answer: 'B. f(g(x))',
        diff: 'easy',
      },
      {
        q: 'Order in composition:',
        options: [
          'A. Does not matter',
          'B. Always same',
          'C. Matters',
          'D. Random',
        ],
        answer: 'C. Matters',
        diff: 'easy',
      },
      {
        q: '(f ∘ g)(x) and (g ∘ f)(x) are:',
        options: [
          'A. Always equal',
          'B. Always zero',
          'C. Usually not equal',
          'D. Same domain only',
        ],
        answer: 'C. Usually not equal',
        diff: 'medium',
      },
      {
        q: 'In composition, which is applied first?',
        options: [
          'A. f',
          'B. g',
          'C. Both',
          'D. None',
        ],
        answer: 'B. g',
        diff: 'easy',
      },
      {
        q: 'Decomposition means:',
        options: [
          'A. Combining functions',
          'B. Breaking into simpler functions',
          'C. Deleting functions',
          'D. Multiplying functions',
        ],
        answer: 'B. Breaking into simpler functions',
        diff: 'medium',
      },
      {
        q: 'f²(x) means:',
        options: [
          'A. f(x²)',
          'B. f(x)+f(x)',
          'C. f(x)×f(x)',
          'D. 2f(x)',
        ],
        answer: 'C. f(x)×f(x)',
        diff: 'medium',
      },
      {
        q: 'Constant function example:',
        options: [
          'A. x²',
          'B. 2',
          'C. x+1',
          'D. sin x',
        ],
        answer: 'B. 2',
        diff: 'easy',
      },
      {
        q: 'Monomial example:',
        options: [
          'A. 3x²',
          'B. x+1',
          'C. 1/x',
          'D. √x',
        ],
        answer: 'A. 3x²',
        diff: 'easy',
      },
      {
        q: 'Polynomial example:',
        options: [
          'A. 1/x',
          'B. x² + 3x + 1',
          'C. √x',
          'D. log x',
        ],
        answer: 'B. x² + 3x + 1',
        diff: 'easy',
      },
      {
        q: 'Domain of f.g(x) is:',
        options: [
          'A. Union',
          'B. Intersection',
          'C. Only f',
          'D. Only g',
        ],
        answer: 'B. Intersection',
        diff: 'medium',
      },
      {
        q: 'In composition f(g(x)), g(x) must be:',
        options: [
          'A. Constant',
          'B. In domain of f',
          'C. Zero',
          'D. Negative',
        ],
        answer: 'B. In domain of f',
        diff: 'medium',
      },
      {
        q: 'Which operation is NOT arithmetic?',
        options: [
          'A. Addition',
          'B. Multiplication',
          'C. Composition',
          'D. Subtraction',
        ],
        answer: 'C. Composition',
        diff: 'medium',
      },
    ],
  },

  // lecture 8
  8: {
    title: 'Graphs of Functions',
    summary: `**Key Topics Covered:**
- Definition of graph of a function
- Graphing absolute value and piecewise functions
- Translations (shifts) of graphs
- Reflections about x-axis and y-axis
- Vertical scaling (stretching and compressing)
- Vertical Line Test
- Horizontal Line Test

**Important Concepts:**

**Graph of a Function:**
The graph of a function f in the xy-plane is the graph of the equation y = f(x).
It is the set of ALL points (x, y) that satisfy y = f(x).

**Absolute Value Function:**
f(x) = |x| is a piecewise function:
- y = x,  if x ≥ 0
- y = −x, if x < 0
Graph is V-shaped, with vertex at the origin.

**Hole in a Graph:**
If a value is excluded from the domain (e.g., x ≠ 2), there is a HOLE at that point on the graph.

**Piecewise Functions:**
Different formulas apply for different x ranges.
Example:
g(x) = { 1,      if x ≤ 2
        { x + 2,  if x > 2

**Translations (Shifts):**
Given graph of y = f(x) and a positive constant c:
- y = f(x) + c  →  shift UP by c units
- y = f(x) − c  →  shift DOWN by c units
- y = f(x + c)  →  shift LEFT by c units
- y = f(x − c)  →  shift RIGHT by c units

**Reflections:**
- y = f(−x)  →  reflection about y-axis
- y = −f(x)  →  reflection about x-axis

**Vertical Scaling:**
Multiplying f(x) by positive constant c:
- 0 < c < 1  →  graph COMPRESSED vertically
- c > 1      →  graph STRETCHED vertically

**Vertical Line Test:**
A graph is the graph of a function if and only if NO vertical line intersects the graph MORE THAN ONCE.

**Horizontal Line Test:**
Used when x is the dependent variable. If each horizontal line crosses the graph at most once, x can be expressed as a function of y.

**Key Facts to Remember:**
- Graph of f = graph of y = f(x)
- Absolute value graph = V-shape
- Hole = excluded domain value
- Adding c to x shifts LEFT (not right!)
- Vertical line test → checks if it is a function
- Circle x² + y² = 25 is NOT a function (fails vertical line test)

**Quick Revision Points:**
- y = f(x) + c → UP
- y = f(x − c) → RIGHT
- y = f(x + c) → LEFT
- y = −f(x) → x-axis reflection
- y = f(−x) → y-axis reflection
- Vertical stretch: c > 1 | Compress: 0 < c < 1
- Vertical line test: one x → one y`,

    questions: [
      {
        q: 'The graph of a function f is defined as:',
        options: [
          'A. Any curve in the xy-plane',
          'B. The graph of the equation y = f(x)',
          'C. Only straight lines',
          'D. Points on the x-axis only',
        ],
        answer: 'B. The graph of the equation y = f(x)',
        diff: 'easy',
      },
      {
        q: 'The graph of f(x) = x + 2 is:',
        options: [
          'A. A parabola',
          'B. A circle',
          'C. A straight line with slope 1 and y-intercept 2',
          'D. A V-shaped curve',
        ],
        answer: 'C. A straight line with slope 1 and y-intercept 2',
        diff: 'easy',
      },
      {
        q: 'The absolute value function f(x) = |x| is:',
        options: [
          'A. A straight line',
          'B. A circle',
          'C. A piecewise defined function',
          'D. A parabola',
        ],
        answer: 'C. A piecewise defined function',
        diff: 'easy',
      },
      {
        q: 'For f(x) = |x|, which part applies when x < 0?',
        options: [
          'A. y = x',
          'B. y = −x',
          'C. y = 0',
          'D. y = x²',
        ],
        answer: 'B. y = −x',
        diff: 'medium',
      },
      {
        q: 'A HOLE appears in a graph when:',
        options: [
          'A. The slope is zero',
          'B. A value is excluded from the domain',
          'C. The function is linear',
          'D. The y-intercept is missing',
        ],
        answer: 'B. A value is excluded from the domain',
        diff: 'medium',
      },
      {
        q: 'If y = f(x) + c and c > 0, the graph shifts:',
        options: [
          'A. Down by c units',
          'B. Left by c units',
          'C. Right by c units',
          'D. Up by c units',
        ],
        answer: 'D. Up by c units',
        diff: 'easy',
      },
      {
        q: 'If y = f(x) − c and c > 0, the graph shifts:',
        options: [
          'A. Up by c units',
          'B. Down by c units',
          'C. Left by c units',
          'D. Right by c units',
        ],
        answer: 'B. Down by c units',
        diff: 'easy',
      },
      {
        q: 'If y = f(x + c) and c > 0, the graph shifts:',
        options: [
          'A. Up by c units',
          'B. Down by c units',
          'C. Left by c units',
          'D. Right by c units',
        ],
        answer: 'C. Left by c units',
        diff: 'medium',
      },
      {
        q: 'If y = f(x − c) and c > 0, the graph shifts:',
        options: [
          'A. Left by c units',
          'B. Right by c units',
          'C. Up by c units',
          'D. Down by c units',
        ],
        answer: 'B. Right by c units',
        diff: 'medium',
      },
      {
        q: 'To sketch y = |x − 3| + 2, you start with y = |x| and:',
        options: [
          'A. Shift left 3, then up 2',
          'B. Shift right 3, then up 2',
          'C. Shift up 3, then right 2',
          'D. Shift down 3, then left 2',
        ],
        answer: 'B. Shift right 3, then up 2',
        diff: 'hard',
      },
      {
        q: 'The graph of y = f(−x) is a reflection of y = f(x) about:',
        options: [
          'A. The x-axis',
          'B. The origin',
          'C. The y-axis',
          'D. The line y = x',
        ],
        answer: 'C. The y-axis',
        diff: 'medium',
      },
      {
        q: 'The graph of y = −f(x) is a reflection of y = f(x) about:',
        options: [
          'A. The y-axis',
          'B. The x-axis',
          'C. The origin',
          'D. The line y = x',
        ],
        answer: 'B. The x-axis',
        diff: 'medium',
      },
      {
        q: 'If f(x) is multiplied by c where 0 < c < 1, the graph is:',
        options: [
          'A. Stretched vertically',
          'B. Compressed vertically',
          'C. Shifted upward',
          'D. Reflected about x-axis',
        ],
        answer: 'B. Compressed vertically',
        diff: 'medium',
      },
      {
        q: 'If f(x) is multiplied by c where c > 1, the graph is:',
        options: [
          'A. Compressed vertically',
          'B. Shifted downward',
          'C. Stretched vertically',
          'D. Reflected about y-axis',
        ],
        answer: 'C. Stretched vertically',
        diff: 'medium',
      },
      {
        q: 'The Vertical Line Test states that a graph is a function if:',
        options: [
          'A. Every horizontal line crosses it once',
          'B. No vertical line intersects it more than once',
          'C. Every vertical line crosses it at least once',
          'D. No horizontal line touches it',
        ],
        answer: 'B. No vertical line intersects it more than once',
        diff: 'easy',
      },
      {
        q: 'The graph of x² + y² = 25 (a circle):',
        options: [
          'A. Passes the vertical line test',
          'B. Is a function',
          'C. Fails the vertical line test',
          'D. Has only one y-value per x',
        ],
        answer: 'C. Fails the vertical line test',
        diff: 'medium',
      },
      {
        q: 'Which of the following graphs IS a function?',
        options: [
          'A. A full circle',
          'B. A vertical line',
          'C. A parabola opening upward',
          'D. An ellipse',
        ],
        answer: 'C. A parabola opening upward',
        diff: 'medium',
      },
      {
        q: 'The Horizontal Line Test is used when:',
        options: [
          'A. y is the dependent variable',
          'B. x is the dependent variable (x as function of y)',
          'C. The graph is a parabola',
          'D. The function is constant',
        ],
        answer: 'B. x is the dependent variable (x as function of y)',
        diff: 'hard',
      },
      {
        q: 'Completing the square for y = x² − 4x + 5 gives:',
        options: [
          'A. y = (x − 2)² + 2',
          'B. y = (x − 2)² + 1',
          'C. y = (x + 2)² + 1',
          'D. y = (x − 4)² + 5',
        ],
        answer: 'B. y = (x − 2)² + 1',
        diff: 'hard',
      },
      {
        q: 'The graph of y = (x − 2)² + 1 is obtained from y = x² by:',
        options: [
          'A. Shifting left 2, then up 1',
          'B. Shifting right 2, then up 1',
          'C. Shifting up 2, then right 1',
          'D. Shifting down 2, then left 1',
        ],
        answer: 'B. Shifting right 2, then up 1',
        diff: 'medium',
      },
      {
        q: 'A vertical line through x = a crosses a graph at (a, b) and (a, c) where b ≠ c. This means:',
        options: [
          'A. The graph is a function',
          'B. The graph is not a function',
          'C. The function has two domains',
          'D. The graph is symmetric',
        ],
        answer: 'B. The graph is not a function',
        diff: 'easy',
      },
      {
        q: 'For y = 2sin(x) compared to y = sin(x), the graph is:',
        options: [
          'A. Shifted up by 2',
          'B. Shifted right by 2',
          'C. Stretched vertically by factor 2',
          'D. Compressed horizontally',
        ],
        answer: 'C. Stretched vertically by factor 2',
        diff: 'medium',
      },
      {
        q: 'For y = ½ sin(x) compared to y = sin(x), the graph is:',
        options: [
          'A. Stretched vertically',
          'B. Shifted down by ½',
          'C. Compressed vertically',
          'D. Reflected about x-axis',
        ],
        answer: 'C. Compressed vertically',
        diff: 'medium',
      },
    ],
  },
  
  // lecture 9 //


  // ─────────────────────────────────────────
//  MTH101
// ─────────────────────────────────────────
  9: {
    title: 'Limits',
    summary: `**Key Topics Covered:**
- Introduction to Limits
- Tangent lines using limits
- Area problem and approximation
- Right-hand & Left-hand limits
- Existence of limits (DNE cases)
- Limits at infinity

**Simple Understanding (Easy Urdu + English):**

**Limits kya hota hai?**
Limit ka matlab hai kisi function ke behavior ko study karna jab x kisi value ke "bohat qareeb" jata hai (exact equal nahi hota).

**Calculus ke 2 main parts:**
- Differential Calculus → Tangent lines (slopes)
- Integral Calculus → Area under curve

Dono ka base concept = LIMIT

**Tangent Line (Simple Idea):**
- Pehle secant line (2 points P & Q)
- Jab Q → P ke qareeb aata hai
- Secant line → ek final position leti hai
👉 Ye final line = Tangent line

**Area Problem (Important):**
- Irregular shapes ka exact area directly nahi milta
- Rectangles use karke approx karte hain
- Jitne zyada rectangles → utna accurate result
👉 Final exact area = LIMIT

**Right & Left Hand Limit:**
- Right hand limit: x → a⁺ (right side se approach)
- Left hand limit: x → a⁻ (left side se approach)
- Agar dono equal ho → LIMIT EXIST karti hai

**Important Example:**
lim (sin x / x) as x → 0 = 1  
(x ≠ 0 but close to 0)

**When Limit DOES NOT EXIST (DNE):**
1. Oscillation (upar neeche jump karta rahe)
2. Unbounded (∞ ya -∞ ki taraf chala jaye)
3. Left & Right equal na ho

**Infinity Concept:**
+∞ ya -∞ number nahi hota, sirf behavior show karta hai

**Limits at Infinity:**
- x → ∞ means x bohat bara hota jata hai
- Sirf ek side se approach hota hai

**Quick Revision Points:**
- Limit = behavior near a point
- Tangent = secant ka limiting position
- Area = rectangles ka limit
- LHL = RHL → limit exists
- Oscillation / ∞ → DNE
- ∞ is NOT a number
- lim (sin x / x) = 1 (important)`,
    
    questions: [
      {
        q: 'Calculus was mainly developed to solve which two problems?',
        options: ['A. Graphing and equations', 'B. Area and tangent lines', 'C. Numbers and sets', 'D. Algebra and geometry'],
        answer: 'B. Area and tangent lines',
        diff: 'easy',
      },
      {
        q: 'Differential Calculus is mainly related to:',
        options: ['A. Area under curve', 'B. Tangent lines', 'C. Probability', 'D. Matrices'],
        answer: 'B. Tangent lines',
        diff: 'easy',
      },
      {
        q: 'Integral Calculus is mainly used to find:',
        options: ['A. Slopes', 'B. Tangents', 'C. Area', 'D. Limits'],
        answer: 'C. Area',
        diff: 'easy',
      },
      {
        q: 'A secant line is formed by:',
        options: ['A. One point', 'B. Two points on curve', 'C. Infinite points', 'D. No points'],
        answer: 'B. Two points on curve',
        diff: 'medium',
      },
      {
        q: 'A tangent line is obtained when:',
        options: ['A. Two points are far apart', 'B. Secant rotates infinitely', 'C. Second point approaches the first point', 'D. Curve becomes straight'],
        answer: 'C. Second point approaches the first point',
        diff: 'medium',
      },
      {
        q: 'Limit describes the behavior of a function when x:',
        options: ['A. Equals a value', 'B. Is zero', 'C. Approaches a value', 'D. Is negative'],
        answer: 'C. Approaches a value',
        diff: 'easy',
      },
      {
        q: 'Right-hand limit is represented as:',
        options: ['A. x → a⁻', 'B. x → a⁺', 'C. x = a', 'D. x → ∞'],
        answer: 'B. x → a⁺',
        diff: 'medium',
      },
      {
        q: 'Left-hand limit is represented as:',
        options: ['A. x → a⁺', 'B. x = a', 'C. x → a⁻', 'D. x → ∞'],
        answer: 'C. x → a⁻',
        diff: 'medium',
      },
      {
        q: 'A limit exists if:',
        options: ['A. Function is zero', 'B. LHL ≠ RHL', 'C. LHL = RHL', 'D. x = 0'],
        answer: 'C. LHL = RHL',
        diff: 'easy',
      },
      {
        q: 'The value of lim (sin x / x) as x → 0 is:',
        options: ['A. 0', 'B. 1', 'C. ∞', 'D. -1'],
        answer: 'B. 1',
        diff: 'medium',
      },
      {
        q: 'Which of the following causes limit to NOT exist?',
        options: ['A. Constant function', 'B. Smooth curve', 'C. Oscillation', 'D. Linear graph'],
        answer: 'C. Oscillation',
        diff: 'medium',
      },
      {
        q: 'If a function increases without bound, the limit is:',
        options: ['A. 0', 'B. 1', 'C. +∞', 'D. Undefined'],
        answer: 'C. +∞',
        diff: 'medium',
      },
      {
        q: 'Infinity (∞) is:',
        options: ['A. A real number', 'B. A rational number', 'C. Not a number', 'D. Integer'],
        answer: 'C. Not a number',
        diff: 'easy',
      },
      {
        q: 'If left-hand and right-hand limits are different, then:',
        options: ['A. Limit exists', 'B. Limit = 0', 'C. Limit does not exist', 'D. Limit = ∞'],
        answer: 'C. Limit does not exist',
        diff: 'easy',
      },
      {
        q: 'Limits at infinity are taken:',
        options: ['A. From both sides', 'B. Only from one side', 'C. From left only', 'D. From right only'],
        answer: 'B. Only from one side',
        diff: 'hard',
      },
      {
        q: 'Area under a curve is found using:',
        options: ['A. Circles', 'B. Triangles only', 'C. Rectangles approximation', 'D. Lines'],
        answer: 'C. Rectangles approximation',
        diff: 'medium',
      },
      {
        q: 'Better approximation of area is achieved when:',
        options: ['A. Fewer rectangles', 'B. Larger rectangles', 'C. More rectangles', 'D. No rectangles'],
        answer: 'C. More rectangles',
        diff: 'easy',
      },
      {
        q: 'Oscillating functions usually:',
        options: ['A. Have limits', 'B. Approach infinity', 'C. Do not have limits', 'D. Become zero'],
        answer: 'C. Do not have limits',
        diff: 'hard',
      },
    ],
  },

  10: {
    title: 'Limits and Computational Techniques',
    summary: `**Key Topics Covered:**
- Algebraic techniques for limits
- Limit laws (Theorem 2.5.1)
- Limits of polynomials
- Limits involving 1/x
- Limits at infinity
- Rational functions limits

**Simple Understanding (Easy Urdu + English):**

**Is lecture ka focus:**
Pehle lecture mein graph se limits dekhi thi  
👉 Ab hum algebra (math rules) use karke limits nikaalenge

**Basic Idea:**
Agar limit exist karti hai → LHL = RHL  
Is lecture mein assume kiya gaya hai ke limit exist karti hai

---

**IMPORTANT THEOREM (Limit Laws):**
Agar limits exist karti hain:

- Sum Rule:  
  lim(f + g) = lim f + lim g  

- Difference Rule:  
  lim(f - g) = lim f - lim g  

- Product Rule:  
  lim(f × g) = lim f × lim g  

- Quotient Rule:  
  lim(f / g) = lim f / lim g  (jab denominator ≠ 0)

👉 Simple yaad rakho:  
**“Limit andar distribute ho jata hai”**

---

**Power Rule:**
lim [f(x)]ⁿ = [lim f(x)]ⁿ  

---

**Constant Rule:**
lim (k·f(x)) = k · lim f(x)

---

**Limits of Polynomials:**
👉 Direct value put kar do (substitution)

Example:  
lim (x² - 4x + 3) at x=5  
= 25 - 20 + 3 = 8

---

**Important Function: 1/x**
- x → 0⁺ → +∞  
- x → 0⁻ → -∞  
- x → ±∞ → 0  

👉 Bohat important MCQ concept

---

**Limits at Infinity (Polynomials):**
👉 Sirf highest power matter karti hai

- Even power → +∞ both sides  
- Odd power → sign depend karta hai

---

**Rational Functions (fractions):**

Case 1: Direct substitution possible → use karo  

Case 2: 0/0 form → factor & cancel  

Case 3: denominator → 0, numerator ≠ 0  
👉 Result = ±∞ (sign check karo)

---

**Limits at Infinity (Rational Functions):**
👉 Degree compare karo:

- Top degree < Bottom → 0  
- Top = Bottom → coefficients ka ratio  
- Top > Bottom → ±∞  

---

**Quick Revision Points:**
- Limit laws = distribute rules  
- Polynomial → direct substitute  
- 1/x near 0 → ±∞  
- 0/0 → factor & cancel  
- Degree rule (rational functions)  
- Highest power dominates at infinity`,
    
    questions: [
      {
        q: 'This lecture mainly focuses on:',
        options: ['A. Graphs of limits', 'B. Algebraic techniques of limits', 'C. Geometry', 'D. Trigonometry'],
        answer: 'B. Algebraic techniques of limits',
        diff: 'easy',
      },
      {
        q: 'According to limit laws, lim(f + g) equals:',
        options: ['A. lim f × lim g', 'B. lim f + lim g', 'C. lim f - lim g', 'D. None'],
        answer: 'B. lim f + lim g',
        diff: 'easy',
      },
      {
        q: 'lim (k·f(x)) is equal to:',
        options: ['A. k + lim f(x)', 'B. k × lim f(x)', 'C. lim f(x)/k', 'D. k²'],
        answer: 'B. k × lim f(x)',
        diff: 'easy',
      },
      {
        q: 'For polynomials, limit is found by:',
        options: ['A. Factoring', 'B. Graphing', 'C. Direct substitution', 'D. Differentiation'],
        answer: 'C. Direct substitution',
        diff: 'easy',
      },
      {
        q: 'lim (x² - 4x + 3) at x = 5 equals:',
        options: ['A. 0', 'B. 5', 'C. 8', 'D. 10'],
        answer: 'C. 8',
        diff: 'medium',
      },
      {
        q: 'As x → 0⁺, 1/x approaches:',
        options: ['A. 0', 'B. +∞', 'C. -∞', 'D. 1'],
        answer: 'B. +∞',
        diff: 'medium',
      },
      {
        q: 'As x → 0⁻, 1/x approaches:',
        options: ['A. +∞', 'B. 0', 'C. -∞', 'D. 1'],
        answer: 'C. -∞',
        diff: 'medium',
      },
      {
        q: 'If lim f(x) exists, then:',
        options: ['A. LHL ≠ RHL', 'B. LHL = RHL', 'C. f(x)=0', 'D. x=0'],
        answer: 'B. LHL = RHL',
        diff: 'easy',
      },
      {
        q: 'If numerator and denominator both become 0, then:',
        options: ['A. Limit = 0', 'B. Limit undefined always', 'C. Factor and simplify', 'D. Ignore'],
        answer: 'C. Factor and simplify',
        diff: 'medium',
      },
      {
        q: 'If denominator → 0 but numerator ≠ 0, limit becomes:',
        options: ['A. 0', 'B. 1', 'C. ±∞', 'D. Undefined'],
        answer: 'C. ±∞',
        diff: 'medium',
      },
      {
        q: 'If degree of numerator < denominator (at infinity), limit is:',
        options: ['A. ∞', 'B. 1', 'C. 0', 'D. Undefined'],
        answer: 'C. 0',
        diff: 'hard',
      },
      {
        q: 'If degree of numerator = denominator, limit is:',
        options: ['A. 0', 'B. Ratio of coefficients', 'C. ∞', 'D. Undefined'],
        answer: 'B. Ratio of coefficients',
        diff: 'hard',
      },
      {
        q: 'If degree of numerator > denominator, limit is:',
        options: ['A. 0', 'B. 1', 'C. ±∞', 'D. Constant'],
        answer: 'C. ±∞',
        diff: 'hard',
      },
      {
        q: 'Highest power of x determines behavior at:',
        options: ['A. x = 0', 'B. x = 1', 'C. Infinity', 'D. Negative values'],
        answer: 'C. Infinity',
        diff: 'medium',
      },
      {
        q: 'lim [f(x)]ⁿ equals:',
        options: ['A. lim f(x)', 'B. [lim f(x)]ⁿ', 'C. n·f(x)', 'D. None'],
        answer: 'B. [lim f(x)]ⁿ',
        diff: 'medium',
      },
      {
        q: 'Which case gives 0/0 form?',
        options: ['A. Only numerator zero', 'B. Only denominator zero', 'C. Both zero', 'D. None'],
        answer: 'C. Both zero',
        diff: 'easy',
      },
      {
        q: 'At infinity, polynomial behavior depends on:',
        options: ['A. Constant term', 'B. Lowest power', 'C. Highest power', 'D. Middle term'],
        answer: 'C. Highest power',
        diff: 'easy',
      },
      {
        q: 'If x → ±∞, 1/x approaches:',
        options: ['A. ∞', 'B. -∞', 'C. 1', 'D. 0'],
        answer: 'D. 0',
        diff: 'easy',
      },
    ],
  },
  
  /// lecture 11 //
  11: {
    title: 'Limits: A Rigorous Approach',
    summary: `**Key Topics Covered:**
- Formal definition of limits
- ε (epsilon) and δ (delta) concept
- Left-hand & Right-hand limits
- Proving limits using definition
- When limit does not exist

---

**Simple Understanding (Easy Urdu + English):**

**Is lecture ka main idea:**
Pehle hum limit ko "feel" kar rahe thay  
👉 Ab hum usko **proper mathematical definition** se define karte hain

---

**Basic Idea (Informal):**
lim f(x) = L  
👉 Jab x → a hota hai, to f(x) → L hota hai

---

**Formal Definition (IMPORTANT):**

👉 For every ε > 0  
👉 There exists δ > 0  

Such that:

0 < |x - a| < δ  ⇒  |f(x) - L| < ε  

---

**Simple Meaning (Easy Language):**
- ε → batata hai f(x) L ke kitna close ho  
- δ → batata hai x a ke kitna close ho  

👉 Agar x ko a ke paas le aao  
👉 to f(x) automatically L ke paas aa jata hai

---

**Important Notes:**
- x ≠ a (equal hona zaroori nahi)
- f(a) defined ho ya na ho → farq nahi
- Sirf "close hona" important hai

---

**Intervals Idea:**
- x ∈ (a - δ, a + δ)
- f(x) ∈ (L - ε, L + ε)

---

**Example Insight:**
lim (3x - 5) at x=2 = 1  
👉 Prove kar sakte hain using ε–δ

---

**When Limit DOES NOT EXIST:**
👉 Agar contradiction aa jaye  
👉 ya left ≠ right  

Example:
f(x) = 1 (x>0), -1 (x<0)  

👉 Left = -1  
👉 Right = +1  
👉 Limit DNE

---

**Quick Revision Points:**
- ε = output closeness  
- δ = input closeness  
- 0 < |x-a| < δ  
- |f(x)-L| < ε  
- Limit ≠ f(a)  
- Different sides → DNE`,
    
    questions: [
      {
        q: 'This lecture introduces:',
        options: ['A. Graphical limits', 'B. Formal definition of limits', 'C. Derivatives', 'D. Integration'],
        answer: 'B. Formal definition of limits',
        diff: 'easy',
      },
      {
        q: 'In limit definition, ε represents:',
        options: ['A. Input closeness', 'B. Output closeness', 'C. Infinity', 'D. Zero'],
        answer: 'B. Output closeness',
        diff: 'medium',
      },
      {
        q: 'δ represents:',
        options: ['A. Output closeness', 'B. Input closeness', 'C. Infinity', 'D. Function value'],
        answer: 'B. Input closeness',
        diff: 'medium',
      },
      {
        q: 'The condition 0 < |x - a| < δ means:',
        options: ['A. x = a', 'B. x near a but not equal', 'C. x far from a', 'D. x=0'],
        answer: 'B. x near a but not equal',
        diff: 'easy',
      },
      {
        q: '|f(x) - L| < ε means:',
        options: ['A. f(x)=L exactly', 'B. f(x) near L', 'C. f(x)=0', 'D. f(x) infinite'],
        answer: 'B. f(x) near L',
        diff: 'easy',
      },
      {
        q: 'Limit depends on:',
        options: ['A. f(a)', 'B. Value at point', 'C. Behavior near point', 'D. Zero'],
        answer: 'C. Behavior near point',
        diff: 'easy',
      },
      {
        q: 'If f(a) is undefined, then:',
        options: ['A. Limit does not exist', 'B. Limit still may exist', 'C. Always zero', 'D. Infinite'],
        answer: 'B. Limit still may exist',
        diff: 'medium',
      },
      {
        q: 'In ε-δ definition, ε must be:',
        options: ['A. Negative', 'B. Zero', 'C. Positive', 'D. Infinite'],
        answer: 'C. Positive',
        diff: 'easy',
      },
      {
        q: 'δ must be:',
        options: ['A. Negative', 'B. Positive', 'C. Zero', 'D. Infinite'],
        answer: 'B. Positive',
        diff: 'easy',
      },
      {
        q: 'Limit exists if:',
        options: ['A. LHL ≠ RHL', 'B. Only LHL exists', 'C. LHL = RHL', 'D. x=0'],
        answer: 'C. LHL = RHL',
        diff: 'easy',
      },
      {
        q: 'If left-hand and right-hand limits are different:',
        options: ['A. Limit exists', 'B. Limit = 0', 'C. Limit does not exist', 'D. Infinite'],
        answer: 'C. Limit does not exist',
        diff: 'easy',
      },
      {
        q: 'The interval for x is:',
        options: ['A. (L-ε, L+ε)', 'B. (a-δ, a+δ)', 'C. (0,1)', 'D. (-∞,∞)'],
        answer: 'B. (a-δ, a+δ)',
        diff: 'medium',
      },
      {
        q: 'The interval for f(x) is:',
        options: ['A. (a-δ, a+δ)', 'B. (L-ε, L+ε)', 'C. (0,1)', 'D. (-∞,∞)'],
        answer: 'B. (L-ε, L+ε)',
        diff: 'medium',
      },
      {
        q: 'In formal definition, x = a is:',
        options: ['A. Allowed', 'B. Required', 'C. Not required', 'D. Always zero'],
        answer: 'C. Not required',
        diff: 'medium',
      },
      {
        q: 'The function f(x)=1 (x>0), -1 (x<0) has limit at 0:',
        options: ['A. 0', 'B. 1', 'C. -1', 'D. Does not exist'],
        answer: 'D. Does not exist',
        diff: 'medium',
      },
      {
        q: 'Formal definition uses which inequality?',
        options: ['A. x=a', 'B. |x-a|<δ', 'C. |f(x)-L|<ε', 'D. Both B and C'],
        answer: 'D. Both B and C',
        diff: 'hard',
      },
      {
        q: 'ε-δ definition ensures:',
        options: ['A. Exact value', 'B. Approximation control', 'C. Infinite result', 'D. Graph only'],
        answer: 'B. Approximation control',
        diff: 'hard',
      },
      {
        q: 'Main goal of ε-δ definition is to:',
        options: ['A. Simplify limits', 'B. Define rigorously', 'C. Graph limits', 'D. Solve equations'],
        answer: 'B. Define rigorously',
        diff: 'easy',
      },
    ],
  },
//leacture 12//


// ─────────────────────────────────────────
//  MTH101
// ─────────────────────────────────────────
  12: {
    title: 'Continuity',
    summary: `**Key Topics Covered:**
- Continuity & Discontinuity
- Formal definition of continuity
- Properties of continuous functions
- Continuity of polynomials & rational functions
- Composition of functions
- Intermediate Value Theorem (IVT)

---

**Simple Understanding (Easy Urdu + English):**

**Continuity kya hoti hai?**
👉 Graph agar smooth ho (no breaks), to function continuous hota hai  

👉 Pencil uthaye bina graph draw ho jaye → Continuous

---

**Discontinuity (Break):**
Function break ho jata hai jab:
- f(c) defined na ho  
- limit exist na kare  
- limit ≠ f(c)

---

**IMPORTANT Definition (Exam Point):**

Function f continuous hai at x = c agar:

1. f(c) defined ho  
2. lim f(x) exist kare  
3. lim f(x) = f(c)  

👉 Teeno conditions zaroori hain

---

**Shortcut (Most Important):**
👉 Sirf check karo:

lim f(x) = f(c)

Agar ye true → function continuous

---

**Types of Discontinuity:**
- Hole (f(c) undefined)
- Jump (left ≠ right)
- Value mismatch (limit ≠ f(c))

---

**Polynomials:**
👉 Always continuous for ALL real numbers  

---

**Rational Functions:**
👉 Continuous everywhere EXCEPT  
👉 jahan denominator = 0

---

**Properties of Continuous Functions:**
Agar f aur g continuous hain:

- f + g → continuous  
- f - g → continuous  
- f × g → continuous  
- f/g → continuous (if denominator ≠ 0)

---

**Composition Rule:**
👉 Agar g continuous hai aur f bhi continuous hai  
👉 to f(g(x)) bhi continuous hoga  

---

**Left & Right Continuity:**
- Left continuity → left limit = f(c)
- Right continuity → right limit = f(c)

---

**Continuity on [a,b]:**
- (a,b) pe continuous ho  
- a pe right continuous ho  
- b pe left continuous ho  

---

**Intermediate Value Theorem (VERY IMPORTANT):**

👉 Agar function continuous ho [a,b] pe  
👉 aur C beech mein ho f(a) aur f(b) ke  

👉 To koi x exist karega jahan:

f(x) = C  

---

**Special Case:**
👉 Agar f(a) positive aur f(b) negative  
👉 To beech mein root zaroor hoga  

---

**Quick Revision Points:**
- Continuous = no break  
- lim f(x) = f(c)  
- Polynomial → always continuous  
- Rational → denominator ≠ 0  
- IVT → value definitely exist karegi`,
    
    questions: [
      {
        q: 'A function is continuous if:',
        options: ['A. Graph has breaks', 'B. Graph is smooth', 'C. Undefined everywhere', 'D. Infinite'],
        answer: 'B. Graph is smooth',
        diff: 'easy',
      },
      {
        q: 'Continuity requires:',
        options: ['A. Only f(c)', 'B. Only limit', 'C. All 3 conditions', 'D. None'],
        answer: 'C. All 3 conditions',
        diff: 'medium',
      },
      {
        q: 'If lim f(x) ≠ f(c), then:',
        options: ['A. Continuous', 'B. Discontinuous', 'C. Infinite', 'D. Zero'],
        answer: 'B. Discontinuous',
        diff: 'easy',
      },
      {
        q: 'Polynomials are:',
        options: ['A. Discontinuous', 'B. Continuous everywhere', 'C. Infinite', 'D. Undefined'],
        answer: 'B. Continuous everywhere',
        diff: 'easy',
      },
      {
        q: 'Rational functions are discontinuous when:',
        options: ['A. x=0', 'B. Numerator=0', 'C. Denominator=0', 'D. Infinite'],
        answer: 'C. Denominator=0',
        diff: 'easy',
      },
      {
        q: 'If f and g are continuous, then f+g is:',
        options: ['A. Discontinuous', 'B. Continuous', 'C. Infinite', 'D. Undefined'],
        answer: 'B. Continuous',
        diff: 'easy',
      },
      {
        q: 'f/g is continuous if:',
        options: ['A. g(c)=0', 'B. g(c)≠0', 'C. f(c)=0', 'D. Infinite'],
        answer: 'B. g(c)≠0',
        diff: 'medium',
      },
      {
        q: 'Continuity on [a,b] requires:',
        options: ['A. Only inside', 'B. Only endpoints', 'C. Inside + endpoints conditions', 'D. None'],
        answer: 'C. Inside + endpoints conditions',
        diff: 'medium',
      },
      {
        q: 'Left continuity means:',
        options: ['A. Right limit = f(c)', 'B. Left limit = f(c)', 'C. No limit', 'D. Infinite'],
        answer: 'B. Left limit = f(c)',
        diff: 'easy',
      },
      {
        q: 'Right continuity means:',
        options: ['A. Left limit = f(c)', 'B. Right limit = f(c)', 'C. No limit', 'D. Infinite'],
        answer: 'B. Right limit = f(c)',
        diff: 'easy',
      },
      {
        q: 'Intermediate Value Theorem applies to:',
        options: ['A. Discontinuous functions', 'B. Continuous functions', 'C. Infinite functions', 'D. Linear only'],
        answer: 'B. Continuous functions',
        diff: 'medium',
      },
      {
        q: 'IVT guarantees:',
        options: ['A. Exact solution', 'B. At least one value exists', 'C. Infinite solutions', 'D. No solution'],
        answer: 'B. At least one value exists',
        diff: 'medium',
      },
      {
        q: 'If f(a) positive and f(b) negative, then:',
        options: ['A. No root', 'B. Exactly 2 roots', 'C. At least one root', 'D. Infinite'],
        answer: 'C. At least one root',
        diff: 'easy',
      },
      {
        q: 'A hole in graph means:',
        options: ['A. Continuous', 'B. Discontinuity', 'C. Infinite', 'D. Zero'],
        answer: 'B. Discontinuity',
        diff: 'easy',
      },
      {
        q: 'Composition f(g(x)) is continuous if:',
        options: ['A. Only f continuous', 'B. Only g continuous', 'C. Both continuous', 'D. None'],
        answer: 'C. Both continuous',
        diff: 'medium',
      },
      {
        q: 'Main condition for continuity:',
        options: ['A. f(c)=0', 'B. lim f(x)=f(c)', 'C. x=0', 'D. Infinite'],
        answer: 'B. lim f(x)=f(c)',
        diff: 'easy',
      },
      {
        q: 'If f(c) is undefined, then:',
        options: ['A. Continuous', 'B. Discontinuous', 'C. Infinite', 'D. Zero'],
        answer: 'B. Discontinuous',
        diff: 'easy',
      },
      {
        q: 'Graph without break shows:',
        options: ['A. Discontinuity', 'B. Continuity', 'C. Infinity', 'D. Undefined'],
        answer: 'B. Continuity',
        diff: 'easy',
      },
    ],
  },

},




  // ─────────────────────────────────────────
  //  MTH202
  // ─────────────────────────────────────────
  MTH202: {
    1: {
      title: 'Introduction to Discrete Mathematics & Logic',
      summary: `**Key Topics Covered:**
- What is Discrete Mathematics
- Propositions and statements
- Logical connectives (AND, OR, NOT)
- Compound statements
- Truth tables and truth values

**Important Concepts:**

**Discrete Mathematics:**
It deals with sequences of individual steps (not continuous processes). It is the foundation of computer science, algorithms, and logic.

**Propositions:**
A proposition is a declarative sentence that has a definite true (T) or false (F) value. Questions, commands, and opinions are NOT propositions.
- "Grass is green" = proposition ✅
- "Close the door" = NOT a proposition (command) ❌
- "x + y = 12" = NOT a proposition (has variables) ❌

**Logical Connectives and Symbols:**
- AND (Conjunction) = ∧ → true only when BOTH are true
- OR (Disjunction) = ∨ → false only when BOTH are false
- NOT (Negation) = ~ → flips the truth value
- IF...THEN (Conditional) = →
- IF AND ONLY IF (Biconditional) = ↔

**Truth Values:**
- p ∧ q is TRUE only when both p and q are TRUE
- p ∨ q is FALSE only when both p and q are FALSE
- ~p is the OPPOSITE of p

**Key Facts to Remember:**
- Truth values represented by T and F
- "Neither hot nor sunny" = ~p ∧ ~q
- "It is hot and sunny" = p ∧ q
- "It is not hot" = ~p
- Truth table analyzes truth values of compound statements

**Quick Revision Points:**
- Proposition = declarative sentence with T/F value
- ∧ = AND (both true)
- ∨ = OR (at least one true)
- ~ = NOT (opposite)
- → = conditional
- ↔ = biconditional
- Compound statements use logical connectives`,
      questions: [
        {
          q: 'Discrete Mathematics mainly deals with:',
          options: ['A. Continuous processes', 'B. Random processes', 'C. Sequence of individual steps', 'D. Infinite loops'],
          answer: 'C. Sequence of individual steps',
          diff: 'easy',
        },
        {
          q: 'Logic is the study of:',
          options: ['A. Numbers only', 'B. Valid and invalid arguments', 'C. Programming languages', 'D. Hardware design'],
          answer: 'B. Valid and invalid arguments',
          diff: 'easy',
        },
        {
          q: 'A statement (proposition) is:',
          options: ['A. A question', 'B. A command', 'C. A declarative sentence with true/false value', 'D. An opinion'],
          answer: 'C. A declarative sentence with true/false value',
          diff: 'easy',
        },
        {
          q: 'Truth values are represented by:',
          options: ['A. 0 and 1', 'B. Yes and No', 'C. T and F', 'D. A and B'],
          answer: 'C. T and F',
          diff: 'easy',
        },
        {
          q: 'Which of the following is a proposition?',
          options: ['A. Close the door', 'B. x > 2', 'C. Grass is green', 'D. How are you?'],
          answer: 'C. Grass is green',
          diff: 'easy',
        },
        {
          q: 'Which is NOT a statement?',
          options: ['A. 2 + 2 = 4', 'B. It is hot today', 'C. x + y = 12', 'D. -1 > 0'],
          answer: 'C. x + y = 12',
          diff: 'medium',
        },
        {
          q: 'Compound statements are formed using:',
          options: ['A. Variables', 'B. Logical connectives', 'C. Numbers', 'D. Functions'],
          answer: 'B. Logical connectives',
          diff: 'easy',
        },
        {
          q: 'Which is a logical connective?',
          options: ['A. AND', 'B. OR', 'C. NOT', 'D. All of these'],
          answer: 'D. All of these',
          diff: 'easy',
        },
        {
          q: 'Symbol for conjunction (AND) is:',
          options: ['A. ∨', 'B. ∧', 'C. →', 'D. ~'],
          answer: 'B. ∧',
          diff: 'easy',
        },
        {
          q: 'Symbol for disjunction (OR) is:',
          options: ['A. ∨', 'B. ∧', 'C. ↔', 'D. ~'],
          answer: 'A. ∨',
          diff: 'easy',
        },
        {
          q: 'Symbol for negation (NOT) is:',
          options: ['A. →', 'B. ↔', 'C. ~', 'D. ∧'],
          answer: 'C. ~',
          diff: 'easy',
        },
        {
          q: 'Negation of a statement means:',
          options: ['A. Same truth value', 'B. Opposite truth value', 'C. Always true', 'D. Always false'],
          answer: 'B. Opposite truth value',
          diff: 'easy',
        },
        {
          q: 'If p is true, then ~p is:',
          options: ['A. True', 'B. False', 'C. Undefined', 'D. Same as p'],
          answer: 'B. False',
          diff: 'easy',
        },
        {
          q: 'p ∧ q is true when:',
          options: ['A. Both p and q are true', 'B. Either p or q is true', 'C. Both are false', 'D. Only p is true'],
          answer: 'A. Both p and q are true',
          diff: 'medium',
        },
        {
          q: 'p ∨ q is false when:',
          options: ['A. Both true', 'B. One true', 'C. Both false', 'D. None'],
          answer: 'C. Both false',
          diff: 'medium',
        },
        {
          q: 'Conditional statement uses symbol:',
          options: ['A. ∧', 'B. ∨', 'C. →', 'D. ~'],
          answer: 'C. →',
          diff: 'medium',
        },
        {
          q: 'Biconditional statement uses symbol:',
          options: ['A. →', 'B. ↔', 'C. ∨', 'D. ~'],
          answer: 'B. ↔',
          diff: 'medium',
        },
        {
          q: 'Truth table is used to:',
          options: ['A. Store data', 'B. Analyze truth values of statements', 'C. Write programs', 'D. Design circuits'],
          answer: 'B. Analyze truth values of statements',
          diff: 'easy',
        },
        {
          q: 'Which is NOT a proposition?',
          options: ['A. He is very rich', 'B. Close the door', 'C. 4 + 2 = 6', 'D. Grass is green'],
          answer: 'B. Close the door',
          diff: 'medium',
        },
        {
          q: '"It is hot and sunny" is represented as:',
          options: ['A. p ∨ q', 'B. p ∧ q', 'C. ~p', 'D. p → q'],
          answer: 'B. p ∧ q',
          diff: 'easy',
        },
        {
          q: '"It is not hot" is represented as:',
          options: ['A. p', 'B. q', 'C. ~p', 'D. p ∧ q'],
          answer: 'C. ~p',
          diff: 'easy',
        },
        {
          q: '"Neither hot nor sunny" is:',
          options: ['A. p ∧ q', 'B. ~p ∧ ~q', 'C. p ∨ q', 'D. ~p ∨ q'],
          answer: 'B. ~p ∧ ~q',
          diff: 'hard',
        },
      ],
    },
  },

  // ─────────────────────────────────────────
  //  PHY101
  // ─────────────────────────────────────────
  PHY101: {
    1: {
      title: 'Introduction to Physics',
      summary: `**Key Topics Covered:**
- What is Physics and its importance
- States of matter
- Fundamental dimensions and units
- Measurement systems (MKS, CGS)
- Dimensional analysis
- Order of magnitude

**Important Concepts:**

**Physics:**
Physics is called the "Queen of Science." It is based on experiments and reasoning. The Scientific Revolution started about 350 years ago. Newton is associated with classical mechanics.

**States of Matter:**
Matter exists in 3 main forms: Solid, Liquid, and Gas.
- Solid: atoms are fixed in place
- Liquid and Gas: both take the shape of their container

**Fundamental Dimensions:**
Three fundamental dimensions: Time (T), Length (L), and Mass (M).
- Speed = L/T
- Density = M/L³
- Frequency = 1/T
- Angle is dimensionless (no units)

**Measurement Systems:**
- MKS = Meter, Kilogram, Second (SI system)
- CGS = Centimeter, Gram, Second
- 1 mile per hour = 0.447 m/s

**Dimensional Analysis:**
Only quantities with the SAME dimensions can be added. v² = u² + 2at is dimensionally correct.

**Key Facts to Remember:**
- Physics = Queen of Science
- 3 states of matter: Solid, Liquid, Gas
- Fundamental dimensions: Time, Length, Mass
- Atomic clock is most accurate
- Order of magnitude = approximate value in powers of 10

**Quick Revision Points:**
- Physics = experiments and reasoning
- Scientific Revolution = ~350 years ago
- Newton = classical mechanics
- MKS: Meter, Kilogram, Second
- CGS: cm, gram, second
- Speed = L/T | Density = M/L³ | Frequency = 1/T
- Angle = dimensionless
- Addition of dimensions only when they are SAME`,
      questions: [
        {
          q: 'Physics is often called:',
          options: ['A. King of science', 'B. Mother of science', 'C. Queen of science', 'D. Branch of math'],
          answer: 'C. Queen of science',
          diff: 'easy',
        },
        {
          q: 'Science is based on:',
          options: ['A. Guess', 'B. Beliefs', 'C. Experiments and reasoning', 'D. Opinions'],
          answer: 'C. Experiments and reasoning',
          diff: 'easy',
        },
        {
          q: 'Scientific Revolution started about:',
          options: ['A. 100 years ago', 'B. 200 years ago', 'C. 350 years ago', 'D. 1000 years ago'],
          answer: 'C. 350 years ago',
          diff: 'medium',
        },
        {
          q: 'Who is associated with classical mechanics?',
          options: ['A. Einstein', 'B. Newton', 'C. Maxwell', 'D. Fourier'],
          answer: 'B. Newton',
          diff: 'easy',
        },
        {
          q: 'Matter exists in how many main forms?',
          options: ['A. 2', 'B. 3', 'C. 4', 'D. 5'],
          answer: 'B. 3',
          diff: 'easy',
        },
        {
          q: 'Which state of matter has fixed atoms?',
          options: ['A. Liquid', 'B. Gas', 'C. Solid', 'D. Plasma'],
          answer: 'C. Solid',
          diff: 'easy',
        },
        {
          q: 'Which state of matter takes the shape of container?',
          options: ['A. Solid', 'B. Liquid', 'C. Gas', 'D. Both B and C'],
          answer: 'D. Both B and C',
          diff: 'medium',
        },
        {
          q: 'Main goal of this course is:',
          options: ['A. Memorization', 'B. Problem solving', 'C. Writing', 'D. Drawing'],
          answer: 'B. Problem solving',
          diff: 'easy',
        },
        {
          q: 'Fundamental dimensions are:',
          options: ['A. Time, Speed, Force', 'B. Length, Width, Height', 'C. Time, Length, Mass', 'D. Energy, Work, Power'],
          answer: 'C. Time, Length, Mass',
          diff: 'easy',
        },
        {
          q: 'Dimension of speed is:',
          options: ['A. L/T', 'B. LT', 'C. T/L', 'D. L²'],
          answer: 'A. L/T',
          diff: 'medium',
        },
        {
          q: 'Dimension of density is:',
          options: ['A. M/L', 'B. M/L²', 'C. M/L³', 'D. L/M'],
          answer: 'C. M/L³',
          diff: 'medium',
        },
        {
          q: 'Frequency has dimension:',
          options: ['A. T', 'B. 1/T', 'C. L/T', 'D. M/T'],
          answer: 'B. 1/T',
          diff: 'medium',
        },
        {
          q: 'Angle is:',
          options: ['A. Fundamental quantity', 'B. Derived quantity', 'C. Dimensionless', 'D. Unit'],
          answer: 'C. Dimensionless',
          diff: 'easy',
        },
        {
          q: 'MKS system stands for:',
          options: ['A. Meter, Kelvin, Second', 'B. Meter, Kilogram, Second', 'C. Mile, Kilogram, Second', 'D. Meter, Kilogram, Speed'],
          answer: 'B. Meter, Kilogram, Second',
          diff: 'easy',
        },
        {
          q: 'CGS system uses:',
          options: ['A. Meter, kg, sec', 'B. cm, gram, sec', 'C. inch, pound, sec', 'D. meter, gram, sec'],
          answer: 'B. cm, gram, sec',
          diff: 'easy',
        },
        {
          q: '1 mile per hour is equal to:',
          options: ['A. 0.277 m/s', 'B. 0.447 m/s', 'C. 1 m/s', 'D. 3.6 m/s'],
          answer: 'B. 0.447 m/s',
          diff: 'medium',
        },
        {
          q: 'Which equation is dimensionally correct?',
          options: ['A. v² = u² + at', 'B. v² = u² + a²t²', 'C. v² = u² + 2at', 'D. d = vt²'],
          answer: 'C. v² = u² + 2at',
          diff: 'hard',
        },
        {
          q: 'Addition of dimensions is possible when:',
          options: ['A. They are different', 'B. They are same', 'C. They are zero', 'D. They are large'],
          answer: 'B. They are same',
          diff: 'easy',
        },
        {
          q: 'Best clock for accuracy is:',
          options: ['A. Pulse', 'B. Pendulum', 'C. Atomic clock', 'D. Wall clock'],
          answer: 'C. Atomic clock',
          diff: 'easy',
        },
        {
          q: 'Order of magnitude means:',
          options: ['A. Exact value', 'B. Approximate value in powers of 10', 'C. Measurement error', 'D. Unit conversion'],
          answer: 'B. Approximate value in powers of 10',
          diff: 'medium',
        },
      ],
    },
  },

  // ─────────────────────────────────────────
  //  CS101
  // ─────────────────────────────────────────
  CS101: {
    1: {
      title: 'Introduction to Computer Science',
      summary: `**Key Topics Covered:**
- What is Computer Science
- Hardware vs Software
- Computer networks
- Key CS areas: graphics, robotics, databases, security
- Career opportunities

**Important Concepts:**

**Computer Science:**
CS builds the scientific foundation for computing systems. It covers hardware, software, networks, algorithms, and more.

**Hardware vs Software:**
- Hardware = physical components (keyboard, monitor, mouse, CPU)
- Software = instructions that tell the computer what to do
- Operating System = system software (NOT hardware)
- MS Word, Photoshop, Games = application software

**Computer Networks:**
Used for sharing resources between computers. The most commonly shared resource today is the internet connection.

**Key CS Areas:**
- Computer Graphics = generating images using computers
- Robotics = programmable machines capable of automatic actions
- Database = organized collection of data for fast retrieval
- DBMS = Database Management System
- Security = Confidentiality + Integrity + Availability
- Algorithm = set of instructions to solve a problem

**Career Opportunities:**
CS is used in hospitals, banks, telecom, Pak Army, freelancing, and almost all professional fields. Software Developer is ranked #1 job in the US by Forbes.

**Key Facts to Remember:**
- OS is software, not hardware
- Algorithm = step-by-step instructions to solve a problem
- Security = Confidentiality + Integrity + Availability
- Software Developer = #1 job (Forbes)

**Quick Revision Points:**
- Hardware = physical | Software = instructions
- Network = share resources (mainly internet)
- Graphics = image generation
- Robot = programmable, automatic machine
- Database = organized data for fast retrieval
- DBMS = Database Management System
- Algorithm = problem-solving instructions`,
      questions: [
        {
          q: 'Computer Science is the discipline that mainly focuses on:',
          options: ['A. Only hardware design', 'B. Building scientific foundation for computing systems', 'C. Only programming languages', 'D. Only internet usage'],
          answer: 'B. Building scientific foundation for computing systems',
          diff: 'easy',
        },
        {
          q: 'Which of the following is NOT a component of computer hardware?',
          options: ['A. Keyboard', 'B. Operating System', 'C. Monitor', 'D. Mouse'],
          answer: 'B. Operating System',
          diff: 'easy',
        },
        {
          q: 'Computer hardware refers to:',
          options: ['A. Instructions for computer', 'B. Physical components of a computer', 'C. Internet connection', 'D. Software programs'],
          answer: 'B. Physical components of a computer',
          diff: 'easy',
        },
        {
          q: 'Computer software is best defined as:',
          options: ['A. Physical parts of computer', 'B. Set of instructions that tells computer what to do', 'C. Internet hardware', 'D. Computer cables'],
          answer: 'B. Set of instructions that tells computer what to do',
          diff: 'easy',
        },
        {
          q: 'Which one is an example of system software?',
          options: ['A. MS Word', 'B. Photoshop', 'C. Operating System', 'D. Game'],
          answer: 'C. Operating System',
          diff: 'medium',
        },
        {
          q: 'Computer programming is the process of:',
          options: ['A. Installing hardware', 'B. Designing and building executable programs', 'C. Browsing internet', 'D. Typing documents'],
          answer: 'B. Designing and building executable programs',
          diff: 'easy',
        },
        {
          q: 'A computer network is used for:',
          options: ['A. Playing games only', 'B. Sharing resources between computers', 'C. Designing hardware', 'D. Installing software'],
          answer: 'B. Sharing resources between computers',
          diff: 'easy',
        },
        {
          q: 'Which resource is most commonly shared on a computer network today?',
          options: ['A. Printer only', 'B. Internet connection', 'C. Mouse', 'D. CPU'],
          answer: 'B. Internet connection',
          diff: 'easy',
        },
        {
          q: 'Computer graphics deals with:',
          options: ['A. Writing programs', 'B. Generating images using computers', 'C. Networking computers', 'D. Data storage only'],
          answer: 'B. Generating images using computers',
          diff: 'medium',
        },
        {
          q: 'A robot is defined as:',
          options: ['A. A human-controlled machine only', 'B. A programmable machine capable of automatic actions', 'C. A computer software', 'D. A database system'],
          answer: 'B. A programmable machine capable of automatic actions',
          diff: 'easy',
        },
        {
          q: 'Database is best described as:',
          options: ['A. Random files in computer', 'B. Organized collection of data for fast retrieval', 'C. Internet browser', 'D. Programming tool'],
          answer: 'B. Organized collection of data for fast retrieval',
          diff: 'medium',
        },
        {
          q: 'DBMS stands for:',
          options: ['A. Data Backup Management System', 'B. Database Management System', 'C. Digital Binary Machine System', 'D. Data Basic Machine Software'],
          answer: 'B. Database Management System',
          diff: 'medium',
        },
        {
          q: 'Computer security ensures:',
          options: ['A. Speed only', 'B. Confidentiality, integrity, and availability', 'C. Only storage', 'D. Only internet access'],
          answer: 'B. Confidentiality, integrity, and availability',
          diff: 'hard',
        },
        {
          q: 'An algorithm is:',
          options: ['A. Computer hardware', 'B. Set of instructions to solve a problem', 'C. Internet connection', 'D. Programming language'],
          answer: 'B. Set of instructions to solve a problem',
          diff: 'easy',
        },
        {
          q: 'Information processing refers to:',
          options: ['A. Manual writing only', 'B. Manipulation of digital information by computers', 'C. Printing documents', 'D. Installing hardware'],
          answer: 'B. Manipulation of digital information by computers',
          diff: 'medium',
        },
        {
          q: 'Which of the following is a domain where Computer Science is used?',
          options: ['A. Only schools', 'B. Hospitals, banks, telecom, software industry', 'C. Only government offices', 'D. Only gaming'],
          answer: 'B. Hospitals, banks, telecom, software industry',
          diff: 'easy',
        },
        {
          q: 'Which field is ranked #1 job in US according to Forbes?',
          options: ['A. Doctor', 'B. Software Developer', 'C. Teacher', 'D. Banker'],
          answer: 'B. Software Developer',
          diff: 'medium',
        },
        {
          q: 'Which of the following is NOT a CS application area?',
          options: ['A. Freelancing', 'B. Pak Army systems', 'C. Cooking recipes', 'D. Hospitals systems'],
          answer: 'C. Cooking recipes',
          diff: 'easy',
        },
        {
          q: 'Computer Science helps in:',
          options: ['A. Only gaming', 'B. Almost all professional fields', 'C. Only banking', 'D. Only education'],
          answer: 'B. Almost all professional fields',
          diff: 'easy',
        },
        {
          q: 'Software includes:',
          options: ['A. Only hardware parts', 'B. Operating system and applications', 'C. Only internet cables', 'D. Mouse and keyboard'],
          answer: 'B. Operating system and applications',
          diff: 'easy',
        },
      ],
    },
  },

  // ─────────────────────────────────────────
  //  PAK101
  // ─────────────────────────────────────────
  PAK101: {
    1: {
      title: 'Ideology of Pakistan',
      summary: `**Key Topics Covered:**
- Definition of ideology
- Development of Pakistan's ideology
- Two Nation Theory
- Key historical figures and events
- Muslim struggle in India

**Important Concepts:**

**Ideology:**
A set of beliefs, values, and ideals that provides direction and a worldview to a nation. Pakistan's ideology developed through an evolutionary process, not suddenly.

**Key Figures:**
- Allama Iqbal = philosophical explanation of Pakistan's ideology
- Quaid-i-Azam = political leadership for Pakistan movement
- Sir Syed Ahmed Khan = started the Aligarh Movement

**Two Nation Theory:**
Based on religion — Islam and Hinduism are two completely different social orders. Muslims demanded separate electorates due to religious differences. Muslim nationhood is based on Faith (Islam).

**Historical Events Timeline:**
- Muhammad bin Qasim = conquered parts of India
- Mahmud of Ghazna = attacked India 17 times
- Ali Hujwiri and Sufis = spread Islam through teachings
- Akbar = introduced Deen-e-Ilahi
- 1857 = War of Independence
- 1867 = Hindi-Urdu controversy
- 1885 = Indian National Congress founded
- 1906 = All India Muslim League founded in Dhaka
- 1949 = Objectives Resolution passed

**Key Facts to Remember:**
- Ideology = beliefs + values + ideals
- Pakistan's ideology = evolutionary process
- Two Nation Theory = religion-based
- Deen-e-Ilahi = introduced by Akbar (not Aurangzeb)
- Muslim nationalism = social justice + equality + religious tolerance

**Quick Revision Points:**
- Iqbal = philosopher | Quaid = political leader | Sir Syed = Aligarh Movement
- Two Nation Theory = based on religion
- 1857 = War of Independence
- 1885 = Congress | 1906 = Muslim League (Dhaka)
- 1867 = Hindi-Urdu controversy
- 1949 = Objectives Resolution
- Mahmud of Ghazna attacked India 17 times`,
      questions: [
        {
          q: 'Ideology is defined as:',
          options: ['A. Political system', 'B. Set of beliefs, values and ideals', 'C. Economic policy', 'D. Religious book'],
          answer: 'B. Set of beliefs, values and ideals',
          diff: 'easy',
        },
        {
          q: 'Ideology provides:',
          options: ['A. Entertainment', 'B. Direction and worldview', 'C. Only laws', 'D. Only culture'],
          answer: 'B. Direction and worldview',
          diff: 'easy',
        },
        {
          q: 'Ideology of Pakistan developed through:',
          options: ['A. Sudden revolution', 'B. Evolutionary process', 'C. War only', 'D. Foreign influence'],
          answer: 'B. Evolutionary process',
          diff: 'medium',
        },
        {
          q: 'Philosophical explanation of Pakistan ideology was given by:',
          options: ['A. Sir Syed Ahmed Khan', 'B. Allama Iqbal', 'C. Liaquat Ali Khan', 'D. Gandhi'],
          answer: 'B. Allama Iqbal',
          diff: 'easy',
        },
        {
          q: 'Political leadership for Pakistan movement was provided by:',
          options: ['A. Allama Iqbal', 'B. Sir Syed', 'C. Quaid-i-Azam', 'D. Nehru'],
          answer: 'C. Quaid-i-Azam',
          diff: 'easy',
        },
        {
          q: 'Objectives Resolution was passed in:',
          options: ['A. 1947', 'B. 1948', 'C. 1949', 'D. 1956'],
          answer: 'C. 1949',
          diff: 'medium',
        },
        {
          q: 'Muslims demanded separate electorates because:',
          options: ['A. Economic issues', 'B. Religious differences', 'C. Cultural similarity', 'D. Language issue only'],
          answer: 'B. Religious differences',
          diff: 'medium',
        },
        {
          q: 'Two Nation Theory is based on:',
          options: ['A. Geography', 'B. Language', 'C. Religion', 'D. Economy'],
          answer: 'C. Religion',
          diff: 'easy',
        },
        {
          q: 'Islam and Hinduism are considered:',
          options: ['A. Same systems', 'B. Two social orders', 'C. Political ideologies', 'D. Economic systems'],
          answer: 'B. Two social orders',
          diff: 'medium',
        },
        {
          q: 'Muslim nationhood is based on:',
          options: ['A. Territory', 'B. Race', 'C. Language', 'D. Faith (Islam)'],
          answer: 'D. Faith (Islam)',
          diff: 'easy',
        },
        {
          q: 'Muhammad bin Qasim is known for:',
          options: ['A. Writing books', 'B. Conquering parts of India', 'C. Political leadership', 'D. Economic reforms'],
          answer: 'B. Conquering parts of India',
          diff: 'medium',
        },
        {
          q: 'Mahmud of Ghazna attacked India:',
          options: ['A. 5 times', 'B. 10 times', 'C. 17 times', 'D. 25 times'],
          answer: 'C. 17 times',
          diff: 'medium',
        },
        {
          q: 'Ali Hujwiri and other Sufis:',
          options: ['A. Fought wars', 'B. Spread Islam through teachings', 'C. Built empires', 'D. Wrote laws'],
          answer: 'B. Spread Islam through teachings',
          diff: 'easy',
        },
        {
          q: 'Deen-e-Ilahi was introduced by:',
          options: ['A. Aurangzeb', 'B. Akbar', 'C. Shah Jahan', 'D. Babur'],
          answer: 'B. Akbar',
          diff: 'hard',
        },
        {
          q: 'War of Independence took place in:',
          options: ['A. 1757', 'B. 1857', 'C. 1905', 'D. 1947'],
          answer: 'B. 1857',
          diff: 'easy',
        },
        {
          q: 'Sir Syed Ahmed Khan started:',
          options: ['A. Pakistan Movement', 'B. Aligarh Movement', 'C. Khilafat Movement', 'D. Swadeshi Movement'],
          answer: 'B. Aligarh Movement',
          diff: 'easy',
        },
        {
          q: 'Indian National Congress was founded in:',
          options: ['A. 1885', 'B. 1906', 'C. 1857', 'D. 1940'],
          answer: 'A. 1885',
          diff: 'medium',
        },
        {
          q: 'All India Muslim League was founded in:',
          options: ['A. Lahore', 'B. Karachi', 'C. Dhaka', 'D. Delhi'],
          answer: 'C. Dhaka',
          diff: 'medium',
        },
        {
          q: 'Hindi-Urdu controversy started in:',
          options: ['A. 1857', 'B. 1867', 'C. 1885', 'D. 1906'],
          answer: 'B. 1867',
          diff: 'medium',
        },
        {
          q: 'Muslim nationalism emphasizes:',
          options: ['A. Social justice', 'B. Equality', 'C. Religious tolerance', 'D. All of these'],
          answer: 'D. All of these',
          diff: 'easy',
        },
      ],
    },
  },

  // ─────────────────────────────────────────
  //  ENG101
  // ─────────────────────────────────────────
  ENG101: {
    1: {
      title: 'Dictionary Skills — Spelling, Meaning & Usage',
      summary: `**Key Topics Covered:**
- British vs American English spelling
- Multiple meanings of words (Polysemy)
- Context-based meanings of "play"
- Phrasal verbs and idioms
- Usage labels (slang, informal, colloquial)
- Foreign words and phrases

**Important Concepts:**

**Spelling Variations:**
British and American English have different spellings for the same words — both are correct:
- Theatre (British) = Theater (American)
- Catalogue (British) = Catalog (American)
Past tense of "play" = played (regular verb: add -ed)

**Polysemy — Multiple Meanings:**
One word can have many meanings depending on context. "Set" has one of the LARGEST number of meanings in the English language.

**The Word "Play" in Context:**
- "Boys play on court" = take part in a game or sport
- "Amna will play sitar" = perform on a musical instrument
- "The play was a success" = a dramatic stage performance
- "A clever play" = a move or strategy in a game
- "Played the hose on flowers" = direct a stream of water
- "Play on words" = a pun (humorous use of similar-sounding words)

**Phrasal Verbs and Idioms:**
- "Held forth" = spoke at length about a topic
- "Don't get it" = don't understand
- "Hard up" = short of money / in financial difficulty

**Usage Labels:**
- Slang/Informal: "Guys", "Cool"
- Colloquial: "O.K." = all right
Avoid slang/informal words in formal academic writing.

**Foreign Words and Phrases:**
- et cetera (etc.) = and so on
- e.g. = for example
- et al. = and others (academic citations)
- a priori = reasoning before experience
- coup d'état = sudden overthrow of a government
- per se = by or in itself

**Quick Revision Points:**
- Theatre = British | Theater = American
- Catalogue = British | Catalog = American
- "Set" has the most meanings in English
- Context determines meaning of a word
- Slang = NOT used in formal writing
- "et al." = academic citations
- "e.g." = for example | "etc." = and so on
- "a priori" = before experience
- Phrasal verbs change meaning from the base verb`,
      questions: [
        {
          q: '"Theatre" and "Theater" are:',
          options: ['A. Words with completely different meanings', 'B. The same word with different regional spellings', 'C. Both incorrect spellings', 'D. Slang words'],
          answer: 'B. The same word with different regional spellings',
          diff: 'easy',
        },
        {
          q: 'Which spelling is American English?',
          options: ['A. Theatre', 'B. Catalogue', 'C. Theater', 'D. Colour'],
          answer: 'C. Theater',
          diff: 'easy',
        },
        {
          q: 'Which spelling is British English?',
          options: ['A. Catalog', 'B. Theater', 'C. Catalogue', 'D. Color'],
          answer: 'C. Catalogue',
          diff: 'easy',
        },
        {
          q: 'The past tense of "play" is:',
          options: ['A. playd', 'B. played', 'C. playing', 'D. plays'],
          answer: 'B. played',
          diff: 'easy',
        },
        {
          q: 'The word "fast" is notable because it has:',
          options: ['A. Only one meaning', 'B. No noun form', 'C. Many different meanings across parts of speech', 'D. Only verb meanings'],
          answer: 'C. Many different meanings across parts of speech',
          diff: 'medium',
        },
        {
          q: 'The word "set" is known for:',
          options: ['A. Having very few meanings', 'B. Having one of the largest number of meanings in English', 'C. Being only a verb', 'D. Having no adjective form'],
          answer: 'B. Having one of the largest number of meanings in English',
          diff: 'medium',
        },
        {
          q: '"The boys like to play on the hard court." Here "play" means:',
          options: ['A. Perform music', 'B. Act in a drama', 'C. Take part in a game or sport', 'D. Use water'],
          answer: 'C. Take part in a game or sport',
          diff: 'easy',
        },
        {
          q: '"Amna will play the sitar in the concert." Here "play" means:',
          options: ['A. Take part in a game', 'B. Perform on a musical instrument', 'C. Act in a drama', 'D. Use a strategy'],
          answer: 'B. Perform on a musical instrument',
          diff: 'easy',
        },
        {
          q: '"The play produced by the arts club was a success." Here "play" means:',
          options: ['A. A game', 'B. A strategy', 'C. A dramatic performance or stage production', 'D. A musical performance'],
          answer: 'C. A dramatic performance or stage production',
          diff: 'easy',
        },
        {
          q: '"It was a clever play that won the football game." Here "play" means:',
          options: ['A. A drama', 'B. Music performance', 'C. A move or strategy in a game', 'D. Water direction'],
          answer: 'C. A move or strategy in a game',
          diff: 'medium',
        },
        {
          q: '"The gardener played the hose on the flower beds." Here "play" means:',
          options: ['A. Perform music', 'B. Direct a stream of water onto something', 'C. Act in a drama', 'D. Use a game strategy'],
          answer: 'B. Direct a stream of water onto something',
          diff: 'medium',
        },
        {
          q: '"A week without water can make one weak" is a play on words. This means:',
          options: ['A. A physical game using words', 'B. A humorous use of words that sound alike but have different meanings', 'C. A dramatic performance', 'D. A musical piece'],
          answer: 'B. A humorous use of words that sound alike but have different meanings',
          diff: 'hard',
        },
        {
          q: '"Prof. Widdowson held forth for over an hour." The phrase "held forth" means:',
          options: ['A. Kept quiet for a long time', 'B. Spoke at length about a topic', 'C. Walked forward', 'D. Listened carefully'],
          answer: 'B. Spoke at length about a topic',
          diff: 'medium',
        },
        {
          q: '"I don\'t get how you found the answer." Here "get" means:',
          options: ['A. Receive something', 'B. Go somewhere', 'C. Understand', 'D. Buy something'],
          answer: 'C. Understand',
          diff: 'easy',
        },
        {
          q: '"My roommate is pretty hard up these days." The phrase "hard up" means:',
          options: ['A. Working very hard', 'B. Physically strong', 'C. Short of money or in financial difficulty', 'D. Very busy'],
          answer: 'C. Short of money or in financial difficulty',
          diff: 'medium',
        },
        {
          q: 'The word "Guys" is labeled as:',
          options: ['A. Formal', 'B. Slang or informal', 'C. Technical', 'D. Academic'],
          answer: 'B. Slang or informal',
          diff: 'easy',
        },
        {
          q: 'The word "Cool" (meaning great/excellent) is labeled as:',
          options: ['A. Formal', 'B. Scientific', 'C. Slang or informal', 'D. Legal term'],
          answer: 'C. Slang or informal',
          diff: 'easy',
        },
        {
          q: 'What does "et cetera (etc.)" mean?',
          options: ['A. For example', 'B. And others (of the same kind) / and so on', 'C. That is', 'D. Before experience'],
          answer: 'B. And others (of the same kind) / and so on',
          diff: 'easy',
        },
        {
          q: 'What does "e.g." mean?',
          options: ['A. And so on', 'B. That is', 'C. For example', 'D. And others'],
          answer: 'C. For example',
          diff: 'easy',
        },
        {
          q: 'What does "coup d\'état" mean?',
          options: ['A. A peace agreement between nations', 'B. A sudden, forceful overthrow of a government', 'C. A democratic election', 'D. A legal court decision'],
          answer: 'B. A sudden, forceful overthrow of a government',
          diff: 'hard',
        },
        {
          q: 'What does "per se" mean?',
          options: ['A. For example', 'B. And others', 'C. By or in itself', 'D. Before experience'],
          answer: 'C. By or in itself',
          diff: 'medium',
        },
        {
          q: 'What does "a priori" mean?',
          options: ['A. Based on experience', 'B. And so on', 'C. By itself', 'D. Based on reasoning before experience or observation'],
          answer: 'D. Based on reasoning before experience or observation',
          diff: 'hard',
        },
        {
          q: 'What does "et al." mean?',
          options: ['A. For example', 'B. And others (used in academic citations)', 'C. And so on', 'D. By itself'],
          answer: 'B. And others (used in academic citations)',
          diff: 'medium',
        },
      ],
    },


    /// lecture 2//

    2: {
  title: 'Pronunciation & Stress',
  summary: `**Key Topics Covered:**
- English pronunciation
- Dictionary usage
- Phonemic symbols
- Vowel sounds
- Consonant sounds
- Stress in words
- Meaning changes due to stress

---

**Simple Understanding:**

**What is Pronunciation?**
👉 Pronunciation means speaking words with correct sounds.

👉 English spelling and pronunciation are often different.

---

**Dictionary Usage:**
👉 Dictionaries show pronunciation using phonemic symbols.

👉 These symbols are written between slash brackets:
/ /

---

**Examples of Different Sounds:**

- Chorus → ch = /k/
- Church → ch = /ch/
- Ration → tion = /sh/
- Machine → ch = /sh/

👉 The same letters can produce different sounds.

---

**Phonemic Symbols:**
👉 Special symbols used to show exact speech sounds.

👉 Every sound has its own symbol.

---

**Vowel Sounds:**
English has 20 vowel phonemes:

- 7 Short vowels
- 5 Long vowels
- 8 Diphthongs

---

**Long Vowels:**
👉 Long vowel symbols contain /ː/

👉 The sound is pronounced for a longer time.

---

**Diphthongs:**
👉 Diphthongs are made by combining two vowel sounds.

👉 The mouth moves from one sound to another.

---

**Consonant Sounds:**
👉 English has 24 consonant sounds.

👉 These sounds are produced by complete or partial stoppage of breath.

---

**Stress:**
👉 Stress means giving extra force to a syllable while speaking.

👉 Dictionaries show stress with a tiny mark.

Examples:
- mother
- table
- after

👉 In these words, the first syllable is stressed.

---

**Second Syllable Stress:**
Examples:
- hotel
- bamboo
- banana

👉 In these words, the second syllable is stressed.

---

**Meaning Change Due to Stress:**
👉 Some words change meaning or part of speech because of stress.

Examples:
- rebel (noun)
- rebel (verb)

- present (noun/adjective)
- present (verb)

---

**Quick Revision Points:**
- Pronunciation = correct sound
- Dictionaries use phonemic symbols
- Symbols are written in / /
- Chorus → /k/
- Church → /ch/
- Machine → /sh/
- Total vowel phonemes = 20
- Long vowels contain /ː/
- Diphthongs combine 2 vowel sounds
- English has 24 consonant sounds
- Stress = extra force on syllable
- Stress can change meaning`,
  
  questions: [
    {
      q: 'Pronunciation means:',
      options: ['A. Writing words', 'B. Speaking words correctly', 'C. Reading silently', 'D. Grammar rules'],
      answer: 'B. Speaking words correctly',
      diff: 'easy',
    },
    {
      q: 'Students face pronunciation problems because:',
      options: ['A. English has no vowels', 'B. Spellings are confusing', 'C. Dictionaries do not exist', 'D. Words are too short'],
      answer: 'B. Spellings are confusing',
      diff: 'easy',
    },
    {
      q: 'Dictionaries show pronunciation using:',
      options: ['A. Pictures', 'B. Phonemic symbols', 'C. Numbers', 'D. Colors'],
      answer: 'B. Phonemic symbols',
      diff: 'easy',
    },
    {
      q: 'Phonemic symbols are written between:',
      options: ['A. ( )', 'B. [ ]', 'C. / /', 'D. { }'],
      answer: 'C. / /',
      diff: 'easy',
    },
    {
      q: 'In the word "chorus", "ch" sounds like:',
      options: ['A. /sh/', 'B. /ch/', 'C. /k/', 'D. /t/'],
      answer: 'C. /k/',
      diff: 'easy',
    },
    {
      q: 'In the word "church", "ch" sounds like:',
      options: ['A. /k/', 'B. /sh/', 'C. /ch/', 'D. /z/'],
      answer: 'C. /ch/',
      diff: 'easy',
    },
    {
      q: 'In the word "ration", "tion" sounds like:',
      options: ['A. /sh/', 'B. /k/', 'C. /ch/', 'D. /t/'],
      answer: 'A. /sh/',
      diff: 'easy',
    },
    {
      q: 'Which word has "ch" pronounced as /sh/?',
      options: ['A. Church', 'B. Chorus', 'C. Machine', 'D. Chair'],
      answer: 'C. Machine',
      diff: 'medium',
    },
    {
      q: 'English has total vowel phonemes:',
      options: ['A. 10', 'B. 15', 'C. 20', 'D. 24'],
      answer: 'C. 20',
      diff: 'easy',
    },
    {
      q: 'How many short vowels are there in English?',
      options: ['A. 5', 'B. 7', 'C. 8', 'D. 10'],
      answer: 'B. 7',
      diff: 'easy',
    },
    {
      q: 'How many long vowels are there in English?',
      options: ['A. 5', 'B. 7', 'C. 8', 'D. 20'],
      answer: 'A. 5',
      diff: 'easy',
    },
    {
      q: 'How many diphthongs are there in English?',
      options: ['A. 5', 'B. 6', 'C. 7', 'D. 8'],
      answer: 'D. 8',
      diff: 'medium',
    },
    {
      q: 'Diphthongs are made by:',
      options: ['A. Two consonants', 'B. One vowel', 'C. Two vowel sounds', 'D. Silence'],
      answer: 'C. Two vowel sounds',
      diff: 'medium',
    },
    {
      q: 'Long vowels contain:',
      options: ['A. A star', 'B. /ː/', 'C. Brackets', 'D. Dash'],
      answer: 'B. /ː/',
      diff: 'easy',
    },
    {
      q: 'English has how many consonant sounds?',
      options: ['A. 20', 'B. 22', 'C. 24', 'D. 26'],
      answer: 'C. 24',
      diff: 'easy',
    },
    {
      q: 'Consonant sounds are produced by:',
      options: ['A. Complete or partial stoppage of breath', 'B. Only vowels', 'C. Silent reading', 'D. Nose only'],
      answer: 'A. Complete or partial stoppage of breath',
      diff: 'medium',
    },
    {
      q: 'Stress means:',
      options: ['A. Fast reading', 'B. Extra force in pronunciation', 'C. Writing clearly', 'D. Silence'],
      answer: 'B. Extra force in pronunciation',
      diff: 'easy',
    },
    {
      q: 'Dictionaries indicate stress using:',
      options: ['A. Tiny mark', 'B. Capital letters', 'C. Full stop', 'D. Slash'],
      answer: 'A. Tiny mark',
      diff: 'medium',
    },
    {
      q: 'Which word has stress on the first syllable?',
      options: ['A. Hotel', 'B. Banana', 'C. Mother', 'D. Bamboo'],
      answer: 'C. Mother',
      diff: 'easy',
    },
    {
      q: 'Which word has stress on the second syllable?',
      options: ['A. Table', 'B. After', 'C. Hotel', 'D. Mother'],
      answer: 'C. Hotel',
      diff: 'easy',
    },
    {
      q: 'Words with the same spelling may change meaning because of:',
      options: ['A. Punctuation', 'B. Stress difference', 'C. Color', 'D. Size'],
      answer: 'B. Stress difference',
      diff: 'hard',
    },
  ],
},
    

// lecture 3 //


3: {
  title: 'Topic Sentences & Main Ideas',
  summary: `**Key Topics Covered:**
- Topic sentences
- Main ideas
- Supporting details
- Communication and groups
- Plant science
- Reading skills
- Language and grammar
- Effective listening

---

**Simple Understanding:**

**Topic Sentence:**
👉 A topic sentence tells the main idea of a paragraph.

👉 Supporting details explain the topic sentence.

---

**Main Idea:**
👉 Every paragraph focuses on one central idea.

👉 Readers should identify what the writer mainly wants to explain.

---

**Text About Plants:**
👉 New plant species are discovered every year.

👉 Taxonomists classify and name plants scientifically.

👉 Plant classification is important for scientists.

---

**Groups in Sociology:**
👉 A group exists when people communicate with each other.

👉 Physical closeness alone does not make a group.

---

**Plant Physiology:**
👉 Plants absorb water, oxygen, and minerals.

👉 Plant physiology studies plant functions and activities.

---

**Reading Skills:**
👉 Good readers read for understanding, not pronunciation.

👉 Reading word by word slows comprehension.

---

**Language and Grammar:**
👉 Learning a language means learning sounds, words, and grammar rules.

👉 Grammar represents linguistic competence.

---

**Chinese Writing System:**
👉 Chinese writing uses characters representing meanings instead of sounds.

👉 Thousands of characters are needed to read Chinese.

---

**Effective Listening:**
👉 Good listeners prepare before lectures.

👉 They sit where they can hear clearly.

👉 After listening, they review and evaluate ideas.

---

**Mathematics and Units:**
👉 Unlike quantities cannot be added together.

👉 Quantities must have the same units.

---

**Computers:**
👉 There are two main types:
- Analog computers
- Digital computers

👉 Most modern computers are digital.

---

**Newspapers and Advertising:**
👉 Newspapers are important advertising media.

👉 Advertisers can target specific local areas.

---

**Speech Development in Infants:**
👉 Infant speech develops in a sequence.

👉 Vowel sounds usually develop before consonants.

---

**Famine Causes:**
👉 Famine is caused by population growth and lack of food supply.

👉 Agricultural production may not support growing populations.

---

**Anxiety Responses:**
👉 Anxiety affects people physically and psychologically.

👉 Different people react differently to anxiety.

---

**Quick Revision Points:**
- Topic sentence = main idea
- Supporting details explain the topic
- Groups require communication
- Taxonomists classify plants
- Reading for meaning is important
- Grammar = language rules
- Chinese writing uses characters
- Good listeners prepare and review
- Unlike quantities cannot be added
- Modern computers are mostly digital`,
  
  questions: [
    {
      q: 'A topic sentence mainly tells:',
      options: ['A. Minor details', 'B. Main idea', 'C. Conclusion only', 'D. Examples only'],
      answer: 'B. Main idea',
      diff: 'easy',
    },
    {
      q: 'Scientists who classify plants are called:',
      options: ['A. Florists', 'B. Morphologists', 'C. Taxonomists', 'D. Foresters'],
      answer: 'C. Taxonomists',
      diff: 'easy',
    },
    {
      q: 'Approximately how many new plant species are proposed yearly?',
      options: ['A. 470', 'B. 4700', 'C. 7000', 'D. 500'],
      answer: 'B. 4700',
      diff: 'medium',
    },
    {
      q: 'A group in sociology requires:',
      options: ['A. Physical closeness only', 'B. Communication', 'C. Friendship only', 'D. Family relation'],
      answer: 'B. Communication',
      diff: 'easy',
    },
    {
      q: 'Plant physiology studies:',
      options: ['A. Plant history', 'B. Plant classification', 'C. Plant functions and activities', 'D. Soil only'],
      answer: 'C. Plant functions and activities',
      diff: 'medium',
    },
    {
      q: 'Good reading focuses on:',
      options: ['A. Pronunciation only', 'B. Reading slowly', 'C. Understanding meaning', 'D. Finger movement'],
      answer: 'C. Understanding meaning',
      diff: 'easy',
    },
    {
      q: 'Grammar represents:',
      options: ['A. Vocabulary only', 'B. Linguistic competence', 'C. Pronunciation only', 'D. Writing style'],
      answer: 'B. Linguistic competence',
      diff: 'medium',
    },
    {
      q: 'Chinese writing system mainly represents:',
      options: ['A. Sounds', 'B. Meanings', 'C. Numbers', 'D. Symbols only'],
      answer: 'B. Meanings',
      diff: 'medium',
    },
    {
      q: 'To read a Chinese newspaper, a person needs about:',
      options: ['A. 500 characters', 'B. 1000 characters', 'C. 5000 characters', 'D. 10000 characters'],
      answer: 'C. 5000 characters',
      diff: 'hard',
    },
    {
      q: 'A good listener prepares before:',
      options: ['A. Sleeping', 'B. Writing', 'C. Speech or lecture', 'D. Examination'],
      answer: 'C. Speech or lecture',
      diff: 'easy',
    },
    {
      q: 'Effective listening is:',
      options: ['A. Passive process', 'B. Active process', 'C. Difficult process', 'D. Silent process'],
      answer: 'B. Active process',
      diff: 'medium',
    },
    {
      q: 'Unlike quantities in mathematics:',
      options: ['A. Can always be added', 'B. Cannot be added', 'C. Become equal', 'D. Are ignored'],
      answer: 'B. Cannot be added',
      diff: 'easy',
    },
    {
      q: 'Most modern computers are:',
      options: ['A. Analog', 'B. Mechanical', 'C. Digital', 'D. Hybrid'],
      answer: 'C. Digital',
      diff: 'easy',
    },
    {
      q: 'Analog computers operate using:',
      options: ['A. Counting only', 'B. Physical quantities', 'C. Writing systems', 'D. Binary code only'],
      answer: 'B. Physical quantities',
      diff: 'medium',
    },
    {
      q: 'Mathematics is called the language of:',
      options: ['A. Nature', 'B. Science', 'C. Number and size', 'D. Computers'],
      answer: 'C. Number and size',
      diff: 'easy',
    },
    {
      q: 'Newspapers are important because they:',
      options: ['A. Have limited coverage', 'B. Are expensive', 'C. Reach many areas', 'D. Replace television'],
      answer: 'C. Reach many areas',
      diff: 'easy',
    },
    {
      q: 'Infant speech development follows:',
      options: ['A. Random order', 'B. Definite sequence', 'C. No pattern', 'D. Adult speech'],
      answer: 'B. Definite sequence',
      diff: 'medium',
    },
    {
      q: 'Famine is partly caused by:',
      options: ['A. Reduced population', 'B. Increased food supply', 'C. Increased population', 'D. Better farming'],
      answer: 'C. Increased population',
      diff: 'medium',
    },
    {
      q: 'Anxiety may produce:',
      options: ['A. Better memory only', 'B. Physical and psychological responses', 'C. Happiness only', 'D. Sleep only'],
      answer: 'B. Physical and psychological responses',
      diff: 'medium',
    },
    {
      q: 'Supporting details in a paragraph:',
      options: ['A. Introduce a new topic', 'B. Explain the topic sentence', 'C. End the paragraph', 'D. Change the subject'],
      answer: 'B. Explain the topic sentence',
      diff: 'easy',
    },
  ],
},



//leacture 4 //


4: {
  title: 'What is a Computer?',
  summary: `**Key Topics Covered:**
- Definition of a computer
- Computer functions
- Input and output devices
- Memory and data processing
- Computer capabilities
- Decision making in computers
- Advantages and limitations of computers

---

**Simple Understanding:**

**What is a Computer?**
👉 A computer is an electronic machine.

👉 It works using electronic circuits and switches.

👉 It can store, process, and manipulate data.

---

**How Does a Computer Work?**
👉 A computer works by receiving instructions and data.

👉 Instructions are called programs.

👉 Data and programs are stored in memory.

---

**Main Function of a Computer:**
👉 The main job of a computer is processing information.

👉 It performs mathematical and logical operations.

---

**Basic Capabilities of Computers:**

1. Arithmetic Operations
- Addition
- Subtraction
- Multiplication
- Division
- Exponentiation

2. Communication with User
👉 Computers receive input and give output.

3. Decision Making
👉 Computers can compare numbers.

---

**Input Devices:**
👉 Devices used to enter information into a computer.

Examples:
- Punched cards
- Magnetic tape
- Disks
- Terminals

---

**Output Devices:**
👉 Devices used to display results.

Examples:
- Printer
- CRT display screen

---

**Computer Decisions:**
👉 Computers can decide:
- Less than
- Equal to
- Greater than

👉 Computers cannot make human judgments.

---

**Advantages of Computers:**
- Work very fast
- Solve problems quickly
- Perform thousands of operations
- Never become tired or bored

---

**Limitations of Computers:**
👉 Computers have no originality.

👉 They only follow instructions.

👉 They cannot think like humans.

---

**Important Point:**
👉 A computer cannot do anything unless a person gives instructions and data.

---

**Quick Revision Points:**
- Computer = electronic machine
- Main job = information processing
- Instructions = program
- Data stored in memory
- Input devices enter data
- Output devices show results
- Computers perform arithmetic operations
- Computers compare numbers
- Computers work very fast
- Computers cannot think independently`,
  
  questions: [
    {
      q: 'A computer is basically an:',
      options: ['A. Animal', 'B. Electronic machine', 'C. Human brain', 'D. Calculator only'],
      answer: 'B. Electronic machine',
      diff: 'easy',
    },
    {
      q: 'The basic job of a computer is:',
      options: ['A. Drawing pictures', 'B. Processing information', 'C. Playing games', 'D. Printing books'],
      answer: 'B. Processing information',
      diff: 'easy',
    },
    {
      q: 'Instructions given to a computer are called:',
      options: ['A. Memory', 'B. Data', 'C. Program', 'D. Signals'],
      answer: 'C. Program',
      diff: 'easy',
    },
    {
      q: 'Programs and data are stored in:',
      options: ['A. Screen', 'B. Keyboard', 'C. Printer', 'D. Memory'],
      answer: 'D. Memory',
      diff: 'easy',
    },
    {
      q: 'Computers can perform:',
      options: ['A. Arithmetic operations', 'B. Cooking', 'C. Sleeping', 'D. Breathing'],
      answer: 'A. Arithmetic operations',
      diff: 'easy',
    },
    {
      q: 'Which is NOT an arithmetic operation?',
      options: ['A. Addition', 'B. Multiplication', 'C. Division', 'D. Painting'],
      answer: 'D. Painting',
      diff: 'easy',
    },
    {
      q: 'Computers communicate with users through:',
      options: ['A. Input and output devices', 'B. Books only', 'C. Television only', 'D. Voice only'],
      answer: 'A. Input and output devices',
      diff: 'medium',
    },
    {
      q: 'Which of the following is an input device?',
      options: ['A. Printer', 'B. CRT screen', 'C. Magnetic tape', 'D. Speaker'],
      answer: 'C. Magnetic tape',
      diff: 'medium',
    },
    {
      q: 'Which device is commonly used for output?',
      options: ['A. Disk drive', 'B. Printer', 'C. Tape drive', 'D. Terminal'],
      answer: 'B. Printer',
      diff: 'easy',
    },
    {
      q: 'A CRT display screen looks like:',
      options: ['A. Radio', 'B. TV screen', 'C. Mobile phone', 'D. Typewriter'],
      answer: 'B. TV screen',
      diff: 'easy',
    },
    {
      q: 'Computers can make decisions by:',
      options: ['A. Comparing numbers', 'B. Thinking emotionally', 'C. Guessing answers', 'D. Making opinions'],
      answer: 'A. Comparing numbers',
      diff: 'medium',
    },
    {
      q: 'Computers cannot:',
      options: ['A. Add numbers', 'B. Compare values', 'C. Make human judgments', 'D. Process information'],
      answer: 'C. Make human judgments',
      diff: 'medium',
    },
    {
      q: 'Computers work according to:',
      options: ['A. Emotions', 'B. Instructions', 'C. Feelings', 'D. Imagination'],
      answer: 'B. Instructions',
      diff: 'easy',
    },
    {
      q: 'A computer can work without becoming:',
      options: ['A. Fast', 'B. Intelligent', 'C. Tired or bored', 'D. Useful'],
      answer: 'C. Tired or bored',
      diff: 'easy',
    },
    {
      q: 'Computers perform operations at:',
      options: ['A. Walking speed', 'B. Human speed', 'C. Speed of light', 'D. Sound speed'],
      answer: 'C. Speed of light',
      diff: 'hard',
    },
    {
      q: 'Computers can replace humans in:',
      options: ['A. Creative thinking', 'B. Routine tasks', 'C. Emotional decisions', 'D. Leadership'],
      answer: 'B. Routine tasks',
      diff: 'medium',
    },
    {
      q: 'Computers have no:',
      options: ['A. Circuits', 'B. Memory', 'C. Originality', 'D. Input devices'],
      answer: 'C. Originality',
      diff: 'easy',
    },
    {
      q: 'Most computers have how many basic capabilities?',
      options: ['A. Two', 'B. Three', 'C. Four', 'D. Five'],
      answer: 'B. Three',
      diff: 'medium',
    },
    {
      q: 'Computers can solve problems:',
      options: ['A. Slowly', 'B. Instantly in many cases', 'C. Only manually', 'D. Without data'],
      answer: 'B. Instantly in many cases',
      diff: 'medium',
    },
    {
      q: 'A computer cannot do anything without:',
      options: ['A. Electricity only', 'B. Human instructions', 'C. Internet', 'D. Printer'],
      answer: 'B. Human instructions',
      diff: 'easy',
    },
  ],
},



//leacture 5

5: {
  title: 'Link Words & History of Computers',
  summary: `**Key Topics Covered:**
- Link words and connectives
- Result words
- Contrast words
- Comparison words
- Cause and effect
- Addition and sequence words
- History of computers
- Computer generations
- Contextual references

---

**Simple Understanding:**

**What are Link Words?**
👉 Link words connect ideas and sentences.

👉 They improve understanding and flow of writing.

---

**Words Showing Result:**
Examples:
- therefore
- thus
- consequently
- hence

👉 These words show results or conclusions.

---

**Words Showing Contrast:**
Examples:
- but
- however
- although
- nevertheless

👉 These words show opposite ideas.

---

**Words Showing Comparison:**
Examples:
- similarly
- likewise
- just like
- equally

👉 These words compare ideas.

---

**Words Showing Examples:**
Examples:
- for example
- for instance
- such as

👉 These introduce examples.

---

**Cause and Effect Words:**
Examples:
- because
- since
- therefore
- as a result

👉 These show reasons and outcomes.

---

**Series and Time Words:**
Examples:
- first
- second
- next
- finally

👉 These show order or sequence.

---

**Addition Words:**
Examples:
- and
- besides
- furthermore
- in addition

👉 These add more information.

---

**History of Computers:**

**Primitive Times:**
👉 People used fingers for counting.

👉 The abacus was later invented.

---

**17th and 18th Centuries:**
👉 Logarithm tables and calculus were developed.

👉 Slide rule was invented.

---

**Charles Babbage:**
👉 Designed the Analytical Engine.

👉 Known as the father of computers.

---

**First Computers:**
👉 Early computers used vacuum tubes.

👉 They were large and slow.

---

**Transistors:**
👉 Replaced vacuum tubes.

👉 Made computers faster and smaller.

---

**Integrated Circuits & Chips:**
👉 Reduced computer size.

👉 Increased speed and reliability.

---

**Modern Computers:**
👉 Use microchips and integrated circuits.

👉 Have more circuits in smaller sizes.

---

**Future Computers:**
👉 Future computers may be very different from today’s computers.

---

**Contextual Reference:**
👉 Reference words point to previously mentioned ideas.

Examples:
- it
- they
- which
- that

👉 Readers must identify what these words refer to.

---

**Quick Revision Points:**
- Link words connect ideas
- therefore = result
- however = contrast
- similarly = comparison
- for example = illustration
- because = cause
- first/next/finally = sequence
- Abacus = counting device
- Charles Babbage = father of computers
- Transistors replaced vacuum tubes
- Chips made computers smaller and faster
- Reference words refer to earlier nouns`,
  
  questions: [
    {
      q: 'Link words are used to:',
      options: ['A. Break sentences', 'B. Connect ideas', 'C. Translate words', 'D. Count numbers'],
      answer: 'B. Connect ideas',
      diff: 'easy',
    },
    {
      q: 'Which word shows a result?',
      options: ['A. However', 'B. Similarly', 'C. Therefore', 'D. Although'],
      answer: 'C. Therefore',
      diff: 'easy',
    },
    {
      q: 'Which word shows contrast?',
      options: ['A. Consequently', 'B. However', 'C. Furthermore', 'D. Since'],
      answer: 'B. However',
      diff: 'easy',
    },
    {
      q: 'Which word is used for comparison?',
      options: ['A. Similarly', 'B. Because', 'C. Finally', 'D. Yet'],
      answer: 'A. Similarly',
      diff: 'easy',
    },
    {
      q: 'Which phrase introduces an example?',
      options: ['A. On the contrary', 'B. For instance', 'C. Therefore', 'D. Since'],
      answer: 'B. For instance',
      diff: 'easy',
    },
    {
      q: 'Which word shows cause and effect?',
      options: ['A. Because', 'B. Likewise', 'C. However', 'D. Next'],
      answer: 'A. Because',
      diff: 'easy',
    },
    {
      q: 'Which word shows sequence?',
      options: ['A. Finally', 'B. Although', 'C. Besides', 'D. Yet'],
      answer: 'A. Finally',
      diff: 'easy',
    },
    {
      q: 'Which word shows addition?',
      options: ['A. Conversely', 'B. Furthermore', 'C. Despite', 'D. Although'],
      answer: 'B. Furthermore',
      diff: 'easy',
    },
    {
      q: 'The earliest counting device mentioned is:',
      options: ['A. Calculator', 'B. Slide rule', 'C. Abacus', 'D. Chip'],
      answer: 'C. Abacus',
      diff: 'easy',
    },
    {
      q: 'People first used what for counting?',
      options: ['A. Computers', 'B. Fingers', 'C. Chips', 'D. Tables'],
      answer: 'B. Fingers',
      diff: 'easy',
    },
    {
      q: 'Who is known as the father of computers?',
      options: ['A. Henry Briggs', 'B. Charles Babbage', 'C. Alan Turing', 'D. Pascal'],
      answer: 'B. Charles Babbage',
      diff: 'easy',
    },
    {
      q: 'Charles Babbage designed:',
      options: ['A. Slide rule', 'B. Abacus', 'C. Analytical Engine', 'D. Calculator'],
      answer: 'C. Analytical Engine',
      diff: 'medium',
    },
    {
      q: 'Early computers used:',
      options: ['A. Chips', 'B. Transistors', 'C. Vacuum tubes', 'D. Microprocessors'],
      answer: 'C. Vacuum tubes',
      diff: 'easy',
    },
    {
      q: 'Transistors replaced:',
      options: ['A. Chips', 'B. Vacuum tubes', 'C. Abacus', 'D. Circuits'],
      answer: 'B. Vacuum tubes',
      diff: 'easy',
    },
    {
      q: 'Transistors made computers:',
      options: ['A. Larger and slower', 'B. Smaller and faster', 'C. More expensive only', 'D. Mechanical'],
      answer: 'B. Smaller and faster',
      diff: 'easy',
    },
    {
      q: 'Integrated circuits are also called:',
      options: ['A. Tubes', 'B. Engines', 'C. Chips', 'D. Beads'],
      answer: 'C. Chips',
      diff: 'medium',
    },
    {
      q: 'Microminiaturization means:',
      options: ['A. Increasing computer size', 'B. Reducing circuitry onto a chip', 'C. Removing memory', 'D. Printing data'],
      answer: 'B. Reducing circuitry onto a chip',
      diff: 'hard',
    },
    {
      q: 'Modern computers contain:',
      options: ['A. Fewer circuits', 'B. No circuits', 'C. More circuits', 'D. Wooden parts'],
      answer: 'C. More circuits',
      diff: 'medium',
    },
    {
      q: 'Reference words like “it” and “they” are used to:',
      options: ['A. Replace earlier nouns', 'B. Create questions', 'C. Show examples', 'D. Compare ideas'],
      answer: 'A. Replace earlier nouns',
      diff: 'medium',
    },
    {
      q: 'Future computers may be:',
      options: ['A. Exactly the same', 'B. Very different from today’s computers', 'C. Mechanical only', 'D. Impossible to build'],
      answer: 'B. Very different from today’s computers',
      diff: 'easy',
    },
  ],
},


// leacture 6 //



6: {
  title: 'History of Computers',
  summary: `**Key Topics Covered:**
- Early calculating devices
- Development of computers
- Charles Babbage
- Generations of computers
- Vacuum tubes and transistors
- Integrated circuits and chips
- Microminiaturization
- Future of computers

---

**Simple Understanding:**

**Early Counting Methods:**
👉 In primitive times, people used fingers for counting.

👉 Later, the abacus was invented.

---

**Abacus:**
👉 An instrument used for counting.

👉 It is still used in some places today.

---

**17th and 18th Centuries:**
👉 Logarithm tables and calculus were developed.

👉 The slide rule was invented for multiplication and division.

---

**Charles Babbage:**
👉 An English mathematician.

👉 Designed the Analytical Engine.

👉 Called the father of computers.

---

**First Computers:**
👉 Early computers used vacuum tubes.

👉 They were very large and slow.

---

**Digital Computers:**
👉 Invented by Americans in 1944.

👉 Used mainly for calculations and military purposes.

---

**Transistors:**
👉 Replaced vacuum tubes in 1947.

👉 Made computers:
- Smaller
- Faster
- More reliable

---

**Integrated Circuits (Chips):**
👉 Many circuits were placed on a small chip.

👉 This reduced computer size greatly.

---

**Microminiaturization:**
👉 Reduction of circuitry onto tiny chips.

👉 Increased computer speed and efficiency.

---

**Modern Computers:**
👉 Modern computers have more circuits than older computers.

👉 They are faster and more dependable.

---

**Future Computers:**
👉 Future computers may be very different from today’s computers.

---

**Important Vocabulary:**
- Abacus = counting device
- Calculus = branch of mathematics
- Slide rule = multiplication/division tool
- Vacuum tubes = first generation technology
- Transistors = second generation technology
- Chip = integrated circuit

---

**Quick Revision Points:**
- Fingers were first counting tools
- Abacus used for counting
- Slide rule used for calculations
- Charles Babbage designed Analytical Engine
- Vacuum tubes used in first computers
- Transistors replaced vacuum tubes
- Chips reduced computer size
- Modern computers are faster and smaller
- Future computers may change greatly`,
  
  questions: [
    {
      q: 'In primitive times, people counted using:',
      options: ['A. Computers', 'B. Fingers', 'C. Chips', 'D. Robots'],
      answer: 'B. Fingers',
      diff: 'easy',
    },
    {
      q: 'The abacus is used for:',
      options: ['A. Printing', 'B. Counting', 'C. Typing', 'D. Drawing'],
      answer: 'B. Counting',
      diff: 'easy',
    },
    {
      q: 'The abacus is:',
      options: ['A. No longer used', 'B. Still used today', 'C. A modern chip', 'D. A transistor'],
      answer: 'B. Still used today',
      diff: 'easy',
    },
    {
      q: 'The slide rule was used for:',
      options: ['A. Gaming', 'B. Counting only', 'C. Multiplication and division', 'D. Printing'],
      answer: 'C. Multiplication and division',
      diff: 'medium',
    },
    {
      q: 'Calculus is a branch of:',
      options: ['A. Biology', 'B. Mathematics', 'C. Chemistry', 'D. Physics'],
      answer: 'B. Mathematics',
      diff: 'easy',
    },
    {
      q: 'Who produced logarithm tables?',
      options: ['A. Charles Babbage', 'B. Henry Briggs', 'C. Pascal', 'D. Newton'],
      answer: 'B. Henry Briggs',
      diff: 'medium',
    },
    {
      q: 'Charles Babbage was:',
      options: ['A. An American scientist', 'B. An English mathematician', 'C. A doctor', 'D. A physicist'],
      answer: 'B. An English mathematician',
      diff: 'easy',
    },
    {
      q: 'Charles Babbage designed the:',
      options: ['A. Calculator', 'B. Slide rule', 'C. Analytical Engine', 'D. Abacus'],
      answer: 'C. Analytical Engine',
      diff: 'easy',
    },
    {
      q: 'Charles Babbage is called the:',
      options: ['A. King of Computers', 'B. Father of Computers', 'C. Inventor of Internet', 'D. Father of Mathematics'],
      answer: 'B. Father of Computers',
      diff: 'easy',
    },
    {
      q: 'First generation computers used:',
      options: ['A. Chips', 'B. Transistors', 'C. Vacuum tubes', 'D. Microprocessors'],
      answer: 'C. Vacuum tubes',
      diff: 'easy',
    },
    {
      q: 'Vacuum tube computers were:',
      options: ['A. Small and fast', 'B. Large and slow', 'C. Wireless', 'D. Portable'],
      answer: 'B. Large and slow',
      diff: 'medium',
    },
    {
      q: 'Digital computers were invented by:',
      options: ['A. British scientists', 'B. Americans', 'C. Chinese scientists', 'D. Germans'],
      answer: 'B. Americans',
      diff: 'medium',
    },
    {
      q: 'Transistors replaced:',
      options: ['A. Chips', 'B. Vacuum tubes', 'C. Slide rules', 'D. Abacus'],
      answer: 'B. Vacuum tubes',
      diff: 'easy',
    },
    {
      q: 'Transistors made computers:',
      options: ['A. Larger', 'B. Slower', 'C. Smaller and faster', 'D. Mechanical'],
      answer: 'C. Smaller and faster',
      diff: 'easy',
    },
    {
      q: 'Integrated circuits are also called:',
      options: ['A. Tubes', 'B. Chips', 'C. Beads', 'D. Engines'],
      answer: 'B. Chips',
      diff: 'easy',
    },
    {
      q: 'Microminiaturization means:',
      options: ['A. Enlarging circuits', 'B. Reducing circuitry onto chips', 'C. Removing memory', 'D. Printing data'],
      answer: 'B. Reducing circuitry onto chips',
      diff: 'hard',
    },
    {
      q: 'Modern computers have:',
      options: ['A. Fewer circuits', 'B. No circuits', 'C. More circuits', 'D. Wooden parts'],
      answer: 'C. More circuits',
      diff: 'medium',
    },
    {
      q: 'As computers evolved, their size:',
      options: ['A. Increased', 'B. Decreased', 'C. Stayed the same', 'D. Disappeared'],
      answer: 'B. Decreased',
      diff: 'medium',
    },
    {
      q: 'Modern computers are more:',
      options: ['A. Expensive only', 'B. Dependable', 'C. Mechanical', 'D. Fragile'],
      answer: 'B. Dependable',
      diff: 'medium',
    },
    {
      q: 'Future computers may be:',
      options: ['A. Exactly the same', 'B. Very different from today’s computers', 'C. Impossible to build', 'D. Mechanical only'],
      answer: 'B. Very different from today’s computers',
      diff: 'easy',
    },
  ],
},




  },
  
};

export default mcqs;