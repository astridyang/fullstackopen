interface Result {
    periodLength: number;
    trainingDays: number;
    success: boolean;
    rating: number;
    ratingDescription: string;
    target: number;
    average: number;
}
const calculateExercises = (exerciseHours: Array<number>, target: number): Result => {
    const periodLength = exerciseHours.length;
    const trainingDays = exerciseHours.filter(h => h > 0).length;
    const total = exerciseHours.reduce((acc, cur) => acc + cur);
    const average = total / periodLength;
    const success = average >= target;
    const percent = average / target;
    let rating = 0;
    let ratingDescription = '';
    if (percent < 0.6) {
        rating = 1;
        ratingDescription = 'too bad';
    }
    if (percent < 0.8 && percent >= 0.6) {
        rating = 2;
        ratingDescription = 'not too bad but could be better';
    }
    if (percent >= 0.8) {
        rating = 3;
        ratingDescription = 'perfect';
    }
    return {
        periodLength,
        trainingDays,
        success,
        rating,
        ratingDescription,
        target,
        average
    };
};
// interface Args {
//     value1: Array<number>;
//     value2: number;
// }
// const parseArguments = (args: Array<string>): Args => {
//     if (args.length < 3) throw new Error('Not enough arguments');
//     let value1 = [];
//     let value2 = 2;
//     for (let i = 2; i < args.length; i++) {
//         if (isNaN(Number(args[i]))) {
//             throw new Error('Provided values were not numbers!');
//         }
//         value1[i - 2] = Number(args[i]);
//     }
//     value2 = value1[0];
//     value1 = value1.slice(1);
//     return {
//         value1,
//         value2
//     };
// };
// try {
//     const { value1, value2 } = parseArguments(process.argv);
//     console.log(calculateExercises(value1, value2));
// } catch (e) {
//     // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
//     console.log('Error, something bad happened, message: ', e.message);
// }
export default calculateExercises