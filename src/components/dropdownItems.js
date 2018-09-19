import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Checkbox, ListItemText } from '@material-ui/core';

const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    formControl: {
      margin: theme.spacing.unit,
      minWidth: 150,
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: theme.spacing.unit / 4,
    },
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 200,
    },
  },
};

const sensors_list = [
    'CH01 SE01',
    'CH01 SE14',
    'CH03 SE01',
];

class DropdownItems extends React.Component {
    state = {
      sensor_type: '',
      sensors: [],
      data_granularity: '',
      time_range: ''
    };
  
    handleChange = event => {
      this.setState({ [event.target.name]: event.target.value });
    };

    handleMultipleChange = event => {
        this.setState({
            sensors: event.target.value
        }, () => {
            window.dispatchEvent(new CustomEvent('handleSensorChange', {
                detail: this.state.sensors
            }));
        });
    }
  
    render() {
      const { classes, theme } = this.props;
  
      return (
        <form className={classes.root} autoComplete="off">
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="sensor_type">Sensor Type</InputLabel>
                <Select
                value={this.state.sensor_type}
                onChange={this.handleChange}
                inputProps={{
                    name: 'sensor_type',
                    id: 'sensor_type',
                }}
                >
                    <MenuItem value="Humidity">Humidity</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="sensors">Sensors</InputLabel>
                <Select
                    multiple
                    value={this.state.sensors}
                    onChange={this.handleMultipleChange}
                    input={<Input id="sensors"/>}
                    // renderValue={selected => (
                    //     <div className={classes.chips}>
                    //         {selected.map(value => (
                    //             <Chip key={value} label={value} className={classes.chip}/>
                    //         ))}
                    //     </div>
                    // )}
                    renderValue={selected => selected.join(', ')}
                    MenuProps={MenuProps}
                >
                    {sensors_list.map(sensors => (
                        // <MenuItem
                        //     key={sensors}
                        //     value={sensors}
                        //     style={{fontWeight: this.state.sensors.indexOf(sensors) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium}}
                        // >
                        //     {sensors}
                        // </MenuItem>
                        <MenuItem
                            key={sensors}
                            value={sensors}
                        >
                            <Checkbox checked={this.state.sensors.indexOf(sensors) > -1}/>
                            <ListItemText primary={sensors}/>
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="data_granularity">Data Granularity</InputLabel>
                <Select
                    value={this.state.data_granularity}
                    onChange={this.handleChange}
                    input={<Input name="data_granularity" id="data_granularity" />}
                >
                    <MenuItem value="5 Min">5 Min</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="time_range">Time Range</InputLabel>
                <Select
                    value={this.state.time_range}
                    onChange={this.handleChange}
                    input={<Input name="time_range" id="time_range" />}
                >
                    <MenuItem value="Past 1 Day">Past 1 Day</MenuItem>
                </Select>
            </FormControl>
        </form>
      )
    }
}

DropdownItems.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles, {withTheme: true})(DropdownItems);

