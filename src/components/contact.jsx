import React from 'react'
import "./contact.css"

const footer = () => {
  return (
    <>
    <div id='footer'>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
<ul className='footerlist'>
  <li>
    <a href="https://www.facebook.com/profile.php?id= 61564358154123">
      <i class="fab fa-facebook-f icon"></i>    </a>
  </li>
  <li>
    <a href="https://www.instagram.com/albintomy_?igsh=N2ZtY2MwdG1ueG56"><i class="fa-brands fa-instagram icon"></i></a>
  </li>
  <li>
    <a href="https://wa.me/9947322239"><i class="fa-brands fa-whatsapp icon"></i></a></li>
  <li>
    <a href="mailto:ialbintomy@gmail.com"><i class="fa-solid fa-at icon"></i></a></li>
</ul>
    </div>
    </>
  )
}

export default footer