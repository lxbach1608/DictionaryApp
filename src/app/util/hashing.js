function stringToHash(string) {
  let hash = 0;

  if (string.length == 0) return hash;

  for (i = 0; i < string.length; i++) {
    char = string.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }

  return hash;
}

function findWordByHashTable(slug, hashTable) {
  const key = stringToHash(slug);

  const word = hashTable[key];

  return word;
}

module.exports = { stringToHash, findWordByHashTable };
