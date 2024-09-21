import firestore from "@/lib/firebase/firestore";
import {collection, doc, getDoc, getDocs, orderBy, query, where} from "@firebase/firestore";
import Camp from "@/lib/types/Camp";
import Department from "@/lib/types/Department";

export const getCampList = async (
    {
        department
    }: {
        department?: Department | null
    } = {}
) => {
    try {
        const q = department ?
            query(collection(firestore, 'clubs'), where('department', '==', department), orderBy('index'))
            :
            query(collection(firestore, 'clubs'), orderBy('index'))
        const docs = await getDocs(q);

        return docs.docs.map(doc => ({clubId: doc.id, ...doc.data()} as Camp));
    } catch (e) {
        console.error(e);
        return [];
    }
}

export const getCampByClubId = async (clubId: string) => {
    const camp = await getDoc(
        doc(firestore, 'clubs', clubId)
    );

    if (!camp.exists()) {
        return null;
    }

    return {clubId: camp.id, ...camp.data()} as Camp;
}
