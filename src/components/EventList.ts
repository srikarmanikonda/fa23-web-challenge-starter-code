import React, { useMemo } from "react";
import {X} from "./X"
type Props =  {
    data:X;
}
const columns = [
  {
    Header: "Id",
    accessor: "id",
  },
  {
    Header: "Event Name",
    accessor: "name",
  },
  {
    Header: "Event description",
    accessor: "description",
  },

]; //if its static use this one, if its variable-> UseMemo

