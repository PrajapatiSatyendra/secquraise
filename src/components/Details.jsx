import femalePhoto from "../assets/female25.jpg";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useLoaderData, useLocation } from "react-router-dom";
import moment from "moment/moment";
const Details = () => {
  const [eventData, setEventData] = useState();
    //const eventData = useSelector((state) => state.counter.eventData);

  const location = useLocation();
  useEffect(() => {
    setEventData(location.state);
  }, [location.state]);
 
   // console.log(eventData);
  return (
    <>
      <div className="bg-white flex  flex-col sm:gap-y-10 items-start justify-center pl-8 pt-4 gap-y-2">
        <div className="flex flex-nowrap sm:flex-col font-bold  sm:text-2xl gap-x-2">
          <h1>{eventData?.eventId}</h1>
          <h1>Person Detected</h1>
        </div>
        <div>
          <table className="h-5 text-sm sm:w-48 sm:text-lg font-[500]">
            <tbody>
              <tr>
                <td className="-4">Name</td>
                <td className="mx-4">
                  : <span>{eventData?.name}</span>
                </td>
              </tr>
              <tr className="mx-4">
                <td>Location</td>
                <td className="mx-4">
                  : <span>{eventData?.location}</span>
                </td>
              </tr>
              <tr>
                <td>Date</td>
                <td>
                  : <span>{eventData?.date}</span>
                </td>
              </tr>
              <tr>
                <td>Time</td>
                <td>
                  : <span>{eventData?.time}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="flex flex-wrap w-3/4 text-sm sm:text-lg font-[500]">
          Description: <br />
          {eventData?.name} detected at {eventData?.location} on {moment(eventData?.date).format("Do MMMM, YYYY")}{" "}
        </p>
      </div>
      <div className="bg-white flex flex-row  items-center justify-evenly my-2 sm:hidden ">
        <h2 className="text-black font-sans font-bold p-4 ">{eventData?.gender}</h2>
        <img
          src={eventData?.imageUrl}
          width={"120px"}
          height={""}
          alt=""
          className="aspect-square"
        />
      </div>
      <div className="hidden bg-white sm:flex flex-col  items-start pl-16 pt-10 gap-y-8 ">
        <h2 className="text-black text-2xl font-sans font-bold  ">{eventData?.gender}</h2>
        <img
          src={eventData?.imageUrl}
          alt=""
          className="object-cover w-[350px] h-[520px]"
        />
      </div>
    </>
  );
};

export default Details;
