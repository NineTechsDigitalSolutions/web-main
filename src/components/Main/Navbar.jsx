import React, { useState } from 'react';
import { HiOutlineMenu } from 'react-icons/hi';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div class='container d-flex justify-content-between align-items-center'>
      <div class='logo'>
        <h1>
          <a href='/'>MyLearning</a>
        </h1>
        {/* <!-- Uncomment below if you prefer to use an image logo -->
        <!-- <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>--> */}
      </div>

      <nav
        id='navbar'
        class={`${showMenu ? 'navbar navbar-mobile' : 'navbar'}`}
      >
        <ul>
          <li>
            <a class='active ' href='index.html'>
              Home
            </a>
          </li>
          <li>
            <a href='features.html'>About</a>
          </li>
          <li class='dropdown'>
            <a href='#'>
              <span>Publish with us</span> <i class='bi bi-chevron-down'></i>
            </a>
            <ul>
              <li>
                <a href='#'>New Authors</a>
              </li>
              <li>
                <a href='#'>Convert to Ebook</a>
              </li>
              <li>
                <a href='#'>Covert to Audiobook</a>
              </li>
            </ul>
          </li>
          <li class='dropdown'>
            <a href='#'>
              <span>My Library</span> <i class='bi bi-chevron-down'></i>
            </a>
            <ul>
              <li>
                <a href='#'>Libraries</a>
              </li>
              <li>
                <a href='#'>Authors</a>
              </li>
              <li>
                <a href='#'>Books</a>
              </li>
            </ul>
          </li>
          <li>
            <a href='contact.html'>Contact Us</a>
          </li>
        </ul>
        <button
          class='bi bi-list mobile-nav-toggle'
          onClick={() => setShowMenu(!showMenu)}
        >
          <HiOutlineMenu />
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
