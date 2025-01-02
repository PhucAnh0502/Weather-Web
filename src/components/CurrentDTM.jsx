import { useEffect, useState } from "react";

function getCurrentDTM(){
    const [currentdtm, setcurrentdtm] = useState(new Date());
    useEffect(() => {
        const intervalID = setInterval(() => {
            setcurrentdtm(new Date());
        }, 1000)
        return () => clearInterval(intervalID);
    },[]);
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const hours = String(currentdtm.getHours()).padStart(2,"0");
    const minutes = String(currentdtm.getMinutes()).padStart(2,"0");
    const dayOfWeek = daysOfWeek[currentdtm.getDay()];
    const month = months[currentdtm.getMonth()];
    const day = currentdtm.getDate();
    const year = currentdtm.getFullYear();

    const formatDateTime = `${hours}:${minutes}, ${dayOfWeek}, ${month} ${day}, ${year}`;

    return (
        <>
            <div className="currentDTM">
                <p>{formatDateTime}</p>
            </div>
        </>
    )
}

export default getCurrentDTM;