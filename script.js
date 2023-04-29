class Piece {
  Shapes = {
    "stair-top-right": [
      [1, 1],
      [0, 1],
    ],
    "stair-top-left": [
      [1, 1],
      [1, 0],
    ],
    "stair-bottom-left": [
      [1, 0],
      [1, 1],
    ],
    "stair-bottom-right": [
      [0, 1],
      [1, 1],
    ],
    "upper-slab": [
      [1, 1],
      [0, 0],
    ],
    "lower-slab": [
      [0, 0],
      [1, 1],
    ],
    "air-block": [
      [0, 0],
      [0, 0],
    ],
    "full-block": [
      [1, 1],
      [1, 1],
    ],
    "empty": [],
  };

  constructor(shape) {
    this.shape = shape;
  }

  toArray() {
    return this.Shapes[this.shape];
  }
}
class Alphabet{
  constructor() {}

  get_alphabet(author){
    if (author === "ethoslab") {return this.alphabet_ethoslab();}
    else if (author === "ateijelo") {return this.alphabet_ateijelo();}
    else if (author === "dms_akshat") {return this.alphabet_dms_akshat();}
    else if (author === "homewood") {return this.alphabet_homewood();}
    return
  }

  alphabet_ethoslab() {
    return {
      "a": ["empty", "empty"],
      "b": ["empty", "empty"],
      "c": ["empty", "empty"],
      "d": ["empty", "empty"],
      "e": ["stair-bottom-left", "stair-bottom-left"],
      "f": ["empty", "empty"],
      "g": ["empty", "empty"],
      "h": ["empty", "empty"],
      "i": ["stair-bottom-left", "stair-top-right"],
      "j": ["empty", "empty"],
      "k": ["empty", "empty"],
      "l": ["empty", "empty"],
      "m": ["empty", "empty"],
      "n": ["empty", "empty"],
      "o": ["empty", "empty"],
      "p": ["empty", "empty"],
      "q": ["empty", "empty"],
      "r": ["empty", "empty"],
      "s": ["empty", "empty"],
      "t": ["stair-bottom-right", "stair-bottom-left"],
      "u": ["empty", "empty"],
      "v": ["empty", "empty"],
      "w": ["empty", "empty"],
      "x": ["stair-top-right", "stair-bottom-right"],
      "y": ["empty", "empty"],
      "z": ["empty", "empty"],
      "1": ["empty", "empty"],
      "2": ["empty", "empty"],
      "3": ["empty", "empty"],
      "4": ["empty", "empty"],
      "5": ["empty", "empty"],
      "6": ["empty", "empty"],
      "7": ["empty", "empty"],
      "8": ["empty", "empty"],
      "9": ["empty", "empty"],
      "0": ["empty", "empty"],
      " ": ["empty", "empty"]
    };
  }

  alphabet_ateijelo() {
    return {
      "a": ["stair-top-right", "full-block"],
      "b": ["stair-bottom-left", "full-block"],
      "c": ["lower-slab", "stair-bottom-left"],
      "d": ["stair-bottom-right", "full-block"],
      "e": ["full-block", "stair-bottom-left"],
      "f": ["stair-top-left", "stair-top-left"],
      "g": ["stair-top-left", "full-block"],
      "h": ["stair-bottom-left", "stair-top-left"],
      "i": ["upper-slab", "full-block"],
      "j": ["upper-slab", "stair-bottom-right"],
      "k": ["stair-bottom-right", "stair-top-right"],
      "l": ["air-block", "stair-bottom-left"],
      "m": ["air-block", "full-block"],
      "n": ["air-block", "stair-top-left"],
      "o": ["stair-top-left", "stair-bottom-left"],
      "p": ["full-block", "stair-top-left"],
      "q": ["full-block", "stair-top-right"],
      "r": ["upper-slab", "stair-top-left"],
      "s": ["stair-top-left", "stair-bottom-right"],
      "t": ["stair-bottom-left", "stair-bottom-left"],
      "u": ["air-block", "lower-slab"],
      "v": ["air-block", "stair-bottom-right"],
      "w": ["lower-slab", "full-block"],
      "x": ["upper-slab", "lower-slab"],
      "y": ["stair-bottom-left", "stair-bottom-right"],
      "z": ["stair-top-right", "stair-bottom-left"],
      "1": ["stair-bottom-right", "stair-bottom-right"],
      "2": ["stair-top-right", "stair-bottom-left"],
      "3": ["stair-top-right", "stair-bottom-right"],
      "4": ["stair-bottom-left", "stair-top-right"],
      "5": ["stair-top-left", "stair-bottom-right"],
      "6": ["stair-top-left", "full-block"],
      "7": ["stair-top-right", "stair-top-right"],
      "8": ["full-block", "full-block"],
      "9": ["full-block", "stair-bottom-right"],
      "0": ["stair-top-left", "stair-bottom-left"],
      " ": ["empty", "empty"]
    };
  }



