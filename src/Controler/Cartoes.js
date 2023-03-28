import { openDb } from "../configDB.js";

export async function createTableCartoes() {
  try {
    openDb().then((db) => {
      db.exec(
        "CREATE TABLE IF NOT EXISTS Cartoes ( id INTEGER PRIMARY KEY, numero TEXT, tipo TEXT )"
      );
    });
  } catch (error) {
    console.error(error);
  }
}

export async function selectCartoes(req, res) {
  try {
    openDb().then((db) => {
      db.all("SELECT * FROM Cartoes").then((Cartoes) => res.json(Cartoes));
    });
  } catch (error) {
    console.error(error);
  }
}
export async function selectCartao(req, res) {
  try {
    let id = req.body.id;
    openDb().then((db) => {
      db.get("SELECT * FROM Cartoes WHERE id=?", [id]).then((cartoes) =>
        res.json(cartoes)
      );
    });
  } catch (error) {
    console.error(error);
  }
}
export async function insertCartao(req, res) {
  let cartoes = req.body;
  openDb().then((db) => {
    db.run("INSERT INTO Cartoes (numero, tipo) VALUES (?,?)", [
      cartoes.numero,
      cartoes.tipo,
    ]);
  });
  res.json({
    statusCode: 200,
  });
}
export async function updateCartao(req, res) {
  try {
    let cartao = req.body;
    openDb().then((db) => {
      db.run("UPDATE Cartoes SET numero=?, tipo=? WHERE id=?", [
        cartao.numero,
        cartao.tipo,
        cartao.id,
      ]);
    });
    res.json({
      statusCode: 200,
    });
  } catch (error) {
    console.error(error);
  }
}

export async function deleteCartao(req, res) {
  try {
    let id = req.body.id;
    openDb().then((db) => {
      db.get("DELETE FROM Cartoes WHERE id=?", [id]).then((res) => res);
    });
    res.json({
      statusCode: 200,
    });
  } catch (error) {
    console.error(error);
  }
}
