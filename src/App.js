import React,{useEffect, useState} from 'react';
import Recipe from './Recipe'
import  ErrorPage from './ErrorPage'

/* https://www.edamam.com/ API from */
function App() {
  
  const [recipies , setRecipes] = useState([])
  const [search,setSearch] = useState('')
  const [query,setQuery] =useState('Christmas recipe') 
  
 
  const APP_ID = '091ef07b';
  const APP_KEY = 'c6c37e5898435f16a546bd1fc23bc77c';
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
  
  

  useEffect(()=>{
    getRecipies()
  },[query])

    
  const getRecipies = async() =>{
       const response = await fetch(url)
       const data = await response.json()
       setRecipes(data.hits)
       console.log(data.hits)
  }

   const updateSearch = (e) =>{
    setSearch(e.target.value); 
   }

   const getSearch = e =>{
     e.preventDefault();
     setQuery(search)
     setSearch("")
     
   }

  return (
    <div>
      <div> 
       
          <h2 className="search-title">Find a recipe</h2>
        
         <div>
        <form onSubmit={getSearch} className="search-form form-group">

       <input
        type="text"
        className="search-bar form-control"
        value={search}
        onChange={updateSearch}
        
       />
        
       <button className="search-button btn" type="submit">Search</button>

       </form>
       </div>
     </div>
      <div className="cont">
        <div>
         
     { recipies.length === 0 ? <ErrorPage /> : recipies.map(recipe => (
       <Recipe 
       key={recipe.recipe.label} 
       title={recipe.recipe.label} 
       servings ={recipe.recipe.yield}
       dietLabels={recipe.recipe.dietLabels}
       calories={recipe.recipe.calories} 
       image={recipe.recipe.image} 
       ingredients={recipe.recipe.ingredients}
       totalTime={recipe.recipe.totalTime}
       totalWeight={recipe.recipe.totalWeight}
        digest={recipe.recipe.digest}/>
     ))}
     </div>
   </div>
 </div>
  );
}

export default App;
