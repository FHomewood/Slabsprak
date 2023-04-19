class Piece {

    SHAPES = {
        "d": [[1, 1], [0, 1]],
        "f": [[1, 1], [1, 0]],
        "h": [[1, 0], [1, 1]],
        "j": [[0, 1], [1, 1]],
        "c": [[1, 1], [0, 0]],
        "x": [[0, 0], [1, 1]],
        " ": [[0], [0]],
    };

    shape;

    constructor(shape) {
        this.shape = shape
    }

    to_array() {
        return this.SHAPES[this.shape]
    }
}

class Glyph {
    ALPHABET = {
        "a": ['x', 'h'], "b": ['j', 'h'], "c": ['c', 'h'], "d": ['f', 'h'], "e": ['h', 'h'], "f": ['d', 'h'],
        "g": ['x', 'f'], "h": ['j', 'f'], "i": ['c', 'f'], "j": ['f', 'f'], "k": ['h', 'f'], "l": ['d', 'f'],
        "m": ['x', 'd'], "n": ['j', 'd'], "o": ['c', 'd'], "p": ['f', 'd'], "q": ['h', 'd'], "r": ['d', 'd'],
        "s": ['x', 'j'], "t": ['j', 'j'], "u": ['c', 'j'], "v": ['j', 'j'], "w": ['h', 'j'], "x": ['d', 'j'],
        "y": ['x', 'x'], "z": ['j', 'x'], "1": ['c', 'x'], "2": ['f', 'x'], "3": ['h', 'x'], "4": ['d', 'x'],
        "5": ['x', 'c'], "6": ['j', 'c'], "7": ['c', 'c'], "8": ['f', 'c'], "9": ['h', 'c'], "0": ['d', 'c'],
        " ": [' ', ' '],
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
        this.latin_string = latin_string
    }

    get_letters() {
        var glyphs = []
        for (let glyph of this.latin_string) {
            glyphs += new Glyph(glyph)
            glyphs += new Glyph(" ")
        }
        return glyphs
    }

    to_array() {
        var out = [[], [], [], []];
        for (let letter_index = 0; letter_index < this.latin_string.length; letter_index++) {
            let letter = this.latin_string[letter_index]
            var glyph = new Glyph(letter)
            out[0] += glyph.top.to_array()[0].join("")
            out[1] += glyph.top.to_array()[1].join("")
            out[2] += glyph.bottom.to_array()[0].join("")
            out[3] += glyph.bottom.to_array()[1].join("")

            glyph = new Glyph(" ")
            out[0] += glyph.top.to_array()[0].join("")
            out[1] += glyph.top.to_array()[1].join("")
            out[2] += glyph.bottom.to_array()[0].join("")
            out[3] += glyph.bottom.to_array()[1].join("")

        }
        return out
    }

    to_string() {
        var sprak = ["", "", "", ""];
        let ind = 0
        const arr = this.to_array()
        for (let line = 0; line < arr.length; line++) {
            for (let block = 0; block < arr[line].length; block++) {
                let i = arr[line][block]
                if (i === "1") {
                    sprak[ind] += "■";
                } else {
                    sprak[ind] += " ";
                }
            }
            ind++
        }
        return sprak
    }
}

const input = document.querySelector("input");
input.addEventListener("input", updateValue);
const line = document.getElementById("values");

function updateValue(e) {
    translate(e.target.value)
}

function translate(string){
    let lines = new Slabsprak(string.toLowerCase().replace(/\W/g, '')).to_string()
    line.textContent = lines[0] + "\n" +
        lines[1] + "\n" +
        lines[2] + "\n" +
        lines[3]

}