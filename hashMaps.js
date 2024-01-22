const hashMap = () => {
  const map = [];

  let capacity = 16;
  const loadFactor = 0.75;

  const hash = (value) => {
    const strings = [];
    if (value.includes(" ")) {
      value.split(" ").forEach((word) => {
        strings.push(word);
      });
    } else {
      strings.push(value);
    }

    let hashCode = 0;

    strings.forEach((word) => {
      let currHash = 0;
      const primeNumber = 31;
      for (let i = 0; i < word.length; i++) {
        currHash = primeNumber * currHash + word.charCodeAt(i);
      }
      hashCode += currHash;
    });

    return hashCode % capacity;
  };

  const set = (key, value) => {
    hash[key] = value;
  };

  return { hash, set };
};

const hashMap1 = hashMap();

console.log(hashMap1.hash("Johnny Silver Hand"));
