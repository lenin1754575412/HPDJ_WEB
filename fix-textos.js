const fs = require("fs");
const path = require("path");

const root = path.join(process.cwd(), "src");

const exts = new Set([".ts", ".tsx", ".js", ".jsx", ".css"]);

const fixes = [
  ["\u00C3\u00A1", "\u00E1"],
  ["\u00C3\u00A9", "\u00E9"],
  ["\u00C3\u00AD", "\u00ED"],
  ["\u00C3\u00B3", "\u00F3"],
  ["\u00C3\u00BA", "\u00FA"],
  ["\u00C3\u00B1", "\u00F1"],
  ["\u00C3\u0091", "\u00D1"],
  ["\u00C3\u0081", "\u00C1"],
  ["\u00C3\u0089", "\u00C9"],
  ["\u00C3\u008D", "\u00CD"],
  ["\u00C3\u0093", "\u00D3"],
  ["\u00C3\u009A", "\u00DA"],
  ["\u00C2\u00B0", "\u00B0"],
  ["\u00C2", ""],

  ["Habitaci\u00C3\u00B3n", "Habitaci\u00F3n"],
  ["Misi\u00C3\u00B3n", "Misi\u00F3n"],
  ["Visi\u00C3\u00B3n", "Visi\u00F3n"],
  ["Prop\u00C3\u00B3sito", "Prop\u00F3sito"],
  ["Caf\u00C3\u00A9", "Caf\u00E9"],
  ["Caf\u00C3\u00A9s", "Caf\u00E9s"],
  ["Bebidas fr\u00C3\u00ADas", "Bebidas fr\u00EDas"],
  ["Men\u00C3\u00BA", "Men\u00FA"],
  ["Ba\u00C3\u00B1o", "Ba\u00F1o"],
  ["Per\u00C3\u00BA", "Per\u00FA"],
  ["Celend\u00C3\u00ADn", "Celend\u00EDn"],
  ["Tel\u00C3\u00A9fono", "Tel\u00E9fono"],
  ["Cont\u00C3\u00A1ctanos", "Cont\u00E1ctanos"],
  ["Ubicaci\u00C3\u00B3n", "Ubicaci\u00F3n"],
  ["Env\u00C3\u00ADanos", "Env\u00EDanos"],
  ["Cu\u00C3\u00A9ntanos", "Cu\u00E9ntanos"],
  ["n\u00C3\u00BAmero", "n\u00FAmero"],
  ["pr\u00C3\u00B3xima", "pr\u00F3xima"],
  ["estad\u00C3\u00ADa", "estad\u00EDa"],
  ["sue\u00C3\u00B1os", "sue\u00F1os"],
  ["c\u00C3\u00B3modo", "c\u00F3modo"],
  ["c\u00C3\u00B3moda", "c\u00F3moda"],
  ["incre\u00C3\u00ADbles", "incre\u00EDbles"],
  ["\u00C3\u00BAnicos", "\u00FAnicos"],
  ["Gu\u00C3\u00ADa tur\u00C3\u00ADstico", "Gu\u00EDa tur\u00EDstico"],
  ["Fotograf\u00C3\u00ADas", "Fotograf\u00EDas"],
  ["Preparaci\u00C3\u00B3n", "Preparaci\u00F3n"],
  ["Infusi\u00C3\u00B3n", "Infusi\u00F3n"],
  ["T\u00C3\u00A9", "T\u00E9"],
  ["S\u00C3\u00A1ndwiches", "S\u00E1ndwiches"],
  ["s\u00C3\u00A1ndwiches", "s\u00E1ndwiches"],
  ["acompa\u00C3\u00B1amientos", "acompa\u00F1amientos"],
];

function walk(dir) {
  for (const item of fs.readdirSync(dir)) {
    const full = path.join(dir, item);
    const stat = fs.statSync(full);

    if (stat.isDirectory()) {
      walk(full);
      continue;
    }

    if (!exts.has(path.extname(full))) continue;

    let text = fs.readFileSync(full, "utf8");
    const old = text;

    for (const [bad, good] of fixes) {
      text = text.split(bad).join(good);
    }

    if (text !== old) {
      fs.writeFileSync(full, text, "utf8");
      console.log("Corregido:", full);
    }
  }
}

walk(root);
console.log("Listo: textos corregidos.");
