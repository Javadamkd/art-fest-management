export default function handler(req, res) {
  res.status(200).json([
    { id: 1, name: 'Program 1' },
    { id: 2, name: 'Program 2' },
    // Add more programs
  ]);
}
