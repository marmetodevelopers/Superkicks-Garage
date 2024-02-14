if (!customElements.get('product-modal')) {
  customElements.define('product-modal', class ProductModal extends ModalDialog {
    constructor() {
      super();
    }

    hide() {
      super.hide();
    }

    show(opener) {
      super.show(opener);
      this.showActiveMedia();
    }

    showActiveMedia() {
      this.querySelectorAll(`[data-media-id]:not([data-media-id="${this.openedBy.getAttribute("data-media-id")}"])`).forEach((element) => {
          element.classList.remove('active');
        }
      )
      const activeMedia = this.querySelector(`[data-media-id="${this.openedBy.getAttribute("data-media-id")}"]`);
      const activeMediaTemplate = activeMedia.querySelector('template');
      const activeMediaContent = activeMediaTemplate ? activeMediaTemplate.content : null;
      activeMedia.classList.add('active');
      activeMedia.scrollIntoView();

      const container = this.querySelector('[role="document"]');
      container.scrollLeft = (activeMedia.width - container.clientWidth) / 2;

      if (activeMedia.nodeName == 'DEFERRED-MEDIA' && activeMediaContent && activeMediaContent.querySelector('.js-youtube'))
        activeMedia.loadContent();
    }
  });
}


// SIMPL BUTTON DISABLE


//Manuplating Simpl on product

// const pdpPage = async () => {
//   try {
//     const checkoutProduct = document.querySelector("#simpl-checkout-product-v2");
//     const fcfsElement = document.querySelector(".product-form-fcfs");
//     const target = document.querySelector("button[name='add']");

//     if (!fcfsElement && !checkoutProduct) {
//       target.insertAdjacentHTML("afterend", `<div id="simpl-checkout-product-v2" class="simpl-button-container"></div>`);
//     }

//   } catch (e) {
//     console.log("!!ERROR while request", e);
//   }
// };






