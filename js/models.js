var popover = (function () {
  var buttons = {
    knowMore: ".knowMore",
    highlySecure: ".highlysecure",
    howSecureWeAre: ".faq-1",
    aboutDocument: ".faq-2",
    aboutMyTrustee: ".faq-3",
    aboutPassword: ".faq-4",
    navbar: ".navbar",
    close: ".model-close",
  };

  var modals = {
    commonClose: ".ownModel", // common class for all the models
    videoMdl: ".videoBtn",
    highSecure: ".highSecure",
    howSecure: ".howsecure",
    aboutDoc: ".aboutdocument",
    aboutTrustee: ".aboutMyBeneficiary",
    aboutPwdAndEncy: ".aboutpassword",
  };

  return {
    getDomStrings: function () {
      return {
        topNav: document.querySelector(buttons.navbar),
        closeBtn: document.querySelectorAll(buttons.close), // all close buttons
        knowMoreBtn: document.querySelector(buttons.knowMore),
        highlySecureBtn: document.querySelector(buttons.highlySecure),
        howSecureWeAreBtn: document.querySelector(buttons.howSecureWeAre),
        aboutDocumentBtn: document.querySelector(buttons.aboutDocument),
        aboutMyTrusteeBtn: document.querySelector(buttons.aboutMyTrustee),
        aboutPasswordBtn: document.querySelector(buttons.aboutPassword),
      };
    },
    getModels: function () {
      return {
        commonCloseMdl: document.querySelectorAll(modals.commonClose), // common element for all models
        durityVideoMdl: document.querySelector(modals.videoMdl),
        highlySecureMdl: document.querySelector(modals.highSecure),
        howSecureWeAreMdl: document.querySelector(modals.howSecure),
        aboutDocMdl: document.querySelector(modals.aboutDoc),
        aboutMyTrusteeMdl: document.querySelector(modals.aboutTrustee),
        aboutPwdAndEncyMdl: document.querySelector(modals.aboutPwdAndEncy),
      };
    },
  };
})();

// pop-up trigger
var allElements = popover.getDomStrings();

// all models
var allModels = popover.getModels();

// ---------------------------------------------------------
// knowMore link
allElements.knowMoreBtn.addEventListener("click", function () {
  allModels.durityVideoMdl.style.display = "block";
  allElements.topNav.classList.remove("show");
  allElements.topNav.classList.add("hide");
});

// highly Secure
allElements.highlySecureBtn.addEventListener("click", function () {
  allModels.highlySecureMdl.style.display = "block";
});

// How Secure We Are
allElements.howSecureWeAreBtn.addEventListener("click", function () {
  allModels.howSecureWeAreMdl.style.display = "block";
});

// About Document
allElements.aboutDocumentBtn.addEventListener("click", function () {
  allModels.aboutDocMdl.style.display = "block";
});

// About Document
allElements.aboutMyTrusteeBtn.addEventListener("click", function () {
  allModels.aboutMyTrusteeMdl.style.display = "block";
});

// About password and encryption
allElements.aboutPasswordBtn.addEventListener("click", function () {
  allModels.aboutPwdAndEncyMdl.style.display = "block";
});

// console.log(allElements.closeBtn)
// console.log(allModels.commonCloseMdl);

// --------------------------------------------------------
// all modals common closing

allElements.closeBtn[0].addEventListener("click", function () {
  allModels.commonCloseMdl[0].style.display = "none";
  allElements.topNav.classList.remove("hide");
  allElements.topNav.classList.add("show");
});

allElements.closeBtn[1].addEventListener("click", function () {
  allModels.commonCloseMdl[1].style.display = "none";
});

allElements.closeBtn[2].addEventListener("click", function () {
  allModels.commonCloseMdl[2].style.display = "none";
});

allElements.closeBtn[3].addEventListener("click", function () {
  allModels.commonCloseMdl[3].style.display = "none";
});

allElements.closeBtn[4].addEventListener("click", function () {
  allModels.commonCloseMdl[4].style.display = "none";
});

allElements.closeBtn[5].addEventListener("click", function () {
  allModels.commonCloseMdl[5].style.display = "none";
});
