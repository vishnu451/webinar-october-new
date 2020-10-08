$(document).ready(function() {
  try {
    $(".customer-logos").slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 520,
          settings: {
            slidesToShow: 3
          }
        }
      ]
    });
  } catch (error) {
    console.log("slick is not a function", error);
  }
});

/* End of slick script */

(function($) {
  $.fn.scrollingTo = function(opts) {
    var defaults = {
      animationTime: 1000,
      easing: "",
      callbackBeforeTransition: function() {},
      callbackAfterTransition: function() {}
    };

    var config = $.extend({}, defaults, opts);

    $(this).click(function(e) {
      var eventVal = e;
      e.preventDefault();

      var $section = $(document).find($(this).data("section"));
      if ($section.length < 1) {
        return false;
      }

      if ($("html, body").is(":animated")) {
        $("html, body").stop(true, true);
      }

      var scrollPos = $section.offset().top;

      if ($(window).scrollTop() == scrollPos) {
        return false;
      }

      config.callbackBeforeTransition(eventVal, $section);

      $("html, body").animate(
        {
          scrollTop: scrollPos + "px"
        },
        config.animationTime,
        config.easing,
        function() {
          config.callbackAfterTransition(eventVal, $section);
        }
      );
    });
  };
})(jQuery);

jQuery(document).ready(function() {
  "use strict";
  new WOW().init();

  (function() {
    jQuery(".smooth-scroll").scrollingTo();
  });
});

$(document).ready(function() {
  $(window).scroll(function() {
    if ($(window).scrollTop() > 50) {
      $(".navbar-brand a").css("color", "#fff");
      $("#top-bar").removeClass("animated-header");
    } else {
      $(".navbar-brand a").css("color", "inherit");
      $("#top-bar").addClass("animated-header");
    }
  });
});

// Click To Call
$(document).ready(function() {
  function IsMobileNumber(txtMobId) {
    var mob = /^[1-9]{1}[0-9]{9}$/;
    return mob.test(txtMobId);
  }
  $("#cl2call").click(function() {
    var teleduce_mobile = $("#cl2call_mobile").val();
    var teleduce_to_mobile = $("#cl2call_to_mobile").val();
    if (teleduce_mobile == "") {
      $("#cl2call_form_error")
        .attr("style", "")
        .html("Please enter <strong>Mobile number</strong>");
      $("#cl2call_form_error").show();
      $("#cl2call_mobile")
        .focus()
        .attr("style", "border-color:red");
      $(window).scrollTop($("#cl2call_form_error").offset().top);
      return false;
    } else {
      if (!IsMobileNumber(teleduce_mobile)) {
        $("#cl2call_form_error")
          .attr("style", "")
          .html("Please enter valid <strong>Mobile number</strong>");
        $("#cl2call_form_error").show();
        $("#cl2call_mobile")
          .focus()
          .attr("style", "border-color:red");
        $(window).scrollTop($("#cl2call_form_error").offset().top);
        return false;
      } else {
        $("#cl2call_form_error")
          .attr("style", "")
          .html("");
        $("#cl2call_form_error").hide();
        $("#cl2call_mobile").attr("style", "");
      }
    }
    // if (teleduce_to_mobile == ""){
    // 	$("#cl2call_form_error").attr("style","").html("Please enter <strong>To Mobile number</strong>");
    // 	$("#cl2call_form_error").show();
    // 	$('#cl2call_to_mobile').focus().attr("style","border-color:red");
    // 	$(window).scrollTop($('#cl2call_form_error').offset().top);
    // 	return false;
    // }
    // else{
    //     if (!IsMobileNumber(teleduce_to_mobile)){
    //         $("#cl2call_form_error").attr("style","").html("Please enter valid <strong>To Mobile number</strong>");
    //         $("#cl2call_form_error").show();
    //         $('#cl2call_to_mobile').focus().attr("style","border-color:red");
    //         $(window).scrollTop($('#cl2call_form_error').offset().top);
    //         return false;
    //     }
    //     else{
    //         $("#cl2call_form_error").attr("style","").html("");
    //         $("#cl2call_form_error").hide();
    //         $('#cl2call_to_mobile').attr("style","");
    //     }
    // }
    call_latch_url =
      "https://teleduce.in/calllatch/partha/partha/" +
      teleduce_mobile +
      "/9036164750/8067335515/?async=true";

    try {
      var ajaxRequest = new XMLHttpRequest();
      ajaxRequest.onreadystatechange = function() {
        if (ajaxRequest.readyState == 4) {
          console.log(ajaxRequest.responseText);
          $("#cl2call_form_success")
            .attr("style", "")
            .html("Call Triggered Successfully");
          $(window).scrollTop($("#cl2call_form_success").offset().top);
          return false;
        }
      };
      // Production URL
      ajaxRequest.open("GET", call_latch_url, true);
      ajaxRequest.send(null);
    } catch (e) {
      console.log(e);
    }
  });
});

