import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import TimelineIcon from '@material-ui/icons/Timeline';
import HistoryIcon from '@material-ui/icons/History';
import AverageTimerIcon from '@material-ui/icons/AvTimer';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <AverageTimerIcon />
      </ListItemIcon>
      <ListItemText primary="Real-Time" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <TimelineIcon />
      </ListItemIcon>
      <ListItemText primary="Snapshot" />
    </ListItem>
    <ListItem selected button>
      <ListItemIcon>
        <HistoryIcon />
      </ListItemIcon>
      <ListItemText primary="Historical" />
    </ListItem>
  </div>
);