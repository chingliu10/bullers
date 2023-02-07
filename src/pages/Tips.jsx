import React, { useEffect, useState } from 'react';
import { db } from '../config/firebase'
import { collection, query,  getDocs , where } from 'firebase/firestore';
import NoTips from './NoTips'
import Loading from '../components/Loading'
import Card from '../components/Card';

function Tips() {

  let [ tips, setTips ] = useState([])
  let [ loading , doneLoading ] = useState(true)

  let hoursPassed = new Date().getHours()
  let hoursPassedInSeconds = 3600000 * hoursPassed
  let midnight = Date.now() - hoursPassedInSeconds

  useEffect(() => {

    fetchTips()
  }, [])


  async function fetchTips () {
    try {

        let q = query(collection(db, 'tips'), where('createdAt', '>=', new Date(midnight)))
        const data = await getDocs(q)
        data.docs.map(doc => setTips( arr => [...arr, {id : doc.id , tip : doc.data()}]))
        console.log(tips)
        doneLoading(false)
    }

    catch (e) {

        console.log(e)

    }
  }


  return (
    <div>
        <div className='tipsCover'>
            <>
                <h1>Todays Tips</h1>
                {
                    loading ? <Loading/> :

                    <>
                        {

                            tips.length === 0 ? <NoTips/> :

                            tips.map((data) => (
                                <div key={data.id}>
                                    <Card data={data}/>
                                </div>
                            ))

                        }
                    </>
                    
                }
            </>
        </div>
    </div>
  )
}

export default Tips