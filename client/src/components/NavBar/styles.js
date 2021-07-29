import { makeStyles } from "@material-ui/core";

const drawerWidth = 240;

export default makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  profileButtonRoot: {
    marginLeft: theme.spacing(90),
  },
  listItemRoot: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}));
