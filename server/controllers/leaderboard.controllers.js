const UserAttempt = require('../models/UserAttempt');

exports.getLeaderboard = async (req, res) => {
  const { testName } = req.params;

  const data = await UserAttempt.find({ testName })
    .sort({ score: -1, submittedAt: 1 });

  const ranked = data.map((u, i) => ({
    rank: i + 1,
    name: u.username,
    score: u.score
  }));

  res.json(ranked);
};
