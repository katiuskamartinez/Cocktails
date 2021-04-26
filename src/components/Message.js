import React from "react";

const Message = ({ msg }) => {
  let styles = {
    padding: "1rem",
    marginBotton: "1rem",
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    backgroundColor: "#dc3545",
  };
  return (
    <div style={styles}>
      <p>{msg}</p>
    </div>
  );
};

export default Message;
