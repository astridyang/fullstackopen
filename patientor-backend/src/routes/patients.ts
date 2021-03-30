import express from "express";
import patientsService from "../services/patientsService";
import toNewPatientEntry from "../utils";
const router = express.Router();

router.get("/", (_req, res) => {
  res.send(patientsService.getNonSensitiveEntries());
});
router.get("/:id", (req, res) => {
  const patient = patientsService
    .getEntries()
    .find((p) => p.id === req.params.id);
  if (patient) {
    res.send(patient);
  } else {
    res.status(400).json({ error: "requested patient record doesn't exist" });
  }
});

router.post("/", (req, res) => {
  try {
    const newPatient = toNewPatientEntry(req.body);
    const addPatient = patientsService.addEntry(newPatient);
    res.json(addPatient);
  } catch (e) {
    res.status(400).send(e.message);
  }
});
router.post("/:id/entries", (req, res) => {
  try {
      const p_id = req.params.id;
    const newEntry = { ...req.body };
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
    const updatePatient = patientsService.addPatientEntry(p_id, newEntry);
    res.json(updatePatient);
  } catch (e) {
    res.status(400).send(e.message);
  }
});
export default router;
