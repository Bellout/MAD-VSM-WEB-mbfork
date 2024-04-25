import styles from "./Node.module.scss";
import { Typography } from "@equinor/eds-core-react";
import { formatNodeText } from "./utils/formatNodeText";
import { getNodeTypeName } from "@/utils/getNodeTypeName";
import { NodeTypes } from "@/types/NodeTypes";

type NodeDescription = {
  header?: NodeTypes;
  description?: string;
};

export const NodeDescription = ({ header, description }: NodeDescription) => (
  <div className={styles["node__description-container"]}>
    {header && (
      <Typography variant="caption" className={styles.header}>
        {getNodeTypeName(header)}
      </Typography>
    )}
    {description && (
      <Typography variant="caption" className={`${styles.description}`}>
        {formatNodeText(description, 1000)}
      </Typography>
    )}
  </div>
);