import express from 'express';
import Group from '../models/group.model';
import { sendSuccess, sendError } from '../Utils/utils';
import { isUuid } from 'uuidv4';

const router = express.Router();

router.get('/:id', (req, res) => {
  const { id } = req.params;

  if (!isUuid(id) && isNaN(+id)) {
    return sendError(res, 'Not a valid id');
  }

  Group.findById(id, (error, data) => {
    console.log(error);
    if (error) {
      sendError(res, error.message);
    } else {
      sendSuccess(res, 'Room fetched successfully', data);
    }
  });
});

router.patch('/:id', (req, res) => {
  const { title, body, input, language } = req.body;
  if (!title) return sendError(res, 'Title cant be empty');
  const id = req.params.id;

  if (!isUuid(id) && isNaN(+id)) {
    return sendError(res, 'Not a valid id');
  }

  Group.updateById({ title, body, id, input, language }, (error, data) => {
    console.log(error);
    if (error) {
      sendError(res, error.message);
    } else {
      sendSuccess(res, 'Room updated successfully', data);
    }
  });
});

router.post('/', (req, res) => {
  const { title, body, input, language } = req.body;
  if (!title) return sendError(res, "Title can't be empty");

  Group.create({ title, body, input, language }, (error, data) => {
    console.log(error);
    if (error) {
      sendError(res, error.message);
    } else {
      sendSuccess(res, 'Room created successfully', data);
    }
  });
});
