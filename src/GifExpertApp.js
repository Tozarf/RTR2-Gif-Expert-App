import React from 'react'
import { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'


export const GifExpertApp = ({defaultCategories=[]}) => {
    
    const [categories, setCategory] = useState(defaultCategories)

    
    return (
        <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategory={setCategory}/>
        <hr/>
        
        <ol>
        {
            categories.map((category)=>(
                <GifGrid
                key={category} 
                category={category}
                />
        ))
        }
        </ol>
        </>
    )
}

