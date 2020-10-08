$(document).ready(function() {
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
});
/* end of slick script */
(function($) {
  $.fn.changeWords = function(options) {
    var settings = $.extend(
      {
        time: 1500,
        animate: "zoomIn",
        selector: "span",
        repeat: true
      },
      options
    );
    var wordCount = $(settings.selector, this).length;
    var words = $(settings.selector, this);
    words
      .filter(function() {
        return $(this).attr("data-id") != "1";
      })
      .css("display", "none");
    var count = 1;
    var changeThisWord = setInterval(function() {
      ++count;
      var wordOrder = count;
      words
        .filter(function() {
          return $(this).attr("data-id") == wordOrder;
        })
        .addClass("animated " + settings.animate)
        .css("display", "inline-block");
      words
        .filter(function() {
          return $(this).attr("data-id") != wordOrder;
        })
        .css("display", "none")
        .removeClass();
      if (count == wordCount) {
        count = 0;
      }
      if (count == 0 && settings.repeat != true) {
        clearInterval(changeThisWord);
      }
    }, settings.time);
  };
})(jQuery);

/* schedule a demo script */
$(document).ready(function() {
  function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    generic_domains = ['gmail','yahoo','aol','rediffmail','outlook','hotmail']
    email_domain = email.toLowerCase().split('@')[1]
    email_domain = email_domain.split('.')[0]
    if (generic_domains.indexOf(email_domain) >-1) return false;
    return regex.test(email);
  }
  function IsMobileNumber(txtMobId) {
    var mob = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;
    return mob.test(txtMobId);
  
  }
 
  $("#trial_form_submit").click(function() {
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
    var accmobile = $("#mobile").val();
    var acccompany = $("#company_name").val();
    var acclastname = $("#lastname").val();
    if (accname == "") {
  //    $("#form_error")
    //    .html("Please enter your <strong>Name</strong>")
     //   .attr("style", "");
      $("#firstname")
        .focus()
        .attr("style", "border-color:red");
      $(this).attr("disabled", false);
     // 		$(window).scrollTop($('#form_error').offset().top);
  //    $("html, body").animate(
  //      {
  //        scrollTop: $("#form_error").offset().top
    //    },
   //     100
    //  );
      return false;
    } else {
      //$("#form_error").html("").css("display","none");
      $("#firstname").attr("style", "");
    }
    if (accemail == "") {
    //  $("#form_error")
  //      .html("Please enter your <strong>Email</strong>")
    //    .attr("style", "");
      $("#email")
        .focus()
        .attr("style", "border-color:red");
      $(this).attr("disabled", false);
    //  		$(window).scrollTop($('#form_error').offset().top);
  /*    $("html, body").animate(
        {
          scrollTop: $("#form_error").offset().top
        },
        100
      );*/
      return false;
    } else {
      if (!isEmail(accemail)) {
    //    $("#form_error")
    //      .attr("style", "")
    //      .html("Please enter valid <strong>Email</strong>");
        $("#email")
          .focus()
          .attr("style", "border-color:red");
        $(this).attr("disabled", false);
    //    $("html, body").animate(
    //      {
    //        scrollTop: $("#form_error").offset().top
     //     },
     //     100
    //    );
        return false;
      } else {
        $("#email").attr("style", "");
      }
    }
    if (accmobile == "") {
   //   $("#form_error")
  //      .attr("style", "")
   //     .html("Please enter your <strong>Mobile</strong>");
  //    $("#form_success")
   //     .attr("style", "display:none")
    //    .html("");
      $("#mobile")
        .focus()
        .attr("style", "border-color:red");
      $(this).attr("disabled", false);
 //     $("html, body").animate(
   //     {
   //       scrollTop: $("#trial_form_submit").offset().top
   //     },
   //     100
   //   );
      return false;
    } else {
      if (!IsMobileNumber(accmobile)) {
   //     $("#form_success")
   //       .attr("style", "display:none")
   //       .html("");
    //    $("#form_error")
    //      .attr("style", "")
    //      .html("Please enter valid <strong>Mobile</strong>");
        $("#mobile")
          .focus()
          .attr("style", "border-color:red");
        $(this).attr("disabled", false);
        //		$(window).scrollTop($('#form_error').offset().top);
   //     $("html, body").animate(
    //      {
    //        scrollTop: $("#form_error").offset().top
    //      },
    //      100
    //    );
        return false;
      } else {
        $("#mobile").attr("style", "");
      }
    }
    if (acccompany == "") {
    //  $("#form_error")
    //    .html("Please enter <strong>Company Name</strong>")
    //    .attr("style", "");
   //   $("#form_success")
    //    .attr("style", "display:none")
    //    .html("");
      $("#company_name")
        .focus()
        .attr("style", "border-color:red");
      $(this).attr("disabled", false);
      //		$(window).scrollTop($('#form_error').offset().top);
  //    $("html, body").animate(
   //     {
   //       scrollTop: $("#form_error").offset().top
   //     },
   //     100
   //   );
      return false;
    } else {
      //$("#form_error").html("").css("display","none");
      $("#company_name").attr("style", "");
    }

    if (!$("#check-box").prop("checked")) {
      alert("Kindly agree the terms and conditions");
      $(this).attr("disabled", false);
      return false;
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
          "Phone no" : accmobile,
          "Email" : accemail,
          "Company Name" : acccompany,
          "First Name" : accname
          },
          success: function(json) {
          console.log(json.response + ": " + json.response_code);
          },
          error: function(xhr, errmsg, err){
          console.log(xhr.status + ": " + xhr.responseText);
          }
          });
        window.location.replace("schedule-a-demo/thank-you.html");
      } else {
        alert("Some error has been occured. Kindly, reach us by call");
        return false;
      }
    });
    
  return true;
});

$("#submit-popup").click(function() {
  var res = $('input[name=reasons]:checked').val();
  $.ajax({
    url:
      "//dbwurnhx7g.execute-api.ap-south-1.amazonaws.com/default/googlebot",
    //url: "http://localhost:8000/lead/apiwebhook/ab0b44cd-9b09-4742-8df4-c2b160f74c76/",
    type: "POST",
  //  dataType: "json",
    data: {
      response: res,
      responsetype:'peopleleft'
    },
    success: function(json) {
      console.log(json.response + ": " + json.response_code);
    },
    error: function(xhr, errmsg, err) {
      console.log(xhr.status + ": " + xhr.responseText);
    }
  });
  window.location.replace("schedule-a-demo/thank-you.html");

});
});