import React, {useContext} from 'react'
import IssueList from '../components/IssueList'
import Issue from '../components/Issue'
import { PublicContext } from '../context/PublicProvider'

function Public(){

  const { publicIssues } = useContext(PublicContext)

  return (
    <div className="public">
        <h1>PUBLIC PAGE</h1>
        {publicIssues ? publicIssues.map(issue => <Issue {...issue} key={issue._id} />) : null}
    </div>
  )
}

export default Public