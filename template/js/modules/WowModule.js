export default function WowModule() {
  var wow = new WOW({
    boxClass: "wow", // default
    animateClass: "animated", // default
    offset: 100, // default
    mobile: false,
    live: true, // default
  });
  wow.init();
}
