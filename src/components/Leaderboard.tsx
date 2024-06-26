import ChallengerModal, { ChallengerType } from '@/model';
import dbConnect from '@/utils/dbConnect'
import { generateCourseLeaderboard } from '@/utils/misc';
import React from 'react'

async function Leaderboard() {
  await dbConnect();
  const data = await ChallengerModal.find({ course: "data" });
  const dataLeaders = generateCourseLeaderboard(data);
  const web = await ChallengerModal.find({ course: "web" });
  const webLeaders = generateCourseLeaderboard(web);

  return (
    <>
      <hr style={{ margin: "3rem 0"}}></hr>
      <h2 className='cabGreen'>Leaderboard</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", border: "solid 2px grey", wordBreak: "break-word"  }}>
        <div style={{ borderRight: "solid 2px grey", display: "grid", alignContent: "start" }}>
          <LeaderBoardColumn course='Web' leaders={webLeaders} />
        </div>
        <div style={{ display: "grid", alignContent: "start" }}>
          <LeaderBoardColumn course='Data' leaders={dataLeaders} />
        </div>
      </div>
    </>
  )
}

export default Leaderboard

type LBCProps = {
  course: string
  leaders: string[]
}

function LeaderBoardColumn({ course, leaders }: LBCProps) {
  return (
    <>
      <h3 style={{ padding: "1rem 0", borderBottom: "solid 2px grey" }} className='cabGreen'>{ course }</h3>
      { leaders.length === 0 && <p>No Winner Yet...</p> }
      { leaders.map((challenger, i) => {
        return i === 0 ? 
          <h3 key={`winner ${course}`}><span className='cabGreen'>1. </span>{ challenger }</h3> : 
          <p key={`runnerup ${i + 1} ${course}`}>{ i + 1 }. { challenger }</p>
      }) }
    </>
  )
}