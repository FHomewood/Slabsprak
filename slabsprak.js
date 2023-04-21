class Piece {
  SHAPES = {
    "d": [[1, 1], [0, 1],],
    "f": [[1, 1], [1, 0],],
    "h": [[1, 0], [1, 1],],
    "j": [[0, 1], [1, 1],],
    "c": [[1, 1], [0, 0],],
    "x": [[0, 0], [1, 1],],
    " ": [],
  };

  shape;

  constructor(shape) {
    this.shape = shape;
  }

  to_array() {
    return this.SHAPES[this.shape];
  }
}

class Glyph {
  ALPHABET = {
    "a": ["x", "h"],
    "b": ["j", "h"],
    "c": ["c", "h"],
    "d": ["f", "h"],
    "e": ["h", "h"],
    "f": ["d", "h"],
    "g": ["x", "f"],
    "h": ["j", "f"],
    "i": ["c", "f"],
    "j": ["f", "f"],
    "k": ["h", "f"],
    "l": ["d", "f"],
    "m": ["x", "d"],
    "n": ["j", "d"],
    "o": ["c", "d"],
    "p": ["f", "d"],
    "q": ["h", "d"],
    "r": ["d", "d"],
    "s": ["x", "j"],
    "t": ["j", "j"],
    "u": ["c", "j"],
    "v": ["j", "j"],
    "w": ["h", "j"],
    "x": ["d", "j"],
    "y": ["x", "x"],
    "z": ["j", "x"],
    "1": ["c", "x"],
    "2": ["f", "x"],
    "3": ["h", "x"],
    "4": ["d", "x"],
    "5": ["x", "c"],
    "6": ["j", "c"],
    "7": ["c", "c"],
    "8": ["f", "c"],
    "9": ["h", "c"],
    "0": ["d", "c"],
    " ": [" ", " "],
  };

  top;
  bottom;

  constructor(latin_glyph) {
    this.top = this.get_top_glyph(latin_glyph);
    this.bottom = this.get_bottom_glyph(latin_glyph);
  }

  get_top_glyph(latin_glyph) {
    var shapes = this.ALPHABET[latin_glyph];
    return new Piece(shapes[0]);
  }

  get_bottom_glyph(latin_glyph) {
    var shapes = this.ALPHABET[latin_glyph];
    return new Piece(shapes[1]);
  }
}

class Slabsprak {
  latin_string;

  constructor(latin_string) {
    this.latin_string = latin_string;
  }

  get_letters() {
    var glyphs = [];
    for (let glyph of this.latin_string) {
      glyphs += new Glyph(glyph);
      glyphs += new Glyph(" ");
    }
    return glyphs;
  }

  update_output(el){
    for (
      let letter_index = 0;
      letter_index < this.latin_string.length;
      letter_index++
    ) 
    {
      let letter = this.latin_string[letter_index];
      var glyph = new Glyph(letter);

      const letter_el = document.createElement("span");
      letter_el.className = "letter";

      for (let i = 0; i < glyph.top.to_array().length; i++){
        const arr = glyph.top.to_array()[i]
        for (let j = 0; j < arr.length; j++){
          let class_names = ['cell light', 'cell dark'];
          let cell = document.createElement("span");
          cell.className = class_names[arr[j]]
          letter_el.appendChild(cell)
        }
      }
      for (let i = 0; i < glyph.bottom.to_array().length; i++){
        const arr = glyph.bottom.to_array()[i]
        for (let j = 0; j < arr.length; j++){
          let class_names = ['cell light', 'cell dark'];
          let cell = document.createElement("span");
          cell.className = class_names[arr[j]]
          letter_el.appendChild(cell)
        }
      }
      
      el.appendChild(letter_el)
    }
  }
}

const el = document.getElementById("cells-wrapper");
const input = document.getElementById("input");
input.addEventListener("load", () => Slabsprak);
input.addEventListener("input", (e) => translate(e.target.value, el));

function translate(string, el) {
  let clean_string = string.toLowerCase().replace(/[^A-z0-9\s]/g, "")
  el.innerHTML = ""
  new Slabsprak(clean_string).update_output(el);
}
