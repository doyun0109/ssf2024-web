import {collection, getDocs, orderBy, query} from "@firebase/firestore";
import firestore from "@/lib/firebase/firestore";
import Question from "@/lib/types/Question";

export const getQuestionList = async () => {
    const q = query(collection(firestore, 'question'), orderBy('index'));
    const docs = await getDocs(q);
    return docs.docs.map(doc => doc.data() as Question);
}
