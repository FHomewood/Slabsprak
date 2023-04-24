class Piece {
  SHAPES = {
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
    "empty": [],
  };

  constructor(shape) {
    this.shape = shape;
  }

  to_array() {
    return this.SHAPES[this.shape];
  }
}

class Glyph {
  ALPHABET = {
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
input.addEventListener("input", (e) => translate(e.target.value, el));

function translate(string, el) {
  let clean_string = string.toLowerCase().replace(/[^A-z0-9\s]/g, "")
  el.innerHTML = ""
  new Slabsprak(clean_string).update_output(el);
}
