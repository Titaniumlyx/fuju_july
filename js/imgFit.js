let imgFit = {
    setBannerHeight(){
        let el = imgFit.dom;
        let header = document.querySelector(".header");
        let headerHeight = header.offsetHeight;
        let bodyHeight = document.documentElement.clientHeight || document.body.clientHeight;
        let bodyWidth = document.documentElement.clientWidth || document.body.clientWidth;
        let bannerHeight = bodyHeight - headerHeight;
        let imgs = el.querySelectorAll(".swiper-wrapper img").length==0?el.querySelectorAll("img"):el.querySelectorAll(".swiper-wrapper img");
        let bannerRatio = bodyWidth/bannerHeight;

        el.style.height = bannerHeight + "px";
        imgs = Array.from(imgs);
        imgs.forEach(item => {
            let imgRatio = item.offsetWidth/item.offsetHeight;
            if(bannerRatio>imgRatio){
                item.style.width = bodyWidth + "px";
                item.style.height = "auto";
                item.style.marginTop = (bannerHeight - item.offsetHeight)/2 + "px";
                item.style.marginLeft = "0px"
            }else{
                item.style.width = "auto";
                item.style.height = bannerHeight + "px";
                item.style.marginTop = "0px";
                item.style.marginLeft = (bodyWidth - item.offsetWidth)/2 + "px";
            }
        })
    },
    dom: null,
    bindHandle(){
        window.addEventListener('resize',imgFit.setBannerHeight);
    },
    unbindHandle(){
        window.removeEventListener('resize',imgFit.setBannerHeight);
        imgFit.dom = null;
    }
};

export default imgFit;