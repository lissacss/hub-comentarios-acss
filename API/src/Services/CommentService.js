
server.get("/comment", (req, res) => {
    const queryByUser = `SELECT comment.id,
                              user.username as author,
                              comment.comment_text,
                              comment.created_at,
                              comment.updated_at
                          FROM comment
                      INNER JOIN user ON comment.userId = user.id
                      ORDER BY comment.updated_at DESC;`;
    // const queryList = `SELECT * FROM comment`
    db.query(queryByUser, (err, results) => {
      if (err) {
        return res
          .status(500)
          .json({ success: false, error: "Internal server error" });
      }
      res.json({ success: true, comment: results });
    });
  });