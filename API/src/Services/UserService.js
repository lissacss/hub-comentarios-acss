
server.get("/user", (req, res) => {
    db.query("SELECT * FROM user", (err, results) => {
      res.json({ success: true, user: results });
    });
  });