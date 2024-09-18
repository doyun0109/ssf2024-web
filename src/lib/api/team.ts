import {doc, getDoc} from "@firebase/firestore";
import firestore from "@/lib/firebase/firestore";

export const getTeamMember = async () => {
    const {
        developer,
        designer,
    } = await getDoc(doc(
        firestore,
        'members/team',
    )).then(res => {
        const data = res.data()!;

        const developer = data.developer as string[];
        const designer = data.designer as string[];

        return {
            developer,
            designer,
        }
    });

    return {
        developer,
        designer,
    };
}
