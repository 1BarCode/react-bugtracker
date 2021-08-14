import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  divRoot: {
    marginLeft: theme.spacing(30),
    flexGrow: 1,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  buttonRoot: {
    marginBottom: theme.spacing(2),
  },
  paper: {
    width: "100%",
  },
  tableContainer: {
    maxHeight: 440,
  },
}));
