const router = require('express').Router();
const authController = require('../controllers/homePage.controller');
const SignInController = require('../controllers/SignIn.controller');
const PatientController = require('../controllers/patient.controller')

const {token} = require('../middleware/middle'); 

router.post('/dbs/PatientVitals/colls/CaliberBBContainer',token,PatientController.getPatient)
router.post('/signUp', authController.signUp);
router.post('/signIn', SignInController.signIn);
router.post('/facebookSignIn', SignInController.facebookSignIn);
router.post('/resetPassword',SignInController.resetPassword);


module.exports = router;