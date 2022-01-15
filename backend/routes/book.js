const { request, response } = require('express')
const express = require('express')
const db = require('../db')
const utils = require('../utils')
const router = express.Router()

router.get('/',(request,response)=>{
    response.send("Hello from server's book.js")
})

router.get('/all',(request,response)=>{
    const connection = db.openConnection()
    const query = `SELECT * FROM book`
    connection.query(query,(error,data)=>{
        connection.end()
        if(error){
            response.send(utils.createResult(error))
        }else{
            response.send(utils.createResult(error,data))
        }
    })
})

router.post('/add',(request,response)=>{
    const {book_title, publisher_name, author_name} = request.body
    const connection = db.openConnection()
    const query = `INSERT INTO book (book_id, book_title, publisher_name, author_name)
                    VALUES(default,'${book_title}','${publisher_name}','${author_name}')`
    connection.query(query,(error,data)=>{
        connection.end()
        if(error){
            response.send(utils.createResult(error))
        }else{
            response.send(utils.createResult(error,data))
        }
    })
})

router.put('/edit/:id',(request,response)=>{
    const {id} = request.params
    const {publisher_name, author_name} = request.body
    const connection = db.openConnection()
    const query = `UPDATE book SET publisher_name = '${publisher_name}', author_name = '${author_name}' WHERE book_id = '${id}'`
    connection.query(query,(error,data)=>{
        connection.end()
        if(error){
            response.send(utils.createResult(error))
        }else{
            response.send(utils.createResult(error,data))
        }
    })
})

router.delete('/delete/:id',(request,response)=>{
    const {id} = request.params
    const connection = db.openConnection()
    const query = `DELETE FROM book WHERE book_id = '${id}'`
    connection.query(query,(error,data)=>{
        connection.end()
        if(error){
            response.send(utils.createResult(error))
        }else{
            response.send(utils.createResult(error,data))
        }
    })
})

module.exports=router