import React, {useState, useEffect} from "react";
import MainHeader from "../components/main-header";
import styles from "../styles/index.module.scss";
import {IUser} from "../components/Iuser";
import axios from "axios";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { json } from "stream/consumers";
function Index() {

  const columns: GridColDef[] = [
    { field: 'id',  headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'description', headerName: 'Description', width: 800 },
    {
      field: 'startTime',
      headerName: 'Start Time',
      type: 'number',
      width: 90,
    },
    {
      field: 'endTime',
      headerName: 'End Time',
      type: 'number',
      width: 90,
    },
    {
    field: 'points',
    headerName: 'Points',
    type: 'number',
    width: 90,
  },
  { field: 'sponsor', headerName: '', width: 800 },

    { field: 'eventType', headerName: 'Event Type', width: 130 },
    { field: 'async', headerName: 'Is this event asynchronous?', width: 130 },

  ];
  
  const rows = [];
        const [data, setData] = useState([])

      

        //fetch the api here.
        useEffect(() => {
          var apiurl = "https://api.hackillinois.org/event/";
        axios
          .get(apiurl)
          .then((response) => response.data.events)
          .then((data) => {
            setData(data);
          });
      }, []);

    

        return (
            <>
                <MainHeader />
                <p className={styles.myParagraph}>  Welcome to the events page!</p> 
                <div style={{ height: 800, width: '100%' }}>
      <DataGrid
       getRowId={(row) => row.id}
        rows={data}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
          
            </>
            
    
        );
    ;
}

export default Index;
