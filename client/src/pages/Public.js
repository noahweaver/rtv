import React, {useContext} from 'react'
import PublicIssue from '../components/PublicIssue'
import { PublicContext } from '../context/PublicProvider'

function Public(){

  const { publicIssues, upVote, downVote } = useContext(PublicContext)

  return (
    <div className="public">
        <h1>PUBLIC PAGE</h1>
        {/* sort by amount of upvotes then map it*/}
        {publicIssues ? publicIssues.map(issue => <PublicIssue {...issue} key={issue._id} upVote={upVote} downVote={downVote}/>) : null}
    </div>
  )
}

export default Public