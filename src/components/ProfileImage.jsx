function ProfileImage(props) {
  console.log(props);
  return (
    <img src={props.image.tweet.user.image} className="profile" alt="profile" />
  );
}

export default ProfileImage;
