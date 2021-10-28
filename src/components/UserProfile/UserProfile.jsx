import React from "react";
import { UserProfileStyle } from "./UserProfile.style";

function UserProfile() {
  return (
    <UserProfileStyle>
      <section className="user-details">
        <article className="user-profile">
          <figure className="user-info">
            <picture className="user-thumbnail">
              <img
                src="/images/users/user-four.jpg"
                alt="User Profile"
                className="user-image"
              />
            </picture>
            <figcaption className="user-profile-details">
              <h2 className="name">Jahangir Khan</h2>
              <p className="description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
                harum expedita quasi enim odit labore eius consequatur illo!
                Voluptatem animi impedit beatae, rem eos ipsum assumenda veniam
                corrupti magni excepturi?
              </p>
            </figcaption>
          </figure>

          <article className="user-connections">
            <article className="counter">
              <h2 className="counter-no">23</h2>
              <p className="counter-text">Post</p>
            </article>
            <article className="counter">
              <h2 className="counter-no">80</h2>
              <p className="counter-text">Following</p>
            </article>
            <article className="counter">
              <h2 className="counter-no">100</h2>
              <p className="counter-text">Followers</p>
            </article>
          </article>

          <article className="about-user">
            <h3 className="heading">Interest :</h3>
            <article className="tags-wrapper">
              <span className="tags">Photography</span>
              <span className="tags">Design</span>
              <span className="tags">UI/UX</span>
              <span className="tags">Football</span>
            </article>
          </article>
        </article>

        <article className="buttons-wrapper">
          <button className="profile-button">Edit Profile</button>
          <button className="profile-button">Visit Store</button>
        </article>
      </section>
    </UserProfileStyle>
  );
}

export default UserProfile;
