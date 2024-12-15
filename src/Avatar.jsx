import Picture from "./assets/1080.png"

export default function Avatar() {
  return (
    <div className="avatar-div">
      <div className="image-div">
        <img src={Picture} alt="main-picture" />
      </div>
    </div>
  )
}
