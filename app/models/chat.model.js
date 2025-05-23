const sql = require("./db.js");
// constructor
const chat= function (chat) {
    this.chatID = chat.chatID;
    this.consumerID = chat.consumerID;
    this.businessID = chat.businessID;
    this.time_stamp = chat.time_stamp;
    this.chat_message = chat.chat_message;
};

chat.create = (newchat, result) => {
  sql.query("INSERT INTO chat SET ?", newchat, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created chat: ", { id: res.insertId, ...newchat});
    result(null, { id: res.insertId, ...newchat});
  });
};

chat.findById = (id, result) => {
  sql.query(`SELECT * FROM chat WHERE chatID = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("found chat: ", res[0]);
      result(null, res[0]);
      return;
    }
    // not found chat with the id
    result({ kind: "not_found" }, null);
  });
};

chat.getAll = (result) => {
  let query = "SELECT * FROM chat";
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("chat: ", res);
    result(null, res);
  });
};

/*
chat.getAllPublished = (result) => {
  sql.query("SELECT * FROM chatWHERE published=true", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("chat: ", res);
    result(null, res);
  });
};
*/
/*
chat.updateById = (id, chat, result) => {
  sql.query(
    "UPDATE chat SET bank_information = ?, rate_per_hour = ? WHERE id = ?",
    [chat.fname_of_chat, chat.lname_of_chat, chat.email, chat.phone_number, chat.location, chat.chat_profile, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        // not found chatwith the id
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("updated chat: ", { id: id, ...chat});
      result(null, { id: id, ...chat});
    }
  );
};

*/
chat.remove = (id, result) => {
  sql.query("DELETE FROM chat WHERE chatID = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    if (res.affectedRows == 0) {
      // not found chat with the id
      result({ kind: "not_found" }, null);
      return;
    }
    console.log("deleted chatwith id: ", id);
    result(null, res);
  });
};

chat.removeAll = (result) => {
  sql.query("DELETE FROM chat", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log(`deleted ${res.affectedRows} chat`);
    result(null, res);
  });
};
module.exports = chat;
