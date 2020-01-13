import React  from 'react'
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import './styles_react/style.css'

const Recipe = ({title,dietLabels,servings,calories,image,
  ingredients,totalTime,totalWeight,digest}) => {

  const timeConvert = (n) => {
    var num = n;
    var hours = (num / 60);
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return rhours > 1 && rminutes > 1 ? ` ${rhours} hours and  ${rminutes} minutes` : rhours > 1 && rminutes <= 1 ?
      ` ${rhours} hours and ${rminutes} minute` :` ${rhours} hour and ${rminutes} minutes` ;

  };
    
        
    return(

        <Flippy
           
        flipOnHover={false} // default false
        flipOnClick={true} // default false
        flipDirection="vertical" // horizontal or vertical
     >  
        <FrontSide 
          style={{
            backgroundColor: 'transparent',
          }}>  
        <div className="container-fluid">
          <div className="row ">
             <div className="col-lg-4 col-md-4 col-sm-12 text-center">
               <div>
                  <LazyLoadImage className="img" src={image} alt={title} /> 
               </div>
               </div>
              <div className="col-lg-8 col-md-8 col-sm-12">
                <div className="title-container">
                 <h1>{title}</h1>
                 <hr className="brake"/>
                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since</p>
                </div>
             </div>
            </div>
         </div>
           
        </FrontSide>


        <BackSide className="backCard"
          style={{height: 'max-content',backgroundImage: ` url( ${image}) `,backgroundRepeat:"no-repeat",
          backgroundSize: "100%",backgroundSize: 'cover' }}>
          <div className="container-fluid">
            <div className="row bigCont">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="row title-back">
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <h1>{title}</h1>
                  </div>
                </div>
            <div className="row servings">
              <div className="col-lg-12 col-sm-12">
                 <p>Servings: <span>{servings}</span></p> 
              </div>
            </div>
            <div className="row dietLabel">
              <div className="col-lg-12 col-md-12 col-sm-12">
              {dietLabels.map(e=> e.length > 0 ? <div className="dietLb">{dietLabels.map(dl=>dl)}</div> : <div></div>  )}    
              </div>
            </div>
           <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 ">
              <div className="ingredients" >
               <h3> <i class="fas fa-utensils"></i> Ingredients</h3>
                <ul> 
                    {ingredients.map(ingr =>
                      <li style={{listStyleType: "circle"}}>{ingr.text}</li>
                       )}
                </ul>
              </div>
            </div>
             </div>

            <div className="row">
             <div className="col-lg-12 col-md-12 col-sm-12 ">
               <div className="basic-info">
                <p><i class="fas fa-fire"></i> <strong>Calories :</strong> {Number.parseInt(calories)}</p>

                <p> <i class="far fa-clock"></i>  {totalTime === 0 ?   "No information on cooking time" :
                 totalTime  > 60 ? `Time to prepare : ${timeConvert(totalTime)} ` : 
                `Time to prepare : ${totalTime } minutes ` } </p> 
            
                <p> <i class="fas fa-balance-scale"></i><strong>Total meal weight :</strong> {Number.parseInt(totalWeight)} grams</p>
              </div>
            </div>
           </div>

          <div className="row details-section">
            <div className="col-lg-12 col-md-12 col-sm-12 details">
               <div className="details-cont">
                 <h3 className="text-center"> <i class="fas fa-info-circle"></i> Details</h3>
                 <ul>
                    {digest.map(obj => <li >{obj.label } {Number.parseInt(obj.total)}g</li>
                        )}
                </ul>
                </div>
            </div>
          </div>
              </div>
            </div>

           
        </div>
  
        </BackSide>
      </Flippy>
    );
}

export default Recipe

