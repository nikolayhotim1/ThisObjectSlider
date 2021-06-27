let slider1 = {
    imagesUrls: [],
    currentImageIndex: 0,
    showPrevBtn: document.getElementById("show_prev_btn"),
    showNextBtn: document.getElementById("show_next_btn"),
    slideImage: document.getElementById("slide_img"),

    start: function () {
        let that = this;

        // subscribe to events
        this.showPrevBtn.addEventListener("click", function (e) {
            that.onShowPrevBtnClick(e);
        });

        this.showNextBtn.addEventListener("click", function (e) {
            that.onShowNextBtnClick(e);
        });

        // create images array
        this.imagesUrls.push("https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mclaren-765lt-101-1583186188.jpg?crop=0.671xw:0.570xh;0.147xw,0.351xh&resize=1200:*");
        this.imagesUrls.push("https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-ferrari-f8-spyder-112-1593551723.jpg?crop=0.795xw:0.671xh;0.131xw,0.212xh&resize=1200:*");
        this.imagesUrls.push("https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-mercedes-amg-gt-black-series-118-1601842340.jpg?crop=0.653xw:0.490xh;0.298xw,0.352xh&resize=980:*");
        this.imagesUrls.push("https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-porsche-911-turbo-s-coupe-101-1586288365.jpg?crop=0.764xw:0.647xh;0.120xw,0.212xh&resize=1200:*");

        this.slideImage.src = this.imagesUrls[this.currentImageIndex];
        this.showPrevBtn.disabled = true;
    },

    onShowPrevBtnClick: function (e) {
        this.currentImageIndex--;
        this.slideImage.src = this.imagesUrls[this.currentImageIndex];
        this.showNextBtn.disabled = false;

        // disable prev button if need
        if (this.currentImageIndex === 0) {
            this.showPrevBtn.disabled = true;
        }
    },

    onShowNextBtnClick: function (e) {
        this.currentImageIndex++;
        this.slideImage.src = this.imagesUrls[this.currentImageIndex];
        this.showPrevBtn.disabled = false;

        // disable next button if need
        if (this.currentImageIndex === (this.imagesUrls.length - 1)) {
            this.showNextBtn.disabled = true;
        }
    }
};