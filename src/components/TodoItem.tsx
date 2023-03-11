import React from "react";
import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{
  text: string;
  onRemoveTodo: (e: any) => void;
  id: string;
}> = (props) => {
  return (
    <li className={classes.item} onClick={props.onRemoveTodo} id={props.id}>
      {props.text}
    </li>
  );
};

export default TodoItem;
