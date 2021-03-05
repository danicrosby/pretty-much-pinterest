const navBar = () => {
  document.querySelector('#navigation').innerHTML = `
  <nav class="navbar navbar-expand-lg navbar-light bg-light" id="nav-container">

    <div><a href=""><img src="https://cdn4.iconfinder.com/data/icons/social-media-flat-7/64/Social-media_Pinterest-512.png" style="width: 1.5em; margin-left: 2em"></div></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span></button>

    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item active"><a class="nav-link" href="https://www.pinterest.com/">Home <span class="sr-only">(current)</span></a></li>
        <li class="nav-item active"><a class="nav-link" href="https://www.pinterest.com/today/">Today <span class="sr-only"></span></a></li>
        <li class="nav-item active" style="margin-right: .5em"><a class="nav-link" href="https://www.pinterest.com/following">Following <span class="sr-only"></span></a></li>
      </ul>
      
    <div class="input-group">
      <input type="text" class="form-control w-25 ml-2" aria-label="Text input with dropdown button" placeholder="search">
      <div class="dropdown show"><a class="btn btn-secondary dropdown-toggle mr-3" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">All Pins </a>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
        <a class="dropdown-item btn-light" href="#">All Pins</a>
        <a class="dropdown-item btn-light" href="#">All Boards</a>
      </div>
    </div>

    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active"><div><a href=""><img src="https://cdn1.iconfinder.com/data/icons/app-user-interface-glyph/64/notification_user_interface_app_alarm_bell-512.png" style="width: 1.5em"></div></a></li>
      <li class="nav-item active"><div><a href=""><img src="https://cdn4.iconfinder.com/data/icons/music-ui-solid-24px/24/chat_bubble_notification_message-2-512.png" style="width: 1.5em"></div></a></li>
      <li class="nav-item active"><div><a href=""><img src="https://cdn3.iconfinder.com/data/icons/social-messaging-productivity-6/128/profile-circle2-512.png" style="width: 1.5em"></div></a></li>
    </ul>


    <div class="dropdown ml-3 mr-2">
      <button class="btn btn-light bt-sm dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><div></div></button>
      <div class="dropdown-menu dropdown-menu">
        <button class="dropdown-item btn-danger" type="button"><button id="google-auth" class="btn btn-sm btn-danger">Logout</button></button>
      </div>
    </div>

  </nav>`;
};

export default navBar;
