import {doc, getDoc} from "@firebase/firestore";
import firestore from "@/lib/firebase/firestore";
import Schedule from "@/lib/types/Schedule";

export const getSchedule = async () => {
    const schedule = await getDoc(doc(firestore, 'schedule/data'));
    return schedule.data() as Schedule;
}
