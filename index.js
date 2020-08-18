const express = require ('express')
const app = express();
 //importa a biblioteca cliente da nuvem do Google
    const vision = require('@google-cloud/vision');
  //Cria um cliente
    app.listen(5000, '127.0.0.1', ()=> console.log('Server Running'))
    //colocando a chave da api
    const client = new vision.ImageAnnotatorClient({
        keyFilename: 'keyRB.json'
    });
  //Caminho da imagem
    client
        .labelDetection('./nature.jpg')
        .then(results => {
            const labels = results[0].labelAnnotations;
 
            console.log('Labels: ');
            labels.forEach(label => console.log(label.description));
        })
        //trantando os erros.
        .catch(err => {
            console.error('ERROR:' , err);
        });
    
  
 

