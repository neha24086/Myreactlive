"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "@/app/styles/vartical.module.css";
import Link from "next/link";

function DateTimeComponent() {
   // Create Variabels and useState...........................
  const [dayName, setDayName] = useState("");
  const [monthName, setMonthName] = useState("");
  const [date, setDate] = useState("");
  const [year, setYear] = useState("");
  const [time, setTime] = useState("");

   // Fetch Api...................................................
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://worldtimeapi.org/api/timezone/Asia/Kolkata"
        );
        const data = response.data;

        // Extract date components
        const parsedDate = new Date(data.datetime);
        const options = { weekday: "long", month: "long" };
        const dayName = new Intl.DateTimeFormat("en-US", {
          weekday: "long",
        }).format(parsedDate);
        const monthName = parsedDate.toLocaleString("default", {
          month: "long",
        });
           // '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
        const date = parsedDate.getDate();
        const year = parsedDate.getFullYear();
        const time = parsedDate.toLocaleTimeString();

        setDayName(dayName);
        setMonthName(monthName);
        setDate(date);
        setYear(year);
        setTime(time);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
// .......................Return data..............................................
  return (
    <div className={styles.mainB}>
      <h1>This is Date Time page</h1>
      <h3 className={styles.non1}>
        REACT<br></br>
        <strong className={styles.AB1}>NINJA</strong>
      </h3>
      <br></br>
      <div className={styles.task1}>
        <div className={styles.box1}>
          <div className="text1">
            <h2>Time</h2>
            <h3>{time}</h3>
          </div>
        </div>
        <br></br>
        <br></br>
        <div className={styles.box2}>
          <h2>Date</h2>
          <h3>{dayName}</h3>
          <h3>
            {" "}
            {date} {monthName} {year}
          </h3>
        </div>
      </div>
  {/* Create Button................................ */}
      <div className={styles.btn}>
        <Link href="/Horizontal">
          <button>CLICK ME</button>
        </Link>
      </div>

      <hr></hr>
    </div>
  );
}
export default DateTimeComponent;

/* </div>
   <span className="btn"><button style={{backgroundColor:'greenyellow'}}>CLICK ME</button></span>

   </div>  */
