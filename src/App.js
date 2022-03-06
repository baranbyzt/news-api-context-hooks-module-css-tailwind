
 import './style/GeneralStyle.css'
 import React from 'react'
 import { useContext, useEffect } from 'react'
import { MainContext } from './contextStore/ContextApi';

function App() {
const {
  fetchApple,
  fetchTesla,
  fetchUsaNews,
  fetchTeachCrunch,
  fetchWalolStreetJournal,
  apple,
  tesla,
  usaNews,
  teachCrunch,
  wallStreetJournal} = useContext(MainContext)

useEffect(async () => {
  await  fetchApple()
  await  fetchUsaNews()
  await  fetchTesla()
  await  fetchTeachCrunch()
  await  fetchWalolStreetJournal()


}, [])


console.log(apple[0].author)
console.log(usaNews[1].author)
console.log(teachCrunch[0].author)
console.log(wallStreetJournal[1].author)
console.log(tesla[4].author)

/*
console.log(apple[0].author)
console.log(usaNews[1].author)
console.log(teachCrunch[0].author)
console.log(wallStreetJournal[1].author)
console.log(tesla[4].author)
*/
  return (
<>

<p>{`${apple[0]?.author}`}</p>
<p>{`${usaNews[1]?.author}`}</p>
<p>{`${teachCrunch[3]?.author}`}</p>
<p>{`${wallStreetJournal[1]?.author}`}</p>
<p>{`${tesla[4]?.author}`}</p>
</>
  );
}

export default App;


/*


<p>{`${apple[0]?.author}`}</p>
<p>{`${usaNews[1]?.author}`}</p>
<p>{`${teachCrunch[3]?.author}`}</p>
<p>{`${wallStreetJournal[1]?.author}`}</p>
<p>{`${tesla[4]?.author}`}</p>


*/