import React from "react";

import styles from "./dashboard.module.css";
import heartRed from "./icons/heartRed32x32.png";
import comment from "./icons/comment32x32.png";

import { useQuery, gql } from "@apollo/client";
import { getActiveUser, useAuth } from "../../utils/auth";

const MEDIA = gql`
  query Query($userUserId: String!) {
    user(userId: $userUserId) {
      _id
      username
      posts {
        _id
        mediaType
        title
        content
        contentType
        likesCount
        commentsCount
      }
      photos {
        commentsCount
        likesCount
        contentType
        img
        desc
        mediaType
        _id
      }
    }
  }
`;

function MediaQuery() {
  useAuth();
  const activeUser = getActiveUser();
  console.log(activeUser);
  const { loading, error, data } = useQuery(MEDIA, {
    variables: { userUserId: activeUser._id },
  });

  if (loading) return <div>"Loading MediaQuery ..."</div>;
  if (error) return <div>"Error:", {error.message}</div>;
  console.log("User mediaQuery load success!", data);
  const noMedia = data.user.photos.length < 1 && data.user.posts.length < 1;
  return (
    <>
      {data.user.photos.map((photo) => {
        return (
          <Photo
            img={photo.img}
            likesCount={photo.likesCount}
            commentsCount={photo.commentsCount}
            // author={photo.author.username}
            desc={photo.desc}
          ></Photo>
        );
      })}
      {data.user.posts.map((post) => {
        return (
          <WrittenPost
            title={post.title}
            content={post.content}
            // username={post.author.username}
            date="5/8/2021"
            commentsCount={post.commentsCount}
            likesCount={post.likesCount}
          ></WrittenPost>
        );
      })}
      {noMedia ? (
        <div>
          <p>
            No Posts or Photos added yet! Click on "new post" or "new photo" to
            begin.
          </p>
        </div>
      ) : null}
    </>
  );
}

// Home components
export function Photo(props) {
  return (
    <div className={styles.photoContainer}>
      <div className={styles.imgDiv}>
        <img className={styles.photoPostImg} src={props.img} alt=""></img>
      </div>
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
          <h3 className={styles.heading}>{props.title}</h3>
        </div>

        <div className={styles.articleContent}>
          <p className={styles.content}> {props.content}</p>
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
        <img
          className={styles.likesCommentsImg}
          src={heartRed}
          alt="Red heart"
        ></img>
        <p className={styles.likesCommentsP} id="numLikes">
          {props.numLikes}
        </p>
        <img
          className={styles.likesCommentsImg}
          src={comment}
          alt="Square comment bubble"
        ></img>
        <p className={styles.likesCommentsP} id="numComments">
          {props.numComments}
        </p>
      </div>
      <div className={styles.posterInfo}>
        <h5 className={styles.posterUsername}>{props.username}</h5>
        {props.children && (
          <h5 className={styles.posterDesc}>{props.children}</h5>
        )}
        {props.date && <h5 className={styles.datePosted}>{props.date}</h5>}
      </div>
    </div>
  );
}

export function Dashboard(props) {
  return (
    <div className={styles.homeContent}>
      <MediaQuery />
    </div>
  );
}