  alphabet_dms_akshat() {
    return {
      "a": ["stair-bottom-left", "stair-bottom-left"],
      "b": ["stair-bottom-right", "stair-bottom-left"],
      "c": ["stair-top-right", "stair-bottom-left"],
      "d": ["stair-top-left", "stair-bottom-left"],
      "e": ["lower-slab", "stair-bottom-left"],
      "f": ["upper-slab", "stair-bottom-left"],
      "g": ["stair-bottom-left", "stair-bottom-right"],
      "h": ["stair-bottom-right", "stair-bottom-right"],
      "i": ["stair-top-right", "stair-bottom-right"],
      "j": ["stair-top-left", "stair-bottom-right"],
      "k": ["lower-slab", "stair-bottom-right"],
      "l": ["upper-slab", "stair-bottom-right"],
      "m": ["stair-bottom-left", "stair-top-right"],
      "n": ["stair-bottom-right", "stair-top-right"],
      "o": ["stair-top-right", "stair-top-right"],
      "p": ["stair-top-left", "stair-top-right"],
      "q": ["lower-slab", "stair-top-right"],
      "r": ["upper-slab", "stair-top-right"],
      "s": ["stair-bottom-left", "stair-top-left"],
      "t": ["stair-bottom-right", "stair-top-left"],
      "u": ["stair-top-right", "stair-top-left"],
      "v": ["stair-top-left", "stair-top-left"],
      "w": ["lower-slab", "stair-top-left"],
      "x": ["upper-slab", "stair-top-left"],
      "y": ["stair-bottom-left", "lower-slab"],
      "z": ["stair-bottom-right", "lower-slab"],
      "0": ["stair-top-right", "lower-slab"],
      "1": ["stair-top-left", "lower-slab"],
      "2": ["lower-slab", "lower-slab"],
      "3": ["upper-slab", "lower-slab"],
      "4": ["stair-bottom-left", "upper-slab"],
      "5": ["stair-bottom-right", "upper-slab"],
      "6": ["stair-top-right", "upper-slab"],
      "7": ["stair-top-left", "upper-slab"],
      "8": ["lower-slab", "upper-slab"],
      "9": ["upper-slab", "upper-slab"],
      " ": ["empty", "empty"]
    };
  }

