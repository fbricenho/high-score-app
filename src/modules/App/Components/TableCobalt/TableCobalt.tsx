import React from "react";
import { ListOfUser } from "types";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";

const TableCobalt = ({ listOfUser, useAvg }: { listOfUser: ListOfUser; useAvg: boolean }) => {
  return (
    <TableContainer component={"div"}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Clicks</TableCell>
            <TableCell align="right">Points</TableCell>
            <TableCell align="right">Avg</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listOfUser
            .sort((a, b) =>
              useAvg ? b.totalPoints / b.clicks - a.totalPoints / a.clicks : b.totalPoints - a.totalPoints
            )
            .slice(0, 10)
            .map((user, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {user.name}
                </TableCell>
                <TableCell align="right">{user.clicks}</TableCell>
                <TableCell align="right">{user.totalPoints}</TableCell>
                <TableCell align="right">{(user.totalPoints / user.clicks).toFixed(2)}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableCobalt;
