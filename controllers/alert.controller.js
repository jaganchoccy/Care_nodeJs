const request = require('request');
var azure = require('azure-storage');

//alert
exports.alert = (req, res, next) => {
        console.log('alert')
        request.get({
            "url": 'https://caliberbbcosmosdb.documents.azure.com' + req.url + '/' + req.dbType,
            "headers": {
                "Authorization": req.dbToken,
                'x-ms-version': '2015-12-16',
                'x-ms-date': req.dbTime,
                'Content-Type': 'application/json',
            },
        }, (error, response, body) => {
            res.send({
                Data: response, 
            });
        })

}


//get queue alert 
exports.getQueueAlert  = (req, res, next) => {
var queueSvc = azure.createQueueService('DefaultEndpointsProtocol=https;AccountName=caliberbbsa;AccountKey=YeJQkbUsrA0mULAlehvFroids0d4nO87hG8ISi/ATxydXkAvU37/inkY3fnKu/H2SaVHR/4bMAN9u64+rPAgmA==;EndpointSuffix=core.windows.net');
queueSvc.getMessages('vitalalerts', function(error, getResults, getResponse){
    if(!error){
      var message = getResults[0];
      console.log(getResults);
      res.send({
          data:getResults
      })
    }
  });
}


//delete QueueAlert
exports.deleteAlert = (req, res, next) => {
    console.log('delete')
    // var queueSvc = azure.createQueueService('DefaultEndpointsProtocol=https;AccountName=caliberbbsa;AccountKey=YeJQkbUsrA0mULAlehvFroids0d4nO87hG8ISi/ATxydXkAvU37/inkY3fnKu/H2SaVHR/4bMAN9u64+rPAgmA==;EndpointSuffix=core.windows.net');
    // queueSvc.getMessages('vitalalerts', function(error, getResults, getResponse){
    //     if(!error){
    //       var message = getResults[0];
    //       queueSvc.deleteMessage('myqueue', message.messageId, message.popReceipt, function(error, response){
    //         if(!error){
    //             res.send({
    //                 data:response
    //             })
    //         }
    //       });
        
    //     }
    //   });
    res.send({
        data:'hgashdg'
    })
    
    }
