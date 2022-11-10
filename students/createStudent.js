function studentBuilder(name,age){
    return{
        name,
        age,
        sleep: ()=>{
            console.log('No sleep. I am a student:(');
        }
    }
}

module.exports = {
    studentBuilder
};
