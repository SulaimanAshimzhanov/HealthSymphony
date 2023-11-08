

import React from 'react';

import cls from "../../styles/Avatar.module.scss";

const Avatar = ({avatar, w, h}) => {
    const [ava, setAvatar] = React.useState("");

    const noneAvatar = "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/no-profile-picture-icon.png";


    React.useLayoutEffect(() => {
        if(avatar) {
            setAvatar(avatar);
        } else {
            setAvatar(noneAvatar);
        }
    }, [avatar]);


  return (
    <React.Fragment>
      <img
        className={cls.avatar}
        src={ava}
        alt=""
        width={w}
        height={h}
      />
    </React.Fragment>
  )
}

export default Avatar;
