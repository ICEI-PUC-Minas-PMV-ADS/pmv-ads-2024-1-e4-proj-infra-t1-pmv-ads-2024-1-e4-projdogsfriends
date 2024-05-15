import { Controller, Get, Post, Body, Patch, Param, Delete, UploadedFile, UseInterceptors, BadRequestException, Res } from '@nestjs/common';
import { FilesService } from './files.service';
import { FileInterceptor } from '@nestjs/platform-express';

import { diskStorage } from 'multer';
import { fileFilter, fileNamer } from './helpers';
import { Response } from 'express';

@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Get('file/:image')
  findImage(
    @Res() res: Response, 
    @Param('image') image: string
  ){
   
   const path = this.filesService.getStaticUserImage(image);
    res.sendFile(path)
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('image', {
    fileFilter: fileFilter,
    //limits: { fileSize: 2024}
    storage: diskStorage({
      destination: './static/images',
      filename: fileNamer
    })
  }))
  uploadImage( @UploadedFile() file: Express.Multer.File  ){
    console.log("Passando")
    if( !file ) throw new BadRequestException('Make sure that the file is an image!')

    const secureUrl = `${ file.filename }`
    console.log("secureUrl", secureUrl)
    return { secureUrl }
  }

}
