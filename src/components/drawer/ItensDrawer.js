import React from "react";
import ListItem from "@material-ui/core/ListItem";
import SearchIcon from "@material-ui/icons/Search";
import TheatersIcon from "@material-ui/icons/Theaters";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";

const ItensDrawer = () => {
  return (
    <div>
      <ListItem button component="a" href="/register-media">
        <ListItemIcon>
          <TheatersIcon />
        </ListItemIcon>
        <ListItemText primary="Cadastrar" />
      </ListItem>
      <ListItem button component="a" href="/find">
        <ListItemIcon>
          <SearchIcon />
        </ListItemIcon>
        <ListItemText primary="Buscar" />
      </ListItem>
    </div>
  );
};

export default ItensDrawer;
