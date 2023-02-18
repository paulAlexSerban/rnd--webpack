import Heading from "../heading/heading.js";
import KiwiImage from "../kiwi-image/kiwi-image.js";

class KiwiPage {
  render() {
    const heading = new Heading();
    heading.render("kiwi");
    const kiwiImage = new KiwiImage();
    kiwiImage.render();

    import('ImageCaptionApp/ImageCaption')
      .then(ImageCaptionModule => {
        const ImageCaption = ImageCaptionModule.default;
        const imageCaption = new ImageCaption();
        imageCaption.render('Kiwi image is parent module for image caption')
      })
  }
}

export default KiwiPage;
