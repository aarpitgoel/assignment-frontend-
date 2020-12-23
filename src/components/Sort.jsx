import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export default function SimpleSelect({ length }) {
  const classes = useStyles();
  const [search, setSearch] = React.useState("");
  const [by, setBy] = React.useState("");
  const [time, setTime] = React.useState("");
  //const [length, setLength] = React.useState(props.length);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleBy = (event) => {
    setBy(event.target.value);
  };

  const handleTime = (event) => {
    setTime(event.target.value);
  };

  return (
    <>
      <div className="outer-container">
        <div className="sort">Sort</div>
        <div className="b1">
          <FormControl className={classes.formControl}>
            <Select
              value={search}
              onChange={handleSearch}
              displayEmpty
              className={classes.selectEmpty}
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">
                <em>All</em>
              </MenuItem>
              <MenuItem value="all">All</MenuItem>
              <MenuItem value="stories">Stories</MenuItem>
              <MenuItem value="comments">Comments</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="sort">By</div>
        <div className="b1">
          <FormControl className={classes.formControl}>
            <Select
              value={by}
              onChange={handleBy}
              displayEmpty
              className={classes.selectEmpty}
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">
                <em>Popularity</em>
              </MenuItem>
              <MenuItem value="Popularity">Popularity</MenuItem>
              <MenuItem value="Date">Date</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="sort">For</div>
        <div className="b1">
          <FormControl className={classes.formControl}>
            <Select
              value={time}
              onChange={handleTime}
              displayEmpty
              className={classes.selectEmpty}
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">
                <em>All Time</em>
              </MenuItem>
              <MenuItem value="all">All time</MenuItem>
              <MenuItem value="last24hour">last 24h</MenuItem>
              <MenuItem value="pastweek">Past Week</MenuItem>
              <MenuItem value="pastmonth">Past Month</MenuItem>
              <MenuItem value="pastyear">Past Year</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="result-count">Search results: {length}</div>
      </div>
    </>
  );
}
