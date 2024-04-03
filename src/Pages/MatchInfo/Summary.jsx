import React from 'react'
import { AppContext } from '../../App'
import '../MatchInfo/Summary.css'
import MatchSummary from './MatchSummary'
import ScorecardSummary from './ScorecardSummary'

function Summary() {

    const context = React.useContext(AppContext);

    return (
        <>
            {
                context.match &&
                <div className='sum1 h-full flex flex-row w-full'>
                    <MatchSummary />
                    <div className='sum3 flex h-[85vh] items-center w-[0.5px] bg-black m-2 mr-3'></div>
                    <ScorecardSummary />
                </div>
            }
        </>

    )
}

export default Summary
