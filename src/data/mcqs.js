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



    // lecture 2 //
2: {
  title: 'Truth Tables & De Morgan’s Laws (MTH202 Lecture 2)',
  summary: `**Key Topics Covered:**
- Truth tables for compound statements (~p ∧ q, ~p ∧ (q ∨ ~r), (p∨q) ∧ ~(p∧q))
- Double negative property
- Logical equivalence and De Morgan’s Laws
- Negation of inequalities
- Tautology

---

**Simple Understanding:**

**What is a Truth Table?**
👉 A table that shows the output (T/F) for every possible combination of input values.
👉 Inputs: statements (p, q, r) → can be True (T) or False (F).

**Example Truth Tables:**
- ~p ∧ q : First find ~p, then AND with q.
- ~p ∧ (q ∨ ~r) : First find ~p, q, ~r, then (q ∨ ~r), then AND.
- (p∨q) ∧ ~(p∧q) : First find p∨q and p∧q, then ~(p∧q), then AND.

---

**Double Negative Property 🧠**
👉 ~(~p) means “p” itself.
👉 Example: “It is not true that I am not happy” = “I am happy”

---

**De Morgan’s Laws (Very Important) 🔐**
1. ~(p ∧ q) ≡ ~p ∨ ~q
   *(Negation of AND = OR of negations)*
2. ~(p ∨ q) ≡ ~p ∧ ~q
   *(Negation of OR = AND of negations)*

> ⚠️ Remember: ~(p∧q) and ~p ∧ ~q are **NOT** logically equivalent (they differ in rows 2 and 3 of the truth table).

---

**Negation of Inequalities**
Example: -1 < x ≤ 4
👉 Means: (x > -1) AND (x ≤ 4)
👉 By De Morgan’s Law, the negation is: (x ≤ -1) OR (x > 4)

---

**Tautology (Always True)**
👉 A statement form that is true for every combination of truth values.
👉 Example: p ∨ ~p (whether p is true or false, result is true)
👉 Tautology is represented by the symbol “t”.

---

**Important Vocabulary:**
- Truth table = table showing truth values for all cases
- Logical equivalence = two statements have the same truth value in every row
- De Morgan’s Laws = rules for negating AND and OR
- Double negative = two negations cancel out to the original statement
- Tautology = a statement that is always true

---

**Quick Revision Points:**
- A truth table shows results for all possible cases.
- ~(~p) ≡ p
- ~(p∧q) and ~p ∧ ~q are NOT logically equivalent.
- ~(p∧q) ≡ ~p ∨ ~q (De Morgan’s first law)
- ~(p∨q) ≡ ~p ∧ ~q (De Morgan’s second law)
- Tautology example: p ∨ ~p ≡ t
- Use De Morgan’s laws to negate inequalities.`,

  questions: [
    {
      q: 'How many possible combinations are there in a truth table if there is only one variable p?',
      options: ['A. 1', 'B. 2', 'C. 4', 'D. 8'],
      answer: 'B. 2',
      diff: 'easy',
    },
    {
      q: 'To construct the truth table for ~p ∧ q, what must be found first?',
      options: ['A. p ∧ q', 'B. ~p', 'C. ~q', 'D. p ∨ q'],
      answer: 'B. ~p',
      diff: 'easy',
    },
    {
      q: 'Which of the following is equivalent to ~(~p)?',
      options: ['A. ~p', 'B. p', 'C. true', 'D. false'],
      answer: 'B. p',
      diff: 'easy',
    },
    {
      q: 'If p = “I am happy”, then “It is not true that I am not happy” means:',
      options: ['A. I am not happy', 'B. I am happy', 'C. I am sad', 'D. Cannot say'],
      answer: 'B. I am happy',
      diff: 'medium',
    },
    {
      q: '~(p∧q) and ~p ∧ ~q:',
      options: ['A. Are always the same', 'B. Are never the same', 'C. Differ in rows 2 and 3', 'D. Differ in rows 1 and 4'],
      answer: 'C. Differ in rows 2 and 3',
      diff: 'medium',
    },
    {
      q: 'According to De Morgan’s Law, ~(p ∧ q) is equivalent to:',
      options: ['A. ~p ∧ ~q', 'B. ~p ∨ ~q', 'C. p ∧ q', 'D. p ∨ q'],
      answer: 'B. ~p ∨ ~q',
      diff: 'easy',
    },
    {
      q: 'According to De Morgan’s Law, ~(p ∨ q) is equivalent to:',
      options: ['A. ~p ∨ ~q', 'B. ~p ∧ ~q', 'C. p ∨ q', 'D. p ∧ q'],
      answer: 'B. ~p ∧ ~q',
      diff: 'easy',
    },
    {
      q: 'Using De Morgan’s Law, the negation of “The fan is slow or it is very hot” is:',
      options: ['A. The fan is slow and it is hot', 'B. The fan is not slow or it is not hot', 'C. The fan is not slow and it is not very hot', 'D. The fan is slow or it is not hot'],
      answer: 'C. The fan is not slow and it is not very hot',
      diff: 'medium',
    },
    {
      q: 'The negation of “Akram is unfit and Saleem is injured” is:',
      options: ['A. Akram is fit and Saleem is not injured', 'B. Akram is not unfit or Saleem is not injured', 'C. Akram is unfit or Saleem is injured', 'D. Akram is not unfit and Saleem is not injured'],
      answer: 'B. Akram is not unfit or Saleem is not injured',
      diff: 'medium',
    },
    {
      q: 'The statement -1 < x ≤ 4 means:',
      options: ['A. x > -1 or x ≤ 4', 'B. x > -1 and x ≤ 4', 'C. x ≥ -1 and x < 4', 'D. x < -1 or x > 4'],
      answer: 'B. x > -1 and x ≤ 4',
      diff: 'easy',
    },
    {
      q: 'Using De Morgan’s Law, the negation of -1 < x ≤ 4 is:',
      options: ['A. x ≤ -1 or x > 4', 'B. x > -1 and x ≤ 4', 'C. x ≥ -1 or x < 4', 'D. x < -1 and x > 4'],
      answer: 'A. x ≤ -1 or x > 4',
      diff: 'medium',
    },
    {
      q: 'Which of the following is a tautology?',
      options: ['A. p ∧ ~p', 'B. p ∨ ~p', 'C. p → q', 'D. p ∧ q'],
      answer: 'B. p ∨ ~p',
      diff: 'easy',
    },
    {
      q: 'A tautology is represented by which symbol?',
      options: ['A. f', 'B. t', 'C. c', 'D. 0'],
      answer: 'B. t',
      diff: 'easy',
    },
    {
      q: 'How many rows will the truth table for (p∨q) ∧ ~(p∧q) have?',
      options: ['A. 2', 'B. 4', 'C. 6', 'D. 8'],
      answer: 'B. 4',
      diff: 'easy',
    },
    {
      q: 'How many rows will the truth table for ~p ∧ (q ∨ ~r) have?',
      options: ['A. 4', 'B. 6', 'C. 8', 'D. 16'],
      answer: 'C. 8',
      diff: 'medium',
    },
    {
      q: 'Which of the following is NOT logically equivalent?',
      options: ['A. ~(~p) and p', 'B. p ∨ ~p and t', 'C. ~(p∧q) and ~p ∨ ~q', 'D. ~(p∧q) and ~p ∧ ~q'],
      answer: 'D. ~(p∧q) and ~p ∧ ~q',
      diff: 'hard',
    },
    {
      q: 'If p = true, q = false, then ~p ∧ q is:',
      options: ['A. True', 'B. False', 'C. Cannot determine', 'D. None'],
      answer: 'B. False',
      diff: 'medium',
    },
    {
      q: 'If p = false, q = true, r = false, then ~p ∧ (q ∨ ~r) is:',
      options: ['A. True', 'B. False', 'C. Tautology', 'D. Contradiction'],
      answer: 'A. True',
      diff: 'hard',
    },
    {
      q: 'Which statement form is always false?',
      options: ['A. p ∨ ~p', 'B. p ∧ ~p', 'C. p → p', 'D. p ∨ p'],
      answer: 'B. p ∧ ~p',
      diff: 'easy',
    },
    {
      q: 'In logic, “logically equivalent” means:',
      options: ['A. Same truth value in every row', 'B. Never the same', 'C. Same in only one row', 'D. None'],
      answer: 'A. Same truth value in every row',
      diff: 'easy',
    },
    {
      q: 'If p = true, q = true, then ~p ∨ ~q is:',
      options: ['A. True', 'B. False', 'C. Cannot say', 'D. None'],
      answer: 'B. False',
      diff: 'medium',
    },
    {
      q: 'De Morgan’s Laws are used for negating which connectives?',
      options: ['A. AND and OR', 'B. Only AND', 'C. Only OR', 'D. IF-THEN'],
      answer: 'A. AND and OR',
      diff: 'easy',
    }
  ]
},


// lecture 3//


3: {
  title: 'Applying Laws of Logic & Conditional Statements (MTH202 Lecture 3)',
  summary: `**Key Topics Covered:**
- Simplifying statements using laws of logic (De Morgan, Double Negative, Associative, Idempotent, Distributive, Negation, Identity)
- Conditional statements (implications): p → q
- Truth table for conditional
- Alternative ways to express implications
- Translating English sentences to symbols and vice versa
- Hierarchy of logical connectives
- Logical equivalence involving implication (Implication Law: p→q ≡ ~p∨q)
- Negation of a conditional statement: ~(p→q) ≡ p ∧ ~q
- Inverse (~p → ~q), Converse (q → p), Contrapositive (~q → ~p)

---

**Simple Understanding:**

**Laws of Logic Used for Simplification:**
- De Morgan’s Law: ~(p∧q) ≡ ~p ∨ ~q,  ~(p∨q) ≡ ~p ∧ ~q
- Double Negative: ~(~p) ≡ p
- Associative Law: (p ∨ q) ∨ r ≡ p ∨ (q ∨ r)
- Idempotent Law: p ∨ p ≡ p,  p ∧ p ≡ p
- Distributive Law: p ∧ (q ∨ r) ≡ (p∧q) ∨ (p∧r),  p ∨ (q∧r) ≡ (p∨q) ∧ (p∨r)
- Negation Law: p ∨ ~p ≡ t (tautology),  p ∧ ~p ≡ c (contradiction)
- Identity Law: p ∨ c ≡ p,  p ∧ t ≡ p

---

**Conditional Statement (Implication) p → q**
👉 Read as “If p then q” or “p implies q”
👉 p = hypothesis (antecedent), q = conclusion (consequent)
👉 It is **false only when p is true and q is false**; otherwise true.

**Truth Table for p → q:**
| p | q | p→q |
|---|---|-----|
| F | F | T   |
| F | T | T   |
| T | F | F   |
| T | T | T   |

---

**Alternative Ways to Say p → q:**
- If p then q
- p implies q
- p only if q
- q if p
- q whenever p
- p is sufficient for q
- q is necessary for p
- not p unless q

---

**Negation of Conditional:**
👉 ~(p → q) ≡ p ∧ ~q
👉 Example: Negation of “If it rains, I will stay” = “It rains and I will not stay”

---

**Inverse, Converse, Contrapositive:**
- Inverse: ~p → ~q  (not equivalent to original)
- Converse: q → p   (not equivalent to original)
- Contrapositive: ~q → ~p  (equivalent to original: p→q ≡ ~q→~p)

**Implication Law:** p → q ≡ ~p ∨ q

---

**Hierarchy of Operations (highest to lowest):**
1. ~ (negation)
2. ∧ (conjunction), ∨ (disjunction)
3. → (conditional)

---

**Important Vocabulary:**
- Hypothesis = the “if” part of an implication
- Consequent = the “then” part
- Inverse = negate both hypothesis and conclusion
- Converse = swap hypothesis and conclusion
- Contrapositive = swap and negate both
- Sufficient condition = p is sufficient for q means p→q
- Necessary condition = q is necessary for p means p→q

---

**Quick Revision Points:**
- Use laws of logic to simplify complex statements.
- p→q is false only when p=T and q=F.
- ~(p→q) ≡ p ∧ ~q
- p→q ≡ ~p ∨ q ≡ ~q → ~p (contrapositive)
- Inverse and converse are not equivalent to original.
- Conditional is not commutative (p→q ≠ q→p).
- “p only if q” means p→q.
- “p is sufficient for q” means p→q.
- “q is necessary for p” means p→q.`,

  questions: [
    {
      q: 'Which law is used in the first step of simplifying p ∨ [~(~p ∧ q)]?',
      options: ['A. Double Negative', 'B. De Morgan’s Law', 'C. Associative Law', 'D. Idempotent Law'],
      answer: 'B. De Morgan’s Law',
      diff: 'medium',
    },
    {
      q: 'What does the Double Negative Law state?',
      options: ['A. p ∧ ~p ≡ c', 'B. ~(~p) ≡ p', 'C. p ∨ p ≡ p', 'D. p → q ≡ ~p ∨ q'],
      answer: 'B. ~(~p) ≡ p',
      diff: 'easy',
    },
    {
      q: 'The Idempotent Law for ∨ states that p ∨ p is equivalent to:',
      options: ['A. p', 'B. ~p', 'C. t', 'D. c'],
      answer: 'A. p',
      diff: 'easy',
    },
    {
      q: 'Using the Distributive Law in reverse, (p ∧ q) ∨ (p ∧ r) simplifies to:',
      options: ['A. p ∧ (q ∨ r)', 'B. p ∨ (q ∧ r)', 'C. (p ∨ q) ∧ (p ∨ r)', 'D. (p ∧ q) ∨ r'],
      answer: 'A. p ∧ (q ∨ r)',
      diff: 'medium',
    },
    {
      q: 'The conditional statement p → q is false only when:',
      options: ['A. p is true and q is true', 'B. p is false and q is false', 'C. p is true and q is false', 'D. p is false and q is true'],
      answer: 'C. p is true and q is false',
      diff: 'easy',
    },
    {
      q: 'Which of the following is logically equivalent to p → q?',
      options: ['A. q → p', 'B. ~p → ~q', 'C. ~p ∨ q', 'D. p ∧ ~q'],
      answer: 'C. ~p ∨ q',
      diff: 'medium',
    },
    {
      q: 'The contrapositive of p → q is:',
      options: ['A. q → p', 'B. ~p → ~q', 'C. ~q → ~p', 'D. ~p ∨ q'],
      answer: 'C. ~q → ~p',
      diff: 'easy',
    },
    {
      q: 'A conditional statement and its contrapositive are:',
      options: ['A. Logically equivalent', 'B. Not equivalent', 'C. Always false', 'D. Always true'],
      answer: 'A. Logically equivalent',
      diff: 'easy',
    },
    {
      q: 'The inverse of p → q is:',
      options: ['A. q → p', 'B. ~p → ~q', 'C. ~q → ~p', 'D. ~p ∨ q'],
      answer: 'B. ~p → ~q',
      diff: 'easy',
    },
    {
      q: 'The converse of p → q is:',
      options: ['A. q → p', 'B. ~p → ~q', 'C. ~q → ~p', 'D. p ∧ ~q'],
      answer: 'A. q → p',
      diff: 'easy',
    },
    {
      q: 'Which of the following is NOT logically equivalent to p → q?',
      options: ['A. ~q → ~p', 'B. ~p ∨ q', 'C. q → p', 'D. ~(p ∧ ~q)'],
      answer: 'C. q → p',
      diff: 'medium',
    },
    {
      q: 'The negation of “If it rains, then the ground is wet” is:',
      options: ['A. If it rains, then ground is not wet', 'B. It rains and the ground is not wet', 'C. It does not rain and ground is wet', 'D. If ground is wet, then it rains'],
      answer: 'B. It rains and the ground is not wet',
      diff: 'medium',
    },
    {
      q: 'According to the negation of conditional, ~(p → q) is equivalent to:',
      options: ['A. ~p → ~q', 'B. ~p ∧ q', 'C. p ∧ ~q', 'D. ~p ∨ q'],
      answer: 'C. p ∧ ~q',
      diff: 'medium',
    },
    {
      q: 'Which law is used to simplify ~(~p ∧ q) to p ∨ ~q?',
      options: ['A. De Morgan and Double Negative', 'B. Only De Morgan', 'C. Only Double Negative', 'D. Distributive'],
      answer: 'A. De Morgan and Double Negative',
      diff: 'hard',
    },
    {
      q: 'In the hierarchy of logical connectives, which has the highest precedence?',
      options: ['A. ∧', 'B. ∨', 'C. ~', 'D. →'],
      answer: 'C. ~',
      diff: 'easy',
    },
    {
      q: 'The statement “p only if q” is logically equivalent to:',
      options: ['A. q → p', 'B. p → q', 'C. ~p → ~q', 'D. ~q → p'],
      answer: 'B. p → q',
      diff: 'medium',
    },
    {
      q: 'The statement “p is sufficient for q” means:',
      options: ['A. p → q', 'B. q → p', 'C. p ∧ q', 'D. p ∨ q'],
      answer: 'A. p → q',
      diff: 'medium',
    },
    {
      q: 'The statement “q is necessary for p” means:',
      options: ['A. p → q', 'B. q → p', 'C. p ∧ q', 'D. p ∨ q'],
      answer: 'A. p → q',
      diff: 'hard',
    },
    {
      q: 'If p is true and q is false, then p → q is:',
      options: ['A. True', 'B. False', 'C. Tautology', 'D. Contradiction'],
      answer: 'B. False',
      diff: 'easy',
    },
    {
      q: 'What is the truth value of “If 1=0, then 3=3”?',
      options: ['A. True', 'B. False', 'C. Cannot determine', 'D. Contradiction'],
      answer: 'A. True',
      diff: 'easy',
    },
    {
      q: 'Which of the following is the correct negation of “If n is divisible by 6, then n is divisible by 2 and n is divisible by 3”?',
      options: ['A. n is divisible by 6 and n is not divisible by 2 or not divisible by 3', 'B. n is divisible by 6 and n is divisible by 2 and n is divisible by 3', 'C. n is not divisible by 6 or n is divisible by 2', 'D. n is divisible by 6 or n is not divisible by 2'],
      answer: 'A. n is divisible by 6 and n is not divisible by 2 or not divisible by 3',
      diff: 'hard',
    },
    {
      q: 'The statement form (p → q) ∧ (~p → r) has how many rows in its truth table if p, q, r are variables?',
      options: ['A. 4', 'B. 6', 'C. 8', 'D. 16'],
      answer: 'C. 8',
      diff: 'easy',
    }
  ]
},


// lecture 4//




4: {
  title: 'Biconditional & Logical Equivalence (MTH202 Lecture 4)',
  summary: `**Key Topics Covered:**
- Biconditional statement (p ↔ q) – "p if and only if q" (iff)
- Truth table for biconditional
- Equivalence: p ↔ q ≡ (p → q) ∧ (q → p)
- Rephrasing biconditional in English
- Logical equivalence involving biconditional (e.g., ~p↔q ≡ p↔~q, ~(p⊕q) ≡ p↔q)
- Laws of logic: Commutative, Implication, Exportation, Equivalence, Reductio ad absurdum
- Rewriting statement forms without using → or ↔
- Using only ~ and ∧
- Proving tautology without truth tables

---

**Simple Understanding:**

**Biconditional (p ↔ q)**
👉 Read as "p if and only if q" (abbreviated "iff")
👉 Means: p → q AND q → p (both directions)
👉 p ↔ q is **true only when p and q have the same truth value** (both T or both F).

**Truth Table for p ↔ q:**
| p | q | p↔q |
|---|---|-----|
| F | F | T   |
| F | T | F   |
| T | F | F   |
| T | T | T   |

---

**Alternative Ways to Say p ↔ q:**
- p is necessary and sufficient for q
- if p then q, and conversely
- p is equivalent to q
- p iff q

---

**Key Logical Equivalences:**
- p ↔ q ≡ (p → q) ∧ (q → p)
- p ↔ q ≡ q ↔ p (Commutative)
- ~p ↔ q ≡ p ↔ ~q
- ~(p ⊕ q) ≡ p ↔ q (where ⊕ is exclusive OR)
- p → q ≡ ~p ∨ q ≡ ~(p ∧ ~q)
- (p ∧ q) → r ≡ p → (q → r) (Exportation Law)
- p → q ≡ (p ∧ ~q) → c (Reductio ad absurdum)

---

**Rewriting Without → or ↔:**
- To remove →: p → q ≡ ~p ∨ q
- To remove ↔: p ↔ q ≡ (p → q) ∧ (q → p) then replace → with ~ and ∨

---

**Tautology Proof (without truth table):**
Use laws of logic step by step to show a statement is always true (≡ t).

---

**Important Vocabulary:**
- Biconditional = "if and only if" (both directions)
- Iff = abbreviation for "if and only if"
- Necessary and sufficient condition = biconditional
- Exclusive OR (⊕) = true when exactly one is true
- Exportation law = (p∧q)→r ≡ p→(q→r)
- Reductio ad absurdum = proof by contradiction

---

**Quick Revision Points:**
- p ↔ q is true when p and q have same truth value.
- p ↔ q ≡ (p → q) ∧ (q → p)
- ~p ↔ q is logically equivalent to p ↔ ~q.
- ~(p ⊕ q) ≡ p ↔ q
- Exportation: (p∧q)→r ≡ p→(q→r)
- To rewrite without →, use ~p ∨ q.
- To rewrite without ↔, first expand to (p→q)∧(q→p).
- A tautology can be proved by reducing to t using laws.`,

  questions: [
    {
      q: 'The biconditional p ↔ q is true when:',
      options: ['A. p and q have opposite truth values', 'B. p and q have the same truth value', 'C. p is true and q is false', 'D. p is false and q is true'],
      answer: 'B. p and q have the same truth value',
      diff: 'easy',
    },
    {
      q: 'The symbol ↔ represents:',
      options: ['A. Implication', 'B. Negation', 'C. Biconditional', 'D. Exclusive OR'],
      answer: 'C. Biconditional',
      diff: 'easy',
    },
    {
      q: '"p if and only if q" is abbreviated as:',
      options: ['A. p → q', 'B. p ∨ q', 'C. p iff q', 'D. p ∧ q'],
      answer: 'C. p iff q',
      diff: 'easy',
    },
    {
      q: 'p ↔ q is logically equivalent to:',
      options: ['A. (p → q) ∨ (q → p)', 'B. (p → q) ∧ (q → p)', 'C. (p ∧ q) → p', 'D. (p ∨ q) → q'],
      answer: 'B. (p → q) ∧ (q → p)',
      diff: 'easy',
    },
    {
      q: 'The truth value of “1+1=3 if and only if earth is flat” is:',
      options: ['A. True', 'B. False', 'C. Cannot determine', 'D. Contradiction'],
      answer: 'A. True',
      diff: 'medium',
    },
    {
      q: 'The truth value of “Sky is blue iff 1=0” is:',
      options: ['A. True', 'B. False', 'C. Tautology', 'D. Contradiction'],
      answer: 'B. False',
      diff: 'medium',
    },
    {
      q: 'Which of the following is logically equivalent to ~p ↔ q?',
      options: ['A. p ↔ ~q', 'B. ~p ↔ ~q', 'C. p ↔ q', 'D. ~(p ↔ q)'],
      answer: 'A. p ↔ ~q',
      diff: 'hard',
    },
    {
      q: '~(p ⊕ q) is logically equivalent to:',
      options: ['A. p → q', 'B. p ∨ q', 'C. p ↔ q', 'D. p ∧ q'],
      answer: 'C. p ↔ q',
      diff: 'hard',
    },
    {
      q: 'The Exportation Law states that (p ∧ q) → r is equivalent to:',
      options: ['A. p → (q → r)', 'B. (p → q) → r', 'C. p → (q ∧ r)', 'D. (p → r) ∧ (q → r)'],
      answer: 'A. p → (q → r)',
      diff: 'medium',
    },
    {
      q: 'Which law states that p ↔ q ≡ q ↔ p?',
      options: ['A. Associative Law', 'B. Commutative Law', 'C. Distributive Law', 'D. Implication Law'],
      answer: 'B. Commutative Law',
      diff: 'easy',
    },
    {
      q: 'The Implication Law states that p → q is equivalent to:',
      options: ['A. ~p ∧ q', 'B. ~p ∨ q', 'C. p ∧ ~q', 'D. p ∨ ~q'],
      answer: 'B. ~p ∨ q',
      diff: 'easy',
    },
    {
      q: 'To rewrite a biconditional without using ↔, we first write it as:',
      options: ['A. (p → q) ∨ (q → p)', 'B. (p → q) ∧ (q → p)', 'C. p ∧ q', 'D. p ∨ q'],
      answer: 'B. (p → q) ∧ (q → p)',
      diff: 'medium',
    },
    {
      q: 'If p → q is false, then what is the truth value of ~p → q?',
      options: ['A. True', 'B. False', 'C. Cannot determine', 'D. Tautology'],
      answer: 'A. True',
      diff: 'hard',
    },
    {
      q: 'If p → q is false, then what is the truth value of p ∨ q?',
      options: ['A. True', 'B. False', 'C. Cannot determine', 'D. Contradiction'],
      answer: 'A. True',
      diff: 'hard',
    },
    {
      q: 'If p → q is false, then what is the truth value of q ↔ p?',
      options: ['A. True', 'B. False', 'C. Cannot determine', 'D. Tautology'],
      answer: 'B. False',
      diff: 'hard',
    },
    {
      q: 'The expression “p is necessary and sufficient for q” means:',
      options: ['A. p → q', 'B. q → p', 'C. p ↔ q', 'D. ~p → ~q'],
      answer: 'C. p ↔ q',
      diff: 'medium',
    },
    {
      q: 'Reductio ad absurdum is a law that states:',
      options: ['A. p → q ≡ (p ∧ ~q) → c', 'B. p → q ≡ ~p ∨ q', 'C. (p ∧ q) → r ≡ p → (q → r)', 'D. p ↔ q ≡ (p → q) ∧ (q → p)'],
      answer: 'A. p → q ≡ (p ∧ ~q) → c',
      diff: 'hard',
    },
    {
      q: 'How many rows are there in the truth table for (p↔q)↔(r↔q)?',
      options: ['A. 4', 'B. 6', 'C. 8', 'D. 16'],
      answer: 'C. 8',
      diff: 'easy',
    },
    {
      q: 'Which of the following statements is true about the biconditional?',
      options: ['A. p ↔ q ≡ ~p ↔ ~q', 'B. p ↔ q ≡ ~p ↔ q', 'C. p ↔ q ≡ q → p', 'D. p ↔ q ≡ p ∨ q'],
      answer: 'A. p ↔ q ≡ ~p ↔ ~q',
      diff: 'medium',
    },
    {
      q: 'The statement form (p∧~q)→r is equivalent to which of the following without using →?',
      options: ['A. ~(p∧~q) ∨ r', 'B. ~(p∧~q) ∧ r', 'C. (p∧~q) ∨ ~r', 'D. ~(p∨~q) ∨ r'],
      answer: 'A. ~(p∧~q) ∨ r',
      diff: 'medium',
    },
    {
      q: 'To rewrite a statement using only ~ and ∧, the implication law p→q ≡ ~(p ∧ ~q) is used. This is based on which equivalence?',
      options: ['A. p→q ≡ ~p ∨ q, then De Morgan', 'B. p→q ≡ p ∧ ~q', 'C. p→q ≡ ~q → ~p', 'D. p→q ≡ ~(p ∨ q)'],
      answer: 'A. p→q ≡ ~p ∨ q, then De Morgan',
      diff: 'hard',
    },
    {
      q: 'A tautology is a statement that is:',
      options: ['A. Always false', 'B. Always true', 'C. Sometimes true', 'D. Logically equivalent to its negation'],
      answer: 'B. Always true',
      diff: 'easy',
    }
  ]
},


//lecture 6// 
6: {
  title: 'Switching Circuits & Boolean Expressions (Lecture #6)',
  summary: `**Key Topics Covered:**
- Switches in series (AND operation)
- Switches in parallel (OR operation)
- NOT gate, AND gate, OR gate
- Combinational circuits (no memory)
- Determining output for given inputs
- Input/Output truth tables
- Finding Boolean expression from a circuit
- Constructing circuit from Boolean expression
- Logical equivalence of circuits (proof using laws of logic)

---

**Simple Understanding:**

**Switches in Series:**
👉 Switches connected one after another.
👉 Current passes only if ALL switches are ON (1).
👉 Rule: Series = AND operation → Boolean form: A ∧ B

**Switches in Parallel:**
👉 Multiple paths for current.
👉 If ANY switch is ON, current passes.
👉 Rule: Parallel = OR operation → Boolean form: A ∨ B

---

**Logic Gates:**

**NOT Gate:**
👉 Inverts the input.
👉 Input 1 → Output 0, Input 0 → Output 1
👉 Boolean: ¬P (or ~P)

**AND Gate:**
👉 Output is 1 only when BOTH inputs are 1.
👉 Boolean: P ∧ Q

**OR Gate:**
👉 Output is 1 if ANY input is 1.
👉 Boolean: P ∨ Q

---

**Combinational Circuit:**
👉 A combination of AND, OR, NOT gates.
👉 Output depends ONLY on current inputs (no memory involved).

---

**Determining Output for Given Inputs:**
Example: P=1, Q=0, R=0
👉 Step-by-step: solve each gate from left to right.
👉 Final output is the circuit's result.

---

**Input/Output Truth Table:**
👉 Shows output for every possible input combination.
👉 Fully describes circuit behavior.

---

**Finding Boolean Expression for a Circuit:**
👉 Break circuit into gates.
👉 Move from left to right.
👉 Write expression for each gate.
👉 Simplify the final expression.

---

**Constructing Circuit from Boolean Expression:**
Example: (P ∧ Q) ∨ ¬R
👉 Step 1: AND gate for (P ∧ Q)
👉 Step 2: NOT gate for R
👉 Step 3: OR gate to combine both outputs

---

**Circuit ↔ Truth Table ↔ Boolean Expression:**
👉 All three represent the same logic.

---

**Logical Equivalence Proof (Important Example):**

Given: (P∧Q) ∨ (¬P∧Q) ∨ (P∧¬Q)

Simplify step by step:

1. Factor: (P ∨ ¬P) ∧ Q ∨ (P ∧ ¬Q)
2. Negation Law: (t) ∧ Q ∨ (P ∧ ¬Q)
3. Identity Law: Q ∨ (P ∧ ¬Q)
4. Distributive Law: (Q ∨ P) ∧ (Q ∨ ¬Q)
5. Negation Law: (Q ∨ P) ∧ t
6. Identity Law: P ∨ Q

**Result:** (P∧Q) ∨ (¬P∧Q) ∨ (P∧¬Q) ≡ P ∨ Q

👉 Therefore, the two circuits are logically equivalent.

---

**Important Vocabulary:**
- Series = AND operation (A∧B)
- Parallel = OR operation (A∨B)
- NOT gate = inverter (¬P)
- AND gate = output 1 only if both inputs are 1
- OR gate = output 1 if any input is 1
- Combinational circuit = outputs depend only on current inputs
- Truth table = lists output for all input combinations
- Logical equivalence = two circuits/expressions have same output for all inputs

---

**Quick Revision Points:**
- Series switches = AND (A∧B)
- Parallel switches = OR (A∨B)
- NOT gate inverts the input.
- AND gate gives 1 only when both inputs are 1.
- OR gate gives 1 when at least one input is 1.
- Combinational circuits have no memory.
- Boolean expression, circuit, and truth table are interchangeable.
- Use laws of logic (distributive, negation, identity) to prove equivalence.
- Simplification can reduce complex circuits to simpler ones.`,

  questions: [
    {
      q: 'Switches connected in series represent which Boolean operation?',
      options: ['A. OR', 'B. AND', 'C. NOT', 'D. XOR'],
      answer: 'B. AND',
      diff: 'easy',
    },
    {
      q: 'Switches connected in parallel represent which Boolean operation?',
      options: ['A. AND', 'B. NOR', 'C. OR', 'D. NAND'],
      answer: 'C. OR',
      diff: 'easy',
    },
    {
      q: 'Current passes through a series circuit only when:',
      options: ['A. At least one switch is ON', 'B. All switches are ON', 'C. All switches are OFF', 'D. Exactly one switch is ON'],
      answer: 'B. All switches are ON',
      diff: 'easy',
    },
    {
      q: 'Current passes through a parallel circuit when:',
      options: ['A. All switches must be ON', 'B. No switch is ON', 'C. At least one switch is ON', 'D. Only two switches are ON'],
      answer: 'C. At least one switch is ON',
      diff: 'easy',
    },
    {
      q: 'A NOT gate (inverter) output when input is 1 is:',
      options: ['A. 1', 'B. 0', 'C. 1 or 0', 'D. Undefined'],
      answer: 'B. 0',
      diff: 'easy',
    },
    {
      q: 'An AND gate outputs 1 only when:',
      options: ['A. Both inputs are 0', 'B. Both inputs are 1', 'C. At least one input is 1', 'D. Inputs are different'],
      answer: 'B. Both inputs are 1',
      diff: 'easy',
    },
    {
      q: 'An OR gate outputs 1 when:',
      options: ['A. Both inputs are 0', 'B. Both inputs are 1', 'C. At least one input is 1', 'D. Inputs are the same'],
      answer: 'C. At least one input is 1',
      diff: 'easy',
    },
    {
      q: 'A combinational circuit’s output depends on:',
      options: ['A. Past inputs only', 'B. Current inputs only', 'C. Both past and current inputs', 'D. Random values'],
      answer: 'B. Current inputs only',
      diff: 'medium',
    },
    {
      q: 'Which of the following does NOT involve memory?',
      options: ['A. Sequential circuit', 'B. Combinational circuit', 'C. Flip-flop', 'D. Register'],
      answer: 'B. Combinational circuit',
      diff: 'medium',
    },
    {
      q: 'An input/output table that shows output for all input combinations is called a:',
      options: ['A. Circuit diagram', 'B. Truth table', 'C. Flow chart', 'D. State table'],
      answer: 'B. Truth table',
      diff: 'easy',
    },
    {
      q: 'To find the Boolean expression from a circuit, you should:',
      options: ['A. Start from right to left', 'B. Start from left to right', 'C. Randomly guess', 'D. Ignore NOT gates'],
      answer: 'B. Start from left to right',
      diff: 'medium',
    },
    {
      q: 'The Boolean expression (P ∧ Q) ∨ ¬R corresponds to a circuit with:',
      options: ['A. AND, OR, NOT gates', 'B. Only AND gates', 'C. Only OR gates', 'D. Only NOT gates'],
      answer: 'A. AND, OR, NOT gates',
      diff: 'easy',
    },
    {
      q: 'Given the simplification: (P∧Q) ∨ (¬P∧Q) ∨ (P∧¬Q) simplifies to:',
      options: ['A. P ∧ Q', 'B. P ∨ Q', 'C. ¬P ∧ ¬Q', 'D. P ⊕ Q'],
      answer: 'B. P ∨ Q',
      diff: 'medium',
    },
    {
      q: 'Which law is used in the step (P ∨ ¬P) ∧ Q ≡ t ∧ Q?',
      options: ['A. Identity Law', 'B. Negation Law', 'C. Distributive Law', 'D. De Morgan’s Law'],
      answer: 'B. Negation Law',
      diff: 'medium',
    },
    {
      q: 'Which law simplifies t ∧ Q to Q?',
      options: ['A. Negation Law', 'B. Identity Law', 'C. Domination Law', 'D. Idempotent Law'],
      answer: 'B. Identity Law',
      diff: 'easy',
    },
    {
      q: 'The distributive law in the proof gave: Q ∨ (P ∧ ¬Q) ≡ (Q ∨ P) ∧ (Q ∨ ¬Q). This is which distributive form?',
      options: ['A. AND over OR', 'B. OR over AND', 'C. NOT over AND', 'D. NOT over OR'],
      answer: 'B. OR over AND',
      diff: 'hard',
    },
    {
      q: 'Two circuits are logically equivalent if:',
      options: ['A. They have the same number of gates', 'B. They produce the same output for all input combinations', 'C. They use the same type of gates', 'D. They have the same Boolean expression without simplification'],
      answer: 'B. They produce the same output for all input combinations',
      diff: 'easy',
    },
    {
      q: 'A Boolean expression, circuit, and truth table:',
      options: ['A. Are completely unrelated', 'B. Represent the same logic in different forms', 'C. Always give different results', 'D. Can never be converted to each other'],
      answer: 'B. Represent the same logic in different forms',
      diff: 'easy',
    },
    {
      q: 'If a circuit has three inputs P, Q, R, how many rows will its truth table have?',
      options: ['A. 4', 'B. 6', 'C. 8', 'D. 16'],
      answer: 'C. 8',
      diff: 'easy',
    },
    {
      q: 'Which of the following is the Boolean expression for a series circuit with two switches A and B?',
      options: ['A. A ∨ B', 'B. A ∧ B', 'C. ¬A ∧ B', 'D. A ∨ ¬B'],
      answer: 'B. A ∧ B',
      diff: 'easy',
    },
    {
      q: 'Which of the following is the Boolean expression for a parallel circuit with two switches A and B?',
      options: ['A. A ∧ B', 'B. A ∨ B', 'C. ¬A ∧ ¬B', 'D. A ⊕ B'],
      answer: 'B. A ∨ B',
      diff: 'easy',
    },
    {
      q: 'In the simplification example, the final simplified expression was P ∨ Q. This means the original complex circuit behaves like:',
      options: ['A. An AND gate', 'B. An OR gate', 'C. A NOT gate', 'D. A NAND gate'],
      answer: 'B. An OR gate',
      diff: 'medium',
    }
  ]
},



// lecture 7//

7: {
  title: 'Sets, Subsets, and Set Notations (MTH202 Lecture 7)',
  summary: `**Key Topics Covered:**
- Definition of a set and its elements
- Tabular form, Descriptive form, Set Builder form
- Standard sets of numbers (N, W, Z, E, O, P, Q, Q', R, C)
- Subset (⊆) and proper subset (⊂)
- Equal sets
- Null set (empty set) ∅
- Universal set (U)
- Venn diagram
- Finite and infinite sets
- Cardinality of a finite set |S|
- Membership table

---

**Simple Understanding:**

**What is a Set?**
👉 A well-defined collection of distinct objects.
👉 Objects are called elements or members.
👉 Sets are denoted by capital letters (A, B, C, …).
👉 Elements are denoted by lowercase letters (a, b, c, …).
👉 x ∈ A means "x belongs to A" or "x is an element of A".
👉 x ∉ A means "x does not belong to A".

---

**Three Ways to Represent a Set:**

**1. Tabular Form (Roster Form):**
👉 List all elements inside curly braces { }, separated by commas.
👉 Example: A = {1, 2, 3, 4, 5}

**2. Descriptive Form:**
👉 Describe the set in words.
👉 Example: A = set of first five natural numbers.

**3. Set Builder Form:**
👉 Write a symbolic rule that all elements share.
👉 Example: A = {x ∈ N | x ≤ 5}  (read: "x such that x is in N and x ≤ 5")
👉 The vertical bar | means "such that".

---

**Standard Sets of Numbers:**
- N = {1, 2, 3, …} (Natural numbers)
- W = {0, 1, 2, 3, …} (Whole numbers)
- Z = {…, -3, -2, -1, 0, 1, 2, 3, …} (Integers – from German "Zahlen")
- E = {0, ±2, ±4, …} (Even integers)
- O = {±1, ±3, ±5, …} (Odd integers)
- P = {2, 3, 5, 7, 11, 13, …} (Prime numbers)
- Q = {p/q | p,q ∈ Z, q ≠ 0} (Rational numbers)
- Q' = {x | x is not rational} (Irrational numbers, e.g., √2, π)
- R = Q ∪ Q' (Real numbers)
- C = {x + iy | x,y ∈ R} (Complex numbers)

---

**Subset (⊆):**
👉 A ⊆ B if every element of A is also an element of B.
👉 Symbolically: A ⊆ B ⇔ (if x ∈ A then x ∈ B)
👉 B is called a superset of A.
👉 Every set is a subset of itself.
👉 ∅ (empty set) is a subset of every set.

**Proper Subset (⊂):**
👉 A ⊂ B if A ⊆ B and there exists at least one element in B that is not in A.

---

**Equal Sets:**
👉 A = B if and only if A ⊆ B and B ⊆ A.
👉 Order of elements does not matter; repetitions are ignored.

---

**Null Set (Empty Set):**
👉 A set with no elements, denoted ∅ or { }.
👉 Example: {x | x is a person taller than 10 feet} = ∅

---

**Universal Set (U):**
👉 The set of all elements under consideration in a given context.

---

**Venn Diagram:**
👉 A graphical representation using a rectangle for U and circles/disks for sets.

---

**Finite vs Infinite Sets:**
- Finite set: Contains exactly m distinct elements (m ≥ 0). Cardinality |S| = m.
- Infinite set: Not finite (e.g., set of positive integers).
- |∅| = 0

**Examples:**
- {months in a year} → finite (|S|=12)
- {even integers} → infinite

---

**Membership Table:**
👉 A table using 1 (member) and 0 (not member) to represent set membership.
👉 Used to prove set identities.

Example for complement:
| A | Aᶜ |
|---|---|
| 1 | 0  |
| 0 | 1  |

---

**Important Vocabulary:**
- Set = collection of distinct objects
- Element = member of a set
- Tabular form = listing all elements
- Descriptive form = describing in words
- Set builder form = symbolic rule with condition
- Subset = all elements of one set are in another
- Proper subset = subset with at least one extra element in superset
- Null set = empty set (∅)
- Universal set = all elements under consideration
- Venn diagram = graphical representation
- Finite set = countable number of elements
- Cardinality = number of elements in a finite set
- Membership table = 0/1 table for set membership

---

**Quick Revision Points:**
- Sets are denoted by capital letters, elements by lowercase.
- Three ways to represent: tabular, descriptive, set builder.
- Standard number sets: N ⊂ W ⊂ Z ⊂ Q ⊂ R ⊂ C.
- A ⊆ B means every element of A is in B.
- A ⊂ B means A ⊆ B and A ≠ B.
- Two sets are equal if they have exactly the same elements.
- ∅ has no elements; ∅ ⊆ every set.
- Venn diagrams visually represent sets.
- Finite set has a countable number of elements; infinite does not.
- Membership tables use 1 and 0 to show membership.`,

  questions: [
    {
      q: 'A set is defined as:',
      options: ['A. A collection of objects that may repeat', 'B. A well-defined collection of distinct objects', 'C. Any list of numbers', 'D. A random group of items'],
      answer: 'B. A well-defined collection of distinct objects',
      diff: 'easy',
    },
    {
      q: 'Which symbol means "x belongs to A"?',
      options: ['A. x ⊂ A', 'B. x ⊆ A', 'C. x ∈ A', 'D. x ∉ A'],
      answer: 'C. x ∈ A',
      diff: 'easy',
    },
    {
      q: 'Listing all elements inside curly braces separated by commas is called:',
      options: ['A. Descriptive form', 'B. Set builder form', 'C. Tabular form', 'D. Membership table'],
      answer: 'C. Tabular form',
      diff: 'easy',
    },
    {
      q: 'The descriptive form of {1, 2, 3, 4, 5} is:',
      options: ['A. Set of first five whole numbers', 'B. Set of first five natural numbers', 'C. Set of integers less than 5', 'D. Set of positive odd numbers'],
      answer: 'B. Set of first five natural numbers',
      diff: 'easy',
    },
    {
      q: 'In set builder notation, the vertical bar "|" means:',
      options: ['A. Such that', 'B. Or', 'C. And', 'D. Therefore'],
      answer: 'A. Such that',
      diff: 'easy',
    },
    {
      q: 'The set builder form {x ∈ N | x ≤ 5} represents:',
      options: ['A. {0,1,2,3,4,5}', 'B. {1,2,3,4,5}', 'C. {5,6,7,...}', 'D. {0,1,2,3,4}'],
      answer: 'B. {1,2,3,4,5}',
      diff: 'medium',
    },
    {
      q: 'The set of integers is denoted by:',
      options: ['A. N', 'B. W', 'C. Z', 'D. Q'],
      answer: 'C. Z',
      diff: 'easy',
    },
    {
      q: 'The letter Z for integers comes from the German word:',
      options: ['A. Zahlen', 'B. Ziffer', 'C. Zeit', 'D. Zentrum'],
      answer: 'A. Zahlen',
      diff: 'medium',
    },
    {
      q: 'Which of the following is the set of rational numbers?',
      options: ['A. {p/q | p,q ∈ Z, q ≠ 0}', 'B. {x | x is not rational}', 'C. {1,2,3,...}', 'D. {x + iy | x,y ∈ R}'],
      answer: 'A. {p/q | p,q ∈ Z, q ≠ 0}',
      diff: 'easy',
    },
    {
      q: 'Which of the following is an irrational number?',
      options: ['A. 2', 'B. 1/2', 'C. √2', 'D. -3'],
      answer: 'C. √2',
      diff: 'easy',
    },
    {
      q: 'The symbol ⊆ means:',
      options: ['A. Proper subset', 'B. Subset (not necessarily proper)', 'C. Element of', 'D. Union'],
      answer: 'B. Subset (not necessarily proper)',
      diff: 'easy',
    },
    {
      q: 'If A ⊆ B and there exists at least one element in B that is not in A, then A is a:',
      options: ['A. Subset', 'B. Proper subset', 'C. Superset', 'D. Null set'],
      answer: 'B. Proper subset',
      diff: 'easy',
    },
    {
      q: 'Every set is a subset of:',
      options: ['A. Itself', 'B. The empty set', 'C. Its complement', 'D. No set'],
      answer: 'A. Itself',
      diff: 'easy',
    },
    {
      q: 'The empty set is denoted by:',
      options: ['A. U', 'B. ∅', 'C. E', 'D. N'],
      answer: 'B. ∅',
      diff: 'easy',
    },
    {
      q: 'Which of the following is true about the empty set?',
      options: ['A. ∅ contains one element', 'B. ∅ is a subset of every set', 'C. ∅ is not a subset of itself', 'D. ∅ is infinite'],
      answer: 'B. ∅ is a subset of every set',
      diff: 'easy',
    },
    {
      q: 'Two sets A and B are equal if:',
      options: ['A. A ⊆ B and B ⊆ A', 'B. A ⊂ B only', 'C. A and B have same number of elements', 'D. A ∩ B = ∅'],
      answer: 'A. A ⊆ B and B ⊆ A',
      diff: 'medium',
    },
    {
      q: 'The cardinality of a finite set S, denoted |S|, is:',
      options: ['A. The number of distinct elements in S', 'B. The sum of elements in S', 'C. The largest element in S', 'D. The number of subsets of S'],
      answer: 'A. The number of distinct elements in S',
      diff: 'easy',
    },
    {
      q: '|∅| equals:',
      options: ['A. 1', 'B. 0', 'C. Undefined', 'D. Infinite'],
      answer: 'B. 0',
      diff: 'easy',
    },
    {
      q: 'Which of the following is an infinite set?',
      options: ['A. Set of months in a year', 'B. Set of even integers', 'C. Set of letters in English alphabet', 'D. Set of prime numbers less than 100'],
      answer: 'B. Set of even integers',
      diff: 'easy',
    },
    {
      q: 'A Venn diagram represents the universal set as:',
      options: ['A. A circle', 'B. A triangle', 'C. A rectangle', 'D. A point'],
      answer: 'C. A rectangle',
      diff: 'easy',
    },
    {
      q: 'In a membership table, a 1 indicates:',
      options: ['A. The element is not in the set', 'B. The element is in the set', 'C. The set is empty', 'D. The set is infinite'],
      answer: 'B. The element is in the set',
      diff: 'easy',
    },
    {
      q: 'Which of the following statements is false?',
      options: ['A. {x} ⊆ {x}', 'B. x ∈ {x}', 'C. {x} ∈ {x}', 'D. ∅ ⊆ {x}'],
      answer: 'C. {x} ∈ {x}',
      diff: 'medium',
    },
    {
      q: 'If A = {1,3,5} and B = {1,2,3,5}, then:',
      options: ['A. A ⊂ B', 'B. B ⊂ A', 'C. A = B', 'D. A is not a subset of B'],
      answer: 'A. A ⊂ B',
      diff: 'easy',
    }
  ]
},

// lecture 8//


8: {
  title: 'Set Operations: Union, Intersection, Difference, Complement (MTH202 Lecture 8)',
  summary: `**Key Topics Covered:**
- Union of sets (A ∪ B)
- Intersection of sets (A ∩ B)
- Difference of sets (A – B or A \ B)
- Complement of a set (Aᶜ or A′)
- Venn diagram representations
- Membership tables (0/1 tables)
- Proving set identities using Venn diagrams and membership tables
- Disjoint sets
- Set identities: A – (A – B) = A ∩ B, (A ∩ B)ᶜ = Aᶜ ∪ Bᶜ, A – B = A ∩ Bᶜ

---

**Simple Understanding:**

**Union (A ∪ B):**
👉 Set of all elements that belong to A OR B (or both).
👉 Symbol: A ∪ B = {x ∈ U | x ∈ A or x ∈ B}
👉 Commutative: A ∪ B = B ∪ A
👉 A ⊆ A ∪ B and B ⊆ A ∪ B
👉 Membership table corresponds to logical OR (∨).

**Intersection (A ∩ B):**
👉 Set of all elements that belong to BOTH A and B.
👉 Symbol: A ∩ B = {x ∈ U | x ∈ A and x ∈ B}
👉 Commutative: A ∩ B = B ∩ A
👉 A ∩ B ⊆ A and A ∩ B ⊆ B
👉 If A ∩ B = ∅, then A and B are called disjoint sets.
👉 Membership table corresponds to logical AND (∧).

**Difference (A – B):**
👉 Set of all elements that belong to A but NOT to B.
👉 Symbol: A – B = {x ∈ U | x ∈ A and x ∉ B}
👉 Not commutative: A – B ≠ B – A
👉 A – B ⊆ A
👉 A – B, A ∩ B, and B – A are mutually disjoint.

**Complement (Aᶜ):**
👉 Set of all elements in U that do NOT belong to A.
👉 Symbol: Aᶜ = {x ∈ U | x ∉ A} = U – A
👉 A ∩ Aᶜ = ∅
👉 A ∪ Aᶜ = U
👉 Membership table corresponds to logical NOT (~).

---

**Venn Diagrams:**
- Universal set U = rectangle
- Sets = circles/disks inside rectangle
- Shaded regions represent the resulting set.

**Membership Table:**
- Uses 1 (element is in set) and 0 (element not in set).
- Proves set identities by showing matching columns for all combinations.

---

**Proving Set Identities:**

**Identity 1:** A – (A – B) = A ∩ B
- Verified by Venn diagram and membership table.

**Identity 2:** (A ∩ B)ᶜ = Aᶜ ∪ Bᶜ (De Morgan's Law for sets)
- Verified by Venn diagram and membership table.

**Identity 3:** A – B = A ∩ Bᶜ
- Verified by Venn diagram and membership table.

---

**Important Vocabulary:**
- Union = A ∪ B (elements in A or B)
- Intersection = A ∩ B (elements in both)
- Difference = A – B (elements in A not in B)
- Complement = Aᶜ (elements not in A)
- Disjoint sets = sets with empty intersection
- Venn diagram = graphical representation of sets
- Membership table = table with 1s and 0s for set membership
- Set identity = equality of two set expressions

---

**Quick Revision Points:**
- A ∪ B = {x | x ∈ A or x ∈ B}
- A ∩ B = {x | x ∈ A and x ∈ B}
- A – B = {x | x ∈ A and x ∉ B}
- Aᶜ = {x ∈ U | x ∉ A} = U – A
- Union ↔ OR, Intersection ↔ AND, Complement ↔ NOT
- Venn diagrams visually show set operations.
- Membership tables (0/1) prove set identities.
- De Morgan's Law for sets: (A ∩ B)ᶜ = Aᶜ ∪ Bᶜ
- Also: (A ∪ B)ᶜ = Aᶜ ∩ Bᶜ
- A – (A – B) = A ∩ B
- A – B = A ∩ Bᶜ
- A and B are disjoint if A ∩ B = ∅`,

  questions: [
    {
      q: 'The union of sets A and B is denoted by:',
      options: ['A. A ∩ B', 'B. A ∪ B', 'C. A – B', 'D. Aᶜ'],
      answer: 'B. A ∪ B',
      diff: 'easy',
    },
    {
      q: 'The union A ∪ B consists of elements that belong to:',
      options: ['A. A only', 'B. B only', 'C. A or B (or both)', 'D. A and B both'],
      answer: 'C. A or B (or both)',
      diff: 'easy',
    },
    {
      q: 'The intersection of sets A and B is denoted by:',
      options: ['A. A ∪ B', 'B. A – B', 'C. A ∩ B', 'D. Aᶜ'],
      answer: 'C. A ∩ B',
      diff: 'easy',
    },
    {
      q: 'A ∩ B consists of elements that belong to:',
      options: ['A. A or B', 'B. A and B both', 'C. A only', 'D. B only'],
      answer: 'B. A and B both',
      diff: 'easy',
    },
    {
      q: 'The set difference A – B consists of elements that belong to:',
      options: ['A. A and B both', 'B. B but not A', 'C. A but not B', 'D. A or B'],
      answer: 'C. A but not B',
      diff: 'easy',
    },
    {
      q: 'The complement of set A (Aᶜ) consists of elements that:',
      options: ['A. Belong to A', 'B. Do not belong to A', 'C. Belong to U only', 'D. Belong to A ∩ U'],
      answer: 'B. Do not belong to A',
      diff: 'easy',
    },
    {
      q: 'If A ∩ B = ∅, then A and B are called:',
      options: ['A. Equal sets', 'B. Disjoint sets', 'C. Universal sets', 'D. Complement sets'],
      answer: 'B. Disjoint sets',
      diff: 'easy',
    },
    {
      q: 'Which of the following is true for any set A?',
      options: ['A. A ∪ Aᶜ = ∅', 'B. A ∩ Aᶜ = U', 'C. A ∪ Aᶜ = U', 'D. A ∩ Aᶜ = A'],
      answer: 'C. A ∪ Aᶜ = U',
      diff: 'medium',
    },
    {
      q: 'Which of the following is true for any set A?',
      options: ['A. A ∩ Aᶜ = U', 'B. A ∪ Aᶜ = ∅', 'C. A ∩ Aᶜ = ∅', 'D. A ∪ Aᶜ = A'],
      answer: 'C. A ∩ Aᶜ = ∅',
      diff: 'medium',
    },
    {
      q: 'The complement Aᶜ can also be written as:',
      options: ['A. U – A', 'B. A – U', 'C. A ∩ U', 'D. A ∪ U'],
      answer: 'A. U – A',
      diff: 'easy',
    },
    {
      q: 'Which operation is commutative?',
      options: ['A. Set difference (A – B)', 'B. Union (A ∪ B)', 'C. Complement (Aᶜ)', 'D. Both A and B'],
      answer: 'B. Union (A ∪ B)',
      diff: 'easy',
    },
    {
      q: 'Set difference A – B is:',
      options: ['A. Commutative', 'B. Equal to B – A', 'C. Not commutative', 'D. Always equal to A'],
      answer: 'C. Not commutative',
      diff: 'easy',
    },
    {
      q: 'The membership table for union corresponds to which logical connective?',
      options: ['A. AND (∧)', 'B. OR (∨)', 'C. NOT (~)', 'D. XOR (⊕)'],
      answer: 'B. OR (∨)',
      diff: 'medium',
    },
    {
      q: 'The membership table for intersection corresponds to which logical connective?',
      options: ['A. AND (∧)', 'B. OR (∨)', 'C. NOT (~)', 'D. IMPLICATION (→)'],
      answer: 'A. AND (∧)',
      diff: 'medium',
    },
    {
      q: 'The membership table for complement corresponds to which logical connective?',
      options: ['A. AND', 'B. OR', 'C. NOT', 'D. XOR'],
      answer: 'C. NOT',
      diff: 'medium',
    },
    {
      q: 'In a membership table, what does 1 represent?',
      options: ['A. Element is not in the set', 'B. Element is in the set', 'C. The set is empty', 'D. The set is universal'],
      answer: 'B. Element is in the set',
      diff: 'easy',
    },
    {
      q: 'Which of the following is a valid set identity?',
      options: ['A. A – (A – B) = A ∪ B', 'B. A – (A – B) = A ∩ B', 'C. A – (A – B) = B – A', 'D. A – (A – B) = Aᶜ'],
      answer: 'B. A – (A – B) = A ∩ B',
      diff: 'medium',
    },
    {
      q: 'De Morgan’s Law for sets states that (A ∩ B)ᶜ =:',
      options: ['A. Aᶜ ∩ Bᶜ', 'B. Aᶜ ∪ Bᶜ', 'C. A ∪ B', 'D. A ∩ B'],
      answer: 'B. Aᶜ ∪ Bᶜ',
      diff: 'easy',
    },
    {
      q: 'Which of the following is equivalent to A – B?',
      options: ['A. A ∩ B', 'B. A ∪ B', 'C. A ∩ Bᶜ', 'D. Aᶜ ∩ B'],
      answer: 'C. A ∩ Bᶜ',
      diff: 'medium',
    },
    {
      q: 'If U = {1,2,3,4,5}, A = {1,2,3}, B = {3,4,5}, then A ∪ B is:',
      options: ['A. {3}', 'B. {1,2,3,4,5}', 'C. {1,2}', 'D. {4,5}'],
      answer: 'B. {1,2,3,4,5}',
      diff: 'easy',
    },
    {
      q: 'If U = {1,2,3,4,5}, A = {1,2,3}, B = {3,4,5}, then A ∩ B is:',
      options: ['A. {3}', 'B. {1,2,3,4,5}', 'C. {1,2}', 'D. {4,5}'],
      answer: 'A. {3}',
      diff: 'easy',
    },
    {
      q: 'If U = {1,2,3,4,5}, A = {1,2,3}, B = {3,4,5}, then A – B is:',
      options: ['A. {3}', 'B. {1,2}', 'C. {4,5}', 'D. {1,2,3,4,5}'],
      answer: 'B. {1,2}',
      diff: 'easy',
    },
    {
      q: 'If U = {1,2,3,4,5}, A = {1,2,3}, then Aᶜ is:',
      options: ['A. {1,2,3}', 'B. {4,5}', 'C. {1,2,3,4,5}', 'D. ∅'],
      answer: 'B. {4,5}',
      diff: 'easy',
    },
    {
      q: 'Which of the following statements is true about disjoint sets?',
      options: ['A. They have all elements in common', 'B. Their intersection is empty', 'C. Their union is empty', 'D. One is the complement of the other'],
      answer: 'B. Their intersection is empty',
      diff: 'easy',
    },
    {
      q: 'A Venn diagram represents the universal set as:',
      options: ['A. A circle', 'B. A rectangle', 'C. A triangle', 'D. A point'],
      answer: 'B. A rectangle',
      diff: 'easy',
    }
  ]
},

// lecture 9//


9: {
  title: 'Set Identities and Their Proofs (MTH202 Lecture 9)',
  summary: `**Key Topics Covered:**
- Idempotent Laws: A ∪ A = A, A ∩ A = A
- Commutative Laws: A ∪ B = B ∪ A, A ∩ B = B ∩ A
- Associative Laws: A ∪ (B ∪ C) = (A ∪ B) ∪ C, A ∩ (B ∩ C) = (A ∩ B) ∩ C
- Distributive Laws: A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C), A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C)
- Identity Laws: A ∪ ∅ = A, A ∩ ∅ = ∅, A ∪ U = U, A ∩ U = A
- Complement Laws: A ∪ Aᶜ = U, A ∩ Aᶜ = ∅, Uᶜ = ∅, ∅ᶜ = U
- Double Complement Law: (Aᶜ)ᶜ = A
- DeMorgan's Laws: (A ∪ B)ᶜ = Aᶜ ∩ Bᶜ, (A ∩ B)ᶜ = Aᶜ ∪ Bᶜ
- Alternative Representation for Set Difference: A – B = A ∩ Bᶜ
- Subset Laws: A ∪ B ⊆ C iff A ⊆ C and B ⊆ C; C ⊆ A ∩ B iff C ⊆ A and C ⊆ B
- Absorption Laws: A ∪ (A ∩ B) = A, A ∩ (A ∪ B) = A
- Proving set identities using element arguments and membership tables

---

**Simple Understanding:**

**Set Identities (Laws of Set Theory):**

These are fundamental rules that sets follow, similar to logical equivalences.

**Idempotent Laws:**
👉 A ∪ A = A (union of a set with itself is the set)
👉 A ∩ A = A (intersection of a set with itself is the set)

**Commutative Laws:**
👉 A ∪ B = B ∪ A (order doesn't matter for union)
👉 A ∩ B = B ∩ A (order doesn't matter for intersection)

**Associative Laws:**
👉 A ∪ (B ∪ C) = (A ∪ B) ∪ C (grouping doesn't matter for union)
👉 A ∩ (B ∩ C) = (A ∩ B) ∩ C (grouping doesn't matter for intersection)

**Distributive Laws:**
👉 A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C) (union distributes over intersection)
👉 A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C) (intersection distributes over union)

**Identity Laws:**
👉 A ∪ ∅ = A (empty set is identity for union)
👉 A ∩ U = A (universal set is identity for intersection)
👉 A ∩ ∅ = ∅ (intersection with empty set is empty)
👉 A ∪ U = U (union with universal set is universal)

**Complement Laws:**
👉 A ∪ Aᶜ = U (a set and its complement cover the universe)
👉 A ∩ Aᶜ = ∅ (a set and its complement are disjoint)
👉 Uᶜ = ∅ (complement of universe is empty)
👉 ∅ᶜ = U (complement of empty set is universe)

**Double Complement Law:**
👉 (Aᶜ)ᶜ = A (complement of complement returns original)

**DeMorgan's Laws for Sets:**
👉 (A ∪ B)ᶜ = Aᶜ ∩ Bᶜ
👉 (A ∩ B)ᶜ = Aᶜ ∪ Bᶜ

**Alternative Representation:**
👉 A – B = A ∩ Bᶜ

**Absorption Laws:**
👉 A ∪ (A ∩ B) = A
👉 A ∩ (A ∪ B) = A

**Subset Laws:**
👉 A ∪ B ⊆ C iff A ⊆ C and B ⊆ C
👉 C ⊆ A ∩ B iff C ⊆ A and C ⊆ B

---

**Proving Set Identities – Two Methods:**

**1. Element Argument (Subset Proof):**
- Show LHS ⊆ RHS: take an arbitrary element from LHS and show it belongs to RHS.
- Show RHS ⊆ LHS: take an arbitrary element from RHS and show it belongs to LHS.
- Conclude LHS = RHS.

**2. Membership Table (0/1 Table):**
- Create a table with columns for each set and each operation.
- Use 1 for "element is in set", 0 for "element not in set".
- If two columns have identical values for all rows, the expressions are equal.

---

**Important Examples Proved in the Lecture:**
- A ⊆ A ∪ B
- A – B ⊆ A
- If A ⊆ B and B ⊆ C, then A ⊆ C
- A ⊆ B iff Bᶜ ⊆ Aᶜ
- A – B = A ∩ Bᶜ
- (A ∪ B)ᶜ = Aᶜ ∩ Bᶜ (DeMorgan)
- A ∩ (B ∩ C) = (A ∩ B) ∩ C (Associative)
- A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C) (Distributive)
- If A ⊆ B, then A ∩ B = A and A ∪ B = B
- (A – B) ∪ (A ∩ B) = A
- A – (A – B) = A ∩ B
- (A – B) – C = (A – C) – B
- Simplify (Bᶜ ∪ (Bᶜ – A))ᶜ = B

---

**Important Vocabulary:**
- Set identity = an equation that holds for all sets
- Idempotent law = law where operation on same set yields the set
- Commutative law = order does not matter
- Associative law = grouping does not matter
- Distributive law = one operation distributes over another
- Identity element = element that leaves other unchanged (∅ for ∪, U for ∩)
- Complement law = relationship between set and its complement
- DeMorgan's law = complement of union/intersection
- Absorption law = "absorbing" the other set
- Element argument = proof by taking arbitrary element
- Membership table = truth-table style proof for sets

---

**Quick Revision Points:**
- Idempotent: A ∪ A = A, A ∩ A = A
- Commutative: A ∪ B = B ∪ A, A ∩ B = B ∩ A
- Associative: (A ∪ B) ∪ C = A ∪ (B ∪ C)
- Distributive: A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C)
- Identity: A ∪ ∅ = A, A ∩ U = A
- Complement: A ∪ Aᶜ = U, A ∩ Aᶜ = ∅
- Double Complement: (Aᶜ)ᶜ = A
- DeMorgan: (A ∪ B)ᶜ = Aᶜ ∩ Bᶜ, (A ∩ B)ᶜ = Aᶜ ∪ Bᶜ
- Set Difference: A – B = A ∩ Bᶜ
- Absorption: A ∪ (A ∩ B) = A, A ∩ (A ∪ B) = A
- To prove equality: show LHS ⊆ RHS and RHS ⊆ LHS
- Membership table uses 0 and 1 to verify identities.`,

  questions: [
    {
      q: 'Which law states that A ∪ A = A?',
      options: ['A. Commutative Law', 'B. Idempotent Law', 'C. Identity Law', 'D. Absorption Law'],
      answer: 'B. Idempotent Law',
      diff: 'easy',
    },
    {
      q: 'The commutative law for intersection states that:',
      options: ['A. A ∩ A = A', 'B. A ∩ B = B ∩ A', 'C. A ∩ (B ∩ C) = (A ∩ B) ∩ C', 'D. A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C)'],
      answer: 'B. A ∩ B = B ∩ A',
      diff: 'easy',
    },
    {
      q: 'The associative law for union states that:',
      options: ['A. A ∪ B = B ∪ A', 'B. A ∪ A = A', 'C. (A ∪ B) ∪ C = A ∪ (B ∪ C)', 'D. A ∪ U = U'],
      answer: 'C. (A ∪ B) ∪ C = A ∪ (B ∪ C)',
      diff: 'easy',
    },
    {
      q: 'Which distributive law is correct?',
      options: ['A. A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C)', 'B. A ∪ (B ∩ C) = (A ∪ B) ∩ C', 'C. A ∩ (B ∪ C) = (A ∩ B) ∪ C', 'D. A ∩ (B ∪ C) = (A ∪ B) ∩ (A ∪ C)'],
      answer: 'A. A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C)',
      diff: 'medium',
    },
    {
      q: 'What is A ∪ ∅?',
      options: ['A. ∅', 'B. U', 'C. A', 'D. Aᶜ'],
      answer: 'C. A',
      diff: 'easy',
    },
    {
      q: 'What is A ∩ U?',
      options: ['A. ∅', 'B. U', 'C. A', 'D. Aᶜ'],
      answer: 'C. A',
      diff: 'easy',
    },
    {
      q: 'The complement law states that A ∪ Aᶜ equals:',
      options: ['A. ∅', 'B. U', 'C. A', 'D. Aᶜ'],
      answer: 'B. U',
      diff: 'easy',
    },
    {
      q: 'What is A ∩ Aᶜ?',
      options: ['A. U', 'B. A', 'C. Aᶜ', 'D. ∅'],
      answer: 'D. ∅',
      diff: 'easy',
    },
    {
      q: 'The double complement law says:',
      options: ['A. A ∪ Aᶜ = U', 'B. A ∩ Aᶜ = ∅', 'C. (Aᶜ)ᶜ = A', 'D. Uᶜ = ∅'],
      answer: 'C. (Aᶜ)ᶜ = A',
      diff: 'easy',
    },
    {
      q: 'DeMorgan’s Law for sets states that (A ∪ B)ᶜ equals:',
      options: ['A. Aᶜ ∪ Bᶜ', 'B. Aᶜ ∩ Bᶜ', 'C. A ∩ B', 'D. A ∪ B'],
      answer: 'B. Aᶜ ∩ Bᶜ',
      diff: 'easy',
    },
    {
      q: 'DeMorgan’s Law (A ∩ B)ᶜ equals:',
      options: ['A. Aᶜ ∩ Bᶜ', 'B. Aᶜ ∪ Bᶜ', 'C. A ∪ B', 'D. A ∩ B'],
      answer: 'B. Aᶜ ∪ Bᶜ',
      diff: 'easy',
    },
    {
      q: 'The alternative representation for set difference A – B is:',
      options: ['A. A ∪ Bᶜ', 'B. A ∩ Bᶜ', 'C. Aᶜ ∩ B', 'D. Aᶜ ∪ B'],
      answer: 'B. A ∩ Bᶜ',
      diff: 'medium',
    },
    {
      q: 'Which of the following is the absorption law?',
      options: ['A. A ∪ (A ∩ B) = A', 'B. A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C)', 'C. (A ∪ B)ᶜ = Aᶜ ∩ Bᶜ', 'D. A ∪ ∅ = A'],
      answer: 'A. A ∪ (A ∩ B) = A',
      diff: 'medium',
    },
    {
      q: 'If A ⊆ B and B ⊆ C, then:',
      options: ['A. A = C', 'B. A ⊆ C', 'C. C ⊆ A', 'D. A ∩ C = ∅'],
      answer: 'B. A ⊆ C',
      diff: 'easy',
    },
    {
      q: 'A ⊆ B if and only if:',
      options: ['A. Bᶜ ⊆ Aᶜ', 'B. Aᶜ ⊆ Bᶜ', 'C. A ∩ B = ∅', 'D. A ∪ B = ∅'],
      answer: 'A. Bᶜ ⊆ Aᶜ',
      diff: 'hard',
    },
    {
      q: 'If A ⊆ B, then A ∪ B equals:',
      options: ['A. A', 'B. B', 'C. ∅', 'D. U'],
      answer: 'B. B',
      diff: 'medium',
    },
    {
      q: 'If A ⊆ B, then A ∩ B equals:',
      options: ['A. A', 'B. B', 'C. ∅', 'D. U'],
      answer: 'A. A',
      diff: 'medium',
    },
    {
      q: '(A – B) ∪ (A ∩ B) simplifies to:',
      options: ['A. A', 'B. B', 'C. A ∪ B', 'D. A ∩ B'],
      answer: 'A. A',
      diff: 'hard',
    },
    {
      q: 'A – (A – B) simplifies to:',
      options: ['A. A', 'B. B', 'C. A ∩ B', 'D. A ∪ B'],
      answer: 'C. A ∩ B',
      diff: 'hard',
    },
    {
      q: '(A – B) – C equals:',
      options: ['A. (A – C) – B', 'B. (A – C) ∪ B', 'C. A – (B – C)', 'D. (A ∩ B) – C'],
      answer: 'A. (A – C) – B',
      diff: 'hard',
    },
    {
      q: 'Simplify (Bᶜ ∪ (Bᶜ – A))ᶜ:',
      options: ['A. A', 'B. B', 'C. Aᶜ', 'D. Bᶜ'],
      answer: 'B. B',
      diff: 'hard',
    },
    {
      q: 'In a membership table, what does 1 represent?',
      options: ['A. Element is not in the set', 'B. Element is in the set', 'C. The set is empty', 'D. The set is universal'],
      answer: 'B. Element is in the set',
      diff: 'easy',
    },
    {
      q: 'To prove two sets are equal using element argument, you must show:',
      options: ['A. LHS ⊆ RHS only', 'B. RHS ⊆ LHS only', 'C. Both LHS ⊆ RHS and RHS ⊆ LHS', 'D. LHS ∩ RHS = ∅'],
      answer: 'C. Both LHS ⊆ RHS and RHS ⊆ LHS',
      diff: 'medium',
    },
    {
      q: 'Which law is used in the simplification: A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C)?',
      options: ['A. Associative Law', 'B. Distributive Law', 'C. Idempotent Law', 'D. Absorption Law'],
      answer: 'B. Distributive Law',
      diff: 'easy',
    },
    {
      q: 'What is Uᶜ?',
      options: ['A. U', 'B. ∅', 'C. A', 'D. Aᶜ'],
      answer: 'B. ∅',
      diff: 'easy',
    },
    {
      q: 'What is ∅ᶜ?',
      options: ['A. ∅', 'B. U', 'C. A', 'D. Aᶜ'],
      answer: 'B. U',
      diff: 'easy',
    }
  ]
},




///lecture 10 // 



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



    // leacture 2//


  2: {
  title: 'Kinematics: Displacement, Velocity, Acceleration & Vectors (PHY101 Lecture 2)',
  summary: `**Key Topics Covered:**
- Displacement (Δx)
- Average speed and average velocity
- Instantaneous velocity
- Average and instantaneous acceleration
- Constant acceleration equations (kinematic equations)
- Introduction to vectors (magnitude and direction)
- Vector components (x and y)
- Vector addition (graphical, parallelogram, component method)

---

**Simple Understanding:**

**Position and Displacement:**
👉 Position x(t) tells where an object is at time t.
👉 Displacement Δx = x₂ – x₁ = change in position.
👉 Can be positive or negative (depends on direction).
👉 Example: from 10 m to 30 m → Δx = +20 m; from 30 m to 10 m → Δx = –20 m.

**Speed vs Velocity:**
👉 Average speed = Total distance / Total time (always positive)
👉 Average velocity = Total displacement / Total time = Δx/Δt (can be positive or negative)
👉 Velocity = speed with direction.

**Instantaneous Velocity:**
👉 Velocity at a specific instant.
👉 Take Δt → 0 (approach zero, not equal to zero).
👉 Slope of tangent on position–time graph.

**Acceleration:**
👉 Measures how velocity changes with time.
👉 Average acceleration = Δv/Δt = (v₂ – v₁)/(t₂ – t₁)
👉 Instantaneous acceleration = limit Δv/Δt as Δt → 0.
👉 Acceleration can be positive (speeding up in + direction) or negative (slowing down or speeding up in – direction).
👉 SI unit: m/s².

**Constant Acceleration (Kinematic Equations):**
For constant acceleration a, with initial position x₀, initial velocity v₀ at t=0:
1. v = v₀ + a t
2. x = x₀ + v₀ t + ½ a t²
3. v² = v₀² + 2a (x – x₀)

These equations describe motion with constant acceleration.

---

**Introduction to Vectors:**

**Vector Properties:**
👉 Magnitude (size/length) and Direction.
👉 Example: position vector r from origin to point (x,y).

**Vector Components:**
👉 x-component: rₓ = x = r cosθ
👉 y-component: rᵧ = y = r sinθ
👉 Magnitude: r = √(x² + y²)
👉 Direction: θ = tan⁻¹(y/x)

**Vector Addition:**
- **One dimension:** simple arithmetic (e.g., 20 m – 10 m = 10 m)
- **Two dimensions:** use graphical methods (triangle, parallelogram) or component method.

**Component Method for Vector Addition:**
1. Break each vector into x and y components.
2. Add all x-components: Rₓ = Aₓ + Bₓ
3. Add all y-components: Rᵧ = Aᵧ + Bᵧ
4. Magnitude: R = √(Rₓ² + Rᵧ²)
5. Direction: θ = tan⁻¹(Rᵧ / Rₓ)

---

**Important Vocabulary:**
- Kinematics = study of motion without considering causes
- Displacement = change in position (vector)
- Velocity = rate of change of position (vector)
- Speed = magnitude of velocity (scalar)
- Acceleration = rate of change of velocity (vector)
- Instantaneous = at a specific moment (Δt → 0)
- Constant acceleration = acceleration that does not change with time
- Vector = quantity with magnitude and direction
- Component = projection of vector onto an axis
- Resultant = vector sum of two or more vectors

---

**Quick Revision Points:**
- Displacement Δx = x₂ – x₁ (can be + or –)
- Average velocity = Δx/Δt; average speed = total distance/total time
- Instantaneous velocity = slope of x-t graph at a point
- Average acceleration = Δv/Δt; instantaneous acceleration = slope of v-t graph
- Constant acceleration equations: v = v₀ + at; x = x₀ + v₀t + ½at²; v² = v₀² + 2aΔx
- Vectors have magnitude and direction; scalars have only magnitude.
- Components: x = r cosθ, y = r sinθ; magnitude r = √(x²+y²)
- Vector addition: add components separately, then find resultant magnitude and direction.`,

  questions: [
    {
      q: 'The word "Kinematics" is derived from which language?',
      options: ['A. Latin', 'B. Greek', 'C. Arabic', 'D. French'],
      answer: 'B. Greek',
      diff: 'easy',
    },
    {
      q: 'Displacement is defined as:',
      options: ['A. Total distance travelled', 'B. Change in position (x₂ – x₁)', 'C. Speed × time', 'D. Rate of change of velocity'],
      answer: 'B. Change in position (x₂ – x₁)',
      diff: 'easy',
    },
    {
      q: 'If an object moves from 10 m to 30 m, its displacement is:',
      options: ['A. 10 m', 'B. 20 m', 'C. 30 m', 'D. 40 m'],
      answer: 'B. 20 m',
      diff: 'easy',
    },
    {
      q: 'If an object moves from 30 m to 10 m, its displacement is:',
      options: ['A. +20 m', 'B. –20 m', 'C. 0 m', 'D. 40 m'],
      answer: 'B. –20 m',
      diff: 'easy',
    },
    {
      q: 'Average speed is calculated as:',
      options: ['A. Displacement / time', 'B. Total distance / total time', 'C. Change in velocity / time', 'D. Final velocity – initial velocity'],
      answer: 'B. Total distance / total time',
      diff: 'easy',
    },
    {
      q: 'Average velocity is calculated as:',
      options: ['A. Total distance / total time', 'B. Displacement / time', 'C. Acceleration × time', 'D. Final speed / 2'],
      answer: 'B. Displacement / time',
      diff: 'easy',
    },
    {
      q: 'Which quantity can be negative?',
      options: ['A. Distance', 'B. Speed', 'C. Displacement', 'D. Time'],
      answer: 'C. Displacement',
      diff: 'easy',
    },
    {
      q: 'Instantaneous velocity is defined as:',
      options: ['A. Average velocity over a long time', 'B. Velocity at a specific instant', 'C. Total distance divided by total time', 'D. Final velocity minus initial velocity'],
      answer: 'B. Velocity at a specific instant',
      diff: 'medium',
    },
    {
      q: 'On a position–time graph, instantaneous velocity is the:',
      options: ['A. Area under the curve', 'B. Slope of the tangent line', 'C. Intercept on the x-axis', 'D. Length of the curve'],
      answer: 'B. Slope of the tangent line',
      diff: 'medium',
    },
    {
      q: 'Acceleration measures how:',
      options: ['A. Position changes with time', 'B. Velocity changes with time', 'C. Distance changes with time', 'D. Speed changes with distance'],
      answer: 'B. Velocity changes with time',
      diff: 'easy',
    },
    {
      q: 'Average acceleration is given by:',
      options: ['A. Δx/Δt', 'B. Δv/Δt', 'C. v/t', 'D. x/t'],
      answer: 'B. Δv/Δt',
      diff: 'easy',
    },
    {
      q: 'The SI unit of acceleration is:',
      options: ['A. m/s', 'B. m/s²', 'C. m²/s', 'D. s/m²'],
      answer: 'B. m/s²',
      diff: 'easy',
    },
    {
      q: 'If an object’s velocity increases in the positive x-direction, its acceleration is:',
      options: ['A. Positive', 'B. Negative', 'C. Zero', 'D. Constant but negative'],
      answer: 'A. Positive',
      diff: 'medium',
    },
    {
      q: 'For constant acceleration, which equation gives velocity as a function of time?',
      options: ['A. v = v₀ + at', 'B. x = x₀ + v₀t + ½at²', 'C. v² = v₀² + 2aΔx', 'D. v = Δx/Δt'],
      answer: 'A. v = v₀ + at',
      diff: 'easy',
    },
    {
      q: 'For constant acceleration, which equation gives position as a function of time?',
      options: ['A. v = v₀ + at', 'B. x = x₀ + v₀t + ½at²', 'C. v² = v₀² + 2aΔx', 'D. a = Δv/Δt'],
      answer: 'B. x = x₀ + v₀t + ½at²',
      diff: 'easy',
    },
    {
      q: 'The equation v² = v₀² + 2aΔx is useful when:',
      options: ['A. Time is known', 'B. Time is not known', 'C. Acceleration is zero', 'D. Velocity is constant'],
      answer: 'B. Time is not known',
      diff: 'medium',
    },
    {
      q: 'A car starts from rest (v₀ = 0) and accelerates at 2 m/s² for 5 seconds. Its final velocity is:',
      options: ['A. 2 m/s', 'B. 5 m/s', 'C. 10 m/s', 'D. 25 m/s'],
      answer: 'C. 10 m/s',
      diff: 'medium',
    },
    {
      q: 'A vector has:',
      options: ['A. Magnitude only', 'B. Direction only', 'C. Both magnitude and direction', 'D. Neither magnitude nor direction'],
      answer: 'C. Both magnitude and direction',
      diff: 'easy',
    },
    {
      q: 'Which of the following is a vector quantity?',
      options: ['A. Speed', 'B. Distance', 'C. Velocity', 'D. Time'],
      answer: 'C. Velocity',
      diff: 'easy',
    },
    {
      q: 'The x-component of a vector with magnitude r and angle θ is:',
      options: ['A. r sinθ', 'B. r cosθ', 'C. r tanθ', 'D. r / cosθ'],
      answer: 'B. r cosθ',
      diff: 'easy',
    },
    {
      q: 'The y-component of a vector with magnitude r and angle θ is:',
      options: ['A. r sinθ', 'B. r cosθ', 'C. r tanθ', 'D. r / sinθ'],
      answer: 'A. r sinθ',
      diff: 'easy',
    },
    {
      q: 'The magnitude of a vector with components (3,4) is:',
      options: ['A. 5', 'B. 7', 'C. 12', 'D. 25'],
      answer: 'A. 5',
      diff: 'easy',
    },
    {
      q: 'The direction (angle) of a vector with components (3,4) is approximately:',
      options: ['A. 37°', 'B. 45°', 'C. 53°', 'D. 60°'],
      answer: 'C. 53°',
      diff: 'medium',
    },
    {
      q: 'When adding two vectors using the component method, the resultant x-component is:',
      options: ['A. Aₓ – Bₓ', 'B. Aₓ + Bₓ', 'C. Aₓ × Bₓ', 'D. Aₓ / Bₓ'],
      answer: 'B. Aₓ + Bₓ',
      diff: 'easy',
    },
    {
      q: 'The parallelogram method is used for:',
      options: ['A. Subtracting vectors', 'B. Multiplying vectors', 'C. Adding two vectors', 'D. Finding components'],
      answer: 'C. Adding two vectors',
      diff: 'easy',
    },
    {
      q: 'If a car moves with constant speed but changes direction, its velocity:',
      options: ['A. Is constant', 'B. Changes because direction changes', 'C. Remains the same magnitude and direction', 'D. Becomes zero'],
      answer: 'B. Changes because direction changes',
      diff: 'medium',
    }
  ]
},



// lecture 3 //

  3: {
  title: 'Kinematics-II: Position Functions, Derivatives, Vectors & Projectile Motion (PHY101 Lecture 3)',
  summary: `**Key Topics Covered:**
- Position function x(t) as a polynomial in time
- Dimensions of constants (L, L/T, L/T², L/T³)
- Derivatives: velocity as dx/dt, acceleration as d²x/dt²
- Geometric interpretation of derivative as slope
- Motion in two dimensions (2D)
- Unit vectors (î, ĵ, k̂) and vector components
- Velocity and acceleration in 2D
- Vector addition and scalar (dot) product
- Projectile motion: independence of x and y motions
- Maximum height (H) and range (R) formulas

---

**Simple Understanding:**

**Position Function:**
👉 x(t) = c₀ + c₁t + c₂t² + c₃t³ + ...
👉 c₀, c₁, c₂, c₃ are constants (do not change with time).
👉 At t=0, x = c₀ (initial position).
👉 Dimensions must match: c₀ has dimension L (length), c₁ has L/T, c₂ has L/T², c₃ has L/T³.

**Derivatives (Newton’s invention):**
👉 Derivative = rate of change. Velocity = dx/dt, Acceleration = dv/dt = d²x/dt².
👉 For x(t) = tⁿ, derivative = n·tⁿ⁻¹.
👉 Derivative of constant = 0.
👉 Geometric meaning: slope (gradient) of tangent line on x-t graph.
👉 Positive slope → positive velocity; negative slope → negative velocity.

**Kinematic equations from derivatives:**
👉 Given x = x₀ + v₀t + ½at² → dx/dt = v₀ + at = v, dv/dt = a.

**A car at rest can have acceleration:**
👉 At t=0, v=0 but a ≠ 0 (e.g., starting from rest).
👉 Acceleration and velocity can be in opposite directions.

---

**Motion in 2 Dimensions:**

**Unit Vectors:**
👉 î (x-direction), ĵ (y-direction), k̂ (z-direction). Magnitude = 1 (no units).
👉 Any vector: A⃗ = Aₓî + Aᵧĵ

**Velocity in 2D:**
👉 r⃗ = x(t)î + y(t)ĵ
👉 v⃗ = dr⃗/dt = (dx/dt)î + (dy/dt)ĵ = vₓî + vᵧĵ

**Acceleration in 2D:**
👉 a⃗ = dv⃗/dt = (dvₓ/dt)î + (dvᵧ/dt)ĵ = aₓî + aᵧĵ

**Vector Addition:**
👉 Add components: Rₓ = Aₓ + Bₓ, Rᵧ = Aᵧ + Bᵧ

**Scalar (Dot) Product:**
👉 A⃗·B⃗ = |A||B| cosθ
👉 î·î = ĵ·ĵ = 1, î·ĵ = 0
👉 A⃗·B⃗ = AₓBₓ + AᵧBᵧ (in 2D), plus A₂B₂ in 3D.

---

**Projectile Motion:**
👉 Acceleration only in y-direction: aᵧ = –g, aₓ = 0.
👉 Initial velocity: v₀ₓ = v₀ cosθ, v₀ᵧ = v₀ sinθ.
👉 x-direction: constant velocity → x = (v₀ cosθ) t
👉 y-direction: y = (v₀ sinθ) t – ½ g t², vᵧ = v₀ sinθ – g t

**Maximum Height (H):**
👉 At top, vᵧ = 0 → t = v₀ sinθ / g
👉 H = (v₀ sinθ)² / (2g)
👉 Max when sinθ = 1 (θ = 90°): H_max = v₀²/(2g)

**Range (R):**
👉 Time of flight = 2 v₀ sinθ / g
👉 R = v₀ cosθ × time = (v₀² sin2θ)/g
👉 Maximum range when sin2θ = 1 → θ = 45°
👉 R_max = v₀²/g

---

**Important Vocabulary:**
- Position function = x(t) describing location over time
- Constant = fixed value not changing with time
- Derivative = rate of change (dx/dt)
- Slope = gradient of tangent line
- Unit vector = vector of magnitude 1 (direction only)
- Component = projection onto an axis
- Scalar product = dot product (A·B)
- Projectile = object moving under gravity with no other forces
- Trajectory = path of projectile (parabolic)
- Maximum height = highest vertical position
- Range = total horizontal distance traveled

---

**Quick Revision Points:**
- Position function x(t) = sum of powers of t with constant coefficients.
- Dimensions: [c₀]=L, [c₁]=L/T, [c₂]=L/T², [c₃]=L/T³.
- Derivative of tⁿ is n·tⁿ⁻¹.
- Velocity = dx/dt; acceleration = d²x/dt².
- Unit vectors î, ĵ, k̂ have magnitude 1.
- In 2D: v⃗ = vₓî + vᵧĵ; a⃗ = aₓî + aᵧĵ.
- Dot product: A·B = |A||B|cosθ = AₓBₓ + AᵧBᵧ.
- Projectile: aₓ = 0, aᵧ = –g.
- H = (v₀ sinθ)²/(2g); R = v₀² sin2θ / g.
- Max H at θ=90°; Max R at θ=45°.`,

  questions: [
    {
      q: 'The position function x(t) is expressed as a polynomial in:',
      options: ['A. Position', 'B. Velocity', 'C. Time', 'D. Acceleration'],
      answer: 'C. Time',
      diff: 'easy',
    },
    {
      q: 'In x(t) = c₀ + c₁t + c₂t² + c₃t³, the constant c₀ has dimension:',
      options: ['A. L/T', 'B. L/T²', 'C. L', 'D. T'],
      answer: 'C. L',
      diff: 'medium',
    },
    {
      q: 'The constant c₁ in the position function has dimension:',
      options: ['A. L', 'B. L/T', 'C. L/T²', 'D. L/T³'],
      answer: 'B. L/T',
      diff: 'medium',
    },
    {
      q: 'Derivative of a constant is:',
      options: ['A. 1', 'B. 0', 'C. Constant itself', 'D. Undefined'],
      answer: 'B. 0',
      diff: 'easy',
    },
    {
      q: 'If x(t) = t², then dx/dt equals:',
      options: ['A. t', 'B. 2t', 'C. t²', 'D. 2'],
      answer: 'B. 2t',
      diff: 'easy',
    },
    {
      q: 'If x(t) = t³, then dx/dt equals:',
      options: ['A. 3t²', 'B. 3t', 'C. t³', 'D. 2t²'],
      answer: 'A. 3t²',
      diff: 'easy',
    },
    {
      q: 'In general, the derivative of tⁿ (where n is an integer) is:',
      options: ['A. n·tⁿ', 'B. (n-1)·tⁿ⁻¹', 'C. n·tⁿ⁻¹', 'D. tⁿ⁻¹'],
      answer: 'C. n·tⁿ⁻¹',
      diff: 'easy',
    },
    {
      q: 'The derivative dx/dt represents:',
      options: ['A. Acceleration', 'B. Displacement', 'C. Velocity', 'D. Jerk'],
      answer: 'C. Velocity',
      diff: 'easy',
    },
    {
      q: 'The second derivative d²x/dt² represents:',
      options: ['A. Velocity', 'B. Acceleration', 'C. Displacement', 'D. Speed'],
      answer: 'B. Acceleration',
      diff: 'easy',
    },
    {
      q: 'Geometrically, the derivative at a point on x-t graph is the:',
      options: ['A. Area under curve', 'B. Slope of tangent', 'C. Length of curve', 'D. Intercept'],
      answer: 'B. Slope of tangent',
      diff: 'easy',
    },
    {
      q: 'A car can have acceleration while at rest because:',
      options: ['A. Velocity is zero but change in velocity can be non-zero', 'B. Speed is always zero', 'C. Acceleration is independent of velocity', 'D. Both B and C'],
      answer: 'A. Velocity is zero but change in velocity can be non-zero',
      diff: 'medium',
    },
    {
      q: 'A unit vector has magnitude:',
      options: ['A. 0', 'B. 1', 'C. Depends on direction', 'D. Infinite'],
      answer: 'B. 1',
      diff: 'easy',
    },
    {
      q: 'Which of the following are perpendicular unit vectors?',
      options: ['A. î and î', 'B. î and ĵ', 'C. î and k̂', 'D. Both B and C'],
      answer: 'D. Both B and C',
      diff: 'easy',
    },
    {
      q: 'The dot product î·ĵ equals:',
      options: ['A. 1', 'B. 0', 'C. -1', 'D. Undefined'],
      answer: 'B. 0',
      diff: 'easy',
    },
    {
      q: 'The dot product î·î equals:',
      options: ['A. 0', 'B. 1', 'C. -1', 'D. î'],
      answer: 'B. 1',
      diff: 'easy',
    },
    {
      q: 'If A⃗ = 3î + 4ĵ and B⃗ = 2î + 5ĵ, then A⃗·B⃗ equals:',
      options: ['A. 26', 'B. 6', 'C. 20', 'D. 14'],
      answer: 'A. 26',
      diff: 'medium',
    },
    {
      q: 'For a projectile, acceleration in x-direction is:',
      options: ['A. –g', 'B. 0', 'C. g', 'D. Depends on angle'],
      answer: 'B. 0',
      diff: 'easy',
    },
    {
      q: 'For a projectile, acceleration in y-direction is:',
      options: ['A. 0', 'B. g upward', 'C. –g', 'D. Constant velocity'],
      answer: 'C. –g',
      diff: 'easy',
    },
    {
      q: 'At the highest point of projectile motion, the vertical velocity vᵧ is:',
      options: ['A. Maximum', 'B. Minimum but positive', 'C. Zero', 'D. Equal to v₀'],
      answer: 'C. Zero',
      diff: 'easy',
    },
    {
      q: 'The formula for maximum height H of a projectile is:',
      options: ['A. (v₀² sin²θ)/(2g)', 'B. (v₀² sin2θ)/g', 'C. (v₀² cos²θ)/(2g)', 'D. (v₀²)/g'],
      answer: 'A. (v₀² sin²θ)/(2g)',
      diff: 'medium',
    },
    {
      q: 'The angle for maximum height (maximum vertical ascent) is:',
      options: ['A. 0°', 'B. 45°', 'C. 90°', 'D. 30°'],
      answer: 'C. 90°',
      diff: 'easy',
    },
    {
      q: 'The formula for horizontal range R of a projectile is:',
      options: ['A. (v₀² sin²θ)/g', 'B. (v₀² sin2θ)/g', 'C. (v₀² cos2θ)/g', 'D. (v₀²)/2g'],
      answer: 'B. (v₀² sin2θ)/g',
      diff: 'medium',
    },
    {
      q: 'The angle for maximum range of a projectile (on flat ground) is:',
      options: ['A. 30°', 'B. 45°', 'C. 60°', 'D. 90°'],
      answer: 'B. 45°',
      diff: 'easy',
    },
    {
      q: 'Maximum range R_max equals:',
      options: ['A. v₀²/(2g)', 'B. v₀²/g', 'C. 2v₀²/g', 'D. v₀² sin²θ/g'],
      answer: 'B. v₀²/g',
      diff: 'hard',
    },
    {
      q: 'The time to reach maximum height for a projectile is:',
      options: ['A. v₀ sinθ / g', 'B. 2v₀ sinθ / g', 'C. v₀ cosθ / g', 'D. v₀ / g'],
      answer: 'A. v₀ sinθ / g',
      diff: 'medium',
    },
    {
      q: 'If two vectors are perpendicular, their dot product is:',
      options: ['A. Maximum', 'B. Minimum positive', 'C. Zero', 'D. Equal to product of magnitudes'],
      answer: 'C. Zero',
      diff: 'easy',
    }
  ]
},


// lecture 4//


   4: {
  title: 'Force and Newton’s Laws of Motion (PHY101 Lecture 4)',
  summary: `**Key Topics Covered:**
- Dynamics: study of forces and resulting motion
- Newton’s First Law (Law of Inertia)
- Frames of reference (inertial and non-inertial)
- Newton’s Second Law (F = ma)
- Concept of mass vs weight
- Newton’s Third Law (Action-Reaction)
- Vector nature of force
- Common misconceptions about Newton’s laws

---

**Simple Understanding:**

**From Kinematics to Dynamics:**
👉 Kinematics describes motion (displacement, velocity, acceleration).
👉 Dynamics asks: What causes acceleration? Answer: FORCE.
👉 Before Newton: believed natural state is rest; motion requires a force.
👉 Newton’s revolution: natural state is to keep doing whatever it’s doing (rest or uniform motion).

**Newton’s First Law (Law of Inertia):**
👉 An object at rest stays at rest, and an object in motion stays in motion with constant speed in a straight line, unless acted upon by an external force.
👉 This is also called the law of inertia.
👉 Inertia = resistance to change in motion. More mass = more inertia.

**Frames of Reference:**
👉 Inertial frame: moves with constant velocity (a=0). Newton’s laws hold.
👉 Non-inertial frame: accelerates (a≠0). Newton’s laws appear to fail; fictitious forces seem to act.

**Newton’s Second Law:**
👉 The net external force on an object equals its mass times acceleration: F_net = m a
👉 a = F_net / m  (acceleration is in direction of net force)
👉 Force is a vector: add forces using components.
👉 SI unit: Newton (N) = 1 kg·m/s²

**Mass vs Weight:**
👉 Mass (m) = amount of matter, scalar, same everywhere, never zero.
👉 Weight (W) = force due to gravity: W = m g (vector, directed downward).
👉 Weight changes with location (g varies). Mass does not.

**Newton’s Third Law:**
👉 For every action, there is an equal and opposite reaction.
👉 If object A exerts force F on object B, then B exerts force –F on A.
👉 Action and reaction act on different objects, so they do not cancel.

---

**Important Clarifications (Misconceptions):**
1. A moving object does NOT need a net force if it moves at constant velocity (First law).
2. Equal & opposite forces are NOT always action-reaction pairs (e.g., weight and normal force on a book).
3. A force on an object does NOT always cause acceleration – only a net (unbalanced) force does.

---

**Everyday Examples:**
- Pushing a light cart vs heavy car – inertia depends on mass.
- Walking: you push ground backward, ground pushes you forward.
- Horse pulling cart: horse pushes ground backward, ground pushes horse forward; net forward force moves cart.
- Rubber band extends more with more force – measures force.

---

**Important Vocabulary:**
- Dynamics = study of forces and motion
- Force = push or pull (vector)
- Inertia = resistance to change in motion
- Inertial frame = non-accelerating reference frame
- Non-inertial frame = accelerating reference frame
- Fictitious force = apparent force in non-inertial frame
- Net force = vector sum of all external forces
- Mass = measure of inertia (scalar, kg)
- Weight = force due to gravity (W = mg, N)
- Action-reaction pair = equal opposite forces on different objects

---

**Quick Revision Points:**
- Newton’s 1st law: no net force → constant velocity (or rest).
- Inertia depends on mass; larger mass → larger inertia.
- Inertial frames: Newton’s laws hold.
- Newton’s 2nd law: F_net = m a (vector equation).
- 1 N = 1 kg·m/s².
- Weight = m g (g = 9.8 m/s² on Earth).
- Newton’s 3rd law: F_AonB = – F_BonA (action-reaction on different bodies).
- Action-reaction forces do NOT cancel because they act on different objects.
- Net force is needed for acceleration, not for constant velocity.`,

  questions: [
    {
      q: 'Dynamics is the study of:',
      options: ['A. Motion without causes', 'B. Forces and resulting motion', 'C. Displacement only', 'D. Vectors only'],
      answer: 'B. Forces and resulting motion',
      diff: 'easy',
    },
    {
      q: 'Before Newton, the common belief about motion was that:',
      options: ['A. Objects naturally continue moving', 'B. Natural state is rest', 'C. Force is not needed for motion', 'D. All motion is circular'],
      answer: 'B. Natural state is rest',
      diff: 'easy',
    },
    {
      q: 'Newton’s First Law is also called the law of:',
      options: ['A. Acceleration', 'B. Action-Reaction', 'C. Inertia', 'D. Gravity'],
      answer: 'C. Inertia',
      diff: 'easy',
    },
    {
      q: 'Inertia is the resistance to change in:',
      options: ['A. Mass', 'B. Weight', 'C. Motion', 'D. Shape'],
      answer: 'C. Motion',
      diff: 'easy',
    },
    {
      q: 'A body moving with constant velocity has a net force:',
      options: ['A. Greater than zero', 'B. Equal to zero', 'C. Less than zero', 'D. Proportional to velocity'],
      answer: 'B. Equal to zero',
      diff: 'easy',
    },
    {
      q: 'An inertial frame of reference is one that:',
      options: ['A. Accelerates', 'B. Rotates', 'C. Moves with constant velocity', 'D. Is stationary only'],
      answer: 'C. Moves with constant velocity',
      diff: 'medium',
    },
    {
      q: 'Newton’s laws are valid in:',
      options: ['A. Non-inertial frames only', 'B. Inertial frames only', 'C. All frames', 'D. Accelerating frames'],
      answer: 'B. Inertial frames only',
      diff: 'medium',
    },
    {
      q: 'A non-inertial frame is one that:',
      options: ['A. Has constant velocity', 'B. Is at rest', 'C. Accelerates', 'D. Is far from all masses'],
      answer: 'C. Accelerates',
      diff: 'easy',
    },
    {
      q: 'Newton’s Second Law states that F_net =:',
      options: ['A. m/v', 'B. m a', 'C. m g', 'D. a/m'],
      answer: 'B. m a',
      diff: 'easy',
    },
    {
      q: 'The SI unit of force is:',
      options: ['A. Joule', 'B. Watt', 'C. Newton', 'D. Pascal'],
      answer: 'C. Newton',
      diff: 'easy',
    },
    {
      q: 'One Newton is defined as:',
      options: ['A. 1 kg·m/s', 'B. 1 kg·m/s²', 'C. 1 g·cm/s²', 'D. 1 kg·m²/s²'],
      answer: 'B. 1 kg·m/s²',
      diff: 'medium',
    },
    {
      q: 'Weight is defined as:',
      options: ['A. Mass × velocity', 'B. Mass × acceleration due to gravity', 'C. Force × time', 'D. Mass × distance'],
      answer: 'B. Mass × acceleration due to gravity',
      diff: 'easy',
    },
    {
      q: 'If an object has mass 10 kg on Earth, its mass on the Moon is:',
      options: ['A. 10 kg', 'B. 1.67 kg', 'C. 60 kg', 'D. 0 kg'],
      answer: 'A. 10 kg',
      diff: 'easy',
    },
    {
      q: 'Weight of a 10 kg object on Earth (g=9.8 m/s²) is:',
      options: ['A. 10 N', 'B. 98 N', 'C. 9.8 N', 'D. 0.98 N'],
      answer: 'B. 98 N',
      diff: 'easy',
    },
    {
      q: 'Newton’s Third Law states that action and reaction forces:',
      options: ['A. Act on the same body', 'B. Cancel each other', 'C. Act on different bodies', 'D. Are always in the same direction'],
      answer: 'C. Act on different bodies',
      diff: 'easy',
    },
    {
      q: 'Action-reaction forces are:',
      options: ['A. Equal in magnitude and opposite in direction', 'B. Unequal in magnitude', 'C. In the same direction', 'D. Always contact forces'],
      answer: 'A. Equal in magnitude and opposite in direction',
      diff: 'easy',
    },
    {
      q: 'Why does a person move forward when walking?',
      options: ['A. They push the ground forward', 'B. The ground pushes them forward', 'C. Friction is absent', 'D. Newton’s first law only'],
      answer: 'B. The ground pushes them forward',
      diff: 'medium',
    },
    {
      q: 'A horse claims it cannot pull a cart because the cart pulls back equally. Why does the cart move?',
      options: ['A. Horse’s force is greater', 'B. Action-reaction cancel on the cart', 'C. Horse pushes ground backward, ground pushes horse forward; net force on system is forward', 'D. Newton’s second law fails'],
      answer: 'C. Horse pushes ground backward, ground pushes horse forward; net force on system is forward',
      diff: 'hard',
    },
    {
      q: 'Which of the following is an action-reaction pair?',
      options: ['A. Weight of a book and normal force from table', 'B. Earth pulling apple and apple pulling Earth', 'C. Friction and normal force', 'D. Tension in a rope and weight'],
      answer: 'B. Earth pulling apple and apple pulling Earth',
      diff: 'medium',
    },
    {
      q: 'If a box is pushed with 10 N to the right and friction exerts 10 N to the left, the net force is:',
      options: ['A. 20 N right', 'B. 20 N left', 'C. 0 N', 'D. 10 N up'],
      answer: 'C. 0 N',
      diff: 'easy',
    },
    {
      q: 'If a net force of 20 N acts on a 4 kg object, its acceleration is:',
      options: ['A. 5 m/s²', 'B. 80 m/s²', 'C. 0.2 m/s²', 'D. 24 m/s²'],
      answer: 'A. 5 m/s²',
      diff: 'easy',
    },
    {
      q: 'If a force of 30 N gives an object acceleration of 6 m/s², the mass is:',
      options: ['A. 180 kg', 'B. 5 kg', 'C. 36 kg', 'D. 0.2 kg'],
      answer: 'B. 5 kg',
      diff: 'easy',
    },
    {
      q: 'Force is a vector because it has:',
      options: ['A. Magnitude only', 'B. Direction only', 'C. Both magnitude and direction', 'D. Neither'],
      answer: 'C. Both magnitude and direction',
      diff: 'easy',
    },
    {
      q: 'Which statement is true about a free particle (no net force)?',
      options: ['A. It must be at rest', 'B. It moves with constant velocity', 'C. It accelerates', 'D. It cannot exist in reality but is a useful abstraction'],
      answer: 'D. It cannot exist in reality but is a useful abstraction',
      diff: 'medium',
    },
    {
      q: 'In the dimension formula, force has dimensions:',
      options: ['A. MLT⁻¹', 'B. MLT⁻²', 'C. ML²T⁻²', 'D. MT⁻²'],
      answer: 'B. MLT⁻²',
      diff: 'medium',
    }
  ]
},



// lecture 5 //




 5: {
  title: 'Applications of Newton’s Laws – I: Equilibrium, Tension, Friction, Inclined Plane (PHY101 Lecture 5)',
  summary: `**Key Topics Covered:**
- Equilibrium: state where net force is zero (at rest or constant velocity)
- Normal force and equilibrium examples (apple on table, aircraft at constant speed)
- Tension in strings: massless string → constant tension; massive string → tension varies
- Changing direction of tension using pulleys
- Friction: kinetic friction (constant) and static friction (variable up to max)
- Coefficient of friction (μₖ and μₛ)
- Frictional dynamics: F_applied – f_friction = m a
- Inclined plane and angle of repose (α = tan⁻¹μₛ)
- Empirical vs fundamental laws

---

**Simple Understanding:**

**Equilibrium:**
👉 State where sum of all forces = 0 (net force = 0).
👉 Object can be at rest OR moving with constant velocity.
👉 Example: apple on table – gravity pulls down, normal force pushes up; they cancel.
👉 Example: aircraft flying at constant speed and altitude – net force = 0.

**Normal Force:**
👉 Perpendicular force from a surface.
👉 For horizontal surface: N = mg.
👉 For inclined plane: N = mg cosθ.

**Tension in Strings:**
👉 For a massless (ideal) string: tension is constant throughout.
👉 For a massive rope: tension is greater at the top (supports more weight).
👉 Pulleys change direction of tension without changing magnitude (ideal pulley).

**Friction:**
👉 Opposes motion (or attempted motion) between surfaces in contact.
👉 Microscopic roughness causes friction.

**Kinetic Friction (fₖ):**
👉 Acts when object is already moving.
👉 Constant magnitude: fₖ = μₖ N = μₖ mg (on horizontal surface).
👉 Independent of speed and contact area (empirical, limited validity).

**Static Friction (fₛ):**
👉 Acts when object is at rest.
👉 Variable: fₛ = applied force (up to a maximum).
👉 Maximum static friction: fₛ(max) = μₛ N.
👉 μₛ > μₖ generally (harder to start motion than to keep it moving).

**Inclined Plane & Angle of Repose:**
👉 As angle increases, normal force decreases (N = mg cosθ).
👉 Component of gravity along plane = mg sinθ.
👉 At angle of repose (α): mg sinα = μₛ mg cosα → tanα = μₛ → α = tan⁻¹(μₛ).
👉 If μₛ = 0, α = 0° (no friction → no incline needed to slide).

**Empirical vs Fundamental Laws:**
- Empirical (e.g., friction laws): based on observation, limited scope.
- Fundamental (e.g., Newton’s laws): universal, apply everywhere.

---

**Important Vocabulary:**
- Equilibrium = net force = 0 (rest or constant velocity)
- Normal force = perpendicular contact force
- Tension = pulling force transmitted through a string/rope
- Massless string = ideal string with constant tension
- Kinetic friction = friction during motion (constant)
- Static friction = friction at rest (adjustable, has maximum)
- Coefficient of friction (μ) = ratio of frictional force to normal force
- Angle of repose = maximum incline angle before sliding starts
- Empirical law = law based on observation, not derived from first principles

---

**Quick Revision Points:**
- Equilibrium does not mean no forces; it means net force = 0.
- Normal force is perpendicular to surface.
- For massless string: tension same everywhere.
- Pulley changes direction of tension.
- Kinetic friction: fₖ = μₖ N (constant).
- Static friction: fₛ ≤ μₛ N; adjusts to match applied force.
- μₛ > μₖ typically.
- On incline: N = mg cosθ; downhill force = mg sinθ.
- Angle of repose α = tan⁻¹(μₛ).
- Friction is empirical; Newton’s laws are fundamental.`,

  questions: [
    {
      q: 'A body is in equilibrium when:',
      options: ['A. No forces act on it', 'B. The net force is zero', 'C. It is at rest only', 'D. It is moving only'],
      answer: 'B. The net force is zero',
      diff: 'easy',
    },
    {
      q: 'An apple resting on a table experiences:',
      options: ['A. Only gravity', 'B. Only normal force', 'C. Both gravity and normal force, which cancel', 'D. Neither gravity nor normal force'],
      answer: 'C. Both gravity and normal force, which cancel',
      diff: 'easy',
    },
    {
      q: 'For an object on a horizontal surface, the normal force N equals:',
      options: ['A. mg', 'B. m/g', 'C. g/m', 'D. 0'],
      answer: 'A. mg',
      diff: 'easy',
    },
    {
      q: 'An aircraft flying at constant speed and constant altitude is:',
      options: ['A. Not in equilibrium', 'B. In equilibrium because net force is zero', 'C. Accelerating downward', 'D. Accelerating forward'],
      answer: 'B. In equilibrium because net force is zero',
      diff: 'medium',
    },
    {
      q: 'For an ideal (massless) string, tension is:',
      options: ['A. Zero', 'B. Different at every point', 'C. Constant throughout', 'D. Equal to weight only'],
      answer: 'C. Constant throughout',
      diff: 'easy',
    },
    {
      q: 'In a massive rope hanging vertically, tension is:',
      options: ['A. Same at top and bottom', 'B. Greater at the bottom', 'C. Greater at the top', 'D. Zero everywhere'],
      answer: 'C. Greater at the top',
      diff: 'medium',
    },
    {
      q: 'A pulley changes the ________ of tension without changing its magnitude (ideal case).',
      options: ['A. Direction', 'B. Magnitude', 'C. Both direction and magnitude', 'D. Neither'],
      answer: 'A. Direction',
      diff: 'easy',
    },
    {
      q: 'Kinetic friction acts when:',
      options: ['A. The object is at rest', 'B. The object is moving', 'C. No force is applied', 'D. The object is in equilibrium'],
      answer: 'B. The object is moving',
      diff: 'easy',
    },
    {
      q: 'The formula for kinetic friction is fₖ =:',
      options: ['A. μₛ N', 'B. μₖ N', 'C. μₖ mg (on horizontal surface)', 'D. Both B and C'],
      answer: 'D. Both B and C',
      diff: 'easy',
    },
    {
      q: 'Static friction is:',
      options: ['A. Constant regardless of applied force', 'B. Variable and adjusts to match applied force up to a maximum', 'C. Always equal to μₛ N', 'D. Always zero'],
      answer: 'B. Variable and adjusts to match applied force up to a maximum',
      diff: 'medium',
    },
    {
      q: 'The maximum static friction is given by:',
      options: ['A. μₖ N', 'B. μₛ N', 'C. mg', 'D. μₛ mg only'],
      answer: 'B. μₛ N',
      diff: 'easy',
    },
    {
      q: 'Typically, μₛ (coefficient of static friction) is:',
      options: ['A. Less than μₖ', 'B. Equal to μₖ', 'C. Greater than μₖ', 'D. Zero'],
      answer: 'C. Greater than μₖ',
      diff: 'easy',
    },
    {
      q: 'Which statement about friction is TRUE?',
      options: ['A. Friction is independent of normal force', 'B. Friction depends on contact area', 'C. Kinetic friction is constant for given surfaces', 'D. Static friction has a fixed value'],
      answer: 'C. Kinetic friction is constant for given surfaces',
      diff: 'medium',
    },
    {
      q: 'The frictional force law (f = μN) is considered:',
      options: ['A. A fundamental law like Newton’s laws', 'B. An empirical law with limited scope', 'C. Always exact', 'D. Valid for extremely large weights'],
      answer: 'B. An empirical law with limited scope',
      diff: 'hard',
    },
    {
      q: 'On an inclined plane, the component of weight parallel to the plane is:',
      options: ['A. mg cosθ', 'B. mg sinθ', 'C. mg tanθ', 'D. mg'],
      answer: 'B. mg sinθ',
      diff: 'easy',
    },
    {
      q: 'On an inclined plane, the normal force N equals:',
      options: ['A. mg cosθ', 'B. mg sinθ', 'C. mg', 'D. mg tanθ'],
      answer: 'A. mg cosθ',
      diff: 'easy',
    },
    {
      q: 'The angle of repose is the angle at which an object just begins to slide. It is given by:',
      options: ['A. α = tan⁻¹(μₖ)', 'B. α = tan⁻¹(μₛ)', 'C. α = sin⁻¹(μₛ)', 'D. α = cos⁻¹(μₛ)'],
      answer: 'B. α = tan⁻¹(μₛ)',
      diff: 'medium',
    },
    {
      q: 'If the coefficient of static friction is 0.5, the angle of repose is approximately:',
      options: ['A. 26.6°', 'B. 45°', 'C. 60°', 'D. 30°'],
      answer: 'A. 26.6°',
      diff: 'medium',
    },
    {
      q: 'If the surface is frictionless (μₛ = 0), the angle of repose is:',
      options: ['A. 90°', 'B. 45°', 'C. 0°', 'D. 30°'],
      answer: 'C. 0°',
      diff: 'medium',
    },
    {
      q: 'Why are brakes less effective on an inclined road?',
      options: ['A. Normal force decreases, so friction decreases', 'B. Gravity helps braking', 'C. Coefficient of friction changes', 'D. Weight increases'],
      answer: 'A. Normal force decreases, so friction decreases',
      diff: 'medium',
    },
    {
      q: 'A 2 kg box is pulled on a frictionless floor with a force of 10 N. Its acceleration is:',
      options: ['A. 2 m/s²', 'B. 5 m/s²', 'C. 10 m/s²', 'D. 20 m/s²'],
      answer: 'B. 5 m/s²',
      diff: 'easy',
    },
    {
      q: 'A box of mass 5 kg is pulled with a force of 30 N. Kinetic friction coefficient μₖ = 0.2 (g=10 m/s²). The frictional force is:',
      options: ['A. 10 N', 'B. 30 N', 'C. 5 N', 'D. 0 N'],
      answer: 'A. 10 N',
      diff: 'medium',
    },
    {
      q: 'For the box in the previous question (mass 5 kg, F=30 N, fₖ=10 N), the acceleration is:',
      options: ['A. 2 m/s²', 'B. 4 m/s²', 'C. 6 m/s²', 'D. 8 m/s²'],
      answer: 'B. 4 m/s²',
      diff: 'medium',
    },
    {
      q: 'A massless string under tension has a constant tension because:',
      options: ['A. Its mass is zero, so net force on any segment must be zero', 'B. It is very strong', 'C. It is elastic', 'D. It is short'],
      answer: 'A. Its mass is zero, so net force on any segment must be zero',
      diff: 'hard',
    },
    {
      q: 'When a person walks forward, the friction force from the ground on the person is:',
      options: ['A. Backward', 'B. Forward', 'C. Upward', 'D. Zero'],
      answer: 'B. Forward',
      diff: 'easy',
    },
    {
      q: 'Rolling friction is generally ________ static or kinetic friction.',
      options: ['A. Greater than', 'B. Equal to', 'C. Less than', 'D. Unrelated to'],
      answer: 'C. Less than',
      diff: 'easy',
    },
    {
      q: 'A 10 kg block is on a horizontal surface (μₛ=0.4, g=10 m/s²). The maximum static friction is:',
      options: ['A. 40 N', 'B. 4 N', 'C. 100 N', 'D. 0 N'],
      answer: 'A. 40 N',
      diff: 'easy',
    },
    {
      q: 'If the applied force is less than maximum static friction, the object:',
      options: ['A. Accelerates', 'B. Remains at rest', 'C. Moves with constant velocity', 'D. Slows down'],
      answer: 'B. Remains at rest',
      diff: 'easy',
    }
  ]
}, 



// lecture 6 //


  6: {
  title: 'Applications of Newton’s Laws – II: Fluid Friction, Terminal Velocity, Problems in Inertial & Non-Inertial Frames (PHY101 Lecture 6)',
  summary: `**Key Topics Covered:**
- Fluid friction (air resistance, water resistance)
- Fluid resistance force depends on speed (linear, square, cube laws)
- Terminal velocity (equilibrium between weight and fluid resistance)
- Problem-solving steps (free body diagram, coordinate system, Newton’s 2nd law)
- Problems on connected blocks, ropes, and pulleys
- Inertial vs non-inertial frames of reference
- Apparent weight in accelerating elevator (weightlessness in free fall)
- Massive rope: tension varies with position
- Rope slipping off a table (angle of repose type problem)
- Pulley systems with unequal masses

---

**Simple Understanding:**

**Fluid Friction (Drag):**
👉 Occurs when an object moves through a fluid (air, water, oil).
👉 Direction: opposite to velocity.
👉 Magnitude increases with speed (linear, square, or cube dependence).
👉 Example: waving hand in air vs water – water gives more resistance.
👉 Fluid resistance is why a feather falls slower than a ball (air resistance matters).

**Terminal Velocity:**
👉 When falling object speeds up, fluid resistance increases.
👉 Eventually, resistance = weight → net force = 0 → acceleration stops.
👉 Velocity becomes constant: terminal velocity vₜ = mg/k (for linear drag f = kv).

**Equilibrium under Two Forces:**
👉 Example: feather falling at terminal velocity – upward drag = downward weight.

---

**Problem-Solving Steps:**
1. Draw free body diagram.
2. Choose origin and coordinate system (x, y).
3. Identify all forces (tension, normal, friction, weight, etc.) and their components.
4. Apply Newton’s 2nd law: ΣFₓ = m aₓ, ΣFᵧ = m aᵧ.
5. Solve for unknowns (acceleration, velocity, displacement, forces).

---

**Inertial vs Non-Inertial Frames:**
- Inertial frame: constant velocity (a=0). Newton’s laws hold.
- Non-inertial frame: accelerating. Newton’s laws appear to fail; fictitious forces appear.

**Apparent Weight in Elevator:**
- At rest or constant velocity: N = mg (true weight)
- Accelerating upward: N = m(g + a) (feel heavier)
- Accelerating downward: N = m(g – a) (feel lighter)
- Free fall (a = g): N = 0 (weightlessness)

---

**Problems Covered:**

**1. Two blocks on frictionless surface:**
   Force F on 2m → acceleration a = F/(3m). Force on mass m = F/3.

**2. Massive rope pulled on smooth floor:**
   Tension at distance l from force end: T = F(1 – l/L).

**3. Rope slipping off table:**
   Hanging length l such that rope just slips: l = (μL)/(1+μ).

**4. Massive rope over pulley:**
   Acceleration a = g (x/l – 1/2) where x is length on one side.

**5. Minimum force to prevent small block from slipping:**
   F ≥ (m+M)g/μ.

**6. Atwood machine (masses over pulley):**
   Acceleration a = (m₂ – m₁)g/(m₁+m₂)
   Tension T = (2m₁m₂)g/(m₁+m₂)

**7. Mass on table connected to hanging mass:**
   a = m₂g/(m₁+m₂), T = m₁m₂g/(m₁+m₂)

---

**Important Vocabulary:**
- Fluid friction = drag force from fluid
- Terminal velocity = constant maximum speed when drag balances weight
- Free body diagram = diagram showing all forces on an object
- Inertial frame = non-accelerating reference frame
- Non-inertial frame = accelerating reference frame
- Apparent weight = normal force felt as weight
- Weightlessness = apparent weight = 0 (free fall)
- Linear mass density = mass per unit length

---

**Quick Revision Points:**
- Fluid resistance opposes motion and increases with speed.
- Terminal velocity: mg = kv (linear drag) → vₜ = mg/k.
- Inertial frames: Newton’s laws valid. Non-inertial: need fictitious forces.
- Elevator accelerating up: feel heavier (N = m(g+a)).
- Elevator accelerating down: feel lighter (N = m(g–a)).
- Free fall: weightless (N=0).
- For massive rope, tension varies: T = F(1 – l/L).
- Rope slipping: l = μL/(1+μ).
- Atwood machine: a = (m₂–m₁)g/(m₁+m₂), T = 2m₁m₂g/(m₁+m₂).
- Always draw free body diagram and apply ΣF = ma separately in x and y.`,

  questions: [
    {
      q: 'Fluid friction (drag) always acts in a direction:',
      options: ['A. Same as velocity', 'B. Opposite to velocity', 'C. Perpendicular to velocity', 'D. Upward only'],
      answer: 'B. Opposite to velocity',
      diff: 'easy',
    },
    {
      q: 'The magnitude of fluid resistance usually:',
      options: ['A. Decreases with speed', 'B. Increases with speed', 'C. Is constant', 'D. Is independent of speed'],
      answer: 'B. Increases with speed',
      diff: 'easy',
    },
    {
      q: 'Terminal velocity is reached when:',
      options: ['A. Weight becomes zero', 'B. Drag force equals weight', 'C. Acceleration is maximum', 'D. Velocity is zero'],
      answer: 'B. Drag force equals weight',
      diff: 'easy',
    },
    {
      q: 'For linear drag (f = kv), the terminal velocity vₜ is:',
      options: ['A. mg/k', 'B. kmg', 'C. k/mg', 'D. mgk'],
      answer: 'A. mg/k',
      diff: 'medium',
    },
    {
      q: 'A feather falls slower than a ball because:',
      options: ['A. Feather has less mass', 'B. Air resistance affects feather more relative to its weight', 'C. Gravity acts less on feather', 'D. Feather is not a solid'],
      answer: 'B. Air resistance affects feather more relative to its weight',
      diff: 'medium',
    },
    {
      q: 'The first step in solving any Newton’s law problem is:',
      options: ['A. Write equations', 'B. Draw a free body diagram', 'C. Calculate acceleration', 'D. Find mass'],
      answer: 'B. Draw a free body diagram',
      diff: 'easy',
    },
    {
      q: 'An inertial frame of reference is one that:',
      options: ['A. Accelerates', 'B. Rotates', 'C. Moves with constant velocity', 'D. Is at rest only'],
      answer: 'C. Moves with constant velocity',
      diff: 'easy',
    },
    {
      q: 'Newton’s laws are directly applicable in:',
      options: ['A. Non-inertial frames only', 'B. Inertial frames only', 'C. All frames', 'D. Rotating frames'],
      answer: 'B. Inertial frames only',
      diff: 'easy',
    },
    {
      q: 'An elevator accelerating upward makes a person feel:',
      options: ['A. Lighter', 'B. Heavier', 'C. Weightless', 'D. No change'],
      answer: 'B. Heavier',
      diff: 'easy',
    },
    {
      q: 'In an elevator accelerating downward, apparent weight N = m(g – a). This means:',
      options: ['A. Feel heavier', 'B. Feel lighter', 'C. Same as true weight', 'D. Zero always'],
      answer: 'B. Feel lighter',
      diff: 'easy',
    },
    {
      q: 'When an elevator is in free fall (cable breaks), a person experiences:',
      options: ['A. Heavier weight', 'B. Lighter weight', 'C. Weightlessness (N=0)', 'D. Normal weight'],
      answer: 'C. Weightlessness (N=0)',
      diff: 'easy',
    },
    {
      q: 'A mass hung from the ceiling of an accelerating train makes an angle θ. The acceleration a is given by:',
      options: ['A. a = g tanθ', 'B. a = g sinθ', 'C. a = g cosθ', 'D. a = g cotθ'],
      answer: 'A. a = g tanθ',
      diff: 'medium',
    },
    {
      q: 'For a uniform rope of length L pulled by force F on a smooth floor, tension at a distance l from the force end is:',
      options: ['A. T = F', 'B. T = F(l/L)', 'C. T = F(1 – l/L)', 'D. T = 0'],
      answer: 'C. T = F(1 – l/L)',
      diff: 'hard',
    },
    {
      q: 'If l = 0 in the rope problem above, tension is:',
      options: ['A. 0', 'B. F', 'C. F/2', 'D. Depends on mass'],
      answer: 'B. F',
      diff: 'medium',
    },
    {
      q: 'A rope of length L and linear mass density m hangs partly off a table. The condition for just slipping is:',
      options: ['A. l = μL/(1+μ)', 'B. l = L/μ', 'C. l = μL', 'D. l = L/(1+μ)'],
      answer: 'A. l = μL/(1+μ)',
      diff: 'hard',
    },
    {
      q: 'If μ = 0 (frictionless table), the rope slips even for:',
      options: ['A. Very large l', 'B. Any l > 0', 'C. l = L only', 'D. l = 0'],
      answer: 'B. Any l > 0',
      diff: 'medium',
    },
    {
      q: 'Two blocks of masses 2m and m on frictionless surface, force F on 2m. Acceleration of system is:',
      options: ['A. F/(2m)', 'B. F/(3m)', 'C. F/m', 'D. 2F/m'],
      answer: 'B. F/(3m)',
      diff: 'easy',
    },
    {
      q: 'In the two-block problem above, the force on mass m due to mass 2m is:',
      options: ['A. F/2', 'B. F/3', 'C. 2F/3', 'D. F'],
      answer: 'B. F/3',
      diff: 'medium',
    },
    {
      q: 'For an Atwood machine (masses m₁ and m₂ over pulley), acceleration a = (m₂ – m₁)g/(m₁+m₂) assuming:',
      options: ['A. m₂ > m₁', 'B. m₁ > m₂', 'C. Pulley has friction', 'D. String is massive'],
      answer: 'A. m₂ > m₁',
      diff: 'easy',
    },
    {
      q: 'If m₁ = m₂ in an Atwood machine, acceleration is:',
      options: ['A. g', 'B. 2g', 'C. 0', 'D. g/2'],
      answer: 'C. 0',
      diff: 'easy',
    },
    {
      q: 'The tension in an Atwood machine string is:',
      options: ['A. (m₁+m₂)g', 'B. 2m₁m₂g/(m₁+m₂)', 'C. (m₂–m₁)g', 'D. m₁m₂g/(m₁+m₂)'],
      answer: 'B. 2m₁m₂g/(m₁+m₂)',
      diff: 'hard',
    },
    {
      q: 'A mass m on a frictionless table connected by a string over a pulley to a hanging mass M. The acceleration is:',
      options: ['A. Mg/(m+M)', 'B. mg/(m+M)', 'C. (M+m)g', 'D. g'],
      answer: 'A. Mg/(m+M)',
      diff: 'medium',
    },
    {
      q: 'In the elevator problem, when the elevator accelerates downward at a = g/2, the apparent weight is:',
      options: ['A. mg/2', 'B. mg', 'C. 3mg/2', 'D. 0'],
      answer: 'A. mg/2',
      diff: 'medium',
    },
    {
      q: 'Which of the following is NOT a step in problem-solving using Newton’s laws?',
      options: ['A. Draw free body diagram', 'B. Choose coordinate system', 'C. Ignore normal forces', 'D. Apply ΣF = ma separately in x and y'],
      answer: 'C. Ignore normal forces',
      diff: 'easy',
    },
    {
      q: 'Fluid resistance for very high speeds is often proportional to:',
      options: ['A. v', 'B. v² or v³', 'C. constant', 'D. 1/v'],
      answer: 'B. v² or v³',
      diff: 'medium',
    },
    {
      q: 'Without fluid friction in water:',
      options: ['A. Fishes would swim faster', 'B. Fishes would not be able to swim', 'C. Water would evaporate', 'D. Nothing changes'],
      answer: 'B. Fishes would not be able to swim',
      diff: 'easy',
    },
    {
      q: 'A person in a freely falling elevator experiences weightlessness because:',
      options: ['A. Gravity stops acting', 'B. Normal force becomes zero', 'C. Mass becomes zero', 'D. Velocity is zero'],
      answer: 'B. Normal force becomes zero',
      diff: 'medium',
    },
    {
      q: 'A massive rope has different tension at different points because:',
      options: ['A. Rope is elastic', 'B. Different parts support different weights', 'C. Friction changes', 'D. Gravity is not uniform'],
      answer: 'B. Different parts support different weights',
      diff: 'medium',
    }
  ]
},



// lecture 7 //


  7: {
  title: 'Work and Energy (PHY101 Lecture 7)',
  summary: `**Key Topics Covered:**
- Definition of work: W = F·d = F d cosθ
- Positive, negative, and zero work
- Work done by constant force
- Work done by variable force (integration / area under F-x curve)
- Introduction to energy: capacity to do work
- Types of energy (elastic, gravitational, electrical, chemical, thermal, nuclear, sound)
- Kinetic energy: KE = ½ mv²
- Work-Energy Principle: net work = change in KE
- Power: rate of doing work (P = W/t = F v)

---

**Simple Understanding:**

**Work (by a constant force):**
👉 W = F · d = F d cosθ
👉 θ = angle between force and displacement.
- θ = 0° → positive work (force helps motion)
- θ = 180° → negative work (force opposes motion)
- θ = 90° → zero work (force perpendicular to motion)
👉 Work is a scalar (no direction).
👉 SI unit: Joule (J) = N·m = kg·m²/s²

**Work by a variable force:**
👉 If force varies with position, work = area under F-x curve.
👉 W = ∫ F(x) dx from xᵢ to x_f.
👉 For constant force, W = F·Δx (rectangle area).
👉 For linear force F = kx, W = ½ k x² (triangle area).

**Energy:**
👉 Capacity to do work.
👉 Many forms: mechanical, chemical, electrical, thermal, nuclear, etc.
👉 Can be stored, converted, never created or destroyed.

**Kinetic Energy (KE):**
👉 Energy of motion: KE = ½ m v².
👉 Always positive (or zero).

**Work-Energy Principle:**
👉 Net work done on an object = change in its kinetic energy.
👉 W_net = KE_f – KE_i = ΔKE.
👉 Positive work → KE increases; negative work → KE decreases.

**Power:**
👉 Rate of doing work: P = W / t.
👉 For constant force: P = F·v (where v is velocity).
👉 SI unit: Watt (W) = J/s.
👉 1 hp = 746 W.

---

**Important Examples:**

**Example 1:** Man pushing cart with 5 N force over 5 m → W = 25 J.

**Example 2:** Apple weight 1 N falling 3 m → W = 3 J (gravity does positive work).

**Example 3:** Lifting 20 N weight 2 m:
- Work by hand: +40 J (force up, displacement up)
- Work by gravity: –40 J (force down, displacement up)

**Example 4:** Car braking: friction does negative work, reducing KE to zero.
Stopping distance: x = v₀²/(2μg).

**Example 5:** Truck vs rickshaw – lighter object moving faster has more KE.

**Example 6:** Trolley on 30° hill at constant speed – power = mg sinθ · v.

---

**Important Vocabulary:**
- Work = force times displacement in direction of force
- Joule = SI unit of work and energy
- Scalar = quantity with magnitude only (work, energy)
- Kinetic energy = energy of motion
- Work-energy principle = net work = change in KE
- Power = rate of doing work
- Watt = SI unit of power
- Variable force = force that changes with position
- Integration = mathematical tool to sum small pieces

---

**Quick Revision Points:**
- W = F d cosθ (θ angle between F and d)
- Work positive if force helps motion, negative if opposes.
- Work zero if force perpendicular to displacement.
- Area under F-x graph = work done by variable force.
- ∫ xⁿ dx = xⁿ⁺¹/(n+1) (for n ≠ -1).
- KE = ½ m v².
- W_net = ΔKE.
- Power = W/t = F·v (for constant force).
- 1 Joule = 1 N·m.
- 1 Watt = 1 J/s.`,

  questions: [
    {
      q: 'Work is defined as:',
      options: ['A. Force × time', 'B. Force × displacement × cosθ', 'C. Mass × acceleration', 'D. Force / displacement'],
      answer: 'B. Force × displacement × cosθ',
      diff: 'easy',
    },
    {
      q: 'The SI unit of work is:',
      options: ['A. Newton', 'B. Watt', 'C. Joule', 'D. Pascal'],
      answer: 'C. Joule',
      diff: 'easy',
    },
    {
      q: '1 Joule is equal to:',
      options: ['A. 1 N·m', 'B. 1 kg·m/s', 'C. 1 N/s', 'D. 1 kg·m²/s'],
      answer: 'A. 1 N·m',
      diff: 'easy',
    },
    {
      q: 'If force and displacement are in the same direction, the work done is:',
      options: ['A. Positive', 'B. Negative', 'C. Zero', 'D. Maximum negative'],
      answer: 'A. Positive',
      diff: 'easy',
    },
    {
      q: 'If force and displacement are opposite in direction, the work done is:',
      options: ['A. Positive', 'B. Negative', 'C. Zero', 'D. Maximum positive'],
      answer: 'B. Negative',
      diff: 'easy',
    },
    {
      q: 'If force is perpendicular to displacement, the work done is:',
      options: ['A. Positive', 'B. Negative', 'C. Zero', 'D. Infinite'],
      answer: 'C. Zero',
      diff: 'easy',
    },
    {
      q: 'A force of 10 N displaces an object by 5 m in the direction of force. Work done is:',
      options: ['A. 2 J', 'B. 15 J', 'C. 50 J', 'D. 0.5 J'],
      answer: 'C. 50 J',
      diff: 'easy',
    },
    {
      q: 'A 20 N weight is lifted vertically 2 m. Work done by gravity is:',
      options: ['A. +40 J', 'B. –40 J', 'C. 0 J', 'D. 10 J'],
      answer: 'B. –40 J',
      diff: 'medium',
    },
    {
      q: 'For a constant force, work is equal to the area under a graph of:',
      options: ['A. F vs t', 'B. F vs x', 'C. v vs t', 'D. a vs t'],
      answer: 'B. F vs x',
      diff: 'easy',
    },
    {
      q: 'Work done by a variable force F(x) from x₁ to x₂ is given by:',
      options: ['A. F(x₂ – x₁)', 'B. ∫ F dx', 'C. dF/dx', 'D. F·v'],
      answer: 'B. ∫ F dx',
      diff: 'medium',
    },
    {
      q: 'For a spring force F = kx, the work done stretching from 0 to x is:',
      options: ['A. kx', 'B. ½ kx²', 'C. kx²', 'D. ½ kx'],
      answer: 'B. ½ kx²',
      diff: 'medium',
    },
    {
      q: 'Kinetic energy is given by:',
      options: ['A. mv', 'B. ½ mv²', 'C. mgh', 'D. ½ kx²'],
      answer: 'B. ½ mv²',
      diff: 'easy',
    },
    {
      q: 'Kinetic energy is always:',
      options: ['A. Negative', 'B. Positive or zero', 'C. Zero', 'D. Negative or zero'],
      answer: 'B. Positive or zero',
      diff: 'easy',
    },
    {
      q: 'The work-energy principle states:',
      options: ['A. Work = force × distance', 'B. Net work = change in kinetic energy', 'C. Energy cannot be created', 'D. Power = work/time'],
      answer: 'B. Net work = change in kinetic energy',
      diff: 'easy',
    },
    {
      q: 'A car doubles its speed. Its kinetic energy becomes:',
      options: ['A. Same', 'B. Double', 'C. Four times', 'D. Half'],
      answer: 'C. Four times',
      diff: 'easy',
    },
    {
      q: 'A truck has 20 times more mass than a rickshaw but moves 5 times slower. Which has greater KE?',
      options: ['A. Truck', 'B. Rickshaw', 'C. Equal', 'D. Cannot determine'],
      answer: 'B. Rickshaw',
      diff: 'medium',
    },
    {
      q: 'Power is defined as:',
      options: ['A. Force × displacement', 'B. Work / time', 'C. Force × time', 'D. Energy × time'],
      answer: 'B. Work / time',
      diff: 'easy',
    },
    {
      q: 'The SI unit of power is:',
      options: ['A. Joule', 'B. Newton', 'C. Watt', 'D. Horsepower'],
      answer: 'C. Watt',
      diff: 'easy',
    },
    {
      q: '1 horsepower (hp) is equal to:',
      options: ['A. 1000 W', 'B. 746 W', 'C. 500 W', 'D. 100 W'],
      answer: 'B. 746 W',
      diff: 'easy',
    },
    {
      q: 'For constant force, power can also be expressed as:',
      options: ['A. F·v', 'B. F·a', 'C. m·v', 'D. F·t'],
      answer: 'A. F·v',
      diff: 'medium',
    },
    {
      q: 'A 2000 kg trolley is pulled up a 30° hill at constant speed 8.93 m/s. Power provided (ignoring friction) is: (g=9.8 m/s²)',
      options: ['A. 44 kW', 'B. 88 kW', 'C. 176 kW', 'D. 8.8 kW'],
      answer: 'B. 88 kW',
      diff: 'hard',
    },
    {
      q: 'A car of mass 1000 kg is moving at 20 m/s. Its kinetic energy is:',
      options: ['A. 10,000 J', 'B. 200,000 J', 'C. 400,000 J', 'D. 20,000 J'],
      answer: 'B. 200,000 J',
      diff: 'medium',
    },
    {
      q: 'Work done by a constant force of 5 N over 4 m at an angle of 60° to displacement is:',
      options: ['A. 20 J', 'B. 10 J', 'C. 17.3 J', 'D. 0 J'],
      answer: 'B. 10 J',
      diff: 'medium',
    },
    {
      q: 'If the speed of an object is tripled, its kinetic energy increases by a factor of:',
      options: ['A. 3', 'B. 6', 'C. 9', 'D. 12'],
      answer: 'C. 9',
      diff: 'easy',
    },
    {
      q: 'Negative work done on an object causes its kinetic energy to:',
      options: ['A. Increase', 'B. Decrease', 'C. Remain constant', 'D. Become negative'],
      answer: 'B. Decrease',
      diff: 'easy',
    },
    {
      q: 'A ball is thrown upward. Work done by gravity during ascent is:',
      options: ['A. Positive', 'B. Negative', 'C. Zero', 'D. Variable'],
      answer: 'B. Negative',
      diff: 'easy',
    },
    {
      q: 'The integral ∫ x² dx from 0 to 1 equals:',
      options: ['A. 1/3', 'B. 1/2', 'C. 1', 'D. 2'],
      answer: 'A. 1/3',
      diff: 'medium',
    },
    {
      q: 'Which of the following is NOT a form of energy?',
      options: ['A. Thermal', 'B. Chemical', 'C. Momentum', 'D. Nuclear'],
      answer: 'C. Momentum',
      diff: 'easy',
    },
    {
      q: 'A 10 kg object has KE of 500 J. Its speed is:',
      options: ['A. 5 m/s', 'B. 10 m/s', 'C. 50 m/s', 'D. 100 m/s'],
      answer: 'B. 10 m/s',
      diff: 'medium',
    },
    {
      q: 'A force F = 3x² (N) acts on an object from x=0 to x=2 m. Work done is:',
      options: ['A. 8 J', 'B. 6 J', 'C. 12 J', 'D. 24 J'],
      answer: 'A. 8 J',
      diff: 'hard',
    }
  ]
},


// lecture 8 //

  8: {
  title: 'Conservation of Energy (PHY101 Lecture 8)',
  summary: `**Key Topics Covered:**
- Potential energy (gravitational and elastic)
- Gravitational potential energy: PE = mgh
- Elastic potential energy: PE = ½ kx²
- Conservation of mechanical energy (no friction): KE + PE = constant
- Work-energy principle in different frames of reference
- Conservative forces (gravity, spring) vs non-conservative forces (friction, air resistance)
- Relationship between force and potential energy: F = –dV/dx
- Examples: ball thrown upward, mass on spring, roller coaster, inclined plane with spring, projectile motion

---

**Simple Understanding:**

**Potential Energy (PE):**
👉 Energy stored due to position or configuration.
👉 Can be converted to kinetic energy and vice versa.
👉 SI unit: Joule (J).

**Gravitational Potential Energy:**
👉 PE = m g h
👉 m = mass (kg), g = 9.8 m/s², h = height above reference level.
👉 Only changes in PE matter (reference level can be chosen arbitrarily).
👉 Work done against gravity = increase in PE.

**Elastic Potential Energy (Spring):**
👉 PE = ½ k x²
👉 k = spring constant (N/m), x = displacement from equilibrium.
👉 Stored energy when spring is stretched or compressed.

**Conservation of Mechanical Energy:**
👉 If no friction or other non-conservative forces:
👉 KEᵢ + PEᵢ = KE_f + PE_f
👉 Total mechanical energy is constant.

**Conservative Forces:**
👉 Work done independent of path (depends only on start and end points).
👉 Examples: gravity, spring force, electrostatic force.
👉 Potential energy CAN be defined for conservative forces.
👉 F = – dV/dx (force is negative derivative of potential energy).

**Non-Conservative Forces:**
👉 Work done depends on path.
👉 Examples: friction, air resistance, drag.
👉 Potential energy CANNOT be defined for non-conservative forces.

**Key Observations:**
- Work and kinetic energy values depend on reference frame (but physics laws are consistent).
- In the absence of friction, total mechanical energy is conserved.
- PE is stored in the field (e.g., gravitational field of Earth + object).

---

**Important Examples:**

**Example 1:** Ball thrown upward at speed v₀ – maximum height h = v₀²/(2g).

**Example 2:** Mass on spring (no friction) – velocity at release: v = x√(k/m).

**Example 3:** Roller coaster – speed at different heights using conservation of energy.

**Example 4:** Mass dropped onto spring – compression x found from mg(h+x) = ½ kx².

**Example 5:** Inclined plane with spring – use energy conservation with mg sinθ component.

**Example 6:** Projectile – maximum height h = (v₀² sin²θ)/(2g).

**Example 7:** Potential function V(x) = –A/x⁶ + B/x¹² (Lennard-Jones type) – find equilibrium.

---

**Important Vocabulary:**
- Potential energy = stored energy due to position/configuration
- Gravitational potential energy = mgh
- Elastic potential energy = ½ kx²
- Conservation of energy = total energy remains constant
- Conservative force = path-independent work
- Non-conservative force = path-dependent work
- Mechanical energy = KE + PE
- Spring constant = stiffness of spring (k)
- Reference level = zero point for measuring PE

---

**Quick Revision Points:**
- PE = mgh (gravitational)
- PE = ½ kx² (elastic)
- Conservation: KEᵢ + PEᵢ = KE_f + PE_f (no friction)
- Work-energy theorem: W_net = ΔKE
- Conservative force: F = –dV/dx
- Gravity and springs are conservative.
- Friction is non-conservative.
- PE depends on reference frame (but changes in PE are meaningful).
- Energy cannot be created or destroyed, only transformed.`,

  questions: [
    {
      q: 'Gravitational potential energy is given by:',
      options: ['A. mgh', 'B. ½ mv²', 'C. ½ kx²', 'D. Fd cosθ'],
      answer: 'A. mgh',
      diff: 'easy',
    },
    {
      q: 'Elastic potential energy stored in a spring is:',
      options: ['A. mgh', 'B. ½ mv²', 'C. ½ kx²', 'D. kx'],
      answer: 'C. ½ kx²',
      diff: 'easy',
    },
    {
      q: 'The SI unit of potential energy is:',
      options: ['A. Newton', 'B. Watt', 'C. Joule', 'D. Pascal'],
      answer: 'C. Joule',
      diff: 'easy',
    },
    {
      q: 'A 2 kg mass is lifted to a height of 5 m. Its gravitational potential energy (g=10 m/s²) is:',
      options: ['A. 10 J', 'B. 50 J', 'C. 100 J', 'D. 20 J'],
      answer: 'C. 100 J',
      diff: 'easy',
    },
    {
      q: 'A spring with k = 200 N/m is stretched by 0.1 m. The elastic potential energy stored is:',
      options: ['A. 1 J', 'B. 2 J', 'C. 10 J', 'D. 20 J'],
      answer: 'A. 1 J',
      diff: 'easy',
    },
    {
      q: 'The law of conservation of mechanical energy states that in the absence of non-conservative forces:',
      options: ['A. KE is constant', 'B. PE is constant', 'C. KE + PE is constant', 'D. KE – PE is constant'],
      answer: 'C. KE + PE is constant',
      diff: 'easy',
    },
    {
      q: 'A ball is thrown upward with speed 10 m/s. Maximum height reached (g=10 m/s²) is:',
      options: ['A. 5 m', 'B. 10 m', 'C. 20 m', 'D. 0.5 m'],
      answer: 'A. 5 m',
      diff: 'easy',
    },
    {
      q: 'A mass on a spring is pulled and released. At maximum compression, the KE is:',
      options: ['A. Maximum', 'B. Zero', 'C. Equal to PE', 'D. Negative'],
      answer: 'B. Zero',
      diff: 'easy',
    },
    {
      q: 'For a conservative force, the work done:',
      options: ['A. Depends on path', 'B. Is independent of path', 'C. Is always zero', 'D. Depends only on time'],
      answer: 'B. Is independent of path',
      diff: 'easy',
    },
    {
      q: 'Which of the following is a conservative force?',
      options: ['A. Friction', 'B. Air resistance', 'C. Gravity', 'D. Viscous drag'],
      answer: 'C. Gravity',
      diff: 'easy',
    },
    {
      q: 'Which of the following is a non-conservative force?',
      options: ['A. Spring force', 'B. Gravitational force', 'C. Frictional force', 'D. Electrostatic force'],
      answer: 'C. Frictional force',
      diff: 'easy',
    },
    {
      q: 'Potential energy can be defined for:',
      options: ['A. Conservative forces only', 'B. Non-conservative forces only', 'C. Both conservative and non-conservative', 'D. Neither'],
      answer: 'A. Conservative forces only',
      diff: 'easy',
    },
    {
      q: 'The relationship between conservative force and potential energy is:',
      options: ['A. F = dV/dx', 'B. F = –dV/dx', 'C. F = V', 'D. F = –V'],
      answer: 'B. F = –dV/dx',
      diff: 'medium',
    },
    {
      q: 'If the potential energy function is V(x) = ½ kx², the force is:',
      options: ['A. F = kx', 'B. F = –kx', 'C. F = ½ kx²', 'D. F = 0'],
      answer: 'B. F = –kx',
      diff: 'medium',
    },
    {
      q: 'A roller coaster car starts from rest at height H. Its speed at the bottom (no friction) is:',
      options: ['A. √(2gH)', 'B. √(gH)', 'C. 2gH', 'D. gH'],
      answer: 'A. √(2gH)',
      diff: 'easy',
    },
    {
      q: 'A 0.5 kg ball is dropped from height 20 m. Its speed just before hitting ground (g=10 m/s²) is:',
      options: ['A. 10 m/s', 'B. 20 m/s', 'C. 30 m/s', 'D. 40 m/s'],
      answer: 'B. 20 m/s',
      diff: 'medium',
    },
    {
      q: 'A mass m is attached to a spring of constant k. If compressed by x and released, maximum speed is:',
      options: ['A. x√(k/m)', 'B. x√(m/k)', 'C. kx/m', 'D. √(kx/m)'],
      answer: 'A. x√(k/m)',
      diff: 'medium',
    },
    {
      q: 'A projectile is launched with speed v₀ at angle θ. Maximum height (ignoring air resistance) is:',
      options: ['A. (v₀² sin²θ)/(2g)', 'B. (v₀² cos²θ)/(2g)', 'C. (v₀² sin2θ)/g', 'D. v₀²/g'],
      answer: 'A. (v₀² sin²θ)/(2g)',
      diff: 'medium',
    },
    {
      q: 'For a conservative force, the work done from A to B:',
      options: ['A. Equals the negative change in potential energy', 'B. Equals the change in kinetic energy only', 'C. Depends on the path', 'D. Is always zero'],
      answer: 'A. Equals the negative change in potential energy',
      diff: 'medium',
    },
    {
      q: 'A block slides down a frictionless incline of height h. Its speed at the bottom is:',
      options: ['A. √(2gh)', 'B. √(gh)', 'C. 2gh', 'D. Depends on incline angle'],
      answer: 'A. √(2gh)',
      diff: 'easy',
    },
    {
      q: 'In the presence of friction, total mechanical energy:',
      options: ['A. Increases', 'B. Decreases', 'C. Remains constant', 'D. Is zero'],
      answer: 'B. Decreases',
      diff: 'easy',
    },
    {
      q: 'A mass m falls from height h onto a spring (constant k). The maximum compression x satisfies:',
      options: ['A. mgx = ½ kx²', 'B. mg(h+x) = ½ kx²', 'C. mgh = ½ kx²', 'D. mgx = kh'],
      answer: 'B. mg(h+x) = ½ kx²',
      diff: 'hard',
    },
    {
      q: 'If potential energy function V(x) is constant, then the force is:',
      options: ['A. Zero', 'B. Constant non-zero', 'C. Infinite', 'D. Depends on x'],
      answer: 'A. Zero',
      diff: 'medium',
    },
    {
      q: 'The derivative of potential energy with respect to position gives:',
      options: ['A. Negative of force', 'B. Force', 'C. Kinetic energy', 'D. Power'],
      answer: 'A. Negative of force',
      diff: 'medium',
    },
    {
      q: 'A spring is stretched by 0.2 m storing 4 J of energy. The spring constant k is:',
      options: ['A. 100 N/m', 'B. 200 N/m', 'C. 400 N/m', 'D. 50 N/m'],
      answer: 'B. 200 N/m',
      diff: 'medium',
    },
    {
      q: 'A 10 kg mass is lifted 2 m above ground. Its PE relative to ground is (g=10 m/s²):',
      options: ['A. 20 J', 'B. 50 J', 'C. 200 J', 'D. 100 J'],
      answer: 'C. 200 J',
      diff: 'easy',
    },
    {
      q: 'Two masses m and 2m are dropped from same height. Neglecting air resistance, they hit the ground with speeds:',
      options: ['A. Same', 'B. m faster', 'C. 2m faster', 'D. Depends on shape'],
      answer: 'A. Same',
      diff: 'easy',
    },
    {
      q: 'Potential energy is stored in:',
      options: ['A. The object alone', 'B. The Earth alone', 'C. The gravitational field of the system', 'D. The kinetic energy'],
      answer: 'C. The gravitational field of the system',
      diff: 'hard',
    },
    {
      q: 'A ball is thrown straight up. At the top of its path, its:',
      options: ['A. KE is maximum, PE is minimum', 'B. KE is zero, PE is maximum', 'C. KE = PE', 'D. Both KE and PE are zero'],
      answer: 'B. KE is zero, PE is maximum',
      diff: 'easy',
    },
    {
      q: 'If a non-conservative force does negative work on a system, the total mechanical energy:',
      options: ['A. Increases', 'B. Decreases', 'C. Remains constant', 'D. Becomes zero'],
      answer: 'B. Decreases',
      diff: 'medium',
    }
  ]
},



// lecture 9 //


  9: {
  title: 'Momentum, Impulse, and Conservation of Momentum (PHY101 Lecture 9)',
  summary: `**Key Topics Covered:**
- Definition of momentum: p = mv (vector quantity)
- Newton's Second Law in terms of momentum: F = dp/dt
- Conservation of linear momentum (when net external force = 0)
- Applications: collisions, explosions, rockets, gun recoil
- Center of mass remains at rest in isolated systems
- Impulse: I = ∫ F dt = Δp (area under F-t curve)
- Impulse-momentum theorem: change in momentum equals impulse

---

**Simple Understanding:**

**Momentum (p):**
👉 Quantity of motion: p = m v
👉 Vector: same direction as velocity.
👉 Units: kg·m/s. Dimensions: MLT⁻¹.

**Newton’s 2nd Law (momentum form):**
👉 F_net = dp/dt (rate of change of momentum).
👉 For constant mass: F = m dv/dt = m a (same as before).

**Conservation of Linear Momentum:**
👉 If net external force = 0, then total momentum is constant.
👉 P_initial = P_final
👉 For an isolated system (no external forces), momentum is conserved regardless of internal forces.

**Collisions:**
👉 Two objects collide: m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂

**Explosions:**
👉 Initially at rest: total momentum = 0.
👉 After explosion: m₁v₁ + m₂v₂ = 0 → v₂ = – (m₁/m₂) v₁ (fragments move in opposite directions).

**Rocket Propulsion:**
👉 Rocket pushes exhaust gases backward; gases push rocket forward.
👉 Conservation of momentum: p_gas + p_rocket = 0.

**Gun Recoil:**
👉 Bullet moves forward, gun moves backward with equal and opposite momentum.

**Impulse (I):**
👉 Force applied over time: I = ∫ F dt = Δp
👉 Area under F-t graph = impulse.
👉 For constant force: I = F_avg × Δt.
👉 Same impulse can be achieved with small force over long time OR large force over short time.

**Practical implications:**
- Bending knees when landing increases Δt → reduces force.
- Catching a ball with hands moving backward increases Δt → reduces force.
- Dampers on railway carriages increase collision time → reduce impact force.

---

**Important Vocabulary:**
- Momentum = mass × velocity (p = mv)
- Conservation of momentum = total momentum constant if no external forces
- Isolated system = no net external force
- Impulse = change in momentum = ∫ F dt
- Recoil = backward motion of gun when fired
- Center of mass = average position of mass in a system

---

**Quick Revision Points:**
- p = mv, vector quantity.
- F_net = dp/dt.
- If ΣF_ext = 0, then P_total = constant.
- Collisions: m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂.
- Explosion from rest: m₁v₁ + m₂v₂ = 0.
- Rocket: thrust from exhaust gases.
- Impulse = change in momentum = F_avg × Δt.
- Larger impact time → smaller force for same impulse.
- Area under F-t curve = impulse.`,

  questions: [
    {
      q: 'Momentum is defined as:',
      options: ['A. mass × acceleration', 'B. mass × velocity', 'C. force × time', 'D. work / time'],
      answer: 'B. mass × velocity',
      diff: 'easy',
    },
    {
      q: 'The SI unit of momentum is:',
      options: ['A. kg·m/s²', 'B. kg·m/s', 'C. N·m', 'D. J/s'],
      answer: 'B. kg·m/s',
      diff: 'easy',
    },
    {
      q: 'Momentum is a:',
      options: ['A. Scalar quantity', 'B. Vector quantity', 'C. Dimensionless quantity', 'D. Unitless quantity'],
      answer: 'B. Vector quantity',
      diff: 'easy',
    },
    {
      q: 'Newton’s second law in terms of momentum states:',
      options: ['A. F = ma', 'B. F = dp/dt', 'C. F = m dv/dt', 'D. All of the above'],
      answer: 'D. All of the above',
      diff: 'easy',
    },
    {
      q: 'The dimensions of momentum are:',
      options: ['A. MLT⁻¹', 'B. MLT⁻²', 'C. ML²T⁻¹', 'D. MLT'],
      answer: 'A. MLT⁻¹',
      diff: 'medium',
    },
    {
      q: 'Conservation of linear momentum holds when:',
      options: ['A. No external forces act', 'B. External forces are balanced', 'C. Net external force is zero', 'D. All of the above'],
      answer: 'D. All of the above',
      diff: 'easy',
    },
    {
      q: 'A bomb at rest explodes into two fragments. The total momentum after explosion is:',
      options: ['A. Zero', 'B. Non-zero', 'C. Equal to mass times velocity of first fragment', 'D. Cannot be determined'],
      answer: 'A. Zero',
      diff: 'easy',
    },
    {
      q: 'A 4 kg fragment flies at 12 m/s. The other fragment has mass 6 kg. Its velocity (magnitude) is:',
      options: ['A. 8 m/s', 'B. 6 m/s', 'C. 12 m/s', 'D. 4 m/s'],
      answer: 'A. 8 m/s',
      diff: 'medium',
    },
    {
      q: 'A rocket moves forward because:',
      options: ['A. Exhaust gases push on the rocket', 'B. The rocket pushes exhaust gases backward', 'C. Both A and B (action-reaction)', 'D. Gravity pulls it forward'],
      answer: 'C. Both A and B (action-reaction)',
      diff: 'easy',
    },
    {
      q: 'When a gun is fired, the bullet and the gun have:',
      options: ['A. Equal speeds', 'B. Equal kinetic energies', 'C. Equal and opposite momenta', 'D. Equal accelerations'],
      answer: 'C. Equal and opposite momenta',
      diff: 'easy',
    },
    {
      q: 'A 1300 kg cannon fires a 72 kg ball at 55 m/s. The recoil speed of the cannon is approximately:',
      options: ['A. 55 m/s', 'B. 3.0 m/s', 'C. 0.3 m/s', 'D. 30 m/s'],
      answer: 'B. 3.0 m/s',
      diff: 'medium',
    },
    {
      q: 'Impulse is defined as:',
      options: ['A. Force × displacement', 'B. Change in momentum', 'C. ∫ F dt', 'D. Both B and C'],
      answer: 'D. Both B and C',
      diff: 'easy',
    },
    {
      q: 'The area under a force-time graph represents:',
      options: ['A. Work', 'B. Power', 'C. Impulse', 'D. Momentum'],
      answer: 'C. Impulse',
      diff: 'easy',
    },
    {
      q: 'If the same impulse is applied to an object, a smaller force results from:',
      options: ['A. Shorter time', 'B. Longer time', 'C. Zero time', 'D. No change in time'],
      answer: 'B. Longer time',
      diff: 'easy',
    },
    {
      q: 'Cricket fielders move their hands backward when catching a ball to:',
      options: ['A. Increase impulse', 'B. Decrease impulse', 'C. Increase impact time and decrease force', 'D. Decrease impact time'],
      answer: 'C. Increase impact time and decrease force',
      diff: 'easy',
    },
    {
      q: 'Bending your knees when landing from a jump:',
      options: ['A. Increases the force on your legs', 'B. Decreases the impulse', 'C. Increases the time of impact, reducing force', 'D. Has no effect'],
      answer: 'C. Increases the time of impact, reducing force',
      diff: 'easy',
    },
    {
      q: 'Two objects collide elastically on a frictionless surface. Which quantity is always conserved?',
      options: ['A. Kinetic energy only', 'B. Momentum only', 'C. Both momentum and kinetic energy', 'D. Neither'],
      answer: 'C. Both momentum and kinetic energy',
      diff: 'medium',
    },
    {
      q: 'In an inelastic collision, which is conserved?',
      options: ['A. Momentum only', 'B. Kinetic energy only', 'C. Both momentum and kinetic energy', 'D. Neither'],
      answer: 'A. Momentum only',
      diff: 'easy',
    },
    {
      q: 'A shell of mass M moving at speed v explodes into two equal pieces. One piece retraces its path. The velocity of the other piece is:',
      options: ['A. v', 'B. 2v', 'C. 3v', 'D. 4v'],
      answer: 'C. 3v',
      diff: 'hard',
    },
    {
      q: 'A stream of N bullets each mass m with speed v hits a block of mass M at rest (no friction). The block’s final speed after absorbing all bullets is:',
      options: ['A. (Nm v)/(M + Nm)', 'B. (M v)/(M + Nm)', 'C. (Nm v)/M', 'D. v'],
      answer: 'A. (Nm v)/(M + Nm)',
      diff: 'hard',
    },
    {
      q: 'A 5 kg object moving at 2 m/s collides with a 3 kg object at rest. After collision, they stick together. Their common speed is:',
      options: ['A. 2.5 m/s', 'B. 1.25 m/s', 'C. 0.8 m/s', 'D. 1.0 m/s'],
      answer: 'B. 1.25 m/s',
      diff: 'medium',
    },
    {
      q: 'A 0.5 kg ball hits a wall at 10 m/s and rebounds at 8 m/s. The change in momentum is:',
      options: ['A. 1 kg·m/s', 'B. 4 kg·m/s', 'C. 9 kg·m/s', 'D. 0.5 kg·m/s'],
      answer: 'C. 9 kg·m/s',
      diff: 'medium',
    },
    {
      q: 'A force of 10 N acts on a 2 kg object for 3 seconds. The impulse is:',
      options: ['A. 10 N·s', 'B. 20 N·s', 'C. 30 N·s', 'D. 5 N·s'],
      answer: 'C. 30 N·s',
      diff: 'easy',
    },
    {
      q: 'A 1000 kg car moving at 20 m/s stops in 5 seconds. The average braking force is:',
      options: ['A. 2000 N', 'B. 4000 N', 'C. 5000 N', 'D. 10000 N'],
      answer: 'B. 4000 N',
      diff: 'medium',
    },
    {
      q: 'If the time of impact is doubled while impulse remains the same, the average force is:',
      options: ['A. Doubled', 'B. Halved', 'C. Unchanged', 'D. Quadrupled'],
      answer: 'B. Halved',
      diff: 'easy',
    },
    {
      q: 'The center of mass of an isolated system:',
      options: ['A. Can accelerate', 'B. Moves with constant velocity', 'C. Is always at rest', 'D. Depends on internal forces'],
      answer: 'B. Moves with constant velocity',
      diff: 'medium',
    },
    {
      q: 'A 60 kg person jumps from a boat of mass 120 kg. If the person moves at 4 m/s relative to water, the boat moves at:',
      options: ['A. 2 m/s opposite direction', 'B. 4 m/s opposite direction', 'C. 8 m/s same direction', 'D. 0.5 m/s opposite direction'],
      answer: 'A. 2 m/s opposite direction',
      diff: 'hard',
    },
    {
      q: 'Which of the following is NOT a vector quantity?',
      options: ['A. Momentum', 'B. Impulse', 'C. Kinetic energy', 'D. Force'],
      answer: 'C. Kinetic energy',
      diff: 'easy',
    },
    {
      q: 'A bullet of mass m is fired from a gun of mass M with muzzle speed u relative to the gun. The actual speed of the bullet relative to ground is:',
      options: ['A. u', 'B. (M/(M+m)) u', 'C. (M/(M-m)) u', 'D. (m/(M+m)) u'],
      answer: 'B. (M/(M+m)) u',
      diff: 'hard',
    },
    {
      q: 'Impulse has the same units as:',
      options: ['A. Work', 'B. Force', 'C. Momentum', 'D. Power'],
      answer: 'C. Momentum',
      diff: 'easy',
    }
  ]
},


// lecture 10//

  10: {
  title: 'Collisions: Elastic and Inelastic (PHY101 Lecture 10)',
  summary: `**Key Topics Covered:**
- Elastic collisions in one dimension (momentum and kinetic energy conserved)
- Inelastic collisions (momentum conserved, kinetic energy not conserved)
- Completely inelastic collisions (objects stick together)
- Final velocities for elastic collisions (derivation and special cases)
- Relative speed before and after elastic collision: v₁ - v₂ = -(u₁ - u₂)
- Examples: neutron slowing, ballistic pendulum, two-dimensional collisions

---

**Simple Understanding:**

**Elastic Collision:**
👉 Both momentum AND kinetic energy are conserved.
👉 For two bodies: m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂ and ½m₁u₁² + ½m₂u₂² = ½m₁v₁² + ½m₂v₂².
👉 Relative speed after collision is opposite to relative speed before: v₁ – v₂ = –(u₁ – u₂).

**Final velocities (elastic, 1D):**
👉 v₁ = (m₁–m₂)/(m₁+m₂) u₁ + (2m₂)/(m₁+m₂) u₂
👉 v₂ = (2m₁)/(m₁+m₂) u₁ + (m₂–m₁)/(m₁+m₂) u₂

**Special cases (u₂ = 0, target at rest):**
- m₁ = m₂: v₁ = 0, v₂ = u₁ (velocities exchange)
- m₁ << m₂ (light hitting heavy): v₁ ≈ –u₁ (bounces back), v₂ ≈ 0
- m₁ >> m₂ (heavy hitting light): v₁ ≈ u₁, v₂ ≈ 2u₁ (light object flung forward)

**Inelastic Collision:**
👉 Momentum conserved, kinetic energy NOT conserved (converted to heat, sound, deformation).
👉 Completely inelastic: objects stick together after collision.
👉 For two masses sticking: m₁u₁ + m₂u₂ = (m₁+m₂)V.

**Ballistic Pendulum:**
👉 Bullet embeds in block; block swings to height y.
👉 Use momentum conservation for collision: mv = (m+M)V.
👉 Use energy conservation for swing: ½(m+M)V² = (m+M)gy → V = √(2gy).
👉 Then v = (m+M)/m √(2gy).

**Two-Dimensional Collisions:**
👉 Momentum conserved separately in x and y directions.
👉 Often have more unknowns than equations (need additional info).`,

  questions: [
    {
      q: 'In an elastic collision, which quantities are conserved?',
      options: ['A. Momentum only', 'B. Kinetic energy only', 'C. Both momentum and kinetic energy', 'D. Neither'],
      answer: 'C. Both momentum and kinetic energy',
      diff: 'easy',
    },
    {
      q: 'In an inelastic collision, which quantity is always conserved?',
      options: ['A. Kinetic energy', 'B. Momentum', 'C. Both momentum and kinetic energy', 'D. Neither'],
      answer: 'B. Momentum',
      diff: 'easy',
    },
    {
      q: 'In a completely inelastic collision, the objects:',
      options: ['A. Bounce apart with same speed', 'B. Stick together', 'C. Exchange velocities', 'D. Move in opposite directions'],
      answer: 'B. Stick together',
      diff: 'easy',
    },
    {
      q: 'For a one-dimensional elastic collision, the relative speed after collision is:',
      options: ['A. Same as before', 'B. Zero', 'C. Opposite sign but same magnitude as before', 'D. Double the before speed'],
      answer: 'C. Opposite sign but same magnitude as before',
      diff: 'medium',
    },
    {
      q: 'Two equal masses undergo an elastic collision. One is initially at rest. After collision:',
      options: ['A. First mass stops, second moves with initial speed of first', 'B. Both move with half the initial speed', 'C. Both move with same speed as first', 'D. First rebounds, second remains at rest'],
      answer: 'A. First mass stops, second moves with initial speed of first',
      diff: 'easy',
    },
    {
      q: 'A light ball hits a heavy stationary target elastically. The light ball will:',
      options: ['A. Stop', 'B. Continue forward with reduced speed', 'C. Bounce back with approximately same speed', 'D. Stick to the target'],
      answer: 'C. Bounce back with approximately same speed',
      diff: 'medium',
    },
    {
      q: 'A heavy moving object hits a light stationary object elastically. The light object will:',
      options: ['A. Move with about twice the speed of the heavy object', 'B. Remain at rest', 'C. Move with same speed as heavy object', 'D. Move backward'],
      answer: 'A. Move with about twice the speed of the heavy object',
      diff: 'medium',
    },
    {
      q: 'In a ballistic pendulum, a bullet embeds in a block. Which principle is used for the collision?',
      options: ['A. Conservation of energy only', 'B. Conservation of momentum only', 'C. Both momentum and energy', 'D. Neither'],
      answer: 'B. Conservation of momentum only',
      diff: 'easy',
    },
    {
      q: 'After the bullet embeds, the block swings upward. For that swing, we use:',
      options: ['A. Conservation of momentum', 'B. Conservation of mechanical energy', 'C. Both momentum and energy', 'D. Work-energy theorem with friction'],
      answer: 'B. Conservation of mechanical energy',
      diff: 'easy',
    },
    {
      q: 'In a ballistic pendulum, if the block rises to height y, the speed V of block+bullet just after collision is:',
      options: ['A. √(2gy)', 'B. 2√(gy)', 'C. √(gy)', 'D. gy/2'],
      answer: 'A. √(2gy)',
      diff: 'medium',
    },
    {
      q: 'A neutron (mass m) collides elastically with a stationary nucleus of mass M. The fractional decrease in neutron’s KE is:',
      options: ['A. (M-m)²/(M+m)²', 'B. 4mM/(M+m)²', 'C. (M+m)²/(M-m)²', 'D. 1 - (m/M)²'],
      answer: 'B. 4mM/(M+m)²',
      diff: 'hard',
    },
    {
      q: 'Two objects of masses 2 kg and 3 kg move toward each other with speeds 4 m/s and 2 m/s respectively. Their total momentum magnitude is:',
      options: ['A. 2 kg·m/s', 'B. 14 kg·m/s', 'C. 8 kg·m/s', 'D. 6 kg·m/s'],
      answer: 'A. 2 kg·m/s',
      diff: 'medium',
    },
    {
      q: 'A 5 g bullet is fired into a 2 kg block. The block rises 0.1 m. The speed of bullet (g=10 m/s²) is approximately:',
      options: ['A. 200 m/s', 'B. 400 m/s', 'C. 800 m/s', 'D. 100 m/s'],
      answer: 'B. 400 m/s',
      diff: 'hard',
    },
    {
      q: 'In a two-dimensional elastic collision, the number of unknowns is typically:',
      options: ['A. 2', 'B. 3', 'C. 4', 'D. 6'],
      answer: 'C. 4',
      diff: 'hard',
    },
    {
      q: 'A car of mass 1000 kg going north at 15 m/s collides with a 2000 kg car going east at 10 m/s. They stick together. The magnitude of final momentum is:',
      options: ['A. 5000 kg·m/s', 'B. 25000 kg·m/s', 'C. 35000 kg·m/s', 'D. 15000 kg·m/s'],
      answer: 'B. 25000 kg·m/s',
      diff: 'medium',
    },
    {
      q: 'For the previous problem, the direction of final velocity is approximately:',
      options: ['A. 37° east of north', 'B. 37° north of east', 'C. 53° east of north', 'D. 45°'],
      answer: 'A. 37° east of north',
      diff: 'medium',
    },
    {
      q: 'In an elastic collision, the coefficient of restitution is:',
      options: ['A. 0', 'B. 0.5', 'C. 1', 'D. 2'],
      answer: 'C. 1',
      diff: 'easy',
    },
    {
      q: 'In a completely inelastic collision, the coefficient of restitution is:',
      options: ['A. 0', 'B. 0.5', 'C. 1', 'D. -1'],
      answer: 'A. 0',
      diff: 'easy',
    },
    {
      q: 'A 10 kg mass moving at 5 m/s collides elastically with a 5 kg mass at rest. The speed of the 5 kg mass after collision is:',
      options: ['A. 10/3 m/s', 'B. 20/3 m/s', 'C. 5 m/s', 'D. 10 m/s'],
      answer: 'B. 20/3 m/s',
      diff: 'hard',
    },
    {
      q: 'Which is NOT an example of an inelastic collision?',
      options: ['A. Two cars crumpling together', 'B. A ball of clay sticking to a wall', 'C. Two billiard balls colliding', 'D. A bullet embedding in wood'],
      answer: 'C. Two billiard balls colliding',
      diff: 'easy',
    },
    {
      q: 'Momentum is conserved in collisions:',
      options: ['A. Only if no external forces act', 'B. Only in elastic collisions', 'C. Always, even with external forces', 'D. Only in one dimension'],
      answer: 'A. Only if no external forces act',
      diff: 'easy',
    },
    {
      q: 'The discovery of the neutrino was based on:',
      options: ['A. Conservation of energy', 'B. Conservation of momentum', 'C. Conservation of mass', 'D. Both A and B'],
      answer: 'D. Both A and B',
      diff: 'medium',
    },
    {
      q: 'In a head-on elastic collision with m₁ = m₂ and u₂ = 0, the velocities after collision are:',
      options: ['A. v₁ = u₁, v₂ = 0', 'B. v₁ = 0, v₂ = u₁', 'C. v₁ = u₁/2, v₂ = u₁/2', 'D. v₁ = -u₁, v₂ = u₁'],
      answer: 'B. v₁ = 0, v₂ = u₁',
      diff: 'easy',
    },
    {
      q: 'A 1 kg ball moving at 3 m/s collides elastically with a stationary 2 kg ball. The velocity of the 1 kg ball after collision is:',
      options: ['A. 1 m/s', 'B. -1 m/s', 'C. 2 m/s', 'D. -2 m/s'],
      answer: 'B. -1 m/s',
      diff: 'hard',
    },
    {
      q: 'For the previous problem, the velocity of the 2 kg ball after collision is:',
      options: ['A. 1 m/s', 'B. 2 m/s', 'C. 3 m/s', 'D. 4 m/s'],
      answer: 'B. 2 m/s',
      diff: 'hard',
    },
    {
      q: 'In a completely inelastic collision of two objects, the maximum kinetic energy loss occurs when:',
      options: ['A. Masses are equal', 'B. One mass is much larger', 'C. They move in opposite directions with equal momentum', 'D. Both at rest'],
      answer: 'C. They move in opposite directions with equal momentum',
      diff: 'hard',
    },
    {
      q: 'A 4 kg mass moving at 6 m/s collides inelastically with a 2 kg mass at rest and sticks. The common speed is:',
      options: ['A. 2 m/s', 'B. 3 m/s', 'C. 4 m/s', 'D. 6 m/s'],
      answer: 'C. 4 m/s',
      diff: 'easy',
    },
    {
      q: 'The kinetic energy lost in the previous problem is:',
      options: ['A. 24 J', 'B. 48 J', 'C. 12 J', 'D. 36 J'],
      answer: 'A. 24 J',
      diff: 'medium',
    }
  ]
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


//L 2 //

   2: {
  title: 'Breadth First Learning & Introduction to Computer Science Topics (CS101 Lecture 2)',
  summary: `**Key Topics Covered:**
- Breadth First Learning vs Depth First Learning in CS education
- Overview of all major CS courses and their importance
- Search engine usage techniques
- History of computing
- Data storage and data manipulation
- Operating Systems
- Networking and the Internet
- Algorithms (definition and importance)
- Programming languages (C++ basics)
- Software Engineering (SDLC phases)
- Data Abstraction (arrays, stacks, queues, trees)
- Database Systems (DBMS)
- Artificial Intelligence (AI)
- Impact of CS on society
- Content filtering, spam, international laws
- Word processing (Microsoft Word)
- Presentations (Microsoft PowerPoint)
- Spreadsheets (Microsoft Excel)
- Database MS Access
- Web page development (Dreamweaver)

---

**Simple Understanding:**

**Breadth First Learning:**
👉 A learning strategy where you first get a basic introduction to ALL courses in a degree program.
👉 Helps you understand the big picture before diving deep into any single subject.
👉 Opposite of Depth First Learning (studying one course in complete detail before moving to the next).
👉 CS101 follows Breadth First Learning.

**Why this approach?**
👉 You will learn what you will study throughout your CS degree.
👉 Understand why each course is important.
👉 Clarify the bigger picture of Computer Science.

---

**Topics Covered in CS101:**

**1. Search Engine Usage Techniques:**
👉 How to effectively search the internet using popular search engines (Google, Bing, etc.).

**2. History of Computing:**
👉 How today's computers evolved from basic ideas.

**3. Data Storage:**
👉 How data entered into a computer is stored in hardware (memory, hard drives).

**4. Data Manipulation:**
👉 How arithmetic operations (+, -, ×, ÷) and advanced operations are performed by computers.

**5. Operating System:**
👉 The overall in-charge of the computer system (Windows, Linux, macOS).

**6. Networking and the Internet:**
👉 How different computers communicate over networks and the Internet.

**7. Algorithms:**
👉 A set of steps in sequence to perform a task – the foundation of CS.

**8. Programming Languages:**
👉 Tools to write algorithms as computer programs (C++ basics).

**9. Software Engineering:**
👉 Complete software development process: requirements → design → implementation → testing.

**10. Data Abstraction:**
👉 Hiding complexities to design large systems – includes arrays, stacks, queues, trees.

**11. Database Systems:**
👉 Organized storage and linking of data using DBMS (Database Management Systems).

**12. Artificial Intelligence (AI):**
👉 Building computer systems that can act intelligently (though computers are naturally "dumb").

**13. CS Impact on Society:**
👉 How computer science affects social setups, humans, and daily life.

**14. Content Filtering, Spam, International Laws:**
👉 Dealing with spam, filtering content, and laws related to data and privacy.

**15. Word Processing:**
👉 Using Microsoft Word to create editable documents.

**16. Presentations Development:**
👉 Using Microsoft PowerPoint to design and animate slides.

**17. Spreadsheet:**
👉 Using Microsoft Excel for calculations and data analysis.

**18. Database MS Access:**
👉 Implementing databases using Microsoft Access.

**19. Web Page Development:**
👉 Creating web pages easily using tools like Dreamweaver.

---

**Important Vocabulary:**
- Breadth First Learning = learning basics of many subjects first
- Depth First Learning = studying one subject in detail before moving on
- Search engine = tool to find information on the internet (Google, Bing)
- Algorithm = step-by-step procedure to solve a problem
- Operating System = software that manages computer hardware and resources
- Database = organized collection of data
- DBMS = Database Management System (e.g., MS Access, MySQL)
- Artificial Intelligence = field of CS focused on intelligent behavior in machines
- Software Engineering = disciplined approach to software development
- Data Abstraction = hiding implementation details to manage complexity
- Spreadsheet = software for tabular data and calculations (Excel)
- Word processor = software for document creation (Word)
- Presentation software = tool for slide-based presentations (PowerPoint)

---

**Quick Revision Points:**
- CS101 uses Breadth First Learning – covers all major CS topics at a basic level.
- You will understand the bigger picture of your CS degree.
- Topics range from hardware (data storage) to software (OS, applications) to advanced fields (AI).
- Algorithms are the heart of CS – step-by-step sequences.
- Programming languages turn algorithms into executable code.
- Software Engineering covers the entire development lifecycle.
- Data abstraction (arrays, stacks, queues, trees) helps manage complexity.
- Databases organize and link data; DBMS like MS Access implement them.
- AI aims to make computers intelligent.
- Practical tools: MS Word, PowerPoint, Excel, Access, Dreamweaver.`,

  questions: [
    {
      q: 'What is Breadth First Learning?',
      options: ['A. Studying one course in detail before the next', 'B. Getting a basic introduction to all courses first', 'C. Learning only programming languages', 'D. Avoiding theoretical courses'],
      answer: 'B. Getting a basic introduction to all courses first',
      diff: 'easy',
    },
    {
      q: 'Which learning strategy does CS101 follow?',
      options: ['A. Depth First Learning', 'B. Breadth First Learning', 'C. Problem-based Learning', 'D. Project-based Learning'],
      answer: 'B. Breadth First Learning',
      diff: 'easy',
    },
    {
      q: 'What is an algorithm?',
      options: ['A. A programming language', 'B. A set of steps in sequence to perform a task', 'C. A type of data storage', 'D. A network protocol'],
      answer: 'B. A set of steps in sequence to perform a task',
      diff: 'easy',
    },
    {
      q: 'Which topic covers how computers perform arithmetic operations?',
      options: ['A. Data Storage', 'B. Data Manipulation', 'C. Operating System', 'D. Networking'],
      answer: 'B. Data Manipulation',
      diff: 'easy',
    },
    {
      q: 'What is the role of an Operating System?',
      options: ['A. To store data permanently', 'B. To manage computer hardware and resources', 'C. To create presentations', 'D. To search the internet'],
      answer: 'B. To manage computer hardware and resources',
      diff: 'easy',
    },
    {
      q: 'Which course studies how different computers communicate?',
      options: ['A. Operating System', 'B. Networking and the Internet', 'C. Data Abstraction', 'D. Artificial Intelligence'],
      answer: 'B. Networking and the Internet',
      diff: 'easy',
    },
    {
      q: 'What is the main goal of Artificial Intelligence (AI)?',
      options: ['A. To store large amounts of data', 'B. To build computer systems that can act intelligently', 'C. To design web pages', 'D. To create spreadsheets'],
      answer: 'B. To build computer systems that can act intelligently',
      diff: 'easy',
    },
    {
      q: 'Software Engineering covers the complete development process including:',
      options: ['A. Only coding', 'B. Requirements, design, implementation, testing', 'C. Only testing', 'D. Only documentation'],
      answer: 'B. Requirements, design, implementation, testing',
      diff: 'easy',
    },
    {
      q: 'Which of the following is an example of Data Abstraction?',
      options: ['A. Microsoft Word', 'B. Arrays, stacks, queues, trees', 'C. Google Search', 'D. Windows OS'],
      answer: 'B. Arrays, stacks, queues, trees',
      diff: 'medium',
    },
    {
      q: 'What does DBMS stand for?',
      options: ['A. Data Basic Management System', 'B. Database Management System', 'C. Digital Binary Memory Storage', 'D. Data Backup and Management Software'],
      answer: 'B. Database Management System',
      diff: 'easy',
    },
    {
      q: 'Which tool is mentioned for word processing?',
      options: ['A. Microsoft Excel', 'B. Microsoft Word', 'C. Microsoft PowerPoint', 'D. Microsoft Access'],
      answer: 'B. Microsoft Word',
      diff: 'easy',
    },
    {
      q: 'Which software is used for creating presentations with animations?',
      options: ['A. Microsoft Word', 'B. Microsoft Excel', 'C. Microsoft PowerPoint', 'D. Microsoft Access'],
      answer: 'C. Microsoft PowerPoint',
      diff: 'easy',
    },
    {
      q: 'Which software is best suited for performing calculations on data?',
      options: ['A. Microsoft Word', 'B. Microsoft Excel', 'C. Microsoft PowerPoint', 'D. Microsoft Outlook'],
      answer: 'B. Microsoft Excel',
      diff: 'easy',
    },
    {
      q: 'Which tool is mentioned for implementing databases?',
      options: ['A. Microsoft Word', 'B. Microsoft Excel', 'C. Microsoft Access', 'D. Microsoft PowerPoint'],
      answer: 'C. Microsoft Access',
      diff: 'easy',
    },
    {
      q: 'Which software is mentioned for web page development?',
      options: ['A. Dreamweaver', 'B. Photoshop', 'C. Visual Studio', 'D. Eclipse'],
      answer: 'A. Dreamweaver',
      diff: 'easy',
    },
    {
      q: 'What will you learn in the "Search Engine Usage Techniques" topic?',
      options: ['A. How to build a search engine', 'B. How to effectively search the internet', 'C. How to store data', 'D. How to manipulate data'],
      answer: 'B. How to effectively search the internet',
      diff: 'easy',
    },
    {
      q: 'The topic "History of Computing" covers:',
      options: ['A. Future computers', 'B. How today\'s computers evolved from basic ideas', 'C. Computer programming only', 'D. Computer networks'],
      answer: 'B. How today\'s computers evolved from basic ideas',
      diff: 'easy',
    },
    {
      q: 'Which programming language is mentioned as a basic tool in this course?',
      options: ['A. Java', 'B. Python', 'C. C++', 'D. JavaScript'],
      answer: 'C. C++',
      diff: 'easy',
    },
    {
      q: 'What does "Content Filtering" deal with?',
      options: ['A. Storing data', 'B. Filtering unwanted content and spam', 'C. Creating algorithms', 'D. Designing databases'],
      answer: 'B. Filtering unwanted content and spam',
      diff: 'easy',
    },
    {
      q: 'International laws in CS are related to:',
      options: ['A. Programming languages', 'B. Data and privacy', 'C. Hardware manufacturing', 'D. Network speed'],
      answer: 'B. Data and privacy',
      diff: 'medium',
    },
    {
      q: 'The "Impact of CS on Society" topic studies:',
      options: ['A. Only positive effects', 'B. Only negative effects', 'C. How computer science affects social setups and humans', 'D. Only economic impacts'],
      answer: 'C. How computer science affects social setups and humans',
      diff: 'easy',
    },
    {
      q: 'What is the opposite of Breadth First Learning?',
      options: ['A. Horizontal Learning', 'B. Depth First Learning', 'C. Vertical Learning', 'D. Circular Learning'],
      answer: 'B. Depth First Learning',
      diff: 'easy',
    },
    {
      q: 'Why is Breadth First Learning beneficial for CS students?',
      options: ['A. It helps students know what they will learn in the whole degree program', 'B. It focuses only on programming', 'C. It avoids theoretical concepts', 'D. It is faster than depth first'],
      answer: 'A. It helps students know what they will learn in the whole degree program',
      diff: 'easy',
    },
    {
      q: 'Which topic covers "how data is stored in hardware"?',
      options: ['A. Data Manipulation', 'B. Data Storage', 'C. Operating System', 'D. Networking'],
      answer: 'B. Data Storage',
      diff: 'easy',
    },
    {
      q: 'Microsoft Excel is an example of:',
      options: ['A. Word Processor', 'B. Spreadsheet software', 'C. Presentation software', 'D. Database software'],
      answer: 'B. Spreadsheet software',
      diff: 'easy',
    }
  ]
},

  3: {
  title: 'Search Engines: Google Basics and Query Formulation (CS101 Lecture 3)',
  summary: `**Key Topics Covered:**
- What is a search engine? (Google, Yahoo, MSN)
- Google dominates the search engine market
- How to access Google: https://www.google.com/
- Query: set of words given to search engine for searching
- How Google works: finds pages containing all terms in the query
- Using microphone for voice search
- Fun feature: "Flip a Coin" on Google
- Query formulation: using correct terms for better results (e.g., "headache" not "head hurts", "rector" not "head of university")
- Capitalization: Google is case-insensitive (no difference between uppercase and lowercase)

---

**Simple Understanding:**

**What is a Search Engine?**
👉 A tool that indexes web pages and retrieves relevant pages based on your query.
👉 Examples: Google, Yahoo, MSN.
👉 Google has the largest market share for internet search.

**How to Access Google:**
👉 Type https://www.google.com/ in your web browser.

**Query:**
👉 The set of words you type to search for information.
👉 Example: "Virtual University" – Google finds pages containing those words.

**How Google Works:**
👉 Finds all web pages that contain all the terms in your query.
👉 More relevant terms = better results.

**Voice Search:**
👉 Click the microphone icon in the search box and speak your query.

**Flip a Coin:**
👉 Type "Flip a Coin" in Google – it will simulate a coin toss.

**Query Formulation (Important):**
👉 Use the correct medical/technical terms.
   - "Head hurts" → use "headache" instead.
👉 Use official titles.
   - "Head of virtual university" → use "Rector of virtual university" instead.
👉 Better queries give more relevant results.

**Capitalization:**
👉 Google is case-insensitive.
👉 "COMPUTER SCIENCE" and "computer science" give the same results.

---

**Important Vocabulary:**
- Search engine = software that searches and indexes web pages
- Query = words typed to search for information
- Case-insensitive = does not distinguish between uppercase and lowercase letters
- Index = organized collection of web page information
- Voice search = searching by speaking instead of typing

---

**Quick Revision Points:**
- Google is the most widely used search engine.
- Query formulation matters – use correct terms for better results.
- Google is case-insensitive.
- Use microphone for voice search.
- "Flip a Coin" is a fun Google feature.
- Searching "headache" gives better results than "head hurts".
- Searching "rector" is better than "head of university" for VU's head.`,

  questions: [
    {
      q: 'Which search engine has the largest market share?',
      options: ['A. Yahoo', 'B. MSN', 'C. Google', 'D. Bing'],
      answer: 'C. Google',
      diff: 'easy',
    },
    {
      q: 'What is a query in the context of search engines?',
      options: ['A. The web browser used to search', 'B. The set of words given to the search engine', 'C. The result page shown by Google', 'D. The internet connection speed'],
      answer: 'B. The set of words given to the search engine',
      diff: 'easy',
    },
    {
      q: 'How does Google find web pages for your query?',
      options: ['A. It only finds pages with the exact phrase', 'B. It finds pages containing all the terms in the query', 'C. It finds only the most visited pages', 'D. It randomly selects pages'],
      answer: 'B. It finds pages containing all the terms in the query',
      diff: 'easy',
    },
    {
      q: 'To access Google, you type in your browser:',
      options: ['A. https://www.google.com/', 'B. https://www.yahoo.com/', 'C. https://www.bing.com/', 'D. https://www.duckduckgo.com/'],
      answer: 'A. https://www.google.com/',
      diff: 'easy',
    },
    {
      q: 'Which feature in Google allows you to search by speaking?',
      options: ['A. Keyboard', 'B. Microphone', 'C. Camera', 'D. Headphones'],
      answer: 'B. Microphone',
      diff: 'easy',
    },
    {
      q: 'What happens when you type "Flip a Coin" into Google?',
      options: ['A. It shows a list of coin shops', 'B. It simulates a coin toss', 'C. It gives error', 'D. It searches for coins'],
      answer: 'B. It simulates a coin toss',
      diff: 'easy',
    },
    {
      q: 'Which query is more likely to give better medical results for head pain?',
      options: ['A. Head hurts', 'B. Headache', 'C. My head is paining', 'D. Head injury'],
      answer: 'B. Headache',
      diff: 'easy',
    },
    {
      q: 'What is the official title of the head of Virtual University mentioned in the lecture?',
      options: ['A. Head of University', 'B. Chancellor', 'C. Rector', 'D. Director'],
      answer: 'C. Rector',
      diff: 'easy',
    },
    {
      q: 'Is Google case-sensitive?',
      options: ['A. Yes, it distinguishes capital and small letters', 'B. No, it is case-insensitive', 'C. Only for the first letter', 'D. Only for numbers'],
      answer: 'B. No, it is case-insensitive',
      diff: 'easy',
    },
    {
      q: 'Searching "COMPUTER SCIENCE" and "computer science" will produce:',
      options: ['A. Different results', 'B. The same results', 'C. No results for uppercase', 'D. No results for lowercase'],
      answer: 'B. The same results',
      diff: 'easy',
    },
    {
      q: 'Which of the following is NOT a search engine?',
      options: ['A. Google', 'B. Yahoo', 'C. MSN', 'D. Microsoft Word'],
      answer: 'D. Microsoft Word',
      diff: 'easy',
    },
    {
      q: 'What should you type to find information about the head of Virtual University effectively?',
      options: ['A. Head of virtual university', 'B. Virtual university head', 'C. Rector of virtual university', 'D. Who runs VU'],
      answer: 'C. Rector of virtual university',
      diff: 'easy',
    },
    {
      q: 'The term "case-insensitive" means:',
      options: ['A. The case of the computer matters', 'B. Uppercase and lowercase are treated the same', 'C. Only uppercase is allowed', 'D. Only lowercase is allowed'],
      answer: 'B. Uppercase and lowercase are treated the same',
      diff: 'easy',
    },
    {
      q: 'What is the purpose of a search engine?',
      options: ['A. To create web pages', 'B. To index and retrieve relevant web pages based on queries', 'C. To design websites', 'D. To store offline files'],
      answer: 'B. To index and retrieve relevant web pages based on queries',
      diff: 'easy',
    },
    {
      q: 'Which of the following queries would Google treat differently?',
      options: ['A. "Airport" vs "airport"', 'B. "Headache" vs "head hurts"', 'C. "Computer" vs "COMPUTER"', 'D. "Virtual" vs "VIRTUAL"'],
      answer: 'B. "Headache" vs "head hurts"',
      diff: 'medium',
    },
    {
      q: 'The microphone option in Google search box allows:',
      options: ['A. Recording audio files', 'B. Voice search', 'C. Playing music', 'D. Calling someone'],
      answer: 'B. Voice search',
      diff: 'easy',
    }
  ]
},


// L 4//

4: {
  title: 'Searching Tricks: Weather, Calculations, Currency & Unit Conversion on Google (CS101 Lecture 4)',
  summary: `**Key Topics Covered:**
- Weather searching: add location with "Weather" (e.g., "Weather Lahore")
- Performing calculations directly on Google
  - Multiplication: 12*391
  - Subtraction: 12-5
  - Trigonometric functions: Sin 90, Tan 80
  - Complex arithmetic: 80/100*200
  - Natural language: "Subtract 10 from 30"
- Currency conversion: e.g., "100 Euros in Pakistani rupees"
- Unit conversions: "Kph in Mph", "m in cm"
- Searching famous places: "Baadshahi Mosque", "Minar e Pakistan"
- Searching sports: "Pakistan Cricket team"

---

**Simple Understanding:**

**Weather Search:**
👉 Type "Weather" followed by a city/location name.
👉 Example: "Weather Lahore" – Google shows current weather for Lahore.

**Calculations on Google:**
👉 Google has a built-in calculator.
👉 Just type any arithmetic expression.
👉 Examples:
   - 12*391 (multiplication)
   - 12-5 (subtraction)
   - Sin 90 (sine of 90 degrees)
   - Tan 80 (tangent of 80 degrees)
   - 80/100*200 (division and multiplication)
   - "Subtract 10 from 30" (natural language)

**Currency Conversion:**
👉 Type an amount, currency, and target currency.
👉 Example: "100 Euros in Pakistani rupees" – Google shows the current exchange rate.

**Unit Conversion:**
👉 Convert between different measurement units.
👉 Examples:
   - "Kph in Mph" (kilometers per hour to miles per hour)
   - "m in cm" (meters to centimeters)

**Searching Famous Places and Sports:**
👉 Type names directly: "Baadshahi Mosque", "Minar e Pakistan", "Pakistan Cricket team".

---

**Important Vocabulary:**
- Weather search = finding current weather by location
- Built-in calculator = Google's ability to perform math calculations
- Currency conversion = converting money from one currency to another
- Unit conversion = changing from one measurement unit to another
- Natural language query = typing math in everyday English

---

**Quick Revision Points:**
- "Weather Lahore" shows Lahore's weather.
- Google can do math: 12*391, Sin 90, etc.
- Use natural language: "Subtract 10 from 30".
- Convert currency: "100 Euros in Pakistani rupees".
- Convert units: "Kph in Mph", "m in cm".
- Search landmarks directly: "Minar e Pakistan".`,

  questions: [
    {
      q: 'Which query would show the weather in Lahore?',
      options: ['A. Lahore temperature', 'B. Weather Lahore', 'C. Lahore climate', 'D. How is Lahore weather?'],
      answer: 'B. Weather Lahore',
      diff: 'easy',
    },
    {
      q: 'To multiply 12 by 391 on Google, you would type:',
      options: ['A. 12x391', 'B. 12*391', 'C. 12 × 391', 'D. multiply 12 and 391'],
      answer: 'B. 12*391',
      diff: 'easy',
    },
    {
      q: 'Which of the following is a trigonometric calculation you can do on Google?',
      options: ['A. 12-5', 'B. Sin 90', 'C. 80/100*200', 'D. Subtract 10 from 30'],
      answer: 'B. Sin 90',
      diff: 'easy',
    },
    {
      q: 'How would you ask Google to convert 100 Euros to Pakistani rupees?',
      options: ['A. 100 Euros = PKR', 'B. 100 Euros in Pakistani rupees', 'C. Convert 100 Euro to PKR', 'D. All of the above'],
      answer: 'D. All of the above',
      diff: 'easy',
    },
    {
      q: 'To convert kilometers per hour to miles per hour, you can type:',
      options: ['A. km to miles', 'B. Kph in Mph', 'C. convert kph', 'D. kmph to mph'],
      answer: 'B. Kph in Mph',
      diff: 'medium',
    },
    {
      q: 'Which query would convert meters to centimeters?',
      options: ['A. m in cm', 'B. meter to cm', 'C. convert m to cm', 'D. All of the above'],
      answer: 'A. m in cm',
      diff: 'easy',
    },
    {
      q: 'The query "Subtract 10 from 30" on Google would return:',
      options: ['A. 20', 'B. 40', 'C. 10', 'D. 300'],
      answer: 'A. 20',
      diff: 'easy',
    },
    {
      q: 'Which of the following is a famous landmark in Lahore you can search on Google?',
      options: ['A. Eiffel Tower', 'B. Baadshahi Mosque', 'C. Taj Mahal', 'D. Pyramids'],
      answer: 'B. Baadshahi Mosque',
      diff: 'easy',
    },
    {
      q: 'What will Google show for the query "80/100*200"?',
      options: ['A. 40', 'B. 80', 'C. 160', 'D. 200'],
      answer: 'C. 160',
      diff: 'medium',
    },
    {
      q: 'To find information about the national cricket team, you can search:',
      options: ['A. Pakistan Cricket team', 'B. Pakistan cricket', 'C. Pakistani cricket team', 'D. All of the above'],
      answer: 'D. All of the above',
      diff: 'easy',
    },
    {
      q: 'The query "Tan 80" on Google will calculate the tangent of:',
      options: ['A. 80 radians', 'B. 80 degrees', 'C. 80 gradians', 'D. 80%'],
      answer: 'B. 80 degrees',
      diff: 'medium',
    },
    {
      q: 'Which of the following is NOT a search trick mentioned in the module?',
      options: ['A. Weather search', 'B. Currency conversion', 'C. Image reverse search', 'D. Unit conversion'],
      answer: 'C. Image reverse search',
      diff: 'easy',
    },
   
  ]
},

5: {
  title: 'Search Operators (1): Social Media, Price, Hashtags, Exclusion, Exact Match, Wildcard (CS101 Lecture 5)',
  summary: `**Key Topics Covered:**
- @ operator: search on specific social media (e.g., "Fifa World cup @facebook", "@twitter")
- pkr operator: search for price in Pakistani rupees (e.g., "Laptop pkr 50000")
- # operator: search hashtags (e.g., "#education")
- Minus sign (-): exclude words from query (e.g., "Jaguar -cars" to exclude car results)
- Double quotes (" "): exact phrase search (e.g., "Tallest Building in Pakistan")
- Asterisk (*): wildcard for unknown words (e.g., "* is thicker than water")

---

**Simple Understanding:**

**Search on Social Media (@):**
👉 Add "@" followed by the social media name after your query.
👉 Example: "Fifa World cup @facebook" – limits results to Facebook.
👉 Example: "Fifa World Cup @Twitter" – limits results to Twitter.

**Search for a Price (pkr):**
👉 Type "pkr" before or after a number to search for items in that price range.
👉 Example: "Laptop pkr 50000" – shows laptops around 50,000 PKR.

**Searching Hashtags (#):**
👉 Use "#" before a word to find pages using that hashtag.
👉 Example: "#education" – shows results with #education hashtag.

**Exclude Words (-):**
👉 Use minus sign before a word to exclude it from search results.
👉 Example: "Jaguar -cars" – shows results about jaguar (animal), not car.
👉 No space between minus and the word.

**Exact Match (" "):**
👉 Put your phrase in double quotes to search for that exact phrase.
👉 Example: "Tallest Building in Pakistan" – finds only pages containing exactly this phrase.
👉 Without quotes, Google finds pages containing any of the words.

**Wildcard (*):**
👉 Use asterisk as a placeholder for any unknown word.
👉 Example: "* is thicker than water" – finds phrases like "Blood is thicker than water", "Life is thicker than water", etc.
👉 The star represents any single word.

---

**Important Vocabulary:**
- Search operator = special symbol or word that modifies a search query
- Social media search = limiting results to a specific social platform using @
- Hashtag = word preceded by # to categorize content
- Exclude operator = minus sign (-) to remove unwanted terms
- Exact phrase = words in double quotes, searched exactly as written
- Wildcard = asterisk (*) standing for any unknown word

---

**Quick Revision Points:**
- Use @facebook or @twitter to search within specific social media.
- "Laptop pkr 50000" finds laptops around that price.
- "#education" finds posts with that hashtag.
- "Jaguar -cars" removes car results.
- "Exact phrase in quotes" finds only that exact wording.
- "* is thicker than water" finds any word before the phrase.`,

  questions: [
    {
      q: 'Which operator is used to search within a specific social media platform on Google?',
      options: ['A. #', 'B. @', 'C. $', 'D. %'],
      answer: 'B. @',
      diff: 'easy',
    },
    {
      q: 'To search for laptops priced around 50,000 PKR, you can type:',
      options: ['A. Laptop PKR 50000', 'B. Laptop @50000', 'C. Laptop #50000', 'D. Laptop -50000'],
      answer: 'A. Laptop PKR 50000',
      diff: 'easy',
    },
    {
      q: 'Which symbol is used to search for a hashtag?',
      options: ['A. @', 'B. $', 'C. #', 'D. %'],
      answer: 'C. #',
      diff: 'easy',
    },
    {
      q: 'How would you exclude pages about cars when searching for "Jaguar"?',
      options: ['A. Jaguar +cars', 'B. Jaguar @cars', 'C. Jaguar -cars', 'D. Jaguar #cars'],
      answer: 'C. Jaguar -cars',
      diff: 'easy',
    },
    {
      q: 'What does the query "Jaguar -cars" do?',
      options: ['A. Shows only car results', 'B. Shows results about jaguar animal, excluding cars', 'C. Shows only social media results', 'D. Shows results for both animal and car'],
      answer: 'B. Shows results about jaguar animal, excluding cars',
      diff: 'easy',
    },
    {
      q: 'Which operator is used to search for an exact phrase?',
      options: ['A. Single quotes (\')', 'B. Double quotes (")', 'C. Asterisk (*)', 'D. Minus sign (-)'],
      answer: 'B. Double quotes (")',
      diff: 'easy',
    },
    {
      q: 'Searching "Tallest Building in Pakistan" (with quotes) will:',
      options: ['A. Find pages containing any of these words', 'B. Find pages containing the exact phrase', 'C. Exclude pages with "building"', 'D. Search only on social media'],
      answer: 'B. Find pages containing the exact phrase',
      diff: 'easy',
    },
    {
      q: 'What is the difference between searching with quotes and without quotes?',
      options: ['A. Quotes give faster results', 'B. Quotes search exact phrase; without quotes searches pages containing any or all words', 'C. Quotes work only on Facebook', 'D. No difference'],
      answer: 'B. Quotes search exact phrase; without quotes searches pages containing any or all words',
      diff: 'medium',
    },
    {
      q: 'Which symbol acts as a wildcard in Google search?',
      options: ['A. ?', 'B. %', 'C. *', 'D. +'],
      answer: 'C. *',
      diff: 'easy',
    },
    {
      q: 'The query "* is thicker than water" will find:',
      options: ['A. Only "Blood is thicker than water"', 'B. Any phrase where a word comes before "is thicker than water"', 'C. Only pages with asterisk', 'D. Nothing'],
      answer: 'B. Any phrase where a word comes before "is thicker than water"',
      diff: 'medium',
    },
    {
      q: 'To search for "#education" on Google, you would type:',
      options: ['A. @education', 'B. education #', 'C. #education', 'D. education -hashtag'],
      answer: 'C. #education',
      diff: 'easy',
    },
    {
      q: 'Which query would limit results to Facebook pages about "World Cup"?',
      options: ['A. World Cup @facebook', 'B. World Cup #facebook', 'C. World Cup -facebook', 'D. "World Cup" facebook'],
      answer: 'A. World Cup @facebook',
      diff: 'easy',
    },
    {
      q: 'What does the minus sign (-) do in a Google query?',
      options: ['A. Adds similar words', 'B. Excludes the word after it', 'C. Searches for price', 'D. Searches only on social media'],
      answer: 'B. Excludes the word after it',
      diff: 'easy',
    },
    {
      q: 'Which of the following is NOT a search operator mentioned in this module?',
      options: ['A. @', 'B. #', 'C. $', 'D. *'],
      answer: 'C. $',
      diff: 'easy',
    },
    {
      q: 'If you want to find exact phrase "Virtual University of Pakistan", you should type:',
      options: ['A. Virtual University of Pakistan', 'B. "Virtual University of Pakistan"', 'C. Virtual + University + of + Pakistan', 'D. @Virtual University of Pakistan'],
      answer: 'B. "Virtual University of Pakistan"',
      diff: 'easy',
    },
    {
      q: 'The wildcard operator (*) represents:',
      options: ['A. Any single word', 'B. Any number', 'C. Any social media', 'D. Any price'],
      answer: 'A. Any single word',
      diff: 'easy',
    }
  ]
},

//L 6 //

6: {
  title: 'Search Operators (2): Range, Boolean, Site, Related, Info, Cache, Filetype (CS101 Lecture 6)',
  summary: `**Key Topics Covered:**
- Range search (..): two dots between numbers (e.g., "laptop pkr25000..pkr35000")
- Boolean operators: AND, OR
  - "Computer and Science" – pages containing both words
  - "Computer or Science" – pages containing either word
- site: operator – search within a specific website (e.g., "virtual university site:youtube.com")
- related: operator – find websites similar to a given site (e.g., "related:youtube.com")
- info: operator – get information about a website (e.g., "info:youtube.com")
- cache: operator – view cached version of a website (e.g., "cache:youtube.com")
- filetype: / ext: operator – search for specific file types (e.g., "Virtual University filetype:pdf" or "ext:pdf")

---

**Simple Understanding:**

**Range Search (..):**
👉 Use two dots between numbers to search within a range.
👉 Example: "laptop pkr25000..pkr35000" – finds laptops priced between 25,000 and 35,000 PKR.
👉 Works for prices, years, sizes, etc.

**Boolean Operators – AND:**
👉 "Computer and Science" – finds pages containing both "computer" AND "science".
👉 Both words must appear (not necessarily together).

**Boolean Operators – OR:**
👉 "Computer or Science" – finds pages containing either "computer" OR "science" (or both).

**site: Operator:**
👉 Search only within a specific website.
👉 Example: "virtual university site:youtube.com" – finds pages about virtual university on YouTube.
👉 No space after colon.

**related: Operator:**
👉 Find websites similar to a given site.
👉 Example: "related:youtube.com" – shows other video-sharing sites similar to YouTube.

**info: Operator:**
👉 Get information about a website (cached page, similar pages, pages linking to it, etc.).
👉 Example: "info:youtube.com".

**cache: Operator:**
👉 View Google's cached (saved) version of a webpage.
👉 Useful if the website is down or slow.
👉 Example: "cache:youtube.com".

**filetype: / ext: Operators:**
👉 Search for specific file types.
👉 Example: "Virtual University filetype:pdf" – finds PDF files about Virtual University.
👉 "ext:pdf" works the same.

---

**Important Vocabulary:**
- Range search = searching between two numeric values using ..
- Boolean operator = AND, OR to combine search terms
- site: = operator to limit search to one website
- related: = operator to find similar websites
- info: = operator to get metadata about a website
- cache: = operator to view Google's saved copy of a webpage
- filetype: / ext: = operator to search for a specific file extension

---

**Quick Revision Points:**
- "laptop 25000..35000" finds laptops in that price range.
- AND gives pages with both terms; OR gives pages with either term.
- site:youtube.com limits search to YouTube.
- related:youtube.com finds sites like YouTube.
- info:youtube.com shows website information.
- cache:youtube.com shows Google's cached version.
- filetype:pdf finds PDF documents.`,

  questions: [
    {
      q: 'Which operator is used to search within a range of numbers?',
      options: ['A. -', 'B. ..', 'C. :', 'D. @'],
      answer: 'B. ..',
      diff: 'easy',
    },
    {
      q: 'To find laptops priced between 25,000 and 35,000 PKR, you would type:',
      options: ['A. laptop pkr25000-pkr35000', 'B. laptop pkr25000..pkr35000', 'C. laptop pkr25000 to pkr35000', 'D. laptop pkr25000:pkr35000'],
      answer: 'B. laptop pkr25000..pkr35000',
      diff: 'easy',
    },
    {
      q: 'The Boolean operator "AND" in a Google query does what?',
      options: ['A. Finds pages containing either of the words', 'B. Finds pages containing both words', 'C. Excludes pages with the word', 'D. Searches for exact phrase'],
      answer: 'B. Finds pages containing both words',
      diff: 'easy',
    },
    {
      q: 'The query "Computer or Science" will find pages that contain:',
      options: ['A. Only the word computer', 'B. Only the word science', 'C. Either computer or science (or both)', 'D. Neither computer nor science'],
      answer: 'C. Either computer or science (or both)',
      diff: 'easy',
    },
    {
      q: 'Which operator is used to search within a specific website?',
      options: ['A. site:', 'B. related:', 'C. info:', 'D. cache:'],
      answer: 'A. site:',
      diff: 'easy',
    },
    {
      q: 'To search for "virtual university" only on YouTube, you would type:',
      options: ['A. virtual university site:youtube.com', 'B. virtual university related:youtube.com', 'C. virtual university info:youtube.com', 'D. virtual university cache:youtube.com'],
      answer: 'A. virtual university site:youtube.com',
      diff: 'easy',
    },
    {
      q: 'The "related:" operator finds:',
      options: ['A. Pages linking to a website', 'B. Cached version of a website', 'C. Websites similar to a given site', 'D. Information about a website'],
      answer: 'C. Websites similar to a given site',
      diff: 'easy',
    },
    {
      q: 'To find websites similar to YouTube, you would type:',
      options: ['A. site:youtube.com', 'B. related:youtube.com', 'C. info:youtube.com', 'D. cache:youtube.com'],
      answer: 'B. related:youtube.com',
      diff: 'easy',
    },
    {
      q: 'The "info:" operator shows:',
      options: ['A. Similar websites', 'B. Cached pages', 'C. Information about a website', 'D. Files on a website'],
      answer: 'C. Information about a website',
      diff: 'easy',
    },
    {
      q: 'Which operator is useful when a website is down and you want to see a saved copy?',
      options: ['A. site:', 'B. related:', 'C. info:', 'D. cache:'],
      answer: 'D. cache:',
      diff: 'easy',
    },
    {
      q: 'To view Google\'s cached version of YouTube, you would type:',
      options: ['A. site:youtube.com', 'B. related:youtube.com', 'C. info:youtube.com', 'D. cache:youtube.com'],
      answer: 'D. cache:youtube.com',
      diff: 'easy',
    },
    {
      q: 'Which operator is used to search for a specific file type?',
      options: ['A. filetype:', 'B. site:', 'C. related:', 'D. cache:'],
      answer: 'A. filetype:',
      diff: 'easy',
    },
    {
      q: 'To find PDF files about "Virtual University", you would type:',
      options: ['A. Virtual University filetype:pdf', 'B. Virtual University ext:pdf', 'C. Both A and B', 'D. None of the above'],
      answer: 'C. Both A and B',
      diff: 'medium',
    },
    {
      q: 'Which of the following is an alternative to "filetype:"?',
      options: ['A. ext:', 'B. type:', 'C. format:', 'D. doc:'],
      answer: 'A. ext:',
      diff: 'medium',
    },
    {
      q: 'The query "laptop pkr20000..pkr40000" will find laptops priced:',
      options: ['A. Exactly 20000', 'B. Exactly 40000', 'C. Between 20000 and 40000', 'D. Below 20000'],
      answer: 'C. Between 20000 and 40000',
      diff: 'easy',
    },
    {
      q: 'What does the query "computer and science" return?',
      options: ['A. Pages with either computer or science', 'B. Pages with both computer and science', 'C. Pages with exactly the phrase "computer and science"', 'D. Pages excluding the word science'],
      answer: 'B. Pages with both computer and science',
      diff: 'easy',
    },
    {
      q: 'Which operator would you use to get information about the website "vu.edu.pk"?',
      options: ['A. site:vu.edu.pk', 'B. related:vu.edu.pk', 'C. info:vu.edu.pk', 'D. cache:vu.edu.pk'],
      answer: 'C. info:vu.edu.pk',
      diff: 'easy',
    }
  ]
},

// L 7 //

7: {
  title: 'Search Operators (3): Stocks, Map, Movie, Define, Image Search, Tilt (CS101 Lecture 7)',
  summary: `**Key Topics Covered:**
- stocks: operator – check stock market trends (e.g., "stocks:aapl" for Apple)
- map: operator – view map of a location (e.g., "map:Lahore")
- movie: operator – find information about a movie (e.g., "movie:steve jobs")
- Compare food nutrients: https://www.myfooddata.com/
- define: operator – get definition of a term (e.g., "define:Computer")
- Image search: https://images.google.com/ – search by image or find similar images
- Tilt – fun trick to rotate Google screen (elgoog.im/tilt)

---

**Simple Understanding:**

**stocks: Operator**
👉 Type "stocks:" followed by a company's stock symbol.
👉 Example: "stocks:aapl" – shows stock trend for Apple Inc.

**map: Operator**
👉 Type "map:" followed by a location name.
👉 Example: "map:Lahore" – shows map of Lahore.

**movie: Operator**
👉 Type "movie:" followed by a movie title.
👉 Example: "movie:steve jobs" – shows information about the Steve Jobs movie.

**Compare Food Nutrients:**
👉 Visit https://www.myfooddata.com/
👉 Compare nutritional values of different foods.

**define: Operator**
👉 Type "define:" followed by a word.
👉 Example: "define:Computer" – shows definition of "computer".

**Image Search:**
👉 Go to https://images.google.com/
👉 Search by uploading an image – Google finds similar images.

**Tilt (Fun Trick):**
👉 Type "tilt" in Google search.
👉 Click the link (like elgoog.im/tilt).
👉 The Google screen rotates (360 degrees) – a playful effect.

---

**Important Vocabulary:**
- stocks operator = retrieves stock market trends for a company
- stock symbol = unique letter code for a company (e.g., AAPL for Apple)
- map operator = displays a map of a location
- movie operator = shows information about a film
- define operator = provides dictionary definition
- Image search = search by image instead of text
- Tilt = Google Easter egg that rotates the screen

---

**Quick Revision Points:**
- "stocks:aapl" gives Apple's stock trend.
- "map:Lahore" shows Lahore map.
- "movie:steve jobs" shows movie info.
- myfooddata.com compares food nutrients.
- "define:Computer" gives definition.
- images.google.com allows image-based search.
- "tilt" rotates the Google screen for fun.`,

  questions: [
    {
      q: 'Which operator is used to check stock market trends on Google?',
      options: ['A. stocks:', 'B. market:', 'C. stock:', 'D. share:'],
      answer: 'A. stocks:',
      diff: 'easy',
    },
    {
      q: 'To see the stock trend for Apple Inc., you would type:',
      options: ['A. stocks:apple', 'B. stocks:aapl', 'C. stock:aapl', 'D. market:apple'],
      answer: 'B. stocks:aapl',
      diff: 'easy',
    },
    {
      q: 'Which operator displays a map of a location?',
      options: ['A. map:', 'B. location:', 'C. geo:', 'D. place:'],
      answer: 'A. map:',
      diff: 'easy',
    },
    {
      q: 'To see the map of Lahore, you would type:',
      options: ['A. map:Lahore', 'B. location:Lahore', 'C. geo:Lahore', 'D. place:Lahore'],
      answer: 'A. map:Lahore',
      diff: 'easy',
    },
    {
      q: 'The "movie:" operator is used to:',
      options: ['A. Watch movies online', 'B. Find information about a movie', 'C. Download movies', 'D. Book movie tickets'],
      answer: 'B. Find information about a movie',
      diff: 'easy',
    },
    {
      q: 'To find information about the movie "Steve Jobs", you would type:',
      options: ['A. film:steve jobs', 'B. cinema:steve jobs', 'C. movie:steve jobs', 'D. watch:steve jobs'],
      answer: 'C. movie:steve jobs',
      diff: 'easy',
    },
    {
      q: 'Which website is mentioned for comparing food nutrients?',
      options: ['A. myfooddata.com', 'B. foodcompare.com', 'C. nutritions.com', 'D. healthdata.com'],
      answer: 'A. myfooddata.com',
      diff: 'easy',
    },
    {
      q: 'The "define:" operator gives:',
      options: ['A. Synonyms of a word', 'B. Dictionary definition of a term', 'C. Translation of a word', 'D. Pronunciation only'],
      answer: 'B. Dictionary definition of a term',
      diff: 'easy',
    },
    {
      q: 'To get the definition of "computer", you would type:',
      options: ['A. define:computer', 'B. definition:computer', 'C. meaning:computer', 'D. dictionary:computer'],
      answer: 'A. define:computer',
      diff: 'easy',
    },
    {
      q: 'What is the URL for Google Image Search?',
      options: ['A. images.google.com', 'B. image.google.com', 'C. google.com/images', 'D. pic.google.com'],
      answer: 'A. images.google.com',
      diff: 'easy',
    },
    {
      q: 'What feature does "tilt" provide in Google?',
      options: ['A. Shows a map', 'B. Rotates the Google screen', 'C. Defines words', 'D. Shows stock trends'],
      answer: 'B. Rotates the Google screen',
      diff: 'easy',
    },
    {
      q: 'The "tilt" trick is an example of:',
      options: ['A. Search operator', 'B. Google Easter egg / fun trick', 'C. File type search', 'D. Social media search'],
      answer: 'B. Google Easter egg / fun trick',
      diff: 'easy',
    },
    {
      q: 'Which link is mentioned to perform the tilt trick?',
      options: ['A. google.com/tilt', 'B. elgoog.im/tilt', 'C. tilt.google.com', 'D. google.com/fun'],
      answer: 'B. elgoog.im/tilt',
      diff: 'medium',
    },
    {
      q: 'What is a stock symbol?',
      options: ['A. A company’s logo', 'B. A unique letter code for a company on stock market', 'C. A type of search operator', 'D. A map location'],
      answer: 'B. A unique letter code for a company on stock market',
      diff: 'medium',
    },
    {
      q: 'The myfooddata.com website allows you to:',
      options: ['A. Order food online', 'B. Compare nutrient values of foods', 'C. Find restaurant reviews', 'D. Get food recipes'],
      answer: 'B. Compare nutrient values of foods',
      diff: 'easy',
    }
  ]
},

  },

  // ─────────────────────────────────────────
  //  PAK101
  // ─────────────────────────────────────────
  PAK101: {
     1: {
  title: 'Muslim Identity, Two-Nation Theory, and Role of Jinnah & Allama Iqbal (PAK101 Lecture 1)',
  summary: `**Key Topics Covered:**
- Development of Muslim identity in the Indian subcontinent
- Two-Nation Theory: Muslims and Hindus as two distinct nations
- Role of Quaid-e-Azam Muhammad Ali Jinnah (leader, mobilizer, articulator of Muslim demands)
- Jinnah’s political career: Congress, Muslim League, Lucknow Pact (1916), Nehru Report, 14 Points (1929)
- Jinnah’s speeches defining Muslims as a separate nation (1935–1940)
- Jinnah’s vision for Pakistan: democratic, Islamic, with equal rights for all citizens
- Allama Iqbal’s vision: Islam as a dynamic force, critique of Western materialism
- Iqbal’s Allahabad Address (1930): proposal for a separate Muslim state in Northwestern India

---

**Simple Understanding:**

**Muslim Identity and Two-Nation Theory:**
👉 Muslims of India developed a distinct identity based on religion, culture, history, and laws.
👉 They wanted to protect their interests and live according to Islamic ideals without being dominated by a Hindu majority.
👉 Initially, they sought constitutional safeguards from the British.
👉 Due to opposition from Hindus, they eventually demanded a separate state.

**Role of Quaid-e-Azam Muhammad Ali Jinnah:**
👉 Joined Indian National Congress (1906) and later All India Muslim League (1913).
👉 Resigned from Congress in 1920 over disagreements with Gandhi (on Swaraj and extra-constitutional means).
👉 Lucknow Pact (1916): Hindus accepted separate electorate, one-third seats for Muslims in Central Legislature, and minority rights.
👉 Nehru Report (1928) ignored Muslim rights; Jinnah responded with 14 Points (1929).
👉 In 1935, he called Muslims a "nation" in the Legislative Assembly.
👉 In 1937, he declared Muslims as a third party in India.
👉 In 1939–40, he famously stated: "By all cannons of international law, we are a nation."
👉 He emphasized Islam as a dynamic force for unity, guidance, and civilization.
👉 He promised a democratic constitution, equality for all citizens, and rights for religious minorities.

**Allama Iqbal’s Vision:**
👉 Recognized Islam’s central role in Muslim life.
👉 Early poetry (e.g., Tarana-i-Hind) showed nationalist ideas, but later focused on Muslim identity.
👉 Criticized Western capitalism, materialism, and lack of spirituality.
👉 Believed Islam could salvage Muslims from internal discord and external challenges.
👉 Advocated for Ijtehad (reinterpretation) to meet modern challenges.
👉 Allahabad Address (1930): Proposed a separate Muslim state in Northwestern India (Punjab, NWFP, Sind, Balochistan) – a self-governing entity within or without the British Empire.

---

**Important Vocabulary:**
- Two-Nation Theory = belief that Hindus and Muslims are two distinct nations
- Separate Electorate = Muslims voting for their own representatives
- Swaraj = self-rule / complete freedom from British
- Lucknow Pact (1916) = agreement between Congress and Muslim League
- Nehru Report (1928) = Congress proposal that rejected separate electorate
- 14 Points (1929) = Jinnah’s counter-proposals for Muslim rights
- Ijtehad = independent reasoning to interpret Islamic law for modern times
- Allahabad Address (1930) = Iqbal’s speech proposing a separate Muslim state

---

**Quick Revision Points:**
- Muslim identity developed before Pakistan’s creation.
- Muslims wanted to protect their identity, interests, and Islamic way of life.
- Leadership was crucial; Muslims had competent leaders like Jinnah and Iqbal.
- Jinnah started in Congress, then joined Muslim League.
- Lucknow Pact (1916) gave Muslims separate electorate, one-third seats, minority protections.
- Nehru Report (1928) ignored these; Jinnah gave 14 Points (1929).
- Jinnah declared Muslims a nation in 1935, 1937, 1939-40.
- Islam was central to Jinnah’s political mobilization.
- Jinnah envisioned a democratic, modern Islamic state with equal rights.
- Iqbal criticized Western materialism and saw Islam as a dynamic force.
- Iqbal’s Allahabad Address (1930) proposed a separate Muslim state in Northwest India.`,

  questions: [
    {
      q: 'The sense of nationhood among Muslims in India developed:',
      options: ['A. After the creation of Pakistan', 'B. Before the establishment of Pakistan', 'C. During British rule only', 'D. After independence'],
      answer: 'B. Before the establishment of Pakistan',
      diff: 'easy',
    },
    {
      q: 'The main goal of Muslims in pre-Pakistan India was to:',
      options: ['A. Dominate Hindus', 'B. Protect their identity and interests', 'C. Support British rule', 'D. Abandon Islam'],
      answer: 'B. Protect their identity and interests',
      diff: 'easy',
    },
    {
      q: 'Initially, Muslims sought from the British:',
      options: ['A. Complete independence', 'B. Constitutional safeguards', 'C. Separate homeland', 'D. Conversion of Hindus'],
      answer: 'B. Constitutional safeguards',
      diff: 'easy',
    },
    {
      q: 'Which quality is NOT attributed to a good leadership in the text?',
      options: ['A. Awareness', 'B. Consciousness', 'C. Wealth accumulation', 'D. Sense of direction'],
      answer: 'C. Wealth accumulation',
      diff: 'easy',
    },
    {
      q: 'M. A. Jinnah is described as a:',
      options: ['A. Religious scholar', 'B. Charismatic leader', 'C. British loyalist', 'D. Hindu leader'],
      answer: 'B. Charismatic leader',
      diff: 'easy',
    },
    {
      q: 'Jinnah joined the Indian National Congress in which year?',
      options: ['A. 1900', 'B. 1906', 'C. 1913', 'D. 1920'],
      answer: 'B. 1906',
      diff: 'medium',
    },
    {
      q: 'Jinnah joined the All India Muslim League in:',
      options: ['A. 1906', 'B. 1910', 'C. 1913', 'D. 1916'],
      answer: 'C. 1913',
      diff: 'medium',
    },
    {
      q: 'Jinnah resigned from the Congress in 1920 because of disagreement with Gandhi on:',
      options: ['A. Separate electorate', 'B. Swaraj and extra-constitutional means', 'C. Two-nation theory', 'D. Pakistan resolution'],
      answer: 'B. Swaraj and extra-constitutional means',
      diff: 'medium',
    },
    {
      q: 'The Lucknow Pact was signed in:',
      options: ['A. 1913', 'B. 1916', 'C. 1920', 'D. 1929'],
      answer: 'B. 1916',
      diff: 'easy',
    },
    {
      q: 'In the Lucknow Pact, Hindus accepted all EXCEPT:',
      options: ['A. Separate electorate', 'B. One-third seats for Muslims in Central Legislature', 'C. Protection of minority rights', 'D. A separate Muslim state'],
      answer: 'D. A separate Muslim state',
      diff: 'medium',
    },
    {
      q: 'The Nehru Report ignored the accepted Muslim rights. It was published in:',
      options: ['A. 1920', 'B. 1928', 'C. 1929', 'D. 1935'],
      answer: 'B. 1928',
      diff: 'medium',
    },
    {
      q: 'Jinnah presented his 14 Points in response to the Nehru Report in:',
      options: ['A. 1928', 'B. 1929', 'C. 1930', 'D. 1935'],
      answer: 'B. 1929',
      diff: 'medium',
    },
    {
      q: 'Jinnah first used the term "nation" for Indian Muslims in which year?',
      options: ['A. 1929', 'B. 1935', 'C. 1937', 'D. 1940'],
      answer: 'B. 1935',
      diff: 'hard',
    },
    {
      q: 'According to Jinnah’s 1939 speech, Muslims and Hindus are:',
      options: ['A. One nation', 'B. Two nations', 'C. Religious communities only', 'D. Same civilization'],
      answer: 'B. Two nations',
      diff: 'easy',
    },
    {
      q: 'Jinnah believed that Islam is a:',
      options: ['A. Static religion', 'B. Dynamic force', 'C. Mere ritual', 'D. Cause of division'],
      answer: 'B. Dynamic force',
      diff: 'easy',
    },
    {
      q: 'Jinnah assured that the constitution of Pakistan would be framed by:',
      options: ['A. The British Parliament', 'B. The elected assembly', 'C. The Muslim League only', 'D. Religious scholars'],
      answer: 'B. The elected assembly',
      diff: 'easy',
    },
    {
      q: 'Allama Iqbal first appeared publicly in 1899 at the annual session of:',
      options: ['A. Muslim League', 'B. Anjuman Himayat-i-Islam', 'C. Congress', 'D. Khilafat Committee'],
      answer: 'B. Anjuman Himayat-i-Islam',
      diff: 'hard',
    },
    {
      q: 'Iqbal’s early poetry included which nationalist poem?',
      options: ['A. Nala-i-Yatim', 'B. Tarana-i-Hind', 'C. Shikwa', 'D. Jawab-e-Shikwa'],
      answer: 'B. Tarana-i-Hind',
      diff: 'medium',
    },
    {
      q: 'Iqbal criticized Western culture for being:',
      options: ['A. Spiritual', 'B. Materialistic and lacking spiritualism', 'C. Democratic', 'D. Religious'],
      answer: 'B. Materialistic and lacking spiritualism',
      diff: 'easy',
    },
    {
      q: 'Iqbal believed that Islam can help Muslims overcome:',
      options: ['A. Internal discord and external challenges', 'B. Economic prosperity only', 'C. Political power only', 'D. All religious rituals'],
      answer: 'A. Internal discord and external challenges',
      diff: 'medium',
    },
    {
      q: 'Iqbal advocated for which concept to reinterpret Islam for modern challenges?',
      options: ['A. Taqleed', 'B. Ijtehad', 'C. Bidat', 'D. Shirk'],
      answer: 'B. Ijtehad',
      diff: 'medium',
    },
    {
      q: 'The famous Allahabad Address was delivered by Allama Iqbal in:',
      options: ['A. 1929', 'B. 1930', 'C. 1935', 'D. 1940'],
      answer: 'B. 1930',
      diff: 'easy',
    },
    {
      q: 'In the Allahabad Address, Iqbal proposed a separate state for Muslims in which region?',
      options: ['A. Eastern India', 'B. Northwestern India', 'C. Southern India', 'D. Central India'],
      answer: 'B. Northwestern India',
      diff: 'easy',
    },
    {
      q: 'Which provinces did Iqbal mention for amalgamation into a single state in his 1930 address?',
      options: ['A. Punjab, NWFP, Sind, Balochistan', 'B. Bengal, Assam, Bihar', 'C. UP, Delhi, Ajmer', 'D. Madras, Bombay, Calcutta'],
      answer: 'A. Punjab, NWFP, Sind, Balochistan',
      diff: 'medium',
    },
    {
      q: 'Iqbal’s concept of a separate state was to be within or without:',
      options: ['A. The Congress', 'B. The British Empire', 'C. The Muslim League', 'D. The Hindu majority'],
      answer: 'B. The British Empire',
      diff: 'medium',
    },
    {
      q: 'According to Jinnah, the combination of religion, culture, race, arts, and music make a minority a:',
      options: ['A. Separate entity', 'B. Part of majority', 'C. Religious sect', 'D. Political party'],
      answer: 'A. Separate entity',
      diff: 'medium',
    }
  ]
},


// lecture 2//


  2: {
  title: 'Muslim Identity, Two-Nation Theory, and Role of Jinnah & Allama Iqbal (PAK101 Lecture 2)',
  summary: `**Key Topics Covered:**
- Development of Muslim identity in the Indian subcontinent
- Two-Nation Theory: Muslims and Hindus as two distinct nations
- Role of Quaid-e-Azam Muhammad Ali Jinnah (leader, mobilizer, articulator of Muslim demands)
- Jinnah’s political career: Congress, Muslim League, Lucknow Pact (1916), Nehru Report, 14 Points (1929)
- Jinnah’s speeches defining Muslims as a separate nation (1935–1940)
- Jinnah’s vision for Pakistan: democratic, Islamic, with equal rights for all citizens
- Allama Iqbal’s vision: Islam as a dynamic force, critique of Western materialism
- Iqbal’s Allahabad Address (1930): proposal for a separate Muslim state in Northwestern India

---

**Simple Understanding:**

**Muslim Identity and Two-Nation Theory:**
👉 Muslims of India developed a distinct identity based on religion, culture, history, and laws.
👉 They wanted to protect their interests and live according to Islamic ideals without being dominated by a Hindu majority.
👉 Initially, they sought constitutional safeguards from the British.
👉 Due to opposition from Hindus, they eventually demanded a separate state.

**Role of Quaid-e-Azam Muhammad Ali Jinnah:**
👉 Joined Indian National Congress (1906) and later All India Muslim League (1913).
👉 Resigned from Congress in 1920 over disagreements with Gandhi (on Swaraj and extra-constitutional means).
👉 Lucknow Pact (1916): Hindus accepted separate electorate, one-third seats for Muslims in Central Legislature, and minority rights.
👉 Nehru Report (1928) ignored Muslim rights; Jinnah responded with 14 Points (1929).
👉 In 1935, he called Muslims a "nation" in the Legislative Assembly.
👉 In 1937, he declared Muslims as a third party in India.
👉 In 1939–40, he famously stated: "By all cannons of international law, we are a nation."
👉 He emphasized Islam as a dynamic force for unity, guidance, and civilization.
👉 He promised a democratic constitution, equality for all citizens, and rights for religious minorities.

**Allama Iqbal’s Vision:**
👉 Recognized Islam’s central role in Muslim life.
👉 Early poetry (e.g., Tarana-i-Hind) showed nationalist ideas, but later focused on Muslim identity.
👉 Criticized Western capitalism, materialism, and lack of spirituality.
👉 Believed Islam could salvage Muslims from internal discord and external challenges.
👉 Advocated for Ijtehad (reinterpretation) to meet modern challenges.
👉 Allahabad Address (1930): Proposed a separate Muslim state in Northwestern India (Punjab, NWFP, Sind, Balochistan) – a self-governing entity within or without the British Empire.

---

**Important Vocabulary:**
- Two-Nation Theory = belief that Hindus and Muslims are two distinct nations
- Separate Electorate = Muslims voting for their own representatives
- Swaraj = self-rule / complete freedom from British
- Lucknow Pact (1916) = agreement between Congress and Muslim League
- Nehru Report (1928) = Congress proposal that rejected separate electorate
- 14 Points (1929) = Jinnah’s counter-proposals for Muslim rights
- Ijtehad = independent reasoning to interpret Islamic law for modern times
- Allahabad Address (1930) = Iqbal’s speech proposing a separate Muslim state

---

**Quick Revision Points:**
- Muslim identity developed before Pakistan’s creation.
- Muslims wanted to protect their identity, interests, and Islamic way of life.
- Leadership was crucial; Muslims had competent leaders like Jinnah and Iqbal.
- Jinnah started in Congress, then joined Muslim League.
- Lucknow Pact (1916) gave Muslims separate electorate, one-third seats, minority protections.
- Nehru Report (1928) ignored these; Jinnah gave 14 Points (1929).
- Jinnah declared Muslims a nation in 1935, 1937, 1939-40.
- Islam was central to Jinnah’s political mobilization.
- Jinnah envisioned a democratic, modern Islamic state with equal rights.
- Iqbal criticized Western materialism and saw Islam as a dynamic force.
- Iqbal’s Allahabad Address (1930) proposed a separate Muslim state in Northwest India.`,

  questions: [
    {
      q: 'The sense of nationhood among Muslims in India developed:',
      options: ['A. After the creation of Pakistan', 'B. Before the establishment of Pakistan', 'C. During British rule only', 'D. After independence'],
      answer: 'B. Before the establishment of Pakistan',
      diff: 'easy',
    },
    {
      q: 'The main goal of Muslims in pre-Pakistan India was to:',
      options: ['A. Dominate Hindus', 'B. Protect their identity and interests', 'C. Support British rule', 'D. Abandon Islam'],
      answer: 'B. Protect their identity and interests',
      diff: 'easy',
    },
    {
      q: 'Initially, Muslims sought from the British:',
      options: ['A. Complete independence', 'B. Constitutional safeguards', 'C. Separate homeland', 'D. Conversion of Hindus'],
      answer: 'B. Constitutional safeguards',
      diff: 'easy',
    },
    {
      q: 'Which quality is NOT attributed to a good leadership in the text?',
      options: ['A. Awareness', 'B. Consciousness', 'C. Wealth accumulation', 'D. Sense of direction'],
      answer: 'C. Wealth accumulation',
      diff: 'easy',
    },
    {
      q: 'M. A. Jinnah is described as a:',
      options: ['A. Religious scholar', 'B. Charismatic leader', 'C. British loyalist', 'D. Hindu leader'],
      answer: 'B. Charismatic leader',
      diff: 'easy',
    },
    {
      q: 'Jinnah joined the Indian National Congress in which year?',
      options: ['A. 1900', 'B. 1906', 'C. 1913', 'D. 1920'],
      answer: 'B. 1906',
      diff: 'medium',
    },
    {
      q: 'Jinnah joined the All India Muslim League in:',
      options: ['A. 1906', 'B. 1910', 'C. 1913', 'D. 1916'],
      answer: 'C. 1913',
      diff: 'medium',
    },
    {
      q: 'Jinnah resigned from the Congress in 1920 because of disagreement with Gandhi on:',
      options: ['A. Separate electorate', 'B. Swaraj and extra-constitutional means', 'C. Two-nation theory', 'D. Pakistan resolution'],
      answer: 'B. Swaraj and extra-constitutional means',
      diff: 'medium',
    },
    {
      q: 'The Lucknow Pact was signed in:',
      options: ['A. 1913', 'B. 1916', 'C. 1920', 'D. 1929'],
      answer: 'B. 1916',
      diff: 'easy',
    },
    {
      q: 'In the Lucknow Pact, Hindus accepted all EXCEPT:',
      options: ['A. Separate electorate', 'B. One-third seats for Muslims in Central Legislature', 'C. Protection of minority rights', 'D. A separate Muslim state'],
      answer: 'D. A separate Muslim state',
      diff: 'medium',
    },
    {
      q: 'The Nehru Report ignored the accepted Muslim rights. It was published in:',
      options: ['A. 1920', 'B. 1928', 'C. 1929', 'D. 1935'],
      answer: 'B. 1928',
      diff: 'medium',
    },
    {
      q: 'Jinnah presented his 14 Points in response to the Nehru Report in:',
      options: ['A. 1928', 'B. 1929', 'C. 1930', 'D. 1935'],
      answer: 'B. 1929',
      diff: 'medium',
    },
    {
      q: 'Jinnah first used the term "nation" for Indian Muslims in which year?',
      options: ['A. 1929', 'B. 1935', 'C. 1937', 'D. 1940'],
      answer: 'B. 1935',
      diff: 'hard',
    },
    {
      q: 'According to Jinnah’s 1939 speech, Muslims and Hindus are:',
      options: ['A. One nation', 'B. Two nations', 'C. Religious communities only', 'D. Same civilization'],
      answer: 'B. Two nations',
      diff: 'easy',
    },
    {
      q: 'Jinnah believed that Islam is a:',
      options: ['A. Static religion', 'B. Dynamic force', 'C. Mere ritual', 'D. Cause of division'],
      answer: 'B. Dynamic force',
      diff: 'easy',
    },
    {
      q: 'Jinnah assured that the constitution of Pakistan would be framed by:',
      options: ['A. The British Parliament', 'B. The elected assembly', 'C. The Muslim League only', 'D. Religious scholars'],
      answer: 'B. The elected assembly',
      diff: 'easy',
    },
    {
      q: 'Allama Iqbal first appeared publicly in 1899 at the annual session of:',
      options: ['A. Muslim League', 'B. Anjuman Himayat-i-Islam', 'C. Congress', 'D. Khilafat Committee'],
      answer: 'B. Anjuman Himayat-i-Islam',
      diff: 'hard',
    },
    {
      q: 'Iqbal’s early poetry included which nationalist poem?',
      options: ['A. Nala-i-Yatim', 'B. Tarana-i-Hind', 'C. Shikwa', 'D. Jawab-e-Shikwa'],
      answer: 'B. Tarana-i-Hind',
      diff: 'medium',
    },
    {
      q: 'Iqbal criticized Western culture for being:',
      options: ['A. Spiritual', 'B. Materialistic and lacking spiritualism', 'C. Democratic', 'D. Religious'],
      answer: 'B. Materialistic and lacking spiritualism',
      diff: 'easy',
    },
    {
      q: 'Iqbal believed that Islam can help Muslims overcome:',
      options: ['A. Internal discord and external challenges', 'B. Economic prosperity only', 'C. Political power only', 'D. All religious rituals'],
      answer: 'A. Internal discord and external challenges',
      diff: 'medium',
    },
    {
      q: 'Iqbal advocated for which concept to reinterpret Islam for modern challenges?',
      options: ['A. Taqleed', 'B. Ijtehad', 'C. Bidat', 'D. Shirk'],
      answer: 'B. Ijtehad',
      diff: 'medium',
    },
    {
      q: 'The famous Allahabad Address was delivered by Allama Iqbal in:',
      options: ['A. 1929', 'B. 1930', 'C. 1935', 'D. 1940'],
      answer: 'B. 1930',
      diff: 'easy',
    },
    {
      q: 'In the Allahabad Address, Iqbal proposed a separate state for Muslims in which region?',
      options: ['A. Eastern India', 'B. Northwestern India', 'C. Southern India', 'D. Central India'],
      answer: 'B. Northwestern India',
      diff: 'easy',
    },
    {
      q: 'Which provinces did Iqbal mention for amalgamation into a single state in his 1930 address?',
      options: ['A. Punjab, NWFP, Sind, Balochistan', 'B. Bengal, Assam, Bihar', 'C. UP, Delhi, Ajmer', 'D. Madras, Bombay, Calcutta'],
      answer: 'A. Punjab, NWFP, Sind, Balochistan',
      diff: 'medium',
    },
    {
      q: 'Iqbal’s concept of a separate state was to be within or without:',
      options: ['A. The Congress', 'B. The British Empire', 'C. The Muslim League', 'D. The Hindu majority'],
      answer: 'B. The British Empire',
      diff: 'medium',
    },
    {
      q: 'According to Jinnah, the combination of religion, culture, race, arts, and music make a minority a:',
      options: ['A. Separate entity', 'B. Part of majority', 'C. Religious sect', 'D. Political party'],
      answer: 'A. Separate entity',
      diff: 'medium',
    }
  ]
},


//lecture 3//

  3: {
  title: 'Aligarh Movement: Sir Syed Ahmed Khan and Muslim Educational Renaissance (PAK101 Lecture 3)',
  summary: `**Key Topics Covered:**
- Background: War of Independence 1857 and its impact on Muslims
- Sir Syed Ahmed Khan’s vision: modern education as the way to progress
- Objectives of Aligarh Movement: British-Muslim understanding, Western education, abstention from agitation politics
- Key associates: Nawab Mohsin ul Mulk, Nawab Viqar ul Mulk, Hali, Shibli, Chiragh Ali, and English professors
- Educational achievements: schools, scientific society, MAO College (Aligarh), Muhammadan Educational Conference
- Sir Syed’s writings: Risala Asbab-i-Baghawat-i-Hind, Tahzib-ul-Akhlaq, Loyal Mohammedans of India, Tabyin-ul-Kalam, Khutbat-i-Ahmadiya
- Opposition to Congress, Urdu-Hindi controversy, and seeds of Two-Nation Theory

---

**Simple Understanding:**

**Background:**
👉 After the War of Independence (1857), the British blamed Muslims and punished them severely.
👉 Muslims were seen as enemies because they had ruled India before the British.
👉 The Mughal rule ended, and India came directly under the British Crown.
👉 British educational policy (1835) replaced Arabic, Persian with English as official language.
👉 Muslims developed a negative attitude towards modern/Western education, which was disastrous.

**Sir Syed Ahmed Khan’s Role:**
👉 He appeared during days of despair to rescue Muslims.
👉 He believed mankind had entered an era of science and learning.
👉 He wanted to transform Muslim minds from medieval outlook to modern.
👉 Modern education became the pivot of his movement for Muslim regeneration.

**Three Main Ideals of Sir Syed:**
1. Create mutual understanding between British government and Muslims.
2. Motivate Muslims to learn Western education.
3. Persuade Muslims to abstain from agitation politics.

**Educational Achievements:**
- Gulshan School, Muradabad (1859)
- Victoria School, Gazipur (1863)
- Scientific Society, Aligarh (1864) – translated English works into Urdu
- Aligarh Institute Gazette (1866) – covered history, science, mathematics
- Committee Striving for Educational Progress of Muslims (1870)
- Mohammedan Anglo-Oriental (MAO) School (1875) → College (1877) → University (1920)
- Muhammadan Educational Conference (1886) – later became political mouthpiece and forerunner of Muslim League

**Key Writings of Sir Syed:**
- Risala Asbab-i-Baghawat-i-Hind (1858) – clarified Muslims were dragged into war, not solely responsible.
- Tahzib-ul-Akhlaq (magazine) – criticized conservative lifestyle, advised adopting true Islamic teachings.
- Loyal Mohammedans of India; Tabyin-ul-Kalam; Khutbat-i-Ahmadiya – removed misunderstandings about Islam and Christianity.

**Conclusion & Legacy:**
- Sir Syed forbade Muslims from joining the Hindu-dominated Indian National Congress.
- Urdu-Hindi controversy showed that Hindus and Muslims could not live together.
- He promoted reserved seats for Muslims and the idea that Hindus and Muslims are two distinct nations – a foundation of the Two-Nation Theory.
- Aligarh Movement brought an intellectual revolution and restored Muslim confidence as a nation.

---

**Important Vocabulary:**
- Aligarh Movement = Sir Syed’s educational and social reform movement
- War of Independence 1857 = failed uprising against British rule
- MAO College = Mohammedan Anglo-Oriental College, later Aligarh Muslim University
- Scientific Society = organization for translating Western works into Urdu
- Muhammadan Educational Conference = annual meeting to discuss Muslim education
- Two-Nation Theory = concept that Hindus and Muslims are separate nations
- Urdu-Hindi controversy = conflict over official language (Urdu vs Devanagari Hindi)
- Risala = treatise or booklet

---

**Quick Revision Points:**
- After 1857, British punished Muslims severely, blamed them for the war.
- British made English the official language in 1835, replacing Persian/Arabic.
- Muslims avoided modern education, which hurt their progress.
- Sir Syed Ahmed Khan started Aligarh Movement to revive Muslims through education.
- He wanted British-Muslim understanding, Western education, and no agitation politics.
- He set up MAO School (1875) → College (1877) → University (1920).
- Muhammadan Educational Conference (1886) later helped form Muslim League.
- Sir Syed opposed Congress and warned that Hindus and Muslims are two nations.
- His writings defended Muslims and promoted modern Islamic thought.
- Aligarh Movement laid the foundation for Pakistan’s creation.`,

  questions: [
    {
      q: 'The Aligarh Movement was started by:',
      options: ['A. Allama Iqbal', 'B. Sir Syed Ahmed Khan', 'C. Quaid-e-Azam Jinnah', 'D. Nawab Mohsin ul Mulk'],
      answer: 'B. Sir Syed Ahmed Khan',
      diff: 'easy',
    },
    {
      q: 'The basic aim of Aligarh Movement was to:',
      options: ['A. Create a separate homeland', 'B. Bring back past glory of Muslims through education', 'C. Oppose the British', 'D. Promote Hinduism'],
      answer: 'B. Bring back past glory of Muslims through education',
      diff: 'easy',
    },
    {
      q: 'The War of Independence ended in disaster for Muslims in which year?',
      options: ['A. 1857', 'B. 1835', 'C. 1875', 'D. 1906'],
      answer: 'A. 1857',
      diff: 'easy',
    },
    {
      q: 'After 1857, the British believed which community was responsible for the war?',
      options: ['A. Hindus', 'B. Sikhs', 'C. Muslims', 'D. Christians'],
      answer: 'C. Muslims',
      diff: 'easy',
    },
    {
      q: 'The British made which language the official language in 1835?',
      options: ['A. Urdu', 'B. Persian', 'C. Arabic', 'D. English'],
      answer: 'D. English',
      diff: 'easy',
    },
    {
      q: 'Sir Syed Ahmed Khan believed that regeneration of Muslims required:',
      options: ['A. Political agitation', 'B. Modern education', 'C. Religious rituals only', 'D. Boycott of British'],
      answer: 'B. Modern education',
      diff: 'easy',
    },
    {
      q: 'Which of the following was NOT an objective of Sir Syed Ahmed Khan?',
      options: ['A. Mutual understanding with British', 'B. Learn Western education', 'C. Join agitation politics', 'D. Abstain from politics'],
      answer: 'C. Join agitation politics',
      diff: 'medium',
    },
    {
      q: 'The first school established by Sir Syed Ahmed Khan was at:',
      options: ['A. Aligarh', 'B. Muradabad', 'C. Gazipur', 'D. Delhi'],
      answer: 'B. Muradabad',
      diff: 'medium',
    },
    {
      q: 'The Scientific Society was established at Aligarh in:',
      options: ['A. 1859', 'B. 1864', 'C. 1866', 'D. 1870'],
      answer: 'B. 1864',
      diff: 'medium',
    },
    {
      q: 'The Mohammedan Anglo-Oriental (MAO) School was established in:',
      options: ['A. 1864', 'B. 1870', 'C. 1875', 'D. 1877'],
      answer: 'C. 1875',
      diff: 'medium',
    },
    {
      q: 'MAO School was raised to college level in which year?',
      options: ['A. 1875', 'B. 1877', 'C. 1886', 'D. 1920'],
      answer: 'B. 1877',
      diff: 'medium',
    },
    {
      q: 'Aligarh Muslim University was established in:',
      options: ['A. 1877', 'B. 1886', 'C. 1906', 'D. 1920'],
      answer: 'D. 1920',
      diff: 'medium',
    },
    {
      q: 'The Muhammadan Educational Conference was founded in:',
      options: ['A. 1875', 'B. 1877', 'C. 1886', 'D. 1906'],
      answer: 'C. 1886',
      diff: 'medium',
    },
    {
      q: 'The Muhammadan Educational Conference later became the forerunner of:',
      options: ['A. Indian National Congress', 'B. All India Muslim League', 'C. Khilafat Committee', 'D. Aligarh University'],
      answer: 'B. All India Muslim League',
      diff: 'easy',
    },
    {
      q: 'Which magazine was written by Sir Syed to criticize conservative Muslim lifestyle?',
      options: ['A. Aligarh Institute Gazette', 'B. Tahzib-ul-Akhlaq', 'C. Risala Asbab-i-Baghawat-i-Hind', 'D. Khutbat-i-Ahmadiya'],
      answer: 'B. Tahzib-ul-Akhlaq',
      diff: 'medium',
    },
    {
      q: 'In his book "Risala Asbab-i-Baghawat-i-Hind", Sir Syed argued that:',
      options: ['A. Muslims were solely responsible for the war', 'B. Muslims were dragged into the war', 'C. British were innocent', 'D. Hindus started the war'],
      answer: 'B. Muslims were dragged into the war',
      diff: 'hard',
    },
    {
      q: 'Sir Syed Ahmed Khan advised Muslims to:',
      options: ['A. Join the Indian National Congress', 'B. Abstain from agitation politics', 'C. Reject all British institutions', 'D. Focus only on religious education'],
      answer: 'B. Abstain from agitation politics',
      diff: 'easy',
    },
    {
      q: 'Sir Syed opposed the Indian National Congress because it was:',
      options: ['A. Pro-British', 'B. Hindu-dominated', 'C. Muslim-dominated', 'D. Socialist'],
      answer: 'B. Hindu-dominated',
      diff: 'easy',
    },
    {
      q: 'The Urdu-Hindi controversy contributed to Sir Syed’s belief that:',
      options: ['A. Hindus and Muslims could live together peacefully', 'B. Both nations could no longer live together', 'C. Urdu should be replaced by Hindi', 'D. English should be the only language'],
      answer: 'B. Both nations could no longer live together',
      diff: 'medium',
    },
    {
      q: 'Which of the following was NOT an associate of Sir Syed Ahmed Khan?',
      options: ['A. Nawab Mohsin ul Mulk', 'B. Allama Iqbal', 'C. Hali', 'D. Shibli'],
      answer: 'B. Allama Iqbal',
      diff: 'easy',
    },
    {
      q: 'Sir Syed’s movement laid the foundation for:',
      options: ['A. Two-Nation Theory', 'B. Khilafat Movement', 'C. Non-Cooperation Movement', 'D. Civil Disobedience'],
      answer: 'A. Two-Nation Theory',
      diff: 'easy',
    },
    {
      q: 'The Aligarh Institute Gazette provided information on all EXCEPT:',
      options: ['A. History', 'B. Natural sciences', 'C. Physics and mathematics', 'D. Political agitation methods'],
      answer: 'D. Political agitation methods',
      diff: 'medium',
    },
    {
      q: 'Sir Syed Ahmed Khan wanted to create an atmosphere of mutual understanding between:',
      options: ['A. Hindus and Muslims', 'B. British government and Muslims', 'C. Muslims and Congress', 'D. British and Hindus'],
      answer: 'B. British government and Muslims',
      diff: 'easy',
    },
    {
      q: 'According to Sir Syed, the only way for Muslims to prosper was:',
      options: ['A. Political revolution', 'B. Modern education and jobs under new government', 'C. Religious wars', 'D. Migration to other countries'],
      answer: 'B. Modern education and jobs under new government',
      diff: 'easy',
    },
    {
      q: 'Sir Syed’s writings like "Tabyin-ul-Kalam" aimed to:',
      options: ['A. Criticize British rule', 'B. Remove misunderstandings about Islam and Christianity', 'C. Promote Persian poetry', 'D. Attack Hindu religion'],
      answer: 'B. Remove misunderstandings about Islam and Christianity',
      diff: 'hard',
    },
    {
      q: 'Which English professors contributed to building Aligarh College?',
      options: ['A. Bech, Morison, Raleigh, Arnold', 'B. Macaulay, Bentinck, Curzon', 'C. Hume, Wedderburn, Naoroji', 'D. None'],
      answer: 'A. Bech, Morison, Raleigh, Arnold',
      diff: 'hard',
    }
  ]
},

//lecture 4//


 4: {
  title: 'Sir Syed Ahmed Khan: Life, Political Vision, Hindi-Urdu Controversy & Two-Nation Theory (PAK101 Lecture 4)',
  summary: `**Key Topics Covered:**
- Sir Syed Ahmed Khan’s life and background (birth, family, education, career)
- Impact of War of Independence 1857 on Muslims and Sir Syed’s response
- Sir Syed’s political vision: British-Muslim understanding, modern education, abstention from agitation
- Hindi-Urdu controversy (1867) and its impact on Sir Syed’s thinking
- Emergence of Two-Nation Theory: Hindus and Muslims as separate nations
- Patriotic Association (1888) and Mohammedan Defense Association (1893)
- Sir Syed’s legacy as a reformer and emancipator of Indian Muslims

---

**Simple Understanding:**

**Sir Syed’s Early Life:**
👉 Born in Delhi in 1817 when Mughal Empire was collapsing.
👉 Family had connections with East India Company; maternal grandfather served under British.
👉 Interest in English came from maternal family.
👉 His grandfather called him “A Jat has been born in our family” (referring to his healthy, strong build).
👉 Father died early; Sir Syed joined British as head clerk in 1839.
👉 Became sub-judge in 1841.
👉 The War of Independence (1857) changed him entirely.

**Impact of 1857 on Muslims:**
👉 British blamed Muslims for the war.
👉 Muslims were brutally punished: executed, exiled, ousted from land and jobs.
👉 Delhi was devastated; Mughal princes shot; Bahadur Shah Zafar exiled to Rangoon.
👉 Muslims became third-class citizens; developed hatred for British culture.

**Sir Syed’s Response:**
👉 He believed British were civilized, educated, wise, and militarily superior.
👉 Muslims should adapt to modern times to avoid further disaster.
👉 He saved British lives during the war, earning their confidence.
👉 Used this relationship for Muslim betterment.
👉 Published "Loyal Mohammedans of India" and "Risala Asbab-i-Baghawat-i-Hind" to clarify Muslim position.

**Hindi-Urdu Controversy (1867):**
👉 Urdu was official language in NW provinces.
👉 Hindus in Banaras demanded replacement of Urdu with Hindi and Persian script with Devanagari.
👉 Reason: Urdu used Persian/Arabic script (Arabic being Quran’s language).
👉 Movement spread quickly; headquarters in Allahabad.
👉 Before this, Sir Syed advocated Hindu-Muslim unity (“two eyes of beautiful bride India”).
👉 After controversy, he concluded Hindus would not tolerate Muslim culture.
👉 He put forward the Two-Nation Theory: differences would increase; communities could not join wholeheartedly.

**Two Associations:**
- **Patriotic Association (1888):** To counter Congress propaganda; Muslims and Hindus joined; advocated Muslim emotions.
- **Mohammedan Defense Association (1893):** To protect political, religious, and social rights of Muslims.

**Legacy:**
👉 Sir Syed was a great reformer who made Muslims realize their lost identity.
👉 Compared to Otto von Bismarck (who had state resources), Sir Syed achieved similar without resources.
👉 According to Dr. Qalb-i-Abid: He was among very few leaders like Jinnah who guided Indian Muslims.
👉 According to Khalid Bin Sayeed: He dared to put forward views in an age that was not liberal or tolerant.

---

**Important Vocabulary:**
- Emancipator = one who frees others from bondage or oppression
- Sub-judge = judicial officer below a judge
- Trauma = deeply distressing experience
- Horrendous = extremely horrible
- Detestation = intense dislike
- Sinister aspirations = evil or harmful intentions
- Deva Nagri script = script used for Hindi language
- Patriotic Association = organization to counter Congress
- Mohammedan Defense Association = organization to protect Muslim rights

---

**Quick Revision Points:**
- Sir Syed born in Delhi (1817) during Mughal decline.
- Family had British connections; he learned English from maternal side.
- Became sub-judge (1841); 1857 war changed him.
- British brutally punished Muslims after 1857.
- Sir Syed saved British lives, gained their trust.
- He urged Muslims to adopt modern education and avoid agitation.
- Hindi-Urdu controversy (1867) made him abandon Hindu-Muslim unity idea.
- He proposed Two-Nation Theory – Hindus and Muslims are separate nations.
- Founded Patriotic Association (1888) and Mohammedan Defense Association (1893).
- His writings defended Muslims and promoted modern Islamic thought.
- He is remembered as a great reformer without state resources.`,

  questions: [
    {
      q: 'Sir Syed Ahmed Khan was born in which city?',
      options: ['A. Aligarh', 'B. Delhi', 'C. Bijnore', 'D. Muradabad'],
      answer: 'B. Delhi',
      diff: 'easy',
    },
    {
      q: 'Sir Syed Ahmed Khan was born in which year?',
      options: ['A. 1807', 'B. 1817', 'C. 1827', 'D. 1837'],
      answer: 'B. 1817',
      diff: 'easy',
    },
    {
      q: 'Sir Syed’s interest in English came from his:',
      options: ['A. Father', 'B. Maternal grandfather', 'C. School teacher', 'D. British friend'],
      answer: 'B. Maternal grandfather',
      diff: 'medium',
    },
    {
      q: 'Sir Syed’s grandfather remarked “A Jat has been born in our family” because Sir Syed was:',
      options: ['A. Very intelligent', 'B. Very healthy by birth', 'C. Very religious', 'D. Very wealthy'],
      answer: 'B. Very healthy by birth',
      diff: 'medium',
    },
    {
      q: 'Sir Syed joined the British as head clerk in which year?',
      options: ['A. 1839', 'B. 1841', 'C. 1857', 'D. 1864'],
      answer: 'A. 1839',
      diff: 'hard',
    },
    {
      q: 'Sir Syed became sub-judge in which year?',
      options: ['A. 1839', 'B. 1841', 'C. 1857', 'D. 1866'],
      answer: 'B. 1841',
      diff: 'hard',
    },
    {
      q: 'The event that changed Sir Syed entirely was:',
      options: ['A. Death of his father', 'B. Death of his brother', 'C. The War of Independence 1857', 'D. Establishment of Congress'],
      answer: 'C. The War of Independence 1857',
      diff: 'easy',
    },
    {
      q: 'After 1857, the British subjected Muslims to:',
      options: ['A. Rewards and honors', 'B. Ruthless punishment and merciless revenge', 'C. Equal rights', 'D. Full political participation'],
      answer: 'B. Ruthless punishment and merciless revenge',
      diff: 'easy',
    },
    {
      q: 'Who was exiled to Rangoon after the 1857 war?',
      options: ['A. Sir Syed Ahmed Khan', 'B. Bahadur Shah Zafar', 'C. Nawab Mohsin ul Mulk', 'D. Hali'],
      answer: 'B. Bahadur Shah Zafar',
      diff: 'easy',
    },
    {
      q: 'How many Mughal princes were shot by Lt. Hodson?',
      options: ['A. 2', 'B. 3', 'C. 4', 'D. 5'],
      answer: 'B. 3',
      diff: 'hard',
    },
    {
      q: 'Sir Syed believed that the British were a:',
      options: ['A. Barbaric nation', 'B. Civilized, educated, wise, and disciplined nation', 'C. Weak nation', 'D. Corrupt nation'],
      answer: 'B. Civilized, educated, wise, and disciplined nation',
      diff: 'medium',
    },
    {
      q: 'Sir Syed published “Loyal Mohammedans of India” to:',
      options: ['A. Criticize the British', 'B. Help both nations redress grievances', 'C. Promote Urdu language', 'D. Oppose Congress'],
      answer: 'B. Help both nations redress grievances',
      diff: 'medium',
    },
    {
      q: 'The Indian National Congress was founded in which year?',
      options: ['A. 1885', 'B. 1886', 'C. 1888', 'D. 1893'],
      answer: 'A. 1885',
      diff: 'easy',
    },
    {
      q: 'Sir Syed warned Muslims against the Congress because it was:',
      options: ['A. Pro-British', 'B. Hindu-dominated with sinister aspirations', 'C. Muslim-dominated', 'D. Socialist'],
      answer: 'B. Hindu-dominated with sinister aspirations',
      diff: 'easy',
    },
    {
      q: 'The Hindi-Urdu controversy started in which year?',
      options: ['A. 1857', 'B. 1867', 'C. 1885', 'D. 1888'],
      answer: 'B. 1867',
      diff: 'easy',
    },
    {
      q: 'The movement to replace Urdu with Hindi started in which city?',
      options: ['A. Aligarh', 'B. Banaras', 'C. Delhi', 'D. Lucknow'],
      answer: 'B. Banaras',
      diff: 'easy',
    },
    {
      q: 'Hindus wanted to replace Urdu with Hindi because:',
      options: ['A. Urdu was difficult', 'B. Urdu was written in Persian script similar to Arabic (Quran’s language)', 'C. Urdu was not spoken', 'D. Hindi was easier'],
      answer: 'B. Urdu was written in Persian script similar to Arabic (Quran’s language)',
      diff: 'medium',
    },
    {
      q: 'Before the Hindi-Urdu controversy, Sir Syed believed that:',
      options: ['A. Hindus and Muslims are two nations', 'B. Two nations are like two eyes of the beautiful bride India', 'C. Muslims should separate', 'D. Urdu should be abolished'],
      answer: 'B. Two nations are like two eyes of the beautiful bride India',
      diff: 'medium',
    },
    {
      q: 'After the Hindi-Urdu controversy, Sir Syed put forward the:',
      options: ['A. Separate electorate demand', 'B. Two-Nation Theory', 'C. Pakistan Resolution', 'D. Lucknow Pact'],
      answer: 'B. Two-Nation Theory',
      diff: 'easy',
    },
    {
      q: 'Sir Syed predicted that differences between Hindus and Muslims would:',
      options: ['A. Decrease with time', 'B. Increase with time', 'C. Remain the same', 'D. Disappear completely'],
      answer: 'B. Increase with time',
      diff: 'easy',
    },
    {
      q: 'The Patriotic Association was founded by Sir Syed in which year?',
      options: ['A. 1885', 'B. 1886', 'C. 1888', 'D. 1893'],
      answer: 'C. 1888',
      diff: 'medium',
    },
    {
      q: 'The main purpose of the Patriotic Association was to:',
      options: ['A. Promote Urdu', 'B. Meet the propaganda of the Congress', 'C. Fight the British', 'D. Establish a university'],
      answer: 'B. Meet the propaganda of the Congress',
      diff: 'medium',
    },
    {
      q: 'The Mohammedan Defense Association was founded in:',
      options: ['A. 1888', 'B. 1890', 'C. 1893', 'D. 1906'],
      answer: 'C. 1893',
      diff: 'hard',
    },
    {
      q: 'The Mohammedan Defense Association aimed to protect:',
      options: ['A. Only political rights', 'B. Political, religious, and social rights of Muslims', 'C. Only religious rights', 'D. British interests'],
      answer: 'B. Political, religious, and social rights of Muslims',
      diff: 'medium',
    },
    {
      q: 'Sir Syed Ahmed Khan died on:',
      options: ['A. March 27, 1898', 'B. March 27, 1899', 'C. March 27, 1900', 'D. March 27, 1901'],
      answer: 'A. March 27, 1898',
      diff: 'medium',
    },
    {
      q: 'According to Dr. Qalb-i-Abid, Sir Syed was among very few leaders who:',
      options: ['A. Opposed the British', 'B. Made tremendous contribution in guiding the destinies of Indian Muslims', 'C. Wrote poetry', 'D. Founded Congress'],
      answer: 'B. Made tremendous contribution in guiding the destinies of Indian Muslims',
      diff: 'medium',
    },
    {
      q: 'Otto von Bismarck is compared to Sir Syed because:',
      options: ['A. Both were politicians', 'B. Both served their nations with government resources, but Sir Syed did without resources', 'C. Both were poets', 'D. Both were British'],
      answer: 'B. Both served their nations with government resources, but Sir Syed did without resources',
      diff: 'hard',
    },
    {
      q: 'According to Khalid Bin Sayeed, Sir Syed put forward daring views in an age that was:',
      options: ['A. Very liberal', 'B. By no means liberal or tolerant', 'C. Very democratic', 'D. Pro-Muslim'],
      answer: 'B. By no means liberal or tolerant',
      diff: 'medium',
    }
  ]
},


// lecture 5//


 5: {
  title: 'From 1857 to Lucknow Pact: Political Awakening of Muslims (PAK101 Lecture 5)',
  summary: `**Key Topics Covered:**
- Decline after 1857 Uprising and revival efforts by Sir Syed and colleagues
- Removal of Muslim-British misunderstandings; educational movement
- Hindi-Urdu controversy and Hindu revivalist movements
- Formation of Indian National Congress (1885) – Muslims warned against it
- Partition of Bengal (1905) and its annulment (1911)
- Simla Deputation (1906): first systematic Muslim political demands
- Formation of All India Muslim League (1906) – goals and evolution
- Change in Muslim League goals (1913): self-government under British Crown
- Lucknow Pact (1916): Hindu-Muslim unity, separate electorate, one-third seats
- Montagu Announcement (August 20, 1917): responsible government, Indian association

---

**Simple Understanding:**

**Period 1857-1918 – Foundation of Major Changes:**
👉 This period set the foundation for later political and constitutional changes in British India.

**Key Developments:**
1. **After 1857:** Muslims were persecuted; Sir Syed and colleagues worked for revival.
2. **Educational movement:** Modern knowledge and English essential for Muslims.
3. **Hindi-Urdu controversy (1867):** Exposed Hindu hatred towards Muslim culture.
4. **Congress (1885):** Hindus tried to absorb Muslims into Hinduism; Muslims could not afford agitation politics.
5. **Hindu revivalist movements:** Targeted Muslims, widening the gulf between nations.

**Partition of Bengal (1905):**
👉 Bengal was 189,000 sq miles with 80 million people.
👉 Partition was imperative for administrative reasons.
👉 East Bengal became Muslim majority (13M out of 31M); West Bengal Hindu majority.
👉 Muslims supported partition as opportunity for progress.
👉 Hindus reacted furiously: "division of motherland" – started agitation, violence, boycott.
👉 Congress joined anti-partition movement.
👉 **Annulment:** December 12, 1911 – British revoked partition to avoid trouble during King George V’s visit.
👉 Muslims were deeply disappointed.

**Simla Deputation (1906):**
👉 First systematic attempt by Muslims to present demands to British.
👉 35 Muslim leaders from all over India – most representative delegation.
👉 Led by Sir Agha Khan; Nawab Mohsin ul Malik as secretary.
👉 Met Viceroy Lord Minto in Simla.

**Demands presented:**
- Representation more than population (due to historical importance)
- Separate electorate
- Reserved seats in government jobs
- Special share in municipal boards, university senates
- Muslim representation in Viceroy’s Executive Council
- Muslim University at Aligarh

👉 Viceroy was sympathetic.

**Formation of All India Muslim League (1906):**
👉 After Simla Deputation success, Muslims needed organized platform.
👉 Meeting after Mohammedan Educational Conference in Dhaka.
👉 Nawab Salimullah proposed Muslim League; seconded by Hakim Ajmal Khan and Maulana Zafar Ali Khan.
👉 Constitution approved at Karachi session (Dec 1907).
👉 Sir Agha Khan elected first president (March 1908, Aligarh).
👉 London branch (May 1908) by Syed Ameer Ali – countered Hindu conspiracies.

**Original Goals of Muslim League:**
1. Protect and promote political rights and interests of Muslims.
2. Cooperate with other communities without prejudice to above goal.
3. Foster loyalty towards British government.

**Change in Goals (1913):**
👉 Events: annulment of Bengal partition, Western aggression on Muslim countries (Balkan wars, Libya-Italy), demolition of mosque in Kawnpur (1913) weakened Muslim faith in British.
👉 New goals:
   - Self-government under British Crown (considering Indian conditions)
   - Good relations with other communities; cooperate with any party working for similar goals.
👉 This brought Muslim League and Congress closer.
👉 Quaid-e-Azam Jinnah joined Muslim League in 1913.

**Lucknow Pact (1916):**
👉 Product of Hindu-Muslim unity envisaged by Jinnah.
👉 ML and Congress met separately in Bombay (Dec 1915); set up committees.
👉 Joint meeting at Lucknow (1916) approved constitutional proposals.

**Key Provisions:**
- One-third seats for Muslims in Imperial Legislative Council
- Separate electorate
- Half members of Executive Council elected by Imperial Legislative Council
- Commissioned ranks for Indians in army
- Expansion of Provincial Legislative Councils
- Half members of Governor’s Executive Council elected by Provincial Council
- Weightage to minorities in provinces

**Muslim Gains:**
- Separate electorate
- One-third Muslim seats in Central Legislature
- Unofficial bill opposed by ¾ of a community cannot be passed

**Montagu Announcement (August 20, 1917):**
👉 Secretary of State Montagu promised:
   1. Greater association of Indians in all branches of government
   2. Responsible government
   3. Induction of Indians in commissioned ranks

**Conclusion:**
👉 Muslims confirmed their identity, organized political party, gained recognition from Hindus as a separate nation, and British accepted their political role.

---

**Important Vocabulary:**
- Revival = bringing back to life or prominence
- Persecuted = subjected to hostility and ill-treatment
- Hindu revivalist movements = movements to revive Hinduism, often targeting Muslims
- Partition = division of a region into separate parts
- Annulment = official cancellation
- Simla Deputation = 1906 Muslim delegation to Viceroy
- Separate electorate = Muslims vote for their own representatives
- Weightage = extra representation beyond population share
- Responsible government = government accountable to elected legislature

---

**Quick Revision Points:**
- 1857-1918 period laid foundation for later constitutional changes.
- Sir Syed revived Muslims through education and British understanding.
- Hindi-Urdu controversy (1867) exposed Hindu-Muslim divide.
- Congress (1885) was Hindu-dominated; Muslims warned against it.
- Partition of Bengal (1905) – Muslims happy, Hindus agitated; annulled 1911.
- Simla Deputation (1906) – first systematic Muslim political demands (separate electorate).
- Muslim League founded 1906 at Dhaka; constitution 1907; president Agha Khan 1908.
- Original goals: protect Muslim rights, cooperate with others, loyalty to British.
- 1913 goal change: self-government under British Crown.
- Lucknow Pact (1916) – Congress accepted separate electorate and 1/3 Muslim seats.
- Montagu announcement (1917) promised responsible government.
- Muslims emerged as a recognized political nation.`,

  questions: [
    {
      q: 'The period from 1857 to 1918 is crucial because it:',
      options: ['A. Saw the establishment of Pakistan', 'B. Set the foundation for later major political and constitutional changes', 'C. Ended British rule', 'D. Started the War of Independence'],
      answer: 'B. Set the foundation for later major political and constitutional changes',
      diff: 'easy',
    },
    {
      q: 'After the War of Independence 1857, the British held which community responsible?',
      options: ['A. Hindus', 'B. Muslims', 'C. Sikhs', 'D. Christians'],
      answer: 'B. Muslims',
      diff: 'easy',
    },
    {
      q: 'Which controversy exposed the hatred and enmity of Hindus towards Muslims?',
      options: ['A. Partition of Bengal', 'B. Hindi-Urdu Controversy', 'C. Lucknow Pact', 'D. Simla Deputation'],
      answer: 'B. Hindi-Urdu Controversy',
      diff: 'easy',
    },
    {
      q: 'The Indian National Congress was formed in which year?',
      options: ['A. 1885', 'B. 1906', 'C. 1913', 'D. 1916'],
      answer: 'A. 1885',
      diff: 'easy',
    },
    {
      q: 'Muslims could not afford the politics of agitation because:',
      options: ['A. They were strong', 'B. They were still recovering from past gaps', 'C. British supported them', 'D. Hindus helped them'],
      answer: 'B. They were still recovering from past gaps',
      diff: 'medium',
    },
    {
      q: 'The area of undivided Bengal was approximately:',
      options: ['A. 100,000 sq miles with 50 million people', 'B. 189,000 sq miles with 80 million people', 'C. 250,000 sq miles with 100 million people', 'D. 150,000 sq miles with 60 million people'],
      answer: 'B. 189,000 sq miles with 80 million people',
      diff: 'hard',
    },
    {
      q: 'The Partition of Bengal was enforced by which Viceroy?',
      options: ['A. Lord Minto', 'B. Lord Curzon', 'C. Lord Mountbatten', 'D. Lord Canning'],
      answer: 'B. Lord Curzon',
      diff: 'easy',
    },
    {
      q: 'After partition, East Bengal became a province with:',
      options: ['A. Hindu majority', 'B. Muslim majority', 'C. Equal population', 'D. Sikh majority'],
      answer: 'B. Muslim majority',
      diff: 'easy',
    },
    {
      q: 'Muslims supported the Partition of Bengal because:',
      options: ['A. It gave them complete independence', 'B. It was an opportunity for compensation and progress', 'C. Hindus demanded it', 'D. British forced them'],
      answer: 'B. It was an opportunity for compensation and progress',
      diff: 'medium',
    },
    {
      q: 'The Partition of Bengal was annulled on:',
      options: ['A. 1905', 'B. 1911', 'C. 1913', 'D. 1916'],
      answer: 'B. 1911',
      diff: 'easy',
    },
    {
      q: 'The Simla Deputation met the Viceroy in which year?',
      options: ['A. 1905', 'B. 1906', 'C. 1907', 'D. 1908'],
      answer: 'B. 1906',
      diff: 'easy',
    },
    {
      q: 'The Simla Deputation was led by:',
      options: ['A. Sir Agha Khan', 'B. Nawab Mohsin ul Malik', 'C. Nawab Salimullah', 'D. Maulana Zafar Ali Khan'],
      answer: 'A. Sir Agha Khan',
      diff: 'easy',
    },
    {
      q: 'The secretary of the Simla Deputation was:',
      options: ['A. Sir Agha Khan', 'B. Nawab Mohsin ul Malik', 'C. Nawab Salimullah', 'D. Hakim Ajmal Khan'],
      answer: 'B. Nawab Mohsin ul Malik',
      diff: 'medium',
    },
    {
      q: 'Which of the following was NOT a demand of the Simla Deputation?',
      options: ['A. Separate electorate', 'B. One-third seats for Muslims', 'C. Muslim representation in Viceroy’s Executive Council', 'D. Muslim University at Aligarh'],
      answer: 'B. One-third seats for Muslims',
      diff: 'hard',
    },
    {
      q: 'The All India Muslim League was founded in which year and city?',
      options: ['A. 1905, Aligarh', 'B. 1906, Dhaka', 'C. 1907, Karachi', 'D. 1908, Lucknow'],
      answer: 'B. 1906, Dhaka',
      diff: 'easy',
    },
    {
      q: 'Who proposed the formation of the Muslim League?',
      options: ['A. Sir Agha Khan', 'B. Nawab Salimullah', 'C. Wiqar-ul-Mulk', 'D. Maulana Zafar Ali Khan'],
      answer: 'B. Nawab Salimullah',
      diff: 'medium',
    },
    {
      q: 'The constitution of the Muslim League was approved in which session?',
      options: ['A. Dhaka 1906', 'B. Karachi 1907', 'C. Aligarh 1908', 'D. Lucknow 1916'],
      answer: 'B. Karachi 1907',
      diff: 'hard',
    },
    {
      q: 'The first president of the All India Muslim League was:',
      options: ['A. Nawab Salimullah', 'B. Sir Agha Khan', 'C. Wiqar-ul-Mulk', 'D. Maulana Muhammad Ali Jouhar'],
      answer: 'B. Sir Agha Khan',
      diff: 'medium',
    },
    {
      q: 'Who wrote the constitution of the Muslim League?',
      options: ['A. Sir Syed Ahmed Khan', 'B. Maulana Muhammad Ali Jouhar', 'C. Quaid-e-Azam Jinnah', 'D. Allama Iqbal'],
      answer: 'B. Maulana Muhammad Ali Jouhar',
      diff: 'hard',
    },
    {
      q: 'The London branch of the Muslim League was organized by:',
      options: ['A. Sir Agha Khan', 'B. Syed Ameer Ali', 'C. Nawab Mohsin ul Mulk', 'D. Hakim Ajmal Khan'],
      answer: 'B. Syed Ameer Ali',
      diff: 'hard',
    },
    {
      q: 'Which event led to the change in Muslim League’s goals in 1913?',
      options: ['A. Annulment of Bengal partition', 'B. Balkan wars and Libya-Italy war', 'C. Demolition of mosque in Kawnpur', 'D. All of the above'],
      answer: 'D. All of the above',
      diff: 'medium',
    },
    {
      q: 'In 1913, the Muslim League added the goal of:',
      options: ['A. Complete independence', 'B. Self-government under British Crown', 'C. Separate homeland', 'D. Boycott of British goods'],
      answer: 'B. Self-government under British Crown',
      diff: 'medium',
    },
    {
      q: 'Quaid-e-Azam Jinnah joined the Muslim League in which year?',
      options: ['A. 1906', 'B. 1913', 'C. 1916', 'D. 1920'],
      answer: 'B. 1913',
      diff: 'easy',
    },
    {
      q: 'The Lucknow Pact was signed in which year?',
      options: ['A. 1913', 'B. 1915', 'C. 1916', 'D. 1917'],
      answer: 'C. 1916',
      diff: 'easy',
    },
    {
      q: 'Under the Lucknow Pact, Muslims were granted what percentage of seats in the Imperial Legislative Council?',
      options: ['A. One-fourth', 'B. One-third', 'C. One-half', 'D. Two-thirds'],
      answer: 'B. One-third',
      diff: 'easy',
    },
    {
      q: 'Which provision of the Lucknow Pact gave Muslims veto power over unofficial bills affecting their community?',
      options: ['A. Separate electorate', 'B. One-third seats', 'C. Bill opposed by 3/4 members of a community cannot be passed', 'D. Weightage to minorities'],
      answer: 'C. Bill opposed by 3/4 members of a community cannot be passed',
      diff: 'hard',
    },
    {
      q: 'The Montagu Announcement was made on:',
      options: ['A. August 20, 1916', 'B. August 20, 1917', 'C. December 12, 1911', 'D. December 30, 1906'],
      answer: 'B. August 20, 1917',
      diff: 'medium',
    },
    {
      q: 'The Montagu Announcement promised all EXCEPT:',
      options: ['A. Greater association of Indians in government', 'B. Responsible government', 'C. Complete independence', 'D. Induction of Indians in commissioned ranks'],
      answer: 'C. Complete independence',
      diff: 'easy',
    },
    {
      q: 'The Lucknow Pact is considered significant because:',
      options: ['A. Hindus recognized Muslims as a separate nation', 'B. British accepted Pakistan demand', 'C. Muslim League merged with Congress', 'D. Partition of Bengal was reversed'],
      answer: 'A. Hindus recognized Muslims as a separate nation',
      diff: 'medium',
    },
    {
      q: 'The principal architect of the Lucknow Pact was:',
      options: ['A. Allama Iqbal', 'B. Sir Syed Ahmed Khan', 'C. Quaid-e-Azam Jinnah', 'D. Nawab Salimullah'],
      answer: 'C. Quaid-e-Azam Jinnah',
      diff: 'easy',
    }
  ]
},

// lecture 6 //


 6: {
  title: 'Khilafat Movement (1919-1924): Religious Mobilization, Non-Cooperation, and Aftermath (PAK101 Lecture 6)',
  summary: `**Key Topics Covered:**
- Background: Turkey sided with Germany in WWI; Indian Muslims concerned about Ottoman Caliphate
- Goals: Ottoman Khilafat intact, territorial solidarity of Turkey, holy places not given to non-Muslims
- Role of Muslim journalism: Zamindar (Zafar Ali Khan), Comrade/Hamdard (Maulana Muhammad Ali Jauhar), Al-Hilal (Maulana Abul Kalam Azad)
- Formation of All India Khilafat Committee (Bombay, July 1919)
- First Khilafat Conference (Delhi, Nov 1919) – Congress participation (Gandhi, Nehru)
- Rowlett Act (1919): black law – Jinnah resigned from Central Legislature
- Jallianwala Bagh Incident (April 1919): General Duyer ordered firing; 379 died
- Non-Cooperation Movement (May 1920): return titles, boycott courts/education, resign jobs, refuse taxes
- Hijrat Movement (1920-21): India declared Darul Harab; mass migration to Afghanistan (failed)
- Moplah Revolt (August 1921): Muslim peasants vs Hindu landlords in Malabar; thousands killed
- Chori Chora Incident (Feb 1922): police station set on fire; Gandhi called off movement
- Developments in Turkey: Mustafa Kemal Ataturk restricted Sultan’s powers; Khilafat abolished (March 1924)
- Conclusions: religion as mobilizing force; Hindu-Muslim unity short-lived; Muslim League reactivated

---

**Simple Understanding:**

**What was the Khilafat Movement?**
👉 A religio-political movement by Indian Muslims to preserve the Ottoman Caliphate.
👉 Turkey (Ottoman Empire) sided with Germany in WWI and lost.
👉 Muslims feared loss of control over holy places and the Caliphate.

**Goals:**
1. Keep Ottoman Khilafat intact.
2. Preserve territorial solidarity of Turkey.
3. Holy places not given to non-Muslims.

**Role of Press:**
👉 Zamindar (Zafar Ali Khan)
👉 Comrade and Hamdard (Maulana Muhammad Ali Jauhar)
👉 Al-Hilal (Maulana Abul Kalam Azad)

**Key Events:**

**Rowlett Act (1919):**
👉 "Black law" – government could arrest without legal assistance or appeal.
👉 Jinnah resigned from Central Legislature in protest.

**Jallianwala Bagh (April 1919):**
👉 Indians gathered to protest British policies.
👉 General Duyer ordered troops to fire.
👉 379 killed, thousands injured.
👉 One of the greatest tragedies in Indian history.

**Non-Cooperation Movement (May 1920):**
👉 Launched by Khilafat Committee with Congress.
👉 Activities: return titles, boycott courts/education, resign jobs, refuse taxes.

**Hijrat Movement (1920-21):**
👉 Ulama declared India "Darul Harab" (place where Muslims cannot practice religion freely).
👉 Muslims migrated to Afghanistan (Darul Islam).
👉 Initially welcomed, then border closed; many died or went to Soviet Union.

**Moplah Revolt (August 1921):**
👉 Moplahs (descendants of Arab Muslims) in Malabar.
👉 Revolted against Hindu landlords who took their land.
👉 Government repression killed thousands.

**Chori Chora Incident (Feb 1922):**
👉 Congress volunteers set police station on fire; 21 policemen killed.
👉 Gandhi called off Non-Cooperation Movement.

**End of Khilafat Movement:**
👉 Mustafa Kemal Ataturk emerged as Turkish national leader.
👉 Restricted Sultan’s powers; abolished Khilafat in March 1924.
👉 Indian Muslims sent delegations but failed.

**Conclusions:**
👉 Islam is a powerful mobilizing force.
👉 Extra-territorial loyalty based on Ummah.
👉 Hindu-Muslim unity proved short-lived.
👉 Muslim League and other Muslim organizations reactivated as separate nation.

---

**Important Vocabulary:**
- Khilafat = Ottoman Caliphate
- Religio-political = combining religion and politics
- Extra-territorial attachments = loyalty to Muslims outside India
- Ummah = global Muslim community
- Rowlett Act = 1919 repressive law
- Jallianwala Bagh = Amritsar massacre site
- Non-Cooperation = refusal to cooperate with British
- Darul Harab = land where Islam cannot be practiced freely
- Darul Islam = land where Islam is practiced freely
- Moplah = descendants of Arab Muslims in Malabar
- Chori Chora = village where police station was burned

---

**Quick Revision Points:**
- Khilafat Movement (1919-1924) aimed to protect Ottoman Caliphate.
- Turkey lost WWI as German ally.
- Rowlett Act (1919) – black law; Jinnah resigned.
- Jallianwala Bagh massacre (April 1919) – 379 killed.
- Non-Cooperation started May 1920 with Congress.
- Hijrat Movement (1920-21) – mass migration to Afghanistan failed.
- Moplah Revolt (1921) – poor Muslim peasants vs Hindu landlords.
- Chori Chora (1922) – Gandhi called off movement.
- Ataturk abolished Khilafat (March 1924).
- Hindu-Muslim unity short-lived; Muslim League revived.`,

  questions: [
    {
      q: 'The Khilafat Movement was launched by Indian Muslims to protect:',
      options: ['A. British Empire', 'B. Ottoman Caliphate', 'C. Mughal Empire', 'D. Congress Party'],
      answer: 'B. Ottoman Caliphate',
      diff: 'easy',
    },
    {
      q: 'Turkey sided with which country in World War I?',
      options: ['A. Britain', 'B. France', 'C. Germany', 'D. Russia'],
      answer: 'C. Germany',
      diff: 'easy',
    },
    {
      q: 'Which of the following was NOT a goal of the Khilafat Movement?',
      options: ['A. Ottoman Khilafat kept intact', 'B. Territorial solidarity of Turkey', 'C. Holy places given to non-Muslims', 'D. Control of holy places with Muslims'],
      answer: 'C. Holy places given to non-Muslims',
      diff: 'easy',
    },
    {
      q: 'The newspaper "Zamindar" was associated with:',
      options: ['A. Maulana Abul Kalam Azad', 'B. Zafar Ali Khan', 'C. Maulana Muhammad Ali Jauhar', 'D. Maulana Shaukat Ali'],
      answer: 'B. Zafar Ali Khan',
      diff: 'medium',
    },
    {
      q: 'The newspapers "Comrade" and "Hamdard" were published by:',
      options: ['A. Zafar Ali Khan', 'B. Maulana Muhammad Ali Jauhar', 'C. Maulana Abul Kalam Azad', 'D. Maulana Shaukat Ali'],
      answer: 'B. Maulana Muhammad Ali Jauhar',
      diff: 'medium',
    },
    {
      q: 'The newspaper "Al-Hilal" was published by:',
      options: ['A. Zafar Ali Khan', 'B. Maulana Muhammad Ali Jauhar', 'C. Maulana Abul Kalam Azad', 'D. Maulana Shaukat Ali'],
      answer: 'C. Maulana Abul Kalam Azad',
      diff: 'medium',
    },
    {
      q: 'The All India Khilafat Committee was formed in which city and year?',
      options: ['A. Delhi, 1919', 'B. Bombay, July 1919', 'C. Amritsar, 1919', 'D. Karachi, 1921'],
      answer: 'B. Bombay, July 1919',
      diff: 'hard',
    },
    {
      q: 'The first Khilafat Conference was held at:',
      options: ['A. Amritsar', 'B. Bombay', 'C. Delhi', 'D. Karachi'],
      answer: 'C. Delhi',
      diff: 'medium',
    },
    {
      q: 'Which Congress leaders participated in the first Khilafat Conference?',
      options: ['A. Jinnah and Nehru', 'B. Gandhi and Nehru', 'C. Gandhi and Jinnah', 'D. Nehru and Patel'],
      answer: 'B. Gandhi and Nehru',
      diff: 'easy',
    },
    {
      q: 'The Rowlett Act was a:',
      options: ['A. Law granting rights', 'B. Black law allowing persecution without legal assistance', 'C. Education policy', 'D. Trade agreement'],
      answer: 'B. Black law allowing persecution without legal assistance',
      diff: 'easy',
    },
    {
      q: 'Who resigned from the Central Legislature in protest against the Rowlett Act?',
      options: ['A. Gandhi', 'B. Jinnah', 'C. Nehru', 'D. Maulana Azad'],
      answer: 'B. Jinnah',
      diff: 'easy',
    },
    {
      q: 'The Jallianwala Bagh incident took place in which city and year?',
      options: ['A. Delhi, 1919', 'B. Amritsar, April 1919', 'C. Lahore, 1919', 'D. Bombay, 1920'],
      answer: 'B. Amritsar, April 1919',
      diff: 'easy',
    },
    {
      q: 'General Duyer ordered firing on a gathering at Jallianwala Bagh. Approximately how many people were killed?',
      options: ['A. 100', 'B. 200', 'C. 379', 'D. 500'],
      answer: 'C. 379',
      diff: 'medium',
    },
    {
      q: 'The Non-Cooperation Movement was launched in May 1920 by the Khilafat Committee in collaboration with:',
      options: ['A. Muslim League', 'B. Congress', 'C. British government', 'D. Hindu Mahasabha'],
      answer: 'B. Congress',
      diff: 'easy',
    },
    {
      q: 'Which of the following was NOT an activity of the Non-Cooperation Movement?',
      options: ['A. Return titles', 'B. Boycott of courts', 'C. Join military jobs', 'D. Refusal to pay taxes'],
      answer: 'C. Join military jobs',
      diff: 'easy',
    },
    {
      q: 'The Hijrat Movement involved migration of Muslims from India to:',
      options: ['A. Turkey', 'B. Iran', 'C. Afghanistan', 'D. Saudi Arabia'],
      answer: 'C. Afghanistan',
      diff: 'easy',
    },
    {
      q: 'Why did ulama declare India as "Darul Harab"?',
      options: ['A. Because Muslims were not allowed to perform religious practices freely', 'B. Because India was prosperous', 'C. Because British were good', 'D. Because Hindus were friendly'],
      answer: 'A. Because Muslims were not allowed to perform religious practices freely',
      diff: 'medium',
    },
    {
      q: 'The Moplah Revolt took place in which region?',
      options: ['A. Malabar Coast', 'B. Bengal', 'C. Punjab', 'D. Sindh'],
      answer: 'A. Malabar Coast',
      diff: 'easy',
    },
    {
      q: 'Moplahs were descendants of:',
      options: ['A. Turkish Muslims', 'B. Arab Muslims who settled before Muhammad Bin Qasim', 'C. Persian Muslims', 'D. Afghan Muslims'],
      answer: 'B. Arab Muslims who settled before Muhammad Bin Qasim',
      diff: 'hard',
    },
    {
      q: 'The Moplahs revolted against:',
      options: ['A. British only', 'B. Hindu landlords who took their land', 'C. Muslim League', 'D. Congress'],
      answer: 'B. Hindu landlords who took their land',
      diff: 'medium',
    },
    {
      q: 'The Chori Chora incident occurred in which year and led to:',
      options: ['A. 1921, intensified movement', 'B. February 1922, Gandhi called off Non-Cooperation', 'C. 1920, start of movement', 'D. 1923, end of Khilafat'],
      answer: 'B. February 1922, Gandhi called off Non-Cooperation',
      diff: 'hard',
    },
    {
      q: 'What happened at Chori Chora?',
      options: ['A. Police fired on protesters', 'B. Congress volunteers set a police station on fire; 21 policemen killed', 'C. Muslims migrated', 'D. Khilafat Committee met'],
      answer: 'B. Congress volunteers set a police station on fire; 21 policemen killed',
      diff: 'hard',
    },
    {
      q: 'Who emerged as the Turkish national leader who abolished the Khilafat?',
      options: ['A. Sultan Mehmed', 'B. Mustafa Kemal Ataturk', 'C. Enver Pasha', 'D. Kamal Pasha'],
      answer: 'B. Mustafa Kemal Ataturk',
      diff: 'easy',
    },
    {
      q: 'The Khilafat was abolished by Turkey in:',
      options: ['A. March 1922', 'B. March 1923', 'C. March 1924', 'D. March 1925'],
      answer: 'C. March 1924',
      diff: 'medium',
    },
    {
      q: 'After the Khilafat Movement ended, what happened to Hindu-Muslim unity?',
      options: ['A. It strengthened', 'B. It proved short-lived', 'C. It became permanent', 'D. It turned into an alliance'],
      answer: 'B. It proved short-lived',
      diff: 'easy',
    },
    {
      q: 'Which organization was reactivated after the Khilafat Movement?',
      options: ['A. Indian National Congress', 'B. Muslim League', 'C. Hindu Mahasabha', 'D. Khilafat Committee'],
      answer: 'B. Muslim League',
      diff: 'easy',
    },
    {
      q: 'The Khilafat Movement demonstrated that religion, especially Islam, is a:',
      options: ['A. Weak force', 'B. Mobilizing force', 'C. Dividing force only', 'D. Irrelevant factor'],
      answer: 'B. Mobilizing force',
      diff: 'easy',
    },
    {
      q: 'The term "Darul Islam" means:',
      options: ['A. Land where Islam cannot be practiced', 'B. Land where Islam is practiced freely', 'C. Land of war', 'D. Land of peace'],
      answer: 'B. Land where Islam is practiced freely',
      diff: 'medium',
    }
  ]
},

/// lecture 7//


 7: {
  title: 'Constitutional Developments (1927-1935): Delhi Proposals, Nehru Report, Jinnah’s 14 Points, Simon Commission, Round Table Conferences, Communal Award, Poona Pact, Government of India Act 1935 (PAK101 Lecture 7)',
  summary: `**Key Topics Covered:**
- Delhi Muslim Proposals (March 1927): Statuary Muslim majorities in Punjab & Bengal, Sind separation from Bombay, NWFP reforms, 1/3 seats in Central Legislature, conditional concession of separate electorate
- Split in Muslim League: Shafi League vs Jinnah League (separate electorate, Simon Commission attitude)
- Nehru Report (1928): No separate electorate, no 1/3 seats, no reservation in Punjab/Bengal – threatened Muslim interests
- Jinnah’s Fourteen Points (1929): Federal system, provincial autonomy, separate electorate, 1/3 Central seats, safeguards for Muslim culture, no amendment without constituent units’ consent
- Simon Commission (1927-1930): Arrived 1927, report 1930 – boycotted by most parties
- First Round Table Conference (1930): Jinnah, Sir Shafi, Maulana Jauhar, Zafarullah Khan – emphasized federalism, safeguards, separate electorate
- Second Round Table Conference (1931): Maulana Jauhar died; Iqbal, Jinnah, Gandhi participated – key issues: Federation & Minorities
- Communal Award (August 1932): Separate electorate for all minorities, weightage, no Muslim majorities in Punjab/Bengal, 1/3 Central seats, 1/4 services, Sind as province – Muslims unhappy
- Poona Pact (September 1932): Gandhi fasted against separate electorate for low-caste Hindus (Harijans); agreement to surrender that right, saving Gandhi’s life
- Third Round Table Conference (Nov-Dec 1932): Poorly attended; Jinnah absent (in London), Gandhi detained – no change; widened Hindu-Muslim gulf
- White Paper (March 1933): Basis for constitution – diarchy at centre, responsible governments in provinces
- Government of India Act 1935 (August 1935): Key issues unresolved – Muslim demands shifted from safeguards to complete independence (Pakistan)

---

**Simple Understanding:**

**Delhi Muslim Proposals (March 1927):**
👉 Muslim leaders met in Delhi at Quaid’s invitation.
👉 Demands: statutory Muslim majorities in Punjab & Bengal, no weightage, Sind separate from Bombay, NWFP reforms, 1/3 Central seats, 3/4 community veto on communal bills.
👉 If accepted, Muslims would give up separate electorate.
👉 Split in Muslim League: Sir Muhammad Shafi opposed Jinnah on separate electorate and Simon Commission.

**Nehru Report (1928):**
👉 Congress called All Parties Conference; 10-member committee under Motilal Nehru.
👉 Threat to Muslims: No separate electorate, no 1/3 Central seats, no reservation in Punjab/Bengal, Sind only if self-financing.
👉 Jinnah tried amendments at Calcutta conference but failed – “parting of the ways.”

**Jinnah’s 14 Points (1929):**
👉 Muslim counter-proposals:
   1. Federal system with residuary powers to provinces
   2. Provincial autonomy
   3. Separate electorate
   4. Effective minority representation (majority not reduced)
   5. 1/3 Muslim seats in Central Legislature
   6. 1/3 Muslim ministers in cabinets
   7. No boundary changes hurting Muslim majorities in Punjab/Bengal
   8. Religious freedom
   9. 3/4 community veto on laws affecting community
   10. Sind as separate province
   11. Constitutional reforms in NWFP & Balochistan
   12. Muslim representation in govt jobs
   13. Safeguards for Islamic culture, education, language, personal laws
   14. No amendment without consent of all constituent units

**Simon Commission (1927-1930):**
👉 British commission to seek Indian opinion on constitutional future.
👉 Arrived 1927; report 1930. Most parties boycotted.
👉 Proposed: federal system, two houses, abolition of diarchy, more provincial powers.

**Round Table Conferences:**
- **First (1930):** Jinnah, Sir Shafi, Maulana Jauhar, Zafarullah Khan – emphasized federalism, self-government, safeguards, separate electorate.
- **Second (1931):** Maulana Jauhar died; Iqbal, Jinnah, Gandhi – issues: Federation & Minorities.
- **Third (1932):** Poor attendance; Jinnah absent, Gandhi detained – no progress; widened Hindu-Muslim gulf.

**Communal Award (August 1932):**
👉 Prime Minister Ramsay MacDonald announced:
   - Separate electorate for all minorities
   - Weightage to minorities
   - No Muslim majorities in Punjab/Bengal (as in Lucknow Pact)
   - 1/3 Muslim seats in Central legislature
   - 1/4 Muslim representation in services
   - Sind as province
👉 Muslims unhappy.

**Poona Pact (September 1932):**
👉 Gandhi fasted against separate electorate for low-caste Hindus (Harijans).
👉 Low-caste leaders agreed to surrender separate electorate to save Gandhi’s life.

**White Paper (March 1933):**
👉 British government document: diarchy at centre, full responsible governments in provinces.
👉 Basis for Government of India Act 1935.

**Government of India Act 1935 (August 1935):**
👉 King approved in August 1935.
👉 Communal problems unresolved.
👉 Muslim demands shifted from safeguards to complete independence – Pakistan.

---

**Important Vocabulary:**
- Statuary majorities = guaranteed legislative majorities
- Weightage = extra representation beyond population share
- Separate electorate = Muslims vote for Muslim candidates only
- All Parties Conference = 1928 meeting of Indian parties
- Parting of the ways = Jinnah’s declaration after Nehru Report rejection
- Simon Commission = 1927 British constitutional commission
- Round Table Conference = three conferences (1930-32) to discuss Indian constitution
- Communal Award = 1932 minority representation scheme
- Poona Pact = 1932 agreement between caste Hindus and low-caste Hindus
- White Paper = official British policy document
- Government of India Act 1935 = last major pre-independence constitutional act

---

**Quick Revision Points:**
- Delhi Muslim Proposals (1927) offered to give up separate electorate if demands met – caused League split.
- Nehru Report (1928) rejected Muslim safeguards – Jinnah: “parting of the ways.”
- Jinnah’s 14 Points (1929) became Muslim political charter.
- Simon Commission (1927-30) boycotted; proposed federalism.
- Three Round Table Conferences (1930-32) failed to resolve Hindu-Muslim differences.
- Communal Award (Aug 1932) gave separate electorate to minorities – Muslims unhappy.
- Poona Pact (Sep 1932) saved Gandhi’s life; low-caste gave up separate electorate.
- White Paper (1933) led to Government of India Act 1935.
- Act of 1935 failed to satisfy Muslims – shifted demand to Pakistan.`,

  questions: [
    {
      q: 'The Delhi Muslim Proposals were presented in which year?',
      options: ['A. 1925', 'B. 1927', 'C. 1928', 'D. 1929'],
      answer: 'B. 1927',
      diff: 'easy',
    },
    {
      q: 'According to the Delhi Muslim Proposals, Muslims would give up separate electorate if their demands were accepted. Which of the following was a demand?',
      options: ['A. Hindu majority in Punjab', 'B. Statuary Muslim majorities in Punjab and Bengal', 'C. Abolition of separate electorate immediately', 'D. No Muslim representation in Central Legislature'],
      answer: 'B. Statuary Muslim majorities in Punjab and Bengal',
      diff: 'medium',
    },
    {
      q: 'The Delhi Muslim Proposals demanded that Sind be separated from which province?',
      options: ['A. Punjab', 'B. Bengal', 'C. Bombay', 'D. Madras'],
      answer: 'C. Bombay',
      diff: 'medium',
    },
    {
      q: 'Who opposed Jinnah on the issues of separate electorate and attitude towards Simon Commission, leading to a split in the Muslim League?',
      options: ['A. Maulana Muhammad Ali Jauhar', 'B. Sir Muhammad Shafi', 'C. Nawab Salimullah', 'D. Maulana Abul Kalam Azad'],
      answer: 'B. Sir Muhammad Shafi',
      diff: 'hard',
    },
    {
      q: 'The Nehru Report was published in which year?',
      options: ['A. 1927', 'B. 1928', 'C. 1929', 'D. 1930'],
      answer: 'B. 1928',
      diff: 'easy',
    },
    {
      q: 'Who chaired the committee that produced the Nehru Report?',
      options: ['A. Jawaharlal Nehru', 'B. Motilal Nehru', 'C. Gandhi', 'D. Vallabhbhai Patel'],
      answer: 'B. Motilal Nehru',
      diff: 'easy',
    },
    {
      q: 'Which of the following was NOT a recommendation of the Nehru Report?',
      options: ['A. No separate electorate', 'B. One-third seats for Muslims in Central Assembly', 'C. No reservation of seats for Muslims in Punjab and Bengal', 'D. Sindh to be made a province only if it can bear its expenses'],
      answer: 'B. One-third seats for Muslims in Central Assembly',
      diff: 'medium',
    },
    {
      q: 'At the All Parties Conference in Calcutta, Jinnah tried to amend the Nehru Report but failed. He remarked:',
      options: ['A. "We shall fight for Pakistan"', 'B. "It is parting of the ways"', 'C. "We accept the report"', 'D. "Long live Hindu-Muslim unity"'],
      answer: 'B. "It is parting of the ways"',
      diff: 'easy',
    },
    {
      q: 'Jinnah presented his Fourteen Points in response to the Nehru Report in which year?',
      options: ['A. 1928', 'B. 1929', 'C. 1930', 'D. 1931'],
      answer: 'B. 1929',
      diff: 'easy',
    },
    {
      q: 'According to Jinnah’s 14 Points, the form of government should be:',
      options: ['A. Unitary', 'B. Federal with residuary powers with provinces', 'C. Federal with strong centre', 'D. Dictatorial'],
      answer: 'B. Federal with residuary powers with provinces',
      diff: 'medium',
    },
    {
      q: 'One of Jinnah’s 14 Points demanded that no law shall be passed if what proportion of a community’s elected members declares it against their interests?',
      options: ['A. Two-thirds', 'B. Three-fourths', 'C. One-half', 'D. Four-fifths'],
      answer: 'B. Three-fourths',
      diff: 'hard',
    },
    {
      q: 'The Simon Commission arrived in India in which year?',
      options: ['A. 1925', 'B. 1927', 'C. 1928', 'D. 1930'],
      answer: 'B. 1927',
      diff: 'easy',
    },
    {
      q: 'The Simon Commission was boycotted by most political parties because:',
      options: ['A. It had no Indian member', 'B. It proposed partition', 'C. It supported Congress', 'D. It was led by a Muslim'],
      answer: 'A. It had no Indian member',
      diff: 'easy',
    },
    {
      q: 'The First Round Table Conference was held in which year?',
      options: ['A. 1929', 'B. 1930', 'C. 1931', 'D. 1932'],
      answer: 'B. 1930',
      diff: 'medium',
    },
    {
      q: 'Who died soon after the First Round Table Conference?',
      options: ['A. Allama Iqbal', 'B. Maulana Muhammad Ali Jauhar', 'C. Quaid-e-Azam Jinnah', 'D. Sir Muhammad Shafi'],
      answer: 'B. Maulana Muhammad Ali Jauhar',
      diff: 'hard',
    },
    {
      q: 'Gandhi participated in which Round Table Conference?',
      options: ['A. First', 'B. Second', 'C. Third', 'D. None'],
      answer: 'B. Second',
      diff: 'easy',
    },
    {
      q: 'The Communal Award was announced by which British Prime Minister?',
      options: ['A. Winston Churchill', 'B. Ramsay MacDonald', 'C. Clement Attlee', 'D. David Lloyd George'],
      answer: 'B. Ramsay MacDonald',
      diff: 'medium',
    },
    {
      q: 'The Communal Award was announced in which month and year?',
      options: ['A. August 1931', 'B. August 1932', 'C. September 1932', 'D. March 1933'],
      answer: 'B. August 1932',
      diff: 'hard',
    },
    {
      q: 'Which of the following was NOT part of the Communal Award?',
      options: ['A. Separate electorate for all minorities', 'B. One-third representation for Muslims in Central legislature', 'C. Muslim majorities in Punjab and Bengal', 'D. Sind to be made a province'],
      answer: 'C. Muslim majorities in Punjab and Bengal',
      diff: 'medium',
    },
    {
      q: 'The Poona Pact was signed in September 1932 between caste Hindus and low-caste Hindus. It was prompted by Gandhi’s:',
      options: ['A. Hunger strike', 'B. Fast unto death', 'C. Civil disobedience', 'D. Non-cooperation'],
      answer: 'B. Fast unto death',
      diff: 'easy',
    },
    {
      q: 'What did the low-caste Hindus agree to in the Poona Pact?',
      options: ['A. Demand for separate electorate', 'B. Surrender separate electorate to save Gandhi’s life', 'C. Join Muslim League', 'D. Support British rule'],
      answer: 'B. Surrender separate electorate to save Gandhi’s life',
      diff: 'medium',
    },
    {
      q: 'The Third Round Table Conference was held in which year?',
      options: ['A. 1931', 'B. 1932', 'C. 1933', 'D. 1934'],
      answer: 'B. 1932',
      diff: 'hard',
    },
    {
      q: 'Why did Quaid-e-Azam not attend the Third Round Table Conference despite living in London?',
      options: ['A. He was ill', 'B. He was disappointed with previous conferences', 'C. He was busy with legal practice', 'D. He had resigned from politics'],
      answer: 'B. He was disappointed with previous conferences',
      diff: 'hard',
    },
    {
      q: 'The White Paper on Constitutional Proposals was issued in:',
      options: ['A. March 1932', 'B. March 1933', 'C. March 1934', 'D. March 1935'],
      answer: 'B. March 1933',
      diff: 'medium',
    },
    {
      q: 'The Government of India Act 1935 was approved by the King in:',
      options: ['A. August 1934', 'B. August 1935', 'C. August 1936', 'D. August 1937'],
      answer: 'B. August 1935',
      diff: 'easy',
    },
    {
      q: 'What was the major long-term consequence of the failure to settle communal issues by the Government of India Act 1935?',
      options: ['A. Hindu-Muslim unity strengthened', 'B. Muslim demands shifted from safeguards to complete independence (Pakistan)', 'C. British stayed permanently', 'D. Congress accepted separate electorate'],
      answer: 'B. Muslim demands shifted from safeguards to complete independence (Pakistan)',
      diff: 'medium',
    },
    {
      q: 'According to the Nehru Report, Sindh could become a province only if:',
      options: ['A. Muslims demanded it', 'B. It could bear its own expenses', 'C. British approved', 'D. Congress agreed'],
      answer: 'B. It could bear its own expenses',
      diff: 'hard',
    },
    {
      q: 'Which of Jinnah’s 14 Points demanded that no constitutional amendment shall be passed unless all constituent units of the federation agree?',
      options: ['A. Point 1', 'B. Point 5', 'C. Point 10', 'D. Point 14'],
      answer: 'D. Point 14',
      diff: 'hard',
    }
  ]
},

// lecture 8//


  8: {
  title: 'Allama Iqbal’s Allahabad Address (1930): Vision of a Separate Muslim State (PAK101 Lecture 8)',
  summary: `**Key Topics Covered:**
- Background: Hindu-Muslim question, separate identity of Muslims, Two-Nation Theory vs territorial nationalism
- Iqbal’s early life: Europe (1905-08) crystallized his thoughts; returned 1908; worked on Muslim decline
- Positions: Title of Sir (1922); Member Punjab Legislative Council (1927-1930)
- Lectures on Islam at Aligarh, Hyderabad, Madras (1928-29)
- Allahabad Address (December 1930): Presidential address at Muslim League session
- Key ideas: Rejection of European secularism (religion not just personal affair); Islam as ethical, social, political, legal framework; a living dynamic force
- Muslims have distinct religious individuality; fear of Hindu domination
- India is a continent of diverse peoples; no political arrangement without recognizing this
- Territorial redistribution on basis of religion is need of time
- Punjab, NWFP, Sind, Balochistan should form a consolidated North-Western Muslim state (self-government within or without British Empire) – final destiny of Muslims of NW India
- Importance: Forceful logical presentation of Muslim case; territorial adjustments lead to concept of Muslim homeland
- Letters to Jinnah (May 1936 – Nov 1937): separate federation of Muslim provinces; self-determination for NW India and Bengal; Shariah development impossible without free Muslim state

---

**Simple Understanding:**

**Allama Iqbal – A Revolutionary Thinker:**
👉 Muslim intellectual who left deep impact on history.
👉 Inspired Muslims of Sub-Continent and beyond.
👉 Infused identity and moving spirit in Indian Muslims.
👉 Presented framework for political future and goal of Ummah.

**Background:**
👉 After 1857, Hindu-Muslim question became crucial.
👉 Muslims insisted on separate identity (different culture, civilization, interests).
👉 Hindus and British believed in territorial nationalism (nation based on land, not religion).
👉 Hindus wanted to absorb Muslims into majority.
👉 By 1930, Muslims developed political demands.

**Iqbal’s Preparation:**
👉 Europe (1905-08) crystallized his thoughts.
👉 Returned 1908; studied roots of Muslim decline.
👉 Emphasized following Prophet Muhammad (PBUH) as ideal leader.
👉 Prominent positions: Sir (1922), Punjab Legislative Council (1927-30).
👉 Lectures on Islam at Aligarh, Hyderabad, Madras (1928-29).

**Allahabad Address (December 1930):**
👉 Presidential address at Muslim League session.

**Core Arguments:**
1. European duality of religion and state does NOT apply to India.
2. Religion is not a totally personal affair – it offers ethical order, socio-political structure, legal framework, culture, civilization.
3. Islam is a living, dynamic force that turned scattered people into organized force.
4. Muslims will not submerge their religious individuality; they fear Hindu domination.
5. India is a continent of diverse peoples – no political arrangement without recognizing this.
6. If Muslims can develop according to Islamic civilization, they will sacrifice for India.
7. Federalism cannot succeed without recognizing Muslim national identity.
8. Territorial redistribution on basis of religion is need of time.
9. **Punjab, NWFP, Sind, Balochistan should be amalgamated into a single state – self-government within British Empire or without – final destiny of Muslims of NW India.**

**Importance of the Address:**
👉 Forceful, logical presentation of Muslim case.
👉 Muslims as political entity, not just minority.
👉 Territorial adjustments led to concept of Muslim homeland.

**Letters to Jinnah (May 1936 – Nov 1937):**
👉 Separate federation of Muslim provinces.
👉 NW India and Bengal entitled to self-determination.
👉 Shariah development impossible without free Muslim state/states.
👉 In difficult times, Islam has saved Muslims.
👉 Faith, culture, historical traditions more important than patriotism.

---

**Important Vocabulary:**
- Territorial nationalism = nation defined by territory, not religion
- Secularism = separation of religion from state
- Dynamic force = active, changing, powerful influence
- Ethical order = moral system
- Socio-political structure = social and political organization
- Amalgamated = combined into one
- Self-determination = right to choose own government
- Ummah = global Muslim community
- Shariah = Islamic law
- Ijtehad = independent legal reasoning

---

**Quick Revision Points:**
- Iqbal inspired Muslims through his vision and poetry.
- Allahabad Address (Dec 1930) demanded a separate Muslim state in NW India.
- Rejected European secularism – religion is not personal only.
- Islam is a complete code of life and dynamic force.
- Muslims have separate identity; fear Hindu domination.
- India is diverse – territorial redistribution needed.
- Proposed state: Punjab, NWFP, Sind, Balochistan.
- Later letters to Jinnah (1936-37) reinforced demand.
- Shariah needs a free Muslim state to develop.
- Faith and culture > patriotism.`,

  questions: [
    {
      q: 'Allama Iqbal delivered his famous Allahabad Address in which year?',
      options: ['A. 1928', 'B. 1929', 'C. 1930', 'D. 1931'],
      answer: 'C. 1930',
      diff: 'easy',
    },
    {
      q: 'The Allahabad Address was delivered at the annual session of which organization?',
      options: ['A. Indian National Congress', 'B. All India Muslim League', 'C. Khilafat Committee', 'D. Aligarh University'],
      answer: 'B. All India Muslim League',
      diff: 'easy',
    },
    {
      q: 'Iqbal spent time in Europe from 1905 to 1908. This helped him to:',
      options: ['A. Forget Islam', 'B. Crystallize his thoughts', 'C. Become a British citizen', 'D. Write poetry in English only'],
      answer: 'B. Crystallize his thoughts',
      diff: 'medium',
    },
    {
      q: 'Iqbal returned to India in which year?',
      options: ['A. 1905', 'B. 1906', 'C. 1907', 'D. 1908'],
      answer: 'D. 1908',
      diff: 'medium',
    },
    {
      q: 'The title of "Sir" was conferred upon Allama Iqbal in which year?',
      options: ['A. 1920', 'B. 1922', 'C. 1925', 'D. 1930'],
      answer: 'B. 1922',
      diff: 'hard',
    },
    {
      q: 'Iqbal served as a member of which legislative body from 1927 to 1930?',
      options: ['A. Central Legislative Assembly', 'B. Punjab Legislative Council', 'C. Bengal Legislative Council', 'D. Bombay Legislative Council'],
      answer: 'B. Punjab Legislative Council',
      diff: 'hard',
    },
    {
      q: 'Iqbal delivered lectures on Islam at which three places in 1928-29?',
      options: ['A. Delhi, Lahore, Karachi', 'B. Aligarh, Hyderabad, Madras', 'C. Bombay, Calcutta, Dhaka', 'D. Allahabad, Lucknow, Amritsar'],
      answer: 'B. Aligarh, Hyderabad, Madras',
      diff: 'hard',
    },
    {
      q: 'In his Allahabad Address, Iqbal rejected which European concept?',
      options: ['A. Democracy', 'B. Duality of religion and state', 'C. Capitalism', 'D. Socialism'],
      answer: 'B. Duality of religion and state',
      diff: 'medium',
    },
    {
      q: 'According to Iqbal, in the Indian context, religion is:',
      options: ['A. A totally personal affair', 'B. Not a totally personal affair – it offers ethical, social, political framework', 'C. Only about worship', 'D. Irrelevant to politics'],
      answer: 'B. Not a totally personal affair – it offers ethical, social, political framework',
      diff: 'medium',
    },
    {
      q: 'Iqbal described Islam as a:',
      options: ['A. Static religion', 'B. Living, dynamic force', 'C. Mere set of rituals', 'D. Western ideology'],
      answer: 'B. Living, dynamic force',
      diff: 'easy',
    },
    {
      q: 'Iqbal believed that Islam turned scattered and disoriented people into:',
      options: ['A. A disorganized crowd', 'B. An organized force', 'C. A business community', 'D. A political party'],
      answer: 'B. An organized force',
      diff: 'easy',
    },
    {
      q: 'According to Iqbal, Muslims fear from Hindus:',
      options: ['A. Economic competition', 'B. Domination', 'C. Cultural exchange', 'D. Trade'],
      answer: 'B. Domination',
      diff: 'easy',
    },
    {
      q: 'Iqbal described India as:',
      options: ['A. A nation', 'B. A continent inhabited by diverse people', 'C. A Hindu state', 'D. A British colony only'],
      answer: 'B. A continent inhabited by diverse people',
      diff: 'easy',
    },
    {
      q: 'Iqbal argued that federalism cannot succeed without recognizing:',
      options: ['A. Hindu majority', 'B. Muslim national identity', 'C. British supremacy', 'D. Economic unity'],
      answer: 'B. Muslim national identity',
      diff: 'medium',
    },
    {
      q: 'Which provinces did Iqbal propose to amalgamate into a single North-Western Muslim state?',
      options: ['A. Punjab, Bengal, Assam', 'B. Punjab, NWFP, Sind, Balochistan', 'C. Sind, Gujarat, Rajasthan', 'D. NWFP, Kashmir, Jammu'],
      answer: 'B. Punjab, NWFP, Sind, Balochistan',
      diff: 'easy',
    },
    {
      q: 'The proposed North-Western Muslim state would be a self-government:',
      options: ['A. Only within British Empire', 'B. Only without British Empire', 'C. Within British Empire or without', 'D. Under Hindu rule'],
      answer: 'C. Within British Empire or without',
      diff: 'easy',
    },
    {
      q: 'Iqbal called the formation of a consolidated North-Western Muslim state the:',
      options: ['A. Temporary solution', 'B. Final destiny of Muslims of NW India', 'C. British plan', 'D. Hindu proposal'],
      answer: 'B. Final destiny of Muslims of NW India',
      diff: 'medium',
    },
    {
      q: 'Iqbal’s Allahabad Address is considered significant because it presented the Muslim case:',
      options: ['A. As a minority only', 'B. As a political entity, not just a minority', 'C. As a religious sect', 'D. As a caste group'],
      answer: 'B. As a political entity, not just a minority',
      diff: 'medium',
    },
    {
      q: 'The territorial adjustments proposed by Iqbal later developed into the concept of:',
      options: ['A. Separate electorate', 'B. Muslim homeland (Pakistan)', 'C. Provincial autonomy', 'D. Dominion status'],
      answer: 'B. Muslim homeland (Pakistan)',
      diff: 'easy',
    },
    {
      q: 'Iqbal wrote letters to Jinnah between which years?',
      options: ['A. 1930-1932', 'B. 1933-1935', 'C. May 1936 to November 1937', 'D. 1938-1940'],
      answer: 'C. May 1936 to November 1937',
      diff: 'hard',
    },
    {
      q: 'In his letters to Jinnah, Iqbal talked about a separate federation of Muslim provinces, including:',
      options: ['A. Only NW India', 'B. NW India and Bengal', 'C. Only Bengal', 'D. Only Sind'],
      answer: 'B. NW India and Bengal',
      diff: 'medium',
    },
    {
      q: 'According to Iqbal, development of Shariah is impossible without:',
      options: ['A. British rule', 'B. A free Muslim state or states', 'C. Hindu cooperation', 'D. Western education'],
      answer: 'B. A free Muslim state or states',
      diff: 'easy',
    },
    {
      q: 'Iqbal advised Muslims to be above self-interest and:',
      options: ['A. Focus on wealth', 'B. Devote themselves to Islam', 'C. Join British army', 'D. Migrate to other countries'],
      answer: 'B. Devote themselves to Islam',
      diff: 'easy',
    },
    {
      q: 'Iqbal believed that in difficult times, Islam has:',
      options: ['A. Abandoned Muslims', 'B. Saved the Muslims', 'C. Been irrelevant', 'D. Caused problems'],
      answer: 'B. Saved the Muslims',
      diff: 'easy',
    },
    {
      q: 'According to Iqbal, which is more important than patriotism?',
      options: ['A. Wealth', 'B. Faith, culture and historical traditions', 'C. Territorial nationalism', 'D. Economic progress'],
      answer: 'B. Faith, culture and historical traditions',
      diff: 'medium',
    },
    {
      q: 'Hindus and British believed in which concept that Iqbal rejected for India?',
      options: ['A. Two-Nation Theory', 'B. Territorial nationalism', 'C. Separate electorate', 'D. Federalism'],
      answer: 'B. Territorial nationalism',
      diff: 'medium',
    },
    {
      q: 'Iqbal argued that if Muslims have opportunity to develop according to Islamic civilization, they would:',
      options: ['A. Leave India', 'B. Be willing to sacrifice their lives for India', 'C. Fight the British', 'D. Accept Hindu rule'],
      answer: 'B. Be willing to sacrifice their lives for India',
      diff: 'hard',
    },
    {
      q: 'Which of the following is NOT a characteristic of Islam according to Iqbal?',
      options: ['A. Ethical order', 'B. Socio-political structure', 'C. Legal framework', 'D. Separation from all aspects of life'],
      answer: 'D. Separation from all aspects of life',
      diff: 'easy',
    }
  ]
},

// L 9 //

  9: {
  title: 'Chaudhary Rahmat Ali: The Man Who Coined the Name "Pakistan" (PAK101 Lecture 9)',
  summary: `**Key Topics Covered:**
- Role of intellectuals in the Pakistan Movement
- Rahmat Ali’s biography: born in Hoshiarpur (1893/1895), B.A. from Islamia College Lahore, higher education at Cambridge University
- His activism at Cambridge and earlier in Lahore – advocated separate Muslim state
- Views: North-Western Muslim majority areas should become a Muslim state; Muslims must get rid of "Indianism"
- His pamphlet "Now or Never" (January 1933) – coined the name PAKISTAN
- Etymology: P = Punjab, A = Afghanistan (NW), K = Kashmir, S = Sind, TAN = Balochistan
- India not a single nation; Muslims are a distinct nation with right to self-determination
- Conflict between Hindus and Muslims is international, not religious or economic
- Established Pakistan National Movement (1940)
- Proposed Bang-i-Islam (Bengal, Assam) and Osmanistan (Hyderabad Deccan) as separate Muslim states
- Died in Cambridge (February 11, 1951)
- His contribution: coined the name "Pakistan"; Lahore Resolution later called Pakistan Resolution

---

**Simple Understanding:**

**Intellectuals, Leaders, and Masses:**
👉 Intellectuals give direction, leaders act, masses follow – nations achieve their goals.
👉 Rahmat Ali was an eminent scholar who contributed significantly to the Pakistan Movement.

**Who was Chaudhary Rahmat Ali?**
👉 Born in Hoshiarpur district (1893 or 1895).
👉 B.A. from Islamia College, Lahore.
👉 Worked private and government jobs, then went to Cambridge University for higher education.
👉 Active in student politics for Muslim rights – started talking about a separate state even in Lahore.

**Rahmat Ali’s Views:**
👉 North-Western areas have Muslim majorities – they should become a Muslim state.
👉 Muslims must get rid of "Indianism" – better for Muslims and Islam.
👉 India cannot be called a single nation; it never existed as one political entity before the British.
👉 Muslims are a distinct nation that has maintained its identity throughout history.
👉 They have as much right to live as Hindus in the Subcontinent.
👉 The conflict between Hindus and Muslims is not religious, sectarian, or economic – it is **international** (two nations).

**"Now or Never" (January 1933):**
👉 Rahmat Ali published a pamphlet titled "Now or Never."
👉 He coined the name **PAKISTAN** for the Muslim state.
👉 The name stands for:
   - **P** = Punjab
   - **A** = Afghanistan (North-West Frontier Province)
   - **K** = Kashmir
   - **S** = Sind
   - **TAN** = Balochistan

**Pakistan National Movement (1940):**
👉 He established this organization to promote the idea of Pakistan.
👉 He also proposed separate Muslim states for the East:
   - **Bang-i-Islam** (Bengal and Assam)
   - **Osmanistan** (Hyderabad Deccan)

**End of Life:**
👉 Visited Pakistan in 1948 but the atmosphere did not suit him; returned to Cambridge.
👉 Died in Cambridge on February 11, 1951.

**His Contribution:**
👉 Ever-shining contribution: he coined the name "Pakistan."
👉 He argued that Indian Muslims deserve a separate homeland.
👉 When the Lahore Resolution (1940) was passed, it was immediately described as the **Pakistan Resolution** – though Rahmat Ali had proposed the name and idea long before.

---

**Important Vocabulary:**
- Intellectual = a person engaged in critical thinking and idea generation
- Coined = invented (a word or phrase)
- Pamphlet = a small booklet or leaflet
- Indianism = identity based on being Indian (which Rahmat Ali rejected for Muslims)
- International conflict = conflict between two nations (applied to Hindus and Muslims)
- Pakistan National Movement = organization founded by Rahmat Ali in 1940
- Bang-i-Islam = proposed Muslim state in Eastern India (Bengal, Assam)
- Osmanistan = proposed Muslim state in Hyderabad Deccan
- Pakistan Resolution = another name for Lahore Resolution (1940)

---

**Quick Revision Points:**
- Rahmat Ali coined the name "Pakistan" in his pamphlet "Now or Never" (January 1933).
- He was born in Hoshiarpur, studied at Islamia College Lahore and Cambridge University.
- He argued that Hindus and Muslims are two distinct nations – their conflict is international.
- He rejected "Indianism" and demanded a separate Muslim state.
- The name PAKISTAN comes from: Punjab, Afghanistan (NW), Kashmir, Sind, Balochistan.
- He also proposed Bang-i-Islam (Bengal, Assam) and Osmanistan (Hyderabad).
- He established the Pakistan National Movement in 1940.
- He died in Cambridge in 1951.
- The Lahore Resolution (1940) is also called the Pakistan Resolution – but Rahmat Ali proposed the name seven years earlier.`,

  questions: [
    {
      q: 'Chaudhary Rahmat Ali is best known for:',
      options: ['A. Leading the Khilafat Movement', 'B. Coining the name "Pakistan"', 'C. Writing the Lahore Resolution', 'D. Founding the Muslim League'],
      answer: 'B. Coining the name "Pakistan"',
      diff: 'easy',
    },
    {
      q: 'Rahmat Ali was born in which district?',
      options: ['A. Lahore', 'B. Hoshiarpur', 'C. Amritsar', 'D. Sialkot'],
      answer: 'B. Hoshiarpur',
      diff: 'easy',
    },
    {
      q: 'Rahmat Ali completed his B.A. from which college?',
      options: ['A. Government College Lahore', 'B. Islamia College Lahore', 'C. Forman Christian College', 'D. Aligarh Muslim University'],
      answer: 'B. Islamia College Lahore',
      diff: 'medium',
    },
    {
      q: 'For higher education, Rahmat Ali went to which university?',
      options: ['A. Oxford University', 'B. Cambridge University', 'C. London University', 'D. Edinburgh University'],
      answer: 'B. Cambridge University',
      diff: 'easy',
    },
    {
      q: 'Rahmat Ali published his famous pamphlet "Now or Never" in which year?',
      options: ['A. 1930', 'B. 1933', 'C. 1935', 'D. 1940'],
      answer: 'B. 1933',
      diff: 'easy',
    },
    {
      q: 'In which month and year was "Now or Never" published?',
      options: ['A. December 1930', 'B. January 1933', 'C. March 1940', 'D. August 1947'],
      answer: 'B. January 1933',
      diff: 'hard',
    },
    {
      q: 'The name PAKISTAN stands for which provinces/regions?',
      options: ['A. Punjab, Afghanistan (NW), Kashmir, Sind, Balochistan', 'B. Peshawar, Kashmir, Sindh, Tribal Areas, Northern Areas', 'C. Punjab, Assam, Kashmir, Sind, Tan (Turkey)', 'D. Persia, Afghanistan, Kashmir, India, Nepal'],
      answer: 'A. Punjab, Afghanistan (NW), Kashmir, Sind, Balochistan',
      diff: 'medium',
    },
    {
      q: 'According to Rahmat Ali, the conflict between Hindus and Muslims is:',
      options: ['A. Religious', 'B. Economic', 'C. International', 'D. Sectarian'],
      answer: 'C. International',
      diff: 'medium',
    },
    {
      q: 'Rahmat Ali argued that India before the British was:',
      options: ['A. One political entity', 'B. Not one political entity', 'C. A Hindu state', 'D. A Muslim state'],
      answer: 'B. Not one political entity',
      diff: 'easy',
    },
    {
      q: 'Rahmat Ali advised Muslims to get rid of:',
      options: ['A. Islam', 'B. Indianism', 'C. British rule', 'D. Western education'],
      answer: 'B. Indianism',
      diff: 'medium',
    },
    {
      q: 'Rahmat Ali established the Pakistan National Movement in which year?',
      options: ['A. 1933', 'B. 1935', 'C. 1940', 'D. 1945'],
      answer: 'C. 1940',
      diff: 'medium',
    },
    {
      q: 'Rahmat Ali proposed a separate Muslim state for Bengal and Assam called:',
      options: ['A. Pakistan', 'B. Bang-i-Islam', 'C. Osmanistan', 'D. Bengalistan'],
      answer: 'B. Bang-i-Islam',
      diff: 'hard',
    },
    {
      q: 'The proposed Muslim state for Hyderabad Deccan was called:',
      options: ['A. Hyderabadistan', 'B. Osmanistan', 'C. Deccanistan', 'D. Nizamabad'],
      answer: 'B. Osmanistan',
      diff: 'hard',
    },
    {
      q: 'Rahmat Ali visited Pakistan in which year?',
      options: ['A. 1947', 'B. 1948', 'C. 1949', 'D. 1950'],
      answer: 'B. 1948',
      diff: 'medium',
    },
    {
      q: 'Where did Rahmat Ali die?',
      options: ['A. Lahore', 'B. Karachi', 'C. Cambridge', 'D. Delhi'],
      answer: 'C. Cambridge',
      diff: 'easy',
    },
    {
      q: 'Rahmat Ali died on:',
      options: ['A. February 11, 1951', 'B. March 23, 1951', 'C. August 14, 1951', 'D. September 11, 1951'],
      answer: 'A. February 11, 1951',
      diff: 'hard',
    },
    {
      q: 'The Lahore Resolution (1940) is also known as the:',
      options: ['A. India Resolution', 'B. Pakistan Resolution', 'C. Bengal Resolution', 'D. Punjab Resolution'],
      answer: 'B. Pakistan Resolution',
      diff: 'easy',
    },
    {
      q: 'Rahmat Ali’s pamphlet "Now or Never" argued that Muslims are a:',
      options: ['A. Religious minority only', 'B. Distinct nation with right to live', 'C. Caste group', 'D. Political party'],
      answer: 'B. Distinct nation with right to live',
      diff: 'easy',
    },
    {
      q: 'According to Rahmat Ali, which areas in North-West have Muslim majorities that should become a Muslim state?',
      options: ['A. Punjab, NWFP, Sind, Balochistan', 'B. UP, Bihar, Bengal', 'C. Madras, Bombay, Calcutta', 'D. Delhi, Ajmer, Jaipur'],
      answer: 'A. Punjab, NWFP, Sind, Balochistan',
      diff: 'easy',
    },
    {
      q: 'Rahmat Ali said that Muslims are striving for their survival while Hindus are trying for:',
      options: ['A. Independence', 'B. Domination over other nations', 'C. British rule', 'D. Economic prosperity only'],
      answer: 'B. Domination over other nations',
      diff: 'medium',
    },
    {
      q: 'The letter "A" in PAKISTAN stands for:',
      options: ['A. Afghanistan (NW)', 'B. Assam', 'C. Andhra', 'D. Arabia'],
      answer: 'A. Afghanistan (NW)',
      diff: 'easy',
    },
    {
      q: 'The letter "K" in PAKISTAN stands for:',
      options: ['A. Karachi', 'B. Kashmir', 'C. Khairpur', 'D. Kalat'],
      answer: 'B. Kashmir',
      diff: 'easy',
    },
    {
      q: 'Rahmat Ali’s idea of a separate Muslim state was initially:',
      options: ['A. Accepted by all', 'B. Taken seriously by everyone', 'C. Not taken seriously by many', 'D. Implemented immediately'],
      answer: 'C. Not taken seriously by many',
      diff: 'easy',
    },
    {
      q: 'Rahmat Ali’s contribution is considered:',
      options: ['A. Minor and unimportant', 'B. Ever-shining – he coined the name Pakistan', 'C. Only about education', 'D. Limited to Cambridge'],
      answer: 'B. Ever-shining – he coined the name Pakistan',
      diff: 'easy',
    },
    {
      q: 'Which of the following is NOT a proposed Muslim state by Rahmat Ali?',
      options: ['A. Pakistan', 'B. Bang-i-Islam', 'C. Osmanistan', 'D. Hindutva'],
      answer: 'D. Hindutva',
      diff: 'easy',
    },
    {
      q: 'Rahmat Ali believed that the Muslim state should be separated from the rest of India because:',
      options: ['A. Muslims are a separate nation', 'B. Hindus are friendly', 'C. British requested it', 'D. Congress supported it'],
      answer: 'A. Muslims are a separate nation',
      diff: 'easy',
    }
  ]
},


// lecture 10 //

10: {
  title: 'Congress Rule 1937-1939: The Dress Rehearsal of Hindu Raj and Muslim Awakening (PAK101 Lecture 10)',
  summary: `**Key Topics Covered:**
- Government of India Act 1935 (provincial part) – introduced provincial elections
- 1937 Elections: restricted franchise, separate electorate – Congress won 5 provinces, Muslim League performed poorly (21% Muslim seats)
- Formation of Congress governments in 6 provinces (July 1937)
- Congress conditions for coalition with Muslim League in UP – unacceptable (dissolve League board, no separate group, allegiance to Congress)
- Policies of Congress governments: anti-Muslim drive, Muslim Mass Contact movement, promotion of Hindu culture (Bande Mataram, Hindi), Wardha Educational Scheme, distortion of Muslim history, discrimination in services
- Muslim response: monitoring, publicizing atrocities
- Pirpur Report (Nov 15, 1938): Raja Syed Muhammad Mehdi – cruelties in 7 provinces
- Sharif Report (March 1939): injustices in Bihar
- Fazl-ul-Haq Report: "Muslim Sufferings Under the Rule of Congress" – Azan forbidden, mosque attacks, cow-slaughter ban
- All reports described Congress creating "Hindu Raj" threatening Muslim identity
- Muslim League activism: Lucknow session (Oct 1937), leaders like Fazlul Haq, Sikander Hayat, Saadullah supported League
- Second World War (Sept 1939) – Congress ministries resigned (Nov 1939)
- Day of Deliverance (Dec 22, 1939) observed by Muslims
- League redefined position – no constitution without Muslim consent

---

**Simple Understanding:**

**Background:**
👉 Congress Ministries formed in 1937, resigned in 1939.
👉 This period was a "dress rehearsal" – Muslims saw what Hindu rule would look like.
👉 Muslims became more rigid in their Two-Nation Theory and demand for separate homeland.

**Government of India Act 1935:**
👉 Only provincial part was introduced.
👉 Muslim League and Congress criticized it but agreed to contest elections.

**1937 Elections:**
👉 Held with restricted franchise and separate electorate.
👉 Congress projected itself as all-India force; won majorities in 5 provinces (Madras, UP, CP, Bihar, Orissa) – 704 out of 1585 general seats.
👉 Muslim League performed poorly – only about 21% of Muslim seats; no majority anywhere (Bengal, Punjab, NWFP, Sind).

**Formation of Provincial Governments (July 1937):**
👉 Congress formed governments in 6 provinces. In NWFP, Khudai Khidmatgar and Congress coalition.
👉 League wanted coalition in UP, but Congress demanded:
   1. Dissolve AIML Parliamentary Board
   2. No separate group functioning
   3. Allegiance to Congress
👉 Unacceptable – these terms would subvert Muslim League's existence.

**Congress Policies (Anti-Muslim Drive):**
👉 Muslim Mass Contact movement to defame League.
👉 Promoted Hindu culture in name of "Indian culture" – Bande Mataram anthem, Hindi language.
👉 Wardha Educational Scheme – aimed to convert Muslims through primary education.
👉 Distortion of Muslim history; projection of Hindu heroes like Gandhi.
👉 Discrimination in government services.

**Muslim Response – Reports on Atrocities:**

**Pirpur Report (Nov 15, 1938):**
👉 8-member committee under Raja Syed Muhammad Mehdi of Pirpur.
👉 Investigated cruelties in 7 provinces.

**Sharif Report (March 1939):**
👉 Focused on injustices in Bihar.

**Fazl-ul-Haq Report:**
👉 A. K. Fazl-ul-Haq published "Muslim Sufferings Under the Rule of Congress".
👉 Revealed: forbidding of Azan, attacks on mosques, noisy Hindu processions, ban on cow-slaughter.

👉 All reports concluded Congress was creating "Hindu Raj" – a threat to Muslim culture and identity.

**Muslim League Activism:**
👉 Lucknow session (October 1937) – leaders like Fazlul Haq, Sikander Hayat, Saadullah supported League.
👉 Sharp criticism of Congress policies; protested against reduction of Urdu status.
👉 Created realization: Muslims must think seriously about future political arrangements.
👉 Urged unity under Muslim League banner.

**Second World War (September 1939):**
👉 Congress ministries resigned in November 1939.
👉 Muslims observed Day of Deliverance on December 22, 1939.
👉 League redefined position: no constitution without Muslim consent.

---

**Important Vocabulary:**
- Dress rehearsal = practice or preview of future events
- Restricted franchise = limited right to vote (property/education qualifications)
- Separate electorate = Muslims vote for Muslim candidates only
- Muslim Mass Contact = Congress campaign to win Muslim support
- Bande Mataram = nationalistic song from Anandamath, used by Congress
- Wardha Educational Scheme = Congress education plan (allegedly aimed at conversion)
- Pirpur Report = document on Congress atrocities (1938)
- Sharif Report = document on Bihar injustices (1939)
- Day of Deliverance = Muslim celebration of Congress resignation (Dec 22, 1939)
- Hindu Raj = Hindu rule

---

**Quick Revision Points:**
- 1937 elections – Congress won general seats; Muslim League won only 21% Muslim seats.
- Congress formed governments in 6 provinces (July 1937).
- Congress demanded League dissolve itself for coalition in UP – League refused.
- Congress policies promoted Hindu culture, discriminated against Muslims.
- Pirpur Report (1938), Sharif Report (1939), Fazl-ul-Haq Report documented atrocities.
- Reports concluded Congress wanted "Hindu Raj" – threatening Muslim identity.
- Muslim League reactivated: Lucknow session (Oct 1937) attracted support.
- WWII began Sept 1939; Congress resigned Nov 1939.
- Day of Deliverance (Dec 22, 1939) – Muslims celebrated.
- League declared no constitution without Muslim consent.`,

  questions: [
    {
      q: 'The Congress Ministries were formed in which year?',
      options: ['A. 1935', 'B. 1937', 'C. 1939', 'D. 1940'],
      answer: 'B. 1937',
      diff: 'easy',
    },
    {
      q: 'The Congress Ministries resigned in which year?',
      options: ['A. 1937', 'B. 1938', 'C. 1939', 'D. 1940'],
      answer: 'C. 1939',
      diff: 'easy',
    },
    {
      q: 'The period of Congress rule (1937-1939) is described as a:',
      options: ['A. Golden era for Muslims', 'B. Dress rehearsal of future governmental structure', 'C. Time of Hindu-Muslim unity', 'D. British success'],
      answer: 'B. Dress rehearsal of future governmental structure',
      diff: 'easy',
    },
    {
      q: 'Which act introduced the provincial part that led to the 1937 elections?',
      options: ['A. Government of India Act 1919', 'B. Government of India Act 1935', 'C. Indian Councils Act 1909', 'D. Rowlett Act 1919'],
      answer: 'B. Government of India Act 1935',
      diff: 'easy',
    },
    {
      q: 'The 1937 elections were held with which two features?',
      options: ['A. Universal franchise and joint electorate', 'B. Restricted franchise and separate electorate', 'C. Property franchise only', 'D. Male franchise only'],
      answer: 'B. Restricted franchise and separate electorate',
      diff: 'medium',
    },
    {
      q: 'How many general seats did the Congress win out of 1585 in the 1937 elections?',
      options: ['A. 500', 'B. 600', 'C. 704', 'D. 800'],
      answer: 'C. 704',
      diff: 'hard',
    },
    {
      q: 'The Muslim League won approximately what percentage of Muslim seats in the 1937 elections?',
      options: ['A. 50%', 'B. 35%', 'C. 21%', 'D. 10%'],
      answer: 'C. 21%',
      diff: 'medium',
    },
    {
      q: 'In which province did the Muslim League fail to win a majority?',
      options: ['A. Madras', 'B. Bengal', 'C. Bombay', 'D. All of the above'],
      answer: 'D. All of the above',
      diff: 'medium',
    },
    {
      q: 'In NWFP, Congress formed a coalition government with which group?',
      options: ['A. Muslim League', 'B. Khudai Khidmatgar', 'C. Unionist Party', 'D. Hindu Mahasabha'],
      answer: 'B. Khudai Khidmatgar',
      diff: 'hard',
    },
    {
      q: 'What conditions did Congress demand from the Muslim League for a coalition in UP?',
      options: ['A. Dissolve AIML Parliamentary Board', 'B. No separate group functioning', 'C. Allegiance to Congress', 'D. All of the above'],
      answer: 'D. All of the above',
      diff: 'medium',
    },
    {
      q: 'Why did the Muslim League reject the Congress coalition terms in UP?',
      options: ['A. They wanted more seats', 'B. The terms would subvert the existence of Muslim League', 'C. They preferred to stay in opposition', 'D. British prevented them'],
      answer: 'B. The terms would subvert the existence of Muslim League',
      diff: 'medium',
    },
    {
      q: 'The Congress launched which movement to win Muslim support and defame the Muslim League?',
      options: ['A. Khilafat Movement', 'B. Muslim Mass Contact movement', 'C. Hijrat Movement', 'D. Non-Cooperation Movement'],
      answer: 'B. Muslim Mass Contact movement',
      diff: 'hard',
    },
    {
      q: 'Which anthem was promoted by Congress governments in institutions?',
      options: ['A. Jana Gana Mana', 'B. Vande Mataram', 'C. Sare Jahan se Accha', 'D. God Save the King'],
      answer: 'B. Vande Mataram',
      diff: 'easy',
    },
    {
      q: 'The Wardha Educational Scheme was accused of aiming to:',
      options: ['A. Promote science education', 'B. Convert Muslims into Hindus through primary literature', 'C. Spread English', 'D. Establish more schools'],
      answer: 'B. Convert Muslims into Hindus through primary literature',
      diff: 'medium',
    },
    {
      q: 'The Pirpur Report was presented on which date?',
      options: ['A. March 28, 1938', 'B. November 15, 1938', 'C. March 1939', 'D. December 22, 1939'],
      answer: 'B. November 15, 1938',
      diff: 'hard',
    },
    {
      q: 'Who headed the committee that produced the Pirpur Report?',
      options: ['A. A. K. Fazl-ul-Haq', 'B. Raja Syed Muhammad Mehdi of Pirpur', 'C. Mr. Sharif', 'D. Sikander Hayat'],
      answer: 'B. Raja Syed Muhammad Mehdi of Pirpur',
      diff: 'hard',
    },
    {
      q: 'The Sharif Report focused on injustices in which province?',
      options: ['A. Punjab', 'B. UP', 'C. Bihar', 'D. Bengal'],
      answer: 'C. Bihar',
      diff: 'medium',
    },
    {
      q: 'Fazl-ul-Haq published a pamphlet titled:',
      options: ['A. Pirpur Report', 'B. Muslim Sufferings Under the Rule of Congress', 'C. Sharif Report', 'D. Two-Nation Theory'],
      answer: 'B. Muslim Sufferings Under the Rule of Congress',
      diff: 'medium',
    },
    {
      q: 'Which of the following was NOT mentioned in Fazl-ul-Haq’s report?',
      options: ['A. Forbidding of Azan', 'B. Attacks on mosques', 'C. Ban on cow-slaughter', 'D. Promotion of Urdu'],
      answer: 'D. Promotion of Urdu',
      diff: 'easy',
    },
    {
      q: 'All the reports (Pirpur, Sharif, Fazl-ul-Haq) described Congress governments as trying to create:',
      options: ['A. Secular state', 'B. Hindu Raj', 'C. Muslim state', 'D. British colony'],
      answer: 'B. Hindu Raj',
      diff: 'easy',
    },
    {
      q: 'The Muslim League held an important session in October 1937 at which city?',
      options: ['A. Lahore', 'B. Lucknow', 'C. Karachi', 'D. Delhi'],
      answer: 'B. Lucknow',
      diff: 'easy',
    },
    {
      q: 'Which prominent leader announced support for the Muslim League at the Lucknow session (1937)?',
      options: ['A. Gandhi', 'B. A. K. Fazl-ul-Haq', 'C. Nehru', 'D. Patel'],
      answer: 'B. A. K. Fazl-ul-Haq',
      diff: 'medium',
    },
    {
      q: 'The Second World War began in which month and year?',
      options: ['A. August 1939', 'B. September 1939', 'C. October 1939', 'D. November 1939'],
      answer: 'B. September 1939',
      diff: 'easy',
    },
    {
      q: 'The Congress ministries resigned in November 1939 in protest against:',
      options: ['A. British policies in the war', 'B. Muslim League demands', 'C. Failure of Round Table Conferences', 'D. Communal Award'],
      answer: 'A. British policies in the war',
      diff: 'easy',
    },
    {
      q: 'Muslims observed the Day of Deliverance on:',
      options: ['A. November 15, 1938', 'B. March 22, 1939', 'C. December 22, 1939', 'D. August 14, 1940'],
      answer: 'C. December 22, 1939',
      diff: 'medium',
    },
    {
      q: 'After the Congress resignations, the Muslim League redefined its position and declared:',
      options: ['A. Support for the war', 'B. No constitution to be enforced without Muslim consent', 'C. Acceptance of Congress rule', 'D. Merger with Congress'],
      answer: 'B. No constitution to be enforced without Muslim consent',
      diff: 'easy',
    },
    {
      q: 'The experience of Congress rule 1937-1939 made Muslims more rigid in their:',
      options: ['A. Loyalty to British', 'B. Two-Nation Theory and demand for separate homeland', 'C. Support for Congress', 'D. Acceptance of Hindu culture'],
      answer: 'B. Two-Nation Theory and demand for separate homeland',
      diff: 'easy',
    },
    {
      q: 'How many provinces did Congress win majorities in during the 1937 elections?',
      options: ['A. 3', 'B. 4', 'C. 5', 'D. 6'],
      answer: 'C. 5',
      diff: 'easy',
    }
  ]
},

// lecture 11 ///

 11: {
  title: 'Lahore Resolution and Political Developments (1940-1944): Pakistan Demand Takes Shape (PAK101 Lecture 6)',
  summary: `**Key Topics Covered:**
- Impact of Congress Rule (1937-1939) – Muslims realized Hindu government meant anti-Muslim rule
- Quaid-e-Azam’s article in Time and Tide: Muslims are a nation
- Lahore Resolution (March 22-24, 1940) – moved by Maulvi Fazlul Haq, seconded by Ch. Khaliquzzaman
- Text of the Resolution: rejection of 1935 Act, independent states in Muslim-majority NW and East, minority protection
- Significance: kernel of Pakistan idea; 'states' later changed to 'state' in 1946
- August Offer (1940): Viceroy’s expansion, minority importance, dominion status, war cooperation
- Cripps Mission (March 1942): dominion status, constitutional body – rejected by both Congress and Muslim League
- Gandhi-Jinnah Talks (September 1944): Gandhi rejected Two-Nation Theory; Jinnah insisted "first partition then freedom"

---

**Simple Understanding:**

**Impact of Congress Rule (1937-1939):**
👉 Congress won elections in 1937 and formed governments in Hindu-majority provinces.
👉 Muslims realized that Hindu government meant anti-Muslim rule.
👉 This experience convinced Muslims that a separate homeland was necessary.

**Quaid-e-Azam’s Position:**
👉 In Time and Tide article, he declared Muslims are a nation.
👉 March 13, 1940: "If no satisfactory settlement for Muslims in united India, Muslims will demand division of the country."
👉 He called the Indian problem "international, not communal" – Hindus and Muslims are two nations.

**Lahore Resolution (March 22-24, 1940):**
👉 Held at Lahore (Annual session of Muslim League).
👉 Resolution moved by Maulvi Fazlul Haq (Chief Minister of Bengal).
👉 Seconded by Ch. Khaliquzzaman.
👉 Approved on March 24, 1940.

**Text of the Resolution:**
1. Federal system under Government of India Act 1935 was unacceptable.
2. No revised constitutional plan without Muslim approval.
3. Muslim-majority areas in Northwest and East should be constituted as **independent states** (autonomous and sovereign).
4. Protection of minorities would be given priority.

**Significance:**
👉 Did not specify exact territory but defined future struggle.
👉 Did not use the word "Pakistan" – but Pakistan was the kernel of the resolution.
👉 In 1946, the word "states" was replaced by "state" (singular).

**August Offer (1940):**
👉 British announcement during World War II.
👉 Key points:
   - Expansion of Viceroy’s Executive Council and National Defense Council
   - Special importance to minority views in constitutional revision
   - Power not transferred without consent of large/powerful minorities
   - Dominion status as ultimate goal
   - Indian cooperation for war
👉 Congress rejected it (started Non-Cooperation 1940-41).
👉 Muslim League kept Lahore Resolution as ultimate goal.

**Cripps Mission (March 1942):**
👉 British sent Sir Stafford Cripps to get Indian cooperation for war.
👉 Proposals:
   - Dominion status
   - Indian constitutional body to frame constitution
   - Princely states representation
👉 **Congress rejected** – demanded immediate responsible government, Indian control over defense.
👉 **Muslim League rejected** – Muslims could not live in Indian Union.

**Quit India Movement (August 1942):**
👉 Hindus started movement against British.
👉 Muslim League responded: "Divide and Quit India" (not just Quit India).

**Gandhi-Jinnah Talks (September 1944):**
👉 Gandhi refused to accept Two-Nation Theory.
👉 Emphasized freedom of united India.
👉 Jinnah insisted: Muslims would not budge an inch from their demand – **first partition, then freedom**.

---

**Important Vocabulary:**
- Congress Rule (1937-39) = period when Congress governed provinces, alienating Muslims
- Lahore Resolution = Pakistan demand resolution (March 1940)
- Maulvi Fazlul Haq = mover of Lahore Resolution
- Dominion status = self-governing within British Commonwealth
- Cripps Mission = 1942 British constitutional mission
- Quit India Movement = Congress's 1942 civil disobedience
- Divide and Quit = Muslim League's counter slogan
- Two-Nation Theory = Hindus and Muslims are distinct nations

---

**Quick Revision Points:**
- Congress rule 1937-39 convinced Muslims that Hindu government = anti-Muslim rule.
- Jinnah declared: "Indian problem is international, not communal."
- Lahore Resolution (March 23, 1940) – moved by Fazlul Haq, approved March 24.
- Demanded independent states in Muslim-majority NW and East.
- No word "Pakistan" but it was the kernel.
- August Offer (1940) – rejected by Congress, accepted as insufficient by League.
- Cripps Mission (1942) – rejected by both Congress and League.
- Quit India Movement (1942) – League responded "Divide and Quit India."
- Gandhi-Jinnah Talks (1944) – failed because Gandhi rejected Two-Nation Theory.
- Jinnah's position: "First partition, then freedom."`,

  questions: [
    {
      q: 'The Congress ruled provinces after elections in which year?',
      options: ['A. 1935', 'B. 1937', 'C. 1939', 'D. 1940'],
      answer: 'B. 1937',
      diff: 'easy',
    },
    {
      q: 'What was the main impact of Congress Rule (1937-1939) on Muslims?',
      options: ['A. Muslims became stronger', 'B. Muslims realized Hindu government meant anti-Muslim rule', 'C. Muslims joined Congress', 'D. Muslims supported British'],
      answer: 'B. Muslims realized Hindu government meant anti-Muslim rule',
      diff: 'easy',
    },
    {
      q: 'Quaid-e-Azam wrote an article in which magazine declaring Muslims as a nation?',
      options: ['A. Aligarh Institute Gazette', 'B. Time and Tide', 'C. Tahzib-ul-Akhlaq', 'D. Dawn'],
      answer: 'B. Time and Tide',
      diff: 'medium',
    },
    {
      q: 'On March 13, 1940, Jinnah said that if no satisfactory settlement for Muslims in united India, Muslims will demand:',
      options: ['A. More seats', 'B. Division of the country', 'C. Separate electorate', 'D. British protection'],
      answer: 'B. Division of the country',
      diff: 'easy',
    },
    {
      q: 'The annual session of the Muslim League where the Lahore Resolution was passed was held in:',
      options: ['A. Delhi', 'B. Lahore', 'C. Karachi', 'D. Dhaka'],
      answer: 'B. Lahore',
      diff: 'easy',
    },
    {
      q: 'The Lahore Resolution was passed on:',
      options: ['A. March 22, 1940', 'B. March 23, 1940', 'C. March 24, 1940', 'D. March 25, 1940'],
      answer: 'C. March 24, 1940',
      diff: 'hard',
    },
    {
      q: 'Who moved the Lahore Resolution?',
      options: ['A. Quaid-e-Azam Jinnah', 'B. Maulvi Fazlul Haq', 'C. Ch. Khaliquzzaman', 'D. Nawab Salimullah'],
      answer: 'B. Maulvi Fazlul Haq',
      diff: 'easy',
    },
    {
      q: 'Who seconded the Lahore Resolution?',
      options: ['A. Maulvi Fazlul Haq', 'B. Ch. Khaliquzzaman', 'C. Sir Agha Khan', 'D. Nawab Mohsin ul Mulk'],
      answer: 'B. Ch. Khaliquzzaman',
      diff: 'medium',
    },
    {
      q: 'According to the Lahore Resolution, Muslim-majority areas in Northwest and East should be constituted as:',
      options: ['A. Part of united India', 'B. Independent states (autonomous and sovereign)', 'C. British colonies', 'D. Hindu majority provinces'],
      answer: 'B. Independent states (autonomous and sovereign)',
      diff: 'easy',
    },
    {
      q: 'Which of the following was NOT part of the Lahore Resolution?',
      options: ['A. Rejection of federal system under 1935 Act', 'B. No constitutional plan without Muslim approval', 'C. Immediate establishment of Pakistan', 'D. Protection of minorities'],
      answer: 'C. Immediate establishment of Pakistan',
      diff: 'easy',
    },
    {
      q: 'The word "Pakistan" was used in the Lahore Resolution:',
      options: ['A. Yes, prominently', 'B. No, but Pakistan was the kernel of the resolution', 'C. Yes, many times', 'D. No, and it had no relation to Pakistan'],
      answer: 'B. No, but Pakistan was the kernel of the resolution',
      diff: 'medium',
    },
    {
      q: 'In 1946, the word "states" in the Lahore Resolution was replaced by:',
      options: ['A. Provinces', 'B. State (singular)', 'C. Regions', 'D. Territories'],
      answer: 'B. State (singular)',
      diff: 'hard',
    },
    {
      q: 'The August Offer was announced by the British in which year?',
      options: ['A. 1939', 'B. 1940', 'C. 1941', 'D. 1942'],
      answer: 'B. 1940',
      diff: 'easy',
    },
    {
      q: 'Which of the following was promised in the August Offer?',
      options: ['A. Complete independence', 'B. Dominion status as ultimate goal', 'C. Partition of India', 'D. Republic status'],
      answer: 'B. Dominion status as ultimate goal',
      diff: 'medium',
    },
    {
      q: 'Congress rejected the August Offer and started:',
      options: ['A. Quit India Movement', 'B. Non-Cooperation movement (1940-41)', 'C. Civil Disobedience', 'D. Khilafat Movement'],
      answer: 'B. Non-Cooperation movement (1940-41)',
      diff: 'hard',
    },
    {
      q: 'The Cripps Mission visited India in which year?',
      options: ['A. 1940', 'B. 1941', 'C. 1942', 'D. 1943'],
      answer: 'C. 1942',
      diff: 'easy',
    },
    {
      q: 'The Cripps Mission proposed:',
      options: ['A. Complete independence', 'B. Dominion status', 'C. Partition of India', 'D. Muslim League as sole representative'],
      answer: 'B. Dominion status',
      diff: 'easy',
    },
    {
      q: 'Why did Congress reject the Cripps Proposals?',
      options: ['A. They wanted immediate responsible government and Indian control over defense', 'B. They wanted partition', 'C. They supported the war', 'D. They wanted British to stay'],
      answer: 'A. They wanted immediate responsible government and Indian control over defense',
      diff: 'medium',
    },
    {
      q: 'Why did the Muslim League reject the Cripps Proposals?',
      options: ['A. They wanted more seats', 'B. They demanded that Muslims could not live in Indian Union', 'C. They wanted British rule to continue', 'D. They supported Congress'],
      answer: 'B. They demanded that Muslims could not live in Indian Union',
      diff: 'medium',
    },
    {
      q: 'The Quit India Movement was started by Congress in:',
      options: ['A. August 1940', 'B. August 1941', 'C. August 1942', 'D. August 1943'],
      answer: 'C. August 1942',
      diff: 'easy',
    },
    {
      q: 'The Muslim League’s response to the Quit India Movement was:',
      options: ['A. Support Quit India', 'B. "Divide and Quit India"', 'C. Join the movement', 'D. Remain silent'],
      answer: 'B. "Divide and Quit India"',
      diff: 'easy',
    },
    {
      q: 'The Gandhi-Jinnah Talks took place in which year?',
      options: ['A. 1942', 'B. 1943', 'C. 1944', 'D. 1945'],
      answer: 'C. 1944',
      diff: 'easy',
    },
    {
      q: 'During the Gandhi-Jinnah Talks, Gandhi refused to accept:',
      options: ['A. Partition', 'B. Two-Nation Theory', 'C. Dominion status', 'D. British rule'],
      answer: 'B. Two-Nation Theory',
      diff: 'easy',
    },
    {
      q: 'Jinnah’s position during the Gandhi-Jinnah Talks was:',
      options: ['A. United India first', 'B. First partition, then freedom', 'C. No partition needed', 'D. Accept Congress demands'],
      answer: 'B. First partition, then freedom',
      diff: 'easy',
    },
    {
      q: 'According to Jinnah, the Indian problem was:',
      options: ['A. Communal', 'B. International', 'C. Economic', 'D. Social'],
      answer: 'B. International',
      diff: 'medium',
    },
    {
      q: 'Which of the following is true about the Lahore Resolution?',
      options: ['A. It demanded a united India', 'B. It rejected the federal system under 1935 Act', 'C. It accepted Congress leadership', 'D. It supported British rule'],
      answer: 'B. It rejected the federal system under 1935 Act',
      diff: 'easy',
    }
  ]
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


/// l7///


7: {
  title: 'Affixes (Word Formation)',
  summary: `**Key Topics Covered:**
- Word formation (prefix, suffix)
- Affixes (prefix + suffix)
- Types of suffixes
- Noun, verb, adjective, adverb formation
- Base word spelling rules

---

**Simple Understanding:**

**Word Formation:**
👉 English mein naye words banane ke liye:
- Prefix (start) + Root word + Suffix (end)

👉 Example:
- act → action → active → activity
- react → reaction → reactivation

---

**Affixes:**
👉 Prefix + Suffix = Affixes

👉 Prefix word ke start mein lagta hai  
👉 Suffix word ke end mein lagta hai  

---

**Noun-forming suffixes:**
👉 -er / -or → person (teacher, operator)  
👉 -ness → condition (cleanliness)  
👉 -tion / -ion → action (execution)  
👉 -ment → state/action (measurement)  
👉 -ity → quality (electricity)  

---

**Verb-forming suffixes:**
👉 -ize → computerize  
👉 -ate → activate  
👉 -fy → simplify  
👉 -en → widen  

---

**Adjective-forming suffixes:**
👉 -able / -ible → capable (comparable)  
👉 -ful → full of (helpful)  
👉 -less → without (careless)  
👉 -ic / -ical → related (logical, electrical)  
👉 -ive → quality (interactive)  

---

**Adverb-forming suffix:**
👉 -ly → (quickly, logically, electronically)  

---

**Base Word Rules:**

👉 Rule 1:
If word ends with "e", remove e  
Example: mature → maturity  

👉 Rule 2:
If word ends with "y", change y → i  
Example: harmony → harmonious  

👉 Rule 3:
Spelling may change  
Example: reclaim → reclamation  

---

**Computer Examples:**
👉 analyst, programmer, operator  
👉 interactive, electronic  
👉 programmable, calculation  
👉 multiplexing, processing  

---

**Quick Revision Points:**
- Prefix + Suffix = Affixes  
- -er / -or = person  
- -ness = condition  
- -ly = adverb  
- -able = capability  
- e drop hota hai  
- y → i change hota hai  
- spelling change ho sakti hai`,

  questions: [
    {
      q: 'Affixes include:',
      options: ['A. Prefix only', 'B. Suffix only', 'C. Prefix and Suffix', 'D. Root word'],
      answer: 'C. Prefix and Suffix',
      diff: 'easy',
    },
    {
      q: 'The suffix "-er" refers to:',
      options: ['A. Place', 'B. Person', 'C. Action', 'D. Time'],
      answer: 'B. Person',
      diff: 'easy',
    },
    {
      q: 'The suffix "-ly" forms:',
      options: ['A. Nouns', 'B. Verbs', 'C. Adverbs', 'D. Adjectives'],
      answer: 'C. Adverbs',
      diff: 'easy',
    },
    {
      q: 'In "happiness", "-ness" shows:',
      options: ['A. Action', 'B. Condition', 'C. Person', 'D. Place'],
      answer: 'B. Condition',
      diff: 'easy',
    },
    {
      q: 'Prefix is added at:',
      options: ['A. End', 'B. Middle', 'C. Start', 'D. None'],
      answer: 'C. Start',
      diff: 'easy',
    },
    {
      q: 'Which is a verb-forming suffix?',
      options: ['A. -ness', 'B. -ize', 'C. -ly', 'D. -ful'],
      answer: 'B. -ize',
      diff: 'medium',
    },
    {
      q: '"Careless" means:',
      options: ['A. Full of care', 'B. Without care', 'C. Action of care', 'D. Person who cares'],
      answer: 'B. Without care',
      diff: 'medium',
    },
    {
      q: 'In "maturity", what happened to base word?',
      options: ['A. y removed', 'B. e removed', 'C. t removed', 'D. nothing changed'],
      answer: 'B. e removed',
      diff: 'medium',
    },
    {
      q: '"Harmonious" comes from:',
      options: ['A. harmony', 'B. harmon', 'C. harm', 'D. mony'],
      answer: 'A. harmony',
      diff: 'medium',
    },
    {
      q: '"Operator" refers to:',
      options: ['A. Machine', 'B. Person', 'C. Action', 'D. Quality'],
      answer: 'B. Person',
      diff: 'easy',
    },
    {
      q: 'Which suffix shows "state or quality"?',
      options: ['A. -ly', 'B. -ness', 'C. -ize', 'D. -fy'],
      answer: 'B. -ness',
      diff: 'hard',
    },
    {
      q: '"Reclamation" shows:',
      options: ['A. No change', 'B. Spelling change', 'C. Prefix removal', 'D. No suffix'],
      answer: 'B. Spelling change',
      diff: 'hard',
    },
    {
      q: '"Interactive" is:',
      options: ['A. Noun', 'B. Verb', 'C. Adjective', 'D. Adverb'],
      answer: 'C. Adjective',
      diff: 'medium',
    },
    {
      q: '"Multiplexing" represents:',
      options: ['A. Person', 'B. Action/activity', 'C. Place', 'D. Quality'],
      answer: 'B. Action/activity',
      diff: 'hard',
    },
    {
      q: 'Which word is an adverb?',
      options: ['A. Logical', 'B. Logic', 'C. Logically', 'D. Logician'],
      answer: 'C. Logically',
      diff: 'medium',
    },
  ],
},




/// l8 ///


8: {
  title: 'Prefixes, Synonyms & Antonyms',
  summary: `**Key Topics Covered:**
- Prefixes (word formation)
- Types of prefixes (negative, size, location, time, number)
- Vocabulary building
- Synonyms (same meaning words)
- Antonyms (opposite meaning words)
- Use of prefixes with stem words

---

**Simple Understanding:**

**Prefixes:**
👉 Prefix word ke start mein lagta hai

👉 Example:
- un + true = untrue  
- il + legal = illegal  

👉 Prefix meaning change kar deta hai

---

**Understanding Difficult Words:**
👉 Unknown word ko samajhne ke liye:
- Prefix identify karo  
- Root word identify karo  

👉 Example:
- illimitability = il (not) + limit  
👉 Meaning: no limit  

---

**Negative Prefixes:**
👉 not / opposite show karte hain

- un-, in-, im-, il-, ir- → not  
- non- → not connected  
- mis- → wrong  
- dis- → opposite  
- anti- → against  
- de- → reverse  
- under- → too little  

---

**Positive Prefixes:**
👉 positive ya repetition show karte hain

- re- → again (redo)  
- over- → too much  

---

**Prefixes of Size:**
👉 size show karte hain

- micro → small  
- mini → little  
- macro → large  
- mega → very large  
- semi → half  

---

**Prefixes of Location:**
👉 position show karte hain

- inter → between  
- super → above  
- trans → across  
- sub → under  
- extra → beyond  

---

**Prefixes of Time & Order:**
👉 time ya sequence show karte hain

- pre → before  
- post → after  
- ante → before  
- prime → first  
- retro → backward  

---

**Prefixes of Numbers:**
👉 quantity show karte hain

- mono → one  
- bi → two  
- tri → three  
- quad → four  
- multi → many  

---

**Other Prefixes:**
👉 special meanings

- auto → self  
- co → together  
- neo → new  
- pan → all  

---

**Synonyms:**
👉 Same ya similar meaning words

👉 Example:
- big = large = huge  

---

**Important Points (Synonyms):**

👉 1. Same meaning har jagah use nahi hota  
Example:
- apt = fit / likely  
- appropriate = only fit  

👉 2. Slight meaning difference hota hai  
Example:
- blame = fault dena  
- denounce = public criticize  

---

**Antonyms:**
👉 Opposite meaning words  
Example:
- big ↔ small  
- happy ↔ sad  

---

**Quick Revision Points:**
- Prefix word ke start mein lagta hai  
- Prefix meaning change karta hai  
- un-, in- = not  
- micro = small  
- pre = before  
- mono = one  
- Synonyms = similar meaning  
- Antonyms = opposite meaning  
- Synonyms always interchangeable nahi hote`,

  questions: [
    {
      q: 'A prefix is added at the:',
      options: ['A. End of word', 'B. Middle of word', 'C. Beginning of word', 'D. None'],
      answer: 'C. Beginning of word',
      diff: 'easy',
    },
    {
      q: 'The prefix "un-" means:',
      options: ['A. Again', 'B. Not', 'C. Before', 'D. Many'],
      answer: 'B. Not',
      diff: 'easy',
    },
    {
      q: 'Illimitability means:',
      options: ['A. Limited', 'B. No limit', 'C. Small limit', 'D. Half limit'],
      answer: 'B. No limit',
      diff: 'medium',
    },
    {
      q: 'The prefix "re-" means:',
      options: ['A. Not', 'B. Again', 'C. Before', 'D. Under'],
      answer: 'B. Again',
      diff: 'easy',
    },
    {
      q: 'The prefix "micro-" means:',
      options: ['A. Large', 'B. Small', 'C. Many', 'D. Half'],
      answer: 'B. Small',
      diff: 'easy',
    },
    {
      q: 'The prefix "pre-" indicates:',
      options: ['A. After', 'B. Before', 'C. Under', 'D. Around'],
      answer: 'B. Before',
      diff: 'easy',
    },
    {
      q: 'Which prefix means "two"?',
      options: ['A. mono', 'B. tri', 'C. bi', 'D. multi'],
      answer: 'C. bi',
      diff: 'easy',
    },
    {
      q: 'Synonyms are words that:',
      options: ['A. Opposite meaning', 'B. Same meaning', 'C. No meaning', 'D. Long words'],
      answer: 'B. Same meaning',
      diff: 'easy',
    },
    {
      q: 'Antonyms are words that:',
      options: ['A. Same meaning', 'B. Opposite meaning', 'C. Similar spelling', 'D. Same sound'],
      answer: 'B. Opposite meaning',
      diff: 'easy',
    },
    {
      q: 'The prefix "sub-" means:',
      options: ['A. Above', 'B. Under', 'C. Before', 'D. After'],
      answer: 'B. Under',
      diff: 'medium',
    },
    {
      q: 'Which prefix means "across"?',
      options: ['A. inter', 'B. trans', 'C. super', 'D. sub'],
      answer: 'B. trans',
      diff: 'medium',
    },
    {
      q: '“Blame” and “denounce” differ because:',
      options: ['A. Same usage', 'B. Denounce is stronger', 'C. Blame is stronger', 'D. Both same'],
      answer: 'B. Denounce is stronger',
      diff: 'hard',
    },
    {
      q: 'Synonyms may differ in:',
      options: ['A. Spelling only', 'B. Meaning shades', 'C. Length', 'D. Sound'],
      answer: 'B. Meaning shades',
      diff: 'hard',
    },
    {
      q: 'The prefix "auto-" means:',
      options: ['A. Together', 'B. Self', 'C. New', 'D. Many'],
      answer: 'B. Self',
      diff: 'medium',
    },
    {
      q: 'Which prefix means "many"?',
      options: ['A. mono', 'B. bi', 'C. multi', 'D. tri'],
      answer: 'C. multi',
      diff: 'easy',
    },
  ],
},



// Lecture 9//



9: {
  title: 'Introduction to Computers',
  summary: `**Key Topics Covered:**
- What is a computer
- Data and processing
- Input, Processing, Output cycle
- Hardware components (CPU, memory, storage)
- Characteristics of computers
- Evolution of computers
- Impact of computers on life

---

**Simple Understanding:**

**What is a Computer?**
👉 Computer ek machine hai jo data ko process karti hai  

👉 Data = information jo computer ko di jati hai  

👉 Processing = data ko handle karna (calculate, compare, add)

---

**Computer Working (IPO Cycle):**
👉 Computer 3 steps par kaam karta hai:

1. Input → data dena  
2. Processing → data par kaam karna  
3. Output → result dena  

📌 Example:
👉 Cloth (input) → sewing (processing) → shirt (output)

---

**Computer Components:**

👉 CPU (Central Processing Unit)
- Main part of computer  
- Processing karta hai  

👉 Input Devices:
- Keyboard, card reader  

👉 Output:
- Result display hota hai  

👉 Storage Devices:
- Data save hota hai  
- Example: magnetic disks, tapes  

---

**Important Concept:**
👉 Computer sirf adding machine nahi hai  

👉 Yeh unlimited kaam kar sakta hai  
👉 Limit sirf human imagination hai  

---

**Old vs Modern Computers:**

👉 Old computers:
- Bohat expensive  
- Large size  
- Zyada staff needed  

👉 Modern computers:
- Cheap  
- Small (compact)  
- Fast  
- Reliable  

---

**Impact of Computers:**

👉 Routine kaam reduce karte hain  
👉 Time save hota hai  
👉 Creative work ke liye time milta hai  
👉 New jobs create hui hain  

---

**Quick Revision Points:**
- Computer data process karta hai  
- Input → Processing → Output  
- CPU main part hai  
- Storage data save karta hai  
- Computer versatile hai  
- Old computers large thay  
- Modern computers fast aur cheap hain  
- Computers ne life change kar di`,

  questions: [
    {
      q: 'Computers are machines designed to:',
      options: ['A. Play games only', 'B. Process data', 'C. Print papers', 'D. Draw images'],
      answer: 'B. Process data',
      diff: 'easy',
    },
    {
      q: 'Data means:',
      options: ['A. Machine', 'B. Information', 'C. Device', 'D. Program'],
      answer: 'B. Information',
      diff: 'easy',
    },
    {
      q: 'Processing means:',
      options: ['A. Storing data', 'B. Handling data', 'C. Deleting data', 'D. Printing data'],
      answer: 'B. Handling data',
      diff: 'easy',
    },
    {
      q: 'Which is correct order?',
      options: ['A. Output → Input → Processing', 'B. Input → Output → Processing', 'C. Input → Processing → Output', 'D. Processing → Input → Output'],
      answer: 'C. Input → Processing → Output',
      diff: 'easy',
    },
    {
      q: 'The main part of computer is:',
      options: ['A. Keyboard', 'B. CPU', 'C. Mouse', 'D. Monitor'],
      answer: 'B. CPU',
      diff: 'easy',
    },
    {
      q: 'CPU stands for:',
      options: ['A. Central Program Unit', 'B. Central Processing Unit', 'C. Computer Processing Unit', 'D. Control Processing Unit'],
      answer: 'B. Central Processing Unit',
      diff: 'medium',
    },
    {
      q: 'Which is an input device?',
      options: ['A. Monitor', 'B. Printer', 'C. Keyboard', 'D. Speaker'],
      answer: 'C. Keyboard',
      diff: 'easy',
    },
    {
      q: 'Storage devices are used to:',
      options: ['A. Show output', 'B. Save data', 'C. Process data', 'D. Input data'],
      answer: 'B. Save data',
      diff: 'easy',
    },
    {
      q: 'Computer versatility means:',
      options: ['A. Limited work', 'B. Only calculations', 'C. Many types of work', 'D. No work'],
      answer: 'C. Many types of work',
      diff: 'medium',
    },
    {
      q: 'Computers are limited by:',
      options: ['A. Size', 'B. Cost', 'C. Human imagination', 'D. Speed'],
      answer: 'C. Human imagination',
      diff: 'medium',
    },
    {
      q: 'Old computers were:',
      options: ['A. Small and cheap', 'B. Fast and reliable', 'C. Large and expensive', 'D. Portable'],
      answer: 'C. Large and expensive',
      diff: 'easy',
    },
    {
      q: 'Modern computers are:',
      options: ['A. Large', 'B. Slow', 'C. Cheap and compact', 'D. Manual'],
      answer: 'C. Cheap and compact',
      diff: 'easy',
    },
    {
      q: 'Computers help to:',
      options: ['A. Increase boring work', 'B. Reduce routine tasks', 'C. Stop creativity', 'D. Remove jobs'],
      answer: 'B. Reduce routine tasks',
      diff: 'medium',
    },
    {
      q: 'Secondary storage is used for:',
      options: ['A. Temporary data', 'B. Long-term storage', 'C. Input', 'D. Output'],
      answer: 'B. Long-term storage',
      diff: 'hard',
    },
    {
      q: 'Which statement is true?',
      options: ['A. Computers do only one task', 'B. Computers cannot process data', 'C. Computers changed our lives', 'D. Computers are useless'],
      answer: 'C. Computers changed our lives',
      diff: 'easy',
    },
  ],
},




// Lecture 10///


10: {
  title: 'Mainframe Computers',
  summary: `**Key Topics Covered:**
- Mainframe computers
- Digital vs Analog computers
- Hybrid computers
- Features of mainframes
- Advantages and limitations
- Future developments

---

**Simple Understanding:**

**Mainframes:**
👉 Mainframe bohat large aur powerful computers hotay hain  

👉 Huge amount of data process karte hain  
👉 Mostly big organizations use karti hain  

---

**Features of Mainframes:**
👉 High-speed processing  
👉 Large memory  
👉 Complex instructions execute karte hain  
👉 Faster than small computers  

👉 Small computer:
- Multiple steps leta hai  

👉 Mainframe:
- Same kaam 1 step mein kar sakta hai  

---

**Types of Computers:**

### 👉 1. Digital Computers
👉 Sabse zyada use hotay hain (90%)

👉 Data digits (0,1) ki form mein hota hai  
👉 Step-by-step calculations karte hain  
👉 Fast aur accurate  

---

### 👉 2. Analog Computers
👉 Continuous calculations karte hain  

👉 Example:
- Speedometer  

👉 Measurement problems ke liye use hotay hain  

---

### 👉 3. Hybrid Computers
👉 Digital + Analog ka combination  

👉 Scientific research mein use hotay hain  

---

**Mainframe Requirements:**
👉 Large space chahiye  
👉 Cooling system (AC)  
👉 High power consumption  
👉 Expensive machines  

👉 Peripheral devices (tapes, disks) zyada space lete hain  

---

**Important Concept:**
👉 Digital computer ab analog ka kaam bhi kar sakta hai  

👉 Easier to use  
👉 Cheaper than analog  

---

**Future of Computers:**
👉 Mechanical devices improve hongay  
👉 Efficiency aur reliability better hogi  

---

**Quick Revision Points:**
- Mainframes = large powerful computers  
- Digital computers = most used  
- Analog = continuous calculations  
- Hybrid = combination  
- Mainframes fast aur expensive hotay hain  
- Large space aur cooling required  
- Future mein improvement expected`,

  questions: [
    {
      q: 'Mainframe computers are:',
      options: ['A. Small', 'B. Portable', 'C. Large and powerful', 'D. Manual'],
      answer: 'C. Large and powerful',
      diff: 'easy',
    },
    {
      q: 'Mainframes process:',
      options: ['A. Small data', 'B. No data', 'C. Huge amount of data', 'D. Images only'],
      answer: 'C. Huge amount of data',
      diff: 'easy',
    },
    {
      q: 'Digital computers use:',
      options: ['A. Letters', 'B. Symbols', 'C. Digits', 'D. Images'],
      answer: 'C. Digits',
      diff: 'easy',
    },
    {
      q: 'Digital computers perform calculations:',
      options: ['A. Continuously', 'B. Step-by-step', 'C. Randomly', 'D. Slowly'],
      answer: 'B. Step-by-step',
      diff: 'easy',
    },
    {
      q: 'Analog computers are used for:',
      options: ['A. Gaming', 'B. Measurement', 'C. Printing', 'D. Writing'],
      answer: 'B. Measurement',
      diff: 'easy',
    },
    {
      q: 'Hybrid computer is:',
      options: ['A. Only digital', 'B. Only analog', 'C. Combination of both', 'D. Manual'],
      answer: 'C. Combination of both',
      diff: 'easy',
    },
    {
      q: 'Which type is most commonly used?',
      options: ['A. Analog', 'B. Hybrid', 'C. Digital', 'D. Manual'],
      answer: 'C. Digital',
      diff: 'medium',
    },
    {
      q: 'Analog computer works like:',
      options: ['A. Calculator', 'B. Keyboard', 'C. Speedometer', 'D. Printer'],
      answer: 'C. Speedometer',
      diff: 'medium',
    },
    {
      q: 'Mainframes require:',
      options: ['A. Small space', 'B. No power', 'C. Large space and cooling', 'D. No devices'],
      answer: 'C. Large space and cooling',
      diff: 'medium',
    },
    {
      q: 'Peripheral devices include:',
      options: ['A. CPU only', 'B. Tape and disks', 'C. Keyboard only', 'D. Monitor only'],
      answer: 'B. Tape and disks',
      diff: 'medium',
    },
    {
      q: 'Digital computers are preferred because they are:',
      options: ['A. Expensive', 'B. Difficult', 'C. Easier and cheaper', 'D. Slower'],
      answer: 'C. Easier and cheaper',
      diff: 'medium',
    },
    {
      q: 'Mainframe power consumption is:',
      options: ['A. Low', 'B. Medium', 'C. High', 'D. Zero'],
      answer: 'C. High',
      diff: 'hard',
    },
    {
      q: 'Hybrid computers are mainly used in:',
      options: ['A. Gaming', 'B. Offices', 'C. Scientific research', 'D. Schools'],
      answer: 'C. Scientific research',
      diff: 'medium',
    },
    {
      q: 'Future development is needed in:',
      options: ['A. Software only', 'B. Mechanical devices', 'C. Screens', 'D. Input devices'],
      answer: 'B. Mechanical devices',
      diff: 'hard',
    },
    {
      q: 'Mainframes are expensive because:',
      options: ['A. Small size', 'B. Low speed', 'C. High power and equipment', 'D. No memory'],
      answer: 'C. High power and equipment',
      diff: 'hard',
    },
  ],
},



// lecture 11//



11: {
  title: 'Reading Comprehension & Inference',
  summary: `**Key Topics Covered:**
- Reading speed vs comprehension
- Vocalization
- Silent reading
- Understanding text (Why, What, How)
- Making inferences
- Logical thinking in reading

---

**Simple Understanding:**

**Reading Speed & Comprehension:**
👉 Fast reading se comprehension kharab hoti hai — yeh galat hai  

👉 Practice se:
- Speed bhi improve hoti hai  
- Understanding bhi better hoti hai  

---

**Vocalization (Important ⚠️):**
👉 Words ko mind mein pronounce karna  

👉 Yeh slow reading ka main reason hai  

👉 Solution:
- Lips use na karo  
- Eyes + mind se read karo  
- Silent reading practice karo  

---

**Better Reading Strategy:**

👉 Har text ko samajhne ke liye 3 questions pocho:

- Why? (kyun likha gaya)  
- What? (kya likha gaya)  
- How? (kaise explain kiya gaya)  

👉 Yeh method comprehension strong karta hai  

---

**Making Inferences:**
👉 "Reading between the lines"  

👉 Matlab:
- Jo directly nahi likha  
- Usko samajhna  

👉 Writer hint deta hai, direct nahi batata  

---

**Inference kaise banate hain:**
👉 Clues use karo:
- Given information  
- Apna experience  
- Logic  

👉 Strong inference:
- Sirf wahi jo clearly support ho  

---

**Example:**
👉 Sohail last row mein baithta hai  

Correct inference:
👉 Woh front mein baithna pasand nahi karta  

❌ Wrong:
- Woh weak student hai  
- Woh prepared nahi hai  

👉 Kyun?
➡️ Evidence nahi hai  

---

**Important Rule:**
👉 Guess mat karo  
👉 Sirf logical conclusion nikalo  

---

**Quick Revision Points:**
- Fast reading harmful nahi hoti  
- Vocalization slow karta hai  
- Silent reading best hai  
- Why, What, How samjho  
- Inference = hidden meaning  
- Clues + logic use karo  
- Unsupported conclusion avoid karo`,

  questions: [
    {
      q: 'Reading faster always reduces comprehension:',
      options: ['A. True', 'B. False', 'C. Sometimes', 'D. Never'],
      answer: 'B. False',
      diff: 'easy',
    },
    {
      q: 'Vocalization means:',
      options: ['A. Writing words', 'B. Speaking loudly', 'C. Pronouncing words in mind', 'D. Skipping words'],
      answer: 'C. Pronouncing words in mind',
      diff: 'easy',
    },
    {
      q: 'Vocalization causes:',
      options: ['A. Fast reading', 'B. Slow reading', 'C. Better memory', 'D. No effect'],
      answer: 'B. Slow reading',
      diff: 'easy',
    },
    {
      q: 'Best way to read is:',
      options: ['A. Loudly', 'B. With lips', 'C. Silently', 'D. Slowly'],
      answer: 'C. Silently',
      diff: 'easy',
    },
    {
      q: 'Rhetoric helps in:',
      options: ['A. Writing only', 'B. Reading understanding', 'C. Speaking only', 'D. Typing'],
      answer: 'B. Reading understanding',
      diff: 'medium',
    },
    {
      q: 'Good readers ask:',
      options: ['A. Where only', 'B. Why, What, How', 'C. When only', 'D. Who only'],
      answer: 'B. Why, What, How',
      diff: 'easy',
    },
    {
      q: 'Inference means:',
      options: ['A. Direct meaning', 'B. Hidden meaning', 'C. Wrong meaning', 'D. No meaning'],
      answer: 'B. Hidden meaning',
      diff: 'easy',
    },
    {
      q: '“Reading between the lines” means:',
      options: ['A. Skipping text', 'B. Reading loudly', 'C. Making inferences', 'D. Writing notes'],
      answer: 'C. Making inferences',
      diff: 'medium',
    },
    {
      q: 'Inference is based on:',
      options: ['A. Guess', 'B. Logic and clues', 'C. Memory only', 'D. Speed'],
      answer: 'B. Logic and clues',
      diff: 'easy',
    },
    {
      q: 'Strong inference should be:',
      options: ['A. Random', 'B. Unsupported', 'C. Logical', 'D. Emotional'],
      answer: 'C. Logical',
      diff: 'medium',
    },
    {
      q: 'Sohail sits at the back. Best inference is:',
      options: ['A. He is weak', 'B. He dislikes front seats', 'C. He is lazy', 'D. He is blind'],
      answer: 'B. He dislikes front seats',
      diff: 'medium',
    },
    {
      q: 'Unsupported conclusions should be:',
      options: ['A. Accepted', 'B. Avoided', 'C. Ignored sometimes', 'D. Written'],
      answer: 'B. Avoided',
      diff: 'easy',
    },
    {
      q: 'Silent reading improves:',
      options: ['A. Speed only', 'B. Understanding only', 'C. Both speed and comprehension', 'D. Nothing'],
      answer: 'C. Both speed and comprehension',
      diff: 'medium',
    },
    {
      q: 'Inference uses:',
      options: ['A. Only text', 'B. Only experience', 'C. Text + experience + logic', 'D. Guess'],
      answer: 'C. Text + experience + logic',
      diff: 'hard',
    },
    {
      q: 'Poor readers usually:',
      options: ['A. Read silently', 'B. Avoid vocalization', 'C. Use vocalization', 'D. Read fast'],
      answer: 'C. Use vocalization',
      diff: 'medium',
    },
  ],
},




// lecture 12 //

12: {
  title: 'Inference, Fact vs Opinion & Time Relaters',
  summary: `**Key Topics Covered:**
- Making inferences (practice)
- Logical reasoning
- Fact vs Opinion
- Value words
- Time relaters (time expressions)
- Understanding paragraphs

---

**Simple Understanding:**

**Making Inferences (Advanced):**
👉 Inference = hidden meaning samajhna  

👉 Direct likha nahi hota  
👉 Clues + logic use karte hain  

---

**Important Rule:**
👉 Sirf wahi inference choose karo jo strongly supported ho  

👉 Weak ya guess-based answer avoid karo  

---

**Examples:**

👉 School mein police ho:
➡️ Problem ya discipline issue ho sakta hai  

👉 Dog cringes:
➡️ Dog dara hua hai ya abuse hua hai  

---

**Logical Thinking:**
👉 Har statement ka correct inference:
- Evidence based hona chahiye  
- Guess nahi hona chahiye  

---

**Superautomation (Concept):**
👉 Machines aur computers ka use kaam automate karne ke liye  

👉 Effects:
- Jobs replace ho sakti hain  
- New jobs create hoti hain  
- Work efficient hota hai  

---

**Fact vs Opinion:**

👉 Fact:
- Real, verifiable  
- Evidence hota hai  

👉 Opinion:
- Personal belief  
- Prove nahi hota  

---

**Important Rules:**

👉 Fact galat bhi ho sakta hai (new evidence se)  
👉 Opinion ko kabhi fact jaisa present kiya jata hai  
👉 Value words = opinion  

---

**Value Words Examples:**
👉 good, bad, best, worst, great, terrible  

👉 Yeh subjective hote hain  

---

**Time Relaters:**

👉 Time show karte hain  

---

**Present Time:**
👉 now, today, at present, at the moment  

---

**Simultaneous (same time):**
👉 meanwhile, at the same time  

---

**Future / After:**
👉 later, next, afterwards, soon  

---

**Understanding Paragraphs:**
👉 Time relaters help:
- Sequence samajhne mein  
- Events order identify karne mein  

---

**Quick Revision Points:**
- Inference = hidden meaning  
- Strong inference = logical + evidence  
- Guess avoid karo  
- Fact = proven  
- Opinion = belief  
- Value words = opinion  
- Time relaters = sequence show karte hain  
- meanwhile = same time  
- afterwards = later`,

  questions: [
    {
      q: 'Inference means:',
      options: ['A. Direct meaning', 'B. Hidden meaning', 'C. No meaning', 'D. Guess'],
      answer: 'B. Hidden meaning',
      diff: 'easy',
    },
    {
      q: 'Strong inference is based on:',
      options: ['A. Guess', 'B. Emotion', 'C. Logic and evidence', 'D. Memory'],
      answer: 'C. Logic and evidence',
      diff: 'easy',
    },
    {
      q: 'A dog cringes when touched. Best inference:',
      options: ['A. Dog is happy', 'B. Dog is hungry', 'C. Dog is afraid', 'D. Dog is fast'],
      answer: 'C. Dog is afraid',
      diff: 'easy',
    },
    {
      q: 'Police in school may indicate:',
      options: ['A. Party', 'B. Discipline issue', 'C. Sports event', 'D. Holiday'],
      answer: 'B. Discipline issue',
      diff: 'medium',
    },
    {
      q: 'Fact is:',
      options: ['A. Opinion', 'B. Guess', 'C. Verifiable truth', 'D. Feeling'],
      answer: 'C. Verifiable truth',
      diff: 'easy',
    },
    {
      q: 'Opinion is:',
      options: ['A. Proven fact', 'B. Personal belief', 'C. Data', 'D. Number'],
      answer: 'B. Personal belief',
      diff: 'easy',
    },
    {
      q: 'Value words represent:',
      options: ['A. Facts', 'B. Opinions', 'C. Numbers', 'D. Data'],
      answer: 'B. Opinions',
      diff: 'easy',
    },
    {
      q: 'Which is a value word?',
      options: ['A. Computer', 'B. Good', 'C. Data', 'D. Input'],
      answer: 'B. Good',
      diff: 'easy',
    },
    {
      q: '“Now” is a:',
      options: ['A. Past relater', 'B. Time relater', 'C. Verb', 'D. Noun'],
      answer: 'B. Time relater',
      diff: 'easy',
    },
    {
      q: '“Meanwhile” shows:',
      options: ['A. Past', 'B. Future', 'C. Same time', 'D. End'],
      answer: 'C. Same time',
      diff: 'medium',
    },
    {
      q: '“Afterwards” means:',
      options: ['A. Before', 'B. During', 'C. Later', 'D. Now'],
      answer: 'C. Later',
      diff: 'easy',
    },
    {
      q: 'Superautomation means:',
      options: ['A. Manual work', 'B. Automated machines', 'C. Slow work', 'D. No work'],
      answer: 'B. Automated machines',
      diff: 'medium',
    },
    {
      q: 'Machines help to:',
      options: ['A. Reduce work', 'B. Increase errors', 'C. Stop jobs', 'D. Waste time'],
      answer: 'A. Reduce work',
      diff: 'easy',
    },
    {
      q: 'Opinion may be presented as:',
      options: ['A. Fact', 'B. Data', 'C. Code', 'D. Input'],
      answer: 'A. Fact',
      diff: 'hard',
    },
    {
      q: 'Time relaters help in:',
      options: ['A. Grammar only', 'B. Sequence understanding', 'C. Writing only', 'D. Speaking'],
      answer: 'B. Sequence understanding',
      diff: 'medium',
    },
  ],
},




//lecture 13 ///

  },
  
};

export default mcqs;