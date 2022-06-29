function climbingLeaderboard(ranked, player) {
  const output = [];
  player.forEach(currentPlayer => {
    ranked.push(currentPlayer);
    const sortedUniqueRanked = [...new Set(ranked)].sort((a, b) => b - a);
    const currentPlayerRank = sortedUniqueRanked.indexOf(currentPlayer) +1;
    output.push(currentPlayerRank);
  })
  return output;
}

const ranked1 = [100,90,90,80];
const player1 = [70,80,105];

console.log('output test1: ', climbingLeaderboard(ranked1, player1))

