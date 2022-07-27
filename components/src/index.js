import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./comment";
import ApprovalCard from "./ApprovalCard";
import "./style/App.css";
const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Milli"
          timeAgo="Today at 3:00PM"
          textComment="a milli a milli"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Cali"
          timeAgo="Today at 5:00PM"
          textComment="ZOOOOOOMMMMMMIEEESSS"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Gauge"
          timeAgo="Yesterday at 3:00PM"
          textComment="Where is the desk?"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

//  https://cdnjs.com/libraries/semantic-ui
