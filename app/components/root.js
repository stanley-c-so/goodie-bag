import React from 'react'
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';

import AllCandies from './CandyList';

// const Welcome = props => {
//   return (
//     <div className="welcome">
//       <h1>Welcome to the Goodie Bag!</h1>
//       <p>What a nice home page for your goodies!</p>
//     </div>
//   )
// };

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <Link to="/">Go Home</Link>
          <Link to="/candies">Go to Candies</Link>
        </nav>
        <main>
          <Switch>
            <Route exact path="/" render={() => <h1>Welcome to the Goodie Bag!</h1>} />
            <Route exact path="/candies" component={AllCandies} />
            <Route render={() => <h2>Not Found</h2>} />
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default Root;
