import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CommentService } from './comment.service';
import { CreateCommentDTO, UpdateCommentDTO } from './dto/create-comment-dto';

@UseGuards(JwtAuthGuard)
@Controller('comment')
export class CommentController {
  constructor(private commentService: CommentService) {}

  @Post()
  async create(
    @Res() res,
    @Body() createCommentDTO: CreateCommentDTO,
  ): Promise<Comment> {
    try {
      const comment = await this.commentService.createComment(createCommentDTO);
      return res.status(HttpStatus.OK).json({
        message: 'Comment created successfully',
        comment,
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  @Get()
  async findAll(@Res() res): Promise<Comment[]> {
    try {
      const comments = await this.commentService.findAll();
      return res.status(HttpStatus.OK).json({
        message: 'Comments obtained successfully',
        comments,
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  @Get(':commentID')
  async findbyId(
    @Res() res,
    @Param('commentID') commentID: string,
  ): Promise<Comment> {
    try {
      const comment = await this.commentService.findById(commentID);
      return res.status(HttpStatus.OK).json({
        message: 'Comment obtained successfully',
        comment,
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  @Put(':commentID')
  async update(
    @Res() res,
    @Param('commentID') commentID: string,
    @Body() updateCommentDTO: UpdateCommentDTO,
  ): Promise<Comment> {
    try {
      const comment = await this.commentService.updateComment(
        commentID,
        updateCommentDTO,
      );
      console.log(comment);
      return res.status(HttpStatus.OK).json({
        message: 'Comment update successfully',
        comment,
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  @Delete(':commentID')
  async delete(
    @Res() res,
    @Param('commentID') userID: string,
    @Body() updateCommentDTO: CreateCommentDTO,
  ): Promise<Comment> {
    try {
      const comment = await this.commentService.deleteComment(
        userID,
        updateCommentDTO,
      );
      return res.status(HttpStatus.OK).json({
        message: 'Comment removed successfully',
        comment,
      });
    } catch (error) {
      throw new Error(error);
    }
  }
}
