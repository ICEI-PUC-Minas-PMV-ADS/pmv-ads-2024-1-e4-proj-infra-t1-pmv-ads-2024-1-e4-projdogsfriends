export const fileFilter = (req: Express.Request, file: Express.Multer.File, callback: Function) => {

  //  console.log({ file })
  if(!file) return callback(new Error('File empty'), false) //false nao aceita o arquivo

    const fileExtension = file.mimetype.split('/')[1];
    const validExtension = ['jpg', 'jpeg', 'png', 'gif'];

    if( validExtension.includes( fileExtension )){
        return callback(null, true); //true aceita o arquivo
    }

    callback(null, false)
}