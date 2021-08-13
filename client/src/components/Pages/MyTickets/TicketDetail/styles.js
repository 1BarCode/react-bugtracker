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
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(2),
  },
  cardRoot: {
    minWidth: 275,
  },
  formControl: {
    marginTop: theme.spacing(2),
    minWidth: 120,
    padding: theme.spacing(1, 0, 1, 0),
  },
  edit: {
    margin: theme.spacing(2, 1, 1),
  },
  back: {
    margin: theme.spacing(2, 1, 1),
  },
  pageTitle: {
    margin: theme.spacing(0, 0, 3),
  },
  typo: {},
}));
