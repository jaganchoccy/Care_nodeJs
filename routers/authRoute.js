const router = require('express').Router();
const authController = require('../controllers/homePage.controller');
const SignInController = require('../controllers/SignIn.controller');
const PatientController = require('../controllers/patient.controller')
const DoctorController = require('../controllers/doctor.controller');
const AlertContoller = require('../controllers/alert.controller');
const {token} = require('../middleware/middle'); 

//vital
router.post('/dbs/PatientVitals/colls/CaliberBBContainer',token,PatientController.getPatientById);
//patient ID
router.post('/dbs/PatientVitals/colls/PatientInfo',token,PatientController.getPatientInfo);
//get AllPatient
router.get('/getAllPatient',PatientController.getAllPatientDetail);
//get new Patient
router.post('/addNewPatient',PatientController.addNewPatient);
//get All doctor
router.get('/getAllDoctor',DoctorController.getAllDoctorDetail);
//alert
router.get('/dbs/PatientVitals/colls/Alerts',token,AlertContoller.alert);
//queue alert
router.get('/getQueueAlert',AlertContoller.getQueueAlert);
//delete queue alert
router.get('/deleteQueueAlert',AlertContoller.deleteAlert)
router.post('/signUp', authController.signUp);
router.post('/signIn', SignInController.signIn);
router.post('/facebookSignIn', SignInController.facebookSignIn);
router.post('/resetPassword',SignInController.resetPassword);


module.exports = router;