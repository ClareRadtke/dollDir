import React, { useState } from "react";
import styles from "./newPost.module.css";
import { gql, useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../utils/auth";

const ADD_POST = gql`
  mutation Mutation(
    $addPostTitle: String!
    $addPostContent: String!
    $addPostContentType: ContentType!
  ) {
    addPost(
      title: $addPostTitle
      content: $addPostContent
      contentType: $addPostContentType
    ) {
      title
      content
      contentType
      author {
        _id
      }
    }
  }
`;

export function NewPost(props) {
  useAuth();
  const [addPost] = useMutation(ADD_POST);
  const [title, updateTitle] = useState("");
  const [content, updateContent] = useState("");
  const [contentType, updateContentType] = useState("");
  const history = useHistory();
  return (
    <>
      <div className={styles.buttonContainer}>
        <button
          type="button"
          value="save"
          className={`${styles.button} ${styles.save}`}
          id="create-post"
          onClick={(event) => {
            addPost({
              variables: {
                addPostTitle: title,
                addPostContent: content,
                addPostContentType: contentType,
              },
            }).then(() => {
              history.push("/dashboard");
            });
          }}
        >
          Create!
        </button>
      </div>

      <div className={styles.homeContent}>
        <form
          autoComplete="off"
          className={`${styles.articleContainer} ${styles.newPostForm}`}
        >
          <label htmlFor="post-title"></label>
          <input
            className={styles.newpostInput}
            type="text"
            id="post-title"
            name="post-title"
            required
            minLength="1"
            placeholder="Title"
            value={title}
            onChange={(event) => {
              updateTitle(event.currentTarget.value);
            }}
          />

          <label htmlFor="new-post"></label>
          <textarea
            className={styles.newpostTextarea}
            value={content}
            onChange={(event) => {
              updateContent(event.currentTarget.value);
            }}
            id="new-post"
            name="new-post"
            required
            rows="5"
            cols="20"
            spellCheck="true"
            minLength="1"
            placeholder="Write your post here"
          ></textarea>

          <label htmlFor="contentTypeSelection" className={styles.contentType}>
            What part of the hobby does this relate to?
          </label>
          <input
            className={styles.newpostInput}
            list="contentTypeOptions"
            id="contentTypeSelection"
            name="contentTypeSelection"
            value={contentType}
            onChange={(event) => {
              updateContentType(event.currentTarget.value);
            }}
          />

          <datalist id="contentTypeOptions">
            <option value="BJD" />
            <option value="OOAK" />
            <option value="BOTH" />
          </datalist>
        </form>
      </div>
    </>
  );
}
