export default function AnnotationModule() {
  const annotate = RoughNotation.annotate;
  const text_underline = document.querySelectorAll(".text-underline");
  text_underline.forEach((element) => {
    const annotation = annotate(element, {
      type: "underline",
      color: "#FFA51F",
      strokeWidth: "1rem",
    });
    annotation.show();
  });
  // const text_cricle = document.querySelectorAll(".text-circle");
  // text_cricle.forEach((element) => {
  //   const annotation = annotate(element, {
  //     type: "circle",
  //     color: "#7C0FD1",
  //   });
  //   annotation.show();
  // });
}
