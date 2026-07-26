// ─────────────────────────────────────────────────────────────────
//  examData.js — Exam paper data
//  Save as: src/data/examData.js
//
//  Structure:
//  examData[SUBJECT_ID][PAPER_TYPE] = {
//    mcqs: [ { q, options, answer } ],       ← auto-checked
//    subjective: [ { q, marks } ],            ← manually attempted (MTH101, MTH202, PHY101 only)
//  }
//
//  PAPER_TYPE: 'mid' | 'final'
// ─────────────────────────────────────────────────────────────────

const examData = {

  // ──────────────────────────────────
  //  MTH101 — Calculus
  // ──────────────────────────────────
  MTH101: {
    mid: {
      title: 'MTH101 — Mid Term Examination',
      totalMarks: 40,
      mcqMarks: 1,     // marks per MCQ
      mcqs: [
        { q: 'Which hierarchy from smallest to largest set is correct?', options: ['A. Natural → Integer → Rational → Real', 'B. Integer → Natural → Rational → Real', 'C. Natural → Rational → Integer → Real', 'D. Rational → Integer → Natural → Real'], answer: 'A. Natural → Integer → Rational → Real' },
        { q: 'The number zero (0) belongs to which set but NOT to natural numbers?', options: ['A. Rational numbers', 'B. Irrational numbers', 'C. Integers', 'D. Complex numbers'], answer: 'C. Integers' },
        { q: 'Who demonstrated the existence of irrational numbers in the 5th century BC?', options: ['A. Pythagoras', 'B. Descartes', 'C. Hippasus of Metapontum', 'D. Euclid'], answer: 'C. Hippasus of Metapontum' },
        { q: 'A rational number in decimal form will always:', options: ['A. Be a whole number', 'B. End or repeat in a pattern forever', 'C. Be an infinite non-repeating decimal', 'D. Be negative'], answer: 'B. End or repeat in a pattern forever' },
        { q: 'Analytic geometry and the coordinate line were developed by:', options: ['A. Pythagoras in ancient Greece', 'B. Hippasus in 5th century BC', 'C. Descartes in the 1600s', 'D. Newton in the 1700s'], answer: 'C. Descartes in the 1600s' },
        { q: 'When multiplying both sides of an inequality by a NEGATIVE number, the direction:', options: ['A. Stays the same', 'B. Reverses', 'C. Both sides become equal', 'D. Becomes undefined'], answer: 'B. Reverses' },
        { q: 'The closed interval [a, b] is defined as:', options: ['A. {x : a < x < b}', 'B. {x : a ≤ x < b}', 'C. {x : a < x ≤ b}', 'D. {x : a ≤ x ≤ b}'], answer: 'D. {x : a ≤ x ≤ b}' },
        { q: 'The absolute value |−a| equals:', options: ['A. −|a|', 'B. |a|', 'C. a', 'D. −a'], answer: 'B. |a|' },
        { q: '√(a²) for any real number a equals:', options: ['A. a', 'B. −a', 'C. |a|', 'D. a²'], answer: 'C. |a|' },
        { q: 'Solve |x − 3| = 4. What are the solutions?', options: ['A. x = 7 only', 'B. x = −1 only', 'C. x = 7 and x = −1', 'D. x = 1 and x = −7'], answer: 'C. x = 7 and x = −1' },
        { q: 'The interval (−∞, b] is classified as:', options: ['A. Finite and open', 'B. Infinite and open', 'C. Infinite and closed', 'D. Finite and closed'], answer: 'C. Infinite and closed' },
        { q: 'The Triangle Inequality states that for any real numbers a and b:', options: ['A. |a + b| = |a| + |b|', 'B. |a + b| ≥ |a| + |b|', 'C. |a + b| ≤ |a| + |b|', 'D. |a + b| < |a| − |b|'], answer: 'C. |a + b| ≤ |a| + |b|' },
        { q: 'If a < b and c < d, then:', options: ['A. a − c < b − d', 'B. a + c < b + d', 'C. ac < bd', 'D. a/c < b/d'], answer: 'B. a + c < b + d' },
        { q: 'The solution of |x − 3| < 4 in interval notation is:', options: ['A. (−7, 1)', 'B. (−1, 7)', 'C. [−1, 7]', 'D. (3, 4)'], answer: 'B. (−1, 7)' },
        { q: 'A nonnegative number is one that satisfies:', options: ['A. a > 0', 'B. a < 0', 'C. a ≥ 0', 'D. a ≤ 0'], answer: 'C. a ≥ 0' },
        { q: 'What does A ∩ B represent?', options: ['A. All elements in A or B', 'B. Elements in A but not B', 'C. Elements in both A and B', 'D. Elements in B but not A'], answer: 'C. Elements in both A and B' },
        { q: 'Which number is proven irrational by a right triangle with base and height equal to 1?', options: ['A. √3', 'B. π', 'C. √2', 'D. 1/3'], answer: 'C. √2' },
        { q: 'Multiplying both sides of an inequality by zero is:', options: ['A. Always allowed', 'B. Not allowed — it changes the solution set', 'C. Allowed for positive values only', 'D. Allowed only if x is unknown'], answer: 'B. Not allowed — it changes the solution set' },
        { q: 'The expression a < b < c means:', options: ['A. a < b only', 'B. b < c only', 'C. a < b AND b < c', 'D. a < c only'], answer: 'C. a < b AND b < c' },
        { q: 'The distance formula between two points A(a) and B(b) on a coordinate line is:', options: ['A. d = a − b', 'B. d = b − a', 'C. d = |b − a|', 'D. d = |a + b|'], answer: 'C. d = |b − a|' },
      ],
      subjective: [
        { q: 'Solve the inequality 2x − 5 < 7 and write the solution in interval notation. Show all steps.', marks: 5 },
        { q: 'Prove that √2 is an irrational number using the standard contradiction argument.', marks: 5 },
        { q: 'Solve for x: |3x + 6| = 12. Find all solutions and verify.', marks: 5 },
        { q: 'Using the Triangle Inequality, prove that |a − b| ≥ ||a| − |b|| for any real numbers a and b.', marks: 5 },
      ],
    },
    final: {
      title: 'MTH101 — Final Term Examination',
      totalMarks: 60,
      mcqMarks: 1,
      mcqs: [
        {
        "q": "Question content is missing in the PDF for Q1.",
        "options": [
            "A. (not available)",
            "B. (not available)",
            "C. (not available)",
            "D. (not available)"
        ],
        "answer": "A. (not available)"
    },
    {
        "q": "Which of the following statements is true about ∫₀¹ (sinx + cosx) dx?",
        "options": [
            "A. ∫₀¹ (sinx+cosx)dx = [sinx]₁₀ + [cosx]₁₀",
            "B. ∫₀¹ (sinx+cosx)dx = [sinx]₁₀ - [cosx]₁₀",
            "C. ∫₀¹ (sinx+cosx)dx = [cosx]₁₀ + [sinx]₁₀",
            "D. None"
        ],
        "answer": "C. ∫₀¹ (sinx+cosx)dx = [cosx]₁₀ + [sinx]₁₀"
    },
    {
        "q": "If the function and limits of definite integral are the same and variable of integration are changed, i.e. ∫ₐᵇ f(x)dx = ∫ₐᵇ f(t)dt, then the answer would be:",
        "options": [
            "A. do not changed",
            "B. changed"
        ],
        "answer": "A. do not changed"
    },
    {
        "q": "In integration of f(x) = x(x² - 3)⁴, let u = x² - 3, then du =",
        "options": [
            "A. dx",
            "B. x",
            "C. 2x",
            "D. 2x dx"
        ],
        "answer": "D. 2x dx"
    },
    {
        "q": "Which of the following statements is true?",
        "options": [
            "A. ∫₀¹ (4sinx + 3sec²x) dx = 3∫₀¹ 4sinx dx + 4∫₀¹ 3sec²x dx",
            "B. None",
            "C. ∫₀¹ (2cosx - 5tan²x) dx = ∫₀¹ 5tan²x dx - ∫₀¹ 2cosx dx",
            "D. ∫₀¹ 7cosx dx = 7[sinx]₁₀"
        ],
        "answer": "D. ∫₀¹ 7cosx dx = 7[sinx]₁₀"
    },
    {
        "q": "Which of the following is the definite integral of f(x) = x² from x = 1 to x = 2?",
        "options": [
            "A. 8/3",
            "B. 7/3",
            "C. None of these.",
            "D. 7"
        ],
        "answer": "B. 7/3"
    },
    {
        "q": "The integral of a constant function is 0.",
        "options": [
            "A. False",
            "B. True"
        ],
        "answer": "A. False"
    },

    {
        "q": "The integral ∫ 4x/(2x^2+1)^2 dx will be equal to ?",
        "options": [
            "- 1/(2x^2 + 1) + c",
            "- 1/((2x^2 + 1)^3) + c",
            "1/(2x^2 + 1) + c",
            "- 1/(2x + 1) + c"
        ],
        "answer": "- 1/(2x^2 + 1) + c"
    },
    {
        "q": "If f(x) = x^5 + x, then which of the following is true about it.",
        "options": [
            "Its anti – derivative is x^5/5 + 1.",
            "Its anti – derivative is x^6/6 + x^2/2 + 6.",
            "Its anti – derivative is 5x^4 + 1.",
            "None of these."
        ],
        "answer": "Its anti – derivative is x^6/6 + x^2/2 + 6."
    },
    {
        "q": "Which of the following is the sum of 5^(k+1) where k goes from 1 to 3?",
        "options": [
            "525",
            "675",
            "775",
            "875"
        ],
        "answer": "775"
    },
    {
        "q": "What will be the value of summation of k3 where k goes from 3 to 3?",
        "options": [
            "9",
            "1",
            "27",
            "3"
        ],
        "answer": "27"
    },
    {
        "q": "Newton’s method is not applicable when ‘f’ is a …………",
        "options": [
            "Exponential function.",
            "Trignometric function",
            "Constant function",
            "Polynomial"
        ],
        "answer": "Constant function"
    },
    {
        "q": "1+2+3+…+200 equals _____.",
        "options": [
            "20100",
            "20012",
            "21021",
            "21220"
        ],
        "answer": "20100"
    },
    {
        "q": "The derivative of the area under the continuous function f(x)= 2+3Sinx in the interval[-pi,pi] is---------",
        "options": [
            "2-3Cosx",
            "2-3Sinx",
            "2+3Cosx",
            "2+3Sinx"
        ],
        "answer": "2+3Sinx"
    },
    {
        "q": "If f(x)=Tan(x) then mean value theorem can be applied to it on the interval (0,2pi)",
        "options": [
            "False",
            "True"
        ],
        "answer": "False"
    },
    {
        "q": "By using Newton method, which of the following is the poorest initial approximate solution of equation:x+Cosx=0?",
        "options": [
            "x=-pi/3",
            "x=0",
            "x=pi/2",
            "x=-pi/4"
        ],
        "answer": "x=0"
    },
    {
        "q": "For the given function f(x)= 2(x^2)+1 in the interval [-1,2] , which condition of Rolle’s theorem is not satisfied.",
        "options": [
            "f (-1) = f (2)",
            "The function is continuous in the interval",
            "The function is differentiable in the interval",
            "None of these."
        ],
        "answer": "f (-1) = f (2)"
    },
    {
        "q": "How many subintervals of length ‘2’ will be formed for the interval [4,16] ?",
        "options": [
            "5",
            "7",
            "4",
            "6"
        ],
        "answer": "6"
    },
    {
        "q": "For Rolle's Theorem, f is differentiable on the interval __________.",
        "options": [
            "(a,b)",
            "[a,b]",
            "(a,b]",
            "[a,b)"
        ],
        "answer": "(a,b)"
    },
    {
        "q": "If a function f has a relative extrema at a point c, then c is a critical point for f .",
        "options": [
            "True",
            "False"
        ],
        "answer": "True"
    },
    {
        "q": "What is the estimated area under f(x) = x from x = 0 to x = 3 with mid points for n = 3?",
        "options": [
            "5.0",
            "3.5",
            "6.5",
            "4.5"
        ],
        "answer": "4.5"
    },
    {
        "q": "A critical point for a function f is any value of x in the domain of f at which",
        "options": [
            "f'(x)=0 or f is not differentiable",
            "f is differentiable",
            "f'(x) <= 0",
            "f'(x) > 0"
        ],
        "answer": "f'(x)=0 or f is not differentiable"
    },
    {
        "q": "What are critical points of the function f(x) =x-1?",
        "options": [
            "x=1",
            "No critical point",
            "x=0",
            "None of these"
        ],
        "answer": "No critical point"
    },
    {
        "q": "What will be the sigma notation for 43+63+83+103?",
        "options": [
            "summation of (2k)3 where (k varies from 2 to 5)",
            "summation of (2k)3 where (k varies from 1 to 4)",
            "summation of (2k+1)3 where (k varies from 2 to 5)",
            "summation of (2k3) where (k varies from 2 to 5)"
        ],
        "answer": "summation of (2k)3 where (k varies from 2 to 5)"
    },
    {
        "q": "In approximation to an area Rn (where n is subscript) when limit is taken as n goes to infinity, approximation becomes actual area.",
        "options": [
            "True",
            "False"
        ],
        "answer": "True"
    },
    {
        "q": "If f''(x) > 0 ∀ x ∈ I, then the graph of f is___________ on I.",
        "options": [
            "concave downward",
            "None of these",
            "concave upward",
            "constant"
        ],
        "answer": "concave upward"
    },
    {
        "q": "Integration of (Cosx/Sinx).Cosecx with respect to x…………",
        "options": [
            "-Cosecx",
            "Cosecx",
            "Cotx",
            "Secx"
        ],
        "answer": "-Cosecx"
    },
    {
        "q": "If f(x)=(x^3)+(x^2)+x+1 , then ‘f’ is continuous and differentiable everywhere because ‘f’ is a ……..",
        "options": [
            "Function",
            "Equation",
            "Polynomial",
            "Relation"
        ],
        "answer": "Polynomial"
    },
    {
        "q": "To find out critical values of a function, we put it equal to zero and solve for x.",
        "options": [
            "False",
            "True"
        ],
        "answer": "True"
    },
    {
        "q": "The anitderivative of the function f(x)=2-7Cosx, is -------",
        "options": [
            "All choices are true",
            "2x-7Sinx-100",
            "2x-7Sinx+C",
            "2x-7Sinx+100"
        ],
        "answer": "All choices are true"
    },
    {
        "q": "If f (x) = x^2 is defined on the interval [-1, 3], then which of the following is true about it.",
        "options": [
            "Its relative maximum value is 9.",
            "Its absolute maximum value is 0.",
            "Its absolute maximum value is 9.",
            "None of these."
        ],
        "answer": "Its absolute maximum value is 9."
    },
    {
        "q": "If ‘n’ goes from 1 to 4 and the summation of ‘na’ =Maxima of (e^x) in the interval[-e,0], then the value of ‘a’ is -----------",
        "options": [
            "10",
            "-10",
            "-1/10",
            "1/10"
        ],
        "answer": "1/10"
    },
    {
        "q": "If we subdivide the interval [2,4] into n equal parts, then what will be the length ∆x of each part?",
        "options": [
            "1/n",
            "6/n",
            "2/n",
            "8/n"
        ],
        "answer": "2/n"
    },
    {
        "q": "Integral of 5^2 is NOTE: x^n means ‘x’ to the power ‘n’",
        "options": [
            "None of these",
            "25x",
            "10",
            "(1/3)5^3"
        ],
        "answer": "25x"
    },
    {
        "q": "1+2+3+…+539 equals _____.",
        "options": [
            "538(540)/2",
            "539(540)/2",
            "538(539)/6",
            "538(540)/6"
        ],
        "answer": "539(540)/2"
    },
    {
        "q": "If f'(x)=x^2-1. Then the critical points of the function f are",
        "options": [
            "1, 2",
            "0, 2",
            "1, -1",
            "0, 1"
        ],
        "answer": "1, -1"
    },
    {
        "q": "What is the estimated area under f(x) = 2x from x = 0 to x = 4 with left end points for n = 2?",
        "options": [
            "8",
            "10",
            "18",
            "24"
        ],
        "answer": "8"
    },
    {
        "q": "If a function has an extreme value (either a maximum or a minimum) on an open interval (a,b), then the extreme value occurs at a ........",
        "options": [
            "Any point in the open interval (a,b)",
            "Critical point of f(x)"
        ],
        "answer": "Critical point of f(x)"
    },
    {
        "q": "Integral of (5/2)cos(x) is",
        "options": [
            "None of these",
            "(5/2)sin(x)+C",
            "(3/2)csc(x)+C",
            "(5/2)tan(x)+C"
        ],
        "answer": "(5/2)sin(x)+C"
    },
    {
        "q": "For the area under the curve f(x) = x+2 from x = 2 to x = 4 with mid points approximations for n = 1, what will be the value of f(xk*) ?",
        "options": [
            "6",
            "5",
            "3",
            "4"
        ],
        "answer": "5"
    },
    {
        "q": "If a function f is twice differentiable at a stationary point x0 and f''(x0)>0, then f has relative __________ at x0.",
        "options": [
            "Maximum",
            "Minimum",
            "Both a and b",
            "None of these"
        ],
        "answer": "Minimum"
    },
    {
        "q": "f(x) = 8x-x^2 on the closed interval [0, 6] has the critical point at x=………",
        "options": [
            "1",
            "5",
            "0",
            "4"
        ],
        "answer": "4"
    },
    {
        "q": "Let y = f(x) be a discontinuous function on a finite closed interval, then which of the following is true about it.",
        "options": [
            "It has only absolute minimum value.",
            "It must have absolute extreme values.",
            "It may or may not have absolute extreme values.",
            "None of these."
        ],
        "answer": "It may or may not have absolute extreme values."
    },
    {
        "q": "If f (x) = 2 x + 7 is defined on the interval [2, 4), then which of the following is true about it.",
        "options": [
            "It has only absolute minimum value.",
            "It has both absolute maximum and minimum values.",
            "None of these.",
            "It has only absolute maximum value."
        ],
        "answer": "It has only absolute minimum value."
    },
    {
        "q": "If the function is continuous on the closed interval [a,b], then the function has …………",
        "options": [
            "Only maximum value on the [a,b]",
            "Only minimum value on the [a,b]",
            "Only minimum value on the [a,b]",
            "Both maximum and minimum values on the [a,b]"
        ],
        "answer": "Both maximum and minimum values on the [a,b]"
    },
    {
        "q": "For the area under the curve f(x) = x+2 from x = 2 to x = 8 with left end points approximations for n = 3, what will be the values of xk* ?",
        "options": [
            "4, 6 and 8",
            "2, 6 and 8",
            "2, 4 and 6",
            "3, 5 and 7"
        ],
        "answer": "2, 4 and 6"
    },
    {
        "q": "The approximate solution is possible to generate using Newton’s Method if ___________.",
        "options": [
            "the tangent line(at approximated points) must crosses the x - axis.",
            "the slope of tangent line(at any approximated point) is zero.",
            "the tangent line(at any approximated point) is parallel to x- axis.",
            "None of these."
        ],
        "answer": "the tangent line(at approximated points) must crosses the x - axis."
    },
    {
        "q": "If ‘n’ goes from 1 to 3 and the summation of ‘na’ = derivative of Cosx at (pi/2), then the value of ‘a’=------",
        "options": [
            "-1/6",
            "1/6",
            "6",
            "-6"
        ],
        "answer": "-1/6"
    },
    {
        "q": "A critical point for a function f, where f'(x)=0 is called as __________ point.",
        "options": [
            "Mid",
            "Tangent",
            "Stationary",
            "Corner"
        ],
        "answer": "Stationary"
    },
    {
        "q": "If f(x) = Cos(x) + Sin(x) + x, then which of the following is NOT true about it.",
        "options": [
            "None of these.",
            "Its anti – derivative is Sin(x) – Cos(x) + x^2/2 + 5.",
            "Its anti – derivative is -Sin(x) – Cos(x) + x^2/2 + 4.",
            "Its anti – derivative is Sin(x) – Cos(x) + x^2/2 + 4."
        ],
        "answer": "Its anti – derivative is -Sin(x) – Cos(x) + x^2/2 + 4."
    },
    {
        "q": "What will be the value of summation of k2 where k goes from 11 to 12",
        "options": [
            "212",
            "244",
            "281",
            "265"
        ],
        "answer": "265"
    },
    {
        "q": "What is the estimated area under f(x) = 9 - x2 from x = 0 to x = 4 with mid points for n = 1?",
        "options": [
            "24",
            "21",
            "20",
            "28"
        ],
        "answer": "20"
    },
    {
        "q": "If ‘n’ goes from 1 to 3 and the summation of ‘na’ = definite integral of ‘1’ on closed interval [0,1], then the value of ‘a’=------------",
        "options": [
            "1/6",
            "-6",
            "-1/6",
            "6"
        ],
        "answer": "1/6"
    },
    {
        "q": "The estimated area under f(x) = 12 / x from x = 1 to x = 3 with right end points for n = 2 is ________.",
        "options": [
            "18.",
            "10",
            "20.",
            "None of these."
        ],
        "answer": "10"
    },
    {
        "q": "If f has a local maximum or minimum at c, and if f'(c) exists, then_________.",
        "options": [
            "f'(c) < 0",
            "f'(c) = 0",
            "None of these",
            "f'(c) > 0"
        ],
        "answer": "f'(c) = 0"
    },
    {
        "q": "For the area under the curve f(x) = x+2 from x = 2 to x = 4 with mid points approximations for n = 1, what will be the value of xk* ?",
        "options": [
            "2.5",
            "2",
            "3.5",
            "3"
        ],
        "answer": "3"
    },
    {
        "q": "If f' changes from negative to positive at c, then f has a _______________ at c.",
        "options": [
            "local minimum",
            "local maximum",
            "constant",
            "None of these"
        ],
        "answer": "local minimum"
    },
    {
        "q": "Subdivide the interval [0, 1] into 2 equal parts, and then the width of each sub-interval will have length ………",
        "options": [
            "1/2",
            "1",
            "0",
            "-1/2"
        ],
        "answer": "1/2"
    },
    {
        "q": "Critical point of function f(x) =4x^2-4x+1 on closed interval [0,1] is x = ………",
        "options": [
            "2",
            "1/2",
            "0",
            "1,2"
        ],
        "answer": "1/2"
    },
    {
        "q": "f(x)=x^3-3x, is increasing on the interval (0 ,infinity)",
        "options": [
            "True",
            "False"
        ],
        "answer": "False"
    },
    {
        "q": "12+22+32+…+192 equals _____.",
        "options": [
            "19(20)(31)/6",
            "19(20)(37)/6",
            "19(20)(21)/6",
            "19(20)(39)/6"
        ],
        "answer": "19(20)(39)/6"
    },
    {
        "q": "1+2+3+…+100 equals _____.",
        "options": [
            "5050",
            "5500",
            "5055",
            "5005"
        ],
        "answer": "5050"
    },
    {
        "q": "The indefinite integral of 5sinx is ……….",
        "options": [
            "-5cosx+c",
            "cosx/5+c",
            "-cosx/5+c",
            "5cosx +c"
        ],
        "answer": "-5cosx+c"
    },
    {
        "q": "The integral ∫ (x^2+1)^(5/2). x dx will be equal to ?",
        "options": [
            "2(x^2+1)^(7/2)/7 + c",
            "None of these",
            "(x^2+1)^(7/2)/7 + c",
            "(x^2+1)^(7/2) + c"
        ],
        "answer": "(x^2+1)^(7/2)/7 + c"
    },
    {
        "q": "If f (x) = |x| -2 is defined on the interval [-2, 2], then which of the following is true about it.",
        "options": [
            "There is a point in the interval (-2, 2) where f(x) has a horizontal tangent",
            "There is no such point in the interval (-2, 2) where f(x) has a horizontal tangent.",
            "It is discontinuous on the interval [-2, 2].",
            "None of these."
        ],
        "answer": "There is no such point in the interval (-2, 2) where f(x) has a horizontal tangent."
    },
    {
        "q": "Subdivide the interval [a, b] into 4 equal subintervals then the width of each subinterval is ------",
        "options": [
            "(b-2a)/4",
            "(b-a)/4",
            "(b-a)/2",
            "(2b-a)/4"
        ],
        "answer": "(b-a)/4"
    },
    {
        "q": "What is the estimated area under f(x) = x from x = 0 to x = 3 with left end points for n = 3?",
        "options": [
            "5",
            "6",
            "4",
            "3"
        ],
        "answer": "3"
    },
    {
        "q": "The integral ∫ 6x/(3x^2+1)^2 dx will be equal to ?",
        "options": [
            "-1/(3x^2+1)^3 + c",
            "-1/(6x+1) + c",
            "1/(3x^2+1) + c",
            "-1/(3x^2+1) + c"
        ],
        "answer": "-1/(3x^2+1) + c"
    },
    {
        "q": "The polynomial function f(x)=6x^2-30x+36 has the critical point over the real line is ………",
        "options": [
            "2/5",
            "5/2",
            "2",
            "5"
        ],
        "answer": "5/2"
    },
    {
        "q": "Let f(x)=x^3 and a=-3 ,b=3 and n = no. of partition of [-3,3]= 4 Let the widths of first, second, third and fourth intervals are 2, 1, 1, 2 respectively. Then “Mesh size” of this partition of [-3,3] is-------",
        "options": [
            "-1",
            "2",
            "1",
            "0"
        ],
        "answer": "2"
    },
    {
        "q": "If x =(1+2+3+...+10)+{(1^3)+(2^3)+(3^3)+...+ (10^3)}, then x = _______.",
        "options": [
            "55.",
            "110.",
            "3080.",
            "3025."
        ],
        "answer": "3080."
    },
    {
        "q": "If f(x) = x^4, then which of the following is Not true about it.",
        "options": [
            "Its anti – derivative is x^5/5.",
            "Its anti – derivative is x^5 + 5.",
            "Its anti – derivative is x^5/5 + 2.",
            "Its anti – derivative is x^5/5 + 10."
        ],
        "answer": "Its anti – derivative is x^5 + 5."
    },
    {
        "q": "If x = (4^2) + (5^2) + (6^2) + . . . + (30^2), then x = ________.",
        "options": [
            "465.",
            "9455.",
            "9441.",
            "400."
        ],
        "answer": "9455."
    },
    {
        "q": "What is the estimated area under f(x) = 12 / x from x = 1 to x = 3 with mid points for n = 2?",
        "options": [
            "12.8",
            "18.0",
            "13.1",
            "10.5"
        ],
        "answer": "13.1"
    },
    {
        "q": "Which of the following is the sum of (2k-1) where k goes from 0 to 2?",
        "options": [
            "-1",
            "3",
            "4",
            "-2"
        ],
        "answer": "3"
    },
    {
        "q": "The function f(x)= 2x^3-15x^2+36x have the critical points ……………on the interval [1,5]",
        "options": [
            "2,3",
            "3,4",
            "1,5",
            "2,4"
        ],
        "answer": "2,3"
    },
    {
        "q": "The estimated area under f(x) = x^2 from x = 1 to x = 3 with left end points for n = 2 is ________",
        "options": [
            "13.",
            "6.",
            "5.",
            "None of these."
        ],
        "answer": "5."
    },
    {
        "q": "If the interval [3,7] is divided into ‘4’ equal subintervals ,then right endpoint of each subinterval will be………",
        "options": [
            "3,4,5,6",
            "5,6,7,8",
            "4,5,6,7",
            "3,5,6,8"
        ],
        "answer": "4,5,6,7"
    },
    {
        "q": "For the area under the curve f(x) = 2x from x = 0 to x = 12 with mid points approximations for n = 3, what will be the values of xk* ?",
        "options": [
            "3, 7 and 11",
            "2, 5 and 8",
            "2, 6 and10",
            "1, 5 and 9"
        ],
        "answer": "2, 6 and10"
    },
    {
        "q": "The estimated area under f(x) = x^2 + 2 from x = 1 to x = 5 with left end points for n = 2 is ________.",
        "options": [
            "76.",
            "None of these.",
            "25.",
            "28."
        ],
        "answer": "28."
    },
    {
        "q": "What will be the value of summation of k2 where k goes from 8 to 8?",
        "options": [
            "1",
            "16",
            "64",
            "8"
        ],
        "answer": "64"
    },
    {
        "q": "What are critical points of the function f(x) =x^2-1? NOTE: x^n means ‘x’ to the power ‘n’",
        "options": [
            "x=0",
            "None of these",
            "x=1",
            "No critical point"
        ],
        "answer": "x=0"
    },
    {
        "q": "What is the estimated area under f(x) = 2x from x = 0 to x = 4 with mid points for n = 2?",
        "options": [
            "18",
            "16",
            "8",
            "10"
        ],
        "answer": "16"
    },
    {
        "q": "The dimensions of a rectangle are given to be 8ft by 12ft. The perimeter of rectangle will be…………..",
        "options": [
            "40 feet",
            "60 feet",
            "30 feet",
            "50feet"
        ],
        "answer": "40 feet"
    },
    {
        "q": "Subdivide the interval [3, 5] into n equal parts, and then the width of each subinterval is ----",
        "options": [
            "n",
            "-2/n",
            "1/n",
            "2/n"
        ],
        "answer": "2/n"
    },
    {
        "q": "summation of (ai) (i varies from 1 to n) , summation of (aj) (j varies from 1 to n),summation of (ak) (k varies from 1 to n) All these three represents same summation.",
        "options": [
            "False",
            "True"
        ],
        "answer": "True"
    },
    {
        "q": "The integral ∫ sec(x).tan(x) dx will be equal to ?",
        "options": [
            "cosec(x) + c",
            "None of these",
            "sec(x) + c",
            "-ln|cos(x)| + c"
        ],
        "answer": "sec(x) + c"
    },
    {
        "q": "A function f has an/a___________ at c if f(c) >= f(x) ∀ x ∈ D, where D is the domain of f.",
        "options": [
            "absolute maximum",
            "absolute maximum/global maximum",
            "global maximum",
            "local maximum"
        ],
        "answer": "absolute maximum/global maximum"
    },
    {
        "q": "summation of (n+i);where (i varies from 1 to 1) =………..",
        "options": [
            "n+1",
            "1",
            "n",
            "0"
        ],
        "answer": "n+1"
    },
    {
        "q": "If x = 3 + 4 + . . . + 20, then x = ________.",
        "options": [
            "210.",
            "250.",
            "None of these.",
            "207."
        ],
        "answer": "207."
    },
    {
        "q": "Sum the first three terms of the series, whose general term is 5ki Where first term=k1=10, Second term= k2=14 Third term=k3= -2 The correct choice is ………… Note: 1, 2, 3 and i with k are in subscript",
        "options": [
            "111",
            "011",
            "101",
            "110"
        ],
        "answer": "101"
    },
    {
        "q": "If ‘n’ goes from 1 to any large ODD number then the summation of ‘(-1)^n’ = ---------",
        "options": [
            "1",
            "-1",
            "that specific large ODD number",
            "Zero"
        ],
        "answer": "-1"
    },
    {
        "q": "For the function f(x)=|x|-1, if f(-1)=f(1)=0 then which of the following conclusion can be drawn about the point ‘c’ in the interval [-1,1] such that f ’(c)=0?",
        "options": [
            "c=0.5",
            "Every point in [-1,1] can be taken as ‘c’",
            "No such ‘c’ exists",
            "c=0"
        ],
        "answer": "No such ‘c’ exists"
    },
    {
        "q": "12+22+32+…+152 equals _____.",
        "options": [
            "15(16)(31) / 6",
            "15(16)(30) / 6",
            "15(16)(17) / 6",
            "15(16)(29) / 6"
        ],
        "answer": "15(16)(31) / 6"
    },
    {
        "q": "Absolute minimum of the function f(x)=x in the semi open interval (0,2] is-------",
        "options": [
            "1",
            "Undefined",
            "2",
            "0"
        ],
        "answer": "Undefined"
    },
    {
        "q": "Which of the following is the sum of 2k+1 where k goes from 0 to 2?",
        "options": [
            "8",
            "14",
            "10",
            "12"
        ],
        "answer": "10"
    },
    {
        "q": "The integral ∫ sec^2(5x^2).10x dx will be equal to ?",
        "options": [
            "sec(5x^2).tan(5x^2) + c",
            "tan(5x) + c",
            "tan(5x^2) + c",
            "sec^2(10x) + c"
        ],
        "answer": "tan(5x^2) + c"
    },
    {
        "q": "If we subdivide the interval [1,6] into n equal parts, then what will be the length ∆x of each part?",
        "options": [
            "7/n",
            "1/n",
            "6/n",
            "5/n"
        ],
        "answer": "5/n"
    },
    {
        "q": "For the application of mean value theorem on f( x ) =x^3-3x^2-2x ; [0,2], which of the following is true?",
        "options": [
            "f( x ) is continuous over [ 0, 2) and f(x) is differentiable over ( 0,2 )",
            "f( x ) is continuous over [ 0, 2] and f(x) is differentiable over ( 0,2 )",
            "f( x ) is continuous over [ 0, 2] and f(x) is not differentiable over ( 0,2 )",
            "f( x ) is continuous over [ 0, 2] and f(x) is differentiable over [ 0,2 )"
        ],
        "answer": "f( x ) is continuous over [ 0, 2] and f(x) is differentiable over ( 0,2 )"
    },
    {
        "q": "For the area under the curve f(x) = x+1 from x = 1 to x = 3 with mid points approximations for n = 1, what will be the value of xk* ?",
        "options": [
            "1",
            "2",
            "1.5",
            "2.5"
        ],
        "answer": "2"
    },
    {
        "q": "While solving the equation, 10x-(e^x)=0 by using Newton method, if x=0 is the initial approximate solution then the next approximation will be-----",
        "options": [
            "1/9",
            "1/10",
            "-1/10",
            "-1/9"
        ],
        "answer": "1/9"
    },
    {
        "q": "By applying Roll’s theorem on f(x) = x over the interval [-1,1], the points where the derivative of f(x)=x is not taken are………",
        "options": [
            "x= -1, 1",
            "x=0,1",
            "x=0,0.5,-0.5",
            "x=-1,0"
        ],
        "answer": "x= -1, 1"
    },
    {
        "q": "The vertical asymptotes of a function occur at the points where the denominator of the function becomes",
        "options": [
            "-1",
            "0",
            "1",
            "Undefined"
        ],
        "answer": "0"
    },
    {
        "q": "For the area under the curve f(x) = x+1 from x = 1 to x = 3 with mid points approximations for n = 1, what will be the value of f (xk*) ?",
        "options": [
            "2",
            "3",
            "1",
            "6"
        ],
        "answer": "3"
    },
    {
        "q": "Summation of 9t where ‘t’ goes from 1 to 30” is same as “summation of 9k where k goes from 1 to 30”.",
        "options": [
            "False",
            "True"
        ],
        "answer": "True"
    },
    {
        "q": "summation of (6) ;where ( j varies from 1 to 8) indicates to add ‘6’ to itself ……….. times.",
        "options": [
            "11",
            "10",
            "8",
            "9"
        ],
        "answer": "8"
    },
    {
        "q": "If ‘n’ goes from 1 to any large EVEN number then the summation of ‘(-1)^n’ = ---------",
        "options": [
            "-1",
            "zero",
            "1",
            "that specific large EVEN number"
        ],
        "answer": "zero"
    },
    {
        "q": "Integral of x^2+x^3 is NOTE: x^n means ‘x’ to the power ‘n’",
        "options": [
            "None of these",
            "(1/3)x^4+(1/4)x^3 +C",
            "(1/4)x^4+(1/3)x^3 +C",
            "x^3+x^4+C"
        ],
        "answer": "(1/3)x^4+(1/4)x^3 +C"
    },
    {
        "q": "Given a function f(x) = 1 / (x-1) and the interval is (0,2) ,then mean value theorem cannot be applied due to ……….",
        "options": [
            "Rational function",
            "None of these",
            "Discontinuity of the function in the given interval",
            "Open interval"
        ],
        "answer": "Discontinuity of the function in the given interval"
    },
    {
        "q": "The integral ∫ sin(5x) dx will be equal to ?",
        "options": [
            "5cos 5x + c",
            "-cos5x/5 + c",
            "cos5x/5 + c",
            "-cos4x/5 + c"
        ],
        "answer": "-cos5x/5 + c"
    },
    {
        "q": "The vertical asymptotes of the function f(x)=(x^2-2x+1)/(x(x-2)) are",
        "options": [
            "0, 1",
            "1, -1",
            "0, 2",
            "1, 2"
        ],
        "answer": "0, 2"
    },
    {
        "q": "3(12)+3(22)+3(32)+…+3(152) equals _____.",
        "options": [
            "15(16)(17)/2",
            "15(16)(30)/2",
            "15(16)(31)/2",
            "15(16)(29)/2"
        ],
        "answer": "15(16)(31)/2"
    },
    {
        "q": "Mean value theorem states that between any two points A and B on a curve y=f(x) , there must be at least one point where the Tangent line to the curve is……………joining A and B",
        "options": [
            "Perpendicular to the secant line",
            "Parallel to the tangent line",
            "Perpendicular to the tangent line",
            "Parallel to the secant line"
        ],
        "answer": "Parallel to the secant line"
    },
    {
        "q": "Why the equation: x^2 + 8 = 0 does not have approximate solution while using Newton's method?",
        "options": [
            "x^2 will always be nonnegative",
            "x^2 will always be negative"
        ],
        "answer": "x^2 will always be nonnegative"
    },
    {
        "q": "What does the indefinite integral ∫ f(x) dx represent?",
        "options": [
            "Families of antiderivative of the function f(x)",
            "Curvature of the curve",
            "None of these",
            "Area under the curve"
        ],
        "answer": "Families of antiderivative of the function f(x)"
    },
    {
        "q": "The estimated area under f(x) = 12 / x from x = 1 to x = 3 with left end points for n = 2 is ________.",
        "options": [
            "12.",
            "None of these.",
            "18",
            "10."
        ],
        "answer": "12."
    },
    {
        "q": "Integral of x^(-10) is NOTE: x^n means ‘x’ to the power ‘n’",
        "options": [
            "- 1/(9x^9)+C",
            "None of these",
            "-10x^(-11)+C",
            "1/(9x^9)+C"
        ],
        "answer": "- 1/(9x^9)+C"
    },
    {
        "q": "summation of (n+i) ; (i varies from 1 to 10 ) , here ‘i’ is known as the …….. of the summation.",
        "options": [
            "Upper limit",
            "Index",
            "None of these",
            "Lower limit"
        ],
        "answer": "Index"
    },
    {
        "q": "If f is______________ on a closed interval [a,b], then f, attains an absolute maximum value f(c) and an absolute minimum value f(d) at some numbers c and d in [a,b].",
        "options": [
            "None of these",
            "differentiable",
            "continuous",
            "constant"
        ],
        "answer": "continuous"
    },
    {
        "q": "13+23+33+…+193 equals _____.",
        "options": [
            "[19(20)/2]2",
            "[19(20)]2/2",
            "19(20)/22",
            "19(20)2/2"
        ],
        "answer": "[19(20)/2]2"
    },
    {
        "q": "x=1 is a critical value of the function. f(x)=(x-1)^3 NOTE: x^n means ‘x’ to the power ‘n’",
        "options": [
            "False",
            "True"
        ],
        "answer": "True"
    },
    {
        "q": "If the graph of f lies above all of its tangents on an interval I, then it is called___________ on I.",
        "options": [
            "constant function",
            "concave downward",
            "concave upward",
            "None of these"
        ],
        "answer": "concave upward"
    },
    {
        "q": "Integral of x^101 is NOTE: x^n means ‘x’ to the power ‘n’",
        "options": [
            "(1/102)x^102+C",
            "None of these",
            "102x^102+C",
            "101x^100 +C"
        ],
        "answer": "(1/102)x^102+C"
    },
    {
        "q": "To find the area between continuous curve f(x) and the closed interval [a,b] on x-axis, we take -------------- of f(x) on the interval [a,b].",
        "options": [
            "left hand limit",
            "integral",
            "right hand limit",
            "derivative"
        ],
        "answer": "integral"
    },
    {
        "q": "What is the estimated area under f(x) = 10-x2 from x = 0 to x = 3 with left end points for n = 3?",
        "options": [
            "15",
            "21",
            "25",
            "30"
        ],
        "answer": "21"
    },
    {
        "q": "Sigma notation is used to write lengthy……….in compact form.",
        "options": [
            "quotient",
            "sums",
            "difference",
            "products"
        ],
        "answer": "sums"
    },
    {
        "q": "The integral ∫ cosec^2(3x^2).6x dx will be equal to ?",
        "options": [
            "cot(3x^2) + c,",
            "-cot(3x^2) + c",
            "None of these",
            "sec(3x^2) + c"
        ],
        "answer": "-cot(3x^2) + c"
    },
    {
        "q": "If the closed interval [-2,2] is divided into ‘50’ equally spaced sub-intervals then the width of each sub-interval is ------------",
        "options": [
            "2/25",
            "1/25",
            "4/25",
            "-4/25"
        ],
        "answer": "2/25"
    },
    {
        "q": "The integral ∫ cot(2x) dx will be equal to ?",
        "options": [
            "ln|sec(2x)| + c",
            "(1/2)ln|sin(2x)| + c",
            "(1/2)ln|sec(2x)| + c",
            "ln|sin(2x)| + c"
        ],
        "answer": "(1/2)ln|sin(2x)| + c"
    },
    {
        "q": "An Inflection Point is a point where a curve changes from",
        "options": [
            "Concave up to concave down",
            "Concave down to concave up",
            "Both a and b",
            "None of these"
        ],
        "answer": "Both a and b"
    },
    {
        "q": "If a function f has a relative extrema at x0, then",
        "options": [
            "f'(x0)>0",
            "either f'(x0)=0 or f is not differentiable at x0",
            "f is differentiable at x0",
            "f'(x0)<=0"
        ],
        "answer": "either f'(x0)=0 or f is not differentiable at x0"
    },
    {
        "q": "If f'(x)=x^2-x. Then the critical points of the function f are",
        "options": [
            "0, 2",
            "1, 2",
            "1, -1",
            "0, 1"
        ],
        "answer": "0, 1"
    },
    {
        "q": "If f(x) = Cos(x) + x, then which of the following is NOT true about it.",
        "options": [
            "Its anti – derivative is Sin(x) + x^2/2 + 6.",
            "Its anti – derivative is Sin(x) + x^2/2 + 4.",
            "Its anti – derivative is Sin(x) + x^2/2 + 10.",
            "Its anti – derivative is -Sin(x) + x^2/2 + 4."
        ],
        "answer": "Its anti – derivative is -Sin(x) + x^2/2 + 4."
    },
    {
        "q": "∫ tan x dx = ________________.",
        "options": [
            "sec^2 x + C",
            "ln|sin x| + C",
            "ln|cos x| + C",
            "ln|sec x| + C"
        ],
        "answer": "ln|sec x| + C"
    },
    {
        "q": "Newton’s Method fails to find the approximate solution of an equation if _____________.",
        "options": [
            "the slope of the tangent line(at any approximated point) is non-zero",
            "the tangent line(at any approximated point) is parallel to x-axis.",
            "None of these",
            "the tangent line (at any approximated point) is not parallel to x-axis."
        ],
        "answer": "the tangent line(at any approximated point) is parallel to x-axis."
    },
    {
        "q": "Sum of n-terms of a series whose nth term is ‘n’ = ---",
        "options": [
            "n(n-1)/2",
            "(n+1)/2",
            "n(n+1)/2",
            "n(n+1)"
        ],
        "answer": "n(n+1)/2"
    },
    {
        "q": "The symbol ∫ was introduced by___________and is called integral sign.",
        "options": [
            "Newton",
            "Leibnitz",
            "Cauchy",
            "Lagrange"
        ],
        "answer": "Leibnitz"
    },
    {
        "q": "If x = (1^2)+(2^2)+(3^2)+(4^2) + . . . + (30^2), then x = ________.",
        "options": [
            "9455.",
            "None of these.",
            "900.",
            "465."
        ],
        "answer": "9455."
    },
    {
        "q": "If f''(x) < 0 ∀ x ∈ I, then the graph of f is ___________ on I.",
        "options": [
            "concave upward",
            "constant",
            "None of these",
            "concave downward"
        ],
        "answer": "concave downward"
    },
    {
        "q": "For the area under the curve f(x) = 2x from x = 0 to x = 8 with mid points approximations for n = 2, what will be the values of xk* ?",
        "options": [
            "1 and 5",
            "4 and 6",
            "3 and 7",
            "2 and 6"
        ],
        "answer": "2 and 6"
    },
    {
        "q": "The indefinite integral of ‘sec(x)tan(x)’ is…………….",
        "options": [
            "Cotx +c",
            "Sinx+c",
            "Tanx+c",
            "Secx+c"
        ],
        "answer": "Secx+c"
    },
    {
        "q": "In the indefinite integral of x(y^2) w.r.t ‘y’ , the independent variable is ……..",
        "options": [
            "xy",
            "y",
            "none of these",
            "x"
        ],
        "answer": "y"
    },
    {
        "q": "If [-8,8] is subdivided into ‘16’ equally spaced subintervals, then the LEFT end point of 13th sub-interval will be--------.",
        "options": [
            "2",
            "4",
            "3",
            "5"
        ],
        "answer": "3"
    },
    {
        "q": "What is the estimated area under f(x) = 9 - x2 from x = 0 to x = 4 with mid points for n = 2?",
        "options": [
            "25",
            "16",
            "21",
            "12"
        ],
        "answer": "21"
    },
    {
        "q": "If x=-3 and x=3 are the two critical points of the function: f(x)=81x-3(x^3) then by using the 2nd derivative test, we can conclude that f(x) is relatively maximum at-----",
        "options": [
            "x= -9",
            "x= 3",
            "x=0",
            "x=-3"
        ],
        "answer": "x= 3"
    },
    {
        "q": "The integral ∫ sec^2(2x^2).4x dx will be equal to ?",
        "options": [
            "sec^2(2x) + c",
            "tan(2x^2) + c",
            "sec(2x^2).tan(2x^2) + c",
            "tan(2x) + c"
        ],
        "answer": "tan(2x^2) + c"
    },
    {
        "q": "Sum of cubes of n-terms of a series whose nth term is ‘n’ = ---",
        "options": [
            "Square of n(n+1)(2n+1)/6",
            "Square of n(n+1)/2",
            "Square of n(n+1)/6",
            "Square of (n+1)/2"
        ],
        "answer": "Square of n(n+1)/2"
    },
    {
        "q": "‘x.ln(x/e)’ is the anti-derivative of ‘lnx’ if and only if the derivative of ‘x.ln(x/e)’ is equal to --------",
        "options": [
            "x",
            "xln(x/e)",
            "ln(x/e)",
            "lnx"
        ],
        "answer": "lnx"
    },
    {
        "q": "The value of c in Rolle's Theorem for the function f(x) = e^x sin x, x ∈ [0,π] is ________.",
        "options": [
            "3π/2",
            "π/6",
            "π/4",
            "3π/4"
        ],
        "answer": "3π/4"
    },
    {
        "q": "If f'(r) =0 at some approximation “r” then we cannot proceed on Newton’s method.",
        "options": [
            "False",
            "True"
        ],
        "answer": "True"
    },
    {
        "q": "Integration of 4Cosx with respect to x is………..",
        "options": [
            "4Sinx",
            "- 4Sinx"
        ],
        "answer": "4Sinx"
    },
    {
        "q": "If f(x) = Sin(x) + x, then which of the following is true about it",
        "options": [
            "None of these.",
            "Its anti – derivative is Cos(x) + x^2/2 + 10.",
            "Its anti – derivative is –Cos(x) + x^2/2 + 10.",
            "Its anti – derivative is Cos(x) + 1."
        ],
        "answer": "Its anti – derivative is –Cos(x) + x^2/2 + 10."
    },
    {
        "q": "Summation of ‘kx’ where k goes from 1 to 5 equals",
        "options": [
            "15x",
            "None of these",
            "55",
            "15k"
        ],
        "answer": "15x"
    },
    {
        "q": "If ‘n’ goes from 1 to 3 and the summation of ‘na’ = 6a, then the value of ‘a’ is ----------",
        "options": [
            "Undetermined",
            "6",
            "-6",
            "1"
        ],
        "answer": "Undetermined"
    },
    {
        "q": "If Newton’s Method succeeded to get the approximate solution of an equation, then which of the following is NOT true about it.",
        "options": [
            "The slope of the tangent line (at any approximated point) must be non zero.",
            "None of these.",
            "The sequence of approximated points not convergent to the exact solution",
            "The tangent line (at any approximated point) is not parallel to x-axis."
        ],
        "answer": "The sequence of approximated points not convergent to the exact solution"
    },
    {
        "q": "What is the summation of ‘kx’ where k goes from 1 to 30?",
        "options": [
            "419x",
            "465x",
            "523x",
            "414x"
        ],
        "answer": "465x"
    },
    {
        "q": "To get better approximation to actual area under a continuous curve over a closed interval, we have to increase ………",
        "options": [
            "Total area",
            "Size of the interval",
            "Number of subintervals",
            "Width of the subintervals"
        ],
        "answer": "Number of subintervals"
    },
    {
        "q": "The critical value of the function y=100x – x^2 is NOTE: x^n means ‘x’ to the power ‘n’",
        "options": [
            "x=0",
            "x=50",
            "None of these",
            "x=25"
        ],
        "answer": "x=50"
    },
    {
        "q": "Which of the following is the absolute minima of the function: f(x)=-x in the interval [-1,1]?",
        "options": [
            "-1",
            "0.5",
            "0",
            "1"
        ],
        "answer": "1"
    },
    {
        "q": "Which of the following will be left end points if the interval [-2,2] is divided into 4 equal subintervals.",
        "options": [
            "-2,-1,1,2",
            "-1,0,1,2",
            "-2,-1,0,1",
            "None of these"
        ],
        "answer": "-2,-1,0,1"
    },
    {
        "q": "Integration of 3x^2 with respect to x is…………",
        "options": [
            "x^4",
            "x",
            "x^3",
            "x^2"
        ],
        "answer": "x^3"
    },
    {
        "q": "Critical point of f(x)=-Sinx in the interval [0,pi] is-----",
        "options": [
            "pi/4",
            "pi",
            "0",
            "pi/2"
        ],
        "answer": "pi/2"
    },
    {
        "q": "If f(x)=Cot(x) then mean value theorem can be applied to it on the interval (0,2pi)",
        "options": [
            "False",
            "True"
        ],
        "answer": "False"
    },
    {
        "q": "If [-8,8] is subdivided into ‘16’ equally spaced subintervals, then the RIGHT end point of 13th sub-interval will be--------.",
        "options": [
            "5",
            "4",
            "2",
            "3"
        ],
        "answer": "4"
    },
    {
        "q": "If x = 5 + 6 + . . . + 40, then x = ________.",
        "options": [
            "810.",
            "850.",
            "820.",
            "None of these."
        ],
        "answer": "810."
    },
    {
        "q": "In [0,pi],if the area under the curve f(x)=Sinx is divided into ‘3’ equally spaced rectangles of width ‘pi/3’ then by choosing middle point for height, the area of middle rectangle is ---------.",
        "options": [
            "pi/4",
            "pi/2",
            "pi/3",
            "pi/6"
        ],
        "answer": "pi/3"
    },
    {
        "q": "For the area under the curve f(x) = 2x from x = 0 to x = 12 with left points approximations for n = 3, what will be the values of xk* ?",
        "options": [
            "0, 5 and 10",
            "0, 6 and 12",
            "0, 3 and 6",
            "0, 4 and 8"
        ],
        "answer": "0, 4 and 8"
    },
    {
        "q": "Sum of n-terms of a series whose nth term is ‘n’ = 1/n+1.then what is the sum of the first two terms is -----",
        "options": [
            "6/5",
            "6/4",
            "5/6",
            "6"
        ],
        "answer": "6/5"
    },
    {
        "q": "A function f is said to have a relative minimum at x0, if __________ for all x in some open interval containing x0.",
        "options": [
            "f(x0)=f(x)",
            "f(x0)> f(x)",
            "f(x0)<= f(x)",
            "f(x0)>= f(x)"
        ],
        "answer": "f(x0)<= f(x)"
    },
    {
        "q": "The integral ∫ sqrt(2x+3) dx will be equal to ?",
        "options": [
            "(2x+3)^(3/2)/3 + c",
            "(2x+3)^(3/2)/2 + c",
            "(2x+3)^(2/3)/3 + c",
            "(2x+3)^(1/2)/3 + c"
        ],
        "answer": "(2x+3)^(3/2)/3 + c"
    },
    {
        "q": "What is the estimated area under f(x) = x2+2 from x = 1 to x = 5 with mid points for n = 2",
        "options": [
            "26",
            "38",
            "76",
            "48"
        ],
        "answer": "38"
    },
    {
        "q": "What will be the sigma notation for 32+42+52+62 ?",
        "options": [
            "summation of (k2) where (k varies from 3 to 6)",
            "summation of (k2) where (k varies from 1 to 4)",
            "summation of (k-1)2 where (k varies from 2 to 5)",
            "summation of (k+1)2 where (k varies from 3 to 6)"
        ],
        "answer": "summation of (k2) where (k varies from 3 to 6)"
    },
    {
        "q": "Area of a rectangle whose width is 5 units and length is 6 units will be ….",
        "options": [
            "None of these",
            "22 units",
            "30 square units",
            "11 units"
        ],
        "answer": "30 square units"
    },
    {
        "q": "Which geometrical figure is used for approximating the area under the curve?",
        "options": [
            "Right angled triangle",
            "None of these",
            "Pentagon",
            "Circle"
        ],
        "answer": "Right angled triangle"
    },
    {
        "q": "The Area A of the region S that lies under the graph of the continuous function f is the limit of the sum of the areas of approximating rectangles:",
        "options": [
            "A = lim_{n→∞} Rn = lim_{n→∞} [f(x1)Δx + f(x2)Δx + ... + f(x_{n-1})Δx]",
            "A = lim_{n→∞} Rn = lim_{n→∞} 1/Δx [f(x1) + f(x2) + ... + f(xn)]",
            "A = lim_{n→∞} Rn = lim_{n→∞} [f(x1) + f(x2) + ... + f(xn)]",
            "A = lim_{n→∞} Rn = lim_{n→∞} Δx [f(x1) + f(x2) + ... + f(xn)]"
        ],
        "answer": "A = lim_{n→∞} Rn = lim_{n→∞} Δx [f(x1) + f(x2) + ... + f(xn)]"
    },
    {
        "q": "If f(x) = Sec^2 x + x^3, then which of the following is NOT true about it.",
        "options": [
            "Its anti – derivative is Tan(x) + x^4/4 + 15.",
            "Its anti – derivative is Tan(x) + x^4/4 + 10.",
            "Its anti – derivative is Tan(x) + x^4/4 + 12.",
            "None of these."
        ],
        "answer": "None of these."
    },
    {
        "q": "What is the estimated area under f(x) = 2x from x = 0 to x = 4 with right end points for n = 2?",
        "options": [
            "8",
            "24",
            "18",
            "10"
        ],
        "answer": "24"
    },
    {
        "q": "The area between f(x)=-x and the closed interval [-1,0] on x-axis is ----------",
        "options": [
            "1",
            "1/2",
            "-1/2",
            "2"
        ],
        "answer": "1/2"
    },
    {
        "q": "The estimated area under f(x) = x from x = 0 to x = 3 with right end points for n = 3 is ________.",
        "options": [
            "6.",
            "7.",
            "None of these",
            "5."
        ],
        "answer": "6."
    },
    {
        "q": "The integral ∫ 10x/(5x^2+1)^2 dx will be equal to ?",
        "options": [
            "-1/(5x+1) + c",
            "-1/(5x^2+1)^3 + c",
            "-1/(5x^2+1) + c",
            "1/(5x^2+1) + c"
        ],
        "answer": "-1/(5x^2+1) + c"
    },
    {
        "q": "Given f(x)= 1/(x-1) on the interval (0,3) , then ‘f ’ has no relative maxima or relative minima due to………",
        "options": [
            "Open interval",
            "Discontinuity in the interval",
            "Rational function",
            "None of these"
        ],
        "answer": "Discontinuity in the interval"
    },
    {
        "q": "Let f(x)=x^3 and a= -5 ,b=5 and n= no. of partition of [-3,3]=4 Let the widths of first, second, third and fourth intervals are 3,0,1,2 respectively. Then the “Mesh size” of partition is……………",
        "options": [
            "3",
            "0",
            "1",
            "2"
        ],
        "answer": "3"
    },
    {
        "q": "1+2+3……….+1000 equals -------",
        "options": [
            "500500",
            "1000",
            "None of these",
            "3000"
        ],
        "answer": "500500"
    },
    {
        "q": "Approximation to an area improves as number of partitions is decreased.",
        "options": [
            "True",
            "False"
        ],
        "answer": "False"
    },
    {
        "q": "A line y=y0 is called a horizontal asymptote for the graph of function f if",
        "options": [
            "lim_{x→+∞} f(x)=0",
            "lim_{x→+∞} f(x)=∞",
            "lim_{x→+∞} f(x)=y0",
            "lim_{x→0} f(x)=y0"
        ],
        "answer": "lim_{x→+∞} f(x)=y0"
    },
    {
        "q": "13+23+33+…+153 equals _____.",
        "options": [
            "15(16)2/2",
            "[15(16)]2/2",
            "15(16)/22",
            "[15(16)/2]2"
        ],
        "answer": "[15(16)/2]2"
    },
    {
        "q": "If the function f(x)= (x^2)+1 satisfies all the conditions of Rolle’s theorem in the interval [-1,1] , then the value of ‘c’ will be……..",
        "options": [
            "2",
            "0",
            "4",
            "3"
        ],
        "answer": "0"
    },
    {
        "q": "If a function f(x) is defined on an interval [a, b] satisfying the conditions of the Rolle’s Theorem, then which of the following is true about it.",
        "options": [
            "It may or may not have a critical point.",
            "None of these.",
            "It must have at least one critical point.",
            "It would not have more than one stationary point."
        ],
        "answer": "It must have at least one critical point."
    },
    {
        "q": "If the graph of f lies below all of its tangents on an interval I,then it is called___________ on I.",
        "options": [
            "constant function",
            "concave upward",
            "None of these",
            "concave downward"
        ],
        "answer": "concave downward"
    },
    {
        "q": "The estimated area under f(x) = x^2 + 2 from x = 1 to x = 5 with right end points for n = 2 is ________.",
        "options": [
            "28.",
            "76.",
            "50.",
            "30."
        ],
        "answer": "76."
    },
    {
        "q": "The indefinite integral of ‘cos (x) – sin (x)’ is………………",
        "options": [
            "cos (x) .sin (x) +c",
            "-cos (x) + sin (x) +c",
            "-cos (x) – sin (x)+c",
            "cos (x) +sin (x)+c"
        ],
        "answer": "-cos (x) + sin (x) +c"
    },
    {
        "q": "Which of the following is the regular partition of the interval [0,2]?",
        "options": [
            "[0,0.5],[0.5,1.25],[1.25,1.50],[1.50,2]",
            "[0,0.50],[0.50,1],[1,1.50],[1.50,2]",
            "[0,0.25],[0.25,1],[1,1.50],[1.50,2]",
            "[0,0.25],[0.25,0.75],[0.75,1.25],[1.25,2]"
        ],
        "answer": "[0,0.50],[0.50,1],[1,1.50],[1.50,2]"
    },
    {
        "q": "If f(x) =cos(x) then mean value theorem can be applied on this in the interval (pi/2, 3pi/2)",
        "options": [
            "True",
            "False"
        ],
        "answer": "True"
    },
    {
        "q": "What will be the value of summation of k3 where k goes from 9 to 10",
        "options": [
            "1729",
            "1998",
            "1081",
            "1100"
        ],
        "answer": "1729"
    },
    {
        "q": "If f (x) = x^4 is defined on the interval [-2, 2], then which of the following is true about it.",
        "options": [
            "Its relative maximum value exists at 2.",
            "None of these.",
            "Its absolute maximum value exists at 2.",
            "Its absolute minimum value exists at -2"
        ],
        "answer": "Its absolute maximum value exists at 2."
    },
    {
        "q": "The integral ∫ cos(5x) dx will be equal to ?",
        "options": [
            "-sin(5x)/5 + c",
            "None of these",
            "sin(5x)/5 + c",
            "5sin(5x) + c"
        ],
        "answer": "sin(5x)/5 + c"
    },
    {
        "q": "If the closed interval [-10,x] is divided into ‘20’ equally spaced subintervals each of which having the width equals to ‘1’ unit then the value of ‘x’ is --------",
        "options": [
            "30",
            "20",
            "0",
            "10"
        ],
        "answer": "10"
    },
    {
        "q": "The vertical asymptote of the function f(x)=(3x^2+1)/(2-x) is",
        "options": [
            "∞",
            "0",
            "-2",
            "2"
        ],
        "answer": "2"
    },
    {
        "q": "If f'(c) = 0 and f''(c) > 0, then f has a/an____________ at c.",
        "options": [
            "local maximum",
            "inflection point",
            "None of these",
            "local minimum"
        ],
        "answer": "local minimum"
    },
    {
        "q": "The area of a rectangle can be found by simply …………its dimensions.",
        "options": [
            "adding",
            "subtracting",
            "dividing",
            "multiplying"
        ],
        "answer": "multiplying"
    },
    {
        "q": "For any continuous function on the interval [0,1], if the area under this curve is divided into ‘5’ equal rectangles ,then the length of each rectangle will be………",
        "options": [
            "1/5",
            "1/4",
            "1/2",
            "1"
        ],
        "answer": "1/5"
    },
    {
        "q": "Summation of 2 where sum ranges from 0 to 10 equals 20.",
        "options": [
            "False",
            "True"
        ],
        "answer": "True"
    },
    {
        "q": "If the interval [3,7] is divided into ‘4’ equal subintervals ,then left endpoint of each subinterval will be………",
        "options": [
            "3,6,8,9",
            "3,4,5,6",
            "4,5,6,7",
            "5,6,7,8"
        ],
        "answer": "3,4,5,6"
    },
    {
        "q": "If f (x) = x^3 is defined on the interval [1, 3], then which of the following is true about it.",
        "options": [
            "None of these.",
            "Its relative minimum value exists at the critical point.",
            "Its relative minimum value does not exist at the critical point",
            "Its absolute minimum value exists at the critical point."
        ],
        "answer": "Its relative minimum value does not exist at the critical point"
    },
    {
        "q": "For the area under the curve f(x) = x+2 from x = 2 to x = 8 with right end points approximations for n = 3, what will be the values of xk* ?",
        "options": [
            "0, 4 and 8",
            "2, 4 and 8",
            "4, 6 and 8",
            "2, 5 and 8"
        ],
        "answer": "4, 6 and 8"
    },
    {
        "q": "If f(x)=1 / (x^2) and the interval is [-1,1] , then Rolle’s theorem can be applied.",
        "options": [
            "False",
            "True"
        ],
        "answer": "False"
    },
    {
        "q": "Which of the following is the sum of 2t^2 where t goes from 1 to 5?",
        "options": [
            "2+8+18+32+50",
            "2+18+32+50+62",
            "2+8+28+32+50",
            "2+18+28+32+60"
        ],
        "answer": "2+8+18+32+50"
    },
    {
        "q": "If [-8,8] is subdivided into ‘16’ equally spaced subintervals, then the MIDDLE point of 8th sub-interval will be--------.",
        "options": [
            "-0.5",
            "2.5",
            "1.5",
            "0.5"
        ],
        "answer": "0.5"
    },
    {
        "q": "Maximum of the function f(x)=2x+7 occurs at",
        "options": [
            "x=0",
            "x=-2/7",
            "None of these",
            "x=-7/2"
        ],
        "answer": "None of these"
    },
    {
        "q": "Integral of 3sec(x)tan(x) is NOTE: x^n means ‘x’ to the power ‘n’",
        "options": [
            "3tan(x)+C",
            "(3/2)sec^2(x)+C",
            "None of these",
            "3sec(x)+C"
        ],
        "answer": "3sec(x)+C"
    },
    {
        "q": "The value of c in Rolle's theorem for the function f(x) = x^3 - 3x in the interval [0,√3].",
        "options": [
            "1/3",
            "2/3",
            "1",
            "-1"
        ],
        "answer": "1"
    },
    {
        "q": "(1^3)+(2^3)+(3^3)+….+(20^3) equals --------- NOTE: x^n means ‘x’ to the power ‘n’",
        "options": [
            "None of these",
            "42925",
            "44100",
            "34548"
        ],
        "answer": "44100"
    },
    {
        "q": "For the area under the curve f(x) = x+1 from x = 1 to x = 5 with mid points approximations for n = 2, what will be the values of xk* ?",
        "options": [
            "1 and 3",
            "2.5 and 3.5",
            "2 and 4",
            "3 and 4"
        ],
        "answer": "2 and 4"
    },
    {
        "q": "The integral ∫ x/(1+x^2) dx will be equal to ?",
        "options": [
            "ln(1-x^2)/2 + c",
            "ln(1+x^2)/2 + c",
            "2ln(1+x^2) + c",
            "ln(1+x^2) + c"
        ],
        "answer": "ln(1+x^2)/2 + c"
    },
    {
        "q": "According to the Newton’s method, the equation Cosx=x (where x is in radian) has a solution between ……………",
        "options": [
            "0 and -1",
            "Solution not exist",
            "0 and 1",
            "1 and -1"
        ],
        "answer": "0 and 1"
    },
    {
        "q": "If f' changes from positive to negative at c, then f has a _______________ at c.",
        "options": [
            "local maximum",
            "local minimum",
            "constant",
            "None of these"
        ],
        "answer": "local maximum"
    },
    {
        "q": "If we say a function f have a relative extremum at a point x0, then it means that f has __________ at x0.",
        "options": [
            "Relative maximum",
            "Either a relative maximum or relative minimum",
            "Relative minimum",
            "None of these"
        ],
        "answer": "Either a relative maximum or relative minimum"
    },
    {
        "q": "1+2+3+…+339 equals _____.",
        "options": [
            "338(339)/6",
            "338(340)/2",
            "338(340)/6",
            "339(340)/2"
        ],
        "answer": "339(340)/2"
    },
    {
        "q": "2(13)+2(23)+2(33)+…+2(153) equals _____.",
        "options": [
            "[15(16)/2]2",
            "15(16)/22",
            "15(16)2/2",
            "[15(16)]2 / 2"
        ],
        "answer": "[15(16)]2 / 2"
    },
    {
        "q": "Subdivide the interval [1, 5] into ‘n’ equally spaced subintervals then the width of each sub-interval is ------",
        "options": [
            "5/n",
            "1/n",
            "4/n",
            "5"
        ],
        "answer": "4/n"
    },
    {
        "q": "Critical point for f(x) = -Cosx on [-pi/2,pi/2] are ------",
        "options": [
            "-pi/2",
            "0",
            "pi/4",
            "pi/2"
        ],
        "answer": "0"
    },
    {
        "q": "In Rolle’s theorem, f(x) is continuous in closed interval [a,b] and differentiable in open interval (a,b).Then why we don’t discuss its differentiability in the closed interval [a,b] because ---------",
        "options": [
            "f ‘(a)=f ‘(b)=0",
            "f ‘(a) and f ‘(b) never exist",
            "f(a)=f(b)=0",
            "f(a) and f(b) never exist"
        ],
        "answer": "f(a)=f(b)=0"
    },
    {
        "q": "If f(x) = x^5 + 6, then which of the following is Not true about it.",
        "options": [
            "Its anti – derivative is x^6/6 + 6x.",
            "Its anti – derivative is x^6/6 + 6x + 6.",
            "Its anti – derivative is x^6/6 + 6x + 10.",
            "Its anti – derivative is x^6/6 + 12x"
        ],
        "answer": "Its anti – derivative is x^6/6 + 12x"
    },
    {
        "q": "In the indefinite integral of x(y^2) w.r.t ‘y’ , the term ….. serve to identify the independent variable in the function.",
        "options": [
            "x",
            "dy",
            "y^2",
            "y"
        ],
        "answer": "dy"
    },
    {
        "q": "For the area under the curve f(x) = 2x from x = 0 to x = 12 with right points approximations for n = 3, what will be the values of xk* ?",
        "options": [
            "2, 7 and 12",
            "0, 6 and 12",
            "6, 9 and 12",
            "4, 8 and 12"
        ],
        "answer": "4, 8 and 12"
    },
    {
        "q": "Which of the following is the sum of (2k+1) where k goes from 3 to 5?",
        "options": [
            "27",
            "16",
            "19",
            "21"
        ],
        "answer": "27"
    },
    {
        "q": "If x =(3+4+5+...+10)+{(3^3)+(4^3)+(5^3)+...+ (10^3)}, then x = _______.",
        "options": [
            "55.",
            "3068.",
            "3080.",
            "None of these."
        ],
        "answer": "3068."
    },
    {
        "q": "A function f is said to have a __________ at x0, if f(x0) ≥ f(x) for all x in some open interval containing x0.",
        "options": [
            "Relative maximum",
            "Relative minimum"
        ],
        "answer": "Relative maximum"
    },
    {
        "q": "1+2+3………+t equals",
        "options": [
            "n(n+1)/2",
            "None of these",
            "t(t+1)/2",
            "n(n+1)(2n+1)/6"
        ],
        "answer": "t(t+1)/2"
    },
    {
        "q": "Which of the following is the sum of (2k+1) where k goes from 1 to 4?",
        "options": [
            "20",
            "24",
            "26",
            "22"
        ],
        "answer": "24"
    },
    {
        "q": "In the notation: ∫_a^b f(x) dx, f(x) is called___________.",
        "options": [
            "Differential",
            "Integration",
            "Integrand",
            "None of these"
        ],
        "answer": "Integrand"
    },
    {
        "q": "By applying mean value theorem to the function f(x)=lnx in the interval [1,e], the corresponding value of ‘c’ is ------------(Hint: lne=1, ln1=0)",
        "options": [
            "e-1",
            "-e",
            "1-e",
            "e"
        ],
        "answer": "e-1"
    },
    {
        "q": "While using Newton’s mathod,which of the following will be the best initial approximate solution to solve the equation: x-Sinx=0",
        "options": [
            "x=pi/2",
            "x=-pi/2",
            "x=pi",
            "x=0"
        ],
        "answer": "x=0"
    },
    {
        "q": "What is length of each subinterval if the interval [-1,1] is divided into n subintervals of equal length.",
        "options": [
            "0",
            "2/n",
            "1/n",
            "None of these"
        ],
        "answer": "2/n"
    },
    {
        "q": "If f has a local maximum or minimum at c, and if f'(c) exists, then f'(c) = 0. This is the statement of _________.",
        "options": [
            "None of these",
            "Extreme Value Theorem",
            "Mean Value Theorem",
            "Fermat's Theorem"
        ],
        "answer": "Fermat's Theorem"
    },
    {
        "q": "The integral ∫ sqrt(4x-3) dx will be equal to ?",
        "options": [
            "(4x-3)^(3/2)/6 + c",
            "None of these",
            "(4x-3)^(3/2)/3 + c",
            "(4x+3)^(3/2)/6 + c"
        ],
        "answer": "(4x-3)^(3/2)/6 + c"
    },
    {
        "q": "The maximum and minimum values of the function f(x)=1/x does not lie in the interval [-1,1] because -------",
        "options": [
            "f(x) is differentiable in [-1,1]",
            "f(x) is not one-to-one",
            "f(x) is discontinuous in [-1,1]",
            "f(x) is continuous in [-1,1]"
        ],
        "answer": "f(x) is discontinuous in [-1,1]"
    },
    {
        "q": "Newton’s method uses the …………… to approximate the root.",
        "options": [
            "None of these",
            "Tangent line",
            "Normal line",
            "Secant line"
        ],
        "answer": "Tangent line"
    },
    {
        "q": "A function f has an/a___________ at c if f(c) <= f(x) ∀ x ∈ D, where D is the domain of f.",
        "options": [
            "absolute minimum",
            "local minimum",
            "absolute minimum/global minimum",
            "global minimum"
        ],
        "answer": "absolute minimum/global minimum"
    },
    {
        "q": "Let A be the area of a rectangle under a continuous function f(x) over a closed interval [a, b]. If this area is divided in to ‘n’ sub-rectangles then width of each approximated sub-intervals is ---------",
        "options": [
            "(a-b)/2",
            "(b-a)/2n",
            "(b-a)/n",
            "(a-b)/n"
        ],
        "answer": "(b-a)/n"
    },
    {
        "q": "If f (x) = x^3 is defined on the interval [-1, 2], then which of the following is true about it",
        "options": [
            "None of these.",
            "Its relative minimum value exists at the critical point.",
            "Its absolute minimum value exists at the critical point.",
            "Its relative minimum value does not exist at the critical point."
        ],
        "answer": "Its relative minimum value does not exist at the critical point."
    },
    {
        "q": "Increase in number of rectangles under any continuous function gives …………. approximation to area.",
        "options": [
            "better",
            "no change in",
            "None of these",
            "Poor"
        ],
        "answer": "better"
    },
    {
        "q": "summation of (3) ;where ( j varies from 1 to 4) indicates to add ………to itself 4 times.",
        "options": [
            "2",
            "1",
            "3",
            "4"
        ],
        "answer": "3"
    },
    {
        "q": "(1^2)+(2^2)+(3^2)+……………..+(50^2) equals-------- NOTE: x^n means ‘x’ to the power ‘n’",
        "options": [
            "42925",
            "None of these",
            "6373",
            "55227"
        ],
        "answer": "42925"
    },
    {
        "q": "Subdivision of an interval is also called ………. of the interval.",
        "options": [
            "Evaluation",
            "Separation",
            "Partition",
            "Composition"
        ],
        "answer": "Partition"
    },
    {
        "q": "Integration of “cosecx.cotx” with respect to x is -----",
        "options": [
            "-Cosecx",
            "Tanx",
            "Cotx",
            "Cosecx"
        ],
        "answer": "-Cosecx"
    },
    {
        "q": "Integration of 5 with respect to x is…………",
        "options": [
            "5x",
            "5",
            "x",
            "5x^2"
        ],
        "answer": "5x"
    },
    {
        "q": "The integral ∫ (x^3+1)^10 . 3x^2 dx will be equal to ?",
        "options": [
            "-(x^3+1)^11/11 + c",
            "(x^3+1)^11/11 + c",
            "(x^3-1)^11/11 + c",
            "None of these"
        ],
        "answer": "(x^3+1)^11/11 + c"
    },
    {
        "q": "The estimated area under f(x) = x^2 from x = 1 to x = 3 with right end points for n = 2 is ________.",
        "options": [
            "None of these.",
            "5.",
            "10.",
            "13."
        ],
        "answer": "13."
    },
    {
        "q": "If x = 1 + 2 +3 + 4 + . . . + 20, then x = ________.",
        "options": [
            "None of these.",
            "500.",
            "200.",
            "210."
        ],
        "answer": "210."
    },
    {
        "q": "Which of the following is the sum of 3k+1 where k goes from 0 to 2?",
        "options": [
            "30",
            "27",
            "33",
            "39"
        ],
        "answer": "33"
    },
    {
        "q": "What will be the sigma notation for 32+52+72+92?",
        "options": [
            "summation of (2k2+1) where (k varies from 3 to 6)",
            "summation of (2k+1)2 where (k varies from 1 to 4)",
            "summation of (k2) where (k varies from 3 to 9)",
            "summation of (2k-1)2 where (k varies from 1 to 4)"
        ],
        "answer": "summation of (2k-1)2 where (k varies from 1 to 4)"
    },
    {
        "q": "f(x) = (x^2)+1 is a continuous function on (-infinity ,+infinity ) , and ‘f’ has no absolute maximum on (-infinity ,+infinity ) because………",
        "options": [
            "lim (f(x)) = +infinity as ‘x’ tends to ±infinity",
            "lim (f(x)) = -infinity as ‘x’ tends to ±infinity",
            "lim (f(x)) = 0 as ‘x’ tends to ±infinity",
            "lim (f(x)) = 1 as ‘x’ tends to ±infinity"
        ],
        "answer": "lim (f(x)) = +infinity as ‘x’ tends to ±infinity"
    },
    {
        "q": "Right end point ,left end point, and midpoint evaluation all converges to same result as number of subintervals tends to +ive infinity.",
        "options": [
            "False",
            "True"
        ],
        "answer": "True"
    },
    {
        "q": "For Rolle's Theorem, f is continuous on the interval __________.",
        "options": [
            "(a,b)",
            "(a,b]",
            "[a,b]",
            "[a,b)"
        ],
        "answer": "[a,b]"
    },
    {
        "q": "In sigma notation 12+14+16+18+20 can be written as……….",
        "options": [
            "summation of (k^2) where (k varies from 6 to10)",
            "summation of (k) where (k varies from 6 to10)",
            "summation of (2k) where (k varies from 1 to5)",
            "summation of (2k) where (k varies from 6 to10)"
        ],
        "answer": "summation of (2k) where (k varies from 1 to5)"
    },
    {
        "q": "Let a function f is twice differentiable at a stationary point x0, then f has relative maximum at x0 if",
        "options": [
            "f''(x0) >= 0",
            "f''(x0) < 0",
            "f''(x0) = 0",
            "f''(x0) > 0"
        ],
        "answer": "f''(x0) < 0"
    },
    {
        "q": "If ‘k’ goes from zero to ‘n’ in the summation of ‘Sink’ then which of the following will be other expression for this given summation such that its lower limit changes to ‘5’?",
        "options": [
            "Summation ‘Sin(k-5)’ while ‘k’ goes from ‘5’ to ‘n-5’",
            "Summation ‘Sin(k+5)’ while ‘k’ goes from ‘5’ to ‘n-5'",
            "Summation ‘Sin(k-5)’ while ‘k’ goes from ‘5’ to ‘n+5’",
            "Summation ‘Sin(k+5)’ while ‘k’ goes from ‘5’ to ‘n+5’"
        ],
        "answer": "Summation ‘Sin(k-5)’ while ‘k’ goes from ‘5’ to ‘n+5’"
    },
    {
        "q": "The integral ∫ 6x/(3x^2+1)^2 dx will be equal to ?",
        "options": [
            "- 1/(3x^2+1) + c",
            "1/(3x^2+1) + c",
            "- 1/((3x^2+1)^3) + c",
            "- 1/(6x+1) + c"
        ],
        "answer": "- 1/(3x^2+1) + c"
    },
    {
        "q": "How is the integral expression for the volume by cylindrical shells affected by changing the axis of revolution?",
        "options": [
            "It changes the variable of integration.",
            "It affects the shape of the region.",
            "It determines the limits of integration.",
            "It doesn't affect the integral setup."
        ],
        "answer": "It changes the variable of integration."
    },
    {
        "q": "If f(x)= x and g(x)=2x are integrable functions over the interval [0, a] for all x∈[0, a], then which of the following expressions is true for f and g?",
        "options": [
            "∫_0^a f(x)dx <= ∫_0^a g(x)dx",
            "∫_0^a f(x)dx >= ∫_0^a g(x)dx",
            "∫_0^a f(x)dx < ∫_0^a g(x)dx",
            "∫_0^a f(x)dx > ∫_0^a g(x)dx"
        ],
        "answer": "∫_0^a f(x)dx <= ∫_0^a g(x)dx"
    },
    {
        "q": "If the integral of f(x) = x and g(x) = 5 from x = 2 to x = 3 is 5 / 2 and 5 respectively, then the integral of h(x) = x + 5 from x = 2 to x = 3 is ________.",
        "options": [
            "None of these.",
            "15 / 2.",
            "5.",
            "7."
        ],
        "answer": "15 / 2."
    },
    {
        "q": "If the solid is revolved around the x-axis and generates a solid with a circular cross section of radius f(x) at x. Then the area of this cross section is",
        "options": [
            "[f(x)]^2",
            "π r [f(x)]^3",
            "π [f(x)]",
            "π [f(x)]^2"
        ],
        "answer": "π [f(x)]^2"
    },
    {
        "q": "The area of the ellipse x^2/a^2 + y^2/b^2 = 1",
        "options": [
            "π ab",
            "π (a + b)",
            "None of these",
            "(1/4)π(a^2 + b^2)"
        ],
        "answer": "π ab"
    },
    {
        "q": "The method of slicing by integration is used for finding ----------",
        "options": [
            "surface",
            "volume",
            "area",
            "length"
        ],
        "answer": "volume"
    },
    {
        "q": "The value of ∫_1^2 dx = _____.",
        "options": [
            "1",
            "0",
            "2",
            "3"
        ],
        "answer": "1"
    },
    {
        "q": "We can break up definite integrals across a sum or difference ∫_a^b f(x) ± g(x) dx as",
        "options": [
            "∫_a^b f(x)dx ± ∫_a^b g(x) dx",
            "∫_b^a f(x)dx ± ∫_a^b g(x) dx",
            "∫_b^a f(x)dx ± ∫_b^a g(x) dx",
            "None of these"
        ],
        "answer": "∫_a^b f(x)dx ± ∫_a^b g(x) dx"
    },
    {
        "q": "Evaluate ∫_0^x cos t dt =",
        "options": [
            "sin t",
            "cos x",
            "sin x",
            "cos t"
        ],
        "answer": "sin x"
    },
    {
        "q": "What is the relationship between the area under a curve and the definite integral?",
        "options": [
            "They are unrelated concepts.",
            "The area is the antiderivative of the integral",
            "Both are same concepts.",
            "The area is the derivative of the integral."
        ],
        "answer": "Both are same concepts."
    },
    {
        "q": "If f(x)=x^2, then ∫_0^2 π [f(x)]^2 dx is -------",
        "options": [
            "32π/5",
            "17π/5",
            "23π/5",
            "7π/5"
        ],
        "answer": "32π/5"
    },
    {
        "q": "Which of the following statements is true about ∫_0^1 (sin x + cos x) dx?",
        "options": [
            "∫_0^1 (sin x + cos x) dx = [cos x]_0^1 + [sin x]_0^1",
            "∫_0^1 (sin x + cos x) dx = [sin x]_0^1 - [cos x]_0^1",
            "∫_0^1 (sin x + cos x) dx = - [sin x]_0^1 + [cos x]_0^1",
            "None"
        ],
        "answer": "∫_0^1 (sin x + cos x) dx = [cos x]_0^1 + [sin x]_0^1"
    },
    {
        "q": "The volume of a cylinder is the area of a cross section of the cylinder multiplied by the ________ of the cylinder.",
        "options": [
            "Diameter",
            "Radius",
            "Base",
            "Height"
        ],
        "answer": "Height"
    },
    {
        "q": "If we change the letter for the variable of integration but don’t change the limits, then the values of the definite integral will be …………",
        "options": [
            "Changed",
            "Unchanged"
        ],
        "answer": "Unchanged"
    },
    {
        "q": "The value of ∫_0^1 dx/(1+x^2) _____.",
        "options": [
            "π/2",
            "0",
            "π/4",
            "∞"
        ],
        "answer": "π/4"
    },
    {
        "q": "[Image based question]",
        "options": [
            "[Image based option A]",
            "[Image based option B]",
            "[Image based option C]",
            "[Image based option D]"
        ],
        "answer": "[Image based option A]"
    },
    {
        "q": "[Image based question]",
        "options": [
            "[Image based option A]",
            "[Image based option B]",
            "[Image based option C]",
            "[Image based option D]"
        ],
        "answer": "[Image based option D]"
    },
    {
        "q": "Which of the following is the value of definite integral of f(x)=(x-1), where the lower limit is 0 and upper limit is -1?",
        "options": [
            "2/3",
            "0",
            "1",
            "3/2"
        ],
        "answer": "3/2"
    },
    {
        "q": "Definite integral can be…………..",
        "options": [
            "Negative",
            "0",
            "All of these",
            "Positive"
        ],
        "answer": "All of these"
    },
    {
        "q": "Which of the following is the definite integral of f(x) =x^2 from x=1 to x=2",
        "options": [
            "None of these.",
            "8/3",
            "7",
            "7/3"
        ],
        "answer": "7/3"
    },
    {
        "q": "If the definite integral of f(x)= sec2 x over the interval [0, a] is equal to ‘1’ then what will be the value of the definite integral of f(x)= (sec2 x) +3 over the same interval?",
        "options": [
            "-1-3a",
            "1+3a",
            "1-3a",
            "4"
        ],
        "answer": "1+3a"
    },
    {
        "q": "For a function f(x) that is decreasing on the interval [a, b], how would this affect the volume of the solid of revolution?",
        "options": [
            "Cannot be determined.",
            "Volume decreases.",
            "No effect on volume.",
            "Volume increases."
        ],
        "answer": "Cannot be determined."
    },
    {
        "q": "If m <= f(x) <= M for any two number such that, a <= x <= b, which of the following is true",
        "options": [
            "m(b - a) >= ∫_a^b f(x) dx >= M(b - a)",
            "none of these",
            "m(b - a) <= ∫_a^b f(x) dx <= M(b - a)",
            "m(b - a) >= ∫_a^b f(x) dx <= M(b - a)"
        ],
        "answer": "m(b - a) <= ∫_a^b f(x) dx <= M(b - a)"
    },
    {
        "q": "Antiderivative of f(x)=x^2 is ...........",
        "options": [
            "None of these.",
            "(1/3) x^3+c",
            "x^3",
            "x/2"
        ],
        "answer": "(1/3) x^3+c"
    },
    {
        "q": "Which of the following statements is true?",
        "options": [
            "None",
            "An antiderivative of a difference is the difference of the antiderivatives.",
            "constant factor can be moved through an integral sign only if the constant is positive.",
            "An antiderivative of a sum is the sum of the twice of antiderivatives."
        ],
        "answer": "An antiderivative of a difference is the difference of the antiderivatives."
    },
    {
        "q": "The value of ∫_0^{π/6} sin x cos x dx _____.",
        "options": [
            "8",
            "4",
            "1/8",
            "1/4"
        ],
        "answer": "1/8"
    },
    {
        "q": "The value of definite integral of a function f(x) taken from 7 to 7 is 0.",
        "options": [
            "False",
            "True"
        ],
        "answer": "True"
    },
    {
        "q": "The anti-differentiation of a function and integration of a function are two different things.",
        "options": [
            "True",
            "False"
        ],
        "answer": "False"
    },
    {
        "q": "What is the purpose of using the washer method instead of the disk method?",
        "options": [
            "To reduce the number of slices",
            "To handle shapes with holes.",
            "To simplify the integration process",
            "To increase accuracy"
        ],
        "answer": "To handle shapes with holes."
    },
    {
        "q": "If f(x) and g(x) are constant functions on [a, b], what can be said about the area between the curves?",
        "options": [
            "The area is equal to the absolute difference between the values of f(x) and g(x) over the interval [a, b].",
            "The area is zero.",
            "The area is dependent on the width of the interval [a, b].",
            "The area is infinite."
        ],
        "answer": "The area is equal to the absolute difference between the values of f(x) and g(x) over the interval [a, b]."
    },
    {
        "q": "If the integral of f(x) = x + 1 from x = 2 to x = 3 is 7 / 2, then the integral of f(x) = x + 1 from x = 3 to x = 2 is ________.",
        "options": [
            "7 / 2.",
            "-7 / 2",
            "None of these.",
            "5 / 2."
        ],
        "answer": "-7 / 2"
    },
    {
        "q": "What will be the value of ∫_0^2 (sin x + 3) dx if ∫_0^2 (10 sin x + 30) dx = 74 ?",
        "options": [
            "4.2",
            "5.4",
            "3.6",
            "7.4"
        ],
        "answer": "7.4"
    },
    {
        "q": "The volume by the washer perpendicular to the x-axis is",
        "options": [
            "∫_a^b π([f(x)]^2 + [g(x)]^2) dx",
            "∫_a^b π([f(x)]^2 - [g(x)]^2) dx",
            "∫_a^b π([f(x)] + [g(x)]) dx",
            "∫_a^b ([f(x)]^2 - [g(x)]^2) dy"
        ],
        "answer": "∫_a^b π([f(x)]^2 - [g(x)]^2) dx"
    },
    {
        "q": "Find the area of the region to the left of the parabola x = 2y^2, to the right of the y-axis and between y = 1 and y = 3",
        "options": [
            "52/3",
            "None of these",
            "1/3",
            "10/4"
        ],
        "answer": "52/3"
    },
    {
        "q": "In integration of f(x)=x(x^2-3)^4 from x=0 to x=2 by substitution method, we take u=x^2-3 then du= ................",
        "options": [
            "2x dx",
            "dx",
            "2x",
            "x"
        ],
        "answer": "2x dx"
    },
    {
        "q": "[Image based question]",
        "options": [
            "The area is decreased.",
            "The area is undefined.",
            "The area is increased.",
            "It doesn't affect the area."
        ],
        "answer": "The area is increased."
    },
    {
        "q": "Let f(x)= x and g(x)=2x are integrable functions over the interval [-a, 0] for all x∈[-a, 0] then which of the following expressions is true for f and g?",
        "options": [
            "∫_{-a}^{0} f(x)dx < ∫_{-a}^{0} g(x)dx",
            "∫_{-a}^{0} f(x)dx > ∫_{-a}^{0} g(x)dx",
            "∫_{-a}^{0} f(x)dx <= ∫_{-a}^{0} g(x)dx",
            "∫_{-a}^{0} f(x)dx >= ∫_{-a}^{0} g(x)dx"
        ],
        "answer": "∫_{-a}^{0} f(x)dx < ∫_{-a}^{0} g(x)dx"
    },
    {
        "q": "If the upper limit of Definite Integral is equal to its lower limit,then the value of Definite Integral will be _______.",
        "options": [
            "1",
            "Zero",
            "Same",
            "None of the above"
        ],
        "answer": "Zero"
    },
    {
        "q": "Value of definite integral of f(x)=|2x| from x=-1 to x=0 is ---------",
        "options": [
            "2",
            "0",
            "1",
            "-1"
        ],
        "answer": "1"
    },
    {
        "q": "If a solid has a uniform circular cross-section, which method is most appropriate for finding its volume?",
        "options": [
            "Washer Method",
            "Disk Method",
            "Slicing Method",
            "Shell Method"
        ],
        "answer": "Disk Method"
    },
    {
        "q": "What will be the value of ∫_0^1 e^x dx ?",
        "options": [
            "ec+1",
            "e",
            "ex",
            "1"
        ],
        "answer": "e"
    },
    {
        "q": "If the integral of f(x) = x from x = 1 to x = 3 is 4, then the integral of f(x) = 10x from x = 1 to x = 3 is ________.",
        "options": [
            "4.",
            "None of these.",
            "20.",
            "40."
        ],
        "answer": "40."
    },
    {
        "q": "The value of ∫_1^{10} 3x^2 dx _____.",
        "options": [
            "999",
            "333",
            "33",
            "99"
        ],
        "answer": "999"
    },
    {
        "q": "The value of ∫_1^{∞} dx/x^2 _____.",
        "options": [
            "4",
            "0",
            "3",
            "1"
        ],
        "answer": "1"
    },
    {
        "q": "If f(x) is a piecewise function with different expressions on different subintervals, how would you calculate the total area between the curves?",
        "options": [
            "Take the average of f(x) over the interval [a, b].",
            "Use the maximum value of f(x) within the interval.",
            "Ignore the piecewise nature and integrate as a continuous function.",
            "Apply the definite integral separately on each subinterval and sum the results."
        ],
        "answer": "Apply the definite integral separately on each subinterval and sum the results."
    },
    {
        "q": "[Image based question]",
        "options": [
            "8",
            "12",
            "10",
            "14"
        ],
        "answer": "10"
    },
    {
        "q": "What is the impact of changing the integration limits on the volume determined using the cylindrical shell method.",
        "options": [
            "It may increase or decrease the volume depending on the chosen limits.",
            "It increases the volume.",
            "It decreases the volume.",
            "It has no effect on the volume."
        ],
        "answer": "It may increase or decrease the volume depending on the chosen limits."
    },
    {
        "q": "If the curve over [a, b] is revolved about y-axis, then the volume is calculated by the formula -------",
        "options": [
            "∫_a^b π [f(y)]^2 dy",
            "∫_a^b π [f(x)]^2 dx"
        ],
        "answer": "∫_a^b π [f(x)]^2 dx"
    },
    {
        "q": "The Volume of a cylindrical shell can be expressed as _______.",
        "options": [
            "V= (area of cross section).(thickness)",
            "V= (area of cross section).(height)"
        ],
        "answer": "V= (area of cross section).(thickness)"
    },
    {
        "q": "Antiderivative of f(x) =x is ............",
        "options": [
            "x^3",
            "(1/2) x^2+c",
            "x/2",
            "None of these."
        ],
        "answer": "(1/2) x^2+c"
    },
    {
        "q": "If f is continuous at every point of [a,b] and F is anti-derivative of f on [a,b], then",
        "options": [
            "∫_a^b f(x) dx = F(a) - F(b)",
            "∫_a^b f(x) dx = F(a) + F(b)",
            "none of these",
            "∫_a^b f(x) dx = F(b) - F(a)"
        ],
        "answer": "∫_a^b f(x) dx = F(b) - F(a)"
    },
    {
        "q": "What does the definite integral ∫_a^b f(x) dx represent?",
        "options": [
            "The area under the curve f(x) from x = a to x = b",
            "The slope of the curve f(x) from x = a to x = b",
            "The maximum value of the function f(x) from x = a to x = b",
            "The derivative of the function f(x) at the point x = a"
        ],
        "answer": "The area under the curve f(x) from x = a to x = b"
    },
    {
        "q": "The area bounded by the parabola y^2 = x, straight line y = 4 and y-axis is",
        "options": [
            "64/3",
            "None of these",
            "16/3",
            "7√2"
        ],
        "answer": "64/3"
    },
    {
        "q": "The value of ∫_1^3 1/x dx = _____.",
        "options": [
            "ln|3|-1",
            "Both a and c",
            "ln|3|+3",
            "ln|3|"
        ],
        "answer": "ln|3|"
    },
    {
        "q": "If we change the letter for the variable of integration but don’t change the limits, then the values of the definite integral are unchanged.",
        "options": [
            "True",
            "False"
        ],
        "answer": "True"
    },
    {
        "q": "What is the antiderivative of zero?",
        "options": [
            "Independent variable x",
            "Any constant",
            "Zero",
            "Dependent variable x"
        ],
        "answer": "Any constant"
    },
    {
        "q": "[Image based question]",
        "options": [
            "[Image based option A]",
            "[Image based option B]",
            "[Image based option C]",
            "[Image based option D]"
        ],
        "answer": "[Image based option B]"
    },
    {
        "q": "What is the value of the antiderivatives [sin x]_0^1 - [tan x]_0^1?",
        "options": [
            "sin1 + tan1 +1",
            "None",
            "sin1 - tan1",
            "sin1 + tan1"
        ],
        "answer": "sin1 - tan1"
    },
    {
        "q": "[Image based question]",
        "options": [
            "[Image based option A]",
            "[Image based option B]",
            "[Image based option C]",
            "[Image based option D]"
        ],
        "answer": "[Image based option C]"
    },
    {
        "q": "Which of the following statements is true about ∫_0^1 (cos x + sec^2 x) dx?",
        "options": [
            "None",
            "∫_0^1 (cos x + sec^2 x) dx = [sin x]_0^1 + [tan x]_0^1",
            "∫_0^1 (cos x + sec^2 x) dx = [sin x]_0^1 × [tan x]_0^1",
            "∫_0^1 (cos x + sec^2 x) dx = [sin x]_0^1 - [tan x]_0^1"
        ],
        "answer": "∫_0^1 (cos x + sec^2 x) dx = [sin x]_0^1 + [tan x]_0^1"
    },
    {
        "q": "What technique is commonly used to find the volume of 3D objects that do not have regular shapes?",
        "options": [
            "Extrusion.",
            "Projection.",
            "Slicing.",
            "Folding."
        ],
        "answer": "Slicing."
    },
    {
        "q": "The volume of solid obtained when the region under the curve x=y over the interval [1,4] is revolved about the y-axis is",
        "options": [
            "V = ∫_1^4 π dx",
            "V = ∫_1^4 y^2 dy",
            "V = ∫_1^4 π y^2 dy",
            "V = ∫_1^4 π y dy"
        ],
        "answer": "V = ∫_1^4 π y^2 dy"
    },
    {
        "q": "Which of the following is the value of definite integral of 5+5x , where the lower limit is -1 and upper limit is 1 ?",
        "options": [
            "14",
            "10",
            "12",
            "16"
        ],
        "answer": "10"
    },
    {
        "q": "The Volume of a cylindrical shell is given by ______.",
        "options": [
            "V = (average radius).(height).(thickness)",
            "V = 2π (average radius).(height).(thickness)"
        ],
        "answer": "V = 2π (average radius).(height).(thickness)"
    },
    {
        "q": "The value of ∫_0^1 e^{-x} dx _____.",
        "options": [
            "(1+e)/e",
            "(1-e)/e",
            "(e-1)/e",
            "None of the above"
        ],
        "answer": "(e-1)/e"
    },
    {
        "q": "What is the formula for the volume of a sphere?",
        "options": [
            "[Image based option A]",
            "[Image based option B]",
            "[Image based option C]",
            "[Image based option D]"
        ],
        "answer": "[Image based option A]"
    },
    {
        "q": "If integral of ‘f(x)’ from [3,4] = - 8 ,than integral of ‘f(x)’ from [4,3] is …………",
        "options": [
            "-8",
            "-9",
            "-6",
            "8"
        ],
        "answer": "8"
    },
    {
        "q": "If you increase the number of subintervals in the cylindrical shell method, what impact does it have on the accuracy of the volume approximation?",
        "options": [
            "Makes the method invalid.",
            "Decreases accuracy.",
            "No impact on accuracy.",
            "Increases accuracy."
        ],
        "answer": "Increases accuracy."
    },
    {
        "q": "EVERY continuous function on an interval has an anti-derivative ……………",
        "options": [
            "outside of interval",
            "On that interval"
        ],
        "answer": "On that interval"
    },
    {
        "q": "F(x) (antiderivative of f) was determined to be 4x+C where C denotes the .............",
        "options": [
            "Differentiation constant.",
            "Integration constant."
        ],
        "answer": "Integration constant."
    },
    {
        "q": "Which of the following statements is true about ∫_0^1 (sin x - sec^2 x) dx?",
        "options": [
            "∫_0^1 (sin x - sec^2 x) dx = [cos x]_0^1 - [tan x]_0^1",
            "∫_0^1 (sin x - sec^2 x) dx = [cos x]_0^1 + [tan x]_0^1",
            "None",
            "∫_0^1 (sin x - sec^2 x) dx = - [cos x]_0^1 - [tan x]_0^1"
        ],
        "answer": "None"
    },
    {
        "q": "Why can't we use the formula for the volume of a right cylinder to find the volume of irregular 3D solids?",
        "options": [
            "Irregular solids have infinite height.",
            "Irregular solids are not made up of finitely many right cylinders.",
            "Irregular solids have cylinderical surfaces.",
            "The formula for right cylinders is not accurate."
        ],
        "answer": "Irregular solids are not made up of finitely many right cylinders."
    },
    {
        "q": "[Image based question]",
        "options": [
            "[Image based option A]",
            "[Image based option B]",
            "[Image based option C]",
            "[Image based option D]"
        ],
        "answer": "[Image based option A]"
    },
    {
        "q": "[Image based question]",
        "options": [
            "[Image based option A]",
            "[Image based option B]",
            "[Image based option C]",
            "[Image based option D]"
        ],
        "answer": "[Image based option C]"
    },
    {
        "q": "The region bounded by the curves y = sqrt(x), y = 1 and x = 4",
        "options": [
            "1/2",
            "None of these",
            "0",
            "5/3"
        ],
        "answer": "5/3"
    },
    {
        "q": "The volume of cylindrical shell for R = 3, r = 2 and h = 1 is -----------",
        "options": [
            "6*pi",
            "4*pi",
            "5*pi",
            "7*pi"
        ],
        "answer": "5*pi"
    },
    {
        "q": "The Volume of a cylindrical shell is _____.",
        "options": [
            "None of the above",
            "2π.((r2+r1)/2).h.(r2+r1)",
            "2π.((r2+r1)/2).h.(r2-r1)",
            "π.((r2+r1)/2).h.(r2-r1)"
        ],
        "answer": "2π.((r2+r1)/2).h.(r2-r1)"
    },
    {
        "q": "For the adjacent intervals, [a,c] and [c,b],where c is any number, ∫_a^b f(x) dx =",
        "options": [
            "None of these",
            "∫_a^b f(x) dx + ∫_c^a f(x) dx",
            "∫_a^c f(x) dx + ∫_b^a f(x) dx",
            "∫_a^c f(x) dx + ∫_c^b f(x) dx"
        ],
        "answer": "∫_a^c f(x) dx + ∫_c^b f(x) dx"
    },
    {
        "q": "If integral of ‘f(x)’ from [1,2] = 5 ,and integral of ‘f(x)’ from [3,2] = 4 , than integral of ‘f(x)’ from [1,3] is ……….",
        "options": [
            "3",
            "9",
            "1",
            "2"
        ],
        "answer": "1"
    },
    {
        "q": "The integral of f(x) =sin(x+1) from x=0 to x=1 is ..........",
        "options": [
            "sin(1)-sin(2)",
            "cos(2)-1",
            "cos(1)-cos(2)",
            "cos(2)-cos(1)"
        ],
        "answer": "cos(1)-cos(2)"
    },
    {
        "q": "If integral of ‘f(x)’ from [-8,16] = 54 , then integral of ‘5f{x)’ from [-8,16] =………..",
        "options": [
            "240",
            "270",
            "220",
            "260"
        ],
        "answer": "270"
    },
    {
        "q": "The volume of a cylindrical shell with an outer cylinder radius R=3, inner cylinder radius r=2, and length h=2 is……..",
        "options": [
            "[Image based option A]",
            "[Image based option B]",
            "[Image based option C]",
            "[Image based option D]"
        ],
        "answer": "[Image based option B]"
    },
    {
        "q": "Let R be the plane region bounded above by a continuous curve y=f(x) below by the x-axis and on the left and right, respectively, by the lines x=a and x=b the volume of the solid generated by revolving R about the y-axis is given by ______.",
        "options": [
            "V = ∫_a^b 2π x f(x) dx",
            "None of the above",
            "V = ∫_a^b 2π f(x) dx",
            "V = ∫_a^b 2π x dx"
        ],
        "answer": "V = ∫_a^b 2π x f(x) dx"
    },
    {
        "q": "If “f” is a continuous function on [a,b] then ∫_a^b f(x) dx = _____.",
        "options": [
            "∫_b^b f(x) dx",
            "- ∫_c^a f(x) dx",
            "- ∫_b^a f(x) dx",
            "- ∫_a^b f(x) dx"
        ],
        "answer": "- ∫_b^a f(x) dx"
    },
    {
        "q": "∫_a^b f(x) dx = 0 if__________.",
        "options": [
            "None of these",
            "a = b",
            "a < b",
            "a > b"
        ],
        "answer": "a = b"
    },
    {
        "q": "The volume of the solid generated by the region enclosed between y = sqrt(x), x=1 , x=4 and x-axis is revolved about y-axis.Which of the following equation gives the volume of solid by cylindrical shell ____.",
        "options": [
            "77.91",
            "124π/5",
            "114π/5",
            "Both a and c"
        ],
        "answer": "Both a and c"
    },
    {
        "q": "Definite integral from \"a\" to \"b\" of f(x)is equal to the ..........of f(x)evaluated at the \"b\" and then at \"a\".",
        "options": [
            "Indefinite Integral",
            "Derivative",
            "None of these",
            "Both of these."
        ],
        "answer": "Indefinite Integral"
    },
    {
        "q": "If f(x)= x and g(x)=x+1are integrable functions over the interval [a, b] for all x∈[a, b], then which of the following expressions is true for f and g?",
        "options": [
            "∫_a^b f(x)dx > ∫_a^b g(x)dx",
            "∫_a^b f(x)dx <= ∫_a^b g(x)dx",
            "∫_a^b f(x)dx >= ∫_a^b g(x)dx",
            "∫_a^b f(x)dx < ∫_a^b g(x)dx"
        ],
        "answer": "∫_a^b f(x)dx < ∫_a^b g(x)dx"
    },
    {
        "q": "Area between the x-axis and the curve y = cos x; when 0 <= x <= 2π is",
        "options": [
            "None of these",
            "2",
            "0",
            "4"
        ],
        "answer": "4"
    },
    {
        "q": "[Image based question]",
        "options": [
            "[Image based option A]",
            "[Image based option B]",
            "[Image based option C]",
            "[Image based option D]"
        ],
        "answer": "[Image based option B]"
    },
    {
        "q": "[Image based question]",
        "options": [
            "[Image based option A]",
            "[Image based option B]",
            "[Image based option C]",
            "[Image based option D]"
        ],
        "answer": "[Image based option C]"
    },
    {
        "q": "Derivative of f(x)= a-7,where a is a constant is....",
        "options": [
            "0",
            "7",
            "-7",
            "a"
        ],
        "answer": "0"
    },
    {
        "q": "If sinx=t then dt=.....",
        "options": [
            "sinxdx",
            "-cosxdx",
            "cosxdx",
            "sinxdt"
        ],
        "answer": "cosxdx"
    },
    {
        "q": "Antiderivative of cosx is ..........",
        "options": [
            "sinx+c",
            "xsinx",
            "cosx+sinx",
            "None of these."
        ],
        "answer": "sinx+c"
    },
    {
        "q": "While calculating Riemann sum it is necessary to take equal length subintervals.",
        "options": [
            "False",
            "True"
        ],
        "answer": "False"
    },
    {
        "q": "Area lying between the parabola y^2 = 4ax and its latus rectum is",
        "options": [
            "8/3 a^2",
            "8/3 a",
            "None of these",
            "4/3 a"
        ],
        "answer": "8/3 a^2"
    },
    {
        "q": "By using cylindrical shells to find the volume of the solid when the region R in the first quadrant enclosed between y = x and y = x^2 is revolved about the y-axis is ______.",
        "options": [
            "pi/6",
            "pi/3"
        ],
        "answer": "pi/6"
    },
    {
        "q": "Evaluate ∫_0^x sin t dt =",
        "options": [
            "1 + cos t",
            "1 + cos x",
            "1 + cos t",
            "1 - cos x"
        ],
        "answer": "1 - cos x"
    },
    {
        "q": "What is a cylindrical shell?",
        "options": [
            "solid by two concentric cylinders.",
            "sphere with a hole.",
            "flat, two-dimensional shape.",
            "solid with a hole in it."
        ],
        "answer": "solid by two concentric cylinders."
    },
    {
        "q": "The integral of the sum of two functions is equal to the sum of their integrals.",
        "options": [
            "False",
            "True"
        ],
        "answer": "True"
    },
    {
        "q": "If the definite integral of f(x)=cos x over the interval [-a,0] is equal to ‘-1’ then what will be the value of the definite integral of f(x)= (cos x) -1 over the same interval?",
        "options": [
            "-1+a",
            "-1-a",
            "1+a",
            "-2"
        ],
        "answer": "-1-a"
    },
    {
        "q": "The integral of f(x) =cos(2x) from x=0 to x=pi is ................",
        "options": [
            "0",
            "None of these.",
            "2(pi)",
            "3(pi)"
        ],
        "answer": "0"
    },
    {
        "q": "The volume of cylindrical shell for R = 5, r = 3 and h = 2 is -----------",
        "options": [
            "25*pi",
            "36*pi",
            "30*pi",
            "32*pi"
        ],
        "answer": "32*pi"
    },
    {
        "q": "The volume of the sphere with radius r can be calculated by ---------------",
        "options": [
            "4/3 p r^4",
            "4/3 p r^2",
            "4/3 p r",
            "4/3 p r^3"
        ],
        "answer": "4/3 p r^3"
    },
    {
        "q": "Mathematically second fundamental theorem of calculus can be written as,",
        "options": [
            "none of these",
            "d/dx ∫_a^t f(t)dt = f(t)",
            "d/dx ∫_a^t f(t)dt = f'(x)",
            "d/dx ∫_a^x f(t)dt = f(x)"
        ],
        "answer": "d/dx ∫_a^x f(t)dt = f(x)"
    },
    {
        "q": "What will be the average value of y = cos3x with respect to x over [0, 2], if ∫_0^2 cos^3 x dx is equal to 0.66?",
        "options": [
            "1.05",
            "1.32",
            "0.33",
            "1.5"
        ],
        "answer": "0.33"
    },
    {
        "q": "The volume of the solid generated by the region enclosed between y = sqrt(x), x=1 , x=3 and x-axis is resvolved by y-axis.Which of the following equation gives the volume of solid by cylindrical shell ____.",
        "options": [
            "V = ∫_1^x 2π x sqrt(x) dx",
            "Both b and c",
            "V = ∫_1^3 2π x sqrt(x) dx",
            "V = ∫_1^3 2π x^{3/2} dx"
        ],
        "answer": "Both b and c"
    },
    {
        "q": "How is the volume of a solid calculated using the method of slicing perpendicular to the y-axis?",
        "options": [
            "[Image based option A]",
            "[Image based option B]",
            "[Image based option C]",
            "[Image based option D]"
        ],
        "answer": "[Image based option C]"
    },
    {
        "q": "When using the technique of slicing to find the volume of an irregular solid, what is the basic idea?",
        "options": [
            "Divide the solid into cubes and sum their volumes.",
            "Divide the solid into cylinders and sum their volumes.",
            "Measure the distance between slices.",
            "Divide the solid into slices and sum their volumes."
        ],
        "answer": "Divide the solid into slices and sum their volumes."
    },
    {
        "q": "If f continuous on [a,b] and F(x) = ∫_a^x f(t) dt, then",
        "options": [
            "F'(t) = f(x) on [a,b]",
            "F'(x) = f(x) on [a,b]",
            "none of these",
            "F'(x) = f(t) on [a,b]"
        ],
        "answer": "F'(x) = f(x) on [a,b]"
    },
    {
        "q": "The volume of the solid bounded by planes x=a and x=b with cross-sectional area A(x) perpendicular to the x-axis is",
        "options": [
            "V = ∫_a^b A(x) dx",
            "V = ∫_a^b A(x) dy",
            "V = ∫_a^b A(y) dy",
            "V = ∫_a^a A(y) dx"
        ],
        "answer": "V = ∫_a^b A(x) dx"
    },
    {
        "q": "[Image based question]",
        "options": [
            "[Image based option A]",
            "[Image based option B]",
            "[Image based option C]",
            "The area between the curves increases after the shift."
        ],
        "answer": "[Image based option D]"
    },
    {
        "q": "By using cylindrical shells to find the volume of the solid when the region R in the first quadrant enclosed between y=x and y=x^2 is revolved about the y-axis is ______.",
        "options": [
            "V = ∫_0^1 π x(x - x^2) dx",
            "V = ∫_0^3 2π x(x - x^2) dx",
            "V = ∫_0^1 2π x(x - x^2) dx",
            "V = ∫_0^1 2π (x - x^2) dx"
        ],
        "answer": "V = ∫_0^1 2π x(x - x^2) dx"
    },
    {
        "q": "First fundamental theorem of calculus tells us how to evaluate the ........ in a quick way.",
        "options": [
            "Indefinite integral",
            "None of these.",
            "Differential",
            "Definite integral"
        ],
        "answer": "Definite integral"
    },
    {
        "q": "The volume of the solid bounded by planes y=a and y=b with cross-sectional area A(y) perpendicular to the y-axis is",
        "options": [
            "V = ∫_a^b A(y) dy",
            "V = ∫_b^b A(y) dx",
            "V = ∫_a^b A(x) dx",
            "V = ∫_a^b A(x) dy"
        ],
        "answer": "V = ∫_a^b A(y) dy"
    },
    {
        "q": "If integral of ‘h(x)’ from [-2,4] = -5 and integral of ‘g(x)’ from [-2,4] = -9 ,than integral of (6h(x)-8g(x)) from [-2,4] =……..",
        "options": [
            "42",
            "40",
            "43",
            "41"
        ],
        "answer": "42"
    },
    {
        "q": "Which term refers to a geometric object with zero dimensions?",
        "options": [
            "Point",
            "Circle",
            "Triangle",
            "Line"
        ],
        "answer": "Point"
    },
    {
        "q": "Which of the following is true for the definite integral ∫_a^b f(x) dx =",
        "options": [
            "∫_a^a f(x) dx",
            "- ∫_b^a f(x) dx",
            "∫_b^a f(x) dx",
            "- ∫_a^b f(x) dx"
        ],
        "answer": "- ∫_b^a f(x) dx"
    },
    {
        "q": "Which transformation can be applied to shift the graph above the x-axis?",
        "options": [
            "Reflecting in the y-axis.",
            "Scaling in the x-direction.",
            "Translating horizontal.",
            "Translating vertically."
        ],
        "answer": "Translating vertically."
    },
    {
        "q": "The volume of solid obtained when the region under the curve y = x^3 over the interval [1,3] is revolved about the x-axis is",
        "options": [
            "V = ∫_1^3 π x^3 dy",
            "V = ∫_1^3 x^6 dx",
            "V = ∫_1^3 π x^6 dx",
            "V = ∫_1^3 π x^3 dx"
        ],
        "answer": "V = ∫_1^3 π x^6 dx"
    },
    {
        "q": "The value of the ∫_0^1 t^3 dt = _____.",
        "options": [
            "1/3",
            "4/3",
            "1/4",
            "2/3"
        ],
        "answer": "1/4"
    },
    {
        "q": "The value of the definite integral of a function f(x)= x2 taken from [-7, 7] is 0.",
        "options": [
            "False",
            "True"
        ],
        "answer": "False"
    },
    {
        "q": "Definite integral gives the area under the curve.",
        "options": [
            "True",
            "False"
        ],
        "answer": "False"
    },
    {
        "q": "Find the area between y = x and y = - x(x-4)",
        "options": [
            "0",
            "None of these",
            "9/2",
            "7/2"
        ],
        "answer": "9/2"
    },
    {
        "q": "What is the primary difference between a 1d object and a 2d object?",
        "options": [
            "1d object has length, while a 2d object has area.",
            "1d object has width, while a 2d object has height.",
            "1d object is flat, while a 2d object is three-dimensional",
            "1d object can curve, while a 2d object is always straight."
        ],
        "answer": "1d object has length, while a 2d object has area."
    },
    {
        "q": "If the value of definite integral of a function f(x) taken from 1 to 3 is 9 then its value taken from 3 to 1 is",
        "options": [
            "None of these",
            "9",
            "0",
            "-9"
        ],
        "answer": "-9"
    },
    {
        "q": "The value of ∫_1^x y^2 dy = _____.",
        "options": [
            "y^3/3 - 1/3",
            "x^3/3 - 1/3"
        ],
        "answer": "x^3/3 - 1/3"
    },
    {
        "q": "If the integrand is continuous, then the derivative of a definite integral w.r.t its upper limit is equal to the integrand evaluated at the ………",
        "options": [
            "upper limit",
            "middle limit",
            "None of these",
            "lower limit"
        ],
        "answer": "upper limit"
    },
    {
        "q": "Find the area of the region between the x-axis, the f(x) = x^3 - x^2 - 2x; -1 <= x <= 2",
        "options": [
            "37/12",
            "None of these",
            "45/4",
            "3/2"
        ],
        "answer": "37/12"
    },
    {
        "q": "Evaluate d/dx ∫_1^x t^2 dt =",
        "options": [
            "3x^2",
            "-x^2",
            "x^2",
            "none of these"
        ],
        "answer": "x^2"
    },
    {
        "q": "∫_a^b f(x) dx = _____.",
        "options": [
            "∫_a^b f(z) dz",
            "∫_b^a f(x) dx"
        ],
        "answer": "∫_a^b f(z) dz"
    },
    {
        "q": "If the definite integral of f(x)=3 over [1,x] is greater than ‘12’ then -----",
        "options": [
            "x>5",
            "x>1",
            "x>3",
            "x>12"
        ],
        "answer": "x>5"
    },
    {
        "q": "The volume of cylindrical shell for R = 2, r = 1 and h = 2 is -----------",
        "options": [
            "5*pi",
            "6*pi",
            "3*pi",
            "4*pi"
        ],
        "answer": "6*pi"
    },
    {
        "q": "[Image based question]",
        "options": [
            "[Image based option A]",
            "[Image based option B]",
            "[Image based option C]",
            "[Image based option D]"
        ],
        "answer": "[Image based option B]"
    },
    {
        "q": "[Image based question]",
        "options": [
            "[Image based option A]",
            "[Image based option B]",
            "[Image based option C]",
            "[Image based option D]"
        ],
        "answer": "[Image based option B]"
    },
    {
        "q": "[Image based question]",
        "options": [
            "[Image based option A]",
            "[Image based option B]",
            "[Image based option C]",
            "[Image based option D]"
        ],
        "answer": "[Image based option A]"
    },
    {
        "q": "[Image based question]",
        "options": [
            "[Image based option A]",
            "[Image based option B]",
            "[Image based option C]",
            "[Image based option D]"
        ],
        "answer": "[Image based option D]"
    },
    {
        "q": "If the solid is revolved around the y-axis and generates a solid with a circular cross section of radius g(y) at y. Then the area of this cross section is",
        "options": [
            "π [g(y)]",
            "π [g(y)]^2",
            "π r [g(y)]^3",
            "[g(y)]^2"
        ],
        "answer": "π [g(y)]^2"
    },
    {
        "q": "If f(x)= x and g(x)=x-1are integrable functions over the interval [a, b] for all x∈[a, b], then which of the following expressions is true for f and g?",
        "options": [
            "∫_a^b f(x)dx <= ∫_a^b g(x)dx",
            "∫_a^b f(x)dx >= ∫_a^b g(x)dx",
            "∫_a^b f(x)dx > ∫_a^b g(x)dx",
            "∫_a^b f(x)dx < ∫_a^b g(x)dx"
        ],
        "answer": "∫_a^b f(x)dx >= ∫_a^b g(x)dx"
    },
    {
        "q": "The integral of f(x)=sin(2x) from x=0 to x=pi is ........",
        "options": [
            "2",
            "1",
            "None of thes.",
            "0"
        ],
        "answer": "0"
    },
    {
        "q": "............ is used to prove the first fundamental theorem of calculus.",
        "options": [
            "Intermediate value theorem",
            "Mean value theorem for the derivatives",
            "None of these.",
            "Mean value theorem for the integrals"
        ],
        "answer": "Mean value theorem for the integrals"
    },
    {
        "q": "Which of the following alternative methods could be more efficient than slicing for finding the volume of certain solids?",
        "options": [
            "The disk method",
            "The shell method",
            "The cross-sectional method",
            "The washer method"
        ],
        "answer": "The shell method"
    },
    {
        "q": "Which of the following is the ‘mesh size’ in the partition: {[0,0.25],[0.25,0.75],[0.75,1.25],[1.25,2]} of the interval [0,2]?",
        "options": [
            "[1.25,2]",
            "[0.25,0.75]",
            "[0,0.25]",
            "[0.75,1.25]"
        ],
        "answer": "[0.75,1.25]"
    },
    {
        "q": "If the value of definite integral of a function f(x) taken from 1 to 3 is 2 and that of taken from 3 to 5 is 1 then value of definite integral taken from 1 to 5 is",
        "options": [
            "0",
            "None of these",
            "3",
            "1"
        ],
        "answer": "3"
    },
    {
        "q": "Constant of integration is taken to be ………. in definite integral.",
        "options": [
            "c",
            "k",
            "0",
            "All of these"
        ],
        "answer": "0"
    },
    {
        "q": "The bounded region between the parabola y = 4x^2 and the line y = 6x - 2",
        "options": [
            "1/6",
            "1/3",
            "1/12",
            "None of these"
        ],
        "answer": "1/6"
    },
    {
        "q": "If a similar solid is rotated around the x-axis over a closed interval [a, b] then the corresponding volume of revolution is ....",
        "options": [
            "[Image based option A]",
            "[Image based option B]",
            "[Image based option C]",
            "[Image based option D]"
        ],
        "answer": "[Image based option A]"
    },
    {
        "q": "Which statement accurately describes the comparison between the cylindrical shell method and the disk or washer method regarding their applications.",
        "options": [
            "Shell method is simpler to apply.",
            "Both methods can be used interchangeably.",
            "The disk or washer method is simpler to apply.",
            "The cylindrical shell method is always more accurate."
        ],
        "answer": "The disk or washer method is simpler to apply."
    },
    {
        "q": "How can the volume of the solid formed by revolving a region R bounded by the graph of f(x) around the y-axis be approximated using cylindrical shells?",
        "options": [
            "[Image based option A]",
            "[Image based option B]",
            "[Image based option C]",
            "[Image based option D]"
        ],
        "answer": "[Image based option A]"
    },
    {
        "q": "Which of the following statements is true about ∫_0^1 sec x tan x dx?",
        "options": [
            "∫_0^1 sec x tan x dx = [sec x]_0^1 × [tan x]_0^1",
            "None",
            "∫_0^1 sec x tan x dx = [sec x]_0^1",
            "∫_0^1 sec x tan x dx = [sec x]_0^1 + [tan x]_0^1"
        ],
        "answer": "∫_0^1 sec x tan x dx = [sec x]_0^1"
    },
    {
        "q": "The value of ∫_0^{π/4} tan^2 x dx _____.",
        "options": [
            "None of the above",
            "1 - π/4",
            "0",
            "π/4 - 1"
        ],
        "answer": "1 - π/4"
    },
    {
        "q": "If the upper and lower limits for the definite integral are the same, then ∫_a^a f(x) dx =",
        "options": [
            "negative integer",
            "none of these",
            "positive integer",
            "zero"
        ],
        "answer": "zero"
    },
    {
        "q": "[Image based question]",
        "options": [
            "The area is dependent on the width of the interval [a, b].",
            "The area is infinite.",
            "The area is undefined.",
            "The area is zero."
        ],
        "answer": "The area is zero."
    },
    {
        "q": "How does the axis of rotation impact the choice between using the disk method or the washer method?",
        "options": [
            "It has no affect on the choice",
            "It determines the shape of the solid",
            "It determines the thickness of the cross-sections.",
            "It affects whether the solid has holes or voids along the axis."
        ],
        "answer": "It affects whether the solid has holes or voids along the axis."
    },
    {
        "q": "x^4/4 - 1/4 = _____.",
        "options": [
            "∫_1^x t^3 dt",
            "∫_1^x t^4 dt"
        ],
        "answer": "∫_1^x t^3 dt"
    },
    {
        "q": "Which of the following statements is true about ∫_0^1 (sin x cos x) dx?",
        "options": [
            "∫_0^1 (sin x cos x) dx = 1/2 ∫_0^1 sin 2x dx",
            "∫_0^1 (sin x cos x) dx = ∫_0^1 sin x dx + ∫_0^1 cos x dx",
            "∫_0^1 (sin x cos x) dx = 2 ∫_0^1 sin x dx × 2 ∫_0^1 cos x dx",
            "∫_0^1 (sin x cos x) dx = ∫_0^1 sin x dx - ∫_0^1 cos x dx"
        ],
        "answer": "∫_0^1 (sin x cos x) dx = 1/2 ∫_0^1 sin 2x dx"
    },
    {
        "q": "Use cylindrical shells to find the volume of the solid generated when the region ‘R’ enclosed between y = 2x + 1 and y = -2x - 3 in the interval [1,3] is revolved about the y-axis is ______.",
        "options": [
            "V = ∫_1^3 2π x ((2x+1) - (-2x-3)) dx",
            "V = ∫_1^3 2π x ((2x+1) + (-2x-3)) dx"
        ],
        "answer": "V = ∫_1^3 2π x ((2x+1) - (-2x-3)) dx"
    },
    {
        "q": "Area of the region bounded by the curves y = x^2 + 2, y = -x ; x = 0 and x = 1 is",
        "options": [
            "3/16",
            "None of these",
            "17/6",
            "5/16"
        ],
        "answer": "17/6"
    },
    {
        "q": "In general, an antiderivative of a product is the product of the antiderivatives.",
        "options": [
            "True",
            "False"
        ],
        "answer": "False"
    },
    {
        "q": "Evaluate d/dx ∫_2^x t dt",
        "options": [
            "x^3",
            "x",
            "x^2",
            "none of these"
        ],
        "answer": "x"
    },
    {
        "q": "In order to fully determine the anti derivative of a function f (F(x)), we must have..........",
        "options": [
            "None of these",
            "Integration constant.",
            "Boundary conditions",
            "Initial conditions."
        ],
        "answer": "Boundary conditions"
    },
    {
        "q": "What could be the value of x if ∫_0^x 3 dx > 15 ?",
        "options": [
            "x>5",
            "x>3",
            "x>10",
            "x>15"
        ],
        "answer": "x>5"
    },
    {
        "q": "[Image based question]",
        "options": [
            "[Image based option A]",
            "[Image based option B]",
            "[Image based option C]",
            "[Image based option D]"
        ],
        "answer": "[Image based option B]"
    },
    {
        "q": "[Image based question]",
        "options": [
            "[Image based option A]",
            "[Image based option B]",
            "[Image based option C]",
            "[Image based option D]"
        ],
        "answer": "[Image based option C]"
    },
    {
        "q": "[Image based question]",
        "options": [
            "[Image based option A]",
            "[Image based option B]",
            "[Image based option C]",
            "[Image based option D]"
        ],
        "answer": "[Image based option C]"
    },
    {
        "q": "[Image based question]",
        "options": [
            "[Image based option A]",
            "[Image based option B]",
            "[Image based option C]",
            "[Image based option D]"
        ],
        "answer": "[Image based option D]"
    },
    {
        "q": "[Image based question]",
        "options": [
            "[Image based option A]",
            "[Image based option B]",
            "[Image based option C]",
            "[Image based option D]"
        ],
        "answer": "[Image based option A]"
    },
    {
        "q": "[Image based question]",
        "options": [
            "[Image based option A]",
            "[Image based option B]",
            "[Image based option C]",
            "[Image based option D]"
        ],
        "answer": "[Image based option B]"
    },
    {
        "q": "[Image based question]",
        "options": [
            "[Image based option A]",
            "[Image based option B]",
            "[Image based option C]",
            "[Image based option D]"
        ],
        "answer": "[Image based option D]"
    },
    {
        "q": "[Image based question]",
        "options": [
            "[Image based option A]",
            "[Image based option B]",
            "[Image based option C]",
            "[Image based option D]"
        ],
        "answer": "[Image based option A]"
    },
    {
        "q": "[Image based question]",
        "options": [
            "[Image based option A]",
            "[Image based option B]",
            "[Image based option C]",
            "[Image based option D]"
        ],
        "answer": "[Image based option B]"
    },
    {
        "q": "[Image based question]",
        "options": [
            "[Image based option A]",
            "[Image based option B]",
            "[Image based option C]",
            "[Image based option D]"
        ],
        "answer": "[Image based option D]"
    },
    {
        "q": "[Image based question]",
        "options": [
            "[Image based option A]",
            "[Image based option B]",
            "[Image based option C]",
            "[Image based option D]"
        ],
        "answer": "[Image based option A]"
    },
    {
        "q": "[Image based question]",
        "options": [
            "[Image based option A]",
            "[Image based option B]",
            "[Image based option C]",
            "[Image based option D]"
        ],
        "answer": "[Image based option B]"
    },
    {
        "q": "[Image based question]",
        "options": [
            "[Image based option A]",
            "[Image based option B]",
            "[Image based option C]",
            "[Image based option D]"
        ],
        "answer": "[Image based option A]"
    },
    {
        "q": "[Image based question]",
        "options": [
            "[Image based option A]",
            "[Image based option B]",
            "[Image based option C]",
            "[Image based option D]"
        ],
        "answer": "[Image based option C]"
    },
    {
        "q": "[Image based question]",
        "options": [
            "The area is decreased.",
            "The area is undefined.",
            "The area is increased.",
            "It doesn't affect the area."
        ],
        "answer": "The area is increased."
    },
    {
        "q": "[Image based question]",
        "options": [
            "The area is dependent on the width of the interval [a, b].",
            "The area is infinite.",
            "The area is undefined.",
            "The area is zero."
        ],
        "answer": "The area is zero."
    },
    {
        "q": "[Image based question]",
        "options": [
            "[Image based option A]",
            "[Image based option B]",
            "[Image based option C]",
            "[Image based option D]"
        ],
        "answer": "[Image based option B]"
    },
    {
        "q": "The integral of f(x) = sin(x + 1) from x = 0 to x = 1 is:",
        "options": [
            "A. sin(1) - sin(2)",
            "B. cos(2) - 1",
            "C. cos(1) - cos(2)",
            "D. cos(2) - cos(1)"
        ],
        "answer": "C. cos(1) - cos(2)"
    },
    {
        "q": "The Volume of a cylindrical shell can be expressed as:",
        "options": [
            "A. V = (area of cross section) × (thickness)",
            "B. V = (area of cross section) × (height)"
        ],
        "answer": "A. V = (area of cross section) × (thickness)"
    },
    {
        "q": "Area lying between the parabola y² = 4ax and its latus rectum is:",
        "options": [
            "A. 4/3 a",
            "B. 8/3 a",
            "C. 8/3 a²",
            "D. None of these"
        ],
        "answer": "C. 8/3 a²"
    },

    {
        "q": "If the definite integral of f(x) = sec²x over the interval [0, a] is equal to '1' then what will be the value of the definite integral of f(x) = (sec²x) + 3 over the same interval?",
        "options": [
            "A. 4",
            "B. -1-3a",
            "C. 1-3a",
            "D. 1+3a"
        ],
        "answer": "D. 1+3a"
    },
    {
        "q": "If f(x) = x and g(x) = x + 1 are integrable functions over the interval [a, b] for a < b, which of the following expressions is true for f and g?",
        "options": [
            "A. ∫ₐᵇ f(x) dx = ∫ₐᵇ g(x) dx",
            "B. ∫ₐᵇ f(x) dx ≠ ∫ₐᵇ g(x) dx",
            "C. ∫ₐᵇ f(x) dx < ∫ₐᵇ g(x) dx",
            "D. ∫ₐᵇ f(x) dx > ∫ₐᵇ g(x) dx"
        ],
        "answer": "C. ∫ₐᵇ f(x) dx < ∫ₐᵇ g(x) dx"
    },
    {
        "q": "If the definite integral of f(x) = Sin x over the interval [-a, 0] is equal to -2 then what will be the value of the definite integral of f(x) = (Sin x) + 1 over the same interval?",
        "options": [
            "A. -2 + a",
            "B. 2 - a",
            "C. -2 - a",
            "D. -1"
        ],
        "answer": "A. -2 + a"
    },
    {
        "q": "If f(x) = x and g(x) = 2x are integrable functions over the interval [0, a] for a > 0, which of the following expressions is true for f and g?",
        "options": [
            "A. ∫₀ᵃ f(x) dx > ∫₀ᵃ g(x) dx",
            "B. ∫₀ᵃ f(x) dx < ∫₀ᵃ g(x) dx",
            "C. ∫₀ᵃ f(x) dx = ∫₀ᵃ g(x) dx",
            "D. ∫₀ᵃ f(x) dx ≠ ∫₀ᵃ g(x) dx"
        ],
        "answer": "B. ∫₀ᵃ f(x) dx < ∫₀ᵃ g(x) dx"
    },
    {
        "q": "The expressions (x² + x), (x² + x + 5), (x² + x - 3) have the same ....",
        "options": [
            "A. Derivative",
            "B. Anti-derivative"
        ],
        "answer": "A. Derivative"
    },
    {
        "q": "The area of the region bounded by the curves y = √x, y = 1, and x = 4 is:",
        "options": [
            "A. 0",
            "B. 1/2",
            "C. None of these",
            "D. 5/3"
        ],
        "answer": "D. 5/3"
    },
    {
        "q": "The value of ∫₋₁^∞ dx/x² is:",
        "options": [
            "A. 1",
            "B. 3",
            "C. 0",
            "D. Diverges (Correct answer missing from options)"
        ],
        "answer": "D. Diverges (Correct answer missing from options)"
    },
    {
        "q": "Question content is missing from the PDF for Q8.",
        "options": [
            "A. (not available)",
            "B. (not available)",
            "C. (not available)",
            "D. (not available)"
        ],
        "answer": "A. (not available)"
    },
    {
        "q": "Use cylindrical shells to find the volume of the solid generated when the region 'R' enclosed between y = 2x + 1 and y = -2x - 3 in the interval [1,3] is revolved about the y-axis is ______.",
        "options": [
            "A. V = ∫₁³ 2πx((2x+1)+(-2x-3)) dx",
            "B. V = ∫₁³ 2πx((2x+1)-(-2x-3)) dx"
        ],
        "answer": "B. V = ∫₁³ 2πx((2x+1)-(-2x-3)) dx"
    },
    {
        "q": "If f(x) = x and g(x) = x - 1 are integrable functions over the interval [a, b] for a < b, which of the following expressions is true for f and g?",
        "options": [
            "A. ∫ₐᵇ f(x) dx = ∫ₐᵇ g(x) dx",
            "B. ∫ₐᵇ f(x) dx ≠ ∫ₐᵇ g(x) dx",
            "C. ∫ₐᵇ f(x) dx < ∫ₐᵇ g(x) dx",
            "D. ∫ₐᵇ f(x) dx > ∫ₐᵇ g(x) dx"
        ],
        "answer": "D. ∫ₐᵇ f(x) dx > ∫ₐᵇ g(x) dx"
    }





],
      subjective: [
        { q: 'Find all relative extrema of f(x) = x³ − 6x² + 9x + 1 using the First and Second Derivative Tests. Show all steps.', marks: 8 },
        { q: 'Evaluate the definite integral ∫₁³ (2x² + 3x − 1) dx. Show all working.', marks: 7 },
        { q: 'A particle moves along a straight line with position function x(t) = t³ − 6t² + 9t. Find (a) velocity, (b) acceleration, (c) when the particle is at rest, (d) position at t = 2.', marks: 8 },
        { q: 'Find the area enclosed between y = x² and y = x. Show by finding intersection points, setting up the integral, and evaluating it.', marks: 7 },
      ],
    },
  },

  // ──────────────────────────────────
  //  MTH202 — Discrete Mathematics
  // ──────────────────────────────────
  MTH202: {
    mid: {
      title: 'MTH202 — Mid Term Examination',
      totalMarks: 40,
      mcqMarks: 1,
      mcqs: [
        { q: 'A statement (proposition) is:', options: ['A. A question', 'B. A command', 'C. A declarative sentence with true/false value', 'D. An opinion'], answer: 'C. A declarative sentence with true/false value' },
        { q: 'Which of the following is NOT a proposition?', options: ['A. 2 + 2 = 4', 'B. It is hot today', 'C. x + y = 12', 'D. Grass is green'], answer: 'C. x + y = 12' },
        { q: 'Symbol for conjunction (AND) is:', options: ['A. ∨', 'B. ∧', 'C. →', 'D. ~'], answer: 'B. ∧' },
        { q: 'p ∧ q is true when:', options: ['A. Only p is true', 'B. Either p or q is true', 'C. Both p and q are true', 'D. Both are false'], answer: 'C. Both p and q are true' },
        { q: 'p ∨ q is false when:', options: ['A. Both true', 'B. One true', 'C. Both false', 'D. None of the above'], answer: 'C. Both false' },
        { q: 'The conditional p → q is false only when:', options: ['A. p is true and q is true', 'B. p is false and q is false', 'C. p is true and q is false', 'D. p is false and q is true'], answer: 'C. p is true and q is false' },
        { q: 'The contrapositive of p → q is:', options: ['A. q → p', 'B. ~p → ~q', 'C. ~q → ~p', 'D. ~p ∨ q'], answer: 'C. ~q → ~p' },
        { q: '~(p ∧ q) is equivalent to (De Morgan):', options: ['A. ~p ∧ ~q', 'B. ~p ∨ ~q', 'C. p ∧ q', 'D. p ∨ q'], answer: 'B. ~p ∨ ~q' },
        { q: 'A tautology is a statement that is:', options: ['A. Always false', 'B. Always true', 'C. Sometimes true', 'D. Logically equivalent to its negation'], answer: 'B. Always true' },
        { q: 'p ∨ ~p is an example of:', options: ['A. Contradiction', 'B. Contingency', 'C. Tautology', 'D. Implication'], answer: 'C. Tautology' },
        { q: '~(p → q) is logically equivalent to:', options: ['A. ~p → ~q', 'B. p ∧ ~q', 'C. ~p ∨ q', 'D. p → q'], answer: 'B. p ∧ ~q' },
        { q: 'The Implication Law states p → q ≡:', options: ['A. ~p ∧ q', 'B. ~p ∨ q', 'C. p ∧ ~q', 'D. p ∨ ~q'], answer: 'B. ~p ∨ q' },
        { q: '"p only if q" means:', options: ['A. q → p', 'B. p → q', 'C. ~p → ~q', 'D. p ↔ q'], answer: 'B. p → q' },
        { q: 'The biconditional p ↔ q is true when:', options: ['A. p and q have opposite truth values', 'B. p and q have the same truth value', 'C. p is true and q is false', 'D. Always'], answer: 'B. p and q have the same truth value' },
        { q: '"p is necessary and sufficient for q" means:', options: ['A. p → q', 'B. q → p', 'C. p ↔ q', 'D. ~p → ~q'], answer: 'C. p ↔ q' },
        { q: 'A set is defined as:', options: ['A. A collection that may have repeats', 'B. A well-defined collection of distinct objects', 'C. Any list of numbers', 'D. A random group of items'], answer: 'B. A well-defined collection of distinct objects' },
        { q: 'The empty set is a subset of:', options: ['A. No set', 'B. Only itself', 'C. Every set', 'D. Only non-empty sets'], answer: 'C. Every set' },
        { q: '|∅| equals:', options: ['A. 1', 'B. 0', 'C. Undefined', 'D. Infinite'], answer: 'B. 0' },
        { q: 'A ∩ B consists of elements that belong to:', options: ['A. A or B', 'B. A and B both', 'C. A only', 'D. B only'], answer: 'B. A and B both' },
        { q: 'De Morgan\'s Law for sets: (A ∪ B)ᶜ equals:', options: ['A. Aᶜ ∪ Bᶜ', 'B. Aᶜ ∩ Bᶜ', 'C. A ∩ B', 'D. A ∪ B'], answer: 'B. Aᶜ ∩ Bᶜ' },
      ],
      subjective: [
        { q: 'Construct a truth table for (p ∧ q) → (p ∨ q) and determine whether it is a tautology.', marks: 5 },
        { q: 'Prove using laws of logic: ~(~p ∧ q) ≡ p ∨ ~q. State each law used.', marks: 5 },
        { q: 'Let A = {1,2,3,4,5}, B = {2,4,6}, C = {1,3,5,7}. Find: (i) A ∩ B (ii) A ∪ C (iii) B − A (iv) Aᶜ if U = {1,2,3,4,5,6,7,8}', marks: 5 },
        { q: 'Using a Venn diagram, verify De Morgan\'s Law: (A ∩ B)ᶜ = Aᶜ ∪ Bᶜ', marks: 5 },
      ],
    },
    final: {
      title: 'MTH202 — Final Term Examination',
      totalMarks: 60,
      mcqMarks: 1,
      mcqs: [
    {
        "q": "There are 5 Chinese books and 6 English books, a Student wants to select one optional book for both subject, total number of choices will be?",
        "options": [
            "A. 15",
            "B. 11",
            "C. 30",
            "D. 10"
        ],
        "answer": "B. 11"
    },
    {
        "q": "While proofing by contraposition the equivalence ........is used.",
        "options": [
            "A. p → q ≡ ~q → ~p",
            "B. p → q ≡ q → p",
            "C. ~p → ~q ≡ q → p",
            "D. ~p → q ≡ ~q → p"
        ],
        "answer": "A. p → q ≡ ~q → ~p"
    },
    {
        "q": "A box contains 5 different colored light bulbs. Which of the followings is the number of ordered samples of size 3 with replacement ?",
        "options": [
            "A. 8",
            "B. 243",
            "C. 15",
            "D. 125"
        ],
        "answer": "D. 125"
    },
    {
        "q": "A proof by is based on the fact that either a statement is true or it is false but not both.",
        "options": [
            "A. mathematical induction",
            "B. contraposition",
            "C. superposition",
            "D. contradiction"
        ],
        "answer": "D. contradiction"
    },
    {
        "q": "In the proof by contradiction, we lead the assumption to",
        "options": [
            "A. contingency",
            "B. Absurdity",
            "C. tautology",
            "D. None of these."
        ],
        "answer": "B. Absurdity"
    },
    {
        "q": "Combination is used when we have to select 'k' elements from a set of 'n' elements with the following properties.",
        "options": [
            "A. Order does not matter and repetition is not allowed",
            "B. Order does not matter and repetition is allowed",
            "C. Order matters and repetition is allowed",
            "D. Order matters and repetition is not allowed."
        ],
        "answer": "A. Order does not matter and repetition is not allowed"
    },
    {
        "q": "A non- zero integer d divides an integer n if and only if there exists an integer k such that",
        "options": [
            "A. n = d k",
            "B. n = d - k",
            "C. n = d / k",
            "D. n = d + k"
        ],
        "answer": "A. n = d k"
    },
    {
        "q": "'Reductio ad absurdum' is another name of",
        "options": [
            "A. Direct Method of proof",
            "B. proof by contradiction",
            "C. None of these.",
            "D. proof by contrapositive"
        ],
        "answer": "B. proof by contradiction"
    },
    {
        "q": "For every prime number n, n + 2 is prime. Which of the following prime number disproves the above statement.",
        "options": [
            "A. n = 5",
            "B. n = 7",
            "C. n = 11",
            "D. n = 3"
        ],
        "answer": "B. n = 7"
    },
    {
        "q": "The sum of any rational number and any irrational number is irrational.",
        "options": [
            "A. True",
            "B. False"
        ],
        "answer": "A. True"
    },
    


    {
        "q": "A sub graph of a graph G that contains every vertex of G and is a tree is called",
        "options": [
            "A. Trivial tree",
            "B. empty tree",
            "C. Spanning tree"
        ],
        "answer": "C. Spanning tree"
    },
    {
        "q": "A vertex of degree greater than 1 in a tree is called",
        "options": [
            "A. Branch vertex",
            "B. Terminal vertex",
            "C. Ancestor"
        ],
        "answer": "A. Branch vertex"
    },
    {
        "q": "A circuit that consist of a single vertex is called",
        "options": [
            "A. Trivial",
            "B. Tree",
            "C. Empty"
        ],
        "answer": "A. Trivial"
    },
    {
        "q": "If a graph is a tree then",
        "options": [
            "A. it has 2 spanning trees",
            "B. it has only 1 spanning tree",
            "C. it has 4 spanning trees",
            "D. it has 5 spanning trees"
        ],
        "answer": "B. it has only 1 spanning tree"
    },
    {
        "q": "If f(x) = 2x + 1, g(x) = x² - 1 then f ∘ g(x) =",
        "options": [
            "A. x² - 1",
            "B. 2x² - 1",
            "C. 2x³ - 1"
        ],
        "answer": "B. 2x² - 1"
    },
    {
        "q": "Let f is defined recursively by f(0)=3, f(x+1)=2f(x)+3 then f(1) =",
        "options": [
            "A. 9",
            "B. 10",
            "C. 18",
            "D. 21"
        ],
        "answer": "A. 9"
    },
    {
        "q": "1+2+3+...+n = n(n+1)/2 for all integers n≥1 then P(k) is",
        "options": [
            "A. 1+2+3+...+k = k(k+1)/2",
            "B. 1+2+3+...+n = n(n+1)/2",
            "C. 1+2+3+...+(k+1) = (k+1)(k+2)/2",
            "D. 1+2+3+...+(k-1) = k(k-1)/2"
        ],
        "answer": "A. 1+2+3+...+k = k(k+1)/2"
    },
    {
        "q": "The word refers to a step-by-step method for performing some action.",
        "options": [
            "A. Series",
            "B. Relation",
            "C. Algorithm",
            "D. Function"
        ],
        "answer": "C. Algorithm"
    },
  {
    "q": "The division by zero is allowed in mathematics.",
    "options": ["True", "False"],
    "answer": "Not provided"
  },
  {
    "q": "In the proof by contradiction, we lead the assumption to --------------",
    "options": ["contingency", "None of these.", "tautology", "Absurdity"],
    "answer": "Not provided"
  },
  {
    "q": "In inductive property the first iteration of the loop is solved for?",
    "options": ["I(0)", "I(k + 1)", "None", "I(k)"],
    "answer": "Not provided"
  },
  {
    "q": "The sum of two integers is not an even integer when ………….",
    "options": ["one is 0 and one is even", "one is even and one is odd", "both are odd", "both are even"],
    "answer": "Not provided"
  },
  {
    "q": "Proof by ………..uses the equivalence p →q≡ ~q→~p.",
    "options": ["mathematical induction", "superposition", "contraposition", "contradiction"],
    "answer": "Not provided"
  },
  {
    "q": "“if n is divisible by 5, then n^2  is divisible by 25” is the contrapositive of ………..",
    "options": ["n^2 is not divisible by 25, then n is not divisible by 5", "n^2 is not divisible by 25, then n is divisible by 5", "n^2 is divisible by 25, then n is divisible by 5", "n^2 is divisible by 25, then n is not divisible by 5"],
    "answer": "Not provided"
  },
  {
    "q": "In how many ways a student can choose a course from 2 science courses,3 literature courses and 5 art courses.",
    "options": ["10", "240", "1440", "30"],
    "answer": "Not provided"
  },
  {
    "q": "If ‘r’ is a perfect square, then which of the following is the correct representation of ‘r’?",
    "options": ["r = k^2+1 for some integer k", "r = k^2 for some integer k", "r = k^2+2 for some integer k", "r = k^2-1 for some integer k"],
    "answer": "Not provided"
  },
  {
    "q": "An integer ‘n’ is …….. if it can be represented as a multiple of 2.",
    "options": ["composite", "even", "odd", "prime"],
    "answer": "Not provided"
  },
  {
    "q": "In division algorithm ‘r’ stands for _____.",
    "options": ["Dividend", "Divisor", "Remainder", "Quotient"],
    "answer": "Not provided"
  },
  {
    "q": "The value of (-3)!=______.",
    "options": ["None of the above", "Not defined", "6", "-6"],
    "answer": "Not provided"
  },
  {
    "q": "If 'n' is an odd integer then n^3+n is .....",
    "options": ["even", "odd"],
    "answer": "Not provided"
  },
  {
    "q": "------  is the mathematics of counting and arranging objects?",
    "options": ["Combinatorics", "Algebra"],
    "answer": "Not provided"
  },
  {
    "q": "A predicate becomes ----------- when its variables are given specific values.",
    "options": ["algorithm", "sentence", "statement", "iteration"],
    "answer": "Not provided"
  },
  {
    "q": "Which of the following is true for n = 2?",
    "options": ["x^n - y^n is divisible by (x - y)^2.", "x^n - y^n is divisible by x^5 - y^5.", "x^n - y^n is divisible by x - y.", "x^n - y^n is divisible by x^3 - y^3."],
    "answer": "Not provided"
  },
  {
    "q": "For integers a, b, c, if a divides b and a divides c, then a divides (a + b).",
    "options": ["False", "True"],
    "answer": "Not provided"
  },
  {
    "q": "The Product of an even and odd integer is .....",
    "options": ["odd", "even"],
    "answer": "Not provided"
  },
  {
    "q": "${\\text{The}}\\,{\\text{statement}}\\,{4^n} > {3^n} + 4\\,{\\text{is}}\\,{\\text{true}}\\,{\\text{when}}\\,\\_\\_\\_\\_\\_\\_\\,\\,.$",
    "options": ["${\\text{None of the above}}$", "$n = 1$", "$n \\geqslant 2$", "$n = 0$"],
    "answer": "Not provided"
  },
  {
    "q": "The method of loop invariants is used to prove ----------- of a loop with respect to certain pre and post-conditions.",
    "options": ["falseness", "correctness"],
    "answer": "Not provided"
  },
  {
    "q": "A boy can choose from 5 train services and 3 bus services to go to his hometown, How many total options he can choose from?",
    "options": ["15", "8"],
    "answer": "Not provided"
  },
  {
    "q": "Which of the following is the representation of an odd interger ‘n’?",
    "options": ["n=2k+1 for some integer ‘k’", "n=3k for some integer ‘k’", "n=2k for some integer ‘k’", "n=3k+1  for some integer ‘k’"],
    "answer": "Not provided"
  },
  {
    "q": "Suppose there are 8 different tea flavors and 5 different biscuit brands. A guest wants to take one tea and one brand of biscuit. How many choices are there for this guest?",
    "options": ["8", "40", "5", "13"],
    "answer": "Not provided"
  },
  {
    "q": "Which of the following is true for n = 1?",
    "options": ["2^(2n) - 1 by 2", "2^(2n) - 1 by 5", "2^(2n) - 1 by 3", "2^(2n) - 1 by 4"],
    "answer": "Not provided"
  },
  {
    "q": "The sum of two odd integers is ....",
    "options": ["odd", "even"],
    "answer": "Not provided"
  },
  {
    "q": "If the square of an integer is even , then that integer is ……..",
    "options": ["neither even nor odd", "even", "odd", "either even or odd"],
    "answer": "Not provided"
  },
  {
    "q": "Which of the following is not an irrational number?",
    "options": ["√4", "√2", "√3", "√5"],
    "answer": "Not provided"
  },
  {
    "q": "If 'n' is an odd integer then '3n+2' is ....",
    "options": ["even", "odd"],
    "answer": "Not provided"
  },
  {
    "q": "In inductive step of proof by mathematical induction, the assumption is made for ………..",
    "options": ["n=k+1", "n=k", "n=0", "n=1"],
    "answer": "Not provided"
  },
  {
    "q": "Which of the followings is the factorial form of 5 . 4 ?",
    "options": ["5/3", "5!/3", "5/3!", "5!/3!"],
    "answer": "Not provided"
  },
  {
    "q": "How many possible outcomes are there when a fair coin is tossed four times ?",
    "options": ["8", "16", "32", "4"],
    "answer": "Not provided"
  },
  {
    "q": "(-1)^n = 1 for n=……….\n(^ stands for power)",
    "options": ["7", "3", "4", "5"],
    "answer": "Not provided"
  },
  {
    "q": "Proof by Contradiction is a/an........ method of proof.",
    "options": ["Direct", "Indirect"],
    "answer": "Not provided"
  },
  {
    "q": "To prove by mathematical induction for 1+5+9+----------+(4n-3)=n(2n-1) for all positive integers,the basis step is _________.",
    "options": ["1=1(2(1)+1)", "1=1(2(1)-1)"],
    "answer": "Not provided"
  },
  {
    "q": "A non-zero integer d divides an integer n if and only if there exists an integer k such that ------------",
    "options": ["n = d + k", "n = d k", "n = d - k", "n = d / k"],
    "answer": "Not provided"
  },
  {
    "q": "The sum of a rational and irrational number  ……..",
    "options": ["is always a rational number", "none of these", "may or may not be rational number", "is always an irrational number"],
    "answer": "Not provided"
  },
  {
    "q": "There are 5 Chinese books and 6 English books, a Student wants to select one optional book for both subject, total number of choices will be?",
    "options": ["30", "10", "11", "15"],
    "answer": "Not provided"
  },
  {
    "q": "To prove by mathematical induction for \n1+2+3+…….+n=(n)(n+1)/2 for all positive integers, the basis step is __________.",
    "options": ["1+2+3+……..+k=(k+1)(k+2)/2", "None of the above", "1=(1)(1+1)/2", "1+2+3+……..+k=(k)(k+1)/2"],
    "answer": "Not provided"
  },
  {
    "q": "The sum of two integers is even when ……….",
    "options": ["one is zero and one is odd", "one is prime and one is composite", "both are even or both are odd", "one is even and one is odd"],
    "answer": "Not provided"
  },
  {
    "q": "The word \"algorithm\" refers to a step-by-step method for performing some action.",
    "options": ["True", "False"],
    "answer": "Not provided"
  },
  {
    "q": "The method of loop invariants is based on the principle\nof _____.",
    "options": ["Division algorithm", "Mathematical induction"],
    "answer": "Not provided"
  },
  {
    "q": "For every prime number n, n + 2 is prime.\nWhich of the following prime number disproves the above statement.",
    "options": ["n=3", "n=11", "n=5", "n=7"],
    "answer": "Not provided"
  },
  {
    "q": "If one event can occur in ${n_1}$ ways, a second event can occur in ${n_2}$ ways, a third event can occur in ${n_3}$ ways, how ways all of the events can occur in the order?",
    "options": ["${n_1} + {n_2} + {n_3}$", "${n_1}.{n_2}.{n_3}$"],
    "answer": "Not provided"
  },
  {
    "q": "$${\\text{The}}\\,{\\text{sequence}}\\,1 + 2 + 3 + 4 - - - - - - + n\\,{\\text{is}}\\,{\\text{equal}}\\,{\\text{to}}\\,\\_\\_\\_\\_\\_\\_\\_\\,.$$",
    "options": ["$$\\frac{{{n^2}}}{2}$$", "$$\\frac{{n\\left( {n + 1} \\right)}}{2}$$", "$$\\frac{{n\\left( {n + 1} \\right)\\left( {2n + 1} \\right)}}{6}$$", "$$\\frac{{{n^2}{{\\left( {n + 1} \\right)}^2}}}{4}$$"],
    "answer": "Not provided"
  },
  {
    "q": "GCD of (8, 12) will be _____.",
    "options": ["3", "4", "6", "5"],
    "answer": "Not provided"
  },
  {
    "q": "The factorial form of  9.8.7.6 is ______.",
    "options": ["9!/4!", "6!/5!", "9!/5!", "7!/6!"],
    "answer": "Not provided"
  },
  {
    "q": "Number of combinations of 3-bit string that contain exactly three “0” is ……………….",
    "options": ["6", "7", "1", "8"],
    "answer": "Not provided"
  },
  {
    "q": "To prove by mathematical induction basis step is _______.",
    "options": ["The proposition P(1) is true", "The proposition P(1) is false"],
    "answer": "Not provided"
  },
  {
    "q": "P(0, 0)=________ ?",
    "options": ["0", "1", "2", "Undefined"],
    "answer": "Not provided"
  },
  {
    "q": "The predicate which describes the initial state is called the ---------- of the algorithm",
    "options": ["post-condition", "pre-condition"],
    "answer": "Not provided"
  },
  {
    "q": "Number of ways the ‘7’ student can be divided into group of ‘3’ and ‘4’are ……………",
    "options": ["35", "120", "50", "210"],
    "answer": "Not provided"
  },
  {
    "q": "The contrapositive of  “5n + 2 is odd, then n is odd” is ………..",
    "options": ["“ if n is even then 5n + 2 is not even”", "“ if n is even then 5n + 2 is even”", "“ if n is not even then 5n + 2 is even”", "“ if n is not even then 5n + 2 is not even”"],
    "answer": "Not provided"
  },
  {
    "q": "To prove by mathematical induction for 1+3+5+ ...+ (2n-1) = n^2 for all positive integers, the basis step is ------------",
    "options": ["1+3+5+ ...+ (2k-1) = k^2", "1+3+5+ ...+ (2(k+1)-1) = (k+1)^2", "LHS = p(1) = 2x1-1=1, RHS = 1^2 = 1", "1+3+5+ ...+ (2n-1) = n^2"],
    "answer": "Not provided"
  },
  {
    "q": "In how many ways can 6 people be seated on 6 available seats?",
    "options": ["720", "120", "12", "6"],
    "answer": "Not provided"
  },
  {
    "q": "(-2)! = _________ ?",
    "options": ["2", "-2", "Undefined", "0"],
    "answer": "Not provided"
  },
  {
    "q": "The set of prime numbers is -------------",
    "options": ["infinite set.", "finite set.", "continuous set.", "None of these."],
    "answer": "Not provided"
  },
  {
    "q": "There are 4 bus lines between X and Y; and 5 bus lines between Y and Z , the number of ways a person can travel from X to Z?",
    "options": ["9", "20"],
    "answer": "Not provided"
  },
  {
    "q": "The sum of two irrational numbers must be an irrational number.",
    "options": ["True", "False"],
    "answer": "Not provided"
  },
  {
    "q": "Proof by contraposition is based on the logical equivalence between a statement and its..... .",
    "options": ["none of these", "Inverse", "Converse", "contrapositive"],
    "answer": "Not provided"
  },
  {
    "q": "P(n, 2)=90, Which of the followings is the value of n ?",
    "options": ["90", "45", "15", "10"],
    "answer": "Not provided"
  },
  {
    "q": "In basis property the first iteration of the loop is solved for?",
    "options": ["I(k + 1)", "None", "I(k)", "I(0)"],
    "answer": "Not provided"
  },
  {
    "q": "If order matters and repetition is not allowed, then which counting method should be used in order to select 'k' elements from a total of 'n' elements?",
    "options": ["K-Permutation", "K-Sample", "K-Selection", "K-Combination"],
    "answer": "Not provided"
  },
  {
    "q": "The sum of any rational number and any irrational number is irrational.",
    "options": ["False", "True"],
    "answer": "Not provided"
  },
  {
    "q": "The rational number ‘2’ is the product of which of the two irrational numbers.",
    "options": ["√2, √2", "√2, √3", "√2, √5", "√2, √7"],
    "answer": "Not provided"
  },
  {
    "q": "The predicate describing the final state is called ______.",
    "options": ["None", "post-condition of the algorithm", "pre-condition of the algorithm", "Input variables"],
    "answer": "Not provided"
  },
  {
    "q": "A student can choose a computer project from one of the two lists. The two lists contain 12 and 18 possible projects, respectively.\nHow many possible projects are there to choose from ?",
    "options": ["12", "216", "30", "18"],
    "answer": "Not provided"
  },
  {
    "q": "In division algorithm the pre-condition is?",
    "options": ["is a nonnegative integer and d is a positive integer", "q and r are nonnegative integers"],
    "answer": "Not provided"
  },
  {
    "q": "The last step of  describing algorithms formally is?",
    "options": ["The output variable names.", "The name of the algorithm.", "An end statement.", "The input variable names."],
    "answer": "Not provided"
  },
  {
    "q": "A predicate is a sentence that contains a finite number of ----------------",
    "options": ["variables", "Constants"],
    "answer": "Not provided"
  },
  {
    "q": "An integer n is prime number, if and only if \n for all positive integers r and s, if n = rs then --------",
    "options": ["r > 1 or s > 1", "r = 1 or s = 1", "r < 1 or s < 1", "r = s"],
    "answer": "Not provided"
  },
  {
    "q": "To prove by mathematical induction Inductive Step is ________.",
    "options": ["If P(k) is true then P(k - 1) is true for all integers k ≥ 1", "If P(k) is true then P(k + 1) is true for all integers k ≥ 1"],
    "answer": "Not provided"
  },
  {
    "q": "The sum of two irrational numbers in general …………..",
    "options": ["may or may not be an irrational number", "none of these", "is always a rational number", "is always an irrational number"],
    "answer": "Not provided"
  },
  {
    "q": "A box contains 5 different colored light bulbs. Which of the followings is the number of ordered samples of size 3 with replacement ?",
    "options": ["243", "8", "15", "125"],
    "answer": "Not provided"
  },
  {
    "q": "The greatest common divisor (gcd) of two integers a and b is the largest integer that divides both a and b. It is called -------",
    "options": ["the Division Algorithm", "Pre-Condition of Algorithm", "the Euclidean Algorithm", "Post-Condition of Algorithm"],
    "answer": "Not provided"
  },
  {
    "q": "----- is used to determine number of ordered or unordered arrangement of objects.",
    "options": ["Counting", "Algorithm"],
    "answer": "Not provided"
  },
  {
    "q": "${\\text{The}}\\,{\\text{sequence}}\\,{1^3} + {2^3} + {3^3} + - - - - - - - + {n^3}\\, = \\,\\_\\_\\_\\_\\_\\_\\_\\,.$",
    "options": ["$\\frac{{n\\left( {n + 1} \\right)\\left( {2n + 1} \\right)}}{6}$", "$\\frac{{{n^2}{{\\left( {n + 1} \\right)}^2}}}{4}$", "$\\frac{{{n^2}}}{2}$", "$\\frac{{n\\left( {n + 1} \\right)}}{2}$"],
    "answer": "Not provided"
  },
  {
    "q": "The loop is correct if the four properties are true, one of the property is?",
    "options": ["Associativity", "Commutativity", "Eventual Falsity of Guard", "Transitivity"],
    "answer": "Not provided"
  },
  {
    "q": "If one event can occur in ${n_1}$ ways, a second event can occur in ${n_2}$ ways, a third event can occur in ${n_3}$ ways, how ways in which exactly one of the events can occur?",
    "options": ["${n_1}.{n_2}.{n_3}$", "${n_1} + {n_2} + {n_3}$"],
    "answer": "Not provided"
  },
  {
    "q": "Which of the following statement is true according to the Division Algorithm?",
    "options": ["17 = 5 x 4 - 3", "17 = 5 x 1 + 12", "17 = 5 x 3 + 2", "17 = 5 x 5 - 8"],
    "answer": "Not provided"
  },
  {
    "q": "Which of the following is not a rational number?",
    "options": ["2", "3.14", "√7", "9/4"],
    "answer": "Not provided"
  },
  {
    "q": "Which of the following is not a method to prove the mathematical statements?",
    "options": ["Permutation", "Mathematical induction", "Proof by contradiction", "Proof by contraposition"],
    "answer": "Not provided"
  },
  {
    "q": "Set of prime numbers is finite.",
    "options": ["False", "True"],
    "answer": "Not provided"
  },
  {
    "q": "If the Basis step is true, then there is no need to go further in the proof by Mathematical Induction.",
    "options": ["False", "True"],
    "answer": "Not provided"
  },
  {
    "q": "which of the followings is the correct option for  9!/0! ?",
    "options": ["1", "9!", "9", "0"],
    "answer": "Not provided"
  },
  {
    "q": "A student has 3 optional courses in mathematics and 5 optional courses in physics, how many total choices for him to take one course?",
    "options": ["35", "7", "9", "8"],
    "answer": "Not provided"
  },
  {
    "q": "The first step of  describing algorithms formally is ?",
    "options": ["The output variable names, labeled by data type.", "An end statement.", "The name of the algorithm, together with a list of input and output variables.", "The statements that make the body of the algorithm."],
    "answer": "Not provided"
  },
  {
    "q": "GCD of (9, 27) will be ______.",
    "options": ["27", "3", "5", "9"],
    "answer": "Not provided"
  },
  {
    "q": "${\\text{The}}\\,{\\text{statement}}\\,{n^2} > n + 3\\,{\\text{is}}\\,{\\text{true}}\\,{\\text{when}}\\,\\_\\_\\_\\_\\_\\,{\\text{.}}$",
    "options": ["$n \\geqslant 1$", "$n \\geqslant - 1$", "$n \\geqslant 2$", "$n \\geqslant 3$"],
    "answer": "Not provided"
  },
  {
    "q": "The product of any two consecutive positive integers is divisible by 2.",
    "options": ["False", "True"],
    "answer": "Not provided"
  },
  {
    "q": "A proof by …………is based on the logical equivalence between a statement and its contrapositive.",
    "options": ["contraposition", "contradiction", "mathematical induction", "counter example"],
    "answer": "Not provided"
  },
  {
    "q": "To prove by mathematical induction for 1+5+9+----------+(4n-3)=n(2n-1) for all positive integers,the inductive step is true for n=k is _________.",
    "options": ["1+5+9+-----------+(4k-3)=k(2k+1)", "1+5+9+-----------+(4k+3)=k(2k+1)", "1+5+9+-----------+(4k-3)=k(2k-1)", "1+5+9+-----------+(4k+3)=k(2k-1)"],
    "answer": "Not provided"
  },
  {
    "q": "'Reductio ad absurdum' is another name of ----------",
    "options": ["proof by contrapositive", "Direct Method of proof", "proof by contradiction", "None of these."],
    "answer": "Not provided"
  },
  {
    "q": "The ---- of a predicate variable is the set of all values that may be substituted in place\nof the variable.",
    "options": ["Range", "Domain"],
    "answer": "Not provided"
  },
  {
    "q": "A proof by …………….. is based on the fact that either a statement is true or it is false but not both.",
    "options": ["mathematical induction", "superposition", "contraposition", "contradiction"],
    "answer": "Not provided"
  },
  {
    "q": "Basis and Inductive steps are part of proof by …………",
    "options": ["mathematical induction", "contradiction", "superposition", "contraposition"],
    "answer": "Not provided"
  },
  {
    "q": "The quantity a - d · q equals the?",
    "options": ["Remainder", "None", "Quotient", "Divisor"],
    "answer": "Not provided"
  },
  {
    "q": "Combination is used when we have to select 'k' elements from a set of 'n' elements with the following properties.",
    "options": ["Order matters and repetition is allowed", "Order does not matter and repetition is allowed", "Order does not matter and repetition is not allowed", "Order matters and repetition is not allowed."],
    "answer": "Not provided"
  },
  {
    "q": "The predicate describing the initial state is\ncalled _____.",
    "options": ["Out put variables", "pre-condition of the algorithm", "post-condition of the algorithm", "None"],
    "answer": "Not provided"
  },
  {
    "q": "P(2,2)=…………",
    "options": ["2!", "4!", "1", "0"],
    "answer": "Not provided"
  },
  {
    "q": "Proof by ……..uses the equivalence p →q ≡(p∧~q) →c",
    "options": ["superposition", "contradiction", "mathematical induction", "contraposition"],
    "answer": "Not provided"
  },
  {
    "q": "There are three bus lines between A and B, and two bus lines between B and C.\nFind the number of ways a person can travel by bus from A to C by way of B ?",
    "options": ["13", "6", "11", "5"],
    "answer": "Not provided"
  },
  {
    "q": "The chairs of an auditorium are to be labeled with two characters, a letter followed by a digit. Letters are a and b and numbers are 3 and 5.What is the largest number of chairs that can be labeled differently ?",
    "options": ["4", "8", "10", "15"],
    "answer": "Not provided"
  },
  {
    "q": "If order matters and repetition is allowed, then which counting method should be used in order to select 'k' elements from a total of 'n' elements?",
    "options": ["K-Permuatation", "K-combination", "K-Sample", "K-Selection"],
    "answer": "Not provided"
  },
  {
    "q": "If the sum of two integers is even then their difference would be ......",
    "options": ["odd", "even"],
    "answer": "Not provided"
  },
  {
    "q": "In how many ways a student can choose one of each of the courses when he is offered 3 mathematics courses, 4 literature courses and 2 history courses.",
    "options": ["288", "14", "9", "24"],
    "answer": "Not provided"
  },
  {
    "q": "(n-2)!/(n-2)=_________ ?",
    "options": ["(n-1)!", "(n-2)!", "(n-3)!", "(n-2)(n-3)!"],
    "answer": "Not provided"
  },
  {
    "q": "${\\text{If}}\\,n\\,{\\text{is}}\\,{\\text{any}}\\,{\\text{positive}}\\,{\\text{integer}}\\,{\\text{then}}\\,{2^n} \\geqslant 2\\left( {n + 1} \\right)\\,{\\text{is}}\\,{\\text{true}}\\,{\\text{for}}\\,{\\text{all}}\\,\\,\\_\\_\\_\\_\\_\\_\\_\\_\\,.$",
    "options": ["$n \\geqslant 3$", "$n \\leqslant 3$", "$n > 3$", "$n < 3$"],
    "answer": "Not provided"
  },
  {
    "q": "In a city, the bus route numbers consist of a natural number less than 20, followed by one of the letters A,B,C,D,E and F. How many different bus routes are possible?",
    "options": ["20!", "114", "26", "120"],
    "answer": "Not provided"
  },
  {
    "q": "${\\text{If}}\\,n\\,{\\text{is}}\\,{\\text{any}}\\,{\\text{positive}}\\,{\\text{integer}}\\,{\\text{then}}\\,{\\text{the}}\\,{\\text{sequence}}\\,3 + 6 + 9 + - - - - - - + 3n\\, = \\,\\,\\_\\_\\_\\_\\_\\_\\_\\,.$",
    "options": ["$\\frac{{{n^2}{{\\left( {n + 1} \\right)}^2}}}{4}$", "$\\frac{{3n\\left( {n + 1} \\right)}}{2}$", "$$3n(n + 1)$$", "$\\frac{{2n\\left( {n + 1} \\right)}}{3}$"],
    "answer": "Not provided"
  },
  {
    "q": "In the Direct Proof, we show that if the statement p is true, then the statement q is ----------",
    "options": ["not necessarily true.", "true", "false", "opposite to p"],
    "answer": "Not provided"
  },
  {
    "q": "A proof by contraposition is based on the logical equivalence between a statement and its………..",
    "options": ["contrapositive", "none of these", "converse", "inverse"],
    "answer": "Not provided"
  },
  {
    "q": "GCD of (330,156) is?",
    "options": ["6", "12", "5", "8"],
    "answer": "Not provided"
  },
  {
    "q": "For all positive real numbers a and b, if a < b, then -----------",
    "options": ["a^2 = b^2", "a^2 > b^2", "a^2 < b^2", "None of these."],
    "answer": "Not provided"
  },
  {
    "q": "How many 4-bit string contain at least one “1”",
    "options": ["14", "16", "15", "12"],
    "answer": "Not provided"
  },
  {
    "q": "How many multiples of 5 are there from 10 to 75?",
    "options": ["14", "15", "20", "10"],
    "answer": "Not provided"
  },
  {
    "q": "Algorithm is a more general term in that the term ---- refers to a particular programming language.",
    "options": ["None", "Information", "Task", "Program"],
    "answer": "Not provided"
  },
  {
    "q": "A bit string is a sequence of 0’s and 1’s.",
    "options": ["True", "False"],
    "answer": "Not provided"
  },
  {
    "q": "An integer n is a perfect square if and only if ---------- for some integer k.",
    "options": ["n = k^3", "n = k^2", "n = square-root of k", "n = 2k"],
    "answer": "Not provided"
  },
  {
    "q": "Sum rule in terms of sets, involves which set operation?",
    "options": ["Intersection", "Union"],
    "answer": "Not provided"
  },
  {
    "q": "There are three bus lines between A and B, and two bus lines between B and C.\nFind the number of ways a person can travel round trip by bus from A to C by way of B ?",
    "options": ["5", "36", "6", "10"],
    "answer": "Not provided"
  },
  {
    "q": "While proofing by contradiction the equivalence ………..is used.",
    "options": ["p →q ≡(~p∧~q) →c", "~p →q ≡(p∧~q) →c", "p →~q ≡(p∧~q) →c", "p →q ≡(p∧~q) →c"],
    "answer": "Not provided"
  },
  {
    "q": "$${\\text{The}}\\,{\\text{statement}}\\,{3^n} < n!\\,{\\text{is}}\\,{\\text{true}}\\,{\\text{when}}\\,\\_\\_\\_\\_\\_\\_\\,.$$",
    "options": ["$$n > 6$$", "$$n = 6$$", "$$n = 2$$", "$$n = 4$$"],
    "answer": "Not provided"
  },
  {
    "q": "While proofing by contraposition the equivalence ………..is used.",
    "options": ["~p →~q≡ ~q→~p", "p →~q≡ ~q→~p", "p →q≡ ~q→~p", "~p →q≡ ~q→~p"],
    "answer": "Not provided"
  },
  {
    "q": "[Math Processing Error]$${\\text{The}}\\,{\\text{sequence}}\\,1 + 2 + 3 + 4 - - - - - - + n\\,{\\text{is}}\\,{\\text{equal}}\\,{\\text{to}}\\,\\_\\_\\_\\_\\_\\_\\_\\,.$$",
    "options": ["[Math Processing Error]$$\\frac{{{n^2}}}{2}$$", "[Math Processing Error]$$\\frac{{n\\left( {n + 1} \\right)}}{2}$$", "[Math Processing Error]$$\\frac{{{n^2}{{\\left( {n + 1} \\right)}^2}}}{4}$$", "[Math Processing Error]$$\\frac{{n\\left( {n + 1} \\right)\\left( {2n + 1} \\right)}}{6}$$"],
    "answer": "Not provided"
  },
  {
    "q": "If n is an odd integer then ‘3n+2’ is ………",
    "options": ["even", "either even or odd", "neither even nor odd", "odd"],
    "answer": "Not provided"
  },
  {
    "q": "The sum of (6 − 7√2) and (6 + 7√2) is …………..",
    "options": ["12-14√2)", "12", "2(6-7√2)", "2(6+7√2)"],
    "answer": "Not provided"
  },
  {
    "q": "If there are 5 different optional courses in English and 3\ndifferent optional courses in Maths. Choices for a student who wants to take one optional course _____?",
    "options": ["7", "8", "9", "5"],
    "answer": "Not provided"
  },
  {
    "q": "If the guard G and the loop invariant I(k) are both true for an integer k ≥ 0 before an iteration of the loop, then I(k + 1) is?",
    "options": ["False", "True"],
    "answer": "Not provided"
  },
  {
    "q": "The sum of two odd integers is ....",
    "options": ["even", "odd"],
    "answer": "Not provided"
  },
  {
    "q": "Which of the following is not a rational number?",
    "options": ["9/4", "3.14", "2", "√7"],
    "answer": "Not provided"
  },
  {
    "q": "The factorial form of  9.8.7.6 is ______.",
    "options": ["9!/4!", "7!/6!", "6!/5!", "9!/5!"],
    "answer": "Not provided"
  },
  {
    "q": "Proof by Contradiction is a/an........ method of proof.",
    "options": ["Direct", "Indirect"],
    "answer": "Not provided"
  },
  {
    "q": "There are 4 bus lines between X and Y; and 5 bus lines between Y and Z , the number of ways a person can travel from X to Z?",
    "options": ["9", "20"],
    "answer": "Not provided"
  },
  {
    "q": "The product of any two consecutive positive integers is divisible by 2.",
    "options": ["True", "False"],
    "answer": "Not provided"
  },
  {
    "q": "If one event can occur in ${n_1}$ ways, a second event can occur in ${n_2}$ ways, a third event can occur in ${n_3}$ ways, how ways all of the events can occur in the order?",
    "options": ["${n_1}.{n_2}.{n_3}$", "${n_1} + {n_2} + {n_3}$"],
    "answer": "Not provided"
  },
  {
    "q": "The sum of two integers is even when ……….",
    "options": ["one is zero and one is odd", "one is prime and one is composite", "one is even and one is odd", "both are even or both are odd"],
    "answer": "Not provided"
  },
  {
    "q": "Number of combinations of 3-bit string that contain exactly three “0” is ……………….",
    "options": ["6", "1", "8", "7"],
    "answer": "Not provided"
  },
  {
    "q": "Proof by ……..uses the equivalence p →q ≡(p∧~q) →c",
    "options": ["contradiction", "superposition", "mathematical induction", "contraposition"],
    "answer": "Not provided"
  },
  {
    "q": "If E(5)=5, then find arithmetic mean willl be",
    "options": ["1", "10", "5", "0"],
    "answer": "Not provided"
  },
  {
    "q": "Which of the followings is correct option?",
    "options": ["C(n, 0) = 1", "C(n, n) = n", "C(n, k) + C(n, k + 1) = C(n, k + 1)", "C(n, k) = C(n + k, n – k)"],
    "answer": "Not provided"
  },
  {
    "q": "$P(A|A) = ....................$",
    "options": ["2", "1", "0", "None of these"],
    "answer": "Not provided"
  },
  {
    "q": "Let A be the subset of B, then ------------",
    "options": ["P( A ) > P ( B )", "P( A ) = P ( B )", "P( A ) < P ( B )", "P( A ) <=  P ( B )"],
    "answer": "Not provided"
  },
  {
    "q": "If A and B are two independent events then $P(A \\cap B) = ..................$",
    "options": ["P(B)", "P(A)", "1", "$P(A)P(B)$"],
    "answer": "Not provided"
  },
  {
    "q": "In how many ways can the letters of the word 'LEADER' be arranged?",
    "options": ["250", "360", "310", "None of these"],
    "answer": "Not provided"
  },
  {
    "q": "If A and B be events with P(A)=1/3, P(B)=1/4 and P(A intersection B)=1/6, then P(B | A)= ________ .",
    "options": ["1/12", "1/2", "1/24", "2/3"],
    "answer": "Not provided"
  },
  {
    "q": "If A and B be events with P(A)=1/3, P(B)=1/4 and P(A intersection B)=1/6, then P(A U B)= ________ .",
    "options": ["2/3", "5/12", "1/2", "1/24"],
    "answer": "Not provided"
  },
  {
    "q": "If A and B are disjoint sets then $P(A|B) = .............$",
    "options": ["0", "P(A)", "P(B)", "1"],
    "answer": "Not provided"
  },
  {
    "q": "If k = 10 and n = 2; find the number of ways using k-Selection.",
    "options": ["1", "10", "11", "None of these"],
    "answer": "Not provided"
  },
  {
    "q": "The number of possible permutations of the letters of the word,\"ADDING\" having two D’s together",
    "options": ["2!", "3!", "5!", "6!"],
    "answer": "Not provided"
  },
  {
    "q": "Let n(U)=100 and n(A)=25, then n(A')=…………….",
    "options": ["75", "55", "65", "100"],
    "answer": "Not provided"
  },
  {
    "q": "If X is a discrete random variable and f(x) is the probability of X, then the expected value of this random variable is equal to:",
    "options": ["$x + \\sum {f(x)}$", "$\\sum {(x + f(x))}$", "$\\sum {f(x)}$", "$\\sum {xf(x)}$"],
    "answer": "Not provided"
  },
  {
    "q": "If a die is tossed how many outcomes the sample space  of the experiment will have?",
    "options": ["6", "36", "5", "12"],
    "answer": "Not provided"
  },
  {
    "q": "If the random variable X denotes the number of heads when three distinct coins are tossed, then X assumes the value",
    "options": ["0,1,2,3", "1,3,3,1", "0,1,2", "1,2,3"],
    "answer": "Not provided"
  },
  {
    "q": "A tree diagram is a tool to list all the logical possibilities of a sequence of events where each event can occur in a ____ number of ways.",
    "options": ["Infinite", "Finite"],
    "answer": "Not provided"
  },
  {
    "q": "$P(A|B) = \\frac{{P(A \\cap B)}}{{P(B)}},\\,\\,\\,\\,\\,where\\,\\,.............$",
    "options": ["$P(B) = 0$", "$P(B) > 1$", "$P(B) > 0$", "$P(B) < 0$"],
    "answer": "Not provided"
  },
  {
    "q": "How many different signals each consisting of five flags hung in a vertical line, can be formed from three identical red flags and two identical blue flags?",
    "options": ["10", "120", "40", "20"],
    "answer": "Not provided"
  },
  {
    "q": "The sum of probabilities of all outcome is always equal to “0”.",
    "options": ["False", "True"],
    "answer": "Not provided"
  },
  {
    "q": "If A and B are finite sets then the mathematical representation of inclusion-exclusion principle is ……………..",
    "options": ["Non of these", "$n(A \\cup B) = n(A) + n(B)$", "$$n(A \\cup B) = n(A) + n(B) - n(A \\cap B)$$", "$n(A \\cup B) = n(A) + n(B) - n(A \\cup B)$"],
    "answer": "Not provided"
  },
  {
    "q": "Let A and B be the mutually exclusive events such that P ( A ) = 0.6,  P ( B ) = 0.2, then  P ( A U B ) = ?",
    "options": ["0.5", "0.7", "0.4", "0.8"],
    "answer": "Not provided"
  },
  {
    "q": "If A and B are finite sets then $$n(A \\cup \\,B) = \\_\\_\\_\\_\\_\\_.$$",
    "options": ["$$n(A) + n(B) - n(A \\cup \\,B)$$", "$$n(A) + n(B) - n(A \\cap \\,B)$$", "$$n(A) + n(B) + n(A \\cap \\,B)$$", "$$n(A) + n(B)$$"],
    "answer": "Not provided"
  },
  {
    "q": "If X and Y are independent random variables, then E(XY) is equal to __________.",
    "options": ["YE(X)", "E(XY)", "E(X)E(Y)", "XE(Y)"],
    "answer": "Not provided"
  },
  {
    "q": "In which century the theory of probability was first developed?",
    "options": ["18th century", "17th century", "16th century", "19th century"],
    "answer": "Not provided"
  },
  {
    "q": "Find the number of distinct permutations that can be formed using the letters of the word ”BENZENE”",
    "options": ["320", "120", "220", "420"],
    "answer": "Not provided"
  },
  {
    "q": "Let S = {1, 2, 3, 4, 5, 6}, A = {1, 3, 5}, B = {2, 4, 6}, then P(A U B) will be --------",
    "options": ["1/2", "1", "2/3", "0"],
    "answer": "Not provided"
  },
  {
    "q": "The addition law of probability for two disjoint events A and B is -------",
    "options": ["P(A or B) = P (A) + P(B)  - P (A and B)", "P(A or B) = P (A) + P (B)  -  P(A) P(B)", "P(A or B) = P(A) + P(B)  +  P(A) P(B)", "P(A or B) = P(A) + P(B)"],
    "answer": "Not provided"
  },
  {
    "q": "If A and B are disjoint sets then the mathematical representation of inclusion-exclusion principle is …………….",
    "options": ["$n(A \\cup B) = n(A) + n(B) - n(A \\cup B)$", "$n(A \\cup B) = n(A) + n(B)$", "$$n(A \\cup B) = n(A) + n(B) - n(A \\cap B)$$", "None of these"],
    "answer": "Not provided"
  },
  {
    "q": "If X and Y are random variables, then E(aX)is equal to",
    "options": ["aX", "aE(X)", "E(aX)", "None of these"],
    "answer": "Not provided"
  },
  {
    "q": "The expected value E(X) is obtained by multiplying each value of x with its probability and taking the sum.",
    "options": ["True", "False"],
    "answer": "Not provided"
  },
  {
    "q": "Find the value of C(n , n)",
    "options": ["0", "1", "None of these", "n"],
    "answer": "Not provided"
  },
  {
    "q": "Which of the followings is the number of distinct permutations that can be formed using the letters of the word BUZZ ?",
    "options": ["8", "4", "12", "24"],
    "answer": "Not provided"
  },
  {
    "q": "Let A and B be the mutually exclusive events, then  P(A and B) = ?",
    "options": ["1/2", "1", "0", "2/3"],
    "answer": "Not provided"
  },
  {
    "q": "0! = ------",
    "options": ["1", "-1", "None of these", "0"],
    "answer": "Not provided"
  },
  {
    "q": "A boy have 3 red and 4 blue balls, What is the probability that a\nball chosen from the boy is blue?",
    "options": ["none", "4/7", "1/7", "3/7"],
    "answer": "Not provided"
  },
  {
    "q": "An expected value of a random variable is equal to its mean.",
    "options": ["True", "False"],
    "answer": "Not provided"
  },
  {
    "q": "If X and Y are random variables, then E(X-Y)is equal to",
    "options": ["E(X)+E(Y)", "E(X+Y)", "E(X)-E(Y)", "E(X-Y)"],
    "answer": "Not provided"
  },
  {
    "q": "What is the probability of getting a number greater than 3 when a dice is\ntossed?",
    "options": ["1/4", "1/2", "1/5", "1/3"],
    "answer": "Not provided"
  },
  {
    "q": "If A is any set and U is the universalset then $$n(\\,A'\\,) = \\_\\_\\_\\_\\_\\_.$$",
    "options": ["$$n(U) - n(U \\cap \\,A)$$", "$$n(U) - n(U \\cup \\,A)$$", "$$n(U) + n(U \\cap \\,A)$$", "$$n(U) + n(U \\cup \\,A)$$"],
    "answer": "Not provided"
  },
  {
    "q": "A tree is normally constructed from______.",
    "options": ["right", "center", "right to left", "left to right"],
    "answer": "Not provided"
  },
  {
    "q": "The event A ∪ B may be written as?",
    "options": ["∪ B = (A\\B)", "∪ B = (A\\B) ∪ B", "∪ B = (A\\B) - B", "∪ B = (A\\B) ∩ B"],
    "answer": "Not provided"
  },
  {
    "q": "$P(A \\cap B) = P(A).P(A|B)$",
    "options": ["True", "False"],
    "answer": "Not provided"
  },
  {
    "q": "A student is to answer five out of nine questions on exams. Find the number of ways that can choose the five questions.",
    "options": ["126", "None of these", "316", "216"],
    "answer": "Not provided"
  },
  {
    "q": "How many bit strings of length two do not have two consecutive 1’s ?",
    "options": ["2", "3", "1", "4"],
    "answer": "Not provided"
  },
  {
    "q": "If a box B contains four marbles numbered 1 through 4. Then the number of ways of drawing marbles from B firstly three marbles and then remaining one marble is",
    "options": ["12", "4", "27", "7"],
    "answer": "Not provided"
  },
  {
    "q": "If A and B be events with P(A)=1/3, P(B)=1/4 and P(A intersection B)=1/6, then P(A | B)= ________ .",
    "options": ["1/24", "2/3", "1/2", "1/12"],
    "answer": "Not provided"
  },
  {
    "q": "Number of distinct permutations that can be formed using the letters of the word “Bubble”are ……………….",
    "options": ["720", "80", "120", "216"],
    "answer": "Not provided"
  },
  {
    "q": "What is the probability of getting a number greater than 5 when a dice is\ntossed?",
    "options": ["2/6", "1/3", "1/6", "1/5"],
    "answer": "Not provided"
  },
  {
    "q": "Let $n(A) = 108,\\,\\,\\,n(B) = 72$, and $n(A \\cap B) = 36$ ,then by principle of inclusion and exclusion $n(A \\cup B) = .................$",
    "options": ["104", "208", "144", "180"],
    "answer": "Not provided"
  },
  {
    "q": "Find the number of the word that can be formed of the letters of the word “ELEVEN”.",
    "options": ["220", "110", "120", "None of these"],
    "answer": "Not provided"
  },
  {
    "q": "C(n, k)= k! P(n, k) .",
    "options": ["True", "False"],
    "answer": "Not provided"
  },
  {
    "q": "Which of the followings is the product set A * B * C ? where A = {a}, B = {b}, and C = {c, d}.",
    "options": ["{(c, b, a), (d, b, a)}", "{(a, c, b), (a, d, b)}", "{(a, b, c), (a, b, d)}", "{(b, c, a), (b, d, a)}"],
    "answer": "Not provided"
  },
  {
    "q": "A Random variable is also called a",
    "options": ["Chance Variable", "Constant"],
    "answer": "Not provided"
  },
  {
    "q": "Let $E({X^2}) = 6\\,,\\,\\,{\\mu ^2} = 2,$ then standard deviation is …………..",
    "options": ["-2", "4", "8", "2"],
    "answer": "Not provided"
  },
  {
    "q": "If A, B and C are any three events, then P( A U B U C) = ?",
    "options": ["P(A) + P(B) + P(C) + P(A and B) + P (A and C) + P(B and C) - P(A and B and C)", "P(A) + P(B) + P(C) + P(A and B) + P (A and C) + P(B and C) + P(A and B and C)", "P(A) + P(B) + P(C) - P(A and B) - P (A and C) - P(B and C)", "P(A) + P(B) + P(C) - P(A and B) - P (A and C) - P(B and C) + P(A and B and C)"],
    "answer": "Not provided"
  },
  {
    "q": "A boy have 5 red and 7 blue balls, What is the probability that a ball chosen from the boy is red?",
    "options": ["none", "5/7", "5/12", "7/12"],
    "answer": "Not provided"
  },
  {
    "q": "What is the minimum number of students in a class to be sure that two of them are born in the same month ?",
    "options": ["14", "12", "11", "13"],
    "answer": "Not provided"
  },
  {
    "q": "How many integers from 1 through 1002 are not multiples of 4 ?",
    "options": ["250", "334", "501", "752"],
    "answer": "Not provided"
  },
  {
    "q": "P(A′∩B′) = ?",
    "options": ["P(A∪B)", "P(A\\B)′", "P(A∪B)′", "P(AB)′"],
    "answer": "Not provided"
  },
  {
    "q": "C(n,1)=……………..",
    "options": ["Cannot be determined", "1", "0", "n"],
    "answer": "Not provided"
  },
  {
    "q": "Compute C(8 , 3)",
    "options": ["65", "46", "56", "36"],
    "answer": "Not provided"
  },
  {
    "q": "The probability of a an event lies between 0 and 1.",
    "options": ["True", "False"],
    "answer": "Not provided"
  },
  {
    "q": "How many integers from 1 through 1002 are multiples of 4 ?",
    "options": ["250", "250.5", "249", "251"],
    "answer": "Not provided"
  },
  {
    "q": "Conditional probability of A given B is defined as ……………….",
    "options": ["$P(A \\cap B)$", "$\\frac{{P(A \\cap B)}}{{P(a)}}$", "$\\frac{{P(A \\cap B)}}{{P(B)}}$", "None of these"],
    "answer": "Not provided"
  },
  {
    "q": "If two light bulbs are chosen at random from 5 bulbs of which 3 are defective, then which of the following is the probability that none is defective?",
    "options": ["2/8", "2/10", "2/7", "1/10"],
    "answer": "Not provided"
  },
  {
    "q": "An event is a subset of?",
    "options": ["sample space", "Experiment"],
    "answer": "Not provided"
  },
  {
    "q": "If X and Y are independent random variables and a and b are constants, then Var(aX+bY)is equal to",
    "options": ["(a+b)[Var(X)+ Var(Y)]", "a^2 Var(X)+ b^2 Var(Y)", "aVar(X)+ bVar(Y)", "Var(aX)+ Var(bY)"],
    "answer": "Not provided"
  },
  {
    "q": "In how many ways can a set of six letters be selected from the English Alphabets?",
    "options": ["C(14 , 6)", "C(26 , 6)", "None of these", "C(6 , 26)"],
    "answer": "Not provided"
  },
  {
    "q": "Let A and B be subsets of U with n(A) = 12, n(B) = 15, n(A')=17, and n(A intersection B) = 8, then n(U)=______ .",
    "options": ["35", "29", "20", "27"],
    "answer": "Not provided"
  },
  {
    "q": "If the standard deviation of the data set is 4 then the value of the variance is ……………….",
    "options": ["8", "2", "4", "16"],
    "answer": "Not provided"
  },
  {
    "q": "If a pair of dice is tossed how many outcomes the sample space  of the experiment will have?",
    "options": ["12", "18", "36", "6"],
    "answer": "Not provided"
  },
  {
    "q": "Let X = {1, 2, a, b}. Then 3-combinations of the 4 elements of the set X are _______ ?",
    "options": ["{1, 2, a}, {a, 2, 1},{b, 1, a} and {1, 2, b}", "{1, 2, a}, {1, 2, b}, {1, a, b} and {2, a, b}", "{1, 2, a}, {a, 2, 1}, {1, a, b}, and {b, a, 1}", "{1, b, a}, {a, b, 2},{b, 1, a} and {1, 2, b}"],
    "answer": "Not provided"
  },
  {
    "q": "C(n,0)=……………..",
    "options": ["C(n,n)", "Both b and c", "n", "1"],
    "answer": "Not provided"
  },
  {
    "q": "Conditional probability of B given A is defined as ……………….",
    "options": ["None of these", "$P(A \\cap B)$", "$\\frac{{P(A \\cap B)}}{{P(A)}}$", "$\\frac{{P(A \\cap B)}}{{P(B)}}$"],
    "answer": "Not provided"
  },
  {
    "q": "When a dice and a coin are tossed together, then which of the following is the sample space?",
    "options": ["{1H, 2H, 3H, 4H, 5H, 6H, 1T, 2T, 3T, 4T, 5T, 6T}", "{H, T}", "{1, 2, 3, 4, 5, 6}", "{1H, 2H, 3H, 4T, 5T, 6T}"],
    "answer": "Not provided"
  },
  {
    "q": "If A and B are disjoint finite sets then $$n(A \\cup \\,B) = \\_\\_\\_\\_\\_\\_.$$",
    "options": ["$$n(A) + n(B) - n(A \\cap \\,B)$$", "$$n(A) - n(B)$$", "$$n(A) + n(B)$$", "$$n(A) + n(B) + n(A \\cap \\,B)$$"],
    "answer": "Not provided"
  },
  {
    "q": "A random variable is also called a Stochastic variable",
    "options": ["True", "False"],
    "answer": "Not provided"
  },
  {
    "q": "Let X = {1, 2, 3}, then 2-combinations of the 3 elements of the set X are _______ ?",
    "options": ["{1, 2}, {2, 1}, {1, 3}, {3, 1}, {2, 3}, and {3, 2}", "{1, 2}, {2, 1},{1, 3} and {3, 1}", "{1, 2}, {2, 1}, {1, 3} and {2, 3}", "{1, 2}, {1, 3} and {2, 3}"],
    "answer": "Not provided"
  },
  {
    "q": "If A is a subset of B then $$P(A|B) = \\frac{{P(A)}}{{P(B)}}$$ .",
    "options": ["False", "True"],
    "answer": "Not provided"
  },
  {
    "q": "Which of the followings is the probability of getting a 6 when a dice is tossed ?",
    "options": ["1/6", "0", "1/3", "1"],
    "answer": "Not provided"
  },
  {
    "q": "-------  is a procedure that yields a given set of possible outcomes?",
    "options": ["Experiment", "Sample space", "Event", "None"],
    "answer": "Not provided"
  },
  {
    "q": "The number of the words that can be formed from the letters of the word,“COMMITTEE” are",
    "options": ["P(9, 9)", "${9! \\over 2!2!2!}$", "C(9, 9)", "${9! \\over 2!2!3!}$"],
    "answer": "Not provided"
  },
  {
    "q": "Who gave the first definition of the probability as the number of successful outcomes divided by the number of total outcomes?",
    "options": ["Blaise Pascal", "none", "Laplace", "Leonhard Euler"],
    "answer": "Not provided"
  },
  {
    "q": "What is the probability of the number of one head when two fair coins are tossed?",
    "options": ["2/4", "1/4"],
    "answer": "Not provided"
  },
  {
    "q": "Let A and B be the mutually exclusive events such that P(A) = 1/5  and P(B) = 3/5, then  P(A U B) = ?",
    "options": ["1/5", "4/5", "2/5", "3/5"],
    "answer": "Not provided"
  },
  {
    "q": "P(A)= 1/6 and P(B)= 3/6, then the probability of happening of both events A and B will be?",
    "options": ["4/6", "8/6", "5/6", "7/6"],
    "answer": "Not provided"
  },
  {
    "q": "$P(A'|B) = 1 - P(A|B)$",
    "options": ["False", "True"],
    "answer": "Not provided"
  },
  {
    "q": "If B is a subset of A then $$P(A|B) = 1$$ .",
    "options": ["Flase", "True"],
    "answer": "Not provided"
  },
  {
    "q": "Among 20 people, 15 either swim or jog or both. If 5 swim and 6 swim and jog, how many jog ?",
    "options": ["46", "16", "24", "6"],
    "answer": "Not provided"
  },
  {
    "q": "An urn contains six red and nine blue balls. What is the probability that a ball chosen from the urn is blue?",
    "options": ["9/15", "15/9", "15/6", "6/15"],
    "answer": "Not provided"
  },
  {
    "q": "There are 5 girls students and 20 boys students in a class. How many students are there in total ?",
    "options": ["25", "15", "4", "100"],
    "answer": "Not provided"
  },
  {
    "q": "Suppose that A and B are events in a sample space S. If A and B are disjoint, could P(A)=0.6 and P(B)=0.5?",
    "options": ["No", "Yes"],
    "answer": "Not provided"
  },
  {
    "q": "[Math Processing Error]$P(A|B) = \\frac{{P(A \\cap B)}}{{P(B)}},\\,\\,\\,\\,\\,where\\,\\,.............$",
    "options": ["[Math Processing Error]$P(B) > 0$", "[Math Processing Error]$P(B) < 0$", "[Math Processing Error]$P(B) > 1$", "[Math Processing Error]$P(B) = 0$"],
    "answer": "Not provided"
  },
  {
    "q": "If A is a subset of B then [Math Processing Error]$$P(A|B) = \\frac{{P(A)}}{{P(B)}}$$ .",
    "options": ["False", "True"],
    "answer": "Not provided"
  },
  {
    "q": "If one event can occur in {n_1} ways, a second event can occur in {n_2} ways, a third event can occur in {n_3} ways, how ways all of the events can occur in the order? ",
    "options": ["{n_1} + {n_2} + {n_3}", "{n_1}.{n_2}.{n_3}"],
    "answer": "Not provided"
  },
  {
    "q": "If one event can occur in {n_1} ways, a second event can occur in {n_2} ways, a third event can occur in {n_3} ways, how ways in which exactly one of the events can occur?",
    "options": ["{n_1}.{n_2}.{n_3}", "{n_1} + {n_2} + {n_3}"],
    "answer": "Not provided"
  },
  {
    "q": "If A and B are finite sets then \\[n(A \\cup \\,B) = \\_\\_\\_\\_\\_\\_.\\]",
    "options": ["\\[n(A) + n(B) - n(A \\cap \\,B)\\]", "\\[n(A) + n(B) + n(A \\cap \\,B)\\]", "\\[n(A) + n(B)\\]", "\\[n(A) + n(B) - n(A \\cup \\,B)\\]"],
    "answer": "Not provided"
  },
  {
    "q": "There are three bus lines between A and B, and two bus lines between B and C. Find the number of ways a person can travel round trip by bus from A to C by way of B ?",
    "options": ["36", "6", "5", "10"],
    "answer": "Not provided"
  },
  {
    "q": "If there are 5 different optional courses in English and 3 different optional courses in Maths. Choices for a student who wants to take one optional course _____?",
    "options": ["7", "9", "8", "5"],
    "answer": "Not provided"
  },
  {
    "q": "A student can choose a computer project from one of the two lists. The two lists contain 12 and 18 possible projects, respectively. How many possible projects are there to choose from ?",
    "options": ["30", "18", "216", "12"],
    "answer": "Not provided"
  },
  {
    "q": "The last step of describing algorithms formally is?",
    "options": ["An end statement.", "The output variable names.", "The input variable names.", "The name of the algorithm."],
    "answer": "Not provided"
  },
    {
        "q": "An arrangement of objects without the consideration of order is called",
        "options": [
            "A. Permutation",
            "B. Combination",
            "C. Selection",
            "D. None of these"
        ],
        "answer": "B. Combination"
    },
    {
        "q": "A procedure that yields a given set of possible outcomes is called",
        "options": [
            "A. Event",
            "B. Outcome",
            "C. Experiment"
        ],
        "answer": "C. Experiment"
    },
    {
        "q": "Any two spanning trees for a graph",
        "options": [
            "A. Does not contain same number of edges",
            "B. Have the same degree of corresponding edges",
            "C. contain same number of edges",
            "D. May or may not contain same number of edges"
        ],
        "answer": "C. contain same number of edges"
    },
    {
        "q": "Rephrase the following statement in bi-conditional form: 'If you get up early in the morning, you will be healthy'",
        "options": [
            "A. You will be healthy if and only if you get up early in the morning",
            "B. If you will be healthy then you will get up early in the morning",
            "C. None of these"
        ],
        "answer": "A. You will be healthy if and only if you get up early in the morning"
    },
    {
        "q": "The indirect proof of a statement p → q involves",
        "options": [
            "A. Considering q and then try to reach p",
            "B. Considering p and ~q are true and try to reach contradiction",
            "C. Considering p and then try to reach q",
            "D. Considering ~p and then try to reach q"
        ],
        "answer": "B. Considering p and ~q are true and try to reach contradiction"
    },
    {
        "q": "What is the contra positive of the given statement: 'If square root of every prime number is irrational then square root of 2 is irrational.'",
        "options": [
            "A. If square root of 2 is not irrational then square root of every prime number is not irrational.",
            "B. If square root of 2 is irrational then square root of every prime number is not irrational.",
            "C. If square root of 2 is not irrational then square root of every prime number is irrational.",
            "D. If square root of every prime number is not irrational then square root of 2 is not irrational."
        ],
        "answer": "A. If square root of 2 is not irrational then square root of every prime number is not irrational."
    },
    {
        "q": "Which of the following law is used to show: p ↔ q ≡ q ↔ p",
        "options": [
            "A. Implication Law",
            "B. Commutative law",
            "C. Exportation Law",
            "D. None of these"
        ],
        "answer": "B. Commutative law"
    },
    {
        "q": "If p = It is red, q = It is hot. Then 'It is not red but hot' is denoted by p ∧ ~q.",
        "options": [
            "A. True",
            "B. False"
        ],
        "answer": "B. False"
    },
    {
        "q": "A circuit with two input signals and one output signal is called",
        "options": [
            "A. NOT-gate (or inverter)",
            "B. AND-gate",
            "C. None of these"
        ],
        "answer": "B. AND-gate"
    },
    {
        "q": "The direct proof of a statement p → q involves",
        "options": [
            "A. considering q and then try to reach p",
            "B. considering p and then try to reach q",
            "C. considering p and ~q and try to reach contradiction",
            "D. None of these"
        ],
        "answer": "B. considering p and then try to reach q"
    },
    {
        "q": "The contradiction proof of a statement p → q involves",
        "options": [
            "A. Considering p and then try to reach q",
            "B. Considering ~q and then try to reach ~p",
            "C. Considering p and ~q are true and try to reach contradiction",
            "D. None of these"
        ],
        "answer": "C. Considering p and ~q are true and try to reach contradiction"
    },
    {
        "q": "The list of the degrees of the vertices of a graph in non-increasing order is called",
        "options": [
            "A. Isomorphic Invariant",
            "B. Degree Sequence",
            "C. Order of Graph",
            "D. Length of Circuit"
        ],
        "answer": "B. Degree Sequence"
    },
    {
        "q": "A vertex of degree 1 in a tree is called",
        "options": [
            "A. Terminal vertex",
            "B. Internal vertex"
        ],
        "answer": "A. Terminal vertex"
    },
    {
        "q": "Complete graph is planar if",
        "options": [
            "A. n = 4",
            "B. n > 4",
            "C. n ≤ 4"
        ],
        "answer": "C. n ≤ 4"
    },
    {
        "q": "The logical expression p ∨ q will be read as",
        "options": [
            "A. p or q",
            "B. p and q",
            "C. p × q",
            "D. p - q"
        ],
        "answer": "A. p or q"
    },
    {
        "q": "How many ways are there to select a first prize winner, a second prize winner and a third prize winner from 100 different people who have entered in a contest.",
        "options": [
            "A. P(97,3)",
            "B. P(100,3)",
            "C. P(100,97)",
            "D. None of these"
        ],
        "answer": "B. P(100,3)"
    },
    {
        "q": "The value of (n+1)!/(n-1)! is",
        "options": [
            "A. 0",
            "B. n(n-1)",
            "C. n² + n",
            "D. can not be determined"
        ],
        "answer": "C. n² + n"
    },
    {
        "q": "To find the number of unordered partitions, we have to count the ... partitions and then divide it by suitable number to erase the order in partitions.",
        "options": [
            "A. unordered",
            "B. ordered",
            "C. random",
            "D. None of these"
        ],
        "answer": "B. ordered"
    },
    {
        "q": "The same element can never appear ... in a set.",
        "options": [
            "A. twice",
            "B. once",
            "C. thrice"
        ],
        "answer": "A. twice"
    },



   
    
 

     ],
      subjective: [
        { q: 'Let A = {1,2,3} and B = {a,b}. (i) List all elements of A×B. (ii) Define a relation R from A to B. (iii) Find the domain and range of R. (iv) Is R a function? Explain.', marks: 8 },
        { q: 'Prove by induction that 1 + 2 + 3 + ... + n = n(n+1)/2 for all positive integers n.', marks: 7 },
        { q: 'A sequence is defined by: a₁ = 2, aₙ = 3aₙ₋₁ + 1 for n ≥ 2. Find a₂, a₃, a₄, a₅. Find the sum of the first 5 terms.', marks: 7 },
        { q: 'Determine whether R = {(1,1),(2,2),(3,3),(1,2),(2,3),(1,3)} on A = {1,2,3} is: (i) Reflexive (ii) Symmetric (iii) Transitive (iv) An equivalence relation? Justify each answer.', marks: 8 },
      ],
    },
  },

  // ──────────────────────────────────
  //  PHY101 — Physics
  // ──────────────────────────────────
  PHY101: {
    mid: {
      title: 'PHY101 — Mid Term Examination',
      totalMarks: 40,
      mcqMarks: 1,
      mcqs: [
        { q: 'Physics is often called:', options: ['A. King of science', 'B. Mother of science', 'C. Queen of science', 'D. Branch of math'], answer: 'C. Queen of science' },
        { q: 'Fundamental dimensions are:', options: ['A. Time, Speed, Force', 'B. Length, Width, Height', 'C. Time, Length, Mass', 'D. Energy, Work, Power'], answer: 'C. Time, Length, Mass' },
        { q: 'Dimension of speed is:', options: ['A. L/T', 'B. LT', 'C. T/L', 'D. L²'], answer: 'A. L/T' },
        { q: 'Newton\'s First Law is also called the law of:', options: ['A. Acceleration', 'B. Action-Reaction', 'C. Inertia', 'D. Gravity'], answer: 'C. Inertia' },
        { q: 'Newton\'s Second Law states F_net =:', options: ['A. m/v', 'B. m·a', 'C. m·g', 'D. a/m'], answer: 'B. m·a' },
        { q: 'The SI unit of force is:', options: ['A. Joule', 'B. Watt', 'C. Newton', 'D. Pascal'], answer: 'C. Newton' },
        { q: 'Weight of a 10 kg object on Earth (g=9.8 m/s²) is:', options: ['A. 10 N', 'B. 98 N', 'C. 9.8 N', 'D. 0.98 N'], answer: 'B. 98 N' },
        { q: 'Newton\'s Third Law states that action and reaction forces:', options: ['A. Act on the same body', 'B. Cancel each other', 'C. Act on different bodies', 'D. Are in the same direction'], answer: 'C. Act on different bodies' },
        { q: 'Kinetic friction formula is:', options: ['A. fₖ = μₛ N', 'B. fₖ = μₖ N', 'C. fₖ = μₖ mg²', 'D. fₖ = μₛ mg²'], answer: 'B. fₖ = μₖ N' },
        { q: 'The angle of repose is given by:', options: ['A. α = tan⁻¹(μₖ)', 'B. α = sin⁻¹(μₛ)', 'C. α = tan⁻¹(μₛ)', 'D. α = cos⁻¹(μₛ)'], answer: 'C. α = tan⁻¹(μₛ)' },
        { q: 'Work done is defined as:', options: ['A. Force × time', 'B. Force × displacement × cosθ', 'C. Mass × acceleration', 'D. Force / displacement'], answer: 'B. Force × displacement × cosθ' },
        { q: 'Kinetic energy is given by:', options: ['A. mv', 'B. ½mv²', 'C. mgh', 'D. ½kx²'], answer: 'B. ½mv²' },
        { q: 'The work-energy principle states:', options: ['A. Work = force × distance', 'B. Net work = change in kinetic energy', 'C. Energy cannot be created', 'D. Power = work/time'], answer: 'B. Net work = change in kinetic energy' },
        { q: 'For an object in free fall, the acceleration due to gravity is approximately:', options: ['A. 8.9 m/s²', 'B. 9.8 m/s²', 'C. 10.8 m/s²', 'D. 11 m/s²'], answer: 'B. 9.8 m/s²' },
        { q: 'Momentum is defined as:', options: ['A. mass × acceleration', 'B. mass × velocity', 'C. force × time', 'D. work / time'], answer: 'B. mass × velocity' },
        { q: 'The angle for maximum range of a projectile is:', options: ['A. 30°', 'B. 45°', 'C. 60°', 'D. 90°'], answer: 'B. 45°' },
        { q: 'Elastic potential energy stored in a spring is:', options: ['A. mgh', 'B. ½mv²', 'C. ½kx²', 'D. kx'], answer: 'C. ½kx²' },
        { q: 'Conservation of linear momentum holds when:', options: ['A. Velocity is constant', 'B. Net external force is zero', 'C. Kinetic energy is constant', 'D. Only during elastic collisions'], answer: 'B. Net external force is zero' },
        { q: 'For an Atwood machine (masses m₁ and m₂, m₂ > m₁), acceleration is:', options: ['A. (m₁+m₂)g/(m₁−m₂)', 'B. (m₂−m₁)g/(m₁+m₂)', 'C. (m₁−m₂)g', 'D. g/2'], answer: 'B. (m₂−m₁)g/(m₁+m₂)' },
        { q: 'Terminal velocity occurs when:', options: ['A. Weight becomes zero', 'B. Drag force equals weight', 'C. Acceleration is maximum', 'D. Velocity is zero'], answer: 'B. Drag force equals weight' },
      ],
      subjective: [
        { q: 'A car of mass 1200 kg accelerates from rest to 20 m/s in 8 seconds. (a) Find the acceleration. (b) Find the net force on the car. (c) If the coefficient of friction is 0.15, find the friction force and the applied engine force. (g = 9.8 m/s²)', marks: 5 },
        { q: 'A projectile is launched with initial speed 50 m/s at an angle of 30° above the horizontal. Find: (a) maximum height, (b) time of flight, (c) horizontal range. (g = 9.8 m/s²)', marks: 5 },
        { q: 'A spring with k = 500 N/m is compressed by 0.2 m. (a) Find the elastic potential energy stored. (b) When released, this energy converts to kinetic energy of a 0.5 kg block. Find the maximum speed of the block.', marks: 5 },
        { q: 'A 0.5 kg ball moving at 6 m/s collides elastically with a stationary 1.5 kg ball. Find the final velocities of both balls after the collision. Show all working.', marks: 5 },
      ],
    },
    final: {
      title: 'PHY101 — Final Term Examination',
      totalMarks: 60,
      mcqMarks: 1,
      mcqs: [


        {
        "q": "The wavelength of red light is 700 nm. Its frequency is",
        "options": [
            "A. 4.29*10^13 Hertz",
            "B. 4.29*10^15 Hertz",
            "C. 4.29*10^12 Hertz",
            "D. 4.29*10^14 Hertz"
        ],
        "answer": "D. 4.29*10^14 Hertz"
    },
    {
        "q": "If a charged particle moves at an angle of 60 degrees to the magnetic field, what is the angle between the resulting force and the direction of motion?",
        "options": [
            "A. 90 degrees",
            "B. 30 degrees",
            "C. 0 degrees",
            "D. 60 degrees"
        ],
        "answer": "A. 90 degrees"
    },
    {
        "q": "Electromagnetic waves do not transport:",
        "options": [
            "A. Momentum",
            "B. Information",
            "C. Charge",
            "D. Energy"
        ],
        "answer": "C. Charge"
    },
    {
        "q": "The amplitude modulation frequency ranges from:",
        "options": [
            "A. 540 kHz to 1400 kHz",
            "B. 540 kHz to 1600 kHz",
            "C. 540 kHz to 1000 kHz",
            "D. 520 kHz to 1600 kHz"
        ],
        "answer": "B. 540 kHz to 1600 kHz"
    },
    {
        "q": "When we accelerate the charge, which types of waves are produced?",
        "options": [
            "A. Electromagnetic waves",
            "B. Travelling waves",
            "C. Stationary waves",
            "D. Mechanical waves"
        ],
        "answer": "A. Electromagnetic waves"
    },
    {
        "q": "Which of the following types of electromagnetic radiation travels at the greatest speed in vacuum?",
        "options": [
            "A. Gamma rays",
            "B. X rays",
            "C. Radio waves",
            "D. All of these travel at the same speed"
        ],
        "answer": "D. All of these travel at the same speed"
    },
    {
        "q": "Work done between two points on equipotential surface is",
        "options": [
            "A. Maximum",
            "B. Infinite",
            "C. Negative",
            "D. Zero"
        ],
        "answer": "D. Zero"
    },
    {
        "q": "The reaction of an induction at 50 Hz is 10 Ω, its reactance at 100 Hz becomes",
        "options": [
            "A. 5 Ω",
            "B. 20 Ω",
            "C. 2.5 Ω",
            "D. 1 Ω"
        ],
        "answer": "B. 20 Ω"
    },
    {
        "q": "Under what condition is induced electromotive force (EMF) produced in a conductor?",
        "options": [
            "A. When there is a strong electric field",
            "B. When there is a strong magnetic field",
            "C. When there is a constant magnetic field",
            "D. When there is a time-varying magnetic field"
        ],
        "answer": "D. When there is a time-varying magnetic field"
    },
    {
        "q": "In a parallel circuit with resistors R1 and R2, if R1 is much greater than R2, compare to the voltage across R1?",
        "options": [
            "A. Voltage across R2 is much greater",
            "B. Voltage across R1 is much greater",
            "C. Voltage across both resistors is the same",
            "D. Voltages can not be determined"
        ],
        "answer": "C. Voltage across both resistors is the same"
    },

 {
        "q": "The wavelength of red light is 700 nm. Its frequency is",
        "options": [
            "A. 4.29*10^13 Hertz",
            "B. 4.29*10^15 Hertz",
            "C. 4.29*10^12 Hertz",
            "D. 4.29*10^14 Hertz"
        ],
        "answer": "D. 4.29*10^14 Hertz"
    },
    {
        "q": "If a charged particle moves at an angle of 60 degrees to the magnetic field, what is the angle between the resulting force and the direction of motion?",
        "options": [
            "A. 90 degrees",
            "B. 30 degrees",
            "C. 0 degrees",
            "D. 60 degrees"
        ],
        "answer": "A. 90 degrees"
    },

  {
    "q": "In an electrical circuit with constant resistance, if the voltage source is doubled, what happens to the power delivered to the circuit?",
    "options": [
      "The power is quadrupled.",
      "The power is halved.",
      "The power is doubled.",
      "The power remains the same."
    ],
    "answer": "Not provided"
  },
  {
    "q": "Kirchhoff’s 2nd rule is the manifestation of the law of conservation of:",
    "options": [
      "Mass",
      "Charge",
      "Energy",
      "Momentum"
    ],
    "answer": "Not provided"
  },
  {
    "q": "What is the relationship between the electric field and charges on a perfect electric conductor's surface?",
    "options": [
      "Electric field is always zero",
      "Electric field is discontinuous and inversely proportional to charge density",
      "Electric field is proportional to charge density",
      "Electric field is normal to the surface and proportional to charge density"
    ],
    "answer": "Not provided"
  },
  {
    "q": "In a parallel circuit with resistors R1​ and R2​, if R1​ is much greater than R2​, what is the approximate total resistance (RT)?",
    "options": [
      "RT​ ≈ R1​ · R2​",
      "RT​ ≈ R2​",
      "RT ≈ R1​ + R2​",
      "RT​ ≈ R1​"
    ],
    "answer": "Not provided"
  },
  {
    "q": "When are eddy currents typically induced in a conductor?",
    "options": [
      "In the presence of a constant magnetic field",
      "When there is no magnetic field",
      "When exposed to a changing magnetic field",
      "In the presence of a strong magnetic field"
    ],
    "answer": "Not provided"
  },
  {
    "q": "In a parallel circuit with resistors R1​ and R2​, if R1​ is much greater than R2​, how does the current flowing through R2​ compare to the current flowing through R1​?",
    "options": [
      "Currents are equal",
      "Currents cannot be compared",
      "Current through R1​ is much greater",
      "Current through R2​ is much greater"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Which physical quantity is produced by a calculation where a charge is multiplied by a potential difference (p.d)?",
    "options": [
      "Energy",
      "e.m.f",
      "Current",
      "Power"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Which statement about equipotential surfaces is correct?",
    "options": [
      "They have varying electric potential",
      "They are surfaces with constant electric field",
      "All points on them have the same electric potential",
      "They are always spherical"
    ],
    "answer": "Not provided"
  },
  {
    "q": "What is the unit of electric potential?",
    "options": [
      "Newton/Meter",
      "Joule/Coulomb",
      "Joule/Meter",
      "Volt/Coulomb"
    ],
    "answer": "Not provided"
  },
  {
    "q": "When a dielectric material is introduced between the plates of a capacitor, what does effect it have on the capacitance?",
    "options": [
      "Decreases",
      "Depends on the dielectric constant",
      "Remains the same",
      "Increases"
    ],
    "answer": "Not provided"
  },
  {
    "q": "What is the expression for electric potential due to an electric dipole at a point on the axis at distance r?",
    "options": [
      "𝑽 = 𝒒d/(4𝝅ε₀r²)",
      "𝑽 = 𝒒/(4𝝅ε₀r²)",
      "𝑽 = 𝒒/(4𝝅ε₀r)",
      "𝑽 = 𝒒d/(4𝝅ε₀r)"
    ],
    "answer": "Not provided"
  },
  {
    "q": "How does the electric potential V due to an electric dipole behave along its equatorial line at a distance \"r\"?",
    "options": [
      "𝑉 ∝ 1/r",
      "𝑉 is constant",
      "𝑉 ∝ r",
      "𝑉 = 0"
    ],
    "answer": "Not provided"
  },
  {
    "q": "If two capacitors, each with a capacitance of 100 microfarads, are connected in parallel, what is the total capacitance?",
    "options": [
      "50 microfarads",
      "150 microfarads",
      "100 microfarads",
      "200 microfarads"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Which of the following is not a conservative force?",
    "options": [
      "Drag force",
      "Gravitational force",
      "Electric force",
      "None of these"
    ],
    "answer": "Not provided"
  },
  {
    "q": "A charge of 30 C flows through an electric appliance in 2.0 minutes. What is the average current in the appliance?",
    "options": [
      "0.25 A",
      "4.0 A",
      "60 A",
      "15 A"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Which one of is in the order of decreasing frequency?",
    "options": [
      "Infrared rays, visible light, x – rays",
      "X – rays, radio waves, infrared rays",
      "Yellow, green, red",
      "Ultraviolet rays, visible light, radio waves"
    ],
    "answer": "Not provided"
  },
  {
    "q": "What is an equipotential surface?",
    "options": [
      "surface with no electric field",
      "surface with constant electric field",
      "surface where all points have the same electric potential",
      "surface with varying electric potential"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Tesla is a unit of",
    "options": [
      "Flux density",
      "Magnetic flux",
      "Mutual inductance",
      "Self-inductance"
    ],
    "answer": "Not provided"
  },
  {
    "q": "When the angle θ is 60°, how does the magnetic flux compare to its maximum value?",
    "options": [
      "Magnetic flux is zero.",
      "Magnetic flux is half of the maximum.",
      "Magnetic flux is maximized.",
      "Magnetic flux is unchanged."
    ],
    "answer": "Not provided"
  },
  {
    "q": "The concept of an electric field lines is introduced by:",
    "options": [
      "Faraday",
      "Joseph Henry",
      "Coulomb",
      "Einstein"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Electric flux is maximum when surface area vector is _______ to field lines.",
    "options": [
      "Parallel",
      "Antiparallel",
      "45o",
      "Perpendicular"
    ],
    "answer": "Not provided"
  },
  {
    "q": "What is the charge density for a volume charge distribution?",
    "options": [
      "dq = ρdV",
      "dq = σdV",
      "dq = dA",
      "dq = λds"
    ],
    "answer": "Not provided"
  },
  {
    "q": "What are the units of current density in the International System of Units (SI)?",
    "options": [
      "Amperes per meter (A/m)",
      "Amperes (A)",
      "Amperes per meter squared (A/m2)",
      "Amperes per meter cubed (A/m3)"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Typical values for the magnitude of the electric field inside the wire:",
    "options": [
      "10-5 N/C",
      "10 -2 N/C",
      "10-4N/C",
      "10 -3N/C"
    ],
    "answer": "Not provided"
  },
  {
    "q": "If the magnetic field lines are parallel to the surface, what is the value of the magnetic flux?",
    "options": [
      "Magnetic flux is zero.",
      "Magnetic flux is constant.",
      "Magnetic flux is maximized.",
      "Magnetic flux is negative."
    ],
    "answer": "Not provided"
  },
  {
    "q": "What happens to the total capacitance when capacitors are connected in series?",
    "options": [
      "It becomes infinite",
      "It increases",
      "It remains the same",
      "It decreases"
    ],
    "answer": "Not provided"
  },
  {
    "q": "In a transformer, the number of turns in the primary and secondary coil is 40 and 120, respectively. If the current in the primary coil is 6 A, the current in the secondary coil is:",
    "options": [
      "0.2 A",
      "2 A",
      "1.8 A",
      "18 A"
    ],
    "answer": "Not provided"
  },
  {
    "q": "What does the electric potential due to a dipole depend on?",
    "options": [
      "Angle between the dipole moment and the field point",
      "Distance from the center of the dipole",
      "Magnitude of charges in the dipole",
      "Both distance and angle"
    ],
    "answer": "Not provided"
  },
  {
    "q": "A generator supplies 100V to the primary coil of a transformer. The primary has 50 turns and the secondary has 500 turns. The secondary voltage is:",
    "options": [
      "1000V",
      "100V",
      "250V",
      "500V"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Electromagnetic waves do not transport:",
    "options": [
      "Charge",
      "Energy",
      "Information",
      "Momentum"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Electric field inside a conductor is",
    "options": [
      "Maximum",
      "q / εo",
      "Infinite",
      "Zero"
    ],
    "answer": "Not provided"
  },
  {
    "q": "What is a Gaussian surface in the context of Gauss's Law?",
    "options": [
      "surface with constant electric field",
      "surface with nonzero electric flux",
      "Any closed surface in space",
      "An imaginary surface used to apply Gauss's Law"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Along the axial line of an electric dipole, how does the electric field vary with distance \"r\" from the center of the dipole?",
    "options": [
      "E ∝ r",
      "E ∝ 1/r²",
      "E ∝ 1/r³",
      "E ∝ 1/r"
    ],
    "answer": "Not provided"
  },
  {
    "q": "In a parallel circuit with resistors R1​ and R2​, if R1​ is much greater than R2​, how does the voltage across R2​ compare to the voltage across R1​?",
    "options": [
      "Voltage across R1​ is much greater",
      "Voltage across R2​ is much greater",
      "Voltage across both resistors is the same",
      "Voltages can not be determined"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Which of the following is equivalent to one coulomb?",
    "options": [
      "one volt per ampere",
      "One volt second",
      "One volt ampere",
      "One ampere second"
    ],
    "answer": "Not provided"
  },
  {
    "q": "A particle carrying a charge of 2e falls through potential difference of 3V. the energy acquired by it will be:",
    "options": [
      "3 eV",
      "1.5 eV",
      "6 eV",
      "0.66 eV"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Which of the following types of electromagnetic radiation travels at the greatest speed in vacuum?",
    "options": [
      "All of these travel at the same speed",
      "Radio waves",
      "Gamma rays",
      "X rays"
    ],
    "answer": "Not provided"
  },
  {
    "q": "A step-down transformer is used to:",
    "options": [
      "increase the voltage",
      "decrease the voltage",
      "decrease the power",
      "increase the power"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Kirchhoff’s first rule is the manifestation of the law of conservation of:",
    "options": [
      "Charge",
      "Energy",
      "Momentum",
      "Mass"
    ],
    "answer": "Not provided"
  },
  {
    "q": "As per Coulomb's law, the force of attraction or repulsion between two point charges directly proportional to the",
    "options": [
      "square of the distance between them",
      "sum of the magnitude of charges",
      "product of the magnitude of charges",
      "cube of the distance"
    ],
    "answer": "Not provided"
  },
  {
    "q": "What does effect polarization have on the dipole moment in a dielectric material?",
    "options": [
      "Dipole moment remains constant",
      "Dipole moment increases",
      "Dipole moment decreases",
      "Dipole moment becomes zero"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Which field(s) are involved in the Lorentz force acting on charged particles in a velocity selector?",
    "options": [
      "Electric and magnetic fields",
      "Gravitational field only",
      "Electric field only",
      "Magnetic field only"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Force per unit charge is:",
    "options": [
      "Lorentz force",
      "Electric Flux",
      "Electric potential",
      "Electric field intensity"
    ],
    "answer": "Not provided"
  },
  {
    "q": "How does the total current behave when it is divided between two resistors in an electrical circuit?",
    "options": [
      "Becomes zero",
      "Remains constant",
      "Increases",
      "Decreases"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Maxwell’s second equation is expressed as __________:",
    "options": [
      "▽×B = 1",
      "▽⋅B = 1",
      "▽×B = 0",
      "▽⋅B = 0"
    ],
    "answer": "Not provided"
  },
  {
    "q": "According to faraday's law, the e.m.f. induced in the coil with N turns and magnetic flux ‘φ’ is:",
    "options": [
      "ɛ = -N2 dφ/dt",
      "ɛ = -N dt2/ d2φ",
      "ɛ = -N d2φ/dt2",
      "ɛ = -N dφ/dt"
    ],
    "answer": "Not provided"
  },
  {
    "q": "The waves used by artificial satellites for communication is:",
    "options": [
      "Infrared waves",
      "Radio waves",
      "X-rays",
      "Microwaves"
    ],
    "answer": "Not provided"
  },
  {
    "q": "The formula for the energy density (u) in a capacitor, with electric field (E) is:",
    "options": [
      "u = 0.5ε₀E²",
      "u = E/ε₀",
      "u = 0.5E/ε₀",
      "u = ε₀E²"
    ],
    "answer": "Not provided"
  },
  {
    "q": "If Io is the peak value of an AC supply, then its rms value is given as Irms:",
    "options": [
      "Io/2",
      "√2  Io",
      "Io/0.707",
      "Io/√2"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Select the correct statement:",
    "options": [
      "Blue light has a higher frequency than x rays",
      "Radio waves have higher frequency than gamma rays",
      "Ultraviolet light has a longer wavelength than infrared",
      "Gamma rays have higher frequency than infrared waves"
    ],
    "answer": "Not provided"
  },
  {
    "q": "In US the electricity standards are:",
    "options": [
      "120 Volts and 60 Hertz",
      "120 Volts and 50 Hertz",
      "100 Volts and 50 Hertz",
      "230 Volts and 50 Hertz"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Which of the following have the greatest wavelength?",
    "options": [
      "Ultraviolet",
      "Radio waves",
      "Gamma rays",
      "Infrared"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Which of the following is usually taken to make the core of a transformer?",
    "options": [
      "Hard iron",
      "Copper",
      "Aluminum",
      "Soft iron"
    ],
    "answer": "Not provided"
  },
  {
    "q": "In a vacuum, the conduction current is __________:",
    "options": [
      "Infinity",
      "Undetermined",
      "Zero",
      "Unity"
    ],
    "answer": "Not provided"
  },
  {
    "q": "We desire to make an LC circuit that oscillates at 100 Hz using an inductance of 2.5H. We also need a capacitance of:",
    "options": [
      "1 F",
      "100μF",
      "1μF",
      "1mF"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Potentiometer can be used as",
    "options": [
      "Galvanometer",
      "Potential divider",
      "Ammeter",
      "Ohm meter"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Inductive reactance XL of an inductor is:",
    "options": [
      "2πfL",
      "πfL",
      "4πfL",
      "2πL"
    ],
    "answer": "Not provided"
  },
  {
    "q": "The graphical representation of Ohm’s law is:",
    "options": [
      "Hyperbola",
      "Straight line",
      "Parabola",
      "Ellipse"
    ],
    "answer": "Not provided"
  },
  {
    "q": "A transformer is employed to:",
    "options": [
      "Obtain a suitable D.C. voltage.",
      "Convert A.C. into D.C.",
      "Obtain a suitable A.C. voltage.",
      "Convert D.C. into A.C."
    ],
    "answer": "Not provided"
  },
  {
    "q": "In the context of capacitors, how is energy related to the electric field strength?",
    "options": [
      "Energy is directly proportional to the electric field strength",
      "Energy is unrelated to the electric field strength",
      "Energy is inversely proportional to the electric field strength",
      "Energy is proportional to the square of the electric field strength"
    ],
    "answer": "Not provided"
  },
  {
    "q": "If potential difference across two plates of a capacitor is doubled, then energy stored in it will be:",
    "options": [
      "Four times",
      "Two times",
      "Eight times",
      "Remains same"
    ],
    "answer": "Not provided"
  },
  {
    "q": "The primary of a 3:1 step-up transformer is connected to a source and the secondary is connected to a resistor R. The power dissipated by R in this situation is P. If R is connected directly to the source it will dissipate a power of:",
    "options": [
      "P",
      "P/3",
      "P/9",
      "3P"
    ],
    "answer": "Not provided"
  },
  {
    "q": "What does Faraday's law of electromagnetic induction state regarding induced EMF?",
    "options": [
      "The induced EMF is directly proportional to the magnetic field strength.",
      "The induced EMF is independent of the magnetic flux.",
      "The induced EMF is directly proportional to the rate of change of magnetic flux.",
      "The induced EMF is directly proportional to the magnetic flux."
    ],
    "answer": "Not provided"
  },
  {
    "q": "If velocity of a conductor moving through a magnetic field B is made zero then motional emf is:",
    "options": [
      "-v/LB",
      "-vBL",
      "Zero",
      "-BL/v"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Power of an electric generator of voltage (V) and driving current (I) through an appliance is:",
    "options": [
      "I/Q",
      "VR",
      "IR",
      "V2/R"
    ],
    "answer": "Not provided"
  },
  {
    "q": "According to Coulomb's law, as the distance between two charges increases:",
    "options": [
      "The force becomes zero",
      "The force decreases",
      "The force remains constant",
      "The force increases"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Electromagnetic waves were experimentally discovered by:",
    "options": [
      "Einstein",
      "Hertz",
      "Maxwells",
      "Ampere"
    ],
    "answer": "Not provided"
  },
  {
    "q": "The lenz’s law refers to:",
    "options": [
      "Potential difference",
      "Induced potential",
      "Motional emf",
      "Induced current"
    ],
    "answer": "Not provided"
  },
  {
    "q": "A charge Q is moving with a velocity (v) parallel to a magnetic field (B) . Force on the charge due to magnetic field is:",
    "options": [
      "Constant",
      "Maximum",
      "Minimum",
      "Zero"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Which of the following units is used to measure Electromotive Force?",
    "options": [
      "Joule",
      "Ampere",
      "Newton",
      "Volt"
    ],
    "answer": "Not provided"
  },
  {
    "q": "The amplitude modulation frequency ranges from:",
    "options": [
      "540 kHz to 1600 kHz",
      "520 kHz to 1600 kHz",
      "540 kHz to 1000 kHz",
      "540 kHz to 1400 kHz"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Why does Lenz's Law dictate that the induced current opposes the change in magnetic flux?",
    "options": [
      "To maximize magnetic flux",
      "To amplify the induced EMF",
      "To conserve energy",
      "To increase energy consumption"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Transformers are used in:",
    "options": [
      "DC circuit only",
      "Neither in DC nor in AC circuits",
      "Both DC and AC circuits",
      "AC circuits only"
    ],
    "answer": "Not provided"
  },
  {
    "q": "For a point charge, the electric field lines are always ____________ to equipotential surfaces.",
    "options": [
      "Randomly oriented",
      "Parallel",
      "Perpendicular",
      "Tangential"
    ],
    "answer": "Not provided"
  },
  {
    "q": "An LC series circuit with an inductance L and a capacitance C has an oscillation frequency f. Two inductors, each with inductance L, and two capacitors, each with capacitance C, are all wired in series and the circuit is completed. The oscillation frequency is:",
    "options": [
      "f/2",
      "2f",
      "f/4",
      "f"
    ],
    "answer": "Not provided"
  },
  {
    "q": "When some dielectric is inserted between the plates of a capacitor, then capacitance:",
    "options": [
      "Infinity",
      "Zero",
      "Increased",
      "Decreased"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Under what condition does Ohm's Law hold true?",
    "options": [
      "When the temperature is constant",
      "When the voltage is fluctuating",
      "When the circuit is open",
      "When the resistance is not constant"
    ],
    "answer": "Not provided"
  },
  {
    "q": "The increase in capacitance of a capacitor due to presence of dielectric is due to:",
    "options": [
      "Electrolysis",
      "Electric polarization",
      "Electrification",
      "Ionization"
    ],
    "answer": "Not provided"
  },
  {
    "q": "The electric potential at the center of a dipole is",
    "options": [
      "Maximum",
      "Twice of field of point charge",
      "Same as field of point charge",
      "Zero"
    ],
    "answer": "Not provided"
  },
  {
    "q": "The value of k in coulomb's law depends upon",
    "options": [
      "distance between charges",
      "magnitude of charges",
      "all of these",
      "medium between two charges"
    ],
    "answer": "Not provided"
  },
  {
    "q": "The combined effect of resistance and reactance is known as:",
    "options": [
      "Resistance",
      "Conductance",
      "Impedance",
      "Inductance"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Capacitive reactance Xc is:",
    "options": [
      "2πfC",
      "1/2πfC",
      "4πfC",
      "1/4πfC"
    ],
    "answer": "Not provided"
  },
  {
    "q": "If electric and gravitational force on an electron in a uniform electric field balance each other, then the intensity of electric field will be:",
    "options": [
      "qg/m",
      "mg/q",
      "q/mg",
      "m/qg"
    ],
    "answer": "Not provided"
  },
  {
    "q": "In a series circuit with resistors R1​ and R2​, if R1​ is much greater than R2​, what is the approximate total resistance (RT)?",
    "options": [
      "RT ≈ R1​ / R2",
      "RT​ ≈ R1",
      "RT​ ≈ R1​ · R2",
      "RT​ ≈ R2"
    ],
    "answer": "Not provided"
  },
  {
    "q": "The electric mains supply in our homes and offices is a voltage that varies like a sine function with time. Such a voltage is called ___ and the current driven by it in a circuit is called ____.",
    "options": [
      "AC voltage, DC current",
      "AC voltage, DC voltage",
      "AC voltage, AC current",
      "DC voltage, AC current"
    ],
    "answer": "Not provided"
  },
  {
    "q": "In a magnetic field, which ions experience a greater deflection: heavier ions or lighter ions? (Provided all other parameters are kept same)",
    "options": [
      "Both experience the same deflection",
      "Independent of ion-mass",
      "Lighter ions",
      "Heavier ions"
    ],
    "answer": "Not provided"
  },
  {
    "q": "An alternating current 'I0sinωt' produces heat in a given resistance at a given time, which is nearly equal to:",
    "options": [
      "1/√I0",
      "0.707 I0",
      "0.707 / I0",
      "√I0"
    ],
    "answer": "Not provided"
  },
  {
    "q": "In case of metallic conductors, the charge carriers are:",
    "options": [
      "Electrons and neutrons",
      "Electrons",
      "Protons and neutrons",
      "Neutrons"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Which of the following is equivalent to 1 V?",
    "options": [
      "1 J/W",
      "1 J/s",
      "1 J/A",
      "1 J/C"
    ],
    "answer": "Not provided"
  },
  {
    "q": "In a parallel circuit with capacitors C1​ and C2​, if C1​ is much larger than C2​, what is the approximate total capacitance (CT​)?",
    "options": [
      "CT​ ≈ C2",
      "CT ​≈ C1 ​/ C2",
      "CT​ ≈ C1",
      "CT ≈ C1 ​⋅ C2"
    ],
    "answer": "Not provided"
  },
  {
    "q": "What is the formula for the energy stored (U) in a capacitor with capacitance (C) and potential difference (V)?",
    "options": [
      "U = CV²",
      "U = 0.5 CV²",
      "U = 0.5 (C / V²)",
      "U = C/V"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Electromagnetic waves emitted from antenna are:",
    "options": [
      "Longitudinal",
      "Transverse",
      "Linear",
      "Stationary"
    ],
    "answer": "Not provided"
  },
  {
    "q": "What are the SI units of magnetic flux?",
    "options": [
      "Tesla (T)",
      "Ampere (A)",
      "Weber (Wb)",
      "Joules (J)"
    ],
    "answer": "Not provided"
  },
  {
    "q": "A transparent refracting medium bounded by the two curved surfaces called:",
    "options": [
      "Mirror",
      "Glass",
      "Prism",
      "Lens"
    ],
    "answer": "Not provided"
  },
  {
    "q": "If a charged particle moves at an angle of 60 degrees to the magnetic field, what is the angle between the resulting force and the direction of motion?",
    "options": [
      "30 degrees",
      "60 degrees",
      "90 degrees",
      "0 degrees"
    ],
    "answer": "Not provided"
  },
  {
    "q": "In RL series circuit phase angle is given by:",
    "options": [
      "Tan-1 (ωLR)",
      "Tan-1 (ωL/R)",
      "Tan-1( ωR/L)",
      "Tan-1 (R/ωL)"
    ],
    "answer": "Not provided"
  },
  {
    "q": "The quantity ΔV/Δr is called:",
    "options": [
      "Electric energy",
      "Potential gradient",
      "Electric potential",
      "Potential barrier"
    ],
    "answer": "Not provided"
  },
  {
    "q": "The ratio of the amplitude of magnetic field to the amplitude of electric field for an electromagnetic wave propagating in vacuum is equal to the:",
    "options": [
      "Speed of light",
      "The square root of reciprocal of speed of light",
      "The square root of Speed of light",
      "The reciprocal of speed of light"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Lenz’s law is in accordance with law of conservation of",
    "options": [
      "Mass",
      "Energy",
      "Momentum",
      "Charge"
    ],
    "answer": "Not provided"
  },
  {
    "q": "The A.C circuit in which current and voltage are in phase the power factor is",
    "options": [
      "1",
      "Infinity",
      "0.5",
      "0"
    ],
    "answer": "Not provided"
  },
  {
    "q": "The S.I unit of electric flux is:",
    "options": [
      "Nm-1C-1",
      "Nm-1C-2",
      "N-1m2C",
      "Nm2C-1"
    ],
    "answer": "Not provided"
  },
  {
    "q": "What principle governs the conversion of magnetic variations into an electric current in magnetic recording tapes?",
    "options": [
      "Coulomb's Law",
      "Ampere's Law",
      "Faraday's Law",
      "Ohm's Law"
    ],
    "answer": "Not provided"
  },
  {
    "q": "What happens to the electric field at the surface of a perfect electric conductor",
    "options": [
      "Electric field is infinite",
      "Electric field is zero",
      "Electric field is discontinuous and proportional to sigma",
      "Electric field is continuous and proportional to sigma"
    ],
    "answer": "Not provided"
  },
  {
    "q": "When a charge is projected perpendicular to a uniform magnetic field, its path is:",
    "options": [
      "Ellipse",
      "Circular",
      "Spiral",
      "Helix"
    ],
    "answer": "Not provided"
  },
  {
    "q": "In the equation J = n⋅e⋅vd​, what does n represent?",
    "options": [
      "Negative charge",
      "Total number of charge carriers",
      "Drift velocity",
      "Number density of charge carriers"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Electric energy is measured:",
    "options": [
      "Horsepower",
      "Watt",
      "Kilowatt",
      "Kilowatt hour"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Which electromagnetic radiation transmits the highest photon energy?",
    "options": [
      "Ultraviolet radiations",
      "Infrared rays",
      "Gamma rays",
      "Microwaves"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Magnetic flux (ΦB​) is defined as:",
    "options": [
      "The ability of a material to conduct magnetic lines",
      "The measure of magnetic pole strength",
      "The quantity of magnetic field passing through a surface",
      "The strength of a magnet"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Electric field due to infinite sheet of charge is",
    "options": [
      "ϕ/εo",
      "ϕ/2εo",
      "σ/2εo",
      "σ/εo"
    ],
    "answer": "Not provided"
  },
  {
    "q": "In Pakistan the electricity standards are:",
    "options": [
      "20 Volts and 50 Hertz",
      "30 Volts and 50 Hertz",
      "230 Volts and 50 Hertz",
      "10 Volts and 50 Hertz"
    ],
    "answer": "Not provided"
  },
  {
    "q": "A particular device transmitted a signal in the form of electromagnetic waves of frequency 7.5 * 108 Hz. What is the wavelength of the signal?",
    "options": [
      "40 m",
      "0.4 m",
      "4.04 m",
      "4.0 m"
    ],
    "answer": "Not provided"
  },
  {
    "q": "How is the capacitance of a capacitor defined as?",
    "options": [
      "Electric field strength",
      "Voltage per unit charge",
      "Amount of charge stored per unit potential difference",
      "Electric force per unit charge"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Force on a charged particle is zero when projected at angle with the magnetic field:",
    "options": [
      "0 degree",
      "180 degree",
      "270 degree",
      "90 degree"
    ],
    "answer": "Not provided"
  },
  {
    "q": "A capacitor in an LC oscillator has a maximum potential difference of 15V and a maximum energy of 360 μJ. At a certain instant the energy in the capacitor is 40 μJ. At that instant what is the emf induced in the inductor?",
    "options": [
      "15V",
      "zero",
      "10V",
      "5V"
    ],
    "answer": "Not provided"
  },
  {
    "q": "The total energy in an LC circuit is 5.0 × 10−6 J. If L = 25mH the maximum current is:",
    "options": [
      "14mA",
      "10mA",
      "28mA",
      "20mA"
    ],
    "answer": "Not provided"
  },
  {
    "q": "The product of resistance and capacitance is called",
    "options": [
      "Velocity",
      "force",
      "Current",
      "Time"
    ],
    "answer": "Not provided"
  },
  {
    "q": "What is the direction of the area vector for a flat surface in the context of magnetic flux?",
    "options": [
      "Perpendicular to the surface",
      "Tangential to the surface",
      "Directed randomly",
      "Parallel to the surface"
    ],
    "answer": "Not provided"
  },
  {
    "q": "An inductor may store energy in its:",
    "options": [
      "Magnetic field",
      "Electric field",
      "Potential field",
      "Gravitational field"
    ],
    "answer": "Not provided"
  },
  {
    "q": "If the current in a circuit is 2 A and the resistance is 3 Ω, what is the power consumed?",
    "options": [
      "5 watts",
      "12 watts",
      "6 watts",
      "18 watts"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Total flux through a closed surface depends on:",
    "options": [
      "Medium only",
      "Charge and – N",
      "Charge enclosed",
      "Shape of surface"
    ],
    "answer": "Not provided"
  },
  {
    "q": "The number of turns becomes double, but length remain same, then magnetic field in the solenoid become",
    "options": [
      "Half",
      "Remain same",
      "Double",
      "Zero"
    ],
    "answer": "Not provided"
  },
  {
    "q": "What is the role of an EMF source, such as a battery, in an electrical circuit?",
    "options": [
      "To provide energy to the circuit",
      "To resist the flow of current",
      "To measure electrical potential",
      "To act as a short circuit"
    ],
    "answer": "Not provided"
  },
  {
    "q": "If a conductor is placed between the plates of a capacitor, what will happen to the potential difference between the plates?",
    "options": [
      "It will increase",
      "It will become zero",
      "It will be maintained",
      "It will decrease"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Which one of the following is the velocity of a carrier wave?",
    "options": [
      "3 × 109 ms-1",
      "3 × 1010 ms-1",
      "3 × 106 ms-1",
      "3 × 108 ms-1"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Work done on a charged particle moving in uniform magnetic field is:",
    "options": [
      "Negative",
      "Minimum",
      "Maximum",
      "Zero"
    ],
    "answer": "Not provided"
  },
  {
    "q": "The focal length of convex lens is:",
    "options": [
      "Negative",
      "Small",
      "Positive",
      "Large"
    ],
    "answer": "Not provided"
  },
  {
    "q": "One Tesla is equal to",
    "options": [
      "N /Am",
      "N /A m",
      "N A/m",
      "N A m"
    ],
    "answer": "Not provided"
  },
  {
    "q": "The reaction of an induction at 50 Hz is 10 Ω, its reactance at 100 Hz becomes:",
    "options": [
      "2.5 Ω",
      "20 Ω",
      "5 Ω",
      "1 Ω"
    ],
    "answer": "Not provided"
  },
  {
    "q": "In the context of a charged particle moving perpendicular to the magnetic field, If both the velocity (v) and the magnetic field strength (B) are doubled while keeping the charge (q) and mass (m) constant, what happens to the orbital radius (r)?",
    "options": [
      "No change in the orbital radius.",
      "Orbital radius quadruples.",
      "Orbital radius doubles.",
      "Orbital radius halves."
    ],
    "answer": "Not provided"
  },
  {
    "q": "What is the direction of the force between two charges according to Coulomb's law?",
    "options": [
      "Depends on the polarity of the charges",
      "Perpendicular to each other",
      "Away from each other",
      "Towards each other"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Consider the following statements, and then select the correct ones. I. Most of the electrical devices we use require AC voltage. II. Most of the electrical energy sold by power companies is transmitted and distributed as alternating current. III. AC voltage can be easily and efficiently converted from one place to another by means of transformers.",
    "options": [
      "I, II, and III are correct.",
      "I and II are correct, and III is incorrect.",
      "I is correct, and II and III are incorrect.",
      "I and III are correct; II is incorrect."
    ],
    "answer": "Not provided"
  },
  {
    "q": "In the context of magnetic force, if the velocity vector v is perpendicular to the magnetic field vector B, the resulting force vector F will be:",
    "options": [
      "Minimum",
      "Zero",
      "Can not be determined",
      "Maximum"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Work done between two points on equipotential surface is",
    "options": [
      "Zero",
      "Maximum",
      "Negative",
      "Infinite"
    ],
    "answer": "Not provided"
  },
  {
    "q": "The current in a car headlamp is 2.0 A. The headlamp is switched on for 3.0 minutes. How much charge passes through the headlamp?",
    "options": [
      "2.0 C",
      "90 C",
      "360 C",
      "4.0 C"
    ],
    "answer": "Not provided"
  },
  {
    "q": "If the velocity of a charged particle in perpendicular electric and magnetic field is 7.27 x 106 m/s and the Electric field is 6 x 106 N/c, what should be the value of the magnetic field?",
    "options": [
      "0.45 T",
      "0.83 T",
      "0.78 T",
      "0.94 T"
    ],
    "answer": "Not provided"
  },
  {
    "q": "In what paths do eddy currents typically circulate within a conductor?",
    "options": [
      "random patterns",
      "Elliptical or circular paths",
      "Spiral paths",
      "Straight lines"
    ],
    "answer": "Not provided"
  },
  {
    "q": "The transformer voltage induced in the secondary coil of a transformer is mainly due to:",
    "options": [
      "varying electric field",
      "varying magnetic field",
      "The vibrations of the primary coil",
      "The iron core of the transformer"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Why is the work done by the magnetic force always zero on a charged particle?",
    "options": [
      "The force and velocity vectors are parallel.",
      "The velocity of the particle is small.",
      "The force and velocity vectors are perpendicular.",
      "The magnetic force is weak."
    ],
    "answer": "Not provided"
  },
  {
    "q": "If a charged particle moves in a magnetic field, what effect does the magnetic force have on the kinetic energy of the particle?",
    "options": [
      "It increases the kinetic energy.",
      "It stops the particle.",
      "It decreases the kinetic energy.",
      "It does not change the kinetic energy."
    ],
    "answer": "Not provided"
  },
  {
    "q": "The wave form of alternating voltage is a:",
    "options": [
      "Sine wave",
      "Tangent wave",
      "Contingent wave",
      "Cosine wave"
    ],
    "answer": "Not provided"
  },
  {
    "q": "The potential difference between the ends of a conductor is 12 V. How much electrical energy is converted to other forms of energy in the conductor when 100 C of charge flows through it?",
    "options": [
      "1200 J",
      "88 J",
      "0.12 J",
      "8.3 J"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Capacitance of a capacitor in vacuum is given by:",
    "options": [
      "A/ εo d",
      "Ad/ εo",
      "εo /d",
      "A/ εr d"
    ],
    "answer": "Not provided"
  },
  {
    "q": "If the voltage in a circuit is 10 volts and the resistance is 5 ohms, what is the power consumed?",
    "options": [
      "2 watts",
      "20 watts",
      "10 watts",
      "50 watts"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Radio waves and light waves are __________.",
    "options": [
      "Longitudinal waves",
      "Transverse waves",
      "Electromagnetic and longitudinal both",
      "Electromagnetic and transverse both"
    ],
    "answer": "Not provided"
  },
  {
    "q": "If 0.5 T field over an area of 2m2 which lies at an angle of 600 with field. Then the resultant flux will be",
    "options": [
      "0.25 Wb",
      "0.50 T",
      "0.50 Wb",
      "0.25 T"
    ],
    "answer": "Not provided"
  },
  {
    "q": "If the electric and magnetic forces on a charged particle are not balanced in a velocity selector, what will happen to the particle?",
    "options": [
      "It will be deflected.",
      "It will stop moving.",
      "It will move in a straight line.",
      "It will be accelerated."
    ],
    "answer": "Not provided"
  },
  {
    "q": "How is charge density defined for linear charge distribution?",
    "options": [
      "dq = dA",
      "dq = σds",
      "dq = pdV",
      "dq = λds"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Phase difference between V and I of an A.C through resistor is:",
    "options": [
      "270 degree",
      "0 degree",
      "180 degree",
      "90 degree"
    ],
    "answer": "Not provided"
  },
  {
    "q": "How could the unit of potential difference, the volt, also be written?",
    "options": [
      "A/s",
      "C/A",
      "J/C",
      "C/J"
    ],
    "answer": "Not provided"
  },
  {
    "q": "A student rubs a rod held in his hand. \nWhich action causes the rod to gain a large electrostatic charge?",
    "options": [
      "Rubbing a polythene rod with a steel magnet",
      "Rubbing an iron rod with a steel magnet",
      "Rubbing an iron rod with a woolen duster",
      "Rubbing a polythene rod with a woolen duster"
    ],
    "answer": "Not provided"
  },
  {
    "q": "The wavelength of red light is 700 nm. Its frequency is ______.",
    "options": [
      "4.29 * 10^15 Hertz",
      "4.29 * 10^12 Hertz",
      "4.29 * 10^13 Hertz",
      "4.29 * 10^14 Hertz"
    ],
    "answer": "Not provided"
  },
  {
    "q": "What is the relationship between the electric field (E) and the dipole moment (p) at a point (r) on the axial line of the dipole?",
    "options": [
      "E = p/r",
      "E ∝ p/r²",
      "E = p",
      "E ∝ p/r³"
    ],
    "answer": "Not provided"
  },
  {
    "q": "What is the unit of charge distribution for linear density?",
    "options": [
      "Coulomb / length2",
      "length / Coulomb",
      "Length/ Farad",
      "Coulomb / length"
    ],
    "answer": "Not provided"
  },
  {
    "q": "It is required to suspend a proton of charge q and mass m in an electric field. The strength of field must be:",
    "options": [
      "m/qv",
      "mg/q",
      "qv/mg",
      "q/mg"
    ],
    "answer": "Not provided"
  },
  {
    "q": "If magnetic field is doubled then magnetic energy density becomes:",
    "options": [
      "Six times",
      "Three times",
      "Two times",
      "Four times"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Under what condition is induced electromotive force (EMF) produced in a conductor?",
    "options": [
      "When there is a strong magnetic field",
      "When there is a strong electric field",
      "When there is a constant magnetic field",
      "When there is a time-varying magnetic field"
    ],
    "answer": "Not provided"
  },
  {
    "q": "What does effect the introduction of dielectric material have on the relative permittivity (ϵr​) in a capacitor?",
    "options": [
      "Remains constant",
      "Becomes zero",
      "Decreases",
      "Increases"
    ],
    "answer": "Not provided"
  },
  {
    "q": "If F is the force acting on the test charge qo, the electric field intensity E would be given by",
    "options": [
      "E = F + qo",
      "E = F - qo",
      "E = F/qo",
      "E = qo/F"
    ],
    "answer": "Not provided"
  },
  {
    "q": "If the drift velocity vd of charge carriers in a conductor increases, what happens to the current density J?",
    "options": [
      "J becomes negative.",
      "J decreases.",
      "J increases.",
      "J remains unchanged."
    ],
    "answer": "Not provided"
  },
  {
    "q": "Greenhouse gases absorb _____ radiation.",
    "options": [
      "infrared",
      "ultraviolet",
      "gamma",
      "microwaves"
    ],
    "answer": "Not provided"
  },
  {
    "q": "A particle having 2e charge falls through a potential difference of 5 V. energy acquired by it is",
    "options": [
      "0.4 eV",
      "10 eV",
      "20 eV",
      "2.5 eV"
    ],
    "answer": "Not provided"
  },
  {
    "q": "The known laws of electromagnetism before James Clerk Maxwell were following, EXCEPT:",
    "options": [
      "Gauss's Laws",
      "De Broglie Law",
      "Faraday's Law",
      "Ampere's Law"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Which of the following is NOT the characteristic of electromagnetic waves?",
    "options": [
      "They have both fields, electric field and magnetic fields",
      "They can travel with different speeds in vacuum depending on frequency",
      "There is no limit to the amplitude or frequency",
      "They can travel through vacuum"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Electric flux is maximum when surface is held __________ to field lines.",
    "options": [
      "45o",
      "Perpendicular",
      "0o",
      "Parallel"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Electromagnetic waves are transverse in nature, as evident by the phenomenon of ______.",
    "options": [
      "Interference",
      "Polarization",
      "Reflection",
      "Diffraction"
    ],
    "answer": "Not provided"
  },
  {
    "q": "In an electric field E, if a charge Q is present, the force F acting on it is given by:",
    "options": [
      "F = Q + E",
      "F = QE",
      "F = Q - E",
      "F = Q / E"
    ],
    "answer": "Not provided"
  },
  {
    "q": "How is the potential difference related to the electric field in a capacitor?",
    "options": [
      "Inversely proportional",
      "Unrelated",
      "Directly proportional",
      "Exponential relationship"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Maximum power delivered by a battery is:",
    "options": [
      "E2/4r",
      "VIT",
      "Unlimited",
      "4rE2"
    ],
    "answer": "Not provided"
  },
  {
    "q": "When we accelerate the charge, which types of waves are produced?",
    "options": [
      "Electromagnetic waves",
      "Stationary waves",
      "Travelling waves",
      "Mechanical waves"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Average value of current and voltage over complete cycle is:",
    "options": [
      "Negative",
      "Zero",
      "Infinite",
      "Positive"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Charge carriers in electrolysis are:",
    "options": [
      "Electrons",
      "Protons",
      "Holes",
      "Positive and negative ions"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Which of the following statements is false about the properties of electromagnetic waves?",
    "options": [
      "The energy of the electromagnetic wave is divided equally between electric and magnetic fields.",
      "Both electric and magnetic field vectors attain their maximum and minimum at the same place and at the same time.",
      "These waves do not require any material medium for propagation.",
      "Both electric and magnetic field vectors are parallel to each other and perpendicular to the direction of propagation of wave."
    ],
    "answer": "Not provided"
  },
  {
    "q": "What does Gauss's law for magnetism state regarding the net magnetic flux through a closed surface?",
    "options": [
      "The net magnetic flux depends on the size of the closed surface.",
      "The net magnetic flux is zero.",
      "The net magnetic flux is always positive.",
      "The net magnetic flux is always negative."
    ],
    "answer": "Not provided"
  },
  {
    "q": "If the cross-sectional area A of a conductor is increased while keeping the current I constant, what happens to the current density J?",
    "options": [
      "J becomes negative.",
      "J increases",
      "J remains unchanged.",
      "J decreases."
    ],
    "answer": "Not provided"
  },
  {
    "q": "How does the radius of the ion's path in the magnetic field change as the mass of the ion increases? (Provided all other parameters are kept constant).",
    "options": [
      "The radius increases.",
      "The radius remains constant.",
      "The change in mass does not affect the radius.",
      "The radius decreases."
    ],
    "answer": "Not provided"
  },
  {
    "q": "What fundamental principle does Kirchhoff's Current Law (KCL) rely on?",
    "options": [
      "Conservation of power",
      "Conservation of charge",
      "Conservation of momentum",
      "Conservation of energy"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Electric field due to oppositely charged parallel plate capacitor is",
    "options": [
      "σ/εo",
      "σ/2εo",
      "ϕ/εo",
      "ϕ/2εo"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Energy density in case of a capacitor is always proportional to:",
    "options": [
      "CV",
      "E 2",
      "V 2",
      "2"
    ],
    "answer": "Not provided"
  },
  {
    "q": "The relation between electric filed due to infinite sheet of charge (Es) to oppositely charged parallel plate capacitor of infinite length (Ec) is",
    "options": [
      "Es = 4Ep",
      "Ec = 2Es",
      "Es = Ep",
      "Es = 2Ep"
    ],
    "answer": "Not provided"
  },
  {
    "q": "What is the primary principle behind a velocity selector in the context of the Lorentz force?",
    "options": [
      "Maximizing the magnetic force",
      "Eliminating the Lorentz force",
      "Minimizing the electric field",
      "Balancing electric and magnetic forces"
    ],
    "answer": "Not provided"
  },
  {
    "q": "If an electron of charge is accelerated through a potential difference V, it will acquire energy",
    "options": [
      "E/2",
      "2V",
      "V/2",
      "Ve"
    ],
    "answer": "Not provided"
  },
  {
    "q": "If the area of the plates increase by 6 times, and the distance between plates is reduced to half, the capacitance will be",
    "options": [
      "decreased by 12 times",
      "increased by 12 times",
      "decreased by 3 times",
      "increased by 3 times"
    ],
    "answer": "Not provided"
  },
  {
    "q": "The ability of a capacitor to store charge depends upon",
    "options": [
      "type of dielectric used",
      "all of these",
      "area of plates",
      "distance between plates"
    ],
    "answer": "Not provided"
  },
  {
    "q": "A detector is used to detect the speed of a particular wave. If the frequency of an electromagnetic signal is 400 MHz, the speed detected by detector is __________.",
    "options": [
      "300000 km/s",
      "300000 m/h",
      "300000 mm/s",
      "300000 m/min"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Coulomb's law is only true for point charges whose sizes are",
    "options": [
      "very small",
      "large",
      "very large",
      "medium"
    ],
    "answer": "Not provided"
  },
  {
    "q": "What is the unit of self-inductance?",
    "options": [
      "Weber (Wb)",
      "Gauss (G)",
      "Henry (H)",
      "Tesla (T)"
    ],
    "answer": "Not provided"
  },
  {
    "q": "1 Tesla is equal to",
    "options": [
      "103 guass",
      "10-3 guass",
      "104 guass",
      "10-4 guass"
    ],
    "answer": "Not provided"
  },
  {
    "q": "In a series circuit with capacitors C1​ and C2​, if C1​ is much larger than C2​, what is the approximate total capacitance (CT​)?",
    "options": [
      "CT​ ≈ C2",
      "CT ≈ C1 ​⋅ C2​",
      "CT​ ≈ C1​",
      "CT ​≈ C1 ​+ C2​"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Which of the following is the expression for Lorentz force?",
    "options": [
      "F = qE + q (v x B)",
      "F = ma + qE",
      "F = q (v x B)",
      "F = qE"
    ],
    "answer": "Not provided"
  },
  {
    "q": "In a dielectric material, what causes the separation of negative and positive charges on each molecule?",
    "options": [
      "Dissipation",
      "Ionization",
      "Conduction",
      "Polarization"
    ],
    "answer": "Not provided"
  },
  {
    "q": "The sum of electric and magnetic force is called.",
    "options": [
      "Newton’s force",
      "Lorentz force",
      "Centripetal force",
      "Maxwell force"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Two parallel straight wires carrying current in same direction will:",
    "options": [
      "Repel each other",
      "Attract each other",
      "May repel or attract",
      "No effect"
    ],
    "answer": "Not provided"
  },
  {
    "q": "A charged particle oscillates about its mean position with a frequency of 109 Hz. The frequency of electromagnetic waves produced by the oscillator is:",
    "options": [
      "109 Hz",
      "106 Hz",
      "107 Hz",
      "108 Hz"
    ],
    "answer": "Not provided"
  },
  {
    "q": "A battery has an EMF of 10 volts and an internal resistance of 1 Ω. If the battery is connected to a load of 4 Ω, what is the current flowing through the circuit?",
    "options": [
      "2.5 A",
      "3 A",
      "10 A",
      "2 A"
    ],
    "answer": "Not provided"
  },
  {
    "q": "What property of ions determines the extent of deflection in a magnetic field in a mass spectrometer?",
    "options": [
      "Ion charge",
      "Ion energy",
      "Ion size",
      "Ion-mass to charge ratio (m/q)"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Which one of the following voltages is obtained from a generator?",
    "options": [
      "DC voltage",
      "AC voltage",
      "Either AC or DC voltage",
      "Neither AC nor DC voltage"
    ],
    "answer": "Not provided"
  },
  {
    "q": "If the current through the conductor is doubled while the radius of the circular loop remains constant, what happens to the magnetic field according to Ampère's law?",
    "options": [
      "Magnetic field remains the same.",
      "Magnetic field doubles.",
      "Magnetic field quadruples.",
      "Magnetic field is halved."
    ],
    "answer": "Not provided"
  },
  {
    "q": "What is the electric field direction at a point on the axial line of an electric dipole?",
    "options": [
      "Toward the negative charge",
      "Opposite to the dipole moment direction",
      "Along the line from negative to positive",
      "Toward the positive charge"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Which of the following statements is NOT TRUE about electromagnetic waves?",
    "options": [
      "The electromagnetic radiation from a burning candle is un-polarized.",
      "The receptions of electromagnetic waves require an antenna.",
      "Electromagnetic waves satisfy the Maxwell's Equation.",
      "Electromagnetic waves can not travel through space."
    ],
    "answer": "Not provided"
  },
  {
    "q": "A stationary charge placed in a magnetic field will experience:",
    "options": [
      "No force.",
      "magnetic force.",
      "An electric force.",
      "Both electric and magnetic forces."
    ],
    "answer": "Not provided"
  },
  {
    "q": "The wavelength of red light is 700 nm. Its frequency is ______.",
    "options": [
      "4.29 * 10^15 Hertz",
      "4.29 * 10^14 Hertz",
      "4.29 * 10^13 Hertz",
      "4.29 * 10^12 Hertz"
    ],
    "answer": "Not provided"
  },
  {
    "q": "In a series circuit with resistors R1​ and R2​, if R1​ is much greater than R2​, what is the approximate total resistance (RT)?",
    "options": [
      "RT ≈ R1​ / R2",
      "RT​ ≈ R2",
      "RT​ ≈ R1​ · R2",
      "RT​ ≈ R1"
    ],
    "answer": "Not provided"
  },
  {
    "q": "If two capacitors, each with a capacitance of 100 microfarads, are connected in parallel, what is the total capacitance?",
    "options": [
      "200 microfarads",
      "50 microfarads",
      "100 microfarads",
      "150 microfarads"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Electromagnetic waves emitted from antenna are:",
    "options": [
      "Linear",
      "Transverse",
      "Longitudinal",
      "Stationary"
    ],
    "answer": "Not provided"
  },
  {
    "q": "In a dielectric material, what causes the separation of negative and positive charges on each molecule?",
    "options": [
      "Conduction",
      "Ionization",
      "Polarization",
      "Dissipation"
    ],
    "answer": "Not provided"
  },
  {
    "q": "If the cross-sectional area A of a conductor is increased while keeping the current I constant, what happens to the current density J?",
    "options": [
      "J remains unchanged.",
      "J increases",
      "J becomes negative.",
      "J decreases."
    ],
    "answer": "Not provided"
  },
  {
    "q": "When a charge is projected perpendicular to a uniform magnetic field, its path is:",
    "options": [
      "Helix",
      "Circular",
      "Ellipse",
      "Spiral"
    ],
    "answer": "Not provided"
  },
  {
    "q": "What happens to the total capacitance when capacitors are connected in series?",
    "options": [
      "It increases",
      "It becomes infinite",
      "It decreases",
      "It remains the same"
    ],
    "answer": "Not provided"
  },
  {
    "q": "If F is the force acting on the test charge qo, the electric field intensity E would be given by",
    "options": [
      "E = qo/F",
      "E = F - qo",
      "E = F/qo",
      "E = F + qo"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Capacitive reactance Xc is:",
    "options": [
      "1/2πfC",
      "4πfC",
      "1/4πfC",
      "2πfC"
    ],
    "answer": "Not provided"
  },
  {
    "q": "What does Gauss's law for magnetism state regarding the net magnetic flux through a closed surface?",
    "options": [
      "The net magnetic flux is zero.",
      "The net magnetic flux depends on the size of the closed surface.",
      "The net magnetic flux is always positive.",
      "The net magnetic flux is always negative."
    ],
    "answer": "Not provided"
  },
  {
    "q": "Which of the following is equivalent to one coulomb?",
    "options": [
      "one volt per ampere",
      "One volt ampere",
      "one ampere per volt",
      "One ampere second"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Which of the following is usually taken to make the core of a transformer?",
    "options": [
      "Aluminum",
      "Hard iron",
      "Copper",
      "Soft iron"
    ],
    "answer": "Not provided"
  },
  {
    "q": "When the angle θ is 60°, how does the magnetic flux compare to its maximum value?",
    "options": [
      "Magnetic flux is maximized.",
      "Magnetic flux is unchanged.",
      "Magnetic flux is half of the maximum.",
      "Magnetic flux is zero."
    ],
    "answer": "Not provided"
  },
  {
    "q": "What is a Gaussian surface in the context of Gauss's Law?",
    "options": [
      "surface with constant electric field",
      "Any closed surface in space",
      "An imaginary surface used to apply Gauss's Law",
      "surface with nonzero electric flux"
    ],
    "answer": "Not provided"
  },
  {
    "q": "What principle governs the conversion of magnetic variations into an electric current in magnetic recording tapes?",
    "options": [
      "Ampere's Law",
      "Coulomb's Law",
      "Faraday's Law",
      "Ohm's Law"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Which of the following is equivalent to 1 V?",
    "options": [
      "1 J/W",
      "1 J/s",
      "1 J/C",
      "1 J/A"
    ],
    "answer": "Not provided"
  },
  {
    "q": "The graphical representation of Ohm’s law is:",
    "options": [
      "Parabola",
      "Hyperbola",
      "Ellipse",
      "Straight line"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Under what condition is induced electromotive force (EMF) produced in a conductor?",
    "options": [
      "When there is a constant magnetic field",
      "When there is a strong magnetic field",
      "When there is a strong electric field",
      "When there is a time-varying magnetic field"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Phase difference between V and I of an A.C through resistor is:",
    "options": [
      "270 degree",
      "180 degree",
      "0 degree",
      "90 degree"
    ],
    "answer": "Not provided"
  },
  {
    "q": "A capacitor in an LC oscillator has a maximum potential difference of 15V and a maximum energy of 360 μJ. At a certain instant the energy in the capacitor is 40 μJ. At that instant what is the emf induced in the inductor?",
    "options": [
      "5V",
      "zero",
      "15V",
      "10V"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Which of the following is the expression for Lorentz force?",
    "options": [
      "F = ma + qE",
      "F = qE",
      "F = q (v x B)",
      "F = qE + q (v x B)"
    ],
    "answer": "Not provided"
  },
  {
    "q": "What fundamental principle does Kirchhoff's Current Law (KCL) rely on?",
    "options": [
      "Conservation of energy",
      "Conservation of momentum",
      "Conservation of charge",
      "Conservation of power"
    ],
    "answer": "Not provided"
  },
  {
    "q": "What does the electric potential due to a dipole depend on?",
    "options": [
      "Magnitude of charges in the dipole",
      "Both distance and angle",
      "Angle between the dipole moment and the field point",
      "Distance from the center of the dipole"
    ],
    "answer": "Not provided"
  },
  {
    "q": "An inductor may store energy in its:",
    "options": [
      "Electric field",
      "Gravitational field",
      "Magnetic field",
      "Potential field"
    ],
    "answer": "Not provided"
  },
  {
    "q": "If a charged particle moves in a magnetic field, what effect does the magnetic force have on the kinetic energy of the particle?",
    "options": [
      "It increases the kinetic energy.",
      "It decreases the kinetic energy.",
      "It stops the particle.",
      "It does not change the kinetic energy."
    ],
    "answer": "Not provided"
  },
  {
    "q": "If magnetic field is doubled then magnetic energy density becomes:",
    "options": [
      "Three times",
      "Six times",
      "Two times",
      "Four times"
    ],
    "answer": "Not provided"
  },
  {
    "q": "What is the primary principle behind a velocity selector in the context of the Lorentz force?",
    "options": [
      "Eliminating the Lorentz force",
      "Minimizing the electric field",
      "Balancing electric and magnetic forces",
      "Maximizing the magnetic force"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Electromagnetic waves do not transport:",
    "options": [
      "Charge",
      "Momentum",
      "Information",
      "Energy"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Radio waves and light waves are __________.",
    "options": [
      "Electromagnetic and transverse both",
      "Transverse waves",
      "Electromagnetic and longitudinal both",
      "Longitudinal waves"
    ],
    "answer": "Not provided"
  },
  {
    "q": "If an electron of charge is accelerated through a potential difference V, it will acquire energy",
    "options": [
      "2V",
      "V/2",
      "E/2",
      "Ve"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Force per unit charge is:",
    "options": [
      "Electric field intensity",
      "Lorentz force",
      "Electric potential",
      "Electric Flux"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Electromagnetic waves are transverse in nature, as evident by the phenomenon of ______.",
    "options": [
      "Polarization",
      "Interference",
      "Reflection",
      "Diffraction"
    ],
    "answer": "Not provided"
  },
  {
    "q": "What is the direction of the area vector for a flat surface in the context of magnetic flux?",
    "options": [
      "Perpendicular to the surface",
      "Directed randomly",
      "Parallel to the surface",
      "Tangential to the surface"
    ],
    "answer": "Not provided"
  },
  {
    "q": "If velocity of a conductor moving through a magnetic field B is made zero then motional emf is:",
    "options": [
      "-v/LB",
      "Zero",
      "-BL/v",
      "-vBL"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Work done on a charged particle moving in uniform magnetic field is:",
    "options": [
      "Negative",
      "Zero",
      "Minimum",
      "Maximum"
    ],
    "answer": "Not provided"
  },
  {
    "q": "In the context of capacitors, how is energy related to the electric field strength?",
    "options": [
      "Energy is inversely proportional to the electric field strength",
      "Energy is proportional to the square of the electric field strength",
      "Energy is unrelated to the electric field strength",
      "Energy is directly proportional to the electric field strength"
    ],
    "answer": "Not provided"
  },
  {
    "q": "A stationary charge placed in a magnetic field will experience:",
    "options": [
      "An electric force.",
      "Both electric and magnetic forces.",
      "magnetic force.",
      "No force."
    ],
    "answer": "Not provided"
  },
  {
    "q": "What is the relationship between the electric field and charges on a perfect electric conductor's surface?",
    "options": [
      "Electric field is normal to the surface and proportional to charge density",
      "Electric field is proportional to charge density",
      "Electric field is discontinuous and inversely proportional to charge density",
      "Electric field is always zero"
    ],
    "answer": "Not provided"
  },
  {
    "q": "If a conductor is placed between the plates of a capacitor, what will happen to the potential difference between the plates?",
    "options": [
      "It will be maintained",
      "It will increase",
      "It will decrease",
      "It will become zero"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Total flux through a closed surface depends on:",
    "options": [
      "Medium only",
      "Charge and – N",
      "Charge enclosed",
      "Shape of surface"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Energy density in case of a capacitor is always proportional to:",
    "options": [
      "E 2",
      "CV",
      "2",
      "V 2"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Potentiometer can be used as",
    "options": [
      "Galvanometer",
      "Potential divider",
      "Ohm meter",
      "Ammeter"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Two parallel straight wires carrying current in same direction will:",
    "options": [
      "Repel each other",
      "No effect",
      "Attract each other",
      "May repel or attract"
    ],
    "answer": "Not provided"
  },
  {
    "q": "If the velocity of a charged particle in perpendicular electric and magnetic field is 7.27 x 106 m/s and the Electric field is 6 x 106 N/c, what should be the value of the magnetic field?",
    "options": [
      "0.45 T",
      "0.94 T",
      "0.78 T",
      "0.83 T"
    ],
    "answer": "Not provided"
  },
  {
    "q": "When a dielectric material is introduced between the plates of a capacitor, what does effect it have on the capacitance?",
    "options": [
      "Remains the same",
      "Depends on the dielectric constant",
      "Decreases",
      "Increases"
    ],
    "answer": "Not provided"
  },
  {
    "q": "The ability of a capacitor to store charge depends upon",
    "options": [
      "area of plates",
      "all of these",
      "distance between plates",
      "type of dielectric used"
    ],
    "answer": "Not provided"
  },
  {
    "q": "If Io is the peak value of an AC supply, then its rms value is given as Irms:",
    "options": [
      "√2  Io",
      "Io/0.707",
      "Io/√2",
      "Io/2"
    ],
    "answer": "Not provided"
  },
  {
    "q": "When we accelerate the charge, which types of waves are produced?",
    "options": [
      "Electromagnetic waves",
      "Stationary waves",
      "Travelling waves",
      "Mechanical waves"
    ],
    "answer": "Not provided"
  },
  {
    "q": "A detector is used to detect the speed of a particular wave. If the frequency of an electromagnetic signal is 400 MHz, the speed detected by detector is __________.",
    "options": [
      "300000 m/min",
      "300000 mm/s",
      "300000 m/h",
      "300000 km/s"
    ],
    "answer": "Not provided"
  },
  {
    "q": "According to faraday's law, the e.m.f. induced in the coil with N turns and magnetic flux ‘φ’ is:",
    "options": [
      "ɛ = -N dφ/dt",
      "ɛ = -N2 dφ/dt",
      "ɛ = -N dt2/ d2φ",
      "ɛ = -N d2φ/dt2"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Tesla is a unit of",
    "options": [
      "Mutual inductance",
      "Self-inductance",
      "Flux density",
      "Magnetic flux"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Electric field due to infinite sheet of charge is",
    "options": [
      "infinite",
      "Varies linearly with distance",
      "Zero",
      "Independent of distance from sheet"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Electric energy is measured:",
    "options": [
      "Kilowatt hour",
      "Kilowatt",
      "Horsepower",
      "Watt"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Kirchhoff’s first rule is the manifestation of the law of conservation of:",
    "options": [
      "Charge",
      "Momentum",
      "Energy",
      "Mass"
    ],
    "answer": "Not provided"
  },
  {
    "q": "In Pakistan the electricity standards are:",
    "options": [
      "20 Volts and 50 Hertz",
      "10 Volts and 50 Hertz",
      "230 Volts and 50 Hertz",
      "30 Volts and 50 Hertz"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Which statement about equipotential surfaces is correct?",
    "options": [
      "They are surfaces with constant electric field",
      "All points on them have the same electric potential",
      "They have varying electric potential",
      "They are always spherical"
    ],
    "answer": "Not provided"
  },
  {
    "q": "In a parallel circuit with resistors R1​ and R2​, if R1​ is much greater than R2​, what is the approximate total resistance (RT)?",
    "options": [
      "RT ≈ R1​ + R2​",
      "RT​ ≈ R1​ · R2​",
      "RT​ ≈ R2​",
      "RT​ ≈ R1​"
    ],
    "answer": "Not provided"
  },
  {
    "q": "What is the relationship between the electric field (E) and the dipole moment (p) at a point (r) on the axial line of the dipole?",
    "options": [
      "E = p",
      "E ∝ p/r³",
      "E = p/r",
      "E ∝ p/r²"
    ],
    "answer": "Not provided"
  },
  {
    "q": "When are eddy currents typically induced in a conductor?",
    "options": [
      "When there is no magnetic field",
      "When exposed to a changing magnetic field",
      "In the presence of a constant magnetic field",
      "In the presence of a strong magnetic field"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Which one of the following is the velocity of a carrier wave?",
    "options": [
      "3 × 108 ms-1",
      "3 × 109 ms-1",
      "3 × 1010 ms-1",
      "3 × 106 ms-1"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Which of the following statements is false about the properties of electromagnetic waves?",
    "options": [
      "The energy of the electromagnetic wave is divided equally between electric and magnetic fields.",
      "Both electric and magnetic field vectors are parallel to each other and perpendicular to the direction of propagation of wave.",
      "Both electric and magnetic field vectors attain their maximum and minimum at the same place and at the same time.",
      "These waves do not require any material medium for propagation."
    ],
    "answer": "Not provided"
  },
  {
    "q": "An alternating current 'I0sinωt' produces heat in a given resistance at a given time, which is nearly equal to:",
    "options": [
      "0.707 / I0",
      "1/√I0",
      "0.707 I0",
      "√I0"
    ],
    "answer": "Not provided"
  },
  {
    "q": "In the equation J = n⋅e⋅vd​, what does n represent?",
    "options": [
      "Total number of charge carriers",
      "Number density of charge carriers",
      "Drift velocity",
      "Negative charge"
    ],
    "answer": "Not provided"
  },
  {
    "q": "What does effect polarization have on the dipole moment in a dielectric material?",
    "options": [
      "Dipole moment decreases",
      "Dipole moment remains constant",
      "Dipole moment becomes zero",
      "Dipole moment increases"
    ],
    "answer": "Not provided"
  },
  {
    "q": "What property of ions determines the extent of deflection in a magnetic field in a mass spectrometer?",
    "options": [
      "Ion energy",
      "Ion-mass to charge ratio (m/q)",
      "Ion size",
      "Ion charge"
    ],
    "answer": "Not provided"
  },
  {
    "q": "The wave form of alternating voltage is a:",
    "options": [
      "Sine wave",
      "Contingent wave",
      "Tangent wave",
      "Cosine wave"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Coulomb's law is only true for point charges whose sizes are",
    "options": [
      "very small",
      "very large",
      "large",
      "medium"
    ],
    "answer": "Not provided"
  },
  {
    "q": "In an electrical circuit with constant resistance, if the voltage source is doubled, what happens to the power delivered to the circuit?",
    "options": [
      "The power is halved.",
      "The power is doubled.",
      "The power remains the same.",
      "The power is quadrupled."
    ],
    "answer": "Not provided"
  },
  {
    "q": "What is the expression for electric potential due to an electric dipole at a point on the axis at distance r?",
    "options": [
      "𝑽 = 𝒒/(4𝝅ε₀r)",
      "𝑽 = 𝒒d/(4𝝅ε₀r)",
      "𝑽 = 𝒒d/(4𝝅ε₀r²)",
      "𝑽 = 𝒒/(4𝝅ε₀r²)"
    ],
    "answer": "Not provided"
  },
  {
    "q": "It is required to suspend a proton of charge q and mass m in an electric field. The strength of field must be:",
    "options": [
      "m/qv",
      "qv/mg",
      "mg/q",
      "q/mg"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Electric field due to oppositely charged parallel plate capacitor is",
    "options": [
      "σ/2εo",
      "ϕ/εo",
      "σ/εo",
      "ϕ/2εo"
    ],
    "answer": "Not provided"
  },
  {
    "q": "If the area of the plates increase by 6 times, and the distance between plates is reduced to half, the capacitance will be",
    "options": [
      "increased by 3 times",
      "decreased by 12 times",
      "decreased by 3 times",
      "increased by 12 times"
    ],
    "answer": "Not provided"
  },
  {
    "q": "What is the direction of the force between two charges according to Coulomb's law?",
    "options": [
      "Towards each other",
      "Away from each other",
      "Depends on the polarity of the charges",
      "Perpendicular to each other"
    ],
    "answer": "Not provided"
  },
  {
    "q": "In US the electricity standards are:",
    "options": [
      "120 Volts and 50 Hertz",
      "120 Volts and 60 Hertz",
      "100 Volts and 50 Hertz",
      "230 Volts and 50 Hertz"
    ],
    "answer": "Not provided"
  },
  {
    "q": "The electric mains supply in our homes and offices is a voltage that varies like a sine function with time. Such a voltage is called ___ and the current driven by it in a circuit is called ____.",
    "options": [
      "DC voltage, AC current",
      "AC voltage, DC current",
      "AC voltage, DC voltage",
      "AC voltage, AC current"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Greenhouse gases absorb _____ radiation.",
    "options": [
      "infrared",
      "microwaves",
      "gamma",
      "ultraviolet"
    ],
    "answer": "Not provided"
  },
  {
    "q": "What is the unit of electric potential?",
    "options": [
      "Joule/Meter",
      "Volt/Coulomb",
      "Joule/Coulomb",
      "Newton/Meter"
    ],
    "answer": "Not provided"
  },
  {
    "q": "The relation between electric filed due to infinite sheet of charge (Es) to oppositely charged parallel plate capacitor of infinite length (Ec) is",
    "options": [
      "Es = 2Ep",
      "Es = Ep",
      "Ec = 2Es",
      "Es = 4Ep"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Work done between two points on equipotential surface is",
    "options": [
      "Zero",
      "Maximum",
      "Infinite",
      "Negative"
    ],
    "answer": "Not provided"
  },
  {
    "q": "What is the unit of charge distribution for linear density?",
    "options": [
      "Coulomb / length2",
      "length / Coulomb",
      "Length/ Farad",
      "Coulomb / length"
    ],
    "answer": "Not provided"
  },
  {
    "q": "How is the capacitance of a capacitor defined as?",
    "options": [
      "Voltage per unit charge",
      "Amount of charge stored per unit potential difference",
      "Electric field strength",
      "Electric force per unit charge"
    ],
    "answer": "Not provided"
  },
  {
    "q": "We desire to make an LC circuit that oscillates at 100 Hz using an inductance of 2.5H. We also need a capacitance of:",
    "options": [
      "1μF",
      "100μF",
      "1 F",
      "1mF"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Which physical quantity is produced by a calculation where a charge is multiplied by a potential difference (p.d)?",
    "options": [
      "Energy",
      "e.m.f",
      "Current",
      "Power"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Magnetic flux (ΦB​) is defined as:",
    "options": [
      "The strength of a magnet",
      "The quantity of magnetic field passing through a surface",
      "The ability of a material to conduct magnetic lines",
      "The measure of magnetic pole strength"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Maximum power delivered by a battery is:",
    "options": [
      "VIT",
      "4rE2",
      "Unlimited",
      "E2/4r"
    ],
    "answer": "Not provided"
  },
  {
    "q": "If 0.5 T field over an area of 2m2 which lies at an angle of 600 with field. Then the resultant flux will be",
    "options": [
      "0.50 T",
      "0.50 Wb",
      "0.25 Wb",
      "0.25 T"
    ],
    "answer": "Not provided"
  },
  {
    "q": "The value of k in coulomb's law depends upon",
    "options": [
      "magnitude of charges",
      "distance between charges",
      "medium between two charges",
      "all of these"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Inductive reactance XL of an inductor is:",
    "options": [
      "2πL",
      "πfL",
      "4πfL",
      "2πfL"
    ],
    "answer": "Not provided"
  },
  {
    "q": "The lenz’s law refers to:",
    "options": [
      "Potential difference",
      "Motional emf",
      "Induced potential",
      "Induced current"
    ],
    "answer": "Not provided"
  },
  {
    "q": "In a magnetic field, which ions experience a greater deflection: heavier ions or lighter ions? (Provided all other parameters are kept same)",
    "options": [
      "Independent of ion-mass",
      "Heavier ions",
      "Lighter ions",
      "Both experience the same deflection"
    ],
    "answer": "Not provided"
  },
  {
    "q": "A transparent refracting medium bounded by the two curved surfaces called:",
    "options": [
      "Prism",
      "Mirror",
      "Glass",
      "Lens"
    ],
    "answer": "Not provided"
  },
  {
    "q": "1 Tesla is equal to",
    "options": [
      "10-3 guass",
      "103 guass",
      "10-4 guass",
      "104 guass"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Maxwell’s second equation is expressed as __________:",
    "options": [
      "▽×B = 0",
      "▽⋅B = 0",
      "▽×B = 1",
      "▽⋅B = 1"
    ],
    "answer": "Not provided"
  },
  {
    "q": "If the voltage in a circuit is 10 volts and the resistance is 5 ohms, what is the power consumed?",
    "options": [
      "10 watts",
      "2 watts",
      "20 watts",
      "50 watts"
    ],
    "answer": "Not provided"
  },
  {
    "q": "The waves used by artificial satellites for communication is:",
    "options": [
      "X-rays",
      "Radio waves",
      "Microwaves",
      "Infrared waves"
    ],
    "answer": "Not provided"
  },
  {
    "q": "One Tesla is equal to",
    "options": [
      "N A m",
      "N /A m",
      "N A/m",
      "N /Am"
    ],
    "answer": "Not provided"
  },
  {
    "q": "What is the charge density for a volume charge distribution?",
    "options": [
      "dq = λds",
      "dq = σdV",
      "dq = dA",
      "dq = ρdV"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Select the correct statement:",
    "options": [
      "Radio waves have higher frequency than gamma rays",
      "Gamma rays have higher frequency than infrared waves",
      "Blue light has a higher frequency than x rays",
      "Ultraviolet light has a longer wavelength than infrared"
    ],
    "answer": "Not provided"
  },
  {
    "q": "The transformer voltage induced in the secondary coil of a transformer is mainly due to:",
    "options": [
      "varying electric field",
      "varying magnetic field",
      "The vibrations of the primary coil",
      "The iron core of the transformer"
    ],
    "answer": "Not provided"
  },
  {
    "q": "In a parallel circuit with capacitors C1​ and C2​, if C1​ is much larger than C2​, what is the approximate total capacitance (CT​)?",
    "options": [
      "CT ≈ C1 ​⋅ C2",
      "CT ​≈ C1 ​/ C2",
      "CT​ ≈ C1",
      "CT​ ≈ C2"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Transformers are used in:",
    "options": [
      "DC circuit only",
      "Both DC and AC circuits",
      "Neither in DC nor in AC circuits",
      "AC circuits only"
    ],
    "answer": "Not provided"
  },
  {
    "q": "When some dielectric is inserted between the plates of a capacitor, then capacitance:",
    "options": [
      "Zero",
      "Increased",
      "Infinity",
      "Decreased"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Kirchhoff’s 2nd rule is the manifestation of the law of conservation of:",
    "options": [
      "Momentum",
      "Mass",
      "Energy",
      "Charge"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Force on a charged particle is zero when projected at angle with the magnetic field:",
    "options": [
      "270 degree",
      "90 degree",
      "180 degree",
      "0 degree"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Electromagnetic waves were experimentally discovered by:",
    "options": [
      "Maxwells",
      "Einstein",
      "Ampere",
      "Hertz"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Which electromagnetic radiation transmits the highest photon energy?",
    "options": [
      "Gamma rays",
      "Infrared rays",
      "Microwaves",
      "Ultraviolet radiations"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Average value of current and voltage over complete cycle is:",
    "options": [
      "Positive",
      "Infinite",
      "Negative",
      "Zero"
    ],
    "answer": "Not provided"
  },
  {
    "q": "A battery has an EMF of 10 volts and an internal resistance of 1 Ω. If the battery is connected to a load of 4 Ω, what is the current flowing through the circuit?",
    "options": [
      "2.5 A",
      "10 A",
      "2 A",
      "3 A"
    ],
    "answer": "Not provided"
  },
  {
    "q": "If the electric and magnetic forces on a charged particle are not balanced in a velocity selector, what will happen to the particle?",
    "options": [
      "It will be deflected.",
      "It will move in a straight line.",
      "It will stop moving.",
      "It will be accelerated."
    ],
    "answer": "Not provided"
  },
  {
    "q": "The known laws of electromagnetism before James Clerk Maxwell were following, EXCEPT:",
    "options": [
      "Ampere's Law",
      "Gauss's Laws",
      "De Broglie Law",
      "Faraday's Law"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Which of the following statements is NOT TRUE about electromagnetic waves?",
    "options": [
      "Electromagnetic waves satisfy the Maxwell's Equation.",
      "Electromagnetic waves can not travel through space.",
      "The receptions of electromagnetic waves require an antenna.",
      "The electromagnetic radiation from a burning candle is un-polarized."
    ],
    "answer": "Not provided"
  },
  {
    "q": "As an object approaches the speed of light, the γ:",
    "options": [
      "Remains constant",
      "Reaches zero",
      "Increases",
      "Decreases"
    ],
    "answer": "Not provided"
  },
  {
    "q": "The process for which entropy remains constant is:",
    "options": [
      "Isobaric process",
      "Isothermal process",
      "An irreversible process",
      "reversible process"
    ],
    "answer": "Not provided"
  },
  {
    "q": "In a rainy day, small oil films on water show brilliant colors. This is due to the phenomenon of:",
    "options": [
      "Dispersion",
      "Polarization",
      "Diffraction",
      "Interference"
    ],
    "answer": "Not provided"
  },
  {
    "q": "In Newton’s rings the central spot is __________.",
    "options": [
      "Alternate between bright and dark",
      "Can be bright or dark",
      "Always bright",
      "Always dark"
    ],
    "answer": "Not provided"
  },
  {
    "q": "When two gases separate by a diathermal wall are in thermal equilibrium with each other:",
    "options": [
      "Only their volumes must be the same",
      "Only their temperatures must be the same",
      "Only their pressures must be the same",
      "They must have the same number of particles"
    ],
    "answer": "Not provided"
  },
  {
    "q": "A laser in a compact disc player generates light that has a wavelength of 780 nm in air. The light then enters into the plastic of a CD. If the index of refraction of plastic is 1.55, the speed of this light once enter the plastic is ________.",
    "options": [
      "3.00 x10^8 m/s",
      "4.29 x 10^8 km/h",
      "1.94 x 10^8 m/s",
      "3.00 x 10^8 km/h"
    ],
    "answer": "Not provided"
  },
  {
    "q": "If a laser emits 5×1018 photons per second, and each photon has an energy of 4×10−19 J, determine the total energy emitted per second by the laser.",
    "options": [
      "10 J/s",
      "5 J/s",
      "2.5 J/s",
      "2 J/s"
    ],
    "answer": "Not provided"
  },
  {
    "q": "The primary purpose of the equation of state in thermodynamics is:",
    "options": [
      "To determine the path variables",
      "To explain the conservation of energy",
      "To define the system's internal energy",
      "To relate thermodynamic variables like P, V, and T"
    ],
    "answer": "Not provided"
  },
  {
    "q": "A calorie is about:",
    "options": [
      "4.2J",
      "250J",
      "8.3J",
      "4200J"
    ],
    "answer": "Not provided"
  },
  {
    "q": "If white light is used instead of monochromatic light for light interference, what would be the change in the observation?",
    "options": [
      "The shape of the pattern will change from hyperbolic to circular.",
      "Colored fringes will be observed, with a bright fringe at the center.",
      "The bright and dark fringes will change position",
      "The pattern will not be visible."
    ],
    "answer": "Not provided"
  },
  {
    "q": "If 500 J of heat is added to a substance and its temperature increases by 5°C, what is its heat capacity?",
    "options": [
      "100 J/°C",
      "105 J/°C",
      "505 J/°C",
      "500 J/°C"
    ],
    "answer": "Not provided"
  },
  {
    "q": "In a photoelectric effect experiment at a frequency above cut off, the stopping potential is proportional to:",
    "options": [
      "the energy of the least energetic electron after it is ejected",
      "the energy of the least energetic electron before it is ejected",
      "the energy of the most energetic electron before it is ejected",
      "the energy of the most energetic electron after it is ejected"
    ],
    "answer": "Not provided"
  },
  {
    "q": "The point where parallel rays converge after reflecting off a convex mirror is called",
    "options": [
      "Apex",
      "Center",
      "Vertex",
      "Focus"
    ],
    "answer": "Not provided"
  },
  {
    "q": "If a gas expands into a vacuum, work done by the gas is:",
    "options": [
      "Zero",
      "Equal to the internal energy change",
      "Positive",
      "Negative"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Time:",
    "options": [
      "Is continuous",
      "Is static",
      "Is relative",
      "Is an absolute quantity"
    ],
    "answer": "Not provided"
  },
  {
    "q": "A certain electromagnetic wave has a frequency of 6×1014 Hz. What is the wavelength of this wave?",
    "options": [
      "600 meters",
      "300 nanometers",
      "6×10−7 meters",
      "5×10−7 meters"
    ],
    "answer": "Not provided"
  },
  {
    "q": "If a phosphorescent material and a fluorescent material are exposed to the same source of light and then observed in the dark, which one will continue to emit light?",
    "options": [
      "The fluorescent material.",
      "Neither material would emit light.",
      "The phosphorescent material.",
      "Both materials equally."
    ],
    "answer": "Not provided"
  },
  {
    "q": "A convex mirror has a radius of curvature R of 26 cm. What is its focal length f?",
    "options": [
      "40 cm",
      "13 cm",
      "52 cm",
      "10 cm"
    ],
    "answer": "Not provided"
  },
  {
    "q": "For an ideal gas at constant pressure, how is the volume related to temperature?",
    "options": [
      "Volume is directly proportional to temperature.",
      "Volume remains constant irrespective of temperature.",
      "Volume is proportional to the square of temperature.",
      "Volume is inversely proportional to temperature."
    ],
    "answer": "Not provided"
  },
  {
    "q": "What is the primary application of polarized sunglasses?",
    "options": [
      "To increase the intensity of light",
      "To reduce glare from surfaces like water and snow",
      "To enhance colors in the environment",
      "To make objects appear larger"
    ],
    "answer": "Not provided"
  },
  {
    "q": "What is time dilation?",
    "options": [
      "Compression of time",
      "Expansion of time",
      "Stationary time",
      "Time reversal"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Which of the following statement is true regarding time dilation?",
    "options": [
      "It is constant for every object",
      "It has been experimentally verified",
      "It is a purely theoretical concept",
      "It is a myth"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Identify the principle behind the sparkling of diamonds.",
    "options": [
      "Reflection",
      "Interference",
      "Refraction",
      "Total internal reflection"
    ],
    "answer": "Not provided"
  },
  {
    "q": "The wavelength of light beam A is twice the wavelength of light beam B. The energy of a photon in beam A is:",
    "options": [
      "equal to the energy of a photon in beam B",
      "one-fourth the energy of a photon in beam B",
      "half the energy of a photon in beam B",
      "twice the energy of a photon in beam B"
    ],
    "answer": "Not provided"
  },
  {
    "q": "A concave lens has a focal length of -8 cm. What does the negative sign indicate about the lens?",
    "options": [
      "The lens is converging.",
      "The lens is perfect.",
      "The lens is diverging.",
      "The lens has a defect."
    ],
    "answer": "Not provided"
  },
  {
    "q": "How does the anomalous behaviour of water benefit fish in the winter?",
    "options": [
      "It ensures the entire lake remains liquid.",
      "It allows the bottom of lakes to remain unfrozen.",
      "It facilitates faster fish movement.",
      "It creates a warmer environment at the surface."
    ],
    "answer": "Not provided"
  },
  {
    "q": "Polarization means ___________________________.",
    "options": [
      "To separate the light into its colors",
      "To guide the light in only one direction",
      "To change the frequency of the light",
      "To alter the wavelength of the light"
    ],
    "answer": "Not provided"
  },
  {
    "q": "In an electromagnetic waves, the electric and magnetic fields are oriented:",
    "options": [
      "Parallel to the direction of propagation.",
      "Perpendicular to each other and to the direction of propagation.",
      "In the same direction.",
      "Oscillate randomly in space."
    ],
    "answer": "Not provided"
  },
  {
    "q": "Room temperature is about 20 degrees on the:",
    "options": [
      "Kelvin scale",
      "Absolute scale",
      "Celsius scale",
      "Fahrenheit scale"
    ],
    "answer": "Not provided"
  },
  {
    "q": "If two objects are in thermal equilibrium with each other:",
    "options": [
      "They can not be undergoing an elastic collision",
      "They can not be moving",
      "They can not be at di?erent temperatures",
      "They can not have di?erent pressures"
    ],
    "answer": "Not provided"
  },
  {
    "q": "The equation for time dilation is given by:",
    "options": [
      "$$\\Delta t = \\sqrt \\gamma {\\text{ }}\\Delta t'$$",
      "$$\\Delta t' = \\frac{{\\Delta t}}{\\gamma }$$",
      "$$\\Delta t = \\frac{{\\Delta t'}}{\\gamma }$$",
      "$$\\Delta t' = \\gamma {\\text{ }}\\Delta t$$"
    ],
    "answer": "Not provided"
  },
  {
    "q": "It is more di?cult to measure the coe?cient of volume expansion of a liquid than that of a solid because:",
    "options": [
      "No relation exists between linear and volume expansion coe?cients",
      "liquid tends to evaporate",
      "liquid expands too much when heated",
      "The containing evessel also xpands"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Two sources of light are said to be coherent if the waves produced by them have the same:",
    "options": [
      "Amplitude",
      "Wavelength and constant phase difference",
      "Wavelength and amplitude",
      "Wavelength"
    ],
    "answer": "Not provided"
  },
  {
    "q": "In some movies, you sometimes see an actor looking in a mirror and you can see his face in the mirror. During the filming of this scene, what does the actor see in the mirror?",
    "options": [
      "The movie camera",
      "The director's face",
      "His face",
      "Your face"
    ],
    "answer": "Not provided"
  },
  {
    "q": "The temperature of the ice throughout the melting process when it is continuously heated by a small gas flame is:",
    "options": [
      "Remains constant initially and then increases.",
      "Increases until it turns into liquid water.",
      "Rises gradually.",
      "Remains constant."
    ],
    "answer": "Not provided"
  },
  {
    "q": "When an object reflects or emits light equally across all wavelengths, it appear _____ to our eyes?",
    "options": [
      "Black",
      "Red",
      "Green",
      "White"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Polarization of light is defined as:",
    "options": [
      "The process of light passing through a polar bear.",
      "The process of light aligning with Earth's magnetic field.",
      "The process of light vibrating in a specific direction.",
      "The process of light changing its color."
    ],
    "answer": "Not provided"
  },
  {
    "q": "To observe interference in thin films with a light of wavelength λ, the thickness of the film:",
    "options": [
      "Undetermined",
      "Should be of the order of λ",
      "Should be much smaller than λ",
      "Should be much larger than λ"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Maxwell’s equations predict that the speed of light in free space is",
    "options": [
      "function of the distance from the source",
      "independent of frequency",
      "decreasing function of frequency",
      "an increasing function of frequency"
    ],
    "answer": "Not provided"
  },
  {
    "q": "According to the Second Law of Thermodynamics, what is the maximum efficiency a nuclear reactor with a core temperature of 300 K and rejecting heat at 30 K can achieve?",
    "options": [
      "0.9",
      "0.824",
      "0.2",
      "0.47"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Which of the following best describes the nature of light?",
    "options": [
      "Light is electromagnetic wave.",
      "Light is composed of electrons only",
      "Light is composed of aether particles.",
      "Light is a longitudnal wave."
    ],
    "answer": "Not provided"
  },
  {
    "q": "The special theory of relativity is based on:",
    "options": [
      "Three postulates",
      "Two postulates",
      "Five postulates",
      "Four postulates"
    ],
    "answer": "Not provided"
  },
  {
    "q": "If a glass of water is placed in the open atmosphere and no heat is exchanged between them, the state of the system is:",
    "options": [
      "Thermal expansion.",
      "Thermal resistance.",
      "Thermal difference.",
      "Thermal equilibrium."
    ],
    "answer": "Not provided"
  },
  {
    "q": "For holography we use a beam of:",
    "options": [
      "LASER",
      "X – rays",
      "ß – rays",
      "α – rays"
    ],
    "answer": "Not provided"
  },
  {
    "q": "How does a Polaroid filter work to polarize light?",
    "options": [
      "By selectively transmitting light waves vibrating in a specific direction.",
      "By reversing the direction of light waves passing through it.",
      "By absorbing all colors of light except the desired color.",
      "By amplifying the intensity of light waves passing through it."
    ],
    "answer": "Not provided"
  },
  {
    "q": "What is the unit of the Stefan-Boltzmann constant (σ)?",
    "options": [
      "Joule/sec",
      "m/s",
      "Watt/(m2⋅K4)",
      "N⋅m2/kg2"
    ],
    "answer": "Not provided"
  },
  {
    "q": "The efficiency of a heat engine is always less than one because:",
    "options": [
      "The temperature of the reservoirs is constant.",
      "Some work is always lost as heat.",
      "Heat is converted entirely into work.",
      "Some heat is always lost to the surroundings."
    ],
    "answer": "Not provided"
  },
  {
    "q": "Why does the temperature of boiling water remain constant (at 100o C) despite continuous heating?",
    "options": [
      "Heat changes the phase of water.",
      "Heat lowers the surrounding pressure.",
      "Heat escapes rapidly.",
      "Heat increases the volume of water."
    ],
    "answer": "Not provided"
  },
  {
    "q": "Which of the following waves do not travel at speed of light?",
    "options": [
      "Radio waves",
      "Sound waves",
      "Heat waves",
      "X – rays"
    ],
    "answer": "Not provided"
  },
  {
    "q": "A balloon is filled with cold air and placed in a warm room. It is NOT in thermal equilibrium with the air of the room until:",
    "options": [
      "It stops expanding",
      "It rises to the ceiling",
      "It sinks to the floor",
      "It starts to contract"
    ],
    "answer": "Not provided"
  },
  {
    "q": "The distance between two adjacent bright fringes is:",
    "options": [
      "d/λL",
      "λd /L",
      "λL/d",
      "L/λd"
    ],
    "answer": "Not provided"
  },
  {
    "q": "The wavelength of radiation at 1000 kelvin for a black body is:",
    "options": [
      "2.9×10-3 m",
      "2.9×10-3 cm",
      "2.9×10-6 m",
      "2.9×10-6 cm"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Polarization experiments provide evidence that light is:",
    "options": [
      "nearly monochromatic",
      "some type of wave",
      "longitudinal wave",
      "transverse wave"
    ],
    "answer": "Not provided"
  },
  {
    "q": "A heat of transformation of a substance is:",
    "options": [
      "The same as the heat capacity",
      "The energy absorbed as heat during a phase transformation",
      "The energy per unit mass absorbed as heat during a phase transformation",
      "The same as the specific heat"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Two events occur 100m apart with an intervening time interval of 0.60µs.The speed of a reference frame in which they occur at the same coordinate is:",
    "options": [
      "0.25c",
      "1.1c",
      "0.56c",
      "0"
    ],
    "answer": "Not provided"
  },
  {
    "q": "The two metallic strips that constitute some thermostats must di?er in:",
    "options": [
      "Mass",
      "Rate at which they conduct heat",
      "Coe?cient of linear expansion",
      "Thickness\n\nLength"
    ],
    "answer": "Not provided"
  },
  {
    "q": "The reason there are two slits, rather than one, in a Young’s experiment is:",
    "options": [
      "to increase the intensity",
      "one slit is for frequency, the other for wavelength",
      "to create a path length difference",
      "one slit is for  Electric fields , the other is for Magnetic fields"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Why do individuals with hypermetropia have difficulty seeing nearby objects clearly?",
    "options": [
      "Eyes focus light behind the retina",
      "Eyes can't detect light wavelengths",
      "Eyes have a perfect focal length",
      "Eyes focus light in front of the retina"
    ],
    "answer": "Not provided"
  },
  {
    "q": "The least distance of distinct vision for normal eye:",
    "options": [
      "5 cm",
      "10 cm",
      "50 cm",
      "25 cm"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Metal pipes, used to carry water, sometimes burst in the winter because:",
    "options": [
      "Metal becomes brittle when cold",
      "Metal contractst more han water",
      "Water expands when it freezes",
      "Outside of the pipe contracts more than the inside"
    ],
    "answer": "Not provided"
  },
  {
    "q": "The speed of light in a vacuum is approximately:",
    "options": [
      "3,000 km/s",
      "300 km/s",
      "300,000 km/s",
      "30,000 km/s"
    ],
    "answer": "Not provided"
  },
  {
    "q": "How is the mechanical equivalent of heat quantified in terms of calories and joules?",
    "options": [
      "1 cal = 1 Joule",
      "1 kcal = 4.186 Joule",
      "1 cal = 4.186 Joule",
      "1 kcal = 1 Joule"
    ],
    "answer": "Not provided"
  },
  {
    "q": "An erect object is located between a concave mirror and its focal point. Its image is:",
    "options": [
      "Real, inverted, and larger than the object",
      "Real, erect, and larger than the object",
      "Virtual, erect, and larger than the object",
      "Virtual, inverted, and larger than the object"
    ],
    "answer": "Not provided"
  },
  {
    "q": "How does a refrigerator differ from a heat engine in terms of its operation?",
    "options": [
      "refrigerator is always 100% efficient.",
      "refrigerator is a heat engine working in reverse.",
      "refrigerator operates at a single temperature.",
      "refrigerator only absorbs heat."
    ],
    "answer": "Not provided"
  },
  {
    "q": "The \"strength\" of a lens is measured in _________.",
    "options": [
      "Lense meter",
      "Diopters",
      "Meters",
      "Provatans"
    ],
    "answer": "Not provided"
  },
  {
    "q": "In order that a single process is both isothermal and isobaric:",
    "options": [
      "change of phase is essential",
      "One must use a solid",
      "One may use any real gas such as N2",
      "One must use an ideal gas"
    ],
    "answer": "Not provided"
  },
  {
    "q": "For an electron, the rest mass energy is:",
    "options": [
      "0.711 MeV",
      "0.511 MeV",
      "0.411 MeV",
      "0.611 MeV"
    ],
    "answer": "Not provided"
  },
  {
    "q": "In an adiabatic process:",
    "options": [
      "The absorbed as heat equals the change in internal energy",
      "The energy absorbed as heat equals the work done by the system on its environment",
      "The work done by the environment on the system equals the change in internal energy",
      "The energy absorbed as heat equals the work done by the environment on the system"
    ],
    "answer": "Not provided"
  },
  {
    "q": "For a heat engine operating between a high temperature TH and a low temperature TC, the efficiency ɛ is given by:",
    "options": [
      "$ɛ = {T_H+T_C \\over T_H}$",
      "$ɛ = 1+{T_C \\over T_H}$",
      "$ɛ = {T_H-T_C \\over T_C}$",
      "$ɛ = 1-{T_C \\over T_H}$"
    ],
    "answer": "Not provided"
  },
  {
    "q": "The ratio of the size of image to the size of object:",
    "options": [
      "Angular magnification",
      "Resolving power",
      "Critical angle",
      "Linear magnification"
    ],
    "answer": "Not provided"
  },
  {
    "q": "The phenomena in which a material emits different colours after being exposed to a specific light color is:",
    "options": [
      "Fluorescence",
      "Reflection",
      "Phosphorescence",
      "Refraction"
    ],
    "answer": "Not provided"
  },
  {
    "q": "No lens is perfect because___________________.",
    "options": [
      "They are not cleaned with accuracy",
      "They are not perfectly spherical",
      "It is nearly impossible to polish them",
      "They suffer from aberration"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Antiparticle of electron is:",
    "options": [
      "Neutron",
      "Photon",
      "Proton",
      "Positron"
    ],
    "answer": "Not provided"
  },
  {
    "q": "The points of constructive interference of the light are:",
    "options": [
      "Always bright",
      "May be bright or dark",
      "Neither bright nor dark",
      "Always dark"
    ],
    "answer": "Not provided"
  },
  {
    "q": "The formula ${Q\\over t} =kA {ΔT \\over L}$ allows us to determine:",
    "options": [
      "Amount of heat transferred over time.",
      "Thermal resistance of the material.",
      "Change in temperature due to heat transfer.",
      "Heat capacity of the material."
    ],
    "answer": "Not provided"
  },
  {
    "q": "If the temperature in Celsius is 20°C, what would it be in Fahrenheit?",
    "options": [
      "56°F",
      "44°F",
      "36°F",
      "68°F"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Which of the following electromagnetic radiations has photons with the greatest energy?",
    "options": [
      "blue light",
      "x rays",
      "yellow light",
      "radio waves"
    ],
    "answer": "Not provided"
  },
  {
    "q": "When two objects come to common temperature, the body is said to be in:",
    "options": [
      "Dynamic equilibrium",
      "Thermal equilibrium",
      "Rotational equilibrium",
      "Static equilibrium"
    ],
    "answer": "Not provided"
  },
  {
    "q": "A basic postulate of Einstein’s theory of relativity is:",
    "options": [
      "Light has both wave and particle properties",
      "Moving rods are shorter than when they are at rest",
      "The laws of physics must be the same for observers moving with uniform velocity relative to each other",
      "Moving clocks run more slowly than when they are at rest"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Which color of light has the shortest wavelength in the visible spectrum?",
    "options": [
      "Blue",
      "Red",
      "Violet",
      "Green"
    ],
    "answer": "Not provided"
  },
  {
    "q": "What does the coefficient \"α\" represent, in the context of material expansion?",
    "options": [
      "The change in volume per unit temperature.",
      "The initial length of the rod.",
      "The change in length per unit temperature.",
      "The shape distortion of metals."
    ],
    "answer": "Not provided"
  },
  {
    "q": "On the Centigrade scale, what do the two fixed points (0 and 100) correspond to?",
    "options": [
      "The freezing and boiling points of water.",
      "The volume and pressure of the gas.",
      "The absolute zero points of different gases.",
      "The two ends of the rubber tube."
    ],
    "answer": "Not provided"
  },
  {
    "q": "Path variables in thermodynamics refer to:",
    "options": [
      "Process-dependent values.",
      "Internal energy-related variables.",
      "Initial and final state determinants.",
      "Heat transfer descriptors."
    ],
    "answer": "Not provided"
  },
  {
    "q": "What does the study of statistical mechanics aim to predict?",
    "options": [
      "Individual molecule properties",
      "Chemical reactions",
      "Atomic behaviors",
      "Macroscopic properties from individual molecules"
    ],
    "answer": "Not provided"
  },
  {
    "q": "According to the special theory of relativity:",
    "options": [
      "rod moving rapidly side ways is shorter along its length",
      "All forms of energy have mass-like properties",
      "Momentum is not conserved in high speed collisions",
      "Moving particles lose mass"
    ],
    "answer": "Not provided"
  },
  {
    "q": "If 2.5 calories of heat are used to lift a weight, how much mechanical work is done, assuming all the heat is converted into work? (Hint: 1 cal = 4.186 Joule)",
    "options": [
      "5.6 J",
      "8.36 J",
      "10.46 J",
      "9.14 J"
    ],
    "answer": "Not provided"
  },
  {
    "q": "How does polishing a surface affect its reflection properties?",
    "options": [
      "It reduces diffusiveness.",
      "It changes the color of the surface.",
      "It increases diffusiveness.",
      "It makes the surface transparent."
    ],
    "answer": "Not provided"
  },
  {
    "q": "What is the name of the relationship between the peak wavelength for a blackbody radiator and its temperature?",
    "options": [
      "Snell's Law",
      "Young's Law",
      "Stefan-Boltzmann Law",
      "Wien's Law"
    ],
    "answer": "Not provided"
  },
  {
    "q": "According to the theory of relativity:",
    "options": [
      "Momentum is not conserved in high speed collisions",
      "None of these are true",
      "The speed of light must be measured relative to the ether",
      "Moving clocks run fast"
    ],
    "answer": "Not provided"
  },
  {
    "q": "The SI unit to measure heat energy is:",
    "options": [
      "Kelvin",
      "Joule",
      "Watt",
      "Calorie"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Considering the components of a telescope, which part is primarily responsible for collecting light from distant objects?",
    "options": [
      "Eyepiece",
      "Objective lens",
      "Focusing knob",
      "Diaphragm"
    ],
    "answer": "Not provided"
  },
  {
    "q": "2dSinθ = mλ is called:",
    "options": [
      "Refraction equation",
      "Laplace’s equation",
      "Bragg equation",
      "Reflection equation"
    ],
    "answer": "Not provided"
  },
  {
    "q": "In which medium does light travel the fastest?",
    "options": [
      "Water",
      "Air",
      "Vacuum",
      "Glass"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Which of the following statement best describes heat capacity?",
    "options": [
      "Amount of heat requird to rise the temperature by 1 oC.",
      "The ability of a body to retain heat.",
      "Resistance of a body to temperature change.",
      "Heat needed to melt a substance."
    ],
    "answer": "Not provided"
  },
  {
    "q": "If an ideal gas is heated, what happens to the frequency of collisions of its molecules with the container walls?",
    "options": [
      "Decreases",
      "Increases",
      "Remains the same",
      "Becomes zero"
    ],
    "answer": "Not provided"
  },
  {
    "q": "The rest mass of photon is:",
    "options": [
      "Zero",
      "Infinite",
      "3 × 108 kg",
      "1.6 × 10-27 kg"
    ],
    "answer": "Not provided"
  },
  {
    "q": "When light passes from air to glass, it bends:",
    "options": [
      "toward the normal without changing speed",
      "toward the normal and speeds up",
      "toward the normal and slows down",
      "away from the normal and slows down"
    ],
    "answer": "Not provided"
  },
  {
    "q": "At constant temperature, if the volume of a given mass of the gas is doubled, the density of the gas becomes:",
    "options": [
      "Half",
      "Double",
      "Four times",
      "Remains constant"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Which of the following statements accurately describes the relationship between the wavelength (λ) and temperature (T) according to Wien's displacement law?",
    "options": [
      "Undetermined",
      "The wavelength decreases with temperature.",
      "The wavelength increases with temperature.",
      "The wavelength is independent of temperature."
    ],
    "answer": "Not provided"
  },
  {
    "q": "When white light passes through a prism, it splits into ________ colors.",
    "options": [
      "8",
      "6",
      "9",
      "7"
    ],
    "answer": "Not provided"
  },
  {
    "q": "If energy of photon is E, it is equivalent to mass:",
    "options": [
      "c2/E",
      "Ec2",
      "E/c2",
      "Ec"
    ],
    "answer": "Not provided"
  },
  {
    "q": "When a substance is heated, its particles:",
    "options": [
      "Become more ordered.",
      "Lose kinetic energy.",
      "Become more random.",
      "Gain potential energy."
    ],
    "answer": "Not provided"
  },
  {
    "q": "An isothermal process for an ideal gas is represented on a p-V diagram by:",
    "options": [
      "horizontal line",
      "portion of a parabola",
      "portion of a hyperbola",
      "portion of an ellipse"
    ],
    "answer": "Not provided"
  },
  {
    "q": "The Light from any ordinary source (such as a flame) is usually:",
    "options": [
      "Plane polarized",
      "Monochromatic",
      "Un-polarized",
      "Circularly polarized"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Of the following which might NOT vanish over one cycle of a cyclic process?",
    "options": [
      "The change in the internal energy of the substance",
      "The work done by the substance",
      "The change in pressure of the substance",
      "The change in the temperature of the substance"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Huygens’ construction can be used only:",
    "options": [
      "for transverse waves",
      "for light",
      "for all of the above and other situations",
      "for an electromagnetic wave"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Which of the following is NOT considered a thermodynamic variable?",
    "options": [
      "Pressure",
      "Volume",
      "Energy",
      "Temperature"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Light from some stars shows an apparent change in frequency because of:",
    "options": [
      "Relative motion",
      "Reflection",
      "Di?raction",
      "Interference"
    ],
    "answer": "Not provided"
  },
  {
    "q": "In a reversible isothermal process, 600 J of heat is absorbed by a system at a constant temperature of 300 K. The change in entropy (ΔS) for the system is:",
    "options": [
      "ΔS = 180 J/K",
      "ΔS = 20 J/K",
      "ΔS = 2.0 J/K",
      "ΔS = 1.67 J/K"
    ],
    "answer": "Not provided"
  },
  {
    "q": "The relationship between the linear and volumetric expansion coefficients is:",
    "options": [
      "β = α3",
      "β = 3α",
      "α = β3",
      "α = 3β"
    ],
    "answer": "Not provided"
  },
  {
    "q": "If the temperature of a black body is tripled, how does the power radiated per unit area change according to the Stefan-Boltzmann Law?",
    "options": [
      "Increases by a factor of 9.",
      "Increases by a factor of 81.",
      "Increases by a factor of 27.",
      "Increases by a factor of 3."
    ],
    "answer": "Not provided"
  },
  {
    "q": "The concept of direction is purely:",
    "options": [
      "Absolute",
      "Relative",
      "Relative to the sun",
      "Relative to stars"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Ole Rømer estimated the value for the speed of light to be:",
    "options": [
      "100,000 meters/sec",
      "225,000 meters/sec",
      "299,792,458.6 meters/sec",
      "500,000 meters/sec"
    ],
    "answer": "Not provided"
  },
  {
    "q": "The theoretical upper limit for the frequency of electromagnetic waves is:",
    "options": [
      "the greatest x-ray frequency",
      "there is no upper limit",
      "just slightly greater than that of red light",
      "just slightly less than that of blue light"
    ],
    "answer": "Not provided"
  },
  {
    "q": "The specific heat of a substance is:",
    "options": [
      "The amount of heat energy per unit mass to raise the substance from its freezing to its boiling point",
      "The amount of heat energy to change the state of one gram of the substance",
      "The amount of heat energy per unit mass to raise the temperature of the substance by1?C",
      "The amount of heat energy per unit mass emitted by oxidizing the substance"
    ],
    "answer": "Not provided"
  },
  {
    "q": "According to the kinetic theory of gases, the pressure of a gas is due to:",
    "options": [
      "Average kinetic energy of the molecules",
      "Force of repulsion between the molecules",
      "Change of kinetic energy of molecules as they strike the wall",
      "Change of momentum of molecules as the strike the wall"
    ],
    "answer": "Not provided"
  },
  {
    "q": "\"LASER\" is the abbreviation of:",
    "options": [
      "Light Amplification by the Synthesized Emission of Radiation",
      "Lightwave Amplification by the Stimulated Emission of Rays",
      "Light Amplification by the Stimulated Emission of Radiation",
      "Luminous Amplification by the Stimulated Emission of Rays"
    ],
    "answer": "Not provided"
  },
  {
    "q": "The image produced by a convex mirror of an erect object in front of the mirror is always:",
    "options": [
      "Real, erect, and larger than the object",
      "Real, erect, and smaller than the object",
      "Virtual, erect, and smaller than the object",
      "Virtual, erect, and larger than the object"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Internal energy of a gas is proportional to:",
    "options": [
      "Temperature",
      "Pressure",
      "Number of molecules",
      "Volume"
    ],
    "answer": "Not provided"
  },
  {
    "q": "In meta stable state, electrons reside:",
    "options": [
      "10-8 sec",
      "10-13 sec",
      "10-3 sec",
      "10-5 sec"
    ],
    "answer": "Not provided"
  },
  {
    "q": "The value of absolute zero is:",
    "options": [
      "-32 °F",
      "-273.15 K",
      "0 K",
      "-460 °C"
    ],
    "answer": "Not provided"
  },
  {
    "q": "If the ratio of maximum wavelength for black body radiation is 3:6, the ratio of temperature for a black body is:",
    "options": [
      "3:6",
      "6:3",
      "1:2",
      "2:1"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Fermat's principle, also known as:",
    "options": [
      "The principle of least resistance",
      "The principle of constant speed",
      "The principle of least time",
      "The principle of least frequency"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Which instrument would be best suited for observing celestial bodies such as stars, planets, and galaxies?",
    "options": [
      "Simple microscope",
      "Compound microscope",
      "Both simple and compound microscopes",
      "Telescope"
    ],
    "answer": "Not provided"
  },
  {
    "q": "The focal length of a spherical mirror is N times its radius of curvature where N is:",
    "options": [
      "2",
      "1/2",
      "1/4",
      "1"
    ],
    "answer": "Not provided"
  },
  {
    "q": "If the source temperature is raised, the efficiency of heat engine will:",
    "options": [
      "Decrease",
      "Remain constant",
      "First increase then decrease",
      "Increase"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Heat is defined as:",
    "options": [
      "The degree of hotness.",
      "Flow of internal energy due to a temperature difference.",
      "type of phlogiston.",
      "colored, weightless fluid."
    ],
    "answer": "Not provided"
  },
  {
    "q": "There is no way to detect:",
    "options": [
      "State of motion",
      "Accelerated motions",
      "Static motion",
      "Absolute uniform motion"
    ],
    "answer": "Not provided"
  },
  {
    "q": "The type of microscope that uses a single convex lens to magnify objects is:",
    "options": [
      "Simple microscope",
      "Compound microscope",
      "Telescope",
      "Electron microscope"
    ],
    "answer": "Not provided"
  },
  {
    "q": "The plants look green. It is because they have chlorophyll in them. Chlorophyll makes leaves green to absorb ___________.",
    "options": [
      "Green only",
      "Blue only",
      "Red and blue both",
      "Red only"
    ],
    "answer": "Not provided"
  },
  {
    "q": "There is a temperature at which the reading on the Kelvin scale is numerically:",
    "options": [
      "Less than zero",
      "Lower than that on the Celsius scale",
      "Equal to that on the Fahrenheit scale",
      "Equal to that on the Celsius scale"
    ],
    "answer": "Not provided"
  },
  {
    "q": "The threshold frequency in photoelectric effect is described as:",
    "options": [
      "Indicates the maximum energy of the incident light.",
      "Sets the minimum energy required for electron ejection.",
      "Determines the speed of emitted electrons.",
      "Determines the color of the emitted light."
    ],
    "answer": "Not provided"
  },
  {
    "q": "The units of Stefan Boltzman constant are _______.",
    "options": [
      "W m^-2K^-4",
      "W m^-2K^4",
      "W^-2 m^-2K^-4",
      "W m^2K^-4"
    ],
    "answer": "Not provided"
  },
  {
    "q": "How is the \"strength\" of a lens (measured in diopters) related to its focal length?",
    "options": [
      "Directly proportional",
      "Inversely proportional",
      "No relation",
      "Equal"
    ],
    "answer": "Not provided"
  },
  {
    "q": "What would be the angle of incidence for a light ray with a zero reflection angle?",
    "options": [
      "45 degrees",
      "0 degree",
      "90 degrees",
      "180 degrees"
    ],
    "answer": "Not provided"
  },
  {
    "q": "The heat capacity of an object is:",
    "options": [
      "The amount of heat energy per kilogram that raises its temperature by1?C",
      "The amount of heat energy that raises its temperature by1?C",
      "The amount of heat energy that changes its state without changing its temperature",
      "The ratio of its specific heat to that of water"
    ],
    "answer": "Not provided"
  },
  {
    "q": "When an electromagnetic wave strikes the boundary of a denser medium, it undergoes:",
    "options": [
      "phase change of 180° upon reflection.",
      "phase change of 90° upon reflection.",
      "phase change of 90° upon refraction.",
      "phase change of 180° upon refraction."
    ],
    "answer": "Not provided"
  },
  {
    "q": "A Kelvin thermometer and a Fahrenheit thermometer both give the same reading for a certain sample. The corresponding Celsius temperature is:",
    "options": [
      "301?C",
      "574?C",
      "614?C",
      "232?C"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Which type of defect is caused by the different wavelengths of light being focused at different distances?",
    "options": [
      "Chromatic aberration",
      "Hypermetropia",
      "Myopia",
      "Spherical aberration"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Interference of light is evidence that:",
    "options": [
      "light is a transverse wave",
      "light is electromagnetic in character",
      "light is a wave phenomenon",
      "the speed of light is very large"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Length contraction refers to:",
    "options": [
      "Expansion of space",
      "Shortening of space",
      "Space evaluation",
      "Stationary space"
    ],
    "answer": "Not provided"
  },
  {
    "q": "The efficiency of a heat engine is always:",
    "options": [
      "Less than 1",
      "zero",
      "More than 1",
      "1"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Time dilation is more prominent at:",
    "options": [
      "High speed",
      "Rest",
      "Constant speed",
      "Low speed"
    ],
    "answer": "Not provided"
  },
  {
    "q": "The photoelectric effect is described as:",
    "options": [
      "Metals emit light when electrons move from one energy level to another.",
      "Electrons are ejected from a metal surface under the influence of light.",
      "Electrons move freely in a metal under the influence of an electric field.",
      "Electrons are emitted from a metal surface when it is heated."
    ],
    "answer": "Not provided"
  },
  {
    "q": "Entropy measures the:",
    "options": [
      "Disorder of the system",
      "Orderliness of the system",
      "Energy of the system",
      "Order of the system"
    ],
    "answer": "Not provided"
  },
  {
    "q": "The most refined form of matter is:",
    "options": [
      "Smog",
      "Fog",
      "Smoke",
      "Light"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Time dilation and length contraction are essential concepts in understanding:",
    "options": [
      "Classical mechanics",
      "Einstein's theory of relativity",
      "Bio-physics",
      "Electromagnetism"
    ],
    "answer": "Not provided"
  },
  {
    "q": "When an electromagnetic wave strikes the boundary of a rare medium, it undergoes:",
    "options": [
      "phase change of 180° upon refraction.",
      "phase change of 0° upon reflection.",
      "phase change of 0° upon refraction.",
      "phase change of 180° upon reflection."
    ],
    "answer": "Not provided"
  },
  {
    "q": "Light passes from a material with index of refraction 1.3 into one with index of refraction 1.2. Compare to incident ray, the refracted ray will ___________.",
    "options": [
      "Not bend",
      "Have more intensity",
      "Bend towards the normal",
      "Bend away from the normal"
    ],
    "answer": "Not provided"
  },
  {
    "q": "What is the unit of magnification factor?",
    "options": [
      "degree.Kelvin",
      "no units",
      "radian.Kelvin",
      "meter.Kelvin"
    ],
    "answer": "Not provided"
  },
  {
    "q": "The speed of light in free space is:",
    "options": [
      "Unpredictable",
      "Constant",
      "Less than that in air",
      "Variable"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Heat is:",
    "options": [
      "temperature di?erence",
      "Energy transferred by virtue of a temperature di?erence",
      "Energy transferred by macroscopic work",
      "Energy content of an object"
    ],
    "answer": "Not provided"
  },
  {
    "q": "In which year did Ole Rømer conduct the experiment to estimate the speed of light using the timing of the eclipse of Jupiter's moon?",
    "options": [
      "1675",
      "1764",
      "1558",
      "1842"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Which celestial body is involved in Ole Rømer's experiment to measure the speed of light?",
    "options": [
      "Saturn",
      "Mars",
      "Jupiter",
      "Venus"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Why does the entropy of a gas increase when it is heated?",
    "options": [
      "Atoms move slower.",
      "Atoms become heavier.",
      "Atoms move faster.",
      "Atoms collide less frequently."
    ],
    "answer": "Not provided"
  },
  {
    "q": "How do rays reflect off a concave lens compared to a convex lens?",
    "options": [
      "Converge",
      "Diverge",
      "Scatter",
      "No change"
    ],
    "answer": "Not provided"
  },
  {
    "q": "The equation of state for an ideal gas is:",
    "options": [
      "ΔE = Δq + Δw",
      "E = q + w",
      "PV = NkBT",
      "PV = NkBR"
    ],
    "answer": "Not provided"
  },
  {
    "q": "When you stand in front of a plane mirror, your image is:",
    "options": [
      "virtual, erect, and smaller than you",
      "real, inverted, and the same size as you",
      "real, erect, and smaller than you",
      "virtual, erect, and the same size as you"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Thin films formed due to detergents (soap / shampoo) are due to ______.",
    "options": [
      "diffraction",
      "reflection",
      "interference",
      "absorption"
    ],
    "answer": "Not provided"
  },
  {
    "q": "A particle with zero mass and energy E carries momentum:",
    "options": [
      "Ec",
      "E/c",
      "vEc",
      "Ec2"
    ],
    "answer": "Not provided"
  },
  {
    "q": "The resolving power of a telescope can be increased by:",
    "options": [
      "inserting a correction lens between objective and eyepiece",
      "increasing the objective focal length and decreasing the eyepiece focal length",
      "increasing the lens diameters",
      "decreasing the lens diameters"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Hotness or coldness of an object is represented in terms of:",
    "options": [
      "Chemical energy",
      "Electrical energy",
      "Temperature",
      "Heat"
    ],
    "answer": "Not provided"
  },
  {
    "q": "A light entering into glass prism from air does not give change in its:",
    "options": [
      "Wavelength",
      "Direction",
      "Velocity",
      "Frequency"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Following are the ways by which light can interact with matter, EXCEPT:",
    "options": [
      "Interference",
      "Emission",
      "Absorption",
      "Transmission"
    ],
    "answer": "Not provided"
  },
  {
    "q": "What must be supplied to melt a solid without a temperature change?",
    "options": [
      "Kinetic energy",
      "Pressure",
      "Specific heat",
      "Latent heat of fusion"
    ],
    "answer": "Not provided"
  },
  {
    "q": "In special relativity, the factor γ is used to calculate:",
    "options": [
      "Length contraction",
      "Neither time dilation nor length contraction",
      "Both time dilation and length contraction",
      "Time dilation"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Which of the following device work on the principle of interference of light:",
    "options": [
      "Compound microscope",
      "Telescope",
      "Young’s double slit experiment",
      "Newton rings apparatus"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Which of the following is true of all virtual images?",
    "options": [
      "They are smaller than the objects",
      "They can be seen but not photographed",
      "They are larger than the objects",
      "None of these"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Which temperature scale is considered most suited for scientific purposes?",
    "options": [
      "Kelvin.",
      "Fahrenheit.",
      "Centigrade.",
      "Absolute zero."
    ],
    "answer": "Not provided"
  },
  {
    "q": "The relation for converting the temperature scale from Celsius to Fahrenheit is:",
    "options": [
      "$T_F = {9\\over5} × T_C +32$",
      "$T_C = {5\\over9} × (T_F-32)$",
      "$T_F = T_C − 273.15$",
      "$T_C = T_F + 273.15$"
    ],
    "answer": "Not provided"
  },
  {
    "q": "If you have a convex spherical mirror with silvering on its outside surface, how will the radius of curvature be defined?",
    "options": [
      "Zero",
      "Undefined",
      "Negative",
      "Positive"
    ],
    "answer": "Not provided"
  },
  {
    "q": "All-natural process proceeds towards a state of:",
    "options": [
      "Remains constant",
      "Increase in entropy",
      "Decrease in entropy",
      "None of these"
    ],
    "answer": "Not provided"
  },
  {
    "q": "In the constant volume gas thermometer, what is the role of the tube on the right side?",
    "options": [
      "It measures the pressure.",
      "It changes the gas composition.",
      "It keeps the reference level fixed.",
      "It determines the gas volume."
    ],
    "answer": "Not provided"
  },
  {
    "q": "Fiber optics works on the principle of _____________.",
    "options": [
      "Fermat's principle",
      "Snell's law",
      "Young's principle",
      "Total internal reflection"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Total internal reflection is possible when a light ray travels from:",
    "options": [
      "Air to glass",
      "Air to water",
      "Glass to water",
      "Water to glass"
    ],
    "answer": "Not provided"
  },
  {
    "q": "A virtual image is one:",
    "options": [
      "from which light rays diverge as they pass through",
      "toward which light rays converge but do not pass through",
      "from which light rays diverge but do not pass through",
      "toward which light rays converge and pass through"
    ],
    "answer": "Not provided"
  },
  {
    "q": "When an iron rod is heated, the colors at different temperatures are noted. Which of the following colors shows that the iron rod is at the lowest temperature?",
    "options": [
      "Orrange",
      "Blue",
      "Red",
      "White"
    ],
    "answer": "Not provided"
  },
  {
    "q": "An erect object is in front of a convex mirror a distance greater than the focal length. The image is:",
    "options": [
      "Real, inverted, and larger than the object",
      "Virtual, erect, and smaller than the object",
      "Real, inverted, and smaller than the object",
      "Virtual, inverted, and larger than the object"
    ],
    "answer": "Not provided"
  },
  {
    "q": "According to special relativity, the speed of light is:",
    "options": [
      "Infinite",
      "Variable based on the observer's motion",
      "Always constant",
      "Zero"
    ],
    "answer": "Not provided"
  },
  {
    "q": "In Young’s double slit experiment, the position of the bright fringe is given by:",
    "options": [
      "Ym = mλd/L",
      "Ym = mLd/λ",
      "Ym = mL/λd",
      "Ym = mLλ/d"
    ],
    "answer": "Not provided"
  },
  {
    "q": "When an object (iron/tungsten) is heated, it emits light. It emits infrared (IR) light when it is heated at a temperature __________.",
    "options": [
      "above 2500 degree C",
      "Between 800 degree C to 1600 degree C",
      "Between 1600 degree C to 2500 degree C",
      "Below 800 degree C"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Emission of electron by metals on heating is called:",
    "options": [
      "Compton emission",
      "Photoelectric emission",
      "Secondary emission",
      "Thermionic emission"
    ],
    "answer": "Not provided"
  },
  {
    "q": "A gas which strictly obeys the gas laws under all conditions of temperature and pressure is called:",
    "options": [
      "Ideal gas",
      "Inert gas",
      "Real gas",
      "Simple gas"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Evidence that molecules of a gas are in constant motion is:",
    "options": [
      "Two gases interdi?use quickly",
      "Gases area easily compressed",
      "Warm air rises",
      "Winds exert pressure"
    ],
    "answer": "Not provided"
  },
  {
    "q": "What happens if a point source is placed at the focus of a convex lens?",
    "options": [
      "Rays reflect back",
      "Rays scatter",
      "Parallel beam emerges",
      "Rays converge to a point"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Net change in entropy of a system in a Carnot cycle is:",
    "options": [
      "Zero",
      "Negative",
      "One",
      "Positive"
    ],
    "answer": "Not provided"
  },
  {
    "q": "A thermometer indicates 98.6?C.It may be:",
    "options": [
      "In a cup of hot tea",
      "Outdoors on ac old day",
      "In a normal person’s mouth",
      "In a comfortable room"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Which of the following is NOT TRUE about index of refraction?",
    "options": [
      "Its value ranges from 0.1 – 1.9",
      "For glass its value is 1.5",
      "It has no units",
      "It is a ratio between speeds"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Based on statistical mechanics, entropy of a system is defined as:",
    "options": [
      "The degree of randomness",
      "The degree of molecular attraction",
      "The degree of temperature",
      "The degree of order"
    ],
    "answer": "Not provided"
  },
  {
    "q": "In everyday life the effect of diffraction is more significant for sound than for light because that:",
    "options": [
      "Light has a much longer wavelength than sound.",
      "Insufficient Information.",
      "Light has a much shorter wavelength than sound.",
      "Light has a much shorter frequency than sound."
    ],
    "answer": "Not provided"
  },
  {
    "q": "The units of the Planck constant h are those of:",
    "options": [
      "Energy",
      "Frequency",
      "Angular momentum",
      "Momentum"
    ],
    "answer": "Not provided"
  },
  {
    "q": "For what purpose would a concave mirror be particularly useful, given its ability to produce virtual images that are smaller?",
    "options": [
      "Rear-view mirrors in cars",
      "Magnifying glasses",
      "Shaving mirrors",
      "Astronomy telescopes"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Which of the following does not show any interference pattern?",
    "options": [
      "thick film",
      "Excessively thin film",
      "wedged-shaped film",
      "Soap bubble"
    ],
    "answer": "Not provided"
  },
  {
    "q": "No entropy change is associated with:",
    "options": [
      "Isobaric process",
      "Isothermal process",
      "Remains constant",
      "Adiabatic process"
    ],
    "answer": "Not provided"
  },
  {
    "q": "What happens to the speed of light when it passes from a rare medium to a denser medium?",
    "options": [
      "It becomes zero",
      "It remains the same",
      "It increases",
      "It decreases"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Coherent sources of light mean ______________.",
    "options": [
      "They must have same frequency",
      "They must have same amplitude",
      "They must have fixed phase relative to each other",
      "They must have same speeds"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Aging process of the human body:",
    "options": [
      "Becomes fast at very high speed",
      "Remains constant",
      "Becomes slow by motion at very high speed",
      "None of these"
    ],
    "answer": "Not provided"
  },
  {
    "q": "The special theory of relativity is applicable to the object moving with maximum velocity equal to:",
    "options": [
      "More than speed of light",
      "Double the speed of light",
      "Less than speed of light",
      "Speed of light"
    ],
    "answer": "Not provided"
  },
  {
    "q": "The Stefan-Boltzmann constant (σ) has a value of:",
    "options": [
      "6.67×10−11 N⋅m2/kg2",
      "5.67×10−8 Watt/(m2⋅K4)",
      "6.63×10−34 Joule⋅sec",
      "3×108 m/s"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Fermat's principle helps to explain the phenomenon of:",
    "options": [
      "Diffraction",
      "Refraction",
      "Reflection",
      "Dispersion"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Length contraction is noticeable only in the direction:",
    "options": [
      "Perpendicular to motion",
      "Along the direction of motion",
      "Orthogonal to motion",
      "Independent of motion"
    ],
    "answer": "Not provided"
  },
  {
    "q": "If a lens has a focal length of 15 cm and another has 20 cm, which statement about their strengths in diopters is true?",
    "options": [
      "Strength isn't linked to focal length",
      "20 cm lens has higher strength",
      "Both lenses have equal strength",
      "15 cm lens has higher strength"
    ],
    "answer": "Not provided"
  },
  {
    "q": "During the time that latent heat is involved in a change of state:",
    "options": [
      "The temperature does not change",
      "Molecular activity remains constant",
      "The substance always expands",
      "chemical reaction takes place"
    ],
    "answer": "Not provided"
  },
  {
    "q": "During a slow adiabatic expansion of a gas:",
    "options": [
      "No energy enters or leaves as heat",
      "The pressure remains constant",
      "Energy is added as heat",
      "Work is done on the gas"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Which material would require the most heat to raise its temperature by 1°C?",
    "options": [
      "Metal",
      "Steam",
      "Water",
      "Ice"
    ],
    "answer": "Not provided"
  },
  {
    "q": "If the average kinetic energy of molecules in an ideal gas is KE at 200 K, then the average kinetic energy at 600 K will be:",
    "options": [
      "KE2",
      "4KE",
      "KE3",
      "3KE"
    ],
    "answer": "Not provided"
  },
  {
    "q": "According to the first law of thermodynamics, applied to a gas, the increase in the internal energy during any process:",
    "options": [
      "Equals the work done on the gas minus the heat input",
      "Equals the heat input plus the work done on the gas",
      "Is independent of the work done on the gas",
      "Equals the heat input minus the work done on the gas"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Constant-volume gas thermometers using di?erent gases all indicate nearly the same temperature when in contact with the same object if:",
    "options": [
      "The volumes are all the same",
      "The particle concentrations are all extremely small",
      "The pressures are all extremely large",
      "The volumes are all extremely large"
    ],
    "answer": "Not provided"
  },
  {
    "q": "When light is incident perpendicular to the surface, what will be the angle of incidence and the angle of reflection?",
    "options": [
      "Angle of incident = 0°, Angle of reflection = 0°",
      "Angle of incident = 0°, Angle of reflection = 90°",
      "Angle of incident = 90°, Angle of reflection = 0°",
      "Angle of incident = 45°, Angle of reflection = 0°"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Which of the following is a necessary condition for total internal reflection?",
    "options": [
      "The angle of incidence in the rarer medium must be greater than the critical angle.",
      "The angle of incidence in the denser medium must be greater than the critical angle.",
      "The angle of incidence in the denser medium must be less than the critical angle.",
      "The angle of reflection in the denser medium must be greater than the critical angle."
    ],
    "answer": "Not provided"
  },
  {
    "q": "The special theory of relativity treats the problem involving:",
    "options": [
      "Accelerated frames",
      "Inertial frames",
      "Any of these",
      "Non inertial frames"
    ],
    "answer": "Not provided"
  },
  {
    "q": "which of the following is the difference between sound and light waves:",
    "options": [
      "sound is not subject to diffraction",
      "sound is a torsional wave rather than a longitudinal wave",
      "sound is a longitudinal wave rather than a transverse wave",
      "sound does not require energy for its origin"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Which law or principle says that every point on a wave front may be considered a new wave source?",
    "options": [
      "Huygens’s Principle",
      "Snell's Law",
      "Superposition Principle",
      "Braggs law"
    ],
    "answer": "Not provided"
  },
  {
    "q": "In special relativity, the factor (γ) becomes significant as:",
    "options": [
      "Acceleration of the object approaches the speed of light",
      "Speed of the object approaches the speed of light",
      "Independent from the speed of the object",
      "Speed of the object approaches zero"
    ],
    "answer": "Not provided"
  },
  {
    "q": "As compared to the distance measured by an observer on Earth, the distance from Earth star measured by an observer in a moving spaceship would seem:",
    "options": [
      "Same",
      "Much larger",
      "Smaller",
      "Larger"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Bending of light around the edges of an obstacle called:",
    "options": [
      "Refraction",
      "Interference",
      "Polarization",
      "Diffraction"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Due to relative motion of observer and the frames of reference of events, time always:",
    "options": [
      "Continuous itself",
      "Stretches itself",
      "Contracts itself",
      "Statics itself"
    ],
    "answer": "Not provided"
  },
  {
    "q": "In special relativity, the factor $\\gamma$ is defined as:",
    "options": [
      "$${\\text{ }}\\gamma = \\sqrt {1 - {{\\left( {{\\text{v}}/c} \\right)}^2}}$$",
      "$${\\text{ }}\\gamma = 1 - {\\left( {{\\text{v}}/c} \\right)^2}$$",
      "$${\\text{ }}\\gamma = \\frac{1}{{\\sqrt {1 - {{\\left( {{\\text{v}}/c} \\right)}^2}} }}$$",
      "$${\\text{ }}\\gamma = \\frac{1}{{\\sqrt {1 + {{\\left( {{\\text{v}}/c} \\right)}^2}} }}$$"
    ],
    "answer": "Not provided"
  },
  {
    "q": "The relation between the radius of curvature and the focal length of a spherical mirror is given by:",
    "options": [
      "$f=R^2$",
      "$f={R\\over2}$",
      "$f=R$",
      "$f=2R$"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Who proposed that light striking a surface was made of packets called quanta?",
    "options": [
      "Maxwell",
      "Planck",
      "Aether",
      "Einstein"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Which method(s) of heat transfer can take place in vacuum?",
    "options": [
      "Convection",
      "Radiation",
      "Conduction",
      "Conduction & Convection"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Which property of light causes the formation of Newton's rings?",
    "options": [
      "Diffraction",
      "Interference",
      "Reflection",
      "Refraction"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Heat has the same units as:",
    "options": [
      "Temperature",
      "Work",
      "Heat capacity",
      "Energy/time"
    ],
    "answer": "Not provided"
  },
  {
    "q": "A solid of mass 2 kg is initially at its melting point. To completely melt the solid, how much heat is required, given the latent heat of fusion is 3.34×105 J/kg?",
    "options": [
      "6.68 × 105 J",
      "5.01 × 105 J",
      "1.67 × 105 Js",
      "3.34 × 105 J"
    ],
    "answer": "Not provided"
  },
  {
    "q": "In constructing a thermometer it is NECESSARY to use a substance that:",
    "options": [
      "Undergoes some change when heated or cooled",
      "Expands linearly with rising temperature",
      "Will not freeze",
      "Will not boil"
    ],
    "answer": "Not provided"
  },
  {
    "q": "During a process, a gas absorbs 150 J of heat and does 100 J of work. What is the change in the internal energy of gas?",
    "options": [
      "150 J",
      "100 J",
      "250 J",
      "50 J"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Evidence that a gas consists mostly of empty space is the fact that:",
    "options": [
      "Gases are transparent",
      "Gases exert pressure on the walls of their containers",
      "Heating a gas increases the molecular motion",
      "The density of a gas becomes much greater when it is liquefied"
    ],
    "answer": "Not provided"
  },
  {
    "q": "The value of Wien’s constant is given as______.",
    "options": [
      "2.9х10-5 mK",
      "2.9х10-3 mK",
      "2.9х10-3 K",
      "2.9х10-5 K"
    ],
    "answer": "Not provided"
  },
  {
    "q": "An electron (m = 9.11×10-31kg) has a speed of 0.95c. Its kinetic energy is:",
    "options": [
      "2.2×10-13J",
      "2.0×10-13J",
      "1.8×10-13J",
      "8.2×10-14J"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Which of the following has the highest disorder in terms of particle arrangement?",
    "options": [
      "Gas",
      "Solid",
      "Plasma",
      "Liquid"
    ],
    "answer": "Not provided"
  },
  {
    "q": "In the context of thermodynamics, the term \"adiabatic\" refers to a process in which:",
    "options": [
      "No work is done on or by the system.",
      "No heat is exchanged with the surroundings.",
      "The system's internal energy is constant.",
      "The temperature remains constant."
    ],
    "answer": "Not provided"
  },
  {
    "q": "The unit of thermal conductivity might be:",
    "options": [
      "C?/ (cal•cm•s)",
      "Cal/ (cm•s•C?)",
      "Cal•s/ (cm•C?)",
      "Cal•cm/(s•C?)"
    ],
    "answer": "Not provided"
  },
  {
    "q": "The center of Newton ring is dark due to:",
    "options": [
      "Diffraction",
      "Polarization",
      "Constructive interference",
      "Destructive interference"
    ],
    "answer": "Not provided"
  },
  {
    "q": "What happens to the internal energy of a substance when it is heated at constant volume?",
    "options": [
      "Decreases",
      "Remains constant",
      "Increases",
      "Cannot be determined"
    ],
    "answer": "Not provided"
  },
  {
    "q": "If the mass of a particle is zero its speed must be: (C represents the velocity of light)",
    "options": [
      "Infinite",
      "Any speed less than C",
      "C",
      "0"
    ],
    "answer": "Not provided"
  },
  {
    "q": "What will be the energy associated with the photon, if it has a frequency of 5×1014 Hz. [Hint: Planck's constant (h) = 6.63×10−34 J·s]",
    "options": [
      "3.313×10−48 J/s",
      "3.313×10−30 J",
      "3.313×10−14 J",
      "3.313×10−20 J"
    ],
    "answer": "Not provided"
  },
  {
    "q": "The speed of light is generally faster in a medium with:",
    "options": [
      "Changing the refractive index",
      "Constant refractive index",
      "higher refractive index",
      "lower refractive index"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Possible units for the coe?cient of volume expansion are:",
    "options": [
      "1/(C?)3",
      "1/C?",
      "mm3/C?",
      "(C?)3"
    ],
    "answer": "Not provided"
  },
  {
    "q": "The appearance of colors in thin film is due to:",
    "options": [
      "Diffraction",
      "Dispersion",
      "Polarization",
      "Interference"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Einstein's proposed solution to the photoelectric puzzle was:",
    "options": [
      "Light is composed of small packets called quanta.",
      "Electrons become transparent to certain light frequencies.",
      "Metals emit light in response to the shaking of electrons.",
      "Electrons are ejected due to the temperature increase."
    ],
    "answer": "Not provided"
  },
  {
    "q": "If light of low wavelength is used in young’s double slit experiment, then width of the fringe will:",
    "options": [
      "Double",
      "Decrease",
      "Increase",
      "No change"
    ],
    "answer": "Not provided"
  },
  {
    "q": "The primary reason for the increase in pressure of an ideal gas upon heating is:",
    "options": [
      "Increase in the number of atoms",
      "Increase in the average speed of gas molecules",
      "Increase in the density of the gas",
      "Increase in atomic weight"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Absolute zero is considered as that temperature at which:",
    "options": [
      "Water freezes",
      "All liquids become gases",
      "All gases become liquids",
      "Ice melts"
    ],
    "answer": "Not provided"
  },
  {
    "q": "In time dilation, the time at a slower rate is observed by:",
    "options": [
      "The moving observer",
      "Time is irrelevant in this context",
      "Both observers experience time at the same rate",
      "The stationary observer"
    ],
    "answer": "Not provided"
  },
  {
    "q": "How does increasing the intensity of light in the photoelectric effect influence the number of ejected electrons?",
    "options": [
      "Changes the color of the emitted light.",
      "No effect on the number of photoelectrons.",
      "Decreases the kinetic energy of the photoelectrons.",
      "Increases the number of photoelectrons."
    ],
    "answer": "Not provided"
  },
  {
    "q": "Which of the following electromagnetic radiations has photons with the greatest momentum?",
    "options": [
      "blue light",
      "x rays",
      "radio waves",
      "yellow light"
    ],
    "answer": "Not provided"
  },
  {
    "q": "When a ray of light travels from a lesser denser medium to denser medium then ______________.",
    "options": [
      "It bends away from the normal",
      "It bends towards the normal",
      "It bends at angle of 90 degree",
      "It follows its previous path"
    ],
    "answer": "Not provided"
  },
  {
    "q": "When an electromagnetic wave meets a reflecting surface, the direction taken by the reflected wave is determined by:",
    "options": [
      "the material of the reflecting surface",
      "the index of the medium",
      "the intensity of the wave",
      "the angle of incidence"
    ],
    "answer": "Not provided"
  },
  {
    "q": "A consequence of Einstein’s theory of relativity is:",
    "options": [
      "Moving rods are longer than when they are at rest",
      "Every thing is relative",
      "Light has both wave and particle properties",
      "Moving clocks run more slowly than when they are at rest"
    ],
    "answer": "Not provided"
  },
  {
    "q": "What fundamental principle explains the observation that electrons in an atom can only exist in certain definite energy states?",
    "options": [
      "Conservation of energy",
      "Quantization of energy levels",
      "The uncertainty principle",
      "Principle of superposition"
    ],
    "answer": "Not provided"
  },
  {
    "q": "The proper time between two events is measured by clocks at rest in a reference frame in which the two events:",
    "options": [
      "Occur in Boston",
      "Occur at the same time",
      "Satisfy none of these given",
      "Occur at the same coordinates"
    ],
    "answer": "Not provided"
  },
  {
    "q": "How does the position of an object relative to a concave mirror affect the size of its virtual image?",
    "options": [
      "Farther objects have larger images.",
      "Closer objects have larger images.",
      "Only objects at the center have images.",
      "The size is always the same regardless of distance."
    ],
    "answer": "Not provided"
  },
  {
    "q": "What does it mean for a wave to be coherent?",
    "options": [
      "wave with varying frequency",
      "wave with same speeds",
      "wave with a constant phase",
      "wave with the same intensity"
    ],
    "answer": "Not provided"
  },
  {
    "q": "The phenomenon in which hot bodies emit radiation is known as_____.",
    "options": [
      "Gamma radiations",
      "Visible light",
      "X-rays",
      "Black-body radiation"
    ],
    "answer": "Not provided"
  },
  {
    "q": "A particle with rest mass m moves with speed 0.6c.Its kinetic energy is:",
    "options": [
      "mc2",
      "0.18mc2",
      "0.22mc2",
      "0.25mc2"
    ],
    "answer": "Not provided"
  },
  {
    "q": "According to the Stefan-Boltzmann Law, what is the relationship between the power radiated per unit area (P) and the temperature (T) of a hot body?",
    "options": [
      "P ∝ T2",
      "P ∝ T",
      "P ∝ T4",
      "P ∝ T−1"
    ],
    "answer": "Not provided"
  },
  {
    "q": "If torsional constant is increased by 4 time, the time period of torsion pendulum becomes, ",
    "options": [
      "Half",
      "Remains same",
      "Quadruple",
      "Double"
    ],
    "answer": "Not provided"
  },
  {
    "q": "The areal velocity of a planet revolving around the sun, with an angular momentum of 10 kgm2s-1, and mass of 5000 kg, will be (Hint: use Kepler’s 2nd law) ",
    "options": [
      "0.001 m2 s-1",
      "0.005 m2 s-1",
      "0.01 m2 s-1",
      "0.5 m2 s-1"
    ],
    "answer": "Not provided"
  },
  {
    "q": "If moment of inertia is increased by 4 time, the time period of torsional becomes, ",
    "options": [
      "Half",
      "Double",
      "Quadruple",
      "Remains same"
    ],
    "answer": "Not provided"
  },
  {
    "q": "In the formula F= Gm1m2/r2, the quantity G:",
    "options": [
      "is a universal constant of nature",
      "is used only when Earth is one of the two masses",
      "is greatest at the surface of Earth",
      "depends on the local value of g"
    ],
    "answer": "Not provided"
  },
  {
    "q": "How does the gravitational potential change as you move farther away from a body on earth? ",
    "options": [
      "It remains constant",
      "It increases linearly",
      "It decreases with increasing distance",
      "It becomes zero"
    ],
    "answer": "Not provided"
  },
  {
    "q": "If radius of earth is increased by Four time, the escape velocity becomes, ",
    "options": [
      "Double",
      "Triple",
      "Quadruple",
      "Remains constant"
    ],
    "answer": "Not provided"
  },
  {
    "q": "If you double the height of an object above the Earth's surface, how does the gravitational potential energy change? ",
    "options": [
      "It becomes zero",
      "It doubles",
      "It remains constant",
      "It halves"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Schwarzschild radius of a black hole related to, ",
    "options": [
      "Escape velocity",
      "Gravitational constant",
      "Mass of the black hole",
      "Orbital velocity"
    ],
    "answer": "Not provided"
  },
  {
    "q": "A satellite of mass 200 kg is in orbit around the Earth at an altitude of 500 km. The gravitational potential energy of the satellite will be, ",
    "options": [
      "1.2 MJ",
      "2.4 MJ",
      "4.8 MJ",
      "3.6 MJ"
    ],
    "answer": "Not provided"
  },
  {
    "q": "The unit of areal velocity is, ",
    "options": [
      "m2 s-2",
      "m s-1",
      "m2 s-1",
      "m2 s"
    ],
    "answer": "Not provided"
  },
  {
    "q": "A rocket ship is coasting toward a planet. Its captain wishes to know the value of g at the surface of the planet. This may be inferred by:",
    "options": [
      "measuring g the diameter of the planet",
      "observing the ship’s acceleration and correcting for the distance from the center of the planet:",
      "measuring the apparent weight of an object of known mass in the ship",
      "measuring the density of the planet"
    ],
    "answer": "Not provided"
  },
  {
    "q": "What is the escape velocity from Earth's surface? ",
    "options": [
      "11.2 m/s",
      "618 m/s",
      "11.2 km/s",
      "11.2 km/h"
    ],
    "answer": "Not provided"
  },
  {
    "q": "If mass of earth is increased, what will be the effect on gravitational potential, ",
    "options": [
      "Decreased",
      "Increased",
      "May be increase or decrease",
      "Remains same"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Let F1 be the magnitude of the gravitational force exerted on the Sun by Earth and F2 be the magnitude of the force exerted on Earth by the Sun. Then:",
    "options": [
      "F1 is equal to F2",
      "F1 is much greater than F2",
      "F1 is slightly greater than F2",
      "F1 is slightly less than F2"
    ],
    "answer": "Not provided"
  },
  {
    "q": "If the gravitational potential energy of an object is 200 J and its mass is 20 kg, what is its height above the reference point? (Take g = 10 m/s2) ",
    "options": [
      "4 m",
      "2 m",
      "10 m",
      "8 m"
    ],
    "answer": "Not provided"
  },
  {
    "q": "At center of the Earth, gravitational force is ",
    "options": [
      "Double",
      "Random",
      "Zero",
      "Maximum"
    ],
    "answer": "Not provided"
  },
  {
    "q": "The orbital velocity of a satellite at an altitude of 500 km from the surface of earth is, ",
    "options": [
      "11.2 km/s",
      "7660 m/s",
      "6400 m/s",
      "10 Km/s"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Earth exerts a gravitational force on the Moon, keeping it in its orbit. The reaction to this force, in the sense of Newton’s third law, is:",
    "options": [
      "the centripetal force on the Moon",
      "the nearly circular orbit of the Moon",
      "the tides due to the Moon",
      "the gravitational force on Earth by the Moon"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Which force is considered the weakest among all fundamental forces in nature? ",
    "options": [
      "Gravity",
      "Friction force",
      "Electromagnetic force",
      "Weak nuclear force"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Let M denote the mass of Earth and let R denote its radius. The ratio g/G at Earth’s surface is:",
    "options": [
      "R^2/M",
      "M/R^2",
      "M/R",
      "MR^2"
    ],
    "answer": "Not provided"
  },
  {
    "q": "According to Einstein's theory of general relativity, what is gravity attributed to? ",
    "options": [
      "Exchange of virtual particles",
      "Curvature of spacetime",
      "Gravitational waves",
      "Gravitons"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Kepler’s First Law says that planets move in ",
    "options": [
      "Spiral paths",
      "Elliptical orbits",
      "Random curves",
      "Circular paths"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Earth has an orbital period of 365 days and its mean distance from the Sun is 1.495x108 km. The planet Pluto’s mean distance from the Sun is 5.896x109 km. Using Kepler’s third law, Pluto’s orbital period in Earth days will be, ",
    "options": [
      "90000 days",
      "4500 days",
      "9000 days",
      "450 days"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Consider the following statements, and then select the correct ones.  I. Most of the electrical devices we use require AC voltage.  II. Most of the electrical energy sold by power companies is transmitted and distributed as alternating current. III. AC voltage can be easily and efficiently converted from one place to another by means of transformers.  ",
    "options": [
      "I and II are correct, and III is incorrect.",
      "I, II, and III are correct.",
      "I is correct, and II and III are incorrect.",
      "I and III are correct; II is incorrect."
    ],
    "answer": "Not provided"
  },
  {
    "q": "The approximate value of g at an altitude above Earth equal to one Earth diameter is:",
    "options": [
      "4.9m/s2",
      "1.1m/s2",
      "2.5m/s2",
      "1.9m/s2"
    ],
    "answer": "Not provided"
  },
  {
    "q": "If the gravitational potential at a certain height is zero, what can you conclude about the gravitational potential energy at that height? ",
    "options": [
      "It cannot be determined",
      "It is infinite",
      "It is positive",
      "It is also zero"
    ],
    "answer": "Not provided"
  },
  {
    "q": "What is the dimension of the universal gravitational constant G? ",
    "options": [
      "M-1L2T-2",
      "M-1L3T-2",
      "M-1L3T-1",
      "M-2L3T-2"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Consider two planets, Planet A and Planet B. Planet A has an average distance from the Sun (rA) that is four times that of Planet B (rB). If the orbital period of Planet B is 3 years, what would be the expected orbital period of Planet A? (Hint: use Kepler’s law) ",
    "options": [
      "9 years",
      "3 years",
      "6 years",
      "12 years"
    ],
    "answer": "Not provided"
  },
  {
    "q": "If radius of earth is increased by two time, the volume of earth increased by ",
    "options": [
      "8 times",
      "27 times",
      "4 times",
      "9 times"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Suitable units for the gravitational constant G are:",
    "options": [
      "m3/ (kg•s2)",
      "m/s2",
      "kg•m/s2",
      "N•s/m"
    ],
    "answer": "Not provided"
  },
  {
    "q": "A rod with moment of inertia of 5 Kgm2 and oscillates with a period of 3.14 seconds, its torsion constant “k” is, ",
    "options": [
      "20 Nm",
      "10 Nm",
      "15 Nm",
      "0.62 Nm"
    ],
    "answer": "Not provided"
  },
  {
    "q": "The gravitational constant G has the derived units:",
    "options": [
      "N•m2/kg2",
      "N•m/kg",
      "N•kg/m",
      "N•m"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Which of the following statements is true regarding the bending of light around a massive object due to gravity? ",
    "options": [
      "Light always travels in a straight line",
      "Light bends towards the massive object.",
      "Light bends away from the massive object.",
      "Light is not affected by gravity."
    ],
    "answer": "Not provided"
  },
  {
    "q": "In special relativity, the factor \\gamma is defined as: ",
    "options": [
      "{\\text{ }}\\gamma = \\sqrt {1 - {{\\left( {{\\text{v}}/c} \\right)}^2}}",
      "{\\text{ }}\\gamma = \\frac{1}{{\\sqrt {1 + {{\\left( {{\\text{v}}/c} \\right)}^2}} }}",
      "{\\text{ }}\\gamma = 1 - {\\left( {{\\text{v}}/c} \\right)^2}",
      "{\\text{ }}\\gamma = \\frac{1}{{\\sqrt {1 - {{\\left( {{\\text{v}}/c} \\right)}^2}} }}"
    ],
    "answer": "Not provided"
  },
  {
    "q": "If the kinetic energy of a free particle is much less than its rest energy then its kinetic energy is proportional to:",
    "options": [
      "The magnitude of its momentum",
      "The magnitude of its momentum\n\nThe square of the magnitude of its momentum",
      "The reciprocal of the magnitude of its momentum",
      "The square root of the magnitude of its momentum"
    ],
    "answer": "Not provided"
  },
  {
    "q": "The magnitude of the momentum of a particle can never exceed:",
    "options": [
      "mc, where m is its mass",
      "None of these, but there is an upper limit",
      "E/c, where E is its total energy",
      "K/c, where K is its kinetic energy"
    ],
    "answer": "Not provided"
  },
  {
    "q": "In relativistic mechanics, the rest energy E_0 is equal to: ",
    "options": [
      "{E_0} = {m_0}{c^2}",
      "{E_0} = \\sqrt {\\gamma {m_0}{c^2}}",
      "{E_0} = \\sqrt {{m_0}{c^2}}",
      "{E_0} = \\frac{1}{2}{m_0}{u^2}"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Which is the term used to describe the relativistic Doppler effect when the source is moving toward the observer? ",
    "options": [
      "Green shift",
      "Violet shift",
      "Red shift",
      "Blue shift"
    ],
    "answer": "Not provided"
  },
  {
    "q": "In special relativity, the invariant interval is associated with: ",
    "options": [
      "Electromagnetic forces",
      "Spacetime geometry",
      "Gravitational forces",
      "Quantum entanglement"
    ],
    "answer": "Not provided"
  },
  {
    "q": "An electron (m=9.11×10-31kg) has a momentum of 4.0×10-22kg•m/s.Its kinetic energy is:",
    "options": [
      "6.3×10-14J",
      "1.5×10-13J",
      "8.2×10-14J",
      "1.2×10-13J"
    ],
    "answer": "Not provided"
  },
  {
    "q": "What is the correct expression for relativistic momentum \\vec p ? ",
    "options": [
      "\\vec p = \\sqrt {\\gamma m\\vec u}",
      "\\vec p = \\gamma m\\vec u",
      "\\vec p = \\frac{{m\\vec u}}{\\gamma }",
      "\\vec p = m\\vec u"
    ],
    "answer": "Not provided"
  },
  {
    "q": "If the kinetic energy of a free particle is much greater than its rest energy then its kinetic energy is proportional to:",
    "options": [
      "The reciprocal of the magnitude of its momentum",
      "The square root of the magnitude of its momentum",
      "The magnitude of its momentum",
      "The square of the magnitude of its momentum"
    ],
    "answer": "Not provided"
  },
  {
    "q": "An electron is moving at 0.6c.If we calculate its kinetic energy using (1/2) mv2, we get a result that is:",
    "options": [
      "Just half enough",
      "Twice the correct value",
      "About 28% too low",
      "Just right"
    ],
    "answer": "Not provided"
  },
  {
    "q": "In special relativity, if the invariant interval is zero, it implies: ",
    "options": [
      "The events are lightlike separated",
      "The events are causally disconnected",
      "The events are spacelike separated",
      "The events are timelike separated"
    ],
    "answer": "Not provided"
  },
  {
    "q": "The formula \\({Q\\over t} =kA {ΔT \\over L}\\) allows us to determine: ",
    "options": [
      "Amount of heat transferred over time.",
      "Heat capacity of the material.",
      "Thermal resistance of the material.",
      "Change in temperature due to heat transfer."
    ],
    "answer": "Not provided"
  },
  {
    "q": "In special relativity, what is the term for the minimum energy an object possesses at rest? ",
    "options": [
      "Potential energy",
      "Total energy",
      "Rest mass energy",
      "Kinetic energy"
    ],
    "answer": "Not provided"
  },
  {
    "q": "In special relativity, the formula for the invariant interval I is given by: ",
    "options": [
      "I = {\\left( {c\\Delta t} \\right)^2} + {\\left( {\\Delta x} \\right)^2}",
      "I = {\\left( {c\\Delta t} \\right)^2} - {\\left( {\\Delta x} \\right)^2}",
      "I = {\\left( {c\\Delta t} \\right)^2}",
      "I = \\sqrt {{{\\left( {c\\Delta t} \\right)}^2} - {{\\left( {\\Delta x} \\right)}^2}}"
    ],
    "answer": "Not provided"
  },
  {
    "q": "In special relativity, the formula for the invariant interval $I$ is given by: ",
    "options": [
      "\\[I = {\\left( {c\\Delta t} \\right)^2} - {\\left( {\\Delta x} \\right)^2}\\]",
      "\\[I = {\\left( {c\\Delta t} \\right)^2}\\]",
      "\\[I = \\sqrt {{{\\left( {c\\Delta t} \\right)}^2} - {{\\left( {\\Delta x} \\right)}^2}} \\]",
      "\\[I = {\\left( {c\\Delta t} \\right)^2} + {\\left( {\\Delta x} \\right)^2}\\]"
    ],
    "answer": "Not provided"
  },
  {
    "q": "According to relativity theory a particle of mass m with a momentum of 2mc has a speed of:",
    "options": [
      "c/2",
      "2c",
      "c",
      "0.89c"
    ],
    "answer": "Not provided"
  },
  {
    "q": "What happens to the observed frequency, when an observer approaches a source of light at relativistic speed? ",
    "options": [
      "It remains constant",
      "It becomes zero",
      "It decreases",
      "It increases"
    ],
    "answer": "Not provided"
  },
  {
    "q": "In special relativity, if the invariant interval is positive, it implies: ",
    "options": [
      "The events are simultaneous",
      "The events are timelike separated",
      "The events are lightlike separated",
      "The events are spacelike separated"
    ],
    "answer": "Not provided"
  },
  {
    "q": "An electron (m = 9.11×10-31kg, q =1.60×10-19C) travels around a1.7-mm radius circular orbit perpendicular to a 2.8-T magnetic field. Its speed is:",
    "options": [
      "c",
      "0.16c",
      "0.94c",
      "0.36c"
    ],
    "answer": "Not provided"
  },
  {
    "q": "Which is the term used to describe the relativistic Doppler effect when the source is moving away from the observer? ",
    "options": [
      "Blue shift",
      "Violet shift",
      "Red shift",
      "Green shift"
    ],
    "answer": "Not provided"
  },
  {
    "q": "In special relativity, if the invariant interval is negative, it implies: ",
    "options": [
      "The events are timelike separated",
      "The events are lightlike separated",
      "The events are spacelike separated",
      "The events are causally disconnected"
    ],
    "answer": "Not provided"
  },
  {
    "q": "The relativistic Doppler effect is primarily concerned with? ",
    "options": [
      "Sound waves",
      "Wave produced on rope",
      "Water waves",
      "Light waves"
    ],
    "answer": "Not provided"
  },
  {
    "q": "What is the correct expression for relativistic momentum $\\vec p$ ? ",
    "options": [
      "\\[\\vec p = \\frac{{m\\vec u}}{\\gamma }\\]",
      "\\[\\vec p = m\\vec u\\]",
      "\\[\\vec p = \\sqrt {\\gamma m\\vec u} \\]",
      "\\[\\vec p = \\gamma m\\vec u\\]"
    ],
    "answer": "Not provided"
  },
  {
    "q": "In relativistic mechanics, the rest energy $E_0$ is equal to: ",
    "options": [
      "\\[{E_0} = \\sqrt {{m_0}{c^2}} \\]",
      "\\[{E_0} = \\sqrt {\\gamma {m_0}{c^2}} \\]",
      "\\[{E_0} = {m_0}{c^2}\\]",
      "\\[{E_0} = \\frac{1}{2}{m_0}{u^2}\\]"
    ],
    "answer": "Not provided"
  },
  {
    "q": "The formula {Q\\over t} =kA {ΔT \\over L} allows us to determine: ",
    "options": [
      "Amount of heat transferred over time.",
      "Change in temperature due to heat transfer.",
      "Thermal resistance of the material.",
      "Heat capacity of the material."
    ],
    "answer": "Not provided"
  },

    {
        "q": "Electromagnetic waves do not transport:",
        "options": [
            "A. Momentum",
            "B. Information",
            "C. Charge",
            "D. Energy"
        ],
        "answer": "C. Charge"
    },
    {
        "q": "The amplitude modulation frequency ranges from:",
        "options": [
            "A. 540 kHz to 1400 kHz",
            "B. 540 kHz to 1600 kHz",
            "C. 540 kHz to 1000 kHz",
            "D. 520 kHz to 1600 kHz"
        ],
        "answer": "B. 540 kHz to 1600 kHz"
    },
    {
        "q": "When we accelerate the charge, which types of waves are produced?",
        "options": [
            "A. Electromagnetic waves",
            "B. Travelling waves",
            "C. Stationary waves",
            "D. Mechanical waves"
        ],
        "answer": "A. Electromagnetic waves"
    },
    {
        "q": "Which of the following types of electromagnetic radiation travels at the greatest speed in vacuum?",
        "options": [
            "A. Gamma rays",
            "B. X rays",
            "C. Radio waves",
            "D. All of these travel at the same speed"
        ],
        "answer": "D. All of these travel at the same speed"
    },
    {
        "q": "Work done between two points on equipotential surface is",
        "options": [
            "A. Maximum",
            "B. Infinite",
            "C. Negative",
            "D. Zero"
        ],
        "answer": "D. Zero"
    },
    {
        "q": "The reaction of an induction at 50 Hz is 10 &, its reactance at 100 Hz becom",
        "options": [
            "A. 5&",
            "B. 20 1&",
            "C. 2.5 1&",
            "D. 1 1&"
        ],
        "answer": "B. 20 1&"
    },
    {
        "q": "Under what condition is induced electromotive force (EMF) produced in a conductor?",
        "options": [
            "A. When there is a strong electric field",
            "B. When there is a strong magnetic field",
            "C. When there is a constant magnetic field",
            "D. When there is a time-varying magnetic field"
        ],
        "answer": "D. When there is a time-varying magnetic field"
    },
    {
        "q": "In a parallel circuit with resistors R1 and R2, if R1 is much greater than R compare to the voltage across R1 ?",
        "options": [
            "A. Voltage across R2 is much greater",
            "B. Voltage across R1 is much greater",
            "C. Voltage across both resistors is the same",
            "D. Voltages can not be determined"
        ],
        "answer": "C. Voltage across both resistors is the same"
    },

    {
        "q": "An erect object is in front of a convex mirror a distance greater than the focal length. The image is:",
        "options": [
            "A. Real, inverted, and smaller than the object",
            "B. Real, inverted, and larger than the object",
            "C. Virtual, erect, and smaller than the object",
            "D. Virtual, inverted, and larger than the object"
        ],
        "answer": "C. Virtual, erect, and smaller than the object"
    },
    {
        "q": "Total flux through a closed surface depends on:",
        "options": [
            "A. Shape of surface",
            "B. Charge and - NC",
            "C. Charge enclosed",
            "D. Medium only"
        ],
        "answer": "C. Charge enclosed"
    },
    {
        "q": "A charge Q is moving with a velocity (v) parallel to a magnetic field (B). Force on the charge due to magnetic field is:",
        "options": [
            "A. Constant",
            "B. Minimum",
            "C. Maximum",
            "D. Zero"
        ],
        "answer": "D. Zero"
    },
    {
        "q": "Which electromagnetic radiation transmits the highest photon energy?",
        "options": [
            "A. Ultraviolet radiations",
            "B. Infrared rays",
            "C. Microwaves",
            "D. Gamma rays"
        ],
        "answer": "D. Gamma rays"
    },
    {
        "q": "The resolving power of a telescope can be increased by:",
        "options": [
            "A. decreasing the lens diameters",
            "B. increasing the lens diameters",
            "C. increasing the objective focal length and decreasing the eyepiece focal length",
            "D. inserting a correction lens between objective and eyepiece"
        ],
        "answer": "B. increasing the lens diameters"
    },
    {
        "q": "The speed of light in free space is:",
        "options": [
            "A. Less than that in air",
            "B. Unpredictable",
            "C. Constant",
            "D. Variable"
        ],
        "answer": "C. Constant"
    },
    {
        "q": "In special relativity, the factor γ is defined as:",
        "options": [
            "A. 1 - (v/c)²",
            "B. 1 / (1 + (v/c)²)",
            "C. 1 / sqrt(1 - (v/c)²)",
            "D. 1 - (v/c)²"
        ],
        "answer": "C. 1 / sqrt(1 - (v/c)²)"
    },
    {
        "q": "Polarization of light is defined as:",
        "options": [
            "A. The process of light aligning with Earth's magnetic field.",
            "B. The process of light vibrating in a specific direction.",
            "C. The process of light passing through a polar bear.",
            "D. The process of light changing its color."
        ],
        "answer": "B. The process of light vibrating in a specific direction."
    },
    {
        "q": "Which of the following is the difference between sound and light waves:",
        "options": [
            "A. sound is not subject to diffraction",
            "B. sound does not require energy for its origin",
            "C. sound is a longitudinal wave rather than a transverse wave",
            "D. sound is a torsional wave rather than a longitudinal wave"
        ],
        "answer": "C. sound is a longitudinal wave rather than a transverse wave"
    },
    {
        "q": "In an electrical circuit with constant resistance, if the voltage source is doubled, what happens to the power delivered to the circuit?",
        "options": [
            "A. The power is quadrupled.",
            "B. The power remains the same.",
            "C. The power is halved.",
            "D. The power is doubled."
        ],
        "answer": "A. The power is quadrupled."
    },
    {
        "q": "The temperature of the ice throughout the melting process when it is continuously heated by a small gas flame is:",
        "options": [
            "A. Remains constant initially and then increases.",
            "B. Increases until it turns into liquid water.",
            "C. Remains constant.",
            "D. Rises gradually."
        ],
        "answer": "C. Remains constant."
    },
    {
        "q": "Radio waves and light waves are",
        "options": [
            "A. Electromagnetic and longitudinal both",
            "B. Electromagnetic and transverse both",
            "C. Transverse waves",
            "D. Longitudinal waves"
        ],
        "answer": "B. Electromagnetic and transverse both"
    },
    {
        "q": "If the area of the plates increase by 6 times, and the distance between plates is reduced to half, the capacitance will be",
        "options": [
            "A. increased by 12 times",
            "B. decreased by 12 times",
            "C. increased by 3 times",
            "D. decreased by 3 times"
        ],
        "answer": "A. increased by 12 times"
    },
    {
        "q": "A stationary charge placed in a magnetic field will experience:",
        "options": [
            "A. An electric force.",
            "B. Both electric and magnetic forces.",
            "C. A magnetic force.",
            "D. No force."
        ],
        "answer": "D. No force."
    },
    {
        "q": "If an electron of charge is accelerated through a potential difference V, it will acquire energy",
        "options": [
            "A. V/2",
            "B. E/2",
            "C. 2V",
            "D. Ve"
        ],
        "answer": "D. Ve"
    },
    {
        "q": "Which of the following statements is false about the properties of electromagnetic waves?",
        "options": [
            "A. Both electric and magnetic field vectors are parallel to each other and perpendicular to the direction of propagation of wave.",
            "B. The energy of the electromagnetic wave is divided equally between electric and magnetic fields.",
            "C. These waves do not require any material medium for propagation.",
            "D. Both electric and magnetic field vectors attain their maximum and minimum at the same place and at the same time."
        ],
        "answer": "A. Both electric and magnetic field vectors are parallel to each other and perpendicular to the direction of propagation of wave."
    },
    {
        "q": "How does the total current behave when it is divided between two resistors in an electrical circuit?",
        "options": [
            "A. Decreases",
            "B. Remains constant",
            "C. Becomes zero",
            "D. Increases"
        ],
        "answer": "B. Remains constant"
    },
    {
        "q": "The units of Stefan Boltzmann constant are",
        "options": [
            "A. W m⁻² K⁻⁴",
            "B. W m⁻² K⁻⁴",
            "C. W m⁻² K⁻⁴",
            "D. W m⁻² K⁻⁴"
        ],
        "answer": "A. W m⁻² K⁻⁴"
    },
    {
        "q": "Which of the following statement best describes heat capacity?",
        "options": [
            "A. Amount of heat required to rise the temperature by 1 oC.",
            "B. Heat needed to melt a substance.",
            "C. Resistance of a body to temperature change.",
            "D. The ability of a body to retain heat."
        ],
        "answer": "A. Amount of heat required to rise the temperature by 1 oC."
    },
    {
        "q": "How could the unit of potential difference, the volt, also be written?",
        "options": [
            "A. J/C",
            "B. C/J",
            "C. A/s",
            "D. C/A"
        ],
        "answer": "A. J/C"
    }



 ],
     subjective: [
    {
        q: "If you walk along the top of a fence, why does holding your arms out help you to keep your balance?",
        marks: 1
    },
    {
        q: "Charge is also said to be conserved. What does it mean? Explain.",
        marks: 2
    },
    {
        q: "When a car drives off a cliff, why does it rotate forward as it falls?",
        marks: 2
    },
    {
        q: "Why does a book sitting on a table never accelerate 'spontaneously' in response to the trillions of inter-atomic forces acting within it?",
        marks: 2
    },
    {
        q: "'Captain Planet' is somewhere between galaxies. When a gong sounds in a neighboring spaceship, Captain reacts to the sound. What is wrong with this scenario?",
        marks: 3
    },
    {
        q: "If you know the position vectors of a particle at two points along its path and also know the time it took to move from one point to the other, can you determine the particle's instantaneous velocity? Its average velocity? Explain",
        marks: 3
    },
    {
        q: "Steel will rupture if subjected to a shear stress of more than about 4.2 * 10^8 N/m^2. What sideward force is necessary to shear a steel bolt 1 cm in diameter?",
        marks: 5
    },
    {
        q: "A table-tennis ball is thrown at a stationary bowling ball. The table-tennis ball makes a one-dimensional elastic collision and bounces back along the same line. After the collision, compared to the bowling ball, the table-tennis ball has (a) a larger magnitude of momentum and more kinetic energy (b) a smaller magnitude of momentum and more kinetic energy (c) a larger magnitude of momentum and less kinetic energy (d) a smaller magnitude of momentum and less kinetic energy (e) the same magnitude of momentum and the same kinetic energy.",
        marks: 5
    }
]
    },
  },

  // ──────────────────────────────────
  //  CS101, ENG101, PAK101 — MCQs only
  // ──────────────────────────────────
  CS101: {
    mid: {
      title: 'CS101 — Mid Term Examination',
      totalMarks: 30,
      mcqMarks: 1,
      mcqs: [
        { q: 'Computer Science is the discipline that mainly focuses on:', options: ['A. Only hardware design', 'B. Building scientific foundation for computing systems', 'C. Only programming languages', 'D. Only internet usage'], answer: 'B. Building scientific foundation for computing systems' },
        { q: 'Which of the following is NOT a component of computer hardware?', options: ['A. Keyboard', 'B. Operating System', 'C. Monitor', 'D. Mouse'], answer: 'B. Operating System' },
        { q: 'Computer software is best defined as:', options: ['A. Physical parts of computer', 'B. Set of instructions that tells computer what to do', 'C. Internet hardware', 'D. Computer cables'], answer: 'B. Set of instructions that tells computer what to do' },
        { q: 'Which one is an example of system software?', options: ['A. MS Word', 'B. Photoshop', 'C. Operating System', 'D. Game'], answer: 'C. Operating System' },
        { q: 'A computer network is used for:', options: ['A. Playing games only', 'B. Sharing resources between computers', 'C. Designing hardware', 'D. Installing software'], answer: 'B. Sharing resources between computers' },
        { q: 'An algorithm is:', options: ['A. Computer hardware', 'B. Set of instructions to solve a problem', 'C. Internet connection', 'D. Programming language'], answer: 'B. Set of instructions to solve a problem' },
        { q: 'DBMS stands for:', options: ['A. Data Backup Management System', 'B. Database Management System', 'C. Digital Binary Machine System', 'D. Data Basic Machine Software'], answer: 'B. Database Management System' },
        { q: 'Computer security ensures:', options: ['A. Speed only', 'B. Confidentiality, integrity, and availability', 'C. Only storage', 'D. Only internet access'], answer: 'B. Confidentiality, integrity, and availability' },
        { q: 'Which field is ranked #1 job in US according to Forbes?', options: ['A. Doctor', 'B. Software Developer', 'C. Teacher', 'D. Banker'], answer: 'B. Software Developer' },
        { q: 'Computer graphics deals with:', options: ['A. Writing programs', 'B. Generating images using computers', 'C. Networking computers', 'D. Data storage only'], answer: 'B. Generating images using computers' },
      ],
      subjective: [],
    },
    final: {
      title: 'CS101 — Final Term Examination',
      totalMarks: 40,
      mcqMarks: 1,
      mcqs: [
    {
        "q": "From network security point of view, a primary prevention technique is to filter traffic passing through a point in the network, usually through _______________",
        "options": [
            "A. Firewalls",
            "B. Proxy server",
            "C. Antivirus",
            "D. Operating system"
        ],
        "answer": "A. Firewalls"
    },
    {
        "q": "We cannot establish proxy server for ___________",
        "options": [
            "A. FTP",
            "B. HTTP",
            "C. Firewall",
            "D. Telnet"
        ],
        "answer": "C. Firewall"
    },
    {
        "q": "In Encryption, a Private key is used to ___________ messages.",
        "options": [
            "A. Encrypt",
            "B. Decrypt"
        ],
        "answer": "B. Decrypt"
    },
    {
        "q": "By using ___________ we can have a secure version of the applications.",
        "options": [
            "A. 3G",
            "B. XML",
            "C. Spam filters",
            "D. Encryption techniques"
        ],
        "answer": "D. Encryption techniques"
    },
    {
        "q": "In Encryption, a digital signature is actually a __________",
        "options": [
            "A. array of characters",
            "B. protocol",
            "C. bit pattern",
            "D. server"
        ],
        "answer": "C. bit pattern"
    },
    {
        "q": "In context of legal approaches to network security, one of the main issue is ________________",
        "options": [
            "A. International law that makes Illegal in one country and legal in another country",
            "B. lack of data",
            "C. slow technological development",
            "D. lack of skilled persons in this area"
        ],
        "answer": "A. International law that makes Illegal in one country and legal in another country"
    },
    {
        "q": "In Pakistan, the Federal Investigation Agency (FIA) act was passed in the year ____________.",
        "options": [
            "A. 1975",
            "B. 1977",
            "C. 1974",
            "D. 1976"
        ],
        "answer": "C. 1974"
    },
    {
        "q": "In Pakistan, the Prevention of Electronic Crimes Ordinance was passed in the year ____________.",
        "options": [
            "A. 2009",
            "B. 2007",
            "C. 2008",
            "D. 2010"
        ],
        "answer": "B. 2007"
    },
    {
        "q": "Algorithm is simply ________ that define how a task is _________.",
        "options": [
            "A. a single step, performed",
            "B. set of steps, performed",
            "C. a single step, halted",
            "D. set of steps, halted"
        ],
        "answer": "B. set of steps, performed"
    },
    {
        "q": "Which of the following is not the general operation of the machine cycle?",
        "options": [
            "A. Return the instruction",
            "B. Fetch the instruction",
            "C. Decode the instruction",
            "D. Execute the instruction"
        ],
        "answer": "A. Return the instruction"
    },
    {
        "q": "Algorithm to convert from KM to Meters will involve all the steps except:",
        "options": [
            "A. Multiply the input with 1000",
            "B. Take input of KM’s",
            "C. Add 1000 to the output",
            "D. Display the result"
        ],
        "answer": "C. Add 1000 to the output"
    },
    {
        "q": "The execution of an algorithm must lead to a(an) __________.",
        "options": [
            "A. Condition",
            "B. End",
            "C. Start",
            "D. Statement"
        ],
        "answer": "B. End"
    },
    {
        "q": "______________ is the set of steps that defines how the task is performed.",
        "options": [
            "A. Program",
            "B. Algorithm",
            "C. Analysis",
            "D. Model"
        ],
        "answer": "B. Algorithm"
    },
    {
        "q": "A good algorithm must have all characteristics except:",
        "options": [
            "A. Unstructured",
            "B. Terminating Process",
            "C. Unambiguous",
            "D. Executable"
        ],
        "answer": "A. Unstructured"
    },
    {
        "q": "A formal representation of an algorithm designed for computer application is referred to as ________________ .",
        "options": [
            "A. Process Design",
            "B. Analysis",
            "C. Program",
            "D. Process Model"
        ],
        "answer": "C. Program"
    },
    {
        "q": "Algorithm is a method for solving the problem in _________order.",
        "options": [
            "A. semantic",
            "B. static",
            "C. symmetric",
            "D. systematic"
        ],
        "answer": "D. systematic"
    },
    {
        "q": "A program is the representation of an algorithm, whereas a _________ is the activity of executing an algorithm.",
        "options": [
            "A. Coupling",
            "B. Model",
            "C. Cohesion",
            "D. Process"
        ],
        "answer": "D. Process"
    },
    {
        "q": "The algebraic formula for converting readings of length of a table from feet to inches is_____________.",
        "options": [
            "A. feet+12",
            "B. feet*12",
            "C. feet%12",
            "D. feet/12"
        ],
        "answer": "B. feet*12"
    },
    {
        "q": "Each primitive has its own syntax and semantics. Syntax refers to the primitive’s ______________ representation.",
        "options": [
            "A. Alphabetic",
            "B. Character",
            "C. Symbolic",
            "D. Pictorial"
        ],
        "answer": "C. Symbolic"
    },
    {
        "q": "Each primitive has its own syntax and semantics. Semantics refers to the ___________ of the primitive.",
        "options": [
            "A. Properties",
            "B. Meaning",
            "C. Characteristics",
            "D. Symbolic Representation"
        ],
        "answer": "B. Meaning"
    },
    {
        "q": "A collection of primitives along with a collection of rules stating how the primitives can be combined to represent more complex ideas constitutes a __________________.",
        "options": [
            "A. Programming Instructions",
            "B. Programming Model",
            "C. Programming Code",
            "D. Programming Language"
        ],
        "answer": "D. Programming Language"
    },
    {
        "q": "An informal notational system that helps the developers to develop algorithms is known as:",
        "options": [
            "A. Method",
            "B. Pseudocode",
            "C. Program Instructions",
            "D. Model"
        ],
        "answer": "B. Pseudocode"
    },
    {
        "q": "____________ is a notational system in which ideas can be expressed informally during the algorithm development process.",
        "options": [
            "A. Object",
            "B. Method",
            "C. Process",
            "D. Pseudo code"
        ],
        "answer": "D. Pseudo code"
    },
    {
        "q": "An else statement is preceded by ____ statement.",
        "options": [
            "A. else-if",
            "B. do",
            "C. if",
            "D. else"
        ],
        "answer": "C. if"
    },
    {
        "q": "Which of the following is the NOT the example of loop structure?",
        "options": [
            "A. for",
            "B. do while",
            "C. switch statement",
            "D. while"
        ],
        "answer": "C. switch statement"
    },
    {
        "q": "A semantic structure that allows the repeated operation of a particular sequence of instructions is known as:",
        "options": [
            "A. Module",
            "B. Loop",
            "C. Pseudocode",
            "D. Sequence"
        ],
        "answer": "B. Loop"
    },
    {
        "q": "What will be the output of the following pseudo code? int marks = 72; if (marks >= 90) cout<<\"Eligible for scholarship\" else cout<<\"Not eligible for scholarship\"",
        "options": [
            "A. Might be eligible for scholarship",
            "B. Not eligible for scholarship",
            "C. Eligible for scholarship",
            "D. Runtime error"
        ],
        "answer": "B. Not eligible for scholarship"
    },
    {
        "q": "If two functions are named ProcessLoan and RejectApplication, then we could request their services within an if-else structure by writing: if (. . . ): ProcessLoan() else: RejectApplication() Which function will be executed if the tested condition is true?",
        "options": [
            "A. ProcessLoan & RejectApplication",
            "B. RejectApplication",
            "C. None of them",
            "D. ProcessLoan"
        ],
        "answer": "D. ProcessLoan"
    },
    {
        "q": "What will be the output of the following pseudocode? int X= 4; if X >= 2 cout<< “true” else cout<< “false” end",
        "options": [
            "A. 2",
            "B. true",
            "C. 4",
            "D. false"
        ],
        "answer": "B. true"
    },
    {
        "q": "What is the output of the given pseudocode? if 3>5 Print(False) else Print(True) end",
        "options": [
            "A. Logical error/No output",
            "B. FalseTrue",
            "C. False",
            "D. True"
        ],
        "answer": "D. True"
    },
    {
        "q": "“Carry out the plan” is the __________ phase of problem solving phases presented by the mathematician G. Polya in 1945.",
        "options": [
            "A. 1st",
            "B. 4th",
            "C. 3rd",
            "D. 2nd"
        ],
        "answer": "C. 3rd"
    },
    {
        "q": "The close ___________ between the process of algorithm discovery and that of general problem solving has caused computer scientists to join with those of other disciplines in the search for better problem-solving techniques.",
        "options": [
            "A. dissolution",
            "B. solitude",
            "C. seclusion",
            "D. association"
        ],
        "answer": "D. association"
    },
    {
        "q": "Which of the following is not the problem-solving phase presented by the mathematician G. Polya in 1945?",
        "options": [
            "A. Understand the problem",
            "B. Carry out the plan",
            "C. Devise a plan for solving the problem",
            "D. Divide the problem"
        ],
        "answer": "D. Divide the problem"
    },
    {
        "q": "A common thread running through mentioned problem-solving approaches is “ _____________” .",
        "options": [
            "A. get your hand in the door",
            "B. get your hand in the window",
            "C. get your foot in the window",
            "D. get your foot in the door"
        ],
        "answer": "D. get your foot in the door"
    },
    {
        "q": "Before A,B,C and D ran a race they made the following predictions: A predicted that B would win. B predicted that D would win. C predicted that A would be third. D predicted that A’s prediction would be correct. Only one prediction will be correct. After analyzing the data, the winning order of the race will be:",
        "options": [
            "A. CDAB",
            "B. BDAC",
            "C. ABCD",
            "D. DCBA"
        ],
        "answer": "D. DCBA"
    },
    
    {
        "q": "Before A, B, C, and D ran a race, they made the following predictions and only one of these predictions turned out to be true after the race. Which of the given predictions could be correct?",
        "options": [
            "A. A predicted that B would win",
            "B. C predicted that A would be third",
            "C. D predicted that B's prediction would be correct",
            "D. B predicted that the order of finishing the race would be BACD"
        ],
        "answer": "B. C predicted that A would be third"
    },
    {
        "q": "A common thread running through mentioned problem-solving approaches is “ _____________” .",
        "options": [
            "A. get your hand in the door",
            "B. get your hand in the window",
            "C. get your foot in the window",
            "D. get your foot in the door"
        ],
        "answer": "D. get your foot in the door"
    },
    {
        "q": "Top-down methodology progresses from the ____________ .",
        "options": [
            "A. general to specific",
            "B. specific to the general",
            "C. horizontal to vertical",
            "D. vertical to horizontal"
        ],
        "answer": "A. general to specific"
    },
    {
        "q": "The ____________ approach is to look for a related problem that is either easier to solve or has been solved before and then try to apply its solution to the current problem.",
        "options": [
            "A. lower problem-solving",
            "B. higher problem-solving",
            "C. general problem-solving",
            "D. specific problem-solving"
        ],
        "answer": "C. general problem-solving"
    },
    {
        "q": "___________ methodology progresses from the specific to the general.",
        "options": [
            "A. Vertical methodology",
            "B. Bottom-up methodology",
            "C. Top-down methodology",
            "D. Horizontal methodology"
        ],
        "answer": "B. Bottom-up methodology"
    },
    {
        "q": "In Sequential Search Algorithm we may scan a list from its___________, comparing each entry with the target entry.",
        "options": [
            "A. Top down",
            "B. Middle",
            "C. Beginning",
            "D. End"
        ],
        "answer": "C. Beginning"
    },
    {
        "q": "An algorithm that determines whether that value is in the list or not is known as ____________.",
        "options": [
            "A. Sequential search algorithm",
            "B. Naive Bayes algorithm",
            "C. KNN algorithm",
            "D. K means algorithm"
        ],
        "answer": "A. Sequential search algorithm"
    },
    {
        "q": "What will be the output of the following pseudocode? int main() { int a=10; while(a==10) { printf(\"PAKISTAN\"); break; } return 0; }",
        "options": [
            "A. PAKISTAN is printed multiple times",
            "B. PAKISTAN is printed 10 times",
            "C. PAKISTAN",
            "D. Compiler Error"
        ],
        "answer": "C. PAKISTAN"
    },
    {
        "q": "While (_______ ): What will be written in the blank space?",
        "options": [
            "A. Function definition",
            "B. Condition",
            "C. Body",
            "D. Total Number of code lines"
        ],
        "answer": "B. Condition"
    },
    {
        "q": "As a general rule, the use of a loop structure produces a higher degree of___________ .",
        "options": [
            "A. inconsistency",
            "B. complexity",
            "C. flexibility",
            "D. ambiguity"
        ],
        "answer": "C. flexibility"
    },
    {
        "q": "What will be the output of the following pseudo code? int x = 0; if (x == 0) printf(\"hi\"); else printf(\"hello\");",
        "options": [
            "A. hi",
            "B. hihello",
            "C. hello",
            "D. hellohi"
        ],
        "answer": "A. hi"
    },
    {
        "q": "Which of the following is not the activity of loop control?",
        "options": [
            "A. initialize",
            "B. test",
            "C. modify",
            "D. halt"
        ],
        "answer": "D. halt"
    },
    {
        "q": "The test activity terminates the loop process by checking for a condition. This is known as the ____________.",
        "options": [
            "A. Loop condition",
            "B. Test condition",
            "C. Termination condition",
            "D. Entry condition"
        ],
        "answer": "C. Termination condition"
    },
    {
        "q": "What will be the output of the following pseudo code? int x = 45; if (x >= 33) printf(\"Pass\"); else printf(\"Fail\");",
        "options": [
            "A. PassFail",
            "B. Fail",
            "C. Pass",
            "D. FailPass"
        ],
        "answer": "C. Pass"
    },
    {
        "q": "What will be the output of the following pseudo code? float height = 5.9; if (height <= 6) cout << “Can pass the door”; else cout << “Cannot pass the door”;",
        "options": [
            "A. 5.9",
            "B. Cannot pass the door",
            "C. Can pass the door",
            "D. 6"
        ],
        "answer": "C. Can pass the door"
    },
    {
        "q": "What will be the output of the following pseudo code? int main() { int x = 5; while(x == 5) { printf(\"PAKISTAN\"); break; } return 0; }",
        "options": [
            "A. 0",
            "B. PAKISTAN",
            "C. 5",
            "D. while"
        ],
        "answer": "B. PAKISTAN"
    },
    {
        "q": "The pseudo-code to find a factorial of a number n is: def FindFactorial(): f = 1 i=1; While (i<=n) f=f*i; i=i+1; Initially “f” and “i” both will have a value of one. What would be the value of “f” after the 2nd iteration?",
        "options": [
            "A. 6",
            "B. 1",
            "C. 2",
            "D. 4"
        ],
        "answer": "C. 2"
    },
    {
        "q": "The pseudo-code to find a factorial of a number n is: def FindFactorial(): f = 1 i=1; While (i<=n) f=f*i; i=i+1; Initially “f” and “i” both will have a value of one. What would be the value of “f” after the 6th iteration?",
        "options": [
            "A. 240",
            "B. 1080",
            "C. 120",
            "D. 720"
        ],
        "answer": "D. 720"
    },
    {
        "q": "The pseudo-code to find a factorial of a number n is: def FindFactorial(): f = 1 i=1; While (i<=n) f=f*i; i=i+1; Initially “f” and “i” both will have a value of one. What would be the value of “f” after the 3rd iteration?",
        "options": [
            "A. 12",
            "B. 9",
            "C. 6",
            "D. 3"
        ],
        "answer": "C. 6"
    },
    {
        "q": "If the test for termination of a loop is performed before the body is executed then the loop is known as __________ .",
        "options": [
            "A. post-test loop",
            "B. blackbox test loop",
            "C. whitebox test loop",
            "D. pretest loop"
        ],
        "answer": "D. pretest loop"
    },
    {
        "q": "_________loop structure referred to as a pre-test loop.",
        "options": [
            "A. Sequential",
            "B. Repeat",
            "C. While",
            "D. Unconditional"
        ],
        "answer": "C. While"
    },
    {
        "q": "In ____________ loop the test for termination is performed before the body is executed.",
        "options": [
            "A. blackbox test",
            "B. post-test",
            "C. whitebox test",
            "D. pretest"
        ],
        "answer": "D. pretest"
    },
    {
        "q": "Which of the following algorithms is used for sorting a list of names into alphabetical order within itself?",
        "options": [
            "A. Regression algorithm",
            "B. Decision tree",
            "C. Merge sort",
            "D. Insertion sort"
        ],
        "answer": "D. Insertion sort"
    },
    {
        "q": "Which of the following examples is based on insertion sort?",
        "options": [
            "A. Database scenarios and distributes scenarios",
            "B. Finding the value of X",
            "C. Sorting a list of names into alphabetical order",
            "D. Real-time systems"
        ],
        "answer": "C. Sorting a list of names into alphabetical order"
    },
    {
        "q": "_____________ is a sorting algorithm that places an unsorted element at its suitable place in each iteration.",
        "options": [
            "A. Bubble sort",
            "B. Merge sort",
            "C. Quick sort",
            "D. Insertion sort"
        ],
        "answer": "D. Insertion sort"
    },
    {
        "q": "What is ascending order in alphabetical order?",
        "options": [
            "A. arranged in a series that begins with the greatest or largest and ends with the least or smallest",
            "B. arranged in a series that begins with the odd number of elements",
            "C. arranged in a series that begins with the least or smallest and ends with the greatest or largest",
            "D. arranged in a series that begins with the even number of elements"
        ],
        "answer": "C. arranged in a series that begins with the least or smallest and ends with the greatest or largest"
    },
    {
        "q": "What does sorting a list mean?",
        "options": [
            "A. Breaking list in two parts",
            "B. Disarranging elements in a list",
            "C. Combining two lists",
            "D. Arranging elements of the list in a certain order"
        ],
        "answer": "D. Arranging elements of the list in a certain order"
    },
    {
        "q": "What does an algorithm mean?",
        "options": [
            "A. reusable code",
            "B. piece of code",
            "C. set of instructions",
            "D. set of a finite number of well-defined steps to solve a problem"
        ],
        "answer": "D. set of a finite number of well-defined steps to solve a problem"
    },
    {
        "q": "The recursive binary search Algorithm systematically narrows the search to the ________ of the list based on the comparison with the middle element, in each iteration.",
        "options": [
            "A. One half",
            "B. One quarter",
            "C. Left side",
            "D. Right side"
        ],
        "answer": "A. One half"
    },
    {
        "q": "Pseudocode is _______.",
        "options": [
            "A. Code with output",
            "B. Text based algorithmic design/code",
            "C. Code without inputs",
            "D. Code without comments"
        ],
        "answer": "B. Text based algorithmic design/code"
    },
    {
        "q": "Sequential Search is also known as ______?",
        "options": [
            "A. Non-linear search",
            "B. Direct search",
            "C. Linear search",
            "D. In-direct search"
        ],
        "answer": "C. Linear search"
    },
    {
        "q": "Sequential Search starts comparison from the _____.",
        "options": [
            "A. Start",
            "B. Start and end both",
            "C. Middle",
            "D. End"
        ],
        "answer": "A. Start"
    },
    {
        "q": "The binary search executes each stage of the repetition as a ______ of the previous stage.",
        "options": [
            "A. task",
            "B. part",
            "C. copy",
            "D. subtask"
        ],
        "answer": "D. subtask"
    },
    {
        "q": "Degenerate case in recursion is also known as______?",
        "options": [
            "A. worst case",
            "B. average case",
            "C. base case",
            "D. best case"
        ],
        "answer": "C. base case"
    },
    {
        "q": "Efficiency of an algorithm is_________.",
        "options": [
            "A. time required to add elements at the end of the list",
            "B. time required to delete the element from the end of the list",
            "C. time required to search an element",
            "D. number of comparisons required to find an element"
        ],
        "answer": "D. number of comparisons required to find an element"
    },
    {
        "q": "If we are using sequential search algorithm and required element lies at the end of the list, then it will be considered.",
        "options": [
            "A. Worst case scenario",
            "B. Average case scenario",
            "C. Best case scenario",
            "D. Medium case scenario"
        ],
        "answer": "A. Worst case scenario"
    },
    {
        "q": "If we have 30000 entries in a list and we are using a binary search algorithm. How many comparisons will be performed to find the last element?",
        "options": [
            "A. 15",
            "B. 30",
            "C. 15000",
            "D. 30000"
        ],
        "answer": "A. 15"
    },
    {
        "q": "Which of the following is NOT the advantage of software verification?",
        "options": [
            "A. Decrease the count of defects in later stages of development",
            "B. Reduces the chances of the product to be as per user needs",
            "C. Reduce the chances of failure",
            "D. Help to understand the product at the start"
        ],
        "answer": "B. Reduces the chances of the product to be as per user needs"
    },
    {
        "q": "_________ of the software is checked in software verification process.",
        "options": [
            "A. Compatibility",
            "B. Correctness",
            "C. Capacity",
            "D. Concurrency"
        ],
        "answer": "B. Correctness"
    },
    {
        "q": "Software validation is to check correctness of software _________.",
        "options": [
            "A. At the time of deployment",
            "B. Before and after deployment",
            "C. After deployment",
            "D. Before deployment"
        ],
        "answer": "D. Before deployment"
    },
    {
        "q": "A complete mnemonic system used for representing is collectively known as _______.",
        "options": [
            "A. machine language",
            "B. programming language",
            "C. natural language",
            "D. assembly language"
        ],
        "answer": "D. assembly language"
    },
    {
        "q": "Descriptive names used to represent mnemonic expressions are called as ________?",
        "options": [
            "A. both a and b",
            "B. program variables",
            "C. constants",
            "D. identifiers"
        ],
        "answer": "D. identifiers"
    },
    {
        "q": "When code is converted to machine language then it is ______ to see the output.",
        "options": [
            "A. executed",
            "B. compiled",
            "C. assembled",
            "D. translated"
        ],
        "answer": "A. executed"
    },
    {
        "q": "The process of locating and correcting an error in a programming language is called ______.",
        "options": [
            "A. correcting",
            "B. debugging",
            "C. editing",
            "D. executing"
        ],
        "answer": "B. debugging"
    },
    {
        "q": "________ language is precisely defined by rules and grammar.",
        "options": [
            "A. Formal",
            "B. Natural",
            "C. English",
            "D. Programming"
        ],
        "answer": "A. Formal"
    },
    {
        "q": "_________ translates one instruction to machine language at a time.",
        "options": [
            "A. translator",
            "B. both a,b",
            "C. compiler",
            "D. interpreter"
        ],
        "answer": "D. interpreter"
    },
    {
        "q": "If a program is installed on two different machines and by making small changes it can be used on both. This is known as _________.",
        "options": [
            "A. disadvantage of machine dependence",
            "B. goal of machine dependence",
            "C. goal of machine independence",
            "D. disadvantage of machine independence"
        ],
        "answer": "C. goal of machine independence"
    },
    {
        "q": "Which of the following is the disadvantage of assembly language?",
        "options": [
            "A. code is machine independent",
            "B. code is machine dependent",
            "C. both a and b",
            "D. works in small increments"
        ],
        "answer": "B. code is machine dependent"
    },
    {
        "q": "By definition, ___________ is if code does not run on a variety of computer systems.",
        "options": [
            "A. machine dependence",
            "B. machine optimization",
            "C. machine compiler",
            "D. machine independence"
        ],
        "answer": "A. machine dependence"
    },
    {
        "q": "Programming languages are evolved in _______ no of paradigms",
        "options": [
            "A. 1",
            "B. 4",
            "C. 3",
            "D. 2"
        ],
        "answer": "B. 4"
    },
    {
        "q": "The procedural paradigm is also known as _______.",
        "options": [
            "A. declarative paradigm",
            "B. imperative paradigm",
            "C. object oriented paradigm",
            "D. functional paradigm"
        ],
        "answer": "B. imperative paradigm"
    },
    {
        "q": "A ___________is a computer language programmers use to develop software programs, scripts, or other sets of instructions for computers to execute.",
        "options": [
            "A. Java Language",
            "B. natural language",
            "C. C++ language",
            "D. programming language"
        ],
        "answer": "D. programming language"
    },
    {
        "q": "_______ programming is emerged as a result of the declarative paradigm.",
        "options": [
            "A. Logic",
            "B. Procedural",
            "C. Functional",
            "D. Object oriented"
        ],
        "answer": "A. Logic"
    },
    {
        "q": "The programmer develops a precise statement of the described problem to be solved rather than describing an algorithm. This approach is known as _______.",
        "options": [
            "A. functional paradigm",
            "B. object oriented paradigm",
            "C. declarative paradigm",
            "D. imperative paradigm"
        ],
        "answer": "C. declarative paradigm"
    },
    {
        "q": "GPSS and Prolog are examples of _________ programming paradigm?",
        "options": [
            "A. declarative paradigm",
            "B. functional paradigm",
            "C. imperative paradigm",
            "D. object oriented paradigm"
        ],
        "answer": "A. declarative paradigm"
    },
    {
        "q": "In _______ paradigm, a program is developed by connecting predefined functions so that each functions outputs are used as another functions inputs in such a way that the desired overall input-to-output relationship is obtained.",
        "options": [
            "A. functional paradigm",
            "B. imperative paradigm",
            "C. declarative paradigm",
            "D. object oriented paradigm"
        ],
        "answer": "A. functional paradigm"
    },
    {
        "q": "Nested functions are example of ________ paradigm.",
        "options": [
            "A. functional",
            "B. declarative",
            "C. object oriented",
            "D. imperative"
        ],
        "answer": "A. functional"
    },
    {
        "q": "__________ is an entity which takes some inputs and produces some output.",
        "options": [
            "A. Function",
            "B. Task",
            "C. Program",
            "D. Module"
        ],
        "answer": "A. Function"
    },
    {
        "q": "An object is a part of a particular class is also known as a/an _______ of that class.",
        "options": [
            "A. case",
            "B. instance",
            "C. part",
            "D. type"
        ],
        "answer": "B. instance"
    },
    {
        "q": "In OOP, each object is consist of collection of __________.",
        "options": [
            "A. classes",
            "B. methods",
            "C. elements",
            "D. units"
        ],
        "answer": "B. methods"
    },
    {
        "q": "Collection of functions associated with objects are known as _______.",
        "options": [
            "A. function of objects",
            "B. methods",
            "C. module",
            "D. class"
        ],
        "answer": "B. methods"
    },
    {
        "q": "Descriptive names used in programming languages are called _______.",
        "options": [
            "A. data type",
            "B. float",
            "C. int",
            "D. variable"
        ],
        "answer": "D. variable"
    },
    {
        "q": "Which of the following is the correct way to declare a variable named grade which will store the grade of a student.",
        "options": [
            "A. char grade;",
            "B. float grade;",
            "C. int grade;",
            "D. boolean grade;"
        ],
        "answer": "A. char grade;"
    },
    {
        "q": "Which of the following is the correct way to declare a variable named shipping_price which will store the price converted from dollars which is not necessarily a whole number.",
        "options": [
            "A. boolean shipping_price;",
            "B. int shipping_price;",
            "C. char shipping_price;",
            "D. float shipping_price;"
        ],
        "answer": "D. float shipping_price;"
    },
    {
        "q": "How many locations are required to store \"Ali haider\" name in char array?",
        "options": [
            "A. char name[11]",
            "B. char name[9]",
            "C. char name[8]",
            "D. char name[10]"
        ],
        "answer": "A. char name[11]"
    },
    {
        "q": "A two-dimensional array of integers named Scores having two rows and nine columns will be declared as:",
        "options": [
            "A. int Scores[9]/[2];",
            "B. int Scores[2][9];",
            "C. int Scores[2]/[9];",
            "D. int Scores[9][2];"
        ],
        "answer": "B. int Scores[2][9];"
    },
    {
        "q": "Consider the given below structure and select the correct method to access its field named age. struct {char Name[25]; int Age; float SkillRating;}Employee;",
        "options": [
            "A. Employee{age}",
            "B. Employee.age",
            "C. Employee(age)",
            "D. Employee[age]"
        ],
        "answer": "B. Employee.age"
    },
    {
        "q": "Assignment statement is _________ type of statement.",
        "options": [
            "A. object oriented",
            "B. imperative",
            "C. functional",
            "D. declarative"
        ],
        "answer": "B. imperative"
    },
    {
        "q": "Which two symbols are used for assignment statements in different programming languages.",
        "options": [
            "A. =,<=>",
            "B. =, :=",
            "C. =, ==",
            "D. =, ;="
        ],
        "answer": "B. =, :="
    },
    {
        "q": "The correct way to declare numeric value 8 in c++ is?",
        "options": [
            "A. int 8;",
            "B. int a=8;",
            "C. Integer a=8;",
            "D. integer 8;"
        ],
        "answer": "B. int a=8;"
    },
    {
        "q": "In imperative paradigm, statements are executed ________.",
        "options": [
            "A. first statement at the end",
            "B. last statement at the start",
            "C. sequentially",
            "D. randomly"
        ],
        "answer": "C. sequentially"
    },
    {
        "q": "_______ alters the execution sequence of the program.",
        "options": [
            "A. Linear structures",
            "B. Non-linear structures",
            "C. Uncontrolled structures",
            "D. Control structures"
        ],
        "answer": "D. Control structures"
    },
    {
        "q": "What type of control structure is used in the following statement? while(expression) statement;",
        "options": [
            "A. Selection",
            "B. Loop",
            "C. Sequence",
            "D. Symmetric"
        ],
        "answer": "B. Loop"
    },
    {
        "q": "The statement i++; is equivalent to",
        "options": [
            "A. i--;",
            "B. i = i - 1;",
            "C. i = i + i;",
            "D. i = i + 1;"
        ],
        "answer": "D. i = i + 1;"
    },
    {
        "q": "int a=15; if (a < 15) cout << “a”; else cout << “abc ”; What would be the output?",
        "options": [
            "A. abc",
            "B. a",
            "C. aabc",
            "D. 15"
        ],
        "answer": "A. abc"
    },
    {
        "q": "A loop structure consists of:",
        "options": [
            "A. Loop control variable",
            "B. Body of Loop",
            "C. Condition",
            "D. All of above"
        ],
        "answer": "D. All of above"
    },
    {
        "q": "A process is an active entity.",
        "options": [
            "A. False",
            "B. True"
        ],
        "answer": "B. True"
    },
    {
        "q": "int i=1; while(i<=3) { cout<<\"Value of variable i is: \"<<i ; i++; } How many times loop will execute?",
        "options": [
            "A. 4",
            "B. 3",
            "C. 1",
            "D. 2"
        ],
        "answer": "B. 3"
    },
    {
        "q": "Parallelism leads to what ________.",
        "options": [
            "A. Distribution",
            "B. Concurrency",
            "C. Non-simultaneous",
            "D. Decentralization"
        ],
        "answer": "B. Concurrency"
    },
    {
        "q": "________ ensure that only one process at a time may be granted to resources.",
        "options": [
            "A. Mutual cooperation",
            "B. Deadlock",
            "C. Mutual inclusive",
            "D. Mutual exclusive"
        ],
        "answer": "D. Mutual exclusive"
    },
    {
        "q": "Execution of multiple activities at same time is called.",
        "options": [
            "A. All of above",
            "B. Parallel processing",
            "C. Multiprocessing",
            "D. Multitasking"
        ],
        "answer": "A. All of above"
    },
    {
        "q": "int a=5; if (a%2==0) cout<<\"Green\"; else cout<<\"Red\"; What would be the output?",
        "options": [
            "A. Red",
            "B. Green Red",
            "C. white",
            "D. Green"
        ],
        "answer": "A. Red"
    },
    {
        "q": "The operator “ <= ” in C++ is used for:",
        "options": [
            "A. Greater",
            "B. Greater than and equal",
            "C. Less than and equal",
            "D. Less"
        ],
        "answer": "C. Less than and equal"
    },
    {
        "q": "What will be the output of the following statement? int a = 2.4 + 3.1",
        "options": [
            "A. 5",
            "B. 5.4",
            "C. 5.5",
            "D. 6"
        ],
        "answer": "A. 5"
    },
    {
        "q": "What will be the output of the following? { int a= 2, b= 2, c= 4 if (a>=b) cout<< \"a is greater/ equal to b\"; if (a>=c) cout<< \"a is greater/ equal to c ;\" }",
        "options": [
            "A. a is greater/ equal to b",
            "B. None of these",
            "C. a is Less/ equal to c",
            "D. a is greater/ equal to c"
        ],
        "answer": "A. a is greater/ equal to b"
    },
    {
        "q": "______is the symbolic representation of “ Not Equal To \" Relation operators ?",
        "options": [
            "A. ==",
            "B. =/",
            "C. =!",
            "D. !="
        ],
        "answer": "D. !="
    },
    {
        "q": "In C++ ________ operators are used to compare more than one condition.",
        "options": [
            "A. Boolean",
            "B. Arithmetic",
            "C. Logical",
            "D. Relational"
        ],
        "answer": "C. Logical"
    },
    {
        "q": "The symbolic representation of AND operator is:",
        "options": [
            "A. =!",
            "B. &&",
            "C. Both A and B",
            "D. &"
        ],
        "answer": "B. &&"
    },
    {
        "q": "The ________ operator inverts the output.",
        "options": [
            "A. OR",
            "B. NAND",
            "C. AND",
            "D. NOT"
        ],
        "answer": "D. NOT"
    },
    {
        "q": "What will be the output of the program in C++? { int A=22; int B=32; if(A >=40 || B >=40) cout<<\"A and B are awesome \"; if(!( A >=23)) cout<<\"A is awesome”; }",
        "options": [
            "A. A is awesome",
            "B. B is awesome",
            "C. 22 is awesome",
            "D. A and B are awesome"
        ],
        "answer": "A. A is awesome"
    },
    {
        "q": "IDE stands for ________.",
        "options": [
            "A. Integrated development environments",
            "B. Inverted development environments",
            "C. None of these",
            "D. Integrated design environments"
        ],
        "answer": "A. Integrated development environments"
    },
    {
        "q": "CASE stands for ________.",
        "options": [
            "A. Computer-acted software engineering",
            "B. Computer-aimed software engineering",
            "C. Computer-aided semantic engineering",
            "D. Computer-aided software engineering"
        ],
        "answer": "D. Computer-aided software engineering"
    },
    {
        "q": "Wrong estimations of product lead to ________.",
        "options": [
            "A. Cost overruns",
            "B. Late delivery",
            "C. Dissatisfied customer",
            "D. All of above"
        ],
        "answer": "D. All of above"
    },
    {
        "q": "The software is moved to the maintenance phase when ________.",
        "options": [
            "A. Errors are discovered",
            "B. Changes in the software application",
            "C. Changes are done in previous modifications to introduce the errors",
            "D. All of above",
        ],
        "answer": "D. All of above"
    },
    {
        "q": "A ________ is a well-defined, structured sequence of stages in software engineering to develop the intended software product.",
        "options": [
            "A. Software",
            "B. Software life cycle",
            "C. Developed manual",
            "D. Testing"
        ],
        "answer": "B. Software life cycle"
    },
    {
        "q": "The_________ includes identifies the needs of the software users.",
        "options": [
            "A. Testing",
            "B. Developing",
            "C. Requirement analysis",
            "D. Maintenance"
        ],
        "answer": "C. Requirement analysis"
    },
    {
        "q": "The software life cycle consists of.",
        "options": [
            "A. Usage",
            "B. Development",
            "C. Maintenance",
            "D. All of above",
        ],
        "answer": "D. All of above"
    },
    {
        "q": "In the _________ phase of the software development cycle, the internal structure of the software system is established.",
        "options": [
            "A. Testing",
            "B. Requirement analysis",
            "C. Maintenance",
            "D. Design"
        ],
        "answer": "D. Design"
    },
    {
        "q": "The Requirements analysis identifies problems.",
        "options": [
            "A. True",
            "B. False"
        ],
        "answer": "A. True"
    },
    {
        "q": "The writing of programs, creation of data files and development of databases are the part of _________ phase.",
        "options": [
            "A. Developing",
            "B. Design",
            "C. Implementation",
            "D. Maintenance"
        ],
        "answer": "C. Implementation"
    },
    {
        "q": "A programmer is a person who mainly focuses on the requirement phase and design.",
        "options": [
            "A. True",
            "B. False"
        ],
        "answer": "B. False"
    },
    {
        "q": "The _________ phase involves creating a plan for the construction of the proposed system.",
        "options": [
            "A. Design",
            "B. Developing",
            "C. Testing",
            "D. Maintenance"
        ],
        "answer": "A. Design"
    },
    {
        "q": "_________ is performed for quality assurance.",
        "options": [
            "A. Testing",
            "B. Developing",
            "C. Implementation",
            "D. Analysis"
        ],
        "answer": "A. Testing"
    },
    {
        "q": "Which of the following are the major reasons for the failure in developing software.",
        "options": [
            "A. Changing requirements",
            "B. Poor communication",
            "C. Both A and B",
            "D. Lack of deep knowledge about the system"
        ],
        "answer": "C. Both A and B"
    },
    {
        "q": "The _________ is a person who involved primarily in the implementation step in the software development cycle.",
        "options": [
            "A. Software designer",
            "B. System analyst",
            "C. Programmer",
            "D. Stake holder"
        ],
        "answer": "C. Programmer"
    },
    {
        "q": "In the waterfall model, the output of one phase is input to the next phase.",
        "options": [
            "A. False",
            "B. True"
        ],
        "answer": "B. True"
    },
    {
        "q": "_________ is a significant example of iterative techniques.",
        "options": [
            "A. Rational unified process",
            "B. Free-wheeling",
            "C. Requirement unified process",
            "D. Ratio unified process"
        ],
        "answer": "A. Rational unified process"
    },
    {
        "q": "A waterfall model is a model of _________.",
        "options": [
            "A. System Maintenance",
            "B. Software Development Life Cycle",
            "C. System Enhancement",
            "D. Requirement model"
        ],
        "answer": "B. Software Development Life Cycle"
    },
    {
        "q": "_________ deals with only a part of the software's overall responsibility.",
        "options": [
            "A. Chart",
            "B. Process",
            "C. Task",
            "D. Module"
        ],
        "answer": "D. Module"
    },
    {
        "q": "Which of the following is an agile method.",
        "options": [
            "A. Rational unified programming",
            "B. Extreme programming",
            "C. Testing programming",
            "D. Throw away programming"
        ],
        "answer": "B. Extreme programming"
    },
    {
        "q": "The process in which the previous prototype may be discarded after refining the system is called.",
        "options": [
            "A. All of these",
            "B. Rapid prototyping",
            "C. Evolutionary prototyping",
            "D. Throwaway prototyping"
        ],
        "answer": "D. Throwaway prototyping"
    },
    {
        "q": "In _________ cohesion, all parts of the module are focused on the performance of a single activity.",
        "options": [
            "A. Object",
            "B. Internal",
            "C. Functional",
            "D. Logical"
        ],
        "answer": "C. Functional"
    },
    {
        "q": "The sharing of data between inter-module coupling is known as:",
        "options": [
            "A. Analysis coupling",
            "B. Function coupling",
            "C. Data coupling",
            "D. Control coupling"
        ],
        "answer": "C. Data coupling"
    },
    {
        "q": "When a module in software passes control of execution to another as in a function call is known as",
        "options": [
            "A. Data coupling",
            "B. Control coupling",
            "C. Function coupling",
            "D. Analysis coupling"
        ],
        "answer": "B. Control coupling"
    },
    {
        "q": "Maximizing Cohesion and Minimizing Coupling is an example of __________.",
        "options": [
            "A. Testing and implementation",
            "B. Implementation Strategy",
            "C. Requirement gathering",
            "D. Design Goal"
        ],
        "answer": "D. Design Goal"
    },
    {
        "q": "Allowing other modules to access ___________ of a module will corrupt the data.",
        "options": [
            "A. External Data",
            "B. Physical layer",
            "C. Application layer",
            "D. Internal data"
        ],
        "answer": "D. Internal data"
    },
    {
        "q": "Which are the possible incarnations of Information Hiding?",
        "options": [
            "A. Testing and Design goals",
            "B. Implementation and Testing goals",
            "C. Requirement and Design goals",
            "D. Design and implementation goals"
        ],
        "answer": "D. Design and implementation goals"
    },
    {
        "q": "Which one of the following is Not a software component?",
        "options": [
            "A. Software template",
            "B. Mouse",
            "C. APIs",
            "D. Objects"
        ],
        "answer": "B. Mouse"
    },
    {
        "q": "_______________________has designed for C# programmers?",
        "options": [
            "A. .Net Framework Class Library",
            "B. Standard Template Library",
            "C. Hyper Text Markup Library",
            "D. Application Programming Interface (API)"
        ],
        "answer": "A. .Net Framework Class Library"
    },
    {
        "q": "C++ programmers use _____________ for implementing objects for performing different roles.",
        "options": [
            "A. Standard Template Library",
            "B. .NET Framework Class Library",
            "C. Java Application Programmer Interface (API)",
            "D. Standalone Template Directory"
        ],
        "answer": "A. Standard Template Library"
    },
    {
        "q": "Component based software engineering is also called______________ Architecture.",
        "options": [
            "A. Class",
            "B. Component",
            "C. Building",
            "D. Object"
        ],
        "answer": "B. Component"
    },
    {
        "q": "Loosely Coupled Design Patterns help in ___________.",
        "options": [
            "A. reusing the created instance",
            "B. making the instances dependent",
            "C. recreating the new instance",
            "D. overloading the new instance"
        ],
        "answer": "A. reusing the created instance"
    },
    {
        "q": "Java Programming Interface Design pattern has been developed by________.",
        "options": [
            "A. Microsoft",
            "B. Oracle",
            "C. IBM",
            "D. CISCO"
        ],
        "answer": "B. Oracle"
    },
    {
        "q": "_____________tool can easily make drawing diagrams and changing data dictionaries.",
        "options": [
            "A. CAST",
            "B. SDLC",
            "C. CARE",
            "D. CASE"
        ],
        "answer": "D. CASE"
    },
    {
        "q": "______________________ was the main purpose of Software Quality Assurance in early years.",
        "options": [
            "A. Improving software quality",
            "B. Improving standards of software",
            "C. Fixing errors in Software",
            "D. Modeling software structure"
        ],
        "answer": "C. Fixing errors in Software"
    },
    {
        "q": "In Software Testing ____________possible lines or paths of a program are checked",
        "options": [
            "A. at most 20",
            "B. some",
            "C. exactly 10",
            "D. more than 1"
        ],
        "answer": "D. more than 1"
    },
    {
        "q": "____________testing ensures that each instruction in the software will be executed at least once.",
        "options": [
            "A. Glass Box",
            "B. White Box",
            "C. Basis path",
            "D. Black Box"
        ],
        "answer": "B. White Box"
    },
    {
        "q": "______________is hired to write User’s Documentation for the Software.",
        "options": [
            "A. Analyst",
            "B. Programmer",
            "C. Technical writer",
            "D. Designer"
        ],
        "answer": "C. Technical writer"
    },
    {
        "q": "Designing a mouse is an example of ___________.",
        "options": [
            "A. Cognetics",
            "B. Ergonomics",
            "C. Design Goal",
            "D. Turing Test"
        ],
        "answer": "B. Ergonomics"
    },
    {
        "q": "Human Machine Interface should be designed in accordance with the ______________________.",
        "options": [
            "A. Human Information Processing",
            "B. Hardware requirements",
            "C. Reduction in workload of developers",
            "D. Cost affordability of a person"
        ],
        "answer": "A. Human Information Processing"
    },
    {
        "q": "GOMS stands for_______________________.",
        "options": [
            "A. goods, operators, memory and selection",
            "B. goods, operators, management and services",
            "C. goals, operators, methods and selection",
            "D. goals, operations, methodology and selection"
        ],
        "answer": "C. goals, operators, methods and selection"
    },
    {
        "q": "A Human Machine Interface provides detail about ____________of the software.",
        "options": [
            "A. internal structure",
            "B. presentation",
            "C. integrity",
            "D. quality"
        ],
        "answer": "B. presentation"
    },
    {
        "q": "Patent law gives rights to the inventor for an invention for a limited period of ____years.",
        "options": [
            "A. 50",
            "B. 20",
            "C. 25",
            "D. 30"
        ],
        "answer": "B. 20"
    },
    {
        "q": "What do you mean by Copyrights and Patent Law?",
        "options": [
            "A. Protecting ownership and software from the client",
            "B. Protecting the ownership and selling the software",
            "C. Allowing clients to take ownership on payment",
            "D. Selling the ownership with license to a certain group"
        ],
        "answer": "A. Protecting ownership and software from the client"
    },
    {
        "q": "______________________, comes under Intellectual Property Law.",
        "options": [
            "A. Providing ownership of software to developer",
            "B. Granting ownership to the customer on payment",
            "C. Getting license of the property from the owner",
            "D. Issuing the stamp agreement of sold property"
        ],
        "answer": "A. Providing ownership of software to developer"
    },
    {
        "q": "Which one of the following is a drawback of Patent law?",
        "options": [
            "A. Expensive and limited time offer",
            "B. Expensive and time consuming",
            "C. In expensive but time consuming",
            "D. Expensive and less secure rights"
        ],
        "answer": "B. Expensive and time consuming"
    },
    {
        "q": "___________ is an operation of stack.",
        "options": [
            "A. PUSH",
            "B. DELETE",
            "C. DROP",
            "D. INSERT"
        ],
        "answer": "A. PUSH"
    },
    {
        "q": "Data Abstraction is also known as _________.",
        "options": [
            "A. Database",
            "B. Data Structure",
            "C. SQL",
            "D. DBMS"
        ],
        "answer": "B. Data Structure"
    },
    {
        "q": "Position of elements or data in two dimensional array is identified with help of _________________.",
        "options": [
            "A. bits",
            "B. Pair of indices",
            "C. strings",
            "D. characters"
        ],
        "answer": "B. Pair of indices"
    },
    {
        "q": "__________ type has the capability of storing different types of data.",
        "options": [
            "A. Array",
            "B. Stack",
            "C. List",
            "D. Aggregate"
        ],
        "answer": "D. Aggregate"
    },
    {
        "q": "A block of data of a single employee containing fields like 'name', 'salary', 'scale' and 'address' is an example of ____________type.",
        "options": [
            "A. Array",
            "B. Aggregate",
            "C. Queue",
            "D. Stack"
        ],
        "answer": "B. Aggregate"
    },
    {
        "q": "___________is the longest path from Root Node to the Leaf Node at the lowest extreme.",
        "options": [
            "A. Depth",
            "B. Path",
            "C. Width",
            "D. Terminal"
        ],
        "answer": "A. Depth"
    },
    {
        "q": "Which one is the most suitable choice of Data Structure for representing Parent Children Relationship?",
        "options": [
            "A. Queue",
            "B. Index",
            "C. Tree",
            "D. Stack"
        ],
        "answer": "C. Tree"
    },
    {
        "q": "A Sub Tree is also called a _______from the parent.",
        "options": [
            "A. Level",
            "B. Binary tree",
            "C. Branch",
            "D. Depth"
        ],
        "answer": "C. Branch"
    },
    {
        "q": "A parent of a Binary Tree can have _________nodes.",
        "options": [
            "A. more than two",
            "B. four",
            "C. at most three",
            "D. at most two"
        ],
        "answer": "D. at most two"
    },
    {
        "q": "A pointer is a storage area that holds ______________.",
        "options": [
            "A. byte code",
            "B. memory address",
            "C. bits",
            "D. pseudocode"
        ],
        "answer": "B. memory address"
    },
    {
        "q": "Pointers are used to __________________.",
        "options": [
            "A. maintain database system",
            "B. store and manage addresses",
            "C. enhance Operating System",
            "D. improve integrity of system"
        ],
        "answer": "B. store and manage addresses"
    },
    {
        "q": "A programmer is a person who mainly focuses on the requirement phase and design.",
        "options": [
            "A. False",
            "B. True"
        ],
        "answer": "A. False"
    },
    {
        "q": "Flat File Storage System is suitable in ______________ environment.",
        "options": [
            "A. Random",
            "B. Static",
            "C. Dynamic",
            "D. Continues"
        ],
        "answer": "B. Static"
    },
    {
        "q": "In File Oriented Information system records are ______________.",
        "options": [
            "A. integrated",
            "B. duplicated",
            "C. space saving",
            "D. reliable"
        ],
        "answer": "B. duplicated"
    },
    {
        "q": "In File Oriented Information system records are ______________.",
        "options": [
            "A. reliable",
            "B. duplicated",
            "C. integrated",
            "D. space saving"
        ],
        "answer": "B. duplicated"
    },
    {
        "q": "In Database Oriented Information system records are_____________.",
        "options": [
            "A. duplicated",
            "B. redundant",
            "C. integrated",
            "D. un secure"
        ],
        "answer": "C. integrated"
    },
    {
        "q": "The entire database structure is defined by ___________.",
        "options": [
            "A. Sub Schema",
            "B. Partial Schema",
            "C. Schema",
            "D. Full Schema"
        ],
        "answer": "C. Schema"
    },
    {
        "q": "Which one of the following is a role of database schema?",
        "options": [
            "A. Specifying storage structure for database records",
            "B. Defining access rights for all database users",
            "C. Enlisting software and hardware requirements",
            "D. Providing information about requirement analysis"
        ],
        "answer": "A. Specifying storage structure for database records"
    },
    {
        "q": "Database can be accessed and modified with the help of _____________.",
        "options": [
            "A. Stack",
            "B. DBMS",
            "C. Structure",
            "D. Queue"
        ],
        "answer": "B. DBMS"
    },
    {
        "q": "A typical database system is consisted of Application layer and _____________layer.",
        "options": [
            "A. Datagram Protocol",
            "B. Networking",
            "C. Database Management",
            "D. Data Link"
        ],
        "answer": "C. Database Management"
    },
    {
        "q": "A/ An __________ has certain attributes or columns which describe its characteristics.",
        "options": [
            "A. class",
            "B. tuple",
            "C. object",
            "D. entity"
        ],
        "answer": "D. entity"
    },
    {
        "q": "_________represents a row in a relation or table.",
        "options": [
            "A. Index",
            "B. Tuple",
            "C. Object",
            "D. Attribute"
        ],
        "answer": "B. Tuple"
    },
    {
        "q": "Which one of the following converts the Conceptual View into actual representation of the database?",
        "options": [
            "A. Abstraction",
            "B. DBMS",
            "C. Class",
            "D. Queue"
        ],
        "answer": "B. DBMS"
    },
    {
        "q": "Relational database model stores data in the form of_________.",
        "options": [
            "A. Classes",
            "B. Objects",
            "C. Entities",
            "D. Tables"
        ],
        "answer": "D. Tables"
    },
    {
        "q": "If a relation in a relational database model has multiple entries for a single entity, this issue is called ______________.",
        "options": [
            "A. Redundancy of the data",
            "B. Data ambiguity",
            "C. Incorrect data modeling",
            "D. Schema problem"
        ],
        "answer": "A. Redundancy of the data"
    },
    {
        "q": "_________ is a condition created within a database or data storage technology in which the same piece of data is held in two separate places.",
        "options": [
            "A. Repetition",
            "B. Data redundancy",
            "C. Table join",
            "D. Data distribution"
        ],
        "answer": "B. Data redundancy"
    },
    {
        "q": "The \"SELECT\" relational operator is used for ___________ from a relational database model?",
        "options": [
            "A. Extracting the required tuple(s)",
            "B. Extracting the required column(s)",
            "C. Extracting the schema information",
            "D. Joining two relations"
        ],
        "answer": "A. Extracting the required tuple(s)"
    },
    {
        "q": "Which of the following is not an operator for the relational database models?",
        "options": [
            "A. Join",
            "B. Sort",
            "C. Project",
            "D. Select"
        ],
        "answer": "B. Sort"
    },
    {
        "q": "The \"PROJECT\" query is used to extract __________________ from a relation in the relational database.",
        "options": [
            "A. Only a specific row",
            "B. Specified columns",
            "C. Multiple tuples at a time",
            "D. One or multiple tuples"
        ],
        "answer": "B. Specified columns"
    },
    {
        "q": "In the given relational query, \"STUDENT\" term represents: STD < - SELECT from STUDENT where StudentId = 'VU100'",
        "options": [
            "A. Child relation",
            "B. Column name",
            "C. Parent relation",
            "D. Tuple name"
        ],
        "answer": "C. Parent relation"
    },
    {
        "q": "The correct syntax for the \"PROJECT\" relational query to extract a particular column from a relation is:",
        "options": [
            "A. NEW < - PROJECT TABLENAME.ColumnName",
            "B. NEW < - PROJECT from TABLENAME where Column = 'ColumnName'",
            "C. NEW < - PROJECT ColumnName from TABLENAME",
            "D. NEW < - PROJECT ColumnName(TABLENAME)"
        ],
        "answer": "D. NEW < - PROJECT ColumnName(TABLENAME)"
    },
    {
        "q": "Which of the following keyword is used to connect two relations into a single one?",
        "options": [
            "A. LINK",
            "B. JOIN",
            "C. CONNECT",
            "D. COMBINE"
        ],
        "answer": "B. JOIN"
    },
    {
        "q": "In the relational database model, the naming convention for columns in joined relation is:",
        "options": [
            "A. RelationName.ColumnName",
            "B. RelationName-ColumnName",
            "C. RelationName:ColumnName",
            "D. ColumnName only"
        ],
        "answer": "A. RelationName.ColumnName"
    },
    {
        "q": "The links between objects in an object-oriented database are normally maintained by the _________.",
        "options": [
            "A. Application software",
            "B. DBMS",
            "C. Compiler",
            "D. Operating System"
        ],
        "answer": "B. DBMS"
    },
    {
        "q": "In the object-oriented approach, the objects that are created during the program's execution and discarded after termination are called __________ objects.",
        "options": [
            "A. Transient",
            "B. Persistent",
            "C. Resident",
            "D. Dynamic"
        ],
        "answer": "A. Transient"
    },
    {
        "q": "What is the consequence of a partially completed transaction within a database system?",
        "options": [
            "A. It makes the database more transparent",
            "B. Has no impact on the database functionality",
            "C. Impacts the database Integrity negatively",
            "D. Impacts the database Integrity positively"
        ],
        "answer": "C. Impacts the database Integrity negatively"
    },
    {
        "q": "What is not true about the \"Commercial Database Management Systems\"?",
        "options": [
            "A. It is used for large and multi-user database environments.",
            "B. It can have devastating consequences for incorrect or lost data.",
            "C. It maintains the database integrity by guarding against problems arising from partially completed operations.",
            "D. It stores information whose loss or corruption would be inconvenient rather than disastrous."
        ],
        "answer": "D. It stores information whose loss or corruption would be inconvenient rather than disastrous."
    },
    {
        "q": "The point at which all the steps in a transaction have been recorded in the log is called the __________.",
        "options": [
            "A. Rollback point",
            "B. Locking point",
            "C. Commit point",
            "D. Execute point"
        ],
        "answer": "C. Commit point"
    },
    {
        "q": "The main purpose of the rollback protocol is to:",
        "options": [
            "A. To undo the partially executed transaction",
            "B. To undo the last completed transaction",
            "C. Delete any irrelevant record from the databases",
            "D. Unlock the databases for editing"
        ],
        "answer": "A. To undo the partially executed transaction"
    },
    {
        "q": "The problem known as the _______________ can arise if one transaction is in the middle of transferring funds from one account to another when another transaction tries to compute the total deposits in the bank.",
        "options": [
            "A. Incorrect summary problem",
            "B. Transaction loss",
            "C. Transaction failure",
            "D. Lost update problem"
        ],
        "answer": "A. Incorrect summary problem"
    },
    {
        "q": "If one transaction related to funds deduction reads the current balance in an account at the point when the other transaction related to funds deduction has just read the balance but has not yet calculated the new balance, then both transactions will base their deductions on the same initial balance. The problem which may arise due to this is ___________ .",
        "options": [
            "A. Incorrect summary problem",
            "B. Transaction loss",
            "C. Lost update problem",
            "D. Transaction failure"
        ],
        "answer": "C. Lost update problem"
    },
    {
        "q": "The _________ files are inefficient when records within the file must be retrieved in an unpredictable order.",
        "options": [
            "A. Sequential",
            "B. Indexed",
            "C. Hash",
            "D. Index sequential"
        ],
        "answer": "A. Sequential"
    },
    {
        "q": "A _________ file is a file that is accessed serially from its beginning to its end as though the information is arranged in a row.",
        "options": [
            "A. Index",
            "B. Index sequential",
            "C. Sequential",
            "D. Hash"
        ],
        "answer": "C. Sequential"
    },
    {
        "q": "The overhead associated with the Indexed files is:",
        "options": [
            "A. Maintenance of a separate index file in mass storage",
            "B. Computation of address using the hash function",
            "C. Retrieval of a record in a sequential manner",
            "D. Retrieval of a record in an unpredictable manner"
        ],
        "answer": "A. Maintenance of a separate index file in mass storage"
    },
    {
        "q": "The indexes of the Indexed File are stored in the ______ as a separate file.",
        "options": [
            "A. RAM",
            "B. Main memory",
            "C. Mass storage",
            "D. Cache"
        ],
        "answer": "C. Mass storage"
    },
    {
        "q": "In a file storage system, the algorithm which converts the key value of a record into its bucket number for storing the record is known as the ___________.",
        "options": [
            "A. Index function",
            "B. Hash function",
            "C. Address translation function",
            "D. Paging function"
        ],
        "answer": "B. Hash function"
    },
    {
        "q": "In hash files, the phenomenon of a disproportionate number of keys happening to hash to the same bucket is known as ________.",
        "options": [
            "A. Clouding",
            "B. Clustering",
            "C. Grouping",
            "D. Collection"
        ],
        "answer": "B. Clustering"
    },
    {
        "q": "The simplest of the hash functions used in storing and retrieving records in hash files is _________.",
        "options": [
            "A. MD5 hash function",
            "B. Remainder method",
            "C. Mid square method",
            "D. Cryptographic method"
        ],
        "answer": "B. Remainder method"
    },
    {
        "q": "The static data collection, which is usually used for analysis in data mining, is referred to as _________.",
        "options": [
            "A. Spreadsheet",
            "B. DBMS",
            "C. Data warehouse",
            "D. Database"
        ],
        "answer": "C. Data warehouse"
    },
    {
        "q": "___________ is the form of data mining to deal with the identification of properties that distinguish between classes of data.",
        "options": [
            "A. Data analysis",
            "B. Class description",
            "C. Data computing",
            "D. Class discrimination"
        ],
        "answer": "D. Class discrimination"
    },
    {
        "q": "The form(s) of data mining is/are: Class discrimination Class description Class association",
        "options": [
            "A. a and c",
            "B. a and b",
            "C. a only",
            "D. b and c"
        ],
        "answer": "B. a and b"
    },
    {
        "q": "_________ is an approach to protect society from the abusive use of the database.",
        "options": [
            "A. Applying legal remedies",
            "B. Illegal control",
            "C. Banning the culprits",
            "D. Legalizing the commercial use of databases"
        ],
        "answer": "A. Applying legal remedies"
    },
    {
        "q": "___________ can be the approach(es) for protecting society from the abusive use of the databases. Apply legal remedies Public opinion Legalizing the commercial use of databases",
        "options": [
            "A. b and c",
            "B. a and c",
            "C. a and b",
            "D. a only"
        ],
        "answer": "C. a and b"
    },
    {
        "q": "Microbots can be used:",
        "options": [
            "A. To alleviate patients in hospitals",
            "B. For Delivering Drugs to the targeted body area through the bloodstream",
            "C. To carry out heavy medication in hospitals",
            "D. As a receptionist in hospitals"
        ],
        "answer": "B. For Delivering Drugs to the targeted body area through the bloodstream"
    },
    {
        "q": "Which of the following intelligent agent is used in Apple devices?",
        "options": [
            "A. Cortana",
            "B. Amazon echo",
            "C. Google Assistant",
            "D. Siri"
        ],
        "answer": "D. Siri"
    },
    {
        "q": "The performance of an agent can be improved by __________.",
        "options": [
            "A. Observing",
            "B. Searching",
            "C. Perceiving",
            "D. Learning"
        ],
        "answer": "D. Learning"
    },
    {
        "q": "_______ is an intelligent device, which perceives its environment through sensors and responds to stimuli using actuators.",
        "options": [
            "A. Server",
            "B. Agent",
            "C. Client",
            "D. Camera"
        ],
        "answer": "B. Agent"
    },
    {
        "q": "Learning _________ usually takes the form of expanding or altering the “facts” in an agent’s store of knowledge.",
        "options": [
            "A. declarative knowledge",
            "B. procedural knowledge",
            "C. theoretical knowledge",
            "D. lexical knowledge"
        ],
        "answer": "A. declarative knowledge"
    },
    {
        "q": "In _____________research track in artificial intelligence, researchers try to develop systems that exhibit intelligent behaviors.",
        "options": [
            "A. Theoretical",
            "B. Engineering",
            "C. Comparative",
            "D. Computational"
        ],
        "answer": "B. Engineering"
    },
    {
        "q": "In __________ research track in artificial intelligence, researchers try to develop a computational understanding of human intelligence.",
        "options": [
            "A. Computational",
            "B. Comparative",
            "C. Engineering",
            "D. Theoretical"
        ],
        "answer": "A. Computational"
    },
    {
        "q": "Artificial intelligence (AI) has two groups named _______ and _______.",
        "options": [
            "A. Researchers, Developers",
            "B. Researchers, Engineers",
            "C. Practitioners, Theoreticals",
            "D. Engineers, Scientists"
        ],
        "answer": "B. Researchers, Engineers"
    },
    {
        "q": "In the past, the Turing test (proposed by Alan Turing in _______) has served as a benchmark in measuring progress in the field of artificial intelligence.",
        "options": [
            "A. 1950",
            "B. 1941",
            "C. 1956",
            "D. 1952"
        ],
        "answer": "A. 1950"
    },
    {
        "q": "A well-known example arose as a result of the program DOCTOR (a version of the more general system called ELIZA) developed by Joseph Weizenbaum in the __________.",
        "options": [
            "A. Mid-1969s",
            "B. Mid-1958s",
            "C. Mid-1960s",
            "D. Mid-1955s"
        ],
        "answer": "C. Mid-1960s"
    },
    {
        "q": "__________ is a test for measuring the intelligence of a machine, such that a human is unable to distinguish between a machine and a human.",
        "options": [
            "A. Intelligence test",
            "B. Cognitive test",
            "C. Turing test",
            "D. IQ test"
        ],
        "answer": "C. Turing test"
    },
    {
        "q": "__________ refers to the process of understanding or describing characteristics identified by image processing.",
        "options": [
            "A. Image processing",
            "B. Image visualization",
            "C. Image editing",
            "D. Image analysis"
        ],
        "answer": "D. Image analysis"
    },
    {
        "q": "___________ refers to identification of characteristics of an image.",
        "options": [
            "A. Image visualization",
            "B. Image processing",
            "C. Image analysis",
            "D. Image editing"
        ],
        "answer": "C. Image analysis"
    },
    {
        "q": "____________ of natural language is the process of analyzing if the language conforms to the rules of grammar.",
        "options": [
            "A. Sentiment analysis",
            "B. Semantic analysis",
            "C. Syntactical analysis",
            "D. Contextual analysis"
        ],
        "answer": "C. Syntactical analysis"
    },
    {
        "q": "___________ of natural language refers to identification of conditions or settings in which a statement is generated and understanding the meaning in their accordance.",
        "options": [
            "A. Sentiment analysis",
            "B. Semantic analysis",
            "C. Syntactical analysis",
            "D. Contextual analysis"
        ],
        "answer": "D. Contextual analysis"
    },
    {
        "q": "____________ of natural language is the process of analyzing if a sentence gives clear meaning.",
        "options": [
            "A. Contextual analysis",
            "B. Syntactical analysis",
            "C. Sentiment analysis",
            "D. Semantic analysis"
        ],
        "answer": "D. Semantic analysis"
    },
    {
        "q": "Which of the following computer science(CS) has a positive impact on society?",
        "options": [
            "A. It is very easy to access and use data for business applications.",
            "B. Chances of data stolen and hacking that destroys data.",
            "C. It facilitates computer crime and cyber cyber theft.",
            "D. It is a fast changing technology, so it is required to be updated timely."
        ],
        "answer": "A. It is very easy to access and use data for business applications."
    },
    {
        "q": "Which one of the following options is correct keeping in mind the positive impacts of Computer Science on human health?",
        "options": [
            "A. Communication Issues.",
            "B. Hearing loss is more common in those listening to high volume music on the computer.",
            "C. We can take online appointments.",
            "D. Social Isolation."
        ],
        "answer": "C. We can take online appointments."
    },
    {
        "q": "Which one of the following options is correct keeping in mind the negative impacts of Computer Science on human health?",
        "options": [
            "A. Health news can be viewed online.",
            "B. Online health tips/issues are available.",
            "C. Hospitals can be managed more efficiently.",
            "D. Posture could lead to bone issues."
        ],
        "answer": "D. Posture could lead to bone issues."
    },
    {
        "q": "Which one of the following options is correct keeping in mind the negative impacts of Computer Science on the environment?",
        "options": [
            "A. This amounts to about 85 million tons of paper or 2 billion trees.",
            "B. Americans use about 680 pounds of paper per person, per year",
            "C. The average American household throws away 13,000 pieces of paper (around 1 billion trees in total in the USA) each year.",
            "D. In offices, people print unnecessarily."
        ],
        "answer": "C. The average American household throws away 13,000 pieces of paper (around 1 billion trees in total in the USA) each year."
    },
    {
        "q": "What is the core benefit of the paperless environment for online reading and publishing?",
        "options": [
            "A. Saving cottons",
            "B. Saving trees",
            "C. Saving metals",
            "D. Saving cartridge of printers"
        ],
        "answer": "B. Saving trees"
    },
    {
        "q": "Which one of the following options is correct keeping in mind the positive impacts of Computer Science on the environment?",
        "options": [
            "A. The usage of energy has increased with the use of the computer.",
            "B. In offices, people print unnecessarily.",
            "C. Paperless such as online reading and publishing.",
            "D. E-waste is sent to developing countries where people extract materials from these electronics such as gold, silver, and copper."
        ],
        "answer": "C. Paperless such as online reading and publishing."
    },
    {
        "q": "_______________deals with the protection of an individual’s information which is implemented while using the Internet on any computer or personal device.",
        "options": [
            "A. Digital agony",
            "B. Digital protection",
            "C. Digital privacy",
            "D. Digital secrecy"
        ],
        "answer": "C. Digital privacy"
    },
    {
        "q": "___________ is a set of moral principles that govern the behavior of an individual or group of people.",
        "options": [
            "A. Ethics",
            "B. Utility",
            "C. Privacy",
            "D. Protocol"
        ],
        "answer": "A. Ethics"
    },
    {
        "q": "Ethical issues are related to _____________ or the branch of knowledge dealing with these.",
        "options": [
            "A. Ethical principles",
            "B. Moral principles",
            "C. All of the mentioned",
            "D. Ethical hacking"
        ],
        "answer": "C. All of the mentioned"
    },
    {
        "q": "_______ technology is used for analyzing and monitoring traffic in network and information flow.",
        "options": [
            "A. Cloud access security brokers (CASBs)",
            "B. Managed detection and response (MDR)",
            "C. Network traffic analysis (NTA)",
            "D. Network Security Firewall (NSF)"
        ],
        "answer": "C. Network traffic analysis (NTA)"
    },
    {
        "q": "In open source software ____________ can change it.",
        "options": [
            "A. globally person",
            "B. two person",
            "C. one person",
            "D. no person"
        ],
        "answer": "D. no person"
    },
    {
        "q": "Linux is a/an ____________.",
        "options": [
            "A. Open Source software",
            "B. Package Software",
            "C. Middleware software",
            "D. Synchronous Software"
        ],
        "answer": "A. Open Source software"
    },
    {
        "q": "Copyright, patents and trademarks are the examples of",
        "options": [
            "A. Intellectual property rights",
            "B. Cyber Law",
            "C. Ethics",
            "D. Protocols"
        ],
        "answer": "A. Intellectual property rights"
    },
    {
        "q": "What does a trademark protect?",
        "options": [
            "A. Logos, names and brands",
            "B. A work of art",
            "C. A secret formula",
            "D. An invention"
        ],
        "answer": "A. Logos, names and brands"
    },
    {
        "q": "What protects the intellectual property(IP) created by artists?",
        "options": [
            "A. Copyright",
            "B. Cyber Law",
            "C. Protocols",
            "D. Ethics"
        ],
        "answer": "A. Copyright"
    },
    {
        "q": "Firewall is a type of _____________.",
        "options": [
            "A. Virus",
            "B. Worm",
            "C. Security threat",
            "D. Security-conscious piece of hardware or software"
        ],
        "answer": "D. Security-conscious piece of hardware or software"
    },
    {
        "q": "All of the following are examples of real security and privacy threats except",
        "options": [
            "A. Virus",
            "B. Hackers",
            "C. Worm",
            "D. Spam"
        ],
        "answer": "D. Spam"
    },
    {
        "q": "Firewalls are to protect against",
        "options": [
            "A. Unauthorized Attacks",
            "B. Fire Attacks",
            "C. Virus Attacks",
            "D. Data Driven Attacks"
        ],
        "answer": "A. Unauthorized Attacks"
    },
    {
        "q": "In computer security, _______ means that the information contained in a computer system can only be read by authorized persons.",
        "options": [
            "A. Confidentiality",
            "B. Integrity",
            "C. Authenticity",
            "D. Availability"
        ],
        "answer": "A. Confidentiality"
    },
    {
        "q": "How Social companies saved our data/information from theft?",
        "options": [
            "A. integration",
            "B. Anti-Virus",
            "C. Spam",
            "D. Encryption"
        ],
        "answer": "D. Encryption"
    },
    {
        "q": "_______ application is the illegal access to the network or computer system.",
        "options": [
            "A. Cracking",
            "B. Virus",
            "C. Security",
            "D. Piracy"
        ],
        "answer": "A. Cracking"
    },
    {
        "q": "What do you do if someone you know is being cyberbullied?",
        "options": [
            "A. Get into a fight with that person",
            "B. Keep it to yourself",
            "C. Let someone know",
            "D. Delete the text messages"
        ],
        "answer": "C. Let someone know"
    },
    {
        "q": "What is an example of cyberbullying?",
        "options": [
            "A. Hitting someone",
            "B. Ignoring someone that is talking to you",
            "C. Telling someone their shit is ugly",
            "D. Mean text messages"
        ],
        "answer": "D. Mean text messages"
    },
    {
        "q": "When can cyberbullying not happen?",
        "options": [
            "A. When you are at school",
            "B. When you talk to someone face to face",
            "C. When you talk with your friends",
            "D. When you are at home"
        ],
        "answer": "B. When you talk to someone face to face"
    },
    {
        "q": "Which of the following is not a proper way of how spammers get the email Ids?",
        "options": [
            "A. When a user registers to online services, blogs, and sites",
            "B. Online ad-tracking tools",
            "C. Databases formed by spiders fetching email Ids from different sources",
            "D. From offline form fill-up documents"
        ],
        "answer": "D. From offline form fill-up documents"
    },
    {
        "q": "There are ___________ major ways of spamming.",
        "options": [
            "A. 4",
            "B. 3",
            "C. 5",
            "D. 2"
        ],
        "answer": "D. 2"
    },
    {
        "q": "Which of the following is not a technique used by spammer?",
        "options": [
            "A. Junk tags associated with spam-emails",
            "B. Spoofing the domain",
            "C. Making important deals through such emails",
            "D. Sending attached virus in spams"
        ],
        "answer": "C. Making important deals through such emails"
    },
    {
        "q": "Which of the following electronic theft?",
        "options": [
            "A. Online Fraud",
            "B. Malicious code",
            "C. Illegal content",
            "D. Cyberbullying"
        ],
        "answer": "A. Online Fraud"
    },
    {
        "q": "_________ will protect children from watching illegal content on the internet.",
        "options": [
            "A. Web Developing",
            "B. Web filtering",
            "C. Web Editing",
            "D. Web Engineering"
        ],
        "answer": "B. Web filtering"
    },
    {
        "q": "Which of the following information security technique?",
        "options": [
            "A. Online Fraud",
            "B. Illegal content",
            "C. Cyberbullying",
            "D. Malicious code"
        ],
        "answer": "D. Malicious code"
    },
    {
        "q": "Which of the following contact risk?",
        "options": [
            "A. Cyberbullying",
            "B. Online Fraud",
            "C. Illegal content",
            "D. Malicious code"
        ],
        "answer": "A. Cyberbullying"
    },
    {
        "q": "Which of the following content risk?",
        "options": [
            "A. Illegal content",
            "B. Malicious code",
            "C. Online fraud",
            "D. Cyberbullying"
        ],
        "answer": "A. Illegal content"
    },
    {
        "q": "How does excessive use of technology affect children's physical health?",
        "options": [
            "A. Cyber Relationship Addiction",
            "B. Culture ambiguity",
            "C. Social Isolation",
            "D. Anxiety and Depression"
        ],
        "answer": "C. Social Isolation"
    },
    {
        "q": "Default font size of text in Microsoft Word is________.",
        "options": [
            "A. 8",
            "B. 9",
            "C. 11",
            "D. 12"
        ],
        "answer": "C. 11"
    },
    {
        "q": "A ______ appears instantly when you double click a word or select a sentence/paragraph in MS word.",
        "options": [
            "A. Tooltip",
            "B. Mini Toolbar",
            "C. None of above",
            "D. Dialogue Box"
        ],
        "answer": "B. Mini Toolbar"
    },
    {
        "q": "Which of the following is not a “Menu/Ribbon” in MS Word?",
        "options": [
            "A. References",
            "B. Styles",
            "C. View",
            "D. Home"
        ],
        "answer": "B. Styles"
    },
    {
        "q": "By default on the top left corner of MS Word’s window commonly used commands are given in a bar, this bar is known as______.",
        "options": [
            "A. Menu Bar",
            "B. Mini Toolbar",
            "C. Quick Access Toolbar",
            "D. Ribbon Tool"
        ],
        "answer": "C. Quick Access Toolbar"
    },
    {
        "q": "Is it possible to add different commands available in MS Word on Quick Access Toolbar?",
        "options": [
            "A. No",
            "B. Yes"
        ],
        "answer": "B. Yes"
    },
    {
        "q": "Whenever you save an MS Word file on your system, it is saved with the _____extension.",
        "options": [
            "A. .txt",
            "B. .wdx",
            "C. .wrd",
            "D. .docx"
        ],
        "answer": "D. .docx"
    },
    {
        "q": "In MS Word, If you want to give vertical space between the lines of a text, you can use the line spacing command option of ______ group of Home Ribbon.",
        "options": [
            "A. Styles",
            "B. Layout",
            "C. Paragraph",
            "D. Design"
        ],
        "answer": "C. Paragraph"
    },
    {
        "q": "In MS Word you can change the font color, size or font family using the______group.",
        "options": [
            "A. Font",
            "B. Style sheet",
            "C. Editing",
            "D. Text"
        ],
        "answer": "A. Font"
    },
    {
        "q": "In MS Word, under the home ribbon, multiple groups of similar commands are available, which group provides the facility of searching or replacing?",
        "options": [
            "A. Styles",
            "B. Editing",
            "C. Paragraph",
            "D. Clipboard"
        ],
        "answer": "B. Editing"
    },
    {
        "q": "In MS Word, by default, Copy and Cut options under Home Ribbon are active when you open a blank document.",
        "options": [
            "A. False",
            "B. True"
        ],
        "answer": "A. False"
    },
    {
        "q": "In MS Word ______ ribbon contains the clipboard group.",
        "options": [
            "A. Clipboard",
            "B. Home",
            "C. View",
            "D. Insert"
        ],
        "answer": "B. Home"
    },
    {
        "q": "In MS Word, which of the following option retains the formatting of the text you copied?",
        "options": [
            "A. Keep text only",
            "B. Merge Formatting",
            "C. Both a and b",
            "D. Keep source formatting"
        ],
        "answer": "D. Keep source formatting"
    },
    {
        "q": "After selection of paragraph/sentence and by applying clear formatting the font family of text gets changed to______.",
        "options": [
            "A. Calibri",
            "B. Arial",
            "C. Arial Black",
            "D. Times New Roman"
        ],
        "answer": "A. Calibri"
    },
    {
        "q": "In the Font group under home ribbon, which option is used to change the case of text from lower to upper or vice versa?",
        "options": [
            "A. Cap Case",
            "B. Toggle Case",
            "C. Sentence Case",
            "D. Lower Case"
        ],
        "answer": "B. Toggle Case"
    },
    {
        "q": "In MS Word _______ option is used to give a background color to text under paragraph group.",
        "options": [
            "A. Font Color",
            "B. Text effect and Typography",
            "C. Highlighting",
            "D. Shading"
        ],
        "answer": "D. Shading"
    },
    {
        "q": "In MS Word, which of the facility is provided by the paragraph group under home ribbon?",
        "options": [
            "A. Shading",
            "B. Alignment",
            "C. All of above",
            "D. Sorting"
        ],
        "answer": "C. All of above"
    },
    {
        "q": "In MS Word, which type of new bullet/bullets a user can choose of his own choice?",
        "options": [
            "A. Pictorial",
            "B. Textual",
            "C. Symbolic",
            "D. All of above"
        ],
        "answer": "D. All of above"
    },
    {
        "q": "In MS Word, the paragraph group under the Home Ribbon can be used to create a ______ list.",
        "options": [
            "A. Bullet",
            "B. Number",
            "C. Multi-level",
            "D. All of above"
        ],
        "answer": "D. All of above"
    },
    {
        "q": "In MS word, under paragraph group of home ribbon we can customize the bullet with some picture or some special symbol.Is it true?",
        "options": [
            "A. No",
            "B. Yes"
        ],
        "answer": "B. Yes"
    },
    {
        "q": "Is it true or not that we can modify the font size, color and font family of given styles in MS word?",
        "options": [
            "A. False",
            "B. True"
        ],
        "answer": "B. True"
    },
    {
        "q": "In MS Word, the formatting characteristics of Styles are based on ______.",
        "options": [
            "A. Line spacing or indentation",
            "B. Font Family, Font size, Font color",
            "C. All of above",
            "D. Border or shading"
        ],
        "answer": "C. All of above"
    },
    {
        "q": "In MS Word we can check the total no of occurrences with the position of a particular word or phrase in the whole document by using ____ option available in the editing group under the Home ribbon.",
        "options": [
            "A. Replace",
            "B. Find",
            "C. Search",
            "D. Select"
        ],
        "answer": "B. Find"
    },
    {
        "q": "In MS Word, Find Command belongs to the _____ group of Home Ribbon.",
        "options": [
            "A. Editing",
            "B. None of these",
            "C. Search",
            "D. Find()"
        ],
        "answer": "A. Editing"
    },
    {
        "q": "In MS Word, you can add a table into your document using _______ Ribbon.",
        "options": [
            "A. Home",
            "B. Table",
            "C. Design",
            "D. Insert"
        ],
        "answer": "D. Insert"
    },
    {
        "q": "In MS Word, which of the following group does not belong to the Insert ribbon?",
        "options": [
            "A. Paragraph",
            "B. Illustrations",
            "C. Pages",
            "D. Text"
        ],
        "answer": "A. Paragraph"
    },
    {
        "q": "In MS Word, Screenshot option is available in ______ group of Insert ribbon.",
        "options": [
            "A. Media",
            "B. None of above",
            "C. Illustrations",
            "D. Screenshots"
        ],
        "answer": "C. Illustrations"
    },
    {
        "q": "In MS Word, a blank page can be inserted anywhere in the document. Is it false?",
        "options": [
            "A. Yes",
            "B. No"
        ],
        "answer": "A. Yes"
    },
    {
        "q": "In MS Word, we can convert the given text into a table using the Tables group of Insert Ribbon. For Example \" ALI 38 Boy \" can be converted into a table of three columns if each word in a sentence has _____ between them.",
        "options": [
            "A. 1 space using space button",
            "B. 4 spaces using space button",
            "C. Space using Tab button",
            "D. None of above"
        ],
        "answer": "C. Space using Tab button"
    },
    {
        "q": "In MS Word, we can add different kinds of shapes to our document like rectangles, lines, hexagons, and flowchart symbols using Illustration group, __________ ribbon provides this facility.",
        "options": [
            "A. Insert",
            "B. Design",
            "C. View",
            "D. Home"
        ],
        "answer": "A. Insert"
    },
    {
        "q": "In MS Word, A _______ option is available under the illustration group of Insert Ribbon by using that we can directly add the image of currently opened windows by clicking any one of them.",
        "options": [
            "A. Images",
            "B. Pictures",
            "C. Screenshot",
            "D. Insert"
        ],
        "answer": "C. Screenshot"
    },
    {
        "q": "In MS Word, comments can be added to document via Comments group, This group belong to the __________Ribbon.",
        "options": [
            "A. References",
            "B. Comments",
            "C. Insert",
            "D. Home"
        ],
        "answer": "A. References"
    },
    {
        "q": "In MS Word. Text group under Insert ribbon does not include_________command.",
        "options": [
            "A. Comment",
            "B. Insert Date and Time",
            "C. Explore Quick Part",
            "D. Word Art"
        ],
        "answer": "A. Comment"
    },
    {
        "q": "The space left between the margin and the start of a paragraph is called _____________",
        "options": [
            "A. Gutter",
            "B. Alignment",
            "C. Spacing",
            "D. Indentation"
        ],
        "answer": "D. Indentation"
    },
    {
        "q": "Landscape is?",
        "options": [
            "A. Font Style",
            "B. Page Layout",
            "C. Paper Size",
            "D. Page Orientation"
        ],
        "answer": "D. Page Orientation"
    },
    {
        "q": "The space left between the margin and the start of a paragraph is called ________________",
        "options": [
            "A. Indentation",
            "B. Spacing",
            "C. Gutter",
            "D. Alignment"
        ],
        "answer": "A. Indentation"
    },
    {
        "q": "What is the default page size for word document?",
        "options": [
            "A. Legal",
            "B. Letter",
            "C. A4",
            "D. None of these"
        ],
        "answer": "B. Letter"
    },
    {
        "q": "Which of the following is not a type of page margin?",
        "options": [
            "A. Top",
            "B. Right",
            "C. Left",
            "D. Center"
        ],
        "answer": "D. Center"
    },
    {
        "q": "If you want to Go to the end of a document, press ______________ shortcut key from the keyboard.",
        "options": [
            "A. Shift+End",
            "B. Home",
            "C. Ctrl+End",
            "D. End"
        ],
        "answer": "C. Ctrl+End"
    },
    {
        "q": "The insertion point _________________________",
        "options": [
            "A. Is located under the standard toolbar and shortcut buttons",
            "B. Indicated the location where text line when necessary",
            "C. Is located under the standard toolbar and has shortcut buttons",
            "D. Provides features for changing margins, tabs, and indentations"
        ],
        "answer": "B. Indicated the location where text line when necessary"
    },
    {
        "q": "Single spacing in MS-word document causes__________ Point line spacing?",
        "options": [
            "A. 10",
            "B. 12",
            "C. 16",
            "D. 14"
        ],
        "answer": "B. 12"
    },
    {
        "q": "Which item is printed at the bottom of each page",
        "options": [
            "A. Title",
            "B. Footer",
            "C. Header",
            "D. Footnote"
        ],
        "answer": "B. Footer"
    },
    {
        "q": "A bookmark is an item or location in a document that you identify a name for future Reference.Which of the following tasks is accomplished by using bookmarks?",
        "options": [
            "A. To add hyperlinks in a web page",
            "B. To quickly jump to a specific location in the document",
            "C. To mark the ending of a page of document",
            "D. None of These"
        ],
        "answer": "B. To quickly jump to a specific location in the document"
    },
    {
        "q": "What item contains detailed information about something in the text ?",
        "options": [
            "A. Header",
            "B. Footnote",
            "C. Footer",
            "D. Head Note"
        ],
        "answer": "B. Footnote"
    },
    {
        "q": "Where does Word insert a table of contents?",
        "options": [
            "A. On the first page of the report",
            "B. At the insertion point",
            "C. Before the document title",
            "D. After the cover page"
        ],
        "answer": "B. At the insertion point"
    },
    {
        "q": "Where footnotes appear in a document?",
        "options": [
            "A. None",
            "B. Bottom of a Page",
            "C. End of Heading",
            "D. End of document"
        ],
        "answer": "B. Bottom of a Page"
    },
    {
        "q": "Why are headers and footers used in documents?",
        "options": [
            "A. To allow page headers and footers to appear on a document when it is printed.",
            "B. To enhance the overall appearance of the document",
            "C. To mark the starting and ending of a page",
            "D. To mark large document more readable"
        ],
        "answer": "A. To allow page headers and footers to appear on a document when it is printed."
    },
        {
        "q": "Meaning of a statement in natural language depends on its:",
        "options": [
            "A. Grammar",
            "B. Context",
            "C. Formatting",
            "D. Style"
        ],
        "answer": "B. Context"
    },
    {
        "q": "Data mining is practiced on data collections, called data warehouses.",
        "options": [
            "A. vibrant",
            "B. forceful",
            "C. static",
            "D. dynamic"
        ],
        "answer": "D. dynamic"
    },
    {
        "q": "Ethics and legality are essential in many industries including:",
        "options": [
            "A. All of these",
            "B. Doctors",
            "C. Government officer",
            "D. Teachers"
        ],
        "answer": "A. All of these"
    },
    {
        "q": "In hash file, if a disproportionate number of keys happen to hash to the same bucket, it may cause",
        "options": [
            "A. faster search",
            "B. even distribution",
            "C. efficient retrieval",
            "D. clustering"
        ],
        "answer": "D. clustering"
    },
    {
        "q": "The Turing test result of program DOCTOR developed by Joseph Weizenbaum was:",
        "options": [
            "A. Failed",
            "B. No result",
            "C. Ambiguous",
            "D. Passed"
        ],
        "answer": "D. Passed"
    },
    {
        "q": "In hash file, the key used to identify an employee's record is the ______.",
        "options": [
            "A. employee's position",
            "B. department",
            "C. name",
            "D. identification number"
        ],
        "answer": "D. identification number"
    },
    {
        "q": "A track that leads to a simulation oriented methodology:",
        "options": [
            "A. Theoretical",
            "B. Intelligent",
            "C. Proper",
            "D. Engineering"
        ],
        "answer": "D. Engineering"
    },
    {
        "q": "Copyright can be applied on:",
        "options": [
            "A. All of these",
            "B. Music",
            "C. Dramatic works",
            "D. Artistic work"
        ],
        "answer": "A. All of these"
    },
    {
        "q": "Ethical issues are related to:",
        "options": [
            "A. Linguistics principles",
            "B. Moral principles",
            "C. AI principles",
            "D. Behaviour principles"
        ],
        "answer": "B. Moral principles"
    },
    {
        "q": "Usual way of protecting software is:",
        "options": [
            "A. Company monogram",
            "B. Copyright",
            "C. Patent",
            "D. Rules"
        ],
        "answer": "B. Copyright"
    },


    {
        "q": "In Encryption, a digital signature is actually a ____",
        "options": [
            "A. server",
            "B. bit pattern",
            "C. protocol",
            "D. array of characters"
        ],
        "answer": "B. bit pattern"
    },
    {
        "q": "The traditional ways of protecting information to control its access before Encryption was using ______",
        "options": [
            "A. Passwords",
            "B. Image processing",
            "C. Digital Signatures",
            "D. Finger prints"
        ],
        "answer": "A. Passwords"
    },
    {
        "q": "By using ______ we can have a secure version of the applications.",
        "options": [
            "A. 3G",
            "B. Encryption techniques",
            "C. XML",
            "D. Spam filters"
        ],
        "answer": "B. Encryption techniques"
    },
    {
        "q": "In Pakistan, the Federal Investigation Agency (FIA) act was passed in the year ______",
        "options": [
            "A. 1974",
            "B. 1975",
            "C. 1976",
            "D. 1977"
        ],
        "answer": "A. 1974"
    },
    {
        "q": "In Pakistan, the Prevention of Electronic Crimes Ordinance was passed in the year ______",
        "options": [
            "A. 2007",
            "B. 2009",
            "C. 2010",
            "D. 2008"
        ],
        "answer": "A. 2007"
    },
    {
        "q": "In context of legal approaches to network security, one of the main issue is ______",
        "options": [
            "A. lack of skilled persons in this area",
            "B. lack of data",
            "C. International law that makes Illegal in one country and legal in another country",
            "D. slow technological development"
        ],
        "answer": "C. International law that makes Illegal in one country and legal in another country"
    },


  {
    "q": "The correct syntax of while loop is:",
    "options": [
      "A. while()\n{\nif(condition)\n{\n//statements\n}",
      "B. while(condition);\n{\n//statements\n}",
      "C. while(condition)\n{\n//statements\n}",
      "D. {\n//statements\n}while(condition)"
    ],
    "answer": "C. while(condition)\n{\n//statements\n}"
  },
  {
    "q": "What will be the output of the following code?\nint marks = 72;\nif(marks >= 90)\n cout<<\"Eligible for scholarship\";\nelse\n cout<<\"Not eligible for scholarship\";",
    "options": [
      "A. Runtime error",
      "B. Eligible for scholarship",
      "C. Not eligible for scholarship",
      "D. Might be eligible"
    ],
    "answer": "C. Not eligible for scholarship"
  },
  {
    "q": "Which control structure is used to repeat a sequence of instructions?",
    "options": [
      "A. Condition",
      "B. Statement",
      "C. Loop",
      "D. Pseudocode"
    ],
    "answer": "C. Loop"
  },
  {
    "q": "What will be the output of the following pseudocode?\nint marks = 75;\nif (marks >= 33)\n Output (\"Pass\")\nelse\n Output (\"Fail\")",
    "options": [
      "A. 75",
      "B. Fail",
      "C. 33",
      "D. Pass"
    ],
    "answer": "D. Pass"
  },
  {
    "q": "Which operator is used for assignment in C++?",
    "options": [
      "A. +",
      "B. ;",
      "C. =",
      "D. =="
    ],
    "answer": "C. ="
  },
  {
    "q": "Pseudocode is an informal notational system.",
    "options": [
      "A. Program Instructions",
      "B. Pseudocode",
      "C. Method",
      "D. Model"
    ],
    "answer": "B. Pseudocode"
  },
  {
    "q": "A collection of primitives and rules to combine them is called:",
    "options": [
      "A. Programming Language",
      "B. Programming Instructions",
      "C. Programming Code",
      "D. Programming Model"
    ],
    "answer": "A. Programming Language"
  },
  {
    "q": "Semantics refers to the ____ of the primitive.",
    "options": [
      "A. Properties",
      "B. Meaning",
      "C. Symbolic Representation",
      "D. Characteristics"
    ],
    "answer": "B. Meaning"
  },
  {
    "q": "In formal programming language the algorithms can be expressed at a conceptually ____ level than in machine language.",
    "options": [
      "A. ground",
      "B. lower",
      "C. higher",
      "D. medium"
    ],
    "answer": "C. higher"
  },
  {
    "q": "An algorithm is a method for solving a problem in a ____ order.",
    "options": [
      "A. symmetric",
      "B. systematic",
      "C. static",
      "D. semantic"
    ],
    "answer": "B. systematic"
  },
  {
    "q": "The standard formula for converting Celsius to Fahrenheit is:",
    "options": [
      "A. F = 32C + (5/9)",
      "B. F = (9/5)C + 32",
      "C. F = 32C + (9/5)",
      "D. F = (5/9)C + 32"
    ],
    "answer": "B. F = (9/5)C + 32"
  },
  {
    "q": "A formal representation of an algorithm is a:",
    "options": [
      "A. Process Model",
      "B. Process Design",
      "C. Analysis",
      "D. Program"
    ],
    "answer": "D. Program"
  },
  {
    "q": "An algorithm must have a well-established structure in terms of the order of its ____.",
    "options": [
      "A. Execution",
      "B. Termination",
      "C. Return",
      "D. Analysis"
    ],
    "answer": "A. Execution"
  },
  {
    "q": "An algorithm must have well-defined boundaries and must execute and finish, therefore, its execution must lead to an ____.",
    "options": [
      "A. Statement",
      "B. Condition",
      "C. Start",
      "D. End"
    ],
    "answer": "D. End"
  },
  {
    "q": "Which of the following is NOT a characteristic of a good algorithm?",
    "options": [
      "A. Terminating Process",
      "B. Unstructured",
      "C. Executable",
      "D. Unambiguous"
    ],
    "answer": "B. Unstructured"
  },
  {
    "q": "Algorithm is simply a ____ that define how a task is ____.",
    "options": [
      "A. set of steps, performed",
      "B. a single step, performed",
      "C. set of steps, halted",
      "D. a single step, halted"
    ],
    "answer": "A. set of steps, performed"
  },
  {
    "q": "Researchers believe that imagination and creativity are forms of ____.",
    "options": [
      "A. machine cycle",
      "B. human cognition only",
      "C. algorithm execution",
      "D. single giant step"
    ],
    "answer": "C. algorithm execution"
  },
  {
    "q": "Which of the following is NOT part of the algorithm to convert KM to Meters?",
    "options": [
      "A. Add 1000 to the output",
      "B. Take input of KM's",
      "C. Multiply the input with 1000",
      "D. Display the result"
    ],
    "answer": "A. Add 1000 to the output"
  },
  {
    "q": "In Encryption, a digital signature is actually a ____",
    "options": [
      "A. server",
      "B. bit pattern",
      "C. protocol",
      "D. array of characters"
    ],
    "answer": "B. bit pattern"
  },
  {
    "q": "The traditional ways of protecting information to control its access before Encryption was using ______",
    "options": [
      "A. Passwords",
      "B. Image processing",
      "C. Digital Signatures",
      "D. Finger prints"
    ],
    "answer": "A. Passwords"
  },
  {
    "q": "By using ______ we can have a secure version of the applications.",
    "options": [
      "A. 3G",
      "B. Encryption techniques",
      "C. XML",
      "D. Spam filters"
    ],
    "answer": "B. Encryption techniques"
  },
  {
    "q": "In Pakistan, the Federal Investigation Agency (FIA) act was passed in the year ______",
    "options": [
      "A. 1974",
      "B. 1975",
      "C. 1976",
      "D. 1977"
    ],
    "answer": "A. 1974"
  },
  {
    "q": "In Pakistan, the Prevention of Electronic Crimes Ordinance was passed in the year ______",
    "options": [
      "A. 2007",
      "B. 2009",
      "C. 2010",
      "D. 2008"
    ],
    "answer": "A. 2007"
  },
  {
    "q": "In context of legal approaches to network security, one of the main issue is ______",
    "options": [
      "A. lack of skilled persons in this area",
      "B. lack of data",
      "C. International law that makes Illegal in one country and legal in another country",
      "D. slow technological development"
    ],
    "answer": "C. International law that makes Illegal in one country and legal in another country"
  },

    {
        "q": "Which of the following is correct in context of content filtering?",
        "options": [
            "A. It allows all content to pass through without restrictions.",
            "B. It only filters content related to malware.",
            "C. It is not part of Internet firewalls.",
            "D. It matches strings of characters to allow content through."
        ],
        "answer": "D. It matches strings of characters to allow content through."
    },
    {
        "q": "Which of the following significantly increases the chances of fraudulent activity?",
        "options": [
            "A. Gaming addiction",
            "B. Terrorism",
            "C. Identity theft",
            "D. Cyber bullying"
        ],
        "answer": "C. Identity theft"
    },
    {
        "q": "In MS Word, from the Paragraph group, what can you adjust regarding line?",
        "options": [
            "A. Line thickness.",
            "B. Line colour.",
            "C. Line numbering.",
            "D. Line spacing within a paragraph."
        ],
        "answer": "D. Line spacing within a paragraph."
    },
    {
        "q": "What does the Bullet Library allow you to do in Microsoft Word?",
        "options": [
            "A. Add bullets to a list.",
            "B. Change the font style.",
            "C. Adjust paragraph spacing.",
            "D. Insert images."
        ],
        "answer": "A. Add bullets to a list."
    },
    {
        "q": "In MS Word, we have to write an equation with 2 as a number and 3 as its power. Which option is suitable for this purpose?",
        "options": [
            "A. Superscript",
            "B. Case",
            "C. Font size",
            "D. Subscript"
        ],
        "answer": "A. Superscript"
    },
    {
        "q": "In MS Word, we can set line spacing from group",
        "options": [
            "A. Font",
            "B. Clipboard",
            "C. Insert",
            "D. Paragraph"
        ],
        "answer": "D. Paragraph"
    },
    {
        "q": "Most famous word processor is:",
        "options": [
            "A. Wordpad",
            "B. MS-word",
            "C. Notepad",
            "D. MS-Excel"
        ],
        "answer": "B. MS-word"
    },
    {
        "q": "In MS Word, shortcut key of paste is",
        "options": [
            "A. Alt+p",
            "B. Ctrl+v",
            "C. Ctrl+p",
            "D. Alt+v"
        ],
        "answer": "B. Ctrl+v"
    },
    {
        "q": "Ctrl+z is used for:",
        "options": [
            "A. Save",
            "B. Undo",
            "C. Load",
            "D. Redo"
        ],
        "answer": "B. Undo"
    },
    {
        "q": "In MS Word, we can apply bullets from home ribbon group called",
        "options": [
            "A. Styles",
            "B. Clipboard",
            "C. Font",
            "D. Paragraph"
        ],
        "answer": "D. Paragraph"
    },

    {
        "q": "In Microsoft word, which command can you use if you change your mind again and want to reapply a previously undone action?",
        "options": [
            "A. Undo",
            "B. Quick Print",
            "C. Redo",
            "D. Save"
        ],
        "answer": "C. Redo"
    },
    {
        "q": "In MS Word, Paste option is a part of home ribbon group called",
        "options": [
            "A. Insert",
            "B. Clipboard",
            "C. Font",
            "D. Paragraph"
        ],
        "answer": "B. Clipboard"
    },
    {
        "q": "Which of the following is often integrated with content filters in the context of the internet?",
        "options": [
            "A. Antivirus software",
            "B. Email servers",
            "C. Search engines",
            "D. Internet firewalls"
        ],
        "answer": "D. Internet firewalls"
    },
    {
        "q": "How is content filtering used to implement company policies?",
        "options": [
            "A. By filtering out websites unrelated to work.",
            "B. By allowing unlimited access to all websites.",
            "C. By blocking internet access for employees.",
            "D. By promoting unrestricted usage of social media sites."
        ],
        "answer": "A. By filtering out websites unrelated to work."
    },
    {
        "q": "In MS Word, where you can find options to add bullet lists, number lists, or outlines to a document?",
        "options": [
            "A. In the Header and Footer group",
            "B. In the Font dialog window",
            "C. In the Spell-check settings",
            "D. Within the Paragraph group"
        ],
        "answer": "D. Within the Paragraph group"
    },
    {
        "q": "In MS Word, the option of justify is in group",
        "options": [
            "A. Clipboard",
            "B. Font",
            "C. Insert",
            "D. Paragraph"
        ],
        "answer": "D. Paragraph"
    },
    {
        "q": "In MS Word, what are the types of commands included in the Font group?",
        "options": [
            "A. Alignment commands",
            "B. Sorting commands",
            "C. Printing commands",
            "D. Formatting commands"
        ],
        "answer": "D. Formatting commands"
    },
    {
        "q": "What is the significance of the Home ribbon in MS Word?",
        "options": [
            "A. It is one of the most important ribbons.",
            "B. It contains decorative elements for documents.",
            "C. It is one of the least used ribbons.",
            "D. It only contains the clipboard group."
        ],
        "answer": "A. It is one of the most important ribbons."
    },
    {
        "q": "In Microsoft Word, what is the goal behind placing commands within groups and tabs?",
        "options": [
            "A. To hide commands from users",
            "B. To discourage software usage",
            "C. To minimize the number of mouse clicks",
            "D. To confuse users"
        ],
        "answer": "C. To minimize the number of mouse clicks"
    },
    {
        "q": "How can you open the Paragraph dialog window in MS Word?",
        "options": [
            "A. By using the Dialog expander arrow.",
            "B. By clicking the Format button.",
            "C. By right-clicking in the document.",
            "D. By pressing Ctrl+P."
        ],
        "answer": "A. By using the Dialog expander arrow."
    },
    
  {
    "q": "The Word Count command on the Tools menu displays the number of words as well as the number of _________ in the current document",
    "options": ["Lines", "Paragraphs", "all of the above", "Characters"],
    "answer": "all of the above"
  },
  {
    "q": "The _____________ feature in Word automatically corrects certain spelling, typing, and capitalisation or grammar errors.",
    "options": ["AutoSpell", "AutoFix", "AutoMark", "AutoCorrect"],
    "answer": "AutoCorrect"
  },
  {
    "q": "What is the name of the feature that allows us to take a step backward if we've made a mistake?",
    "options": ["Redo", "Backspace", "Undo", "Cancel"],
    "answer": "Undo"
  },
  {
    "q": "How many margins are surrounded around the document page?",
    "options": ["Four (center, top, left and bottom)", "Two (landscape and portrait)", "Four (top, bottom, right and left)", "Two (header and footer)"],
    "answer": "Four (top, bottom, right and left)"
  },
  {
    "q": "Which of the following drop down contains the commands: Set Proofing Language and Language Preferences.",
    "options": ["Language", "Thesaurus", "Translate", "Word Count"],
    "answer": "Language"
  },
  {
    "q": "Which of the following does not belong to Translate command in MS Word?",
    "options": ["Mini Translator", "Translate Document", "Translate Selected Text", "Spell Check"],
    "answer": "Spell Check"
  },
  {
    "q": "Which of the following commands is present in the Review tab?",
    "options": ["Comments", "All of the above", "Proofing", "Tracking"],
    "answer": "All of the above"
  },
  {
    "q": "Changing the appearance of an MS Word document is called:",
    "options": ["Reviewing", "Formatting", "Editing", "Proofing"],
    "answer": "Formatting"
  },
  {
    "q": "You have just completed your first novel. It's perfect but the publisher still wants their editor to check it over and make any necessary corrections. You reluctantly agree but you want final say over any changes. \"Grammer is more of an art than a science\", you argue. But how can you review the editor's changes in a 1500-page novel without missing any of those changes?",
    "options": ["Track changes", "Word count", "Find and replace", "Quick parts"],
    "answer": "Track changes"
  },
  {
    "q": "How can you quickly delete ALL the comments made within a document at once?",
    "options": ["Right-click on each comment within the document and select Delete Comment from the list.", "Under the Review tab on the Ribbon, in the Comments group, select Delete and then Delete All Comments in Document.", "All of the options listed above are correct.", "Click on Select All Comments under the Review tab on the ribbon and press the Delete button on your keyboard."],
    "answer": "Under the Review tab on the Ribbon, in the Comments group, select Delete and then Delete All Comments in Document."
  },
  {
    "q": "____________ are advanced features that can speed up editing or formatting you may perform often in a word document.",
    "options": ["Track changes", "Comment", "Macros", "Ribbon"],
    "answer": "Macros"
  },
  {
    "q": "Which command Inserts a comment at the active cell?",
    "options": ["(Ctrl + F2)", "(Shift + F2)", "(Shift + F4)", "(Shif + F3)"],
    "answer": "(Shift + F2)"
  },
  {
    "q": "What action do you need to take to switch off track changes?",
    "options": ["Under the Review tab on the Ribbon, in the Tracking group, click on the Show Markup button to switch track changes off.", "Under the Review tab on the Ribbon, in the Tracking group, click on the Track Changes button to switch track changes off.", "None of the options listed above are correct.", "Under the Review tab on the Ribbon, in the Changes group, click on the Accept button to switch track changes off."],
    "answer": "Under the Review tab on the Ribbon, in the Tracking group, click on the Track Changes button to switch track changes off."
  },
  {
    "q": "How do you permanently apply all the edits that were made in track changes, to a document?",
    "options": ["In the Display for Review box in the Tracking group, select No Markup to accept all the changes in a document.", "Right-click the document and select Apply Track Changes and Stop Tracking from the list to accept all the changes in a document.", "Click on the dropdown arrow below the Accept button in the Changes group and select Accept All Changes.", "Click on the Track Changes button in the Tracking group to accept all changes in a document and to stop tracking changes."],
    "answer": "Click on the dropdown arrow below the Accept button in the Changes group and select Accept All Changes."
  },
  {
    "q": "To block another user from switching off track changes in a document, what function should you enable?",
    "options": ["The Lock Tracking option, which is located under the Track Changes button, will discourage users from switching off track changes.", "All of the options listed above are correct.", "No function is necessary, once Track Changes is switched on, they cannot be stopped unless all changes are accepted.", "Activate the Reviewing Pane in the Tracking group. This will prevent other users from switching off the track changes function."],
    "answer": "The Lock Tracking option, which is located under the Track Changes button, will discourage users from switching off track changes."
  },
  {
    "q": "Which of the following provides a list of synonyms?",
    "options": ["Spelling and Grammar", "Find Command", "Replace Command", "Thesaurus"],
    "answer": "Thesaurus"
  },
  {
    "q": "The ribbon in Word 2007 consists of a series of?",
    "options": ["Gates", "Smaller ribbons", "Tabs", "Icons"],
    "answer": "Tabs"
  },
  {
    "q": "In PowerPoint, the header and footer button can be found on the insert tab in what group?",
    "options": ["Illustrations group", "Object group", "Tables group", "Text group"],
    "answer": "Text group"
  },
  {
    "q": "Which view helps to rearrange the slides easily and quickly?",
    "options": ["Notes page", "Slide sorter", "Normal", "Slide master"],
    "answer": "Slide sorter"
  },
  {
    "q": "The PowerPoint view that displays only text (title and bullets) is ____________",
    "options": ["Notes page view", "Outline view", "Slide show", "Slide sorter"],
    "answer": "Outline view"
  },
  {
    "q": "What is the default PowerPoint standard layout?",
    "options": ["Comparison", "Title only", "Blank", "Title slide"],
    "answer": "Title slide"
  },
  {
    "q": "Which type of view is not present in MS PowerPoint?",
    "options": ["Slide show", "Extreme animation", "Normal", "Slide sorter"],
    "answer": "Extreme animation"
  },
  {
    "q": "Which feature is not in MS PowerPoint?",
    "options": ["Slide show", "Scan a virus", "Zoom", "Background color"],
    "answer": "Scan a virus"
  },
  {
    "q": "What's the best way to design the layout for your slides?",
    "options": ["Create layouts for slides, handouts and notes using the Master Layout dialog box in slide master view", "None of above", "Apply templates from the Slide Design task pane", "For each new slide, select a layout from the Slide Layout task pane"],
    "answer": "Create layouts for slides, handouts and notes using the Master Layout dialog box in slide master view"
  },
  {
    "q": "In which bar we can see the current position of the slide?",
    "options": ["Status bar", "Title bar", "View option bar", "Ribbon"],
    "answer": "Status bar"
  },
  {
    "q": "Which of the following file format can be added to a PowerPoint show?",
    "options": [".wav", "All of these", ".gif", ".jpg"],
    "answer": "All of these"
  },
  {
    "q": "In a presentation of PowerPoint, the special effects used to introduce slides are known as ________________",
    "options": ["None of the above", "Transitions", "Custom Animation", "Annotations"],
    "answer": "Transitions"
  },
  {
    "q": "What are the three options available in Insert >> Picture menu?",
    "options": ["Clipart, From File, Shapes", "Clipart, From Files, AutoShapes", "Clipart, Pictures, Shapes", "Clipart, Pictures, AutoShapes"],
    "answer": "Clipart, From File, Shapes"
  },
  {
    "q": "In Powerpoint, the objects on the slide used to hold the text are called as ______________",
    "options": ["Textbox", "Text holders", "Placeholders", "None of the above"],
    "answer": "Placeholders"
  },
  {
    "q": "Which of the following fill effects can be used to fill the background of the slide?",
    "options": ["Picture", "Texture", "All of the above", "Gradient"],
    "answer": "All of the above"
  },
  {
    "q": "Is it possible to apply the same transition on all slides in a powerpoint presentation?",
    "options": ["True", "Can't say", "False", "May be"],
    "answer": "True"
  },
  {
    "q": "Which of the following is the shortcut key used to start the presentation from the current slide?",
    "options": ["Ctrl + F5", "Shift + F5", "F5", "None of the above"],
    "answer": "Shift + F5"
  },
  {
    "q": "The address of a cell is represented with combination of an alphabet and a number e.g. A1. Here in A1 , A represents ......... and 1 represents .......",
    "options": ["Column , Row", "Row, Column"],
    "answer": "Column , Row"
  },
  {
    "q": "Software that is used to organize, manipulate and display data arranged in rows and columns is known as",
    "options": ["File", "Spreadsheed", "Register", "Document"],
    "answer": "Spreadsheed"
  },
  {
    "q": "______ is an electronic spreadsheet application that enables users to store, organize, calculate and manipulate the data.",
    "options": ["Microsoft Excel", "Microsoft Access", "Microsoft Word", "Microsoft Powerpoint"],
    "answer": "Microsoft Excel"
  },
  {
    "q": "In MS Excel, charts can be inserted from ........... tab",
    "options": ["Formula", "Data", "Insert", "Home"],
    "answer": "Insert"
  },
  {
    "q": "In Excel formula starts with ________ sign",
    "options": ["=", "$", "@", "#"],
    "answer": "="
  },
  {
    "q": "A file that exists of cells in rows and columns and can help arrange, calculate and sort data is called",
    "options": ["Document", "Spreadsheet", "None of the Above", "Presentation file"],
    "answer": "Spreadsheet"
  },
  {
    "q": "The ________ feature of MS Excel quickly completes a series of data",
    "options": ["Fill Handle", "Auto Fill", "Auto Complete", "Sorting"],
    "answer": "Auto Fill"
  },
  {
    "q": "Which of the following identifies a cell in Excel?",
    "options": ["Name", "Formula", "Label", "Address"],
    "answer": "Address"
  },
  {
    "q": "In MS Excel two or more cells can be combined to create a new, single and larger cell by using ............. option.",
    "options": ["Pivot", "Filter", "Merge", "Wrap"],
    "answer": "Merge"
  },
  {
    "q": "In Excel, which one denoted a range from B1 through E5",
    "options": ["B1 - E5", "B1:E5", "B1$E5", "B1 to E5"],
    "answer": "B1:E5"
  },
  {
    "q": "…………. of data lets you hide unimportant data and show only that data you're interested in.",
    "options": ["Alignment", "Sorting", "Filtering", "Restricting"],
    "answer": "Filtering"
  },
  {
    "q": "The process of arranging the data in ascending and descending order is known as ……...",
    "options": ["Sorting", "Alignment", "Restricting", "Filtering"],
    "answer": "Sorting"
  },
  {
    "q": "________ allows you to manipulate data in a worksheet based on a given set of criteria.",
    "options": ["Formatting", "Sorting and Filtering"],
    "answer": "Sorting and Filtering"
  },
  {
    "q": "In Microsoft Excel, Sort & Filter button can be found in ________.",
    "options": ["Formula tab", "Review tab", "Insert tab", "Home tab"],
    "answer": "Home tab"
  },
  {
    "q": "You can sort the data in",
    "options": ["None of the above", "Descending order", "Ascending order", "Both 1 and 2"],
    "answer": "Both 1 and 2"
  },
  {
    "q": "Organized collection of data or information that can be accessed, updated, and managed is called _______",
    "options": ["File", "Database", "DBMS", "None of the above"],
    "answer": "Database"
  },
  {
    "q": "________ Tab is used to import, export, collect and share data between different databases.",
    "options": ["Create", "External Data", "Database Tools", "Datasheet"],
    "answer": "External Data"
  },
  {
    "q": "Information is organized in these tables in the form of ________ and ________ for easy access and management purposes.",
    "options": ["Key and Value", "Fields and record", "None of the above", "All of the above"],
    "answer": "Fields and record"
  },
  {
    "q": "________ Tab helps you to provide a quick and easy way to create tables, forms, reports and queries.",
    "options": ["Database Tools", "Create", "Datasheet", "External Data"],
    "answer": "Create"
  },
  {
    "q": "Each column in the table is referred to as a",
    "options": ["Record", "None of the above", "Tuple", "Field"],
    "answer": "Field"
  },
  {
    "q": "In Access, ________ are used to store the data.",
    "options": ["Form", "Query", "Table", "Report"],
    "answer": "Table"
  },
  {
    "q": "Each row of a table is referred to as a",
    "options": ["a single record", "field", "None of the above", "a single type of data"],
    "answer": "a single record"
  },
  {
    "q": "Which of the following Microsoft Office tool is used to create database",
    "options": ["Microsoft PowerPoint", "Microsoft Excel", "Microsoft Word", "Microsoft Access"],
    "answer": "Microsoft Access"
  },
  {
    "q": "Press _____ to quit MS Access.",
    "options": ["Alt+F4", "Tab +F4", "Esc+ W", "Ctrl +F4"],
    "answer": "Alt+F4"
  },
  {
    "q": "Which of the following is not a type of Microsoft Access database object?",
    "options": ["Table", "Worksheets", "Modules", "Form"],
    "answer": "Worksheets"
  },
  {
    "q": "How many basic types of queries are used to manipulate the databases",
    "options": ["4", "None of the Above", "2", "3"],
    "answer": "3"
  },
  {
    "q": "Query design views can be used to design or create a query with the addition of other parameters",
    "options": ["Datasheet View", "Design View", "SQL View", "PivotChart View"],
    "answer": "Design View"
  },
  {
    "q": "An Access database object that is used to enter, view or edit records",
    "options": ["Form", "Table", "Query", "Report"],
    "answer": "Form"
  },
  {
    "q": "Tool that allows users to manage, store, retrieve and analyze the information.",
    "options": ["Record", "Query", "Database management system (DBMS)", "Field"],
    "answer": "Database management system (DBMS)"
  },
  {
    "q": "Following are the examples of block elements except _______",
    "options": ["<ul>", "<b>", "<p>", "<h1>"],
    "answer": "<b>"
  },
  {
    "q": "Which of the following program is used by users to view the web pages?",
    "options": ["Web server", "Search Engine", "Web browser", "Protocol"],
    "answer": "Web browser"
  },
  {
    "q": "HTML stands for:",
    "options": ["Hypertext Markup Language", "None of these", "Hypertext Markup Links", "High Text Machine Language"],
    "answer": "Hypertext Markup Language"
  },
  {
    "q": "A web page is a document that is commonly written in",
    "options": ["CSS", "Java", "C++", "HTML"],
    "answer": "HTML"
  },
  {
    "q": "The text between tags ___________ is presented as a first heading.",
    "options": ["<heading> and </heading>", "<h> and </h>", "<head> and </head>", "<h1> and </h1>"],
    "answer": "<h1> and </h1>"
  },
  {
    "q": "The text between tags ___________ describes the start and end of the web page.",
    "options": ["<html> and </html>", "<head> and </head>", "<body> and </body>", "<title> and </title>"],
    "answer": "<html> and </html>"
  },
  {
    "q": "A web page can be written using the following editor",
    "options": ["Dreamweaver", "None of the above", "Both 1 and 2", "Notepad"],
    "answer": "Both 1 and 2"
  },
  {
    "q": "What is the use of the <b> tag?",
    "options": ["None of the above.", "It is used to change the font size.", "It is used to write black-colored font.", "It converts the text within it to bold font."],
    "answer": "It converts the text within it to bold font."
  },
  {
    "q": "Use the Unordered List button in the Property Inspector to create _______",
    "options": ["Sequential numbers List", "Numbered List", "None of the above", "a bulleted list"],
    "answer": "a bulleted list"
  },
  {
    "q": "Use the Ordered List button in the Property Inspector to create ……",
    "options": ["A bulleted list", "Numbered list", "None of the above", "Both 1 and 2"],
    "answer": "Numbered list"
  },
  {
    "q": "HTML tags can be written within?",
    "options": ["! !", "None of the above", "< >", "{ }"],
    "answer": "< >"
  },
  {
    "q": "How to create an ordered list in HTML?",
    "options": ["<ul>", "<href>", "<b>", "<ol>"],
    "answer": "<ol>"
  },
  {
    "q": "To insert the table, we need to go to the",
    "options": ["Modify tab", "Edit tab", "Format tab", "Insert tab"],
    "answer": "Insert tab"
  },
  {
    "q": "How to create an Unordered list in HTML?",
    "options": ["<ol>", "<href>", "<ul>", "<b>"],
    "answer": "<ul>"
  },
  {
    "q": "What tag is used to display an image on a webpage?",
    "options": ["<image>", "<img>", "None of the above", "<src>"],
    "answer": "<img>"
  },
  {
    "q": "What is the function of the HTML style attribute?",
    "options": ["None of the above.", "Both 1 and 2.", "It is used to add styles to an HTML element.", "It is used to uniquely identify some specific styles of some element."],
    "answer": "It is used to add styles to an HTML element."
  },
  {
    "q": "After selecting the image from the Insert tab, the image will be added to your webpage wherever you had placed the ……",
    "options": ["All of the Above", "Cursor", "Mouse", "Pointer"],
    "answer": "Cursor"
  },
  {
    "q": "In Dreamweaver, we need to go to the _______ to insert an image in HTML page, in Dreamweaver.",
    "options": ["Edit tab", "Insert tab", "Format Tab", "Command tab"],
    "answer": "Insert tab"
  }




],
      subjective: [],
    },
  },

  ENG101: {
    mid: {
      title: 'ENG101 — Mid Term Examination',
      totalMarks: 30,
      mcqMarks: 1,
      mcqs: [
        { q: '"Theatre" and "Theater" are:', options: ['A. Words with completely different meanings', 'B. The same word with different regional spellings', 'C. Both incorrect spellings', 'D. Slang words'], answer: 'B. The same word with different regional spellings' },
        { q: 'Which spelling is American English?', options: ['A. Theatre', 'B. Catalogue', 'C. Theater', 'D. Colour'], answer: 'C. Theater' },
        { q: 'The word "set" is known for:', options: ['A. Having very few meanings', 'B. Having one of the largest number of meanings in English', 'C. Being only a verb', 'D. Having no adjective form'], answer: 'B. Having one of the largest number of meanings in English' },
        { q: '"The boys like to play on the hard court." Here "play" means:', options: ['A. Perform music', 'B. Act in a drama', 'C. Take part in a game or sport', 'D. Use water'], answer: 'C. Take part in a game or sport' },
        { q: '"Amna will play the sitar." Here "play" means:', options: ['A. Take part in a game', 'B. Perform on a musical instrument', 'C. Act in a drama', 'D. Use a strategy'], answer: 'B. Perform on a musical instrument' },
        { q: 'The word "Guys" is labeled as:', options: ['A. Formal', 'B. Slang or informal', 'C. Technical', 'D. Academic'], answer: 'B. Slang or informal' },
        { q: 'What does "et cetera (etc.)" mean?', options: ['A. For example', 'B. And others / and so on', 'C. That is', 'D. Before experience'], answer: 'B. And others / and so on' },
        { q: 'What does "e.g." mean?', options: ['A. And so on', 'B. That is', 'C. For example', 'D. And others'], answer: 'C. For example' },
        { q: 'What does "coup d\'état" mean?', options: ['A. A peace agreement', 'B. A sudden forceful overthrow of a government', 'C. A democratic election', 'D. A legal court decision'], answer: 'B. A sudden forceful overthrow of a government' },
        { q: '"My roommate is hard up." The phrase "hard up" means:', options: ['A. Working very hard', 'B. Physically strong', 'C. Short of money', 'D. Very busy'], answer: 'C. Short of money' },
      ],
      subjective: [],
    },
    final: {
      title: 'ENG101 — Final Term Examination',
      totalMarks: 40,
      mcqMarks: 1,
      mcqs: [
        
   
  {
    "q": "An outline, with its indention and numbering system helps you to the way each idea is related to the others.",
    "options": [
      "A. support",
      "B. visualize",
      "C. rectify",
      "D. exploit"
    ],
    "answer": "B. visualize"
  },
  {
    "q": "The abbreviation 'i.e.' means",
    "options": [
      "A. which is",
      "B. there is",
      "C. this is",
      "D. that is"
    ],
    "answer": "D. that is"
  },
  {
    "q": "Select the correct punctuated option which best describes the sentence. Because I am a teacher, I am a teacher.",
    "options": [
      "A. divine their",
      "B. divine; so",
      "C. divine, so",
      "D. This sentence is correct"
    ],
    "answer": "VERIFY - Question/Options are corrupted. Original MCQ required."
  },
  {
    "q": "Choose the best option. I am a teacher, so I am a teacher.",
    "options": [
      "A. (option missing)",
      "B. fairly",
      "C. considerably",
      "D. wholly"
    ],
    "answer": "VERIFY - Question/Options are corrupted. Original MCQ required."
  },
  {
    "q": "Outlining and Brainstorming are the best ways to map out and organize your essay.",
    "options": [
      "A. True",
      "B. False"
    ],
    "answer": "A. True"
  },
  {
    "q": "In composition, a method of organization in which actions or events are presented as they occur in time is called",
    "options": [
      "A. comparison and contrast",
      "B. order of importance",
      "C. cause and effect",
      "D. chronological order"
    ],
    "answer": "D. chronological order"
  },
  {
    "q": "You arrived two days ago. You are going to leave next Sunday. By the time you leave, you nine days here.",
    "options": [
      "A. will have spent",
      "B. spent",
      "C. spend",
      "D. have spent"
    ],
    "answer": "A. will have spent"
  },
  {
    "q": "Choose the closest meaning of 'see into':",
    "options": [
      "A. to witness departure",
      "B. to attend to",
      "C. to find out the true nature of something",
      "D. to detect"
    ],
    "answer": "C. to find out the true nature of something"
  },
  {
    "q": "Which of the following methods of organization is used in the given sentence? Consequently, people suffered from parasites. The water was impure in the village.",
    "options": [
      "A. Chronological order",
      "B. Cause and effect",
      "C. Listing order",
      "D. Comparison and contrast"
    ],
    "answer": "B. Cause and effect"
  },
  {
    "q": "An outline is basically an organization of related ideas.",
    "options": [
      "A. True",
      "B. False"
    ],
    "answer": "A. True"
  },

    {
        "q": "He is never late. He always comes time.",
        "options": [
            "A. in",
            "B. on",
            "C. at",
            "D. of"
        ],
        "answer": "B. on"
    },
    {
        "q": "means to organize/write events in the order of their occurrence in time.",
        "options": [
            "A. Cause and effect",
            "B. All of the above",
            "C. Chronological order",
            "D. Compare and contrast"
        ],
        "answer": "C. Chronological order"
    },
    {
        "q": "The abbreviation 'i.e.' means",
        "options": [
            "A. that is",
            "B. this is",
            "C. there is",
            "D. which is"
        ],
        "answer": "A. that is"
    },
    {
        "q": "Cheating is dishonesty; it hinders students from learning.",
        "options": [
            "A. in contrast",
            "B. moreover",
            "C. instead",
            "D. although"
        ],
        "answer": "B. moreover"
    },
    {
        "q": "An outline, with its indention and numbering system helps you to the way each idea is related to the others.",
        "options": [
            "A. visualize",
            "B. support",
            "C. exploit",
            "D. rectify"
        ],
        "answer": "A. visualize"
    },
    {
        "q": "The professor discussed the sleeping habits of elephants, she did not explain the topic in detail.",
        "options": [
            "A. Also",
            "B. However",
            "C. In contrast",
            "D. Therefore"
        ],
        "answer": "B. However"
    },
    {
        "q": "Where is he? I for him since three o'clock!",
        "options": [
            "A. was waiting",
            "B. wrote",
            "C. am waiting",
            "D. have been waiting"
        ],
        "answer": "D. have been waiting"
    },
    {
        "q": "use an outline to help make their writing clear.",
        "options": [
            "A. All poets",
            "B. All editors",
            "C. All essayists",
            "D. All writers"
        ],
        "answer": "D. All writers"
    },
    {
        "q": "An introduction has four purposes: introduction, background, plan and",
        "options": [
            "A. main theme",
            "B. thesis statement",
            "C. interest",
            "D. attention"
        ],
        "answer": "B. thesis statement"
    },
    {
        "q": "The abbreviation 'b/w' means",
        "options": [
            "A. between",
            "B. Beethoven",
            "C. by the way",
            "D. by the worth"
        ],
        "answer": "A. between"
    },






        ],
      subjective: [],
    },
  },

  PAK301: {
    mid: {
      title: 'PAK101 — Mid Term Examination',
      totalMarks: 30,
      mcqMarks: 1,
      mcqs: [
        { q: 'Ideology is defined as:', options: ['A. Political system', 'B. Set of beliefs, values and ideals', 'C. Economic policy', 'D. Religious book'], answer: 'B. Set of beliefs, values and ideals' },
        { q: 'Philosophical explanation of Pakistan ideology was given by:', options: ['A. Sir Syed Ahmed Khan', 'B. Allama Iqbal', 'C. Liaquat Ali Khan', 'D. Gandhi'], answer: 'B. Allama Iqbal' },
        { q: 'Political leadership for Pakistan movement was provided by:', options: ['A. Allama Iqbal', 'B. Sir Syed', 'C. Quaid-i-Azam', 'D. Nehru'], answer: 'C. Quaid-i-Azam' },
        { q: 'Two Nation Theory is based on:', options: ['A. Geography', 'B. Language', 'C. Religion', 'D. Economy'], answer: 'C. Religion' },
        { q: 'Muslim nationhood is based on:', options: ['A. Territory', 'B. Race', 'C. Language', 'D. Faith (Islam)'], answer: 'D. Faith (Islam)' },
        { q: 'War of Independence took place in:', options: ['A. 1757', 'B. 1857', 'C. 1905', 'D. 1947'], answer: 'B. 1857' },
        { q: 'Sir Syed Ahmed Khan started:', options: ['A. Pakistan Movement', 'B. Aligarh Movement', 'C. Khilafat Movement', 'D. Swadeshi Movement'], answer: 'B. Aligarh Movement' },
        { q: 'Indian National Congress was founded in:', options: ['A. 1885', 'B. 1906', 'C. 1857', 'D. 1940'], answer: 'A. 1885' },
        { q: 'All India Muslim League was founded in:', options: ['A. Lahore', 'B. Karachi', 'C. Dhaka', 'D. Delhi'], answer: 'C. Dhaka' },
        { q: 'Objectives Resolution was passed in:', options: ['A. 1947', 'B. 1948', 'C. 1949', 'D. 1956'], answer: 'C. 1949' },
      ],
      subjective: [],
    },
    final: {
      title: 'PAK101 — Final Term Examination',
      totalMarks: 40,
      mcqMarks: 1,
      mcqs: [
           {
        "q": "When was the Political Parties Act introduced in Pakistan?",
        "options": [
            "A. 1960",
            "B. 1966",
            "C. 1964",
            "D. 1962"
        ],
        "answer": "D. 1962"
    },
    {
        "q": "Who abrogated the Constitution of 1956 on 7th October, 1958?",
        "options": [
            "A. Malik Ghulam Muhammad",
            "B. Yahya Khan",
            "C. Iskander Mirza",
            "D. Ayub Khan"
        ],
        "answer": "C. Iskander Mirza"
    },
    {
        "q": "What principle was followed for the representation of provinces in the National Assembly under the 1956 Constitution?",
        "options": [
            "A. Parity-based representation",
            "B. Area-based representation",
            "C. Political Party-based representation",
            "D. Population-based representation"
        ],
        "answer": "A. Parity-based representation"
    },
    {
        "q": "Who dissolved the First Constituent Assembly of Pakistan?",
        "options": [
            "A. Liaquat Ali Khan",
            "B. Iskandar Mirza",
            "C. Ghulam Muhammad",
            "D. Ayub Khan"
        ],
        "answer": "C. Ghulam Muhammad"
    },
    {
        "q": "Which constitution of Pakistan had 234 articles and 6 schedules, outlining the framework for governance and power management?",
        "options": [
            "A. Constitution of 1962",
            "B. Constitution of 1973",
            "C. Interim constitution of 1947",
            "D. Constitution of 1956"
        ],
        "answer": "D. Constitution of 1956"
    },
    {
        "q": "When was the first BPC Report presented to the Constituent Assembly of Pakistan?",
        "options": [
            "A. 1953",
            "B. 1950",
            "C. 1952",
            "D. 1951"
        ],
        "answer": "B. 1950"
    },
    {
        "q": "According to 1962 constitution, Advisory Council for Islamic Ideology was",
        "options": [
            "A. A Recommendary body",
            "B. An Executive body",
            "C. A Supervisory body",
            "D. A Legislative body"
        ],
        "answer": "A. A Recommendary body"
    },
    {
        "q": "Under which Act, the First Constituent Assembly of Pakistan came into being?",
        "options": [
            "A. Indian Council Act, 1935",
            "B. Indian Council Act, 1942",
            "C. Indian Independence Act, 1947",
            "D. Government of India Act, 1935"
        ],
        "answer": "C. Indian Independence Act, 1947"
    },
    {
        "q": "When was the First BPC (Basic Principles Committee) Report presented to the Constituent Assembly of Pakistan?",
        "options": [
            "A. 1950",
            "B. 1949",
            "C. 1951",
            "D. 1952"
        ],
        "answer": "A. 1950"
    },
    {
        "q": "Who abrogated the Constitution of 1962 on March 25, 1969?",
        "options": [
            "A. Zulfiqar Ali Bhutto",
            "B. Iskander Mirza",
            "C. General Ayub Khan",
            "D. General Yahya Khan"
        ],
        "answer": "D. General Yahya Khan"
    },

    {
        "q": "Kharif crops are sown in in Pakistan.",
        "options": [
            "A. January-February",
            "B. September-October",
            "C. July-August",
            "D. May-June"
        ],
        "answer": "C. July-August"
    },
    {
        "q": "Water Logging and Salinity is one of the problems of",
        "options": [
            "A. Irrigation",
            "B. Mining",
            "C. Agriculture",
            "D. Industry"
        ],
        "answer": "C. Agriculture"
    },
    {
        "q": "According to the 1973 Constitution, half of the senators are elected after every:",
        "options": [
            "A. 6 Years",
            "B. 5 Years",
            "C. 4 Years",
            "D. 3 Years"
        ],
        "answer": "D. 3 Years"
    },
    {
        "q": "Under which article, the Objectives Resolution became the permanent part of Constitution of 1973?",
        "options": [
            "A. 1-A of 8th Amendment",
            "B. 2-A of 8th Amendment",
            "C. 3-A of 8th Amendment",
            "D. 4-A of 8th Amendment"
        ],
        "answer": "B. 2-A of 8th Amendment"
    },
    {
        "q": "Who became the first civilian Chief Martial Law administrator?",
        "options": [
            "A. Dr. Moeen Qureshi",
            "B. Zulfiqar Ali Bhutto",
            "C. Benazir Bhutto",
            "D. Nawaz Sharif"
        ],
        "answer": "B. Zulfiqar Ali Bhutto"
    },
    {
        "q": "Mohallah Salat Committees were formed under the rule of",
        "options": [
            "A. General Pervez Musharraf",
            "B. General Yahya Khan",
            "C. General Ayub Khan",
            "D. General Zia-ul-Haq"
        ],
        "answer": "D. General Zia-ul-Haq"
    },
    {
        "q": "How much area is covered by forests in Pakistan?",
        "options": [
            "A. 7%",
            "B. 5%",
            "C. 8%",
            "D. 6%"
        ],
        "answer": "B. 5%"
    },
    {
        "q": "When Local Bodies elections were conducted during Zia-ul-Haq regime in Pakistan?",
        "options": [
            "A. 1977",
            "B. 1979",
            "C. 1978",
            "D. 1976"
        ],
        "answer": "B. 1979"
    },
    {
        "q": "Total area of Pakistan was in 1947.",
        "options": [
            "A. 769,000 km2",
            "B. 698,000 km2",
            "C. 850,000 km2",
            "D. 796,095 km2"
        ],
        "answer": "D. 796,095 km2"
    },
    {
        "q": "In the general elections of 1970, how many seats did the Pakistan Peoples Party win?",
        "options": [
            "A. 98",
            "B. 89",
            "C. 92",
            "D. 81"
        ],
        "answer": "D. 81"
    },


    {
        "q": "Total area of Pakistan was in 1947.",
        "options": [
            "A. 850,000 km2",
            "B. 796,095 km2",
            "C. 698,000 km2",
            "D. 769,000 km2"
        ],
        "answer": "B. 796,095 km2"
    },


  {
    "q": "What was the minimum age of the President of Pakistan according to the Constitution of 1956?",
    "options": [
      "A. 50 years",
      "B. 35 years",
      "C. 40 years",
      "D. 45 years"
    ],
    "answer": "B. 35 years"
  },
  {
    "q": "Who dismissed Khawaja Nazimuddin's Cabinet?",
    "options": [
      "A. Ayub Khan",
      "B. Ghulam Muhammad",
      "C. Iskandar Mirza",
      "D. Liaquat Ali Khan"
    ],
    "answer": "B. Ghulam Muhammad"
  },
  {
    "q": "When was the Constitution of 1956 promulgated?",
    "options": [
      "A. 14th August, 1956",
      "B. 8th June, 1956",
      "C. 1st July, 1956",
      "D. 23 March, 1956"
    ],
    "answer": "D. 23 March, 1956"
  },
  {
    "q": "When did the military assume power in Pakistan for the first time?",
    "options": [
      "A. On 14 August, 1956",
      "B. On 7 October, 1958",
      "C. On 23 March, 1956",
      "D. On 17 February, 1960"
    ],
    "answer": "B. On 7 October, 1958"
  },
  {
    "q": "Who was given the power to impeach the President under the 1962 Constitution?",
    "options": [
      "A. Prime Minister",
      "B. Cabinet",
      "C. Senate",
      "D. National Assembly"
    ],
    "answer": "D. National Assembly"
  },
  {
    "q": "What is the minimum age of the President of Pakistan according to the Constitution of 1962?",
    "options": [
      "A. 55 years",
      "B. 45 years",
      "C. 50 years",
      "D. 40 years"
    ],
    "answer": "D. 40 years"
  },
  {
    "q": "What does BPC stand for?",
    "options": [
      "A. Basic Primary Constitution",
      "B. Basic Permanent Committee",
      "C. Basic Parliament Commission",
      "D. Basic Principle Committee"
    ],
    "answer": "D. Basic Principle Committee"
  },
  {
    "q": "In which year Language Movement started in East Pakistan?",
    "options": [
      "A. 1953",
      "B. 1952",
      "C. 1950",
      "D. 1951"
    ],
    "answer": "B. 1952"
  },
  {
    "q": "When did the First Basic Principles Committee present its final report?",
    "options": [
      "A. In September, 1950",
      "B. In April, 1950",
      "C. In December, 1950",
      "D. In August, 1950"
    ],
    "answer": "C. In December, 1950"
  },
  {
    "q": "When was the Constitutional Commission established under the chairmanship of Justice Shahabuddin?",
    "options": [
      "A. February 1960",
      "B. January 1960",
      "C. March 1960",
      "D. April 1960"
    ],
    "answer": "A. February 1960"
  },
  {
    "q": "What principle was followed for the representation of provinces in the National Assembly under the 1956 Constitution?",
    "options": [
      "A. Political Party-based representation",
      "B. Population-based representation",
      "C. Parity-based representation",
      "D. Area-based representation"
    ],
    "answer": "C. Parity-based representation"
  },
  {
    "q": "According to Bogra Formula, legislature would consist of how many houses?",
    "options": [
      "A. 5",
      "B. 4",
      "C. 2",
      "D. 3"
    ],
    "answer": "C. 2"
  },
  {
    "q": "What was the minimum age for a member of the National Assembly of Pakistan according to the 1962 Constitution?",
    "options": [
      "A. 20 Years",
      "B. 25 Years",
      "C. 18 Years",
      "D. 23 Years"
    ],
    "answer": "B. 25 Years"
  },
  {
    "q": "According to 1962 Constitution, all the executive, legislative and judicial powers were entitled to __________.",
    "options": [
      "A. President",
      "B. Prime Minister",
      "C. National Assembly",
      "D. Cabinet"
    ],
    "answer": "A. President"
  },
  {
    "q": "When did One Unit Scheme introduce?",
    "options": [
      "A. 14th November, 1955",
      "B. 14th August, 1955",
      "C. 14th October, 1955",
      "D. 14th September, 1955"
    ],
    "answer": "A. 14th November, 1955"
  },
  {
    "q": "Which kind of Parliament was suggested by the first Basic Principles Committee Report?",
    "options": [
      "A. Multicameral",
      "B. Unicameral",
      "C. Bicameral",
      "D. Tricameral"
    ],
    "answer": "B. Unicameral"
  },
  {
    "q": "When was the first BPC Report presented to the Constituent Assembly of Pakistan?",
    "options": [
      "A. 1951",
      "B. 1952",
      "C. 1953",
      "D. 1950"
    ],
    "answer": "A. 1951"
  },
  {
    "q": "What was the total strength of the National Assembly of Pakistan according to the Constitution of 1956?",
    "options": [
      "A. 300",
      "B. 330",
      "C. 320",
      "D. 310"
    ],
    "answer": "A. 300"
  },
  {
    "q": "When was the 1962 Constitution abrogated?",
    "options": [
      "A. March 25, 1969",
      "B. March 27, 1969",
      "C. March 28, 1969",
      "D. March 26, 1969"
    ],
    "answer": "A. March 25, 1969"
  },
  {
    "q": "Which Constitution of Pakistan is considered a presidential-type constitution?",
    "options": [
      "A. The Government of India Act of 1935",
      "B. The Constitution of 1956",
      "C. The Constitution of 1962",
      "D. The Constitution of 1973"
    ],
    "answer": "C. The Constitution of 1962"
  },
  {
    "q": "When did the 2nd Constituent Assembly come into existence?",
    "options": [
      "A. 1952",
      "B. 1955",
      "C. 1953",
      "D. 1954"
    ],
    "answer": "B. 1955"
  },
  {
    "q": "When was the Political Parties Act introduced in Pakistan?",
    "options": [
      "A. 1964",
      "B. 1960",
      "C. 1962",
      "D. 1966"
    ],
    "answer": "C. 1962"
  },
  {
    "q": "Which Act served as the interim Constitution after the creation of Pakistan?",
    "options": [
      "A. Government of India Act, 1935",
      "B. The Constitution Act 1956",
      "C. Pakistan Independence Act 1947",
      "D. Indian Independence Act of 1947"
    ],
    "answer": "A. Government of India Act, 1935"
  },
  {
    "q": "When did the military government of Ayub Khan introduce the 'Basic Democracy System' in Pakistan?",
    "options": [
      "A. 1959",
      "B. 1961",
      "C. 1958",
      "D. 1960"
    ],
    "answer": "A. 1959"
  },
  {
    "q": "Who imposed the first Martial Law on October 7, 1958?",
    "options": [
      "A. Iskandar Mirza",
      "B. General Ayub Khan",
      "C. Malik Ghulam Muhammad",
      "D. General Yahya Khan"
    ],
    "answer": "A. Iskandar Mirza"
  },
  {
    "q": "Who abrogated the Constitution of 1962 on March 25, 1969?",
    "options": [
      "A. General Ayub Khan",
      "B. Zulfiqar Ali Bhutto",
      "C. Iskander Mirza",
      "D. General Yahya Khan"
    ],
    "answer": "D. General Yahya Khan"
  },
  {
    "q": "When did Ayub Khan introduce the Basic Democracies System in Pakistan?",
    "options": [
      "A. 1961",
      "B. 1958",
      "C. 1960",
      "D. 1959"
    ],
    "answer": "D. 1959"
  },
  {
    "q": "Which kind of parliament was adopted under the 1956 Constitution?",
    "options": [
      "A. Multicameral",
      "B. Tricameral",
      "C. Unicameral",
      "D. Bicameral"
    ],
    "answer": "C. Unicameral"
  },
  {
    "q": "In which Constitution of Pakistan was the 'Political Parties Act' passed?",
    "options": [
      "A. The Constitution of 1973",
      "B. Interim Constitution of 1947",
      "C. The Constitution of 1962",
      "D. The Constitution of 1956"
    ],
    "answer": "C. The Constitution of 1962"
  },
  {
    "q": "Who abrogated the Constitution of 1956 on 7th October, 1958?",
    "options": [
      "A. Malik Ghulam Muhammad",
      "B. Yahya Khan",
      "C. Iskander Mirza",
      "D. Ayub Khan"
    ],
    "answer": "C. Iskander Mirza"
  },
  {
    "q": "The 1956 Constitution had ______ articles and _____ schedules.",
    "options": [
      "A. 234 articles and 5 schedules",
      "B. 250 articles and 5 schedules",
      "C. 234 articles and 6 schedules",
      "D. 250 articles and 6 schedules"
    ],
    "answer": "C. 234 articles and 6 schedules"
  },
  {
    "q": "When was the Joint Electorate adopted for all Pakistan by the National Assembly?",
    "options": [
      "A. 1954",
      "B. 1955",
      "C. 1957",
      "D. 1956"
    ],
    "answer": "D. 1956"
  },
  {
    "q": "When did the Constitution of 1962 enforce in Pakistan?",
    "options": [
      "A. 14th August, 1962",
      "B. 8th June, 1962",
      "C. 23rd March, 1962",
      "D. 1st July, 1962"
    ],
    "answer": "B. 8th June, 1962"
  },
  {
    "q": "Which BPC report is also known as Muhammad Ali Bogra Formula?",
    "options": [
      "A. Fourth BPC Report",
      "B. First BPC Report",
      "C. Third BPC Report",
      "D. Second BPC Report"
    ],
    "answer": "D. Second BPC Report"
  },
  {
    "q": "Who was the head of government under the 1956 Constitution?",
    "options": [
      "A. Governor",
      "B. Speaker",
      "C. Prime Minister",
      "D. President"
    ],
    "answer": "C. Prime Minister"
  },
  {
    "q": "When did the Second Basic Principles Committee present its final report?",
    "options": [
      "A. In August, 1952",
      "B. In December, 1952",
      "C. In September, 1952",
      "D. In April, 1952"
    ],
    "answer": "B. In December, 1952"
  },
  {
    "q": "Who was the President of Pakistan in 1958?",
    "options": [
      "A. Muhammad Ali Bogra",
      "B. Ayub Khan",
      "C. Malik Ghulam Muhammad",
      "D. Iskander Mirza"
    ],
    "answer": "D. Iskander Mirza"
  },
  {
    "q": "When did Governor-General Ghulam Muhammad dissolve the First Constituent Assembly of Pakistan?",
    "options": [
      "A. In October, 1956",
      "B. In October, 1953",
      "C. In October, 1955",
      "D. In October, 1954"
    ],
    "answer": "D. In October, 1954"
  },
  {
    "q": "The Basic Principles Committee was formed on:",
    "options": [
      "A. June 12, 1949",
      "B. April 12, 1949",
      "C. May 12, 1949",
      "D. March 12, 1949"
    ],
    "answer": "D. March 12, 1949"
  },
  {
    "q": "The candidate for the post of President of Pakistan must ________________.",
    "options": [
      "A. Muslim and non-Muslim both",
      "B. Be a Sunni Muslim",
      "C. Not be a Muslim",
      "D. Be a Muslim"
    ],
    "answer": "D. Be a Muslim"
  },
  {
    "q": "When was the Constitution of 1962 promulgated?",
    "options": [
      "A. 8 June, 1962",
      "B. 5 June, 1962",
      "C. 6 June, 1962",
      "D. 7 June, 1962"
    ],
    "answer": "A. 8 June, 1962"
  },
  {
    "q": "According to 1962 constitution, Advisory Council for Islamic Ideology was ____________.",
    "options": [
      "A. An Executive body",
      "B. Supervisory body",
      "C. Legislative body",
      "D. Recommendary body"
    ],
    "answer": "D. Recommendary body"
  },
  {
    "q": "Which language was suggested by Quaid-e-Azam as the national language to promote unity and harmony in Pakistan?",
    "options": [
      "A. Bengali",
      "B. English",
      "C. Punjabi",
      "D. Urdu"
    ],
    "answer": "D. Urdu"
  },
  {
    "q": "Who challenged the dissolution of the First Constituent Assembly of Pakistan in Court?",
    "options": [
      "A. Iskander Mirza",
      "B. Khawaja Nazimuddin",
      "C. Maulvi Tamizuddin",
      "D. Muhammad Ali Bogra"
    ],
    "answer": "C. Maulvi Tamizuddin"
  },
  {
    "q": "Who dissolved the First Constituent Assembly of Pakistan?",
    "options": [
      "A. Iskandar Mirza",
      "B. Ayub Khan",
      "C. Ghulam Muhammad",
      "D. Liaquat Ali Khan"
    ],
    "answer": "C. Ghulam Muhammad"
  },
  {
    "q": "Who is said to be the first Chief Martial Law Administrator in Pakistan?",
    "options": [
      "A. General Ayub Khan",
      "B. General Zia-ul-Haq",
      "C. General Pervaiz Musharraf",
      "D. General Yahya Khan"
    ],
    "answer": "A. General Ayub Khan"
  },
  {
    "q": "When was the 1956 Constitution of Pakistan abrogated?",
    "options": [
      "A. 6th October, 1958",
      "B. 5th October, 1958",
      "C. 9th October, 1958",
      "D. 7th October, 1958"
    ],
    "answer": "D. 7th October, 1958"
  },
  {
    "q": "Who was Ghulam Muhammad?",
    "options": [
      "A. Governor General",
      "B. Prime Minister",
      "C. President",
      "D. Chief Justice"
    ],
    "answer": "A. Governor General"
  },
  {
    "q": "In which court did Maulvi Tamizuddin challenge the dissolution of the First Constituent Assembly of Pakistan?",
    "options": [
      "A. Sindh High Court",
      "B. Peshawar High Court",
      "C. Supreme Court",
      "D. Lahore High Court"
    ],
    "answer": "A. Sindh High Court"
  },
  {
    "q": "According to the 1956 Constitution of Pakistan, who was responsible for electing the President?",
    "options": [
      "A. National Assembly and Provincial Assemblies",
      "B. Prime Minister",
      "C. Provincial Assemblies",
      "D. National Assembly and Senate"
    ],
    "answer": "A. National Assembly and Provincial Assemblies"
  },
  {
    "q": "Under which Act, the First Constituent Assembly of Pakistan came into being?",
    "options": [
      "A. Government of India Act, 1935",
      "B. Indian Independence Act, 1947",
      "C. Indian Council Act, 1935",
      "D. Indian Council Act, 1942"
    ],
    "answer": "B. Indian Independence Act, 1947"
  },
  {
    "q": "What task was assigned to the 'Shahabuddin Commission' set up in 1960?",
    "options": [
      "A. To examine the causes of failure of parliamentary system",
      "B. To give legal shape to the constitution of 1956",
      "C. To introduce Basic Democracy system in Pakistan",
      "D. To hold presidential Referendum in the country"
    ],
    "answer": "A. To examine the causes of failure of parliamentary system"
  },
  {
    "q": "Which constitution of Pakistan had 234 articles and 6 schedules, outlining the framework for governance and power management?",
    "options": [
      "A. Constitution of 1973",
      "B. Constitution of 1962",
      "C. Interim constitution of 1947",
      "D. Constitution of 1956"
    ],
    "answer": "D. Constitution of 1956"
  },
  {
    "q": "Under the 1956 Constitution, what was the official name of Pakistan?",
    "options": [
      "A. Islamic Republic",
      "B. Islamic Republic of Pakistan",
      "C. Republic State of Pakistan",
      "D. Republic of Pakistan"
    ],
    "answer": "B. Islamic Republic of Pakistan"
  },
  {
    "q": "In which year was the One Unit Scheme introduced in Pakistan?",
    "options": [
      "A. In October, 1956",
      "B. In October, 1953",
      "C. In October, 1954",
      "D. In October, 1955"
    ],
    "answer": "D. In October, 1955"
  },
  {
    "q": "In which constitution of Pakistan a one-house Parliament was introduced?",
    "options": [
      "A. The Constitution of 1956",
      "B. The Constitution of 1973",
      "C. The Constitution of 1962",
      "D. Interim Constitution of 1947"
    ],
    "answer": "C. The Constitution of 1962"
  },
  {
    "q": "Which constitution is considered as the presidential constitution of Pakistan?",
    "options": [
      "A. Constitution of 1973",
      "B. Constitution of 1935",
      "C. Constitution of 1956",
      "D. Constitution of 1962"
    ],
    "answer": "D. Constitution of 1962"
  },
  {
    "q": "Under the 1962 Constitution, Parliament consisted of ___________.",
    "options": [
      "A. Four houses",
      "B. Three houses",
      "C. Two houses",
      "D. One house"
    ],
    "answer": "D. One house"
  },
  {
    "q": "Who moved Objectives Resolution?",
    "options": [
      "A. K. Fazlul Haq",
      "B. Muhammad Ali Bogra",
      "C. Liaquat Ali Khan",
      "D. Muhammad Ali Jinnah"
    ],
    "answer": "C. Liaquat Ali Khan"
  },
  {
    "q": "Who was authorized to appoint the Prime Minister of Pakistan under the 1956 Constitution?",
    "options": [
      "A. Speaker of National Assembly",
      "B. Prime Minister",
      "C. Chairman of Senate",
      "D. President"
    ],
    "answer": "D. President"
  },

    {
        "q": "According to the 1973 Constitution, the upper house of the Parliament is called :",
        "options": [
            "A. National Assembly",
            "B. Cabinet",
            "C. Provincial Assembly",
            "D. Senate"
        ],
        "answer": "D. Senate"
    },
    {
        "q": "Thal, Cholistan and Thar deserts are located in of Indus Plain.",
        "options": [
            "A. North East",
            "B. North West",
            "C. South West",
            "D. South East"
        ],
        "answer": "D. South East"
    },
    {
        "q": "After how many years did Pakistan get its first Constitution?",
        "options": [
            "A. 5 years",
            "B. 11 years",
            "C. 7 years",
            "D. 9 years"
        ],
        "answer": "D. 9 years"
    },
    {
        "q": "Durand Line between Pakistan and Afghanistan was drawn in",
        "options": [
            "A. November 1893",
            "B. November 1894",
            "C. November 1892",
            "D. November 1895"
        ],
        "answer": "A. November 1893"
    },
    {
        "q": "Which is the highest peak of Pakistan?",
        "options": [
            "A. K-2",
            "B. Sia Kangri Peak",
            "C. Broad Peak",
            "D. Kilik Peak"
        ],
        "answer": "A. K-2"
    },
    {
        "q": "Ghulam Muhammad was the:",
        "options": [
            "A. Fourth Governor General of Pakistan",
            "B. Second Governor General of Pakistan",
            "C. First Governor General of Pakistan",
            "D. Third Governor General of Pakistan"
        ],
        "answer": "D. Third Governor General of Pakistan"
    },
    {
        "q": "Under the 1973 Constitution of Pakistan, the Financial Bill is presented in the",
        "options": [
            "A. Senate",
            "B. National Assembly",
            "C. Cabinet",
            "D. Legislative Council"
        ],
        "answer": "B. National Assembly"
    },
    {
        "q": "How much area is covered by forests in Pakistan?",
        "options": [
            "A. 5%",
            "B. 7%",
            "C. 6%",
            "D. 8%"
        ],
        "answer": "A. 5%"
    },
    {
        "q": "Mohallah Salat Committees were formed under the rule of",
        "options": [
            "A. General Ayub Khan",
            "B. General Zia-ul-Haq",
            "C. General Yahya Khan",
            "D. General Pervez Musharraf"
        ],
        "answer": "B. General Zia-ul-Haq"
    },

  {
    "q": "When was the First BPC (Basic Principles Committee) Report presented to the Constituent Assembly of Pakistan?",
    "options": [
      "A. 1949",
      "B. 1951",
      "C. 1952",
      "D. 1950"
    ],
    "answer": "B. 1951"
  },
  {
    "q": "The Objectives Resolution has been added in the preamble of which constitution of Pakistan?",
    "options": [
      "A. Constitution of 1956",
      "B. Constitution of 1973",
      "C. Constitution of 1962",
      "D. All of them"
    ],
    "answer": "D. All of them"
  },
  {
    "q": "Which form of government was adopted under the 1962 Constitution?",
    "options": [
      "A. Unitary",
      "B. Kingship",
      "C. Presidential",
      "D. Parliamentary"
    ],
    "answer": "C. Presidential"
  },
  {
    "q": "In which city was the first meeting of the Constituent Assembly held on August 11, 1947?",
    "options": [
      "A. Karachi",
      "B. Quetta",
      "C. Lahore",
      "D. Islamabad"
    ],
    "answer": "A. Karachi"
  },
  {
    "q": "The 1956 Constitution provided lists including _____________.",
    "options": [
      "A. Federal and Provincial",
      "B. Federal, Provincial and Concurrent",
      "C. Federal and Concurrent",
      "D. Provincial and Concurrent"
    ],
    "answer": "B. Federal, Provincial and Concurrent"
  },
  {
    "q": "According to Objectives Resolution Pakistan shall be ______.",
    "options": [
      "A. Democratic State",
      "B. An Islamic State",
      "C. An Islamic Democratic State",
      "D. Secular State"
    ],
    "answer": "C. An Islamic Democratic State"
  },
  {
    "q": "How many articles were there in the 1962 Constitution?",
    "options": [
      "A. 225 Articles",
      "B. 234 Articles",
      "C. 250 Articles",
      "D. 243 Articles"
    ],
    "answer": "C. 250 Articles"
  },
  {
    "q": "According to Objectives Resolution Pakistan shall be ______.",
    "options": [
      "A. Secular State",
      "B. Democratic State",
      "C. An Islamic State",
      "D. An Islamic Democratic State"
    ],
    "answer": "D. An Islamic Democratic State"
  },
  {
    "q": "Which BPC report is also known as Muhammad Ali Bogra Formula?",
    "options": [
      "A. First BPC Report",
      "B. Fourth BPC Report",
      "C. Third BPC Report",
      "D. Second BPC Report"
    ],
    "answer": "D. Second BPC Report"
  },
  {
    "q": "The candidate for the post of President of Pakistan must ________________.",
    "options": [
      "A. Muslim and non-Muslim both",
      "B. Not be a Muslim",
      "C. Be a Sunni Muslim",
      "D. Be a Muslim"
    ],
    "answer": "D. Be a Muslim"
  },
  {
    "q": "According to Bogra Formula, legislature would consist of how many houses?",
    "options": [
      "A. 5",
      "B. 4",
      "C. 3",
      "D. 2"
    ],
    "answer": "D. 2"
  },
  {
    "q": "When did the 2nd Constituent Assembly come into existence?",
    "options": [
      "A. 1952",
      "B. 1953",
      "C. 1954",
      "D. 1955"
    ],
    "answer": "D. 1955"
  },
  {
    "q": "When was the Constitution of 1962 promulgated?",
    "options": [
      "A. 7 June, 1962",
      "B. 6 June, 1962",
      "C. 5 June, 1962",
      "D. 8 June, 1962"
    ],
    "answer": "D. 8 June, 1962"
  },
  {
    "q": "In which constitution of Pakistan a one-house Parliament was introduced?",
    "options": [
      "A. The Constitution of 1973",
      "B. The Constitution of 1962",
      "C. The Constitution of 1956",
      "D. Interim Constitution of 1947"
    ],
    "answer": "B. The Constitution of 1962"
  },
  {
    "q": "Who was the head of government under the 1956 Constitution?",
    "options": [
      "A. Speaker",
      "B. Governor",
      "C. President",
      "D. Prime Minister"
    ],
    "answer": "D. Prime Minister"
  },
  {
    "q": "When was the 1962 Constitution abrogated?",
    "options": [
      "A. March 26, 1969",
      "B. March 28, 1969",
      "C. March 27, 1969",
      "D. March 25, 1969"
    ],
    "answer": "D. March 25, 1969"
  },
  {
    "q": "When did the Constitution of 1962 enforce in Pakistan?",
    "options": [
      "A. 23rd March, 1962",
      "B. 14th August, 1962",
      "C. 1st July, 1962",
      "D. 8th June, 1962"
    ],
    "answer": "D. 8th June, 1962"
  },
  {
    "q": "Under the 1956 Constitution, what was the official name of Pakistan?",
    "options": [
      "A. Republic State of Pakistan",
      "B. Islamic Republic",
      "C. Islamic Republic of Pakistan",
      "D. Republic of Pakistan"
    ],
    "answer": "C. Islamic Republic of Pakistan"
  },
  {
    "q": "Who challenged the dissolution of the First Constituent Assembly of Pakistan in Court?",
    "options": [
      "A. Muhammad Ali Bogra",
      "B. Iskander Mirza",
      "C. Khawaja Nazimuddin",
      "D. Maulvi Tamizuddin"
    ],
    "answer": "D. Maulvi Tamizuddin"
  },
  {
    "q": "When did Governor-General Ghulam Muhammad dissolve the First Constituent Assembly of Pakistan?",
    "options": [
      "A. In October, 1955",
      "B. In October, 1956",
      "C. In October, 1954",
      "D. In October, 1953"
    ],
    "answer": "C. In October, 1954"
  },
  {
    "q": "When was the first BPC Report presented to the Constituent Assembly of Pakistan?",
    "options": [
      "A. 1953",
      "B. 1950",
      "C. 1952",
      "D. 1951"
    ],
    "answer": "D. 1951"
  },
  {
    "q": "Which Act served as the interim Constitution after the creation of Pakistan?",
    "options": [
      "A. Indian Independence Act of 1947",
      "B. Pakistan Independence Act 1947",
      "C. The Constitution Act 1956",
      "D. Government of India Act, 1935"
    ],
    "answer": "D. Government of India Act, 1935"
  },
  {
    "q": "Who dismissed Khawaja Nazimuddin's Cabinet?",
    "options": [
      "A. Ghulam Muhammad",
      "B. Iskandar Mirza",
      "C. Ayub Khan",
      "D. Liaquat Ali Khan"
    ],
    "answer": "A. Ghulam Muhammad"
  },
  {
    "q": "Which constitution is considered as the presidential constitution of Pakistan?",
    "options": [
      "A. Constitution of 1956",
      "B. Constitution of 1962",
      "C. Constitution of 1935",
      "D. Constitution of 1973"
    ],
    "answer": "B. Constitution of 1962"
  },
  {
    "q": "The Objectives Resolution has been added in the preamble of which constitution of Pakistan?",
    "options": [
      "A. All of them",
      "B. Constitution of 1962",
      "C. Constitution of 1973",
      "D. Constitution of 1956"
    ],
    "answer": "A. All of them"
  },
  {
    "q": "The Basic Principles Committee was formed on:",
    "options": [
      "A. March 12, 1949",
      "B. June 12, 1949",
      "C. May 12, 1949",
      "D. April 12, 1949"
    ],
    "answer": "A. March 12, 1949"
  },
  {
    "q": "Who abrogated the Constitution of 1962 on March 25, 1969?",
    "options": [
      "A. General Yahya Khan",
      "B. Zulfiqar Ali Bhutto",
      "C. Iskander Mirza",
      "D. General Ayub Khan"
    ],
    "answer": "A. General Yahya Khan"
  },
  {
    "q": "Who is said to be the first Chief Martial Law Administrator in Pakistan?",
    "options": [
      "A. General Ayub Khan",
      "B. General Yahya Khan",
      "C. General Zia-ul-Haq",
      "D. General Pervaiz Musharraf"
    ],
    "answer": "A. General Ayub Khan"
  },
  {
    "q": "When did Ayub Khan introduce the Basic Democracies System in Pakistan?",
    "options": [
      "A. 1961",
      "B. 1958",
      "C. 1960",
      "D. 1959"
    ],
    "answer": "D. 1959"
  },
  {
    "q": "When did the military assume power in Pakistan for the first time?",
    "options": [
      "A. On 17 February, 1960",
      "B. On 23 March, 1956",
      "C. On 14 August, 1956",
      "D. On 7 October, 1958"
    ],
    "answer": "D. On 7 October, 1958"
  },
  {
    "q": "Which Constitution of Pakistan is considered a presidential-type constitution?",
    "options": [
      "A. The Government of India Act of 1935",
      "B. The Constitution of 1973",
      "C. The Constitution of 1956",
      "D. The Constitution of 1962"
    ],
    "answer": "D. The Constitution of 1962"
  },
  {
    "q": "What was the minimum age for a member of the National Assembly of Pakistan according to the 1962 Constitution?",
    "options": [
      "A. 23 Years",
      "B. 18 Years",
      "C. 25 Years",
      "D. 20 Years"
    ],
    "answer": "C. 25 Years"
  },
  {
    "q": "The 1956 Constitution had ______ articles and _____ schedules.",
    "options": [
      "A. 250 articles and 5 schedules",
      "B. 234 articles and 6 schedules",
      "C. 250 articles and 6 schedules",
      "D. 234 articles and 5 schedules"
    ],
    "answer": "B. 234 articles and 6 schedules"
  },
  {
    "q": "What was the duration of second term of Benazir Bhutto’s Government?",
    "options": [
      "A. October 1995-November 1998",
      "B. October 1983-November 1986",
      "C. October 1991-November 1992",
      "D. October 1993-November 1996"
    ],
    "answer": "D. October 1993-November 1996"
  },
  {
    "q": "After how many years did Pakistan get its first Constitution?",
    "options": [
      "A. 5 years",
      "B. 7 years",
      "C. 9 years",
      "D. 11 years"
    ],
    "answer": "C. 9 years"
  },
  {
    "q": "According to the 1973 Constitution, the upper house of the Parliament is called:",
    "options": [
      "A. Senate",
      "B. Provincial Assembly",
      "C. Cabinet",
      "D. National Assembly"
    ],
    "answer": "A. Senate"
  },
  {
    "q": "According to the 1973 Constitution, the lower house of the Parliament is called:",
    "options": [
      "A. Provincial Assembly",
      "B. National Assembly",
      "C. Cabinet",
      "D. Senate"
    ],
    "answer": "B. National Assembly"
  },
  {
    "q": "When did Mohammad Ali Bogra present Bogra Formula in the Constituent Assembly?",
    "options": [
      "A. October 1953",
      "B. September 1953",
      "C. April 1953",
      "D. January 1953"
    ],
    "answer": "A. October 1953"
  },
  {
    "q": "According to the 1973 Constitution, the tenure of the National Assembly is:",
    "options": [
      "A. 4 Years",
      "B. 6 Years",
      "C. 3 Years",
      "D. 5 Years"
    ],
    "answer": "D. 5 Years"
  },
  {
    "q": "Which of the following city is rich in Gypsum?",
    "options": [
      "A. Zoab",
      "B. Malakand",
      "C. Chakwal",
      "D. Jehlum"
    ],
    "answer": "C. Chakwal"
  }



],
      subjective: [],
    },
  },
};

export default examData;