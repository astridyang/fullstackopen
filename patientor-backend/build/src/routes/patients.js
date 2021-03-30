"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const patientsService_1 = __importDefault(require("../services/patientsService"));
const utils_1 = __importDefault(require("../utils"));
const router = express_1.default.Router();
router.get("/", (_req, res) => {
    res.send(patientsService_1.default.getNonSensitiveEntries());
});
router.get("/:id", (req, res) => {
    const patient = patientsService_1.default
        .getEntries()
        .find((p) => p.id === req.params.id);
    if (patient) {
        res.send(patient);
    }
    else {
        res.status(400).json({ error: "requested patient record doesn't exist" });
    }
});
router.post("/", (req, res) => {
    try {
        const newPatient = utils_1.default(req.body);
        const addPatient = patientsService_1.default.addEntry(newPatient);
        res.json(addPatient);
    }
    catch (e) {
        res.status(400).send(e.message);
    }
});
router.post("/:id/entries", (req, res) => {
    try {
        const p_id = req.params.id;
        const newEntry = Object.assign({}, req.body);
        switch (newEntry.type) {
            case "HealthCheck":
                if (newEntry.healthCheckRating === undefined) {
                    res.status(400).send("HealthCheck must has a healthCheckRating");
                }
                break;
            case "Hospital":
                if (!newEntry.discharge) {
                    res.status(400).send("HealthCheck must has a discharge");
                }
                break;
            case "OccupationalHealthcare":
                if (!newEntry.employerName) {
                    res.status(400).send("HealthCheck must has a employerName");
                }
                break;
            default:
                break;
        }
        const updatePatient = patientsService_1.default.addPatientEntry(p_id, newEntry);
        res.json(updatePatient);
    }
    catch (e) {
        res.status(400).send(e.message);
    }
});
exports.default = router;
