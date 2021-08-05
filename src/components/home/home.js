import React from "react";
import styles from "./home.module.css";
import heartRed from "./icons/heartRed32x32.png";
import comment from "./icons/comment32x32.png";

// export function Photo(props) {
//   return (
//
//   );
// }

// export function WrittenPost(props) {
//   return (
//
//   );
// }

// export function PostInfo(props) {
//   return (
//
//   );
// }

export function Home(props) {
  return (
    <div className={styles.homeContent}>
      <div className={styles.photoContainer}>
        <img src="http://placekitten.com/360/300" alt=""></img>

        <div className={styles.postInfo}>
          <div className={styles.likesCommentsContainer}>
            <img src={heartRed} alt="Red heart"></img>
            <p id="numLikes">12</p>
            <img src={comment} alt="Square comment bubble"></img>
            <p id="numComments">8</p>
          </div>

          <div className={styles.posterInfo}>
            <h5 className={styles.posterUsername}>User1</h5>
            <h5 className={styles.posterComment}>what is that? WHAT IS IT!</h5>
          </div>
        </div>
      </div>

      <div className={styles.writtenPostContainer}>
        <div className={styles.articleContainer}>
          <div className={styles.articleHeader}>
            <h3>Written Post</h3>
          </div>

          <div className={styles.articleContent}>
            <p>
              A website for the Doll Customising community. You will be able to
              select if your interest is in Ball Jointed Dolls (Artist sculpted
              resin or vinyl dolls), One Of A Kind Custom Playline Dolls (for
              example: barbie, monster high, rainbow high dolls - dolls that can
              be brought in toystores) or both and the site will tailor its
              content for your preference. The home page will have a feed of the
              most recent photos and blogs.
            </p>
          </div>
          <div className={styles.postInfo}>
            <div className={styles.likesCommentsContainer}>
              <img src={heartRed} alt="Red heart"></img>
              <p id="numLikes">12</p>
              <img src={comment} alt="Square comment bubble"></img>
              <p id="numComments">8</p>
            </div>

            <div className={styles.posterInfo}>
              <h5 className={styles.posterUsername}>User1</h5>
              <h5 className={styles.datePosted}>5/08/2021</h5>
            </div>
          </div>
        </div>
      </div>

      {/* 

      */}

      <div className={styles.photoContainer}>
        <img src="http://placekitten.com/350/250" alt=""></img>

        <div className={styles.postInfo}>
          <div className={styles.likesCommentsContainer}>
            <img src={heartRed} alt="Red heart"></img>
            <p id="numLikes">12</p>
            <img src={comment} alt="Square comment bubble"></img>
            <p id="numComments">8</p>
          </div>

          <div className={styles.posterInfo}>
            <h5 className={styles.posterUsername}>User1</h5>
            <h5 className={styles.posterComment}>Getting some zzz's ....</h5>
          </div>
        </div>
      </div>

      <div className={styles.writtenPostContainer}>
        <div className={styles.articleContainer}>
          <div className={styles.articleHeader}>
            <h3>Written Post</h3>
          </div>

          <div className={styles.articleContent}>
            <p>
              A website for the Doll Customising community. You will be able to
              select if your interest is in Ball Jointed Dolls (Artist sculpted
              resin or vinyl dolls), One Of A Kind Custom Playline Dolls (for
              example: barbie, monster high, rainbow high dolls - dolls that can
              be brought in toystores) or both and the site will tailor its
              content for your preference. The home page will have a feed of the
              most recent photos and blogs.
            </p>
          </div>
          <div className={styles.postInfo}>
            <div className={styles.likesCommentsContainer}>
              <img src={heartRed} alt="Red heart"></img>
              <p id="numLikes">12</p>
              <img src={comment} alt="Square comment bubble"></img>
              <p id="numComments">8</p>
            </div>

            <div className={styles.posterInfo}>
              <h5 className={styles.posterUsername}>User1</h5>
              <h5 className={styles.datePosted}>5/08/2021</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
