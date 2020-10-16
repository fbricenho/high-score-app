import React from "react";
import useStyles from "./useStyles";

const Wrapper = (props: { children: React.ReactChild }) => {
  const classes = useStyles();

  return <div className={classes.wrapper}>{props.children}</div>;
};

export default Wrapper;
