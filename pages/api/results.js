export default function handler(req, res) {
  res.status(200).json([
    { id: 1, candidateName: 'Candidate 1', score: 95 },
    { id: 2, candidateName: 'Candidate 2', score: 90 },
    // Add more results
  ]);
}
