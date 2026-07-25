// ─── Semester-wise subject structure ───────────────────────────────
const semesters = [
  {
    sem: 1,
    subjects: [
      { id: 'CS101',  name: 'CS101',  fullName: 'Introduction to Computing',        icon: '💻', color: '#2563eb', bg: '#eff6ff', total: 234 },
      { id: 'ENG101', name: 'ENG101', fullName: 'English Comprehension',             icon: '📖', color: '#16a34a', bg: '#f0fdf4', total: 45 },
      { id: 'MTH101', name: 'MTH101', fullName: 'Calculus And Analytical Geometry',  icon: '📐', color: '#9333ea', bg: '#faf5ff', total: 45 },
      { id: 'MTH202', name: 'MTH202', fullName: 'Discrete Mathematics',              icon: '∑',  color: '#ea580c', bg: '#fff7ed', total: 45 },
      { id: 'PAK301', name: 'PAK301', fullName: 'Pakistan Studies',                  icon: '📜', color: '#0891b2', bg: '#ecfeff', total: 30 },
      { id: 'PHY101', name: 'PHY101', fullName: 'Physics',                           icon: '⚛',  color: '#dc2626', bg: '#fef2f2', total: 45 },

    ],
  },
  {
    sem: 2,
    subjects: [
      { id: 'CS201',  name: 'CS201',  fullName: 'Introduction to Programming',           icon: '💻', color: '#2563eb', bg: '#eff6ff', total: 45 },
      { id: 'CS302',  name: 'CS302',  fullName: 'Digital Logic Design',                  icon: '🔌', color: '#7c3aed', bg: '#f5f3ff', total: 45 },
      { id: 'ENG201', name: 'ENG201', fullName: 'Business and Technical English Writing', icon: '📝', color: '#16a34a', bg: '#f0fdf4', total: 45 },
      { id: 'ISL202', name: 'ISL202', fullName: 'Islamic Studies',                        icon: '☪️', color: '#0891b2', bg: '#ecfeff', total: 45 },
      { id: 'PAK522', name: 'PAK522', fullName: 'Ideology and Constitution of Pakistan',  icon: '📜', color: '#ea580c', bg: '#fff7ed', total: 45 },
      { id: 'STA301', name: 'STA301', fullName: 'Statistics and Probability',             icon: '📊', color: '#dc2626', bg: '#fef2f2', total: 45 },
    ],
  },
  {
    sem: 3,
    subjects: [
      { id: 'CS301',  name: 'CS301',  fullName: 'Data Structures',           icon: '🌲', color: '#2563eb', bg: '#eff6ff', total: 45 },
      { id: 'CS304',  name: 'CS304',  fullName: 'Object Oriented Programming',icon: '🧩', color: '#7c3aed', bg: '#f5f3ff', total: 45 },
      { id: 'CS601',  name: 'CS601',  fullName: 'Data Communication',         icon: '📡', color: '#0891b2', bg: '#ecfeff', total: 45 },
      { id: 'MCM301', name: 'MCM301', fullName: 'Communication Skills',        icon: '🗣️', color: '#16a34a', bg: '#f0fdf4', total: 45 },
      { id: 'MTH401', name: 'MTH401', fullName: 'Differential Equations',      icon: '📐', color: '#9333ea', bg: '#faf5ff', total: 45 },
    ],
  },
  {
    sem: 4,
    subjects: [
      { id: 'CS401',  name: 'CS401',  fullName: 'Computer Architecture & Assembly Language', icon: '⚙️', color: '#2563eb', bg: '#eff6ff', total: 45 },
      { id: 'CS403',  name: 'CS403',  fullName: 'Database Management Systems',               icon: '🗄️', color: '#7c3aed', bg: '#f5f3ff', total: 45 },
      { id: 'CS504',  name: 'CS504',  fullName: 'Software Engineering I',                    icon: '🛠️', color: '#16a34a', bg: '#f0fdf4', total: 45 },
      { id: 'MGT602', name: 'MGT602', fullName: 'Entrepreneurship',                          icon: '💼', color: '#ea580c', bg: '#fff7ed', total: 45 },
      { id: 'MTH501', name: 'MTH501', fullName: 'Linear Algebra',                            icon: '📐', color: '#9333ea', bg: '#faf5ff', total: 45 },
    ],
  },
  {
    sem: 5,
    subjects: [
      { id: 'CS306',  name: 'CS306',  fullName: 'Introduction to Python',       icon: '🐍', color: '#16a34a', bg: '#f0fdf4', total: 45 },
      { id: 'CS402',  name: 'CS402',  fullName: 'Theory of Automata',           icon: '🤖', color: '#7c3aed', bg: '#f5f3ff', total: 45 },
      { id: 'CS502',  name: 'CS502',  fullName: 'Fundamentals of Algorithms',   icon: '🔢', color: '#2563eb', bg: '#eff6ff', total: 45 },
      { id: 'CS604',  name: 'CS604',  fullName: 'Operating Systems',            icon: '💾', color: '#0891b2', bg: '#ecfeff', total: 45 },
      { id: 'MTH603', name: 'MTH603', fullName: 'Numerical Analysis',           icon: '📐', color: '#9333ea', bg: '#faf5ff', total: 45 },
    ],
  },
  {
    sem: 6,
    subjects: [
      { id: 'CS411',  name: 'CS411',  fullName: 'Visual Programming',           icon: '🖥️', color: '#2563eb', bg: '#eff6ff', total: 45 },
      { id: 'CS501',  name: 'CS501',  fullName: 'Advance Computer Architecture',icon: '⚙️', color: '#7c3aed', bg: '#f5f3ff', total: 45 },
      { id: 'CS602',  name: 'CS602',  fullName: 'Computer Graphics',            icon: '🎨', color: '#ea580c', bg: '#fff7ed', total: 45 },
      { id: 'CS607',  name: 'CS607',  fullName: 'Artificial Intelligence',      icon: '🧠', color: '#16a34a', bg: '#f0fdf4', total: 45 },
    ],
  },
  {
    sem: 7,
    subjects: [
      { id: 'CS515',  name: 'CS515',  fullName: 'Advanced Database Management System', icon: '🗄️', color: '#2563eb', bg: '#eff6ff', total: 45 },
      { id: 'CS609',  name: 'CS609',  fullName: 'System Programming',                 icon: '💻', color: '#7c3aed', bg: '#f5f3ff', total: 45 },
      { id: 'CS621',  name: 'CS621',  fullName: 'Parallel and Distributed Computing', icon: '🔗', color: '#0891b2', bg: '#ecfeff', total: 45 },
      { id: 'ECO401', name: 'ECO401', fullName: 'Economics',                           icon: '📈', color: '#16a34a', bg: '#f0fdf4', total: 45 },
    ],
  },
  {
    sem: 8,
    subjects: [
      { id: 'CS205',  name: 'CS205',  fullName: 'Information Security',             icon: '🔒', color: '#dc2626', bg: '#fef2f2', total: 45 },
      { id: 'CS606',  name: 'CS606',  fullName: 'Compiler Construction',            icon: '⚙️', color: '#7c3aed', bg: '#f5f3ff', total: 45 },
      { id: 'CS506',  name: 'CS506',  fullName: 'Web Design and Development',       icon: '🌐', color: '#2563eb', bg: '#eff6ff', total: 45 },
      { id: 'CS614',  name: 'CS614',  fullName: 'Data Warehousing',                 icon: '🗄️', color: '#0891b2', bg: '#ecfeff', total: 45 },
    ],
  },
];

// Flat list for backward compatibility
const subjects = semesters.flatMap(s => s.subjects);

export { semesters };
export default subjects;