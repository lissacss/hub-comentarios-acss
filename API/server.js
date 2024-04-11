const express = require("express");
const bodyParser = require("body-parser");

const cors = require("cors");

const server = express();

server.use(cors());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

const PORT = 7000;







// LISTAR COMENTÁRIOS


// ADICIONAR COMMENT

server.post("/comment", (req, res) => {
  const { userId, comment_text } = req.body;
  db.query(
    "INSERT INTO comment (userId, comment_text) VALUES (?, ?)",
    [userId, comment_text],
    (err, result) => {
      if (err) {
        return res
          .status(500)
          .json({ success: false, error: "Internal server error" });
      }
      res.json({ success: true });
    }
  );
});

server.get("/user-comments", (req, res) => {
  const  userId  = req.params.userId;
  const query = `   
                SELECT comment.id,
                user.firstname as author,
                comment.comment_text,
                comment.created_at,
                comment.updated_at
                FROM
                comment
                INNER JOIN user ON comment.userId = user.id
                WHERE comment.userId = ?
                ORDER BY comment.updated_at DESC`;
  db.query(query, [userId], (err, result) => {
    if (err) {
      return res
        .status(500)
        .json({ success: false, error: "Internal server error" });
    }

    if (result.length > 0) {
      res.json({ success: true, comment: result });
    } else {
      res.json({ success: false, error: "Dados não foram carregados" });
    }
  });
});

server.listen(PORT, () => {
  console.log(`O server está rodando em http://localhost:${PORT}`);
});
