import TuneIcon from "@mui/icons-material/Tune";
import { database } from '../Firebase.js';
import { ref, onValue } from "firebase/database";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../store/index-redux.js";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";



const Leftbar = () => {
  const [eventsData, setEventsData] = useState();
  const path = useLocation().pathname.split('/')[2];

  const dispatch = useDispatch();
  const genderCounts = (male,female) => {
    dispatch(counterActions.genderCounts({ male:male,female:female }));
      
  }
  const starCountRef = ref(database, "data/");
  useEffect(() => {
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setEventsData(data);
      const males = Object.keys(data).filter(d => data[d]["gender"] === "Male");
      const females = Object.keys(data).filter(
        (d) => data[d]["gender"] === "Female"
      );
      genderCounts(males.length, females.length);
    });
  }, []);

 
 
 

  return (
    <div className="sm:visible bg-white m-2 p-8  ">
      <div className="flex flex-row justify-between mb-4 text-lg font-bold sm:text-2xl  ">
        <h1>Events</h1>
        <TuneIcon fontSize="large"/>
      </div>
      <div className="overflow-auto max-h-56 sm:max-h-[540px]">
        {eventsData && Object.keys(eventsData).map((id) => {
          return (
            <NavLink
              key={id}
              to={`/event/${id}`}
              state={eventsData[id]}
              className={`grid grid-cols-2  bg-gray-300 hover:bg-gray-400 my-2 gap-y-2 p-2 rounded-sm ${path === id && "bg-gray-400"}`}
            
            >
             
              <h2 className="text-sm sm:text-lg">
                {eventsData[id]["eventId"]}: {eventsData[id]["location"]}
              </h2>
              <p className="justify-self-end text-sm sm:text-md">
                {eventsData[id]["date"]} {eventsData[id]["time"]}
              </p>
              <h3 className="text-sm sm:text-base">Person Detected</h3>
          
            </NavLink>
          );
          
      
        })}
        
      </div>
    </div>
  );
};

export default Leftbar;
