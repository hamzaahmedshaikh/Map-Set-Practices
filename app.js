let gymExercises = [
    "Bench Press",
    "Squat",
    "Deadlift",
    "Bench Press",
    "Pullups",
    "Squat"
];

let uniqueExercises = new Set(gymExercises);

uniqueExercises.add("Shoulder Press");
uniqueExercises.delete("Deadlift");

console.log(uniqueExercises);
console.log("Has Pullups? →", uniqueExercises.has("Pullups"));


let socialStats = new Map();

socialStats.set("Twitter", 1200);
socialStats.set("Instagram", 900);
socialStats.set("GitHub", 150);

console.log("Twitter Followers →", socialStats.get("Twitter"));
console.log(socialStats);
