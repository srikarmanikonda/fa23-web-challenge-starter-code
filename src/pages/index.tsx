import React, {useState, useEffect} from "react";
import MainHeader from "../components/main-header";
import styles from "../styles/index.module.scss";
import {IUser} from "../components/Iuser";
import Table from "../components/EventList";
import axios from "axios";
function Index() {
        const [data, setData] = useState<IUser[]>([]);
      
        const fetchData = async () => {
          const uri = 'https://api.hackillinois.org/event/';
          const response = await axios.get<IUser[]>(uri);
          setData(response.data);

        };
        //fetch the api here.
        useEffect(() => {
          fetchData();
        }, []);
        return (
            <>
                <MainHeader />
                <p className={styles.myParagraph}>  Welcome to the events page!</p>
                <Table data = {data}/> 
            </>
            
    
        );
    ;
}  
      

   

export default Index;
