// ─────────────────────────────────────────────────────────────────
//  notesData.js — Subject notes configuration
//  Save as: src/data/notesData.js
//
//  PDFs store karo: public/notes/SUBJECT_ID/filename.pdf
//  Phir yahan add karo
// ─────────────────────────────────────────────────────────────────

const notesData = {
  CS101: [
    {
      id: 1,
      title: 'CS101 Complete Handwritten Notes',
      description: 'Lectures 1-45 ke complete notes',
      path: '/notes/CS101/CS101_Notes.pdf',
      pages: null, // optional: number of pages
    },
    // Agar alag alag chapters ke notes hain to aur add karo:
    // {
    //   id: 2,
    //   title: 'CS101 Mid Term Notes',
    //   description: 'Lectures 1-22',
    //   path: '/notes/CS101/CS101_Mid_Notes.pdf',
    // },
  ],
  PHY101: [
    {
      id: 1,
      title: 'PHY101 Complete Handwritten Notes',
      description: 'Lectures 1-45 ke complete notes',
      path: '/notes/PHY101/PHY101_Notes.pdf',
    },
    {
      id: 2,
      title: 'PHY101 Solved Numericals',
      description: 'All important numericals with step-by-step solutions',
      path: '/notes/PHY101/PHY101-Numericals.pdf',
      type: 'numericals',
    },
  ],
  MTH101: [
    {
      id: 1,
      title: 'MTH101 Complete Handwritten Notes',
      description: 'Calculus — Lectures 1-45',
      path: '/notes/MTH101/MTH101-Notes.pdf',
    },
  ],
  MTH202: [
    {
      id: 1,
      title: 'MTH202 Complete Handwritten Notes',
      description: 'Discrete Mathematics — Lectures 1-45',
      path: '/notes/MTH202/MTH202_Notes.pdf',
    },
  ],
  ENG101: [
    {
      id: 1,
      title: 'ENG101 Complete Handwritten Notes',
      description: 'English Comprehension — Lectures 1-45',
      path: '/notes/ENG101/ENG101-Notes.pdf',
    },
  ],
  PAK101: [
    {
      id: 1,
      title: 'PAK101 Complete Handwritten Notes',
      description: 'Pakistan Studies — Lectures 1-45',
      path: '/notes/PAK101/PAK101_Notes.pdf',
    },
  ],
};

export default notesData;