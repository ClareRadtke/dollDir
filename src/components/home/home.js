import React from "react";
import styles from "./home.module.css";
import heartRed from "./icons/heartRed32x32.png";
import comment from "./icons/comment32x32.png";

export function Photo(props) {
  return (
    <div className={styles.photoContainer}>
      <img src={props.img} alt=""></img>
      <PostInfo
        numLikes={props.likes}
        numComments={props.comments}
        username={props.author}
      >
        {props.desc}
      </PostInfo>
    </div>
  );
}

export function WrittenPost(props) {
  return (
    <div className={styles.writtenPostContainer}>
      <div className={styles.articleContainer}>
        <div className={styles.articleHeader}>
          <h3>{props.title}</h3>
        </div>

        <div className={styles.articleContent}>
          <p> {props.content}</p>
        </div>
        <PostInfo
          numLikes={props.likes}
          numComments={props.comments}
          username={props.username}
          date={props.date}
          // TODO: schema needs a date key with creation date
        ></PostInfo>
      </div>
    </div>
  );
}

export function PostInfo(props) {
  return (
    <div className={styles.postInfo}>
      <div className={styles.likesCommentsContainer}>
        <img src={heartRed} alt="Red heart"></img>
        <p id="numLikes">{props.numLikes}</p>
        <img src={comment} alt="Square comment bubble"></img>
        <p id="numComments">{props.numComments}</p>
      </div>
      <div className={styles.posterInfo}>
        <h5 className={styles.posterUsername}>{props.username}</h5>
        {props.children && (
          <h5 className={styles.posterComment}>{props.children}</h5>
        )}
        {props.date && <h5 className={styles.datePosted}>{props.date}</h5>}
      </div>
    </div>
  );
}

export function Home(props) {
  return (
    <div className={styles.homeContent}>
      <Photo
        img="http://placekitten.com/360/300"
        likes="2"
        comments="0"
        author="User1"
        desc="My Kitten!"
      ></Photo>

      <WrittenPost
        title="Written Post"
        content="A website for the Doll Customising community. You will be able to select
        if your interest is in Ball Jointed Dolls (Artist sculpted resin or
        vinyl dolls), One Of A Kind Custom Playline Dolls (for example: barbie,
        monster high, rainbow high dolls - dolls that can be brought in
        toystores) or both and the site will tailor its content for your
        preference. The home page will have a feed of the most recent photos and
        blogs."
        username="User2"
        date="5/8/2021"
        comments="1"
        likes="3"
      ></WrittenPost>

      {/* 

      */}

      <Photo
        img="http://placekitten.com/350/250"
        likes="12"
        comments="8"
        author="User3"
        desc="Getting some zzz's ...."
      ></Photo>

      <WrittenPost
        title="Written Post"
        content="A website for the Doll Customising community. You will be able to select
        if your interest is in Ball Jointed Dolls (Artist sculpted resin or
        vinyl dolls), One Of A Kind Custom Playline Dolls (for example: barbie,
        monster high, rainbow high dolls - dolls that can be brought in
        toystores) or both and the site will tailor its content for your
        preference. The home page will have a feed of the most recent photos and
        blogs."
        username="User1"
        date="7/8/2021"
        comments="5"
        likes="6"
      ></WrittenPost>
    </div>
  );
}
