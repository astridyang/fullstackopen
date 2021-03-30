const calculateBmi = (height: number, weight: number): string => {
    const bmi = weight / Math.pow(height / 100, 2);
    let ret = '';
    if (bmi < 18.5) {
        ret = 'Underweight';
    }
    if (bmi >= 18.5 && bmi <= 24.9) {
        ret = 'Normal (healthy weight)';
    }
    if (bmi >= 25 && bmi <= 29.9) {
        ret = 'Overweight';
    }
    if (bmi >= 30) {
        ret = 'Obesity';
    }
    return ret;
};
// const a: number = Number(process.argv[2])
// const b: number = Number(process.argv[3])
// console.log(calculateBmi(a, b))
export default calculateBmi;