$("#trial_form_submit_webinar").click(function() {
  $(this).attr("disabled", true);
  $("#form_success")
    .attr("style", "display:none")
    .html("");
  var to_list = [
    { email_id: "marketing@corefactors.in", name: "Corefactors Marketing" },
    { email_id: "nagarjunan.d@corefactors.in", name: "Naga" }
  ];
  var accname = $("#firstname").val();
  var accemail = $("#email").val();
  var acclastname = $("#lastname").val();
  if (accname == "") {
    $("#firstname")
      .focus()
      .attr("style", "border-color:red");
    $(this).attr("disabled", false);
     return false;
  } else {
    
    $("#firstname").attr("style", "");
  }
  if (accemail == "") {
  
    $("#email")
      .focus()
      .attr("style", "border-color:red");
    $(this).attr("disabled", false);
  
    return false;
  } else {
    if (!isEmail(accemail)) {
  
      $("#email")
        .focus()
        .attr("style", "border-color:red");
      $(this).attr("disabled", false);
 
      return false;
    } else {
      $("#email").attr("style", "");
    }
  }
  
  htmlcontent =
    '<html><head><title></title></head><body><p style="text-align: center;"><img alt="" src="//teleduce.in/media/sendy_email_template/logo-blue_1.png" style="width: 250px; height: 58px;" /></p><div style="background:#eee;border:1px solid #ccc;padding:5px 10px;">';
  htmlcontent +=
    '<p><span style="font-size:16px;"><kbd><samp><span style="font-family:times new roman;"><strong>Name &nbsp; &nbsp; :</strong>&nbsp;' +
    accname +
    '</span></samp></kbd></span></p><p><span style="font-size:16px;"><kbd><samp><span style="font-family:times new roman;">';
  htmlcontent +=
    '<strong>Mobile &nbsp; :</strong> </span></samp></kbd></span><span style="font-family: &quot;times new roman&quot;; font-size: 16px; background-color: rgb(238, 238, 238);">' +
    accmobile.toString() +
    '</span></p><p><span style="font-size:16px;"><kbd><samp>';
  htmlcontent +=
    '<span style="font-family:times new roman;"><strong>Email &nbsp; &nbsp; :&nbsp;</strong></span></samp></kbd></span><span style="font-family: &quot;times new roman&quot;; font-size: 16px; background-color: rgb(238, 238, 238);">' +
    accemail +
    "</span></p><p>";
  htmlcontent +=
    '<span style="font-size:16px;"><kbd><samp><font face="times new roman"><b>Company :&nbsp;</b></font></samp></kbd></span><span style="font-family: &quot;times new roman&quot;; font-size: 16px; background-color: rgb(238, 238, 238);">' +
    acccompany +
    "</span></p>";
  htmlcontent +=
    '</div><p style="text-align: center;">&nbsp;<span class="il" style="color: rgb(34, 34, 34); font-family: arial, sans-serif; font-size: 12.8px; text-align: -webkit-center; background-color: rgb(255, 255, 255);">Copyright</span>';
  htmlcontent +=
    '<span style="color: rgb(34, 34, 34); font-family: arial, sans-serif; font-size: 12.8px; text-align: -webkit-center; background-color: rgb(255, 255, 255);">&nbsp;&copy;2016&nbsp;<a href="http://www.corefactors.in">http://www.corefactors.in</a></span></p></body></html>';
  var email_message = {
    html_content: htmlcontent,
    subject: "New Contact from Corefactors",
    from_mail: "support@corefactors.in",
    from_name: "Corefactors Support",
    reply_to: "support@corefactors.in",
    to_recipients: to_list
  };
  var payload = { message: email_message };
  var single_content = { mail_datas: payload };

  var emailurl =
    "https://teleduce.in/send-email-json-otom/b946312a-89c1-4fe9-a7b3-0db1b7ade389/1004/";
  $.post(emailurl, JSON.stringify(single_content), function(data, status) {
    $("#contact-form").trigger("reset");
    if (data.response_code == "5011") {
      // alert("Thanks! for choosing corefactors. We will contact you shortly");
      $.ajax({
        url: 'https://teleduce.corefactors.in/lead/apiwebhook/32c17645-575d-4ffe-bd89-0a80622b47f2/ScheduleADemo/',
        type: "POST",
        dataType: "json",
        data: {
        "Last Name" : acclastname,
        "Email" : accemail,
        "First Name" : accname
        },
        success: function(json) {
        console.log(json.response + ": " + json.response_code);
        window.location.replace("https://corefactors.gr8.com//thank_you.html");
        },
        error: function(xhr, errmsg, err){
        console.log(xhr.status + ": " + xhr.responseText);
        window.location.replace("https://corefactors.gr8.com//thank_you.html");
        }
        });
    
    } else {
      alert("Some error has been occured. Kindly, reach us by call");
      return false;
    }
  });
  
return true;
});

// fancybox
// $(".fancybox").fancybox({
//     padding: 0,
//
//     openEffect : 'elastic',
//     openSpeed  : 450,
//
//     closeEffect : 'elastic',
//     closeSpeed  : 350,
//
//     closeClick : true,
//     helpers : {
//         title : {
//             type: 'inside'
//         },
//         overlay : {
//             css : {
//                 'background' : 'rgba(0,0,0,0.8)'
//             }
//         }
//     }
// });

/* Fun Fact with Count Animation */

/* Client Carousal */
// $(document).on('ready', function() {
//     $('.client-table').slick({
//         dots: false,
//         infinite: true,
//         arrows: true,
//         speed: 2000,
//         autoplaySpeed: 2000,
//         autoplay: true,
//         slidesToShow: 5,
//         slidesToScroll: 1,
//         responsive: [{breakpoint: 992, settings: {slidesToShow: 3, slidesToScroll: 1}}, {
//             breakpoint: 768,
//             settings: {slidesToShow: 2, slidesToScroll: 2}
//         }, {breakpoint: 409, settings: {slidesToShow: 1, slidesToScroll: 1}}]
//     });
// });