  alphabet_homewood() {
    return {
      "a": ["lower-slab", "stair-bottom-left"],
      "b": ["stair-bottom-right", "stair-bottom-right"],
      "c": ["upper-slab", "stair-bottom-left"],
      "d": ["stair-top-left", "stair-bottom-left"],
      "e": ["stair-bottom-left", "stair-bottom-left"],
      "f": ["stair-top-right", "stair-bottom-left"],
      "g": ["lower-slab", "stair-top-left"],
      "h": ["stair-bottom-right", "stair-top-left"],
      "i": ["stair-bottom-left", "stair-top-right"],
      "j": ["stair-top-left", "stair-top-left"],
      "k": ["stair-bottom-left", "stair-top-left"],
      "l": ["stair-top-right", "stair-top-left"],
      "m": ["lower-slab", "stair-top-right"],
      "n": ["stair-bottom-right", "stair-top-right"],
      "o": ["upper-slab", "stair-top-right"],
      "p": ["stair-top-left", "stair-top-right"],
      "q": ["upper-slab", "stair-top-left"],
      "r": ["stair-top-right", "stair-top-right"],
      "s": ["lower-slab", "stair-bottom-right"],
      "t": ["stair-bottom-right", "stair-bottom-left"],
      "u": ["upper-slab", "stair-bottom-right"],
      "v": ["stair-bottom-right", "stair-bottom-right"],
      "w": ["stair-bottom-left", "stair-bottom-right"],
      "x": ["stair-top-right", "stair-bottom-right"],
      "y": ["lower-slab", "lower-slab"],
      "z": ["stair-bottom-right", "lower-slab"],
      "1": ["upper-slab", "lower-slab"],
      "2": ["stair-top-left", "lower-slab"],
      "3": ["stair-bottom-left", "lower-slab"],
      "4": ["stair-top-right", "lower-slab"],
      "5": ["lower-slab", "upper-slab"],
      "6": ["stair-bottom-right", "upper-slab"],
      "7": ["upper-slab", "upper-slab"],
      "8": ["stair-top-left", "upper-slab"],
      "9": ["stair-bottom-left", "upper-slab"],
      "0": ["stair-top-right", "upper-slab"],
      " ": ["empty", "empty"],
    };
  }
}
class Glyph {

  constructor(latin_glyph) {
    this.top = this.getTop(latin_glyph);
    this.bottom = this.getBottom(latin_glyph);
  }

  getTop(latin_glyph) {
    var shapes = new Alphabet().get_alphabet(author)[latin_glyph];
    return new Piece(shapes[0]);
  }

  getBottom(latin_glyph) {
    var shapes = new Alphabet().get_alphabet(author)[latin_glyph];
    return new Piece(shapes[1]);
  }
}

class Slabsprak {
  constructor(latin_string, author) {
    this.latin_string = latin_string;
  }

  getLetters() {
    var glyphs = [];
    for (let glyph of this.latin_string) {
      glyphs += new Glyph(glyph);
      glyphs += new Glyph(" ");
    }
    return glyphs;
  }

  toHTML() {
    const container = document.createElement("div");
    for (
      let letter_index = 0;
      letter_index < this.latin_string.length;
      letter_index++
    ) {
      let letter = this.latin_string[letter_index];
      var glyph = new Glyph(letter);

      const letter_el = document.createElement("span");
      letter_el.className = "letter";

      for (let i = 0; i < glyph.top.toArray().length; i++) {
        const arr = glyph.top.toArray()[i];
        for (let j = 0; j < arr.length; j++) {
          let class_names = ["cell light", "cell dark"];
          let cell = document.createElement("span");
          cell.className = class_names[arr[j]];
          letter_el.appendChild(cell);
        }
      }
      for (let i = 0; i < glyph.bottom.toArray().length; i++) {
        const arr = glyph.bottom.toArray()[i];
        for (let j = 0; j < arr.length; j++) {
          let class_names = ["cell light", "cell dark"];
          let cell = document.createElement("span");
          cell.className = class_names[arr[j]];
          letter_el.appendChild(cell);
        }
      }
      container.appendChild(letter_el);
    }
    return container.innerHTML;
  }
}

const out = document.getElementById("output");
const input = document.getElementById("input");
let author = "ethoslab"
input.addEventListener("input", (e) => translate(e.target.value,author, out));

function translate(string, author, element) {
  let clean_string = string.toLowerCase().replace(/[^A-z0-9\s]/g, "");
  element.innerHTML = new Slabsprak(clean_string, author).toHTML(element);
}
