var TxtType = function (el, toRotate, period, keepLast=false) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
    this.keepLast = keepLast
};

TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;

    var fullTxt = this.toRotate[i];
    
    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {

        if (this.loopNum == (this.toRotate.length -1) && this.keepLast){
            display_prompt()
            return
        }
 
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;

    }
    if (this.loopNum == this.toRotate.length) {
        return;
    }
    setTimeout(function () {
        that.tick();
    }, delta);

};

window.addEventListener("load", (event) => {
    var elements = document.getElementsByClassName('typewrite');
    
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        var keeplast = elements[i].getAttribute('keep-last');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period, keeplast);
        }
    }
  });

function display_prompt(){
    var prompt = document.getElementById('main-control')
    prompt.style.visibility = "visible"
    prompt.classList.add("popInAnimation")
}
