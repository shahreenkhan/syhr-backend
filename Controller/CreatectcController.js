const bankdetailModel = require('../models/Bankdetail')
const personal_infoModel = require('../models/Personal_info')
const additionalinfoModel = require('../models/additionalinfo')

class CreatectcController{

    // -------------PersonalInformation-----------------
    static Personal_info_Insert = async(req,res)=>{

        const {first_name,middle_name , last_name,city,pincode,permanent_address,dob,pan_number,
            aadhar_number,blood_group,current_address,emergency_number, email,mobile_number, gender ,
            insaurance_card_number,state,health_id_number,medical_detail, } = req.body
        // console.log(req.body);

        // console.log(req.body.title);
        try{
            const result = new personal_infoModel({
                first_name:first_name,
                middle_name:middle_name,         //name k andar title define kia hai ye wo hai...
                last_name:last_name,
                pincode:pincode,
                city:city,
                permanent_address:permanent_address,
                dob:dob,
                pan_number:pan_number,
                aadhar_number:aadhar_number,
                blood_group:blood_group,
                current_address:current_address,
                emergency_number:emergency_number,
                mobile_number:mobile_number,
                email:email,
                gender:gender,
                insaurance_card_number:insaurance_card_number,
                state:state,
                health_id_number:health_id_number,
                medical_detail:medical_detail
             })
            await result.save()  //await for no waiting.
            res.send({status: "success" , message: "Data Inserted successfully ! "})
            // res.redirect('/display')     //redirect-> route ke url ka path dete hai
        }catch(err){
            console.log(err);
        }
    }

    static Personal_info_display = async(req,res)=>{
        const data = await personal_infoModel.find()
        // console.log(data);
        try {

            res.status(200).json({
                success: true,
                data
            })

        } catch (err) {
            console.log(err)
        }
    } 

    static Personal_info_view = async (req, res) => {
        try {
            const Viewdata = await personal_infoModel.findById(req.params.id)
            res.status(200).json({
                success: true,
                Viewdata
            })
        } catch (err) {
            console.log(err);
        }
    }

    static Personal_info_edit = async(req,res)=>{
        // console.log(req.params.id)
        const data = await personal_infoModel.findById(req.params.id)
        //console.log(data)
        res.render('front/courseedit',{editdata:data})
    }

    static Personal_info_update = async(req,res)=>{
        // console.log(req.body)
        // console.log(req.params.id)
        try{
                const data = await personal_infoModel.findByIdAndUpdate(req.params.id,{
                    first_name:req.body.first_name,
                    middle_name:req.body.middle_name,         //name k andar title define kia hai ye wo hai...
                    last_name:req.body.last_name,
                    pincode:req.body.pincode,
                    city:req.body.city,
                    permanent_address:req.body.permanent_address,
                    dob:req.body.dob,
                    pan_number:req.body.pan_number,
                    aadhar_number:req.body.aadhar_number,
                    blood_group:req.body.blood_group,
                    current_address:req.body.current_address,
                    emergency_number:req.body.emergency_number,
                    mobile_number:req.body.mobile_number,
                    email:req.body.email,
                    gender:req.body.gender,
                    insaurance_card_number:req.body.insaurance_card_number,
                    state:req.body.state,
                    health_id_number:req.body.health_id_number,
                    medical_detail:req.body.medical_detail
            })
            await data.save()
            res.send({status: "success" , message: "Data Updated successfully ! "})
            // res.redirect('/display')
        }catch(err){
            console.log(err)
        }
        
    }

    static personal_info_Delete = async(req,res)=>{
        // console.log(req.params.id)
        try{
            const data = await personal_infoModel.findById(req.params.id)
            const result = await personal_infoModel.findByIdAndDelete(req.params.id)
            res.send({status: "success" , message: "Data Deleted successfully ! "})
            // res.redirect('/display')
        }catch(err){
            console.log(err)
        }
    }

    //----------------- BankDetailInformatio--------------------

    static Bank_detail_Insert = async(req,res)=>{

        const { bank, ifsc_code, branch_name, account_number,  cif_number, name_asperbank} = req.body
        // console.log(req.body);

        // console.log(req.body.title);
        try{
            const result = new bankdetailModel({
                bank:bank,
                ifsc_code:ifsc_code,         //name k andar title define kia hai ye wo hai...
                branch_name:branch_name,
                account_number:account_number,
                cif_number:cif_number,
                name_asperbank:name_asperbank
             })
            await result.save()  //await for no waiting.
            res.send({status: "success" , message: "Bank Detail Inserted successfully ! "})
            // res.redirect('/display')     //redirect-> route ke url ka path dete hai
        }catch(err){
            console.log(err);
        }
    }

    static bank_detail_display = async(req,res)=>{
        const data = await bankdetailModel.find()
        // console.log(data);
        try {

            res.status(200).json({
                success: true,
                data
            })

        } catch (err) {
            console.log(err)
        }
    } 

    static bank_detail_view = async (req, res) => {
        try {
            const Viewdata = await bankdetailModel.findById(req.params.id)
            res.status(200).json({
                success: true,
                Viewdata
            })
        } catch (err) {
            console.log(err);
        }
    }

