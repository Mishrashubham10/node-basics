const mongoose = require('mongoose');

const medicalRecordsSchema = new mongoose.Schema({});

const MedicalRecord = mongoose.model('MedicalRecord', medicalRecordsSchema);