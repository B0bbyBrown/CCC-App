import React from "react";
import { socialIcons } from "../../utils/icons";
import styles from "./SocialLink.module.css";

export const SocialLink = ({ url, platform }) => {
  const Icon = socialIcons[platform];
  return Icon ? (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.socialLink}
      aria-label={`${platform} profile`}
    >
      <Icon />
    </a>
  ) : null;
};