    static bank_detail_edit = async(req,res)=>{
        // console.log(req.params.id)
        const data = await bankdetailModel.findById(req.params.id)
        //console.log(data)
        res.render('front/courseedit',{editdata:data})
    }

    static bank_detail_update = async(req,res)=>{
        // console.log(req.body)
        // console.log(req.params.id)
        try{
                const data = await bankdetailModel.findByIdAndUpdate(req.params.id,{
                bank:req.body.bank,
                ifsc_code:req.body.ifsc_code,         //name k andar title define kia hai ye wo hai...
                branch_name:req.body.branch_name,
                account_number:req.body.account_number,
                cif_number:req.body.cif_number,
                name_asperbank:req.body.name_asperbank
            })
            await data.save()
            res.send({status: "success" , message: "Bank Detail Updated successfully ! "})
            // res.redirect('/display')
        }catch(err){
            console.log(err)
        }
        
    }

    static bank_detail_Delete = async(req,res)=>{
        // console.log(req.params.id)
        try{
            const data = await bankdetailModel.findById(req.params.id)
            const result = await bankdetailModel.findByIdAndDelete(req.params.id)
            res.send({status: "success" , message: "bank Detail Deleted successfully ! "})
            // res.redirect('/display')
        }catch(err){
            console.log(err)
        }
    }

     //----------------- Additional-Info--------------------
    
     static additional_info_Insert = async(req,res)=>{

        const { nationality, Religion, identity_mark, pob,  mother_tongue, hobby,passport_number,
           passport_validity_date,visa_validity_date,driving_license_number,misc,uan_number,ref1_name,
           ref2_name,ref1_number,ref2_number,reason_leaving,knowledge_know, visa_country } = req.body
        // console.log(req.body);

        // console.log(req.body.title);

        try{
            const result = new additionalinfoModel({
                nationality:nationality,
                Religion:Religion,         //name k andar title define kia hai ye wo hai...
                identity_mark:identity_mark,
                pob:pob,
                mother_tongue:mother_tongue,
                hobby:hobby,
                passport_number:passport_number,         //name k andar title define kia hai ye wo hai...
                passport_validity_date:passport_validity_date,
                visa_validity_date:visa_validity_date,
                driving_license_number:misc,driving_license_number,misc,
                misc:misc,
                uan_number:uan_number,
                ref1_name:ref1_name,
                ref2_name:ref2_name,
                ref1_number:ref1_number,
                ref2_number:ref2_number,
                reason_leaving:reason_leaving,
                knowledge_know:knowledge_know,
                visa_country:visa_country

             })
             await result.save()  //await for no waiting.
             res.send({status: "success" , message: "Additional Information Inserted successfully ! "})
             // res.redirect('/display')     //redirect-> route ke url ka path dete hai
         }catch(err){
             console.log(err);
         }
     }

    static additional_info_display = async(req,res)=>{
        const data = await additionalinfoModel.find()
        // console.log(data);
        try {

            res.status(200).json({
                success: true,
                data
            })

        } catch (err) {
            console.log(err)
        }
    } 

    static additional_info_view = async (req, res) => {
        try {
            const Viewdata = await additionalinfoModel.findById(req.params.id)
            res.status(200).json({
                success: true,
                Viewdata
            })
        } catch (err) {
            console.log(err);
        }
    }

    static additional_info_edit = async(req,res)=>{
        // console.log(req.params.id)
        const data = await additionalinfoModel.findById(req.params.id)
        //console.log(data)
        res.render('front/courseedit',{editdata:data})
    }

    static additional_info_update = async(req,res)=>{
        // console.log(req.body)
        // console.log(req.params.id)
        try{
                const data = await additionalinfoModel.findByIdAndUpdate(req.params.id,{
                    nationality:req.body.nationality,
                    Religion:req.body.Religion,         //name k andar title define kia hai ye wo hai...
                    identity_mark:req.body.identity_mark,
                    pob:req.body.pob,
                    cif_number:req.body.cif_number,
                    mother_tongue:req.body.mother_tongue,
                    hobby:req.body.hobby,
                    passport_number:req.body.passport_number,         //name k andar title define kia hai ye wo hai...
                    passport_validity_date:req.body.passport_validity_date,
                    visa_validity_date:req.body.visa_validity_date,
                    driving_license_number:req.body.driving_license_number,
                    misc:req.body.misc,
                    uan_number:req.body.uan_number,
                    ref1_name:req.body.ref1_name,
                    ref2_name:req.body.ref2_name,
                    ref1_number:req.body.ref1_number,
                    ref2_number:req.body.ref2_number,
                    reason_leaving:req.body.reason_leaving,
                    knowledge_know:req.body.knowledge_know,
                    visa_country:req.body.visa_country
            })
            await data.save()
            res.send({status: "success" , message: "Additional Information Updated successfully ! "})
            // res.redirect('/display')
        }catch(err){
            console.log(err)
        }
        
    }

    static additional_info_Delete = async(req,res)=>{
        // console.log(req.params.id)
        try{
            const data = await additionalinfoModel.findById(req.params.id)
            const result = await additionalinfoModel.findByIdAndDelete(req.params.id)
            res.send({status: "success" , message: "additional Information's Data Deleted successfully ! "})
            // res.redirect('/display')
        }catch(err){
            console.log(err)
        }
    }
}
module.exports = CreatectcController