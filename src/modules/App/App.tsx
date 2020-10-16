import React, { useEffect, useState } from "react";
import theme from "theme";
import { createMuiTheme, MuiThemeProvider, responsiveFontSizes } from "@material-ui/core/styles";
import Wrapper from "./Components/Wrapper";
import { Button, Card, FormControlLabel, Switch, TextField, Typography } from "@material-ui/core";
import LeaderboardService from "services/leaderboardService";
import { ListOfUser } from "types";
import { generateRandomInteger } from "utils/helpers";
import TableCobalt from "./Components/TableCobalt";

const mainTheme = responsiveFontSizes(createMuiTheme(theme));

const App: React.FC = () => {
  const [listOfUser, setListOfUser] = useState<ListOfUser>();
  const [useAvg, setUseAvg] = useState<boolean>(false);
  const [counter, setCounter] = useState<number>(10);
  const [name, setName] = useState<string>("");
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
    updateDataTable();
  }, []);

  const handleGenerateAction = () => {
    setCounter(counter - 1);
    setScore(score + generateRandomInteger(-100, 100));
  };

  const handleSubmit = () => {
    if (name) {
      setCounter(10);
      setScore(0);
      setName("");
      LeaderboardService.pushNewEntryLeaderboard({ name, totalPoints: score, clicks: 10 - counter }).then((user) => {
        setListOfUser([...listOfUser, user]);
      });
    }
  };

  const updateDataTable = () =>
    LeaderboardService.getLeaderboard().then((response: ListOfUser) => setListOfUser(response));

  return (
    <MuiThemeProvider theme={mainTheme}>
      <Wrapper>
        <Card style={{ minWidth: "600px", padding: "16px" }}>
          <Typography variant="h3" align="center">
            Leaderboard
          </Typography>

          <FormControlLabel
            value="start"
            control={<Switch edge="end" color="primary" />}
            label="Do you want to sort by Avg?"
            labelPlacement="start"
            onClick={() => setUseAvg(!useAvg)}
          />

          {listOfUser && <TableCobalt listOfUser={listOfUser} useAvg={useAvg} />}

          <TextField
            fullWidth
            value={name}
            label="Name"
            onChange={(e) => setName(e.target.value)}
            variant="outlined"
            required
            autoFocus
            style={{ margin: "16px 0" }}
          />

          <Typography align="center" variant="h6">
            Your current score is: {score.toString()}
            <br />
            <Typography variant="caption">You have {counter.toString()} tries left.</Typography>
          </Typography>

          <Button
            disabled={!counter}
            variant="outlined"
            color="primary"
            size="large"
            fullWidth
            onClick={() => handleGenerateAction()}
            style={{ margin: "8px 0" }}
          >
            <Typography>Generate</Typography>
          </Button>

          <Button
            onClick={() => handleSubmit()}
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            fullWidth
          >
            Submit
          </Button>
        </Card>
      </Wrapper>
    </MuiThemeProvider>
  );
};

export default App;