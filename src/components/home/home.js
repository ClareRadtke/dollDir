import React from "react";

import styles from "./home.module.css";
import heartRed from "./icons/heartRed32x32.png";
import comment from "./icons/comment32x32.png";

import { useQuery, gql } from "@apollo/client";

const MEDIA = gql`
  query GetMedia {
    media {
      ... on Post {
        _id
        mediaType
        contentType
        author {
          username
          _id
        }
        title
        content
        commentsCount
        likesCount
      }
      ... on Photo {
        _id
        mediaType
        contentType
        desc
        author {
          _id
          username
        }
        commentsCount
        likesCount
      }
    }
  }
`;

function MediaQuery() {
  const { loading, error, data } = useQuery(MEDIA);

  if (loading) return <div>"Loading MediaQuery ..."</div>;
  if (error) return <div>"Error:", {error.message}</div>;
  console.log("MediaQuery load success!", data);
  return (
    <>
      {data.media.map((m) => {
        if (m.mediaType === "Photo") {
          return (
            <Photo
              img="http://placekitten.com/360/300"
              likesCount={m.likesCount}
              commentsCount={m.commentsCount}
              author={m.author.username}
              desc={m.desc}
            ></Photo>
          );
        }
        if (m.mediaType === "Post") {
          return (
            <WrittenPost
              title={m.title}
              content={m.content}
              username={m.author.username}
              date="5/8/2021"
              commentsCount={m.commentsCount}
              likesCount={m.likesCount}
            ></WrittenPost>
          );
        }
        return null;
      })}
    </>
  );
}

// Home components
export function Photo(props) {
  return (
    <div className={styles.photoContainer}>
      <img src={props.img} alt=""></img>
      <PostInfo
        numLikes={props.likesCount}
        numComments={props.commentsCount}
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
          numLikes={props.likesCount}
          numComments={props.commentsCount}
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
      <MediaQuery />
    </div>
  );
}
