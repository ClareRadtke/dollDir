import React, { useState } from "react";
import styles from "./newPhoto.module.css";
import { gql, useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../utils/auth";

const ADD_PHOTO = gql`
  mutation Mutation(
    $addPhotoImg: String!
    $addPhotoDesc: String!
    $addPhotoContentType: ContentType!
  ) {
    addPhoto(
      img: $addPhotoImg
      desc: $addPhotoDesc
      contentType: $addPhotoContentType
    ) {
      _id
      mediaType
      img
      desc
      contentType
      author {
        _id
      }
    }
  }
`;

export function NewPhoto(props) {
  useAuth();
  const [addPhoto] = useMutation(ADD_PHOTO);
  const [img, updateImg] = useState("");
  const [desc, updateDesc] = useState("");
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
            addPhoto({
              variables: {
                addPhotoImg: img,
                addPhotoDesc: desc,
                addPhotoContentType: contentType,
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
          <label htmlFor="img-url"></label>
          <input
            className={styles.newphotoInput}
            type="url"
            name="img-url"
            id="img-url"
            placeholder="Enter an image url, for example: https://example.com"
            pattern="https://.*"
            size="30"
            value={img}
            onChange={(event) => {
              updateImg(event.currentTarget.value);
            }}
            required
          ></input>

          <label htmlFor="new-post"></label>
          <textarea
            className={styles.newphotoTextarea}
            value={desc}
            onChange={(event) => {
              updateDesc(event.currentTarget.value);
            }}
            id="new-post"
            name="new-post"
            required
            rows="5"
            cols="20"
            spellCheck="true"
            minLength="1"
            placeholder="Write your photo description here"
          ></textarea>

          <label htmlFor="contentTypeSelection" className={styles.contentType}>
            What part of the hobby does this relate to?
          </label>
          <input
            className={styles.newphotoInput}
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
