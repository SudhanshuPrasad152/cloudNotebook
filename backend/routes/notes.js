const express = require("express");
const fetchuser = require("../middleware/fetchuser");
const Note = require("../models/Notes");
const { validationResult, body } = require("express-validator");

const router = express.Router();
//Route 1: Get all the notes using: GET "/api/notes/fetchallnotes". Login required
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id });
    res.send(notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

//Route 2: Add the notes using: POST "/api/notes/addnote". Login required
router.post(
  "/addnote",
  [
    body("title", "Enter a valid Name").isLength({ min: 3 }),
    body("description", "desc must be greater than 4 characters").isLength({
      min: 5,
    }),
  ],
  fetchuser,
  async (req, res) => {
    try {
      const error = validationResult(req);
      // If there are errors, return Bad request and the errors
      if (!error.isEmpty()) {
        return res.status(400).json({ error: error.array() });
      }

      const { title, description, tag } = req.body;

      //created a new note
      const note = new Note({
        title,
        description,
        tag,
        user: req.user.id,
      });

      //saved the note
      const savedNote = await note.save();
      res.send(savedNote);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

//Route 3: Update an existing note using: PUT "/api/notes/updatenote". Login required
router.put("/updatenote/:id", fetchuser, async (req, res) => {
  try {
    const { title, description, tag } = req.body;

    const newNote = {};

    if (title) newNote.title = title;
    if (description) newNote.description = description;
    if (tag) newNote.tag = tag;

    //Check the requested note present or note
    let note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(401).send("Not found");
    }

    //Check the user id matches with note user id
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not allowed");
    }

    //Find the note to be updated and update it

    note = await Note.findByIdAndUpdate(
      req.params.id,
      { $set: newNote },
      { new: true }
    );
    res.json({ note });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

//Route 4: Delete an existing note using: DELETE "/api/notes/deletenote". Login required
router.delete("/deletenote/:id", fetchuser, async (req, res) => {
  try {
    //Check the requested note present or note
    let note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).send("Not found");
    }

    //Check the user id matches with note user id
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not allowed");
    }

    //Find the note to be deleted and delete it

    note = await Note.findByIdAndDelete(req.params.id);
    res.json({ Success: "Note has been deleted", note: note });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
