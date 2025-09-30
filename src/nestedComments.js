import {useState} from "react";

function Comment({comment, level, addReply}) {
  const [showReply, setShowReply] = useState(false);
  const [replyText, setReplyText] = useState("");

  const handleReply = () => {
    if(replyText.trim()) {
      addReply(comment.id, replyText);
      setReplyText("");
      setShowReply(false);
    }
  }

  const handleRemove = () => {
    setShowReply(false);
    setReplyText("");
  }
  return(
      <div style={{marginLeft: level * 20, marginTop: 8}}>
        <div>
          {comment.text}
          <button style={{marginLeft:8}} onClick={() => setShowReply(!showReply)}>
            Reply
          </button>
        </div>
        {showReply && (
            <div style={{marginTop: 4}}>
              <input
                  value={replyText}
                  onChange={e => setReplyText(e.target.value)}
                  placeholder="type your reply"
              />
              <button onClick={handleReply}>Submit</button>
              <button onClick={handleRemove}>Remove</button>
            </div>
        )}
        {comment.replies.map(reply => (
            <Comment key={reply.id} comment={reply} level={level+1} addReply={addReply} />
        ))}
      </div>
  );
}


function NestedComments() {
  const data = [
    {
      id: 1,
      text: "First comment",
      replies: [
      ]
    }
  ];
  const [comments, setComments] = useState(data);

  const addReply = (id, text) => {
    const add = (items) => {
      return items.map(item =>
          (
              item.id === id
                  ? {
                    ...item,
                    replies: [
                      ...item.replies,
                      {id: Date.now(), text, replies: []}
                    ]
                  }
                  : {...item, replies: add(item.replies)}
          )
      );
    }
  setComments(add(comments));
};

  return(
      <div>
      {comments.map(comment=> (
          <Comment key={comment.id} comment={comment} level={0} addReply={addReply}/>
      ))}
      </div>
  );
}

export default NestedComments;