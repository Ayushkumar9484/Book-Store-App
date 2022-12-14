const express=require("express")
const router=express.Router()
const Book=require("../model/Book")
const bookscontroller=require("../controllers/books-controller")

router.get("/",bookscontroller.getAllBooks)
router.post("/",bookscontroller.addBook)
router.get("/:id",bookscontroller.getById)
router.put("/:id",bookscontroller.updateBook)
router.delete("/:id",bookscontroller.deleteBook)


module.exports=router