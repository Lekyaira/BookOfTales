/**
 * Returns the reaction matrix and prefix.
 *
 * @param {Object} encounter - JSON encounter data.
 * @param {number} encounter.number - Number on the encounter card.
 * @param {string} encounter.object - The thing which was encountered.
 * @param {number} encounter.value - The accumulated value of die roll, location value and destiny bonus.
 *
 * @returns {Object} Json object representing the reaction matrix result.
 * @returns {Object.number} matrix - Reaction matrix result.
 * @returns {Object.string} encountered - The thing that was encountered (may change).
 * @returns {Object.string} prefix - The prefix for the thing that was encountered.
 */
async function reaction(encounter) {
  // TODO: Get data from database.
  // DEBUG: Test code.
  if (encounter.number == 1) {
    if (encounter.value <= 2)
      return { matrix: 6, encountered: "Rock Slide", prefix: "" };
    else if (encounter.value == 3)
      return { matrix: 9, encountered: "Bandit", prefix: "Bloodthirsty" };
    else if (encounter.value == 4)
      return { matrix: 1, encountered: "Prince", prefix: "Lonely" };
    else if (encounter.value == 5)
      return { matrix: 6, encountered: "Fire", prefix: "Mystic" };
    else if (encounter.value == 6)
      return { matrix: 5, encountered: "Treasure", prefix: "Minor" };
    else if (encounter.value == 7)
      return { matrix: 5, encountered: "Artifact", prefix: "Strange" };
    else if (encounter.value <= 9)
      return { matrix: 6, encountered: "Storm", prefix: "Terrible" };
    else if (encounter.value <= 11)
      return { matrix: 10, encountered: "Beast", prefix: "Ghostly" };
    else if (encounter.value >= 12)
      return { matrix: 13, encountered: "'Efreet", prefix: "All-Powerful" };
  } else return {};
  // END DEBUG
}

async function skills(matrix, encountered, prefix, action, [skills]) {
  // TODO: Get data from database.
}

async function choices(
  matrix,
  encountered,
  prefix,
  action,
  skillUsed = null,
  fate = null
) {
  // TODO: Get data from database.
}

async function result(
  matrix,
  encountered,
  prefix,
  action,
  choice,
  skillUsed = null,
  fate = null
) {
  // TODO: Get data from database.
}

module.exports = {
  reaction,
  skills,
  choices,
  result,
};
