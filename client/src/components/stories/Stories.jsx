import { useContext } from "react";
import "./stories.scss"
import { AuthContext } from "../../context/authContext"

const Stories = () => {

  const {currentUser} = useContext(AuthContext)

  //TEMPORARY
  const stories = [
    {
      id: 1,
      name: "Aida Burer",
      img: "https://cdn.shopify.com/s/files/1/0075/4719/1351/files/IMG-20190727-WA0006_large.jpg?v=1571777180",
    },
    {
      id: 2,
      name: "John Doe",
      img: "https://i.pinimg.com/564x/5f/da/05/5fda0592f9118b13840d0ec35e363c64.jpg",
    },
    {
      id: 3,
      name: "Jane Doe",
      img: "https://phantom-marca.unidadeditorial.es/3cdd11c5f8ced2009888af1148efea72/resize/660/f/webp/assets/multimedia/imagenes/2023/02/07/16757887902077.jpg",
    },
    {
      id: 4,
      name: "Owen Mark",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
  ];

  return (
    <div className="stories">
      <div className="story">
          <img src={currentUser.profilePic} alt="" />
          <span>{currentUser.name}</span>
          <button>+</button>
        </div>
      {stories.map(story=>(
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Stories