export default function handler(req, res) {
  res.status(200).json([
    { id: 1, name: 'Team 1' },
    { id: 2, name: 'Team 2' },
    // Add more teams
  ]);
}
