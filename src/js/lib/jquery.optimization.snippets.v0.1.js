/*

 V.P. SNIPPETS v0.11

 1.  createConsole
 2.  checkFormCheckedDisabled
 3.  turnOnPlaceholder
 4.  maxHeight
 5.  maxHeightToParent
 6.  separateBy3
 7.  hasAttribute
 8.  onlyNumbers
 9.  blurOnEnter
 10. checkZeroAndMax
 11. minusOneAndCheckPositive
 12. plusOneAndCheckMax
 13. wrapElements

 */

(function ($) {
  $.fn.createConsole = function () {
    if (typeof(console) === "undefined") {
      console = {};
      console.log = function () {
      };
    }
  };
})(jQuery);


(function ($) {
  window.checkedWorks = false;
  $.fn.checkFormCheckedDisabled = function () {
    $("body").append("<form id='checkFormCss'><input type='checkbox' value='1' name='test' checked='checked'>" +
    "<style type='text/css'>#checkFormCss{height: 0px;overflow: hidden;}#checkFormCss input{width: 100px; display: block; padding: 0; margin:0; border: none;} #checkFormCss input:checked{width: 200px;}</style>" +
    "</form>");
    if (parseInt($("#checkFormCss input").width()) == 200) {
      $("body").addClass("checkedWorks");
      window.checkedWorks = true;
    }
    $("#checkFormCss").remove();
  };
})(jQuery);


(function ($) {
  $.fn.turnOnPlaceholder = function () {
    $('input[placeholder], textarea[placeholder]').placeholder();
  };
})(jQuery);


(function ($) {
  $.fn.maxHeight = function () {

    var max = 0;

    this.each(function () {
      max = Math.max(max, $(this).height());
    });
    this.height(max + "px");
    return max;
  };
})(jQuery);


(function ($) {

  $.fn.maxHeightToParent = function () {

    var max = 0;

    this.each(function () {
      max = Math.max(max, $(this).height());
    });
    this.parent().height(max + "px");

    return max;
  };

})(jQuery);


(function ($) {

  $.fn.separateBy3 = function () {
    var separatedString;
    this.each(function () {
      separatedString = this.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    });
    return separatedString;
  };

})(jQuery);


(function ($) {

  $.fn.hasAttribute = function () {

    var maxVal = parseInt($(this).attr('data-max-number'));
    if (inputVal == 0 || inputVal == "") {
      $(this).val(1);
    }
    else if (typeof maxVal !== 'undefined' && maxVal !== false) {
      maxVal = parseInt($(this).attr("data-max-number"));
      if (inputVal > maxVal) {
        $(this).val(maxVal);
      }
    }
  };

})(jQuery);


(function ($) {

  $.fn.onlyNumbers = function () {
    return this.each(function () {
      $(this).keypress(function (e) {
        if ((e.which != 8) && (e.which != 0) && (e.which < 48 || e.which > 57)) {
          e.preventDefault();
        }
        if (e.which == 13) {
          $(this).blur()
        }

      });
    });
  };

})(jQuery);

(function ($) {

  $.fn.blurOnEnter = function () {
    return this.each(function () {
      $(this).keypress(function (e) {
        if (e.which == 13) {
          $(this).blur()
        }

      });
    });
  };

})(jQuery);


function trimNumber(number) {
  return number.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
}


(function ($) {

  $.fn.checkZeroAndMax = function () {

    return this.each(function () {
      $(this).change(function () {
        var inputVal = $(this).val();
        var maxVal = parseInt($(this).attr('data-max-qnt'));
        if (inputVal == 0 || inputVal == "") {
          $(this).val(1);
        }
        else if (typeof maxVal !== 'undefined' && maxVal !== false) {
          maxVal = parseInt($(this).attr("data-max-qnt"));
          if (inputVal > maxVal) {
            $(this).val(maxVal);
          }
        }
      });
    });

  };

})(jQuery);

(function ($) {

  $.fn.minusOneAndCheckPositive = function (options) {

    var settings = $.extend({
      changeInput: false
    }, options);

    return this.each(function () {
      $(this).click(function (e) {
        e.preventDefault();
        var inputVal = parseInt($(this).parent().find("input").val());
        if (inputVal > 1) {
          $(this).parent().find("input").val(inputVal - 1);
        }
        if (settings.changeInput === true) {
          $(this).parent().find("input").change();
        }
      });
    });

  };

})(jQuery);

(function ($) {

  $.fn.plusOneAndCheckMax = function (options) {

    var settings = $.extend({
      changeInput: false
    }, options);

    return this.each(function () {
      $(this).click(function (e) {
        var inputVal = parseInt($(this).parent().find("input").val());
        var maxVal = parseInt($(this).parent().find("input").attr('data-max-qnt'));
        var inputValPlus = inputVal + 1;

        if (typeof maxVal !== 'undefined' && maxVal !== false) {
          if (maxVal > inputVal) {
            $(this).parent().find("input").val(inputValPlus);
          }
        }
        else {
          $(this).parent().find("input").val(inputValPlus);
        }
        if (settings.changeInput === true) {
          $(this).parent().find("input").change();
        }
        e.preventDefault();
      });
    });

  };

})(jQuery);


(function ($) {
  $.fn.wrapElements = function (options) {

    var defaults = {
      wrapEvery: 1,
      defaultClasses: true,
      extraClasses: false,
      htmlStructure: 'div'
    };

    settings = $.extend({}, defaults, options);

    var elements = $(this).children();
    var elementsLen = elements.length;

    for (var i = 0, numb = 1; i < elementsLen; i += settings.wrapEvery, numb++) {

      // Default Classes Array
      var classes = [];
      if (settings.defaultClasses) {

        classes[0] = 'wrapper';
        classes[1] = 'wrapper-' + numb;

        if (numb == 1) {
          classes[2] = 'first';
        }

        if (numb == Math.ceil(elementsLen / settings.wrapEvery)) {
          classes[2] = 'last';
        }

      }

      // Merge Default class with Extra Class
      if (settings.extraClasses) {
        $.merge(classes, settings.extraClasses);
      }

      // If you find any classes crete the class string
      if (classes.length > 0) {
        htmlClassesString = 'class="' + classes.join(" ") + '"';
      } else {
        htmlClassesString = '';
      }

      elements.filter(':eq(' + i + '), :lt(' + (i + settings.wrapEvery) + '):gt(' + i + ')')
        .wrapAll('<' + settings.htmlStructure + ' ' + htmlClassesString + ' />');

    }

    return $(this);
  };
})(jQuery);