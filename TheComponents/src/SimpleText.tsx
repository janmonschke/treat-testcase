import * as React from "react";
import { useStyles } from "react-treat";
import * as styleRefs from "./SimpleText.treat";

const SimpleText: React.FC = ({ children }) => {
  const styles = useStyles(styleRefs);

  return <span className={styles.text}>{children}</span>;
};

export default SimpleText;
