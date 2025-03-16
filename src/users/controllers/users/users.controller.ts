import { Body, Controller, Get, Param, ParseIntPipe, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';

@Controller('users')
export class UsersController {
  @Get('fetch')
  getUsers(@Query('sortBy') sortBy:string) {
    console.log(sortBy)
    return { username: 'Emran', age: '23' };
  }

  @Get('posts')
  getUserPosts() {
    return [
      {
        username: 'Emran',
        email: 'emran@outlook.com',
        posts: [
          {
            id: 1,
            title: 'First post',
          },
          {
            id: 2,
            title: 'Second post',
          },
        ],
      },
    ];
  }

  @Get('comments')
  getUserPostComments() {
    return [
      {
        id: 1,
        title: 'First post',
        comments: [],
      },
    ];
  }

  //   @Post('create')
  //   createUser(@Req() request:Request, @Res() response:Response){
  //     console.log(request.body);
  //     response.send("Created")

  //   }

  @Post('create')
  @UsePipes(new ValidationPipe())
  createUser(@Body() userData: CreateUserDto) {
    console.log(userData);
    return { createdUser: userData };
  }

  //   @Get(':id')
  //   getUserById(@Req() request:Request, @Res() response:Response){
  //     console.log(request.params)
  //     response.send(request.params)
  //   }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id:number) {
    console.log(id);
    return {id}
  }


}
