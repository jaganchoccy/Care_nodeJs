const request = require('request');

//getPatientById
exports.getPatientById = (req, res, next) => {
    const data = {
        query: 'SELECT * FROM CaliberBBContainer c where c.patientid=' + req.body.id,
        parameters: []
    }
    request.post({
        "url": 'https://caliberbbcosmosdb.documents.azure.com' + req.url + '/' + req.dbType,
        "headers": {
            "Authorization": req.dbToken,
            'Content-Type': 'application/query+json',
            'x-ms-version': '2015-12-16',
            'x-ms-date': req.dbTime,
            'x-ms-documentdb-isquery': 'True',
            'x-ms-documentdb-query-enablecrosspartition': 'True',
            'accept': 'text',
            'x-ms-query-enable-crosspartition': 'True'
        },
        "json": data
    }, (error, response, body) => {
        res.send({
            Data: response,
            
        });
    })
}




//get Patient Info
exports.getPatientInfo = (req, res, next) => {
    console.log(req.dbToken)
    console.log(req.dbTime)
    const data = {
        query: 'SELECT * FROM PatientInfo c where c.patientid=' + req.body.id,
        parameters: []
    }
    request.post({
        "url": 'https://caliberbbcosmosdb.documents.azure.com' + req.url + '/' + req.dbType,
        "headers": {
            "Authorization": req.dbToken,
            'Content-Type': 'application/query+json',
            'x-ms-version': '2015-12-16',
            'x-ms-date': req.dbTime,
            'x-ms-documentdb-isquery': 'True',
            'x-ms-documentdb-query-enablecrosspartition': 'True',
            'accept': 'text',
            'x-ms-query-enable-crosspartition': 'True'
        },
        "json": data
    }, (error, response, body) => {
        
        res.send({
            Data: response
        });
    })
}

//get 




