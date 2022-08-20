import React, { Component } from "react";
import Container from "./Container";
import SendComment from "./SendComment";
import "./styles/main.css";
import data from "./data.json";
import { User } from "./Data.js";
import { Comment } from "./Data.js";
import { CommentContainer } from "./styles/component_style";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: data.currentUser,
      comments: data.comments,
    };
    this.pushNewValue = this.pushNewValue.bind(this);
  }

  pushNewValue() {
    const lastComment = data.comments.shift();
    const values = this.state.comments;
    console.log(lastComment);
    values.push(lastComment);
    this.setState({
      comments: values,
    });
  }

  render() {
    return (
      <main>
        <CommentContainer>
          {this.state.comments.map((res, index) => (
            <Container
              key={index}
              reply={this.reply}
              comment={
                new Comment(
                  res.id,
                  res.content,
                  res.createdAt,
                  res.score,
                  new User(res.user.username, res.user.image.png)
                )
              }
            />
          ))}
        </CommentContainer>
        <SendComment
          profileImage={this.state.currentUser.image.png}
          pushNewValue={this.pushNewValue}
        />
      </main>
    );
  }

  reply = (id) => {
    console.log("id", id);
  };
}

export default Main;
