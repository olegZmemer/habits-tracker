import {
    auth,
    db
} from '../firebase'


export function createUser(uid) {
     db.collection('users').doc(uid).set({
        "userInfo": {
            "id": `${uid}`,
            "name": `${auth.currentUser.displayName}`,
            "mail": `${auth.currentUser.email}`,
            "habits": []
        }
    })
}

export function addHabit(habit) {
     db.collection('users').doc(auth.currentUser.uid).get().then(doc => {
        const data = doc.data();
        data.userInfo.habits.push(habit);
        db.collection('users').doc(auth.currentUser.uid).set({
            ...data
        })
    })
}
export function getHabits() {
     return db.collection('users').doc(auth.currentUser.uid).get()
    .then(doc => {
        return doc.data().userInfo.habits;
    })
    .catch(err=>{
         return err
    });
    
}
export function updateHabits(newHabits){
     db.collection('users').doc(auth.currentUser.uid).get().then(doc => {
        let data = doc.data();
        data.userInfo.habits = newHabits;
        db.collection('users').doc(auth.currentUser.uid).set({
            ...data
        })
    })
}