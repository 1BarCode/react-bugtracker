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
  paper: {
    // marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(2),
  },
  form: {
    width: "100%",
    display: "flex",
  },
  formControl: {
    marginTop: theme.spacing(2),
    minWidth: 120,
    padding: theme.spacing(1, 0, 1, 0),
  },
  submit: {
    margin: theme.spacing(3, 0, 1),
  },
  cancel: {
    margin: theme.spacing(1, 0, 2),
  },
  pageTitle: {
    margin: theme.spacing(0, 0, 3),
  },
}));
