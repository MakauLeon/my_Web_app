import "./profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts"

const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://www.fabmood.com/wp-content/uploads/2022/01/brown-aesthetic-wallpaper-6-1024x713.jpg"
          alt=""
          className="cover"
        />
        <img
          src="https://images.sk-static.com/images/media/img/col6/20170424-135339-327893.jpg"
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="http://facebook.com">
              <FacebookTwoToneIcon fontSize="small" />
            </a>
            <a href="http://instagram.com">
              <InstagramIcon fontSize="small" />
            </a>
            <a href="http://twitter.com">
              <TwitterIcon fontSize="small" />
            </a>
            <a href="http://linkedin.com">
              <LinkedInIcon fontSize="small" />
            </a>
            <a href="http://pinterest.com">
              <PinterestIcon fontSize="small" />
            </a>
          </div>
          <div className="center">
            <span>Makau Leon</span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>KENYA</span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span>makau.dev</span>
              </div>
            </div>
            <button>following</button>
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
      <Posts/>
      </div>
    </div>
  );
};

export default Profile;
