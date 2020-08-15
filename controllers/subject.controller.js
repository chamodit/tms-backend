const Subject = require('../models/subject.model');

const addSubject = (req, res) => {

    if(!req.body.name) {
        return res.status(400).json({
            success: false,
            message: "Subject name is undefined"
        });
    }

    if(!req.body.code) {
        return res.status(400).json({
            success: false,
            message: "Subject code is undefined"
        });
    }

    //Adding subject
    const subject = new Subject(req.body);

    subject.save().then(result => {
        res.status(200).json({
            success: true,
            data: result
        });
    }).catch(err => {
        res.status(500).json({
            success: false,
            message: err.message
        });
    });
};

const viewSubjects = (req, res) => {
    Subject.find({}).then(result => {
        res.status(200).json({
            success: true,
            data: result
        });
    }).catch(err => {
        res.status(501).json({
            success: false,
            data: err.message
        });
    });
};

const viewSubjectById = (req, res) => {
    Subject.findById(req.params.id).then(result => {
        res.status(200).json({
            success: true,
            data: result
        });
    }).catch(err => {
        res.status(501).json({
            success: false,
            data: err.message
        });
    });
};

const updateSubjectById = (req, res) => {

    if(!req.body.name) {
        return res.status(400).json({
            success: false,
            message: "Subject name is undefined"
        });
    }

    if(!req.body.code) {
        return res.status(400).json({
            success: false,
            message: "Subject code is undefined"
        });
    }

    Subject.findByIdAndUpdate(req.params.id, {
       year: req.body.year,
       semester: req.body.semester,
       name: req.body.name,
       code: req.body.code,
       lechours: req.body.lechours,
       tutehours: req.body.tutehours,
       labhours: req.body.labhours,
       evahours: req.body.evahours
    }, {new: true}).then(result => {
        res.status(200).json({
            success: true,
            data: result
        });
    }).catch(err => {
        res.status(503).json({
            success: false,
            message: err.message
        });
    });

};

const deleteSubjectById = (req, res) => {
    Subject.findByIdAndDelete(req.params.id).then(result => {
        res.status(200).json({
            success: true,
            data: result
        });
    }).catch(err =>{
        res.status(504).json({
            success: false,
            message: err.message
        });
    });
};

module.exports = {
    addSubject,
    viewSubjects,
    viewSubjectById,
    updateSubjectById,
    deleteSubjectById
}