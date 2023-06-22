/* Library import */

/* Dependency import */
import './css/Body.css';

/* Component import */
import CardRow from './CardRow';

/* Asset imports */




function Body(){

    return(
        <div className='Body'>
            <CardRow
                rowNum ={1}
                Heading={"Continue Watching for Taksh"}
            />
             <CardRow
                rowNum ={2}
                Heading={"Trending Now"}
            />
             <CardRow
                rowNum ={3}
                Heading={"Best of Thrillers"}
            />
        </div>
    );
}

export default Body;