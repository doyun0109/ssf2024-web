import {Timestamp} from "@firebase/firestore";

interface Schedule {
    applyStartDate: Timestamp;
    applyEndDate: Timestamp;
    campDate: Timestamp;
}

export default Schedule;


