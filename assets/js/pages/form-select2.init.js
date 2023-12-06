"use strict";
  
$(function () {
    var direction = $("html").attr("dir") === "rtl" ? "rtl" : "ltr"; 
    
    $(".select2").each(function () {  
        var placeholder = $(this).attr("placeholder") || "";
        var allowClear = $(this).is("[allowClear]");
        var tags = $(this).is("[tags]");
        var multiple = $(this).is("[multiple]");
        var search = $(this).is("[search]");
        var maximumSelectionLength = $(this).is("[max]") || Infinity;
        if(tags== true){
            multiple = true;
        } 
         
        $(this).select2({
            dir: direction,
            dropdownAutoWidth: true,
            placeholder: placeholder,
            allowClear: allowClear,
            minimumResultsForSearch: search,
            maximumSelectionLength: maximumSelectionLength,
            multiple: multiple,  
            tags: tags
        });
    });

  
});
