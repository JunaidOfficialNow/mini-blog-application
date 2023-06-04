

export default function CommentListComponent({content, status}) {

  function render() {
    if (status === 'approved') {
      return content;
    } else return status;
  }

  return  (
    <div>
      <ul>
      <li>{render()}</li>
      </ul>
     
    </div>
  )
}