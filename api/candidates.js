export default function handler(req, res) {
  res.status(200).json([
    { id: 1, name: 'Candidate 1' },
    { id: 2, name: 'Candidate 2' },
    // Add more candidates
  ]);
}
