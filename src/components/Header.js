const Header = ({showAdd, onShowAdd}) => {
  return (
    <header className="header">
      <h1>To Do List</h1>
      <button style={{backgroundColor: showAdd ? "red" : "green"}} className="btn" onClick={onShowAdd}>{showAdd ? "Close" : "Add"}</button>
    </header>
  )
}

export default Header