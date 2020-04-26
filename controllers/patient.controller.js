const request = require('request');
const { CosmosClient } = require("@azure/cosmos");

//getPatientById
exports.getPatientById = (req, res, next) => {
    console.log('11111111111111')
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
    console.log(req.dbToken,'infoooooooo')
    console.log(req.dbTime)
    console.log('sdashgdjagsjgj')
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

//get all details
exports.getAllPatientDetail = (req, res, next) => {
    console.log('getAlldoctorDetail')
    const endpoint = "https://caliberbbcosmosdb.documents.azure.com:443";
    const key = "3JAg0hr4srXHQVpBo2drGDqljqtfB2gEiSAUKx4UyWYmm1WBYZRkJH9qK77oZnanMW7we3BmO4NwWIWau76gaA==";
    const client = new CosmosClient({ endpoint, key });

    async function main() {
    const { database } = await client.databases.createIfNotExists({ id: "PatientVitals" });
    console.log("database.id");
    const { container } = await database.containers.createIfNotExists({ id: "PatientInfo" });

    const { resources } = await container.items
    .query()
    .fetchAll();
    for (const item of resources) {
        console.log(`${item.name} is a patirnt `);
    }
    return resources
    }
    main().then(result=>{
        res.send({
            Data:result
        })
    })
}


//create a new patient
exports.addNewPatient =(req, res, next) => {
    const newPatient = req.body.newData;
    console.log('getnew patientDetail',req.body.newData)
    const endpoint = "https://caliberbbcosmosdb.documents.azure.com:443";
    const key = "hHrQ9KFP7B2eNaFU4C4qYWi5e2zsYF0Ul8GDJz50AZYs2eTUdF8VHgYoFEBXksGRG9BBYXr95d8V18ApcjvJGg==";
    const client = new CosmosClient({ endpoint, key });

    async function main() {
    const { database } = await client.databases.createIfNotExists({ id: "PatientVitals" });
    console.log("database.id");
    const { container } = await database.containers.createIfNotExists({ id: "PatientInfo" });
    console.log('new1')
    const { resources } = await container.items
    .query()
    .fetchAll();
    for (const item of resources) {
        console.log(`${item.name} is a add new `);
    }
    console.log('new2')
    const { resource: createdItem } = await container.items.create(newPatient);
    return createdItem;
    }
    main().then(result=>{
        res.send({
            Data:'success'
        })
    })
}



