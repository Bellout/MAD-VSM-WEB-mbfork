import { taskObject } from "../interfaces/taskObject";
import { vsmObject } from "../interfaces/VsmObject";
import { useStoreDispatch } from "../hooks/storeHooks";
import React from "react";
import styles from "./VSMCanvas.module.scss";
import { Button, Icon } from "@equinor/eds-core-react";
import { EditTaskTextField } from "./EditTaskTextField";
import { delete_to_trash } from "@equinor/eds-icons";

Icon.add({
  delete_to_trash,
});

export function EditTaskSection(props: {
  task: taskObject;
  object: vsmObject;
}): JSX.Element {
  const { task, object } = props;
  const dispatch = useStoreDispatch();

  return (
    <div className={styles.headerContainer}>
      {/*  Important to have a key so that it triggers a re-render when needed */}
      <EditTaskTextField key={task.vsmTaskID} task={task} />
      <div>
        {/*Must have the button inside a div for flex size to work correctly...*/}
        <Button
          title={`Delete selected QIP`}
          disabled={!task}
          variant={"ghost_icon"}
          color={"danger"}
          onClick={() => {
            dispatch.unlinkTask({ task: task, object: object });
          }}
        >
          <Icon name="delete_to_trash" size={16} />
        </Button>
      </div>
    </div>
  );
}