const express = require('express');
const UsersController = require('../Controller/UserController');
const CreatectcController = require('../Controller/CreatectcController');
const router = express.Router()


// UserController
router.post('/register',UsersController.Register)
router.post('/login',UsersController.VerifyLogin)
router.get('/logout',UsersController.Logout)


// ++++++++++++++CreateCTCController++++++++++++++++++

// personal_info
router.post('/Createctc/personal_info',CreatectcController.Personal_info_Insert)
router.get('/Createctc/personal_info_display',CreatectcController.Personal_info_display)
router.get('/Createctc/personal_info_view/:id',CreatectcController.Personal_info_view)
router.post('/Createctc/personal_info_update/:id',CreatectcController.Personal_info_update)
router.get('/Createctc/personal_info_delete/:id',CreatectcController.personal_info_Delete)

// Bankdetailinfo
router.post('/Createctc/bankdetail',CreatectcController.Bank_detail_Insert)
router.get('/Createctc/bankdetail_display',CreatectcController.bank_detail_display)
router.get('/Createctc/bankdetail_view/:id',CreatectcController.bank_detail_view)
router.post('/Createctc/bankdetail_update/:id',CreatectcController.bank_detail_update)
router.get('/Createctc/bankdetail_delete/:id',CreatectcController.bank_detail_Delete)

// Additional Info
router.post('/Createctc/additional_info',CreatectcController.additional_info_Insert)
router.get('/Createctc/additional_info_display',CreatectcController.additional_info_display)
router.get('/Createctc/additional_info_view/:id',CreatectcController.additional_info_view)
router.post('/Createctc/additional_info_update/:id',CreatectcController.additional_info_update)
router.get('/Createctc/additional_info_delete/:id',CreatectcController.additional_info_Delete)



module.exports = router;