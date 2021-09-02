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
    width: "100%",
  },
  large: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    marginLeft: theme.spacing(3),
  },
  divider1: {
    marginLeft: theme.spacing(5),
    marginRight: theme.spacing(5),
  },
  divider2: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  nameEmail: {
    // margin: "auto",
    // marginLeft: theme.spacing(10),
    marginTop: "auto",
    marginBottom: "auto",
  },
  card2: {
    marginTop: theme.spacing(2),
  },
  label: {
    marginLeft: theme.spacing(3),
    paddingRight: theme.spacing(2),
    fontSize: 16,
  },
  paperForm: {
    // marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(2),
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  save: {
    margin: "auto",
  },
}));
