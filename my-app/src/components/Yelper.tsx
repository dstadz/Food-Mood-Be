import React, { useState } from 'react';
import { graphql } from 'react-apollo';
import { getRestaurantQuery } from '../queries/'



// export interface HelloProps { compiler:string; framework:string }

// const Hello = (props: HelloProps) => {

interface Props {
  text:string;
}

const Yelper: React.FC<Props> = () => {
  const [selected, setSelected] = useState(null)

  const displayBooks=()=> {
    let data = props.data;
    if(data.loading){
        return( <div>Loading restaurants...</div> );
    } else {
        return data.restaurants.map(rest:Object => {
            return(
                <li key={ rest.id } onClick={ (e) => setSelected(rest.id) }>{ rest.name }</li>
            );
        })
    }
}
  return(
    <div>

    </div>
  )
}

export default graphql(getRestaurantQuery)(Yelper);
