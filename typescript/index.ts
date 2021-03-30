import express from 'express';
import calculateBmi from './bmiCalculator';
import calculateExercises from './exerciseCalculator'
const app = express();
app.use(express.json())
app.get('/hello', (_req, res) => {
    res.send('full stack open');
});
app.get('/bmi', (req, res) => {
    let weight = 0;
    let height = 0;
    if (!isNaN(Number(req.query.weight)) && !isNaN(Number(req.query.height))) {
        weight = Number(req.query.weight);
        height = Number(req.query.height);
        const bmi = calculateBmi(height, weight);
        res.json({
            weight,
            height,
            bmi
        });
    } else {
        res.status(401).json({
            error: "malformatted parameters"
        });
    }

});
app.post('/exercises', (req, res) => {
    if(!req.body.daily_exercises || !req.body.target){
        res.status(400).json({
            error: "parameters missing"
        });
    }else{
        let daily_exercises:Array<number> = req.body.daily_exercises;
        let target:number = req.body.target;
        if (daily_exercises.every(e => !isNaN(Number(e))) && !isNaN(Number(target))){
            const ret = calculateExercises(daily_exercises, target);
            res.json(ret);
        }else{
            res.status(401).json({
                error: "malformatted parameters"
            });
        }
    }
})
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}.`);
});