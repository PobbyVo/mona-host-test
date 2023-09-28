export default function ImgCompareModule() {
  const viewers = document.querySelectorAll(".image-compare");
  let configs = [
    {
      controlColor: "#fff",
      controlShadow: false,
      addCircle: true,
      controlShadow: false,
      smoothing: true,
      smoothingAmount: 300,
      // hoverStart: true,
    },
  ];
  viewers.forEach((element, i) => {
    let view = new ImageCompare(element, configs[i]).mount();
  });
}
