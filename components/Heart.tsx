import { Icon } from "@equinor/eds-core-react";
import React from "react";
import { favorite_filled, favorite_outlined } from "@equinor/eds-icons";
import styles from "./Heart.module.scss";

export default function Heart(props: {
  isFavourite: boolean;
  isLoading: boolean;
  fave: () => void;
  unfave: () => void;
}): JSX.Element {
  const handleClick = (e) => {
    e.stopPropagation();
    props.isFavourite ? props.unfave() : props.fave();
  };

  function extracted() {
    if (props.isLoading) {
      return (
        <button className={styles.heart} onClick={handleClick}>
          <Icon data={favorite_filled} />
        </button>
      );
    }
    if (props.isFavourite) {
      return (
        <button data-test={"buttonHeart"} className={styles.favedHeart} onClick={handleClick}>
          <Icon data={favorite_filled} />
        </button>
      );
    }
    return (
      <div>
        <button data-test={"buttonHeart"} className={styles.heart} onClick={handleClick}>
          <Icon data={favorite_filled} />
        </button>
      </div>
    );
  }
  if (props.isFavourite) {
    return (
      <div>
        <button data-test={"buttonHeart"} className={styles.favedHeart} onClick={handleClick}>
          <Icon data={favorite_filled} />
        </button>
      </div>
    );
  }
  return (
    <div>
      <button data-test={"buttonHeart"} className={styles.heart} onClick={handleClick}>
        <Icon data={favorite_outlined} />
      </button>
    </div>
  );
}
