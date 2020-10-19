import React from "react";
import { ListOfUser } from "types";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import { divideWithCondition, sortUserWithCondition } from "utils/helpers";

const TableCobalt = ({ listOfUser, useAvg }: { listOfUser: ListOfUser; useAvg: boolean }) => {
  return (
    <TableContainer component={"div"} style={{margin: "16px 0"}}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Name</TableCell>
            <TableCell align="right">Clicks</TableCell>
            <TableCell align="right">Points</TableCell>
            <TableCell align="right">Avg</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listOfUser
            .sort((a, b) => sortUserWithCondition(a, b, useAvg))
            .slice(0, 10)
            .map(user => (
              <TableRow key={user.id}>
                <TableCell align="left">{user.name}</TableCell>
                <TableCell align="right">{user.clicks}</TableCell>
                <TableCell align="right">{user.totalPoints}</TableCell>
                <TableCell align="right">{divideWithCondition(user.totalPoints, user.clicks).toFixed(2)}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableCobalt;
