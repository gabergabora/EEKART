////parth no code
function hei(pdff){

    location.replace("https://eekaart.herokuapp.com/product");
    
    // document.getElementById(pdff).children[1].innerHTML="hii";
    localStorage.setItem("pmk", document.getElementById(pdff).children[1].children[0].innerHTML);
    localStorage.setItem("mkp", document.getElementById(pdff).children[1].children[1].innerHTML);
    localStorage.setItem("kmp", document.getElementById(pdff).children[1].children[2].innerHTML);
    localStorage.setItem("kkk", document.getElementById(pdff).children[0].children[0].src);
    localStorage.setItem("1n", document.getElementById(pdff).children[0].children[1].src);
    localStorage.setItem("2n", document.getElementById(pdff).children[0].children[2].src);
    localStorage.setItem("3n", document.getElementById(pdff).children[0].children[3].src);


  }

  function heei(pdff){

    location.replace("https://eekaart.herokuapp.com/product");
    
    // document.getElementById(pdff).children[1].innerHTML="hii";
    localStorage.setItem("pmk", document.getElementById(pdff).children[0].children[1].children[0].innerHTML);
    localStorage.setItem("mkp", document.getElementById(pdff).children[0].children[1].children[1].innerHTML);
    localStorage.setItem("kmp", document.getElementById(pdff).children[0].children[1].children[2].innerHTML);
    localStorage.setItem("kkk", document.getElementById(pdff).children[0].children[0].children[0].src);
    localStorage.setItem("1n", document.getElementById(pdff).children[0].children[1].src);
    localStorage.setItem("2n", document.getElementById(pdff).children[0].children[2].src);
    localStorage.setItem("3n", document.getElementById(pdff).children[0].children[3].src);


  }


function change() {
    var x = document.getElementById('input');

    document.getElementById('p').innerHTML = x.value;

}
const cmd = () => {
    var x = document.getElementById("")
}

const showCart = () => {
    var x = document.getElementById("Body");


}

// const productPage = () => {
//     document.getElementById("TEST").children[1].innerHTML="hii";
    
//     location.replace("http://localhost:3000/product");
     
//     //  document.getElementById("xuxu").innerHTML;
//     // document.getElementById("TEST").children[1].innerHTML;
   
 
    

     
// }
// document.getElementById("xuxu").innerHTML="helo";






// document.getElementById("TEST").addEventListener('click', function(e) {
//     e = e || window.event;
//     console.log("this is", this);
//     console.log("e", e);
//     console.log("e.target", e.target)
//     var target = e.target || e.srcElement,
//         text = target.textContent || target.innerText;
//     console.log(
//         "TEST"
//     );
// }, false);

// const productPage=()=>{
//     var x=document.getElementById("TEST");
//     const child=x.children[1];
//     var y=document.getElementsByClassName("title");
//     y.children[0].innerHTML=child.innerHTML;
// }

function toggleSidebar(ref) {

    document.getElementById("sidebar").style.display = "block";
    document.getElementById("sidebar").classList.toggle('active');
}






$(document).ready(function() {
    var itemsMainDiv = ('.MultiCarousel');
    var itemsDiv = ('.MultiCarousel-inner');
    var itemWidth = "";

    $('.leftLst, .rightLst').click(function() {
        var condition = $(this).hasClass("leftLst");
        if (condition)
            click(0, this);
        else
            click(1, this)
    });

    ResCarouselSize();




    $(window).resize(function() {
        ResCarouselSize();
    });

    function ResCarouselSize() {
        var incno = 0;
        var dataItems = ("data-items");
        var itemClass = ('.itemc');
        var id = 0;
        var btnParentSb = '';
        var itemsSplit = '';
        var sampwidth = $(itemsMainDiv).width();
        var bodyWidth = $('body').width();
        $(itemsDiv).each(function() {
            id = id + 1;
            var itemNumbers = $(this).find(itemClass).length;
            btnParentSb = $(this).parent().attr(dataItems);
            itemsSplit = btnParentSb.split(',');
            $(this).parent().attr("id", "MultiCarousel" + id);


            if (bodyWidth >= 1200) {
                incno = itemsSplit[3];
                itemWidth = sampwidth / incno;
            } else if (bodyWidth >= 992) {
                incno = itemsSplit[2];
                itemWidth = sampwidth / incno;
            } else if (bodyWidth >= 768) {
                incno = itemsSplit[1];
                itemWidth = sampwidth / incno;
            } else {
                incno = itemsSplit[0];
                itemWidth = sampwidth / incno;
            }
            $(this).css({ 'transform': 'translateX(0px)', 'width': itemWidth * itemNumbers });
            $(this).find(itemClass).each(function() {
                $(this).outerWidth(itemWidth);
            });

            $(".leftLst").addClass("over");
            $(".rightLst").removeClass("over");

        });
    }

    function ResCarousel(e, el, s) {
        var leftBtn = ('.leftLst');
        var rightBtn = ('.rightLst');
        var translateXval = '';
        var divStyle = $(el + ' ' + itemsDiv).css('transform');
        var values = divStyle.match(/-?[\d\.]+/g);
        var xds = Math.abs(values[4]);
        if (e == 0) {
            translateXval = parseInt(xds) - parseInt(itemWidth * s);
            $(el + ' ' + rightBtn).removeClass("over");

            if (translateXval <= itemWidth / 2) {
                translateXval = 0;
                $(el + ' ' + leftBtn).addClass("over");
            }
        } else if (e == 1) {
            var itemsCondition = $(el).find(itemsDiv).width() - $(el).width();
            translateXval = parseInt(xds) + parseInt(itemWidth * s);
            $(el + ' ' + leftBtn).removeClass("over");

            if (translateXval >= itemsCondition - itemWidth / 2) {
                translateXval = itemsCondition;
                $(el + ' ' + rightBtn).addClass("over");
            }
        }
        $(el + ' ' + itemsDiv).css('transform', 'translateX(' + -translateXval + 'px)');
    }

    //It is used to get some elements from btn
    function click(ell, ee) {
        var Parent = "#" + $(ee).parent().attr("id");
        var slide = $(Parent).attr("data-slide");
        ResCarousel(ell, Parent, slide);
    }

});

function signin() {
    location.replace("https://eekaart.herokuapp.com/signin");
}

function retn() {
    location.replace("https://eekaart.herokuapp.com/");
}