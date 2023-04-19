import React, { useContext, useState } from 'react'
import { createContext } from 'react'

const BookContext =createContext();
export const BookProvider= ({children}) => { 
    const [books, setBooks] = useState()
    const values ={
        books,setBooks
    }
    return <BookContext.Provider value={values}>{children}</BookContext.Provider>
}

export const useBooks= ()=> useContext(BookContext)