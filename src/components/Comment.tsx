type CommentProps = {
    email: string,
    comment: string,
    creatAt: string
}

const Comment = ( { email, comment, creatAt } : CommentProps ) => {
  return (
    <div>
        <p>{email}</p>
        <p>{creatAt}</p>
        <p>{comment}</p>
    </div>
  )
}

export default Comment