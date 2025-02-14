import { useState } from 'react'
import './App.css'
import { pathFinderApi } from './api/pathfinderapi';

// import BoxContainer from "./components/BoxContainer.js";

function App() {

  const [start, setStart] = useState({});
  const [end, setEnd] = useState({});
  const [clicked, setClicked] = useState(false);

  // [[0, 1], [0, 2], [1, 2], [1, 3], [2, 3]] => so this path to be highlighted.
  const [highlightedPath, setHighlightedPath] = useState([]);

  const grids = [];
  let value = 1;

  for (let i=0; i<20; i++) {
    let row = [];

    for (let j=0; j<20; j++) {
      row.push(value);
      value++;
    }
    grids.push(row);
  }

  // Handle click logic.
  const handleClick = async(clickStart, clickEnd) => {
    console.log("Calling Hanldeclick");
    
    if(!clicked) {
      setStart({"start": clickStart, "end": clickEnd});
      setClicked(true);
    } else {
      setEnd({"start": clickStart, "end": clickEnd});

      // API call to find the path with start and end.
      let path = await pathFinderApi(grids, start, end);
      setHighlightedPath[path?.path]
    }
  }

  return ( 
    <>
      <div className="grid_tiles_container">
        <h1>Shortest Path Finder</h1>
        <p>(Please select the start and end points to find the shortest path.)</p>

        {/* Reset Button functionality. */}
        {/* <button className='reset_btn'>Reset</button> */}

        <div className="grid_tile_wrapper">
          <div className="grid_tiles_list">
            {
              grids.map((gridOuter, i) => (
                <div className="grid_titles" key={i}>
                  {
                    gridOuter.map((gridInner, j) => (
                      <div className={`grid_tiles`} key={j} onClick={() => {handleClick(i, j)}}>
                        {gridInner}
                      </div>
                    ))
                  }
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default App
