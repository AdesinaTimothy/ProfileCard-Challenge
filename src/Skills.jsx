
export default function Skills({skill, icon, background}) {
  return (
    <div className="Skills-div">
      <div style = {{backgroundColor: background}} className="list-div">
        <p>{skill}</p>
        <img src={icon} alt="icon image" />
      </div>
    </div>
  )
}

