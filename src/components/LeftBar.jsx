
import { database } from '../Firebase.js';
import { ref, onValue } from "firebase/database";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../store/index-redux.js";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CancelIcon from "@mui/icons-material/Cancel";
import TuneIcon from "@mui/icons-material/Tune";
import moment from 'moment';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};



const Leftbar = () => {
  const [eventsData, setEventsData] = useState();
  const path = useLocation().pathname.split('/')[2];
   const [gender, setGender] = useState("");
   const [location, setLocation] = useState("");
   const [date, setDate] = useState("");


  const dispatch = useDispatch();
  const genderCounts = (male,female) => {
    dispatch(counterActions.genderCounts({ male:male,female:female }));
      
  }
  const starCountRef = ref(database, "data/");
  useEffect(() => {
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log("date",moment(Object.values(data)[0].date).format("YYYY-MM-DD"))
      setEventsData(data);
      const males = Object.keys(data).filter(d => data[d]["gender"] === "Male");
      const females = Object.keys(data).filter(
        (d) => data[d]["gender"] === "Female"
      );
      genderCounts(males.length, females.length);
    });
  }, []);

 
  let a = (e) => {
    e.preventDefault();
    console.log(gender);
    console.log(location);
    console.log(moment(date).format("D-MMM-YY"));
    moment(date).format("D-MMM-YY");
    handleClose();
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
 
 

  return (
    <div className="sm:visible bg-white m-2 p-7  ">
      <div className="flex flex-row justify-between mb-4 text-lg font-bold sm:text-2xl  ">
        <h1>Events</h1>
        <div>
          <Button onClick={handleOpen}>
            {" "}
            <TuneIcon />
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Filters
                </Typography>
                <div onClick={handleClose}>
                  <CancelIcon />
                </div>
              </div>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <div>
                  <div style={{ display: "flex" }}>
                    <div style={{ marginTop: "20px" }}>
                      <form onSubmit={a}>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            marginBottom: "20px",
                          }}
                        >
                          <label
                            htmlFor="Location"
                            style={{ marginBottom: "10px" }}
                          >
                            Location
                          </label>

                          <div style={{ marginLeft: "10px" }}>
                            <input
                              type="radio"
                              id="male"
                              name="location"
                              value="Chennai"
                              onChange={(e) => {
                                setLocation(e.target.value);
                              }}
                            />
                            <label for="male">Chennai</label>
                          </div>

                          <div style={{ marginLeft: "10px" }}>
                            <input
                              type="radio"
                              id="female"
                              name="location"
                              value="Hyderabad"
                              onChange={(e) => {
                                setLocation(e.target.value);
                              }}
                            />
                            <label for="female">Hyderabad</label>
                          </div>

                          <div style={{ marginLeft: "10px" }}>
                            <input
                              type="radio"
                              id="female"
                              name="location"
                              value="Bangalore"
                              onChange={(e) => {
                                setLocation(e.target.value);
                              }}
                            />
                            <label for="female">Bangalore</label>
                          </div>
                        </div>
                        <div
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          <label
                            htmlFor="Location"
                            style={{ marginBottom: "10px" }}
                          >
                            Gender
                          </label>

                          <div style={{ marginLeft: "10px" }}>
                            <input
                              type="radio"
                              id="male"
                              name="gender"
                              value="Male"
                              onChange={(e) => {
                                setGender(e.target.value);
                              }}
                            />
                            <label for="male">Male</label>
                          </div>
                          <div
                            style={{ marginLeft: "10px", marginBottom: "20px" }}
                          >
                            <input
                              type="radio"
                              id="Female"
                              name="gender"
                              value="Female"
                              onChange={(e) => {
                                setGender(e.target.value);
                              }}
                            />
                            <label for="female">Female</label>
                          </div>
                        </div>

                        <div
                          style={{
                            marginLeft: "10px",
                            marginBottom: "20px",
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <label htmlFor="" style={{ marginBottom: "10px" }}>
                            Date
                          </label>

                          <input
                            type="date"
                            name="date"
                            value={date}
                            onChange={(e) => {
                              setDate(e.target.value);
                            }}
                          />
                        </div>
                        <button>submit</button>
                      </form>
                    </div>
                  </div>
                </div>
              </Typography>
            </Box>
          </Modal>
        </div>
        {/* <TuneIcon fontSize="large"/> */}
      </div>
      <div className="overflow-auto max-h-56 sm:max-h-[540px]">
        {eventsData &&
          Object.values(eventsData).filter((value) => {



                      return location === ""
                        ? value
                        : value.location === location && gender === ""
                        ? value
                        : value.gender === gender && date === ""
                        ? value
                        : moment(value.date).format() === moment(date).format()
      

                    }).map((event) => {
            return (
              <NavLink
                key={event.eventId}
                to={`/event/${event.eventId}`}
                state={event}
                className={`grid grid-cols-2  bg-gray-300 hover:bg-gray-400 my-2 gap-y-2 p-2 rounded-sm ${
                  path === event.eventId && "bg-gray-400"
                }`}
              >
                <h2 className="text-sm sm:text-lg">
                  {event.eventId}: {event.location}
                </h2>
                <p className="justify-self-end text-sm sm:text-md">
                  {event.date} {event.time}
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
