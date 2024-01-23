// import linkedList from "./linkedList.js";

const hashMap = () => {
  let map = [];

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

  const loadExceded = () => {
    let len = 0;

    map.forEach((item) => {
      if (item) {
        len += 1;
      }
    });
    return len > capacity * loadFactor;
  };
  const increaseCapacity = () => {
    console.log("Increasing old capacity:", capacity);
    capacity = capacity * 2;
    console.log("New capacity:", capacity);
  };
  const rearrangeMap = () => {
    console.log("Rearranging hashMap.");
    increaseCapacity();
    let newMap = [];
    map.forEach((element) => {
      if (element) {
        newMap[hash(element)] = element;
      }
    });
    map = newMap;
  };
  const set = (key, value) => {
    if (loadExceded()) {
      console.log("Load exceeded.");
      rearrangeMap();
      map[hash(value)] = value;
    } else {
      map[key] = value;
    }
  };
  const get = (key) => {
    return map[key] ? map[key] : null;
  };
  const has = (key) => {
    return map[key] ? true : false;
  };
  const remove = (key) => {
    if (map[key]) {
      map.splice(key, 1);
      return true;
    }
    return false;
  };
  const length = () => {
    let len = 0;
    map.forEach((item) => {
      if (item) {
        len += 1;
      }
    });
    return len;
  };

  const clear = () => {
    map = [];
  };
  const keys = () => {
    const arr = [];
    map.forEach((item) => {
      arr.push(map.indexOf(item));
    });

    return arr;
  };
  const values = () => {
    const arr = [];
    map.forEach((item) => {
      arr.push(item);
    });
    return arr;
  };
  const entries = () => {
    const arr = [];
    map.forEach((item) => {
      arr.push([map.indexOf(item), item]);
    });
    return arr;
  };
  return { hash, set, get, has, remove, length, clear, keys, values, entries };
};
const hashMap1 = hashMap();

const values = ["Johnny", "Elizabeth", "Robert", "Evie", "Marie", "Sirius"];
const addValue = (value) => {
  const data = value;
  const hash = hashMap1.hash(data);
  hashMap1.set(hash, data);
};
values.forEach((value) => {
  addValue(value);
});

console.log("Running length:", hashMap1.length());
console.log("Running keys:", hashMap1.keys());
console.log("Running values:", hashMap1.values());
console.log("Running entries:", hashMap1.entries());

const newValues = [
  "Jimmy",
  "Edward",
  "Edmond",
  "Zelda",
  "Mario",
  "Richter",
  "Owen",
  "Nash",
  "Simon",
  "Wally",
  "Euron",
  "Simba",
  "Mufasa",
  "Aladdin",
  "Ron",
  "Yen",
  "Jim",
  "Ale",
];

newValues.forEach((value) => {
  addValue(value);
});
console.log("Running length:", hashMap1.length());

console.log("Running entries:", hashMap1.entries());
