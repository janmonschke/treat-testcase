import * as React from "react";
import { useStyles } from "react-treat";
import * as styleRefs from "./TextComponent.treat";

export const TextComponent: React.FC = ({ children }) => {
  const styles = useStyles(styleRefs);

  return <span className={styles.text}>{children}</span>;
};
