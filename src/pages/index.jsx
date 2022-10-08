import EventList from "../components/EventList";
import React, {useState, useEffect} from "react";
import MainHeader from "../components/main-header";
import styles from "../styles/index.module.scss";
import {X} from "../components/X";
const Index = () => {
        const [data, setData] = useState({
          id:"",
          name:"",
          description:""



        });
      
        const fetchData = async () => {
          const uri = 'https://api.hackillinois.org/event/';
          const response =  await fetch(uri); 
          console.log(response);
          console.loga(response.data);
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
                <EventList data = {"hi"}/> 
            </>
            
    
        );
    ;
}  
      

   

export default Index;
