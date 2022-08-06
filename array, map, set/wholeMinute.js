/**
 * 1010. Pairs of Songs With Total Durations Divisible by 60

 * @param {*} songs 
 * @returns 
 */
function playlist(songs) {
  let result = 0;
  let seen = new Map();

  for (let songTime of songs) {
    const target = 60 - (songTime % 60);

    const targetCount = seen.get(target === 60 ? 0 : target);

    if (targetCount !== undefined) {
      result += targetCount;
    }

    let count = seen.get(songTime % 60);

    if (count === undefined) {
      seen.set(songTime % 60, 1);
    } else {
      seen.set(songTime % 60, count + 1);
    }
  }
  return result;
}

console.log(playlist([30, 20, 150, 100, 40]));
