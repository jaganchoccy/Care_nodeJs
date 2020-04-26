
const { CosmosClient } = require("@azure/cosmos");

//get all doctor details
exports.getAllDoctorDetail = (req, res, next) => {
    console.log('getAllPatientaDetail')
    const endpoint = "https://caliberbbcosmosdb.documents.azure.com:443";
    const key = "3JAg0hr4srXHQVpBo2drGDqljqtfB2gEiSAUKx4UyWYmm1WBYZRkJH9qK77oZnanMW7we3BmO4NwWIWau76gaA==";
    const client = new CosmosClient({ endpoint, key });

    async function main() {
    const { database } = await client.databases.createIfNotExists({ id: "PatientVitals" });
    console.log("database.id");
    const { container } = await database.containers.createIfNotExists({ id: "DoctorInfo" });
    const { resources } = await container.items
    .query()
    .fetchAll();
    for (const item of resources) {
        console.log(`${item.name} is a doctor `);
    }
    return resources
    }
    main().then(result=>{
        res.send({
            Data:result
        })
    })
}