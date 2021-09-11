import { Controller, Get, Param } from '@nestjs/common';
import { Exercise3Service } from './exercise3.service';

@Controller('exercise3')
export class Exercise3Controller {
    constructor(private readonly e3: Exercise3Service){}

    @Get('/LoopsTriangle/:height')
    LoopsTriangle(@Param('height') height: string){
        var parsedHeight:number = parseInt(height);

        return this.e3.LoopsTriangle(parsedHeight);
    }

    @Get('/HelloWorld/:stringname')
    HelloWorld(@Param('stringname') stringname: string){
        var stringname:string
        
        return 'Welcome, ' + stringname +'!';
    }

    @Get('/PrimeNumbers/:num')
    PrimeNumbers(@Param('num') num: string){
        //am coonfussed here. watch tutorial continue later.
              

    }

}