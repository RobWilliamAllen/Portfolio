// ===== NAVBAR ===== //
$(window).scroll(function () {

  let position = $(this).scrollTop();
  if (position >= 100) {
    $('.nav-menu').addClass('custom-navbar');
  } else {
    $('.nav-menu').removeClass('custom-navbar');
  }

});


// ===== HAMBURGER BUTTON ===== //
$(document).ready(function () {

  $('.nav-button').click(function () {
    $('.nav-button').toggleClass('change');
  });

});

// ===== CONTACT FORM ====== //

function toggleColor() {
  var element = document.getElementById("contact-form");
  element.classList.toggle("highlight");
}

// ===== REACT APP ====== //

class ColorTiles extends React.Component {

  render() {

    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("button", { className: "square",
        onMouseOver: this.props.changeBackground,
        onClick: this.props.onClick })));


  }}
;

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: Array(312).fill() };

    this.onClick = this.onClick.bind(this);
  }

  changeBackground(e) {
    e.target.style.background = '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

  onClick() {
    this.forceUpdate();
  }

  render() {


    return /*#__PURE__*/(

      React.createElement("div", { className: "squares" },

      this.state.backgroundColor.map((color, index) => /*#__PURE__*/
      React.createElement(ColorTiles, {
        key: index + '-' + Date.now(),
        changeBackground: this.changeBackground,
        onClick: this.onClick }))));



  }}


ReactDOM.render( /*#__PURE__*/
React.createElement(App, null),
document.getElementById('reactColours'));
