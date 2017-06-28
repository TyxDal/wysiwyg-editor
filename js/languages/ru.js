/*!
 * froala_editor v2.6.3 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2017 Froala Labs
 */

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node/CommonJS
        module.exports = function( root, jQuery ) {
            if ( jQuery === undefined ) {
                // require('jQuery') returns a factory that requires window to
                // build a jQuery instance, we normalize how we use modules
                // that require this pattern but the window provided is a noop
                // if it's defined (how jquery works)
                if ( typeof window !== 'undefined' ) {
                    jQuery = require('jquery');
                }
                else {
                    jQuery = require('jquery')(root);
                }
            }
            return factory(jQuery);
        };
    } else {
        // Browser globals
        factory(window.jQuery);
    }
}(function ($) {
/**
 * Russian
 */

$.FE.LANGUAGE['ru'] = {
  translation: {
    // Place holder
    "Type something": "\u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u0447\u0442\u043e\u002d\u043d\u0438\u0431\u0443\u0434\u044c",

    // Basic formatting
    "Bold": "\u0416\u0438\u0440\u043d\u044b\u0439",
    "Italic": "\u041a\u0443\u0440\u0441\u0438\u0432",
    "Underline": "\u041f\u043e\u0434\u0447\u0435\u0440\u043a\u043d\u0443\u0442\u044b\u0439",
    "Strikethrough": "\u0417\u0430\u0447\u0435\u0440\u043a\u043d\u0443\u0442\u044b\u0439",

    // Main buttons
    "Insert": "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c",
    "Delete": "\u0423\u0434\u0430\u043b\u0438\u0442\u044c",
    "Cancel": "\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c",
    "OK": "\u041e\u043a",
    "Back": "\u043d\u0430\u0437\u0430\u0434",
    "Remove": "\u0423\u0434\u0430\u043b\u0438\u0442\u044c",
    "More": "\u0411\u043e\u043b\u044c\u0448\u0435",
    "Update": "\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c",
    "Style": "\u0421\u0442\u0438\u043b\u044c",

    // Font
    "Font Family": "\u0428\u0440\u0438\u0444\u0442",
    "Font Size": "\u0420\u0430\u0437\u043c\u0435\u0440 \u0448\u0440\u0438\u0444\u0442\u0430",

    // Colors
    "Colors": "\u0426\u0432\u0435\u0442\u0430",
    "Background": "\u0424\u043e\u043d",
    "Text": "\u0422\u0435\u043a\u0441\u0442",

    // Paragraphs
    "Paragraph Format": "\u0424\u043e\u0440\u043c\u0430\u0442 \u0430\u0431\u0437\u0430\u0446\u0430",
    "Normal": "\u041d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u044b\u0439",
    "Code": "\u041a\u043e\u0434",
    "Heading 1": "\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a 1",
    "Heading 2": "\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a 2",
    "Heading 3": "\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a 3",
    "Heading 4": "\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a 4",

    // Style
    "Paragraph Style": "\u0421\u0442\u0438\u043b\u044c \u0430\u0431\u0437\u0430\u0446\u0430",
    "Inline Style": "\u0412\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u0439 \u0441\u0442\u0438\u043b\u044c",

    // Alignment
    "Align": "\u0412\u044b\u0440\u043e\u0432\u043d\u044f\u0442\u044c \u043f\u043e",
    "Align Left": "\u041f\u043e \u043b\u0435\u0432\u043e\u043c\u0443 \u043a\u0440\u0430\u044e",
    "Align Center": "\u041f\u043e \u0446\u0435\u043d\u0442\u0440\u0443",
    "Align Right": "\u041f\u043e \u043f\u0440\u0430\u0432\u043e\u043c\u0443 \u043a\u0440\u0430\u044e",
    "Align Justify": "\u041f\u043e \u0448\u0438\u0440\u0438\u043d\u0435",
    "None": "\u041d\u0438\u043a\u0430\u043a",

    // Lists
    "Ordered List": "\u041d\u0443\u043c\u0435\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u0441\u043f\u0438\u0441\u043e\u043a",
    "Unordered List": "\u041c\u0430\u0440\u043a\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u0441\u043f\u0438\u0441\u043e\u043a",

    // Indent
    "Decrease Indent": "\u0423\u043c\u0435\u043d\u044c\u0448\u0438\u0442\u044c \u043e\u0442\u0441\u0442\u0443\u043f",
    "Increase Indent": "\u0423\u0432\u0435\u043b\u0438\u0447\u0438\u0442\u044c \u043e\u0442\u0441\u0442\u0443\u043f",

    // Links
    "Insert Link": "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0441\u0441\u044b\u043b\u043a\u0443",
    "Open in new tab": "\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0432 \u043d\u043e\u0432\u043e\u0439 \u0432\u043a\u043b\u0430\u0434\u043a\u0435",
    "Open Link": "\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043f\u043e \u0441\u0441\u044b\u043b\u043a\u0435",
    "Edit Link": "\u041e\u0442\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441\u0441\u044b\u043b\u043a\u0443",
    "Unlink": "\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0441\u0441\u044b\u043b\u043a\u0443",
    "Choose Link": "\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0441\u044b\u043b\u043a\u0443",

    // Images
    "Insert Image": "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",
    "Upload Image": "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",
    "By URL": "\u041f\u043e \u0441\u0441\u044b\u043b\u043a\u0435",
    "Browse": "\u0417\u0430\u0433\u0440\u0443\u0436\u0435\u043d\u043d\u044b\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f",
    "Drop image": "\u041f\u0435\u0440\u0435\u043c\u0435\u0441\u0442\u0438\u0442\u0435 \u0441\u044e\u0434\u0430 \u0444\u0430\u0439\u043b",
    "or click": "\u0438\u043b\u0438 \u043d\u0430\u0436\u043c\u0438\u0442\u0435",
    "Manage Images": "\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f\u043c\u0438",
    "Loading": "\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430",
    "Deleting": "\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435",
    "Tags": "\u041a\u043b\u044e\u0447\u0435\u0432\u044b\u0435 \u0441\u043b\u043e\u0432\u0430",
    "Are you sure? Image will be deleted.": "\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b? \u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0431\u0443\u0434\u0435\u0442 \u0443\u0434\u0430\u043b\u0435\u043d\u043e.",
    "Replace": "\u0417\u0430\u043c\u0435\u043d\u0438\u0442\u044c",
    "Uploading": "\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430",
    "Loading image": "\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f",
    "Display": "\u041f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435",
    "Inline": "\u041e\u0431\u0442\u0435\u043a\u0430\u043d\u0438\u0435 \u0442\u0435\u043a\u0441\u0442\u043e\u043c",
    "Break Text": "\u0412\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u043e\u0435 \u0432 \u0442\u0435\u043a\u0441\u0442",
    "Alternate Text": "\u0410\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u043d\u044b\u0439 \u0442\u0435\u043a\u0441\u0442",
    "Change Size": "\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0440\u0430\u0437\u043c\u0435\u0440",
    "Width": "\u0428\u0438\u0440\u0438\u043d\u0430",
    "Height": "\u0412\u044b\u0441\u043e\u0442\u0430",
    "Something went wrong. Please try again.": "\u0427\u0442\u043e\u002d\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a\u002e \u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430\u002c \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437\u002e",

    // Video
    "Insert Video": "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0432\u0438\u0434\u0435\u043e",
    "Embedded Code": "\u0048\u0054\u004d\u004c\u002d\u043a\u043e\u0434 \u0434\u043b\u044f \u0432\u0441\u0442\u0430\u0432\u043a\u0438",

    // Tables
    "Insert Table": "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0442\u0430\u0431\u043b\u0438\u0446\u0443",
    "Table Header": "\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0442\u0430\u0431\u043b\u0438\u0446\u044b",
    "Remove Table": "\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0442\u0430\u0431\u043b\u0438\u0446\u0443",
    "Table Style": "\u0421\u0442\u0438\u043b\u044c \u0442\u0430\u0431\u043b\u0438\u0446\u044b",
    "Horizontal Align": "\u0413\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u044c\u043d\u043e\u0435 \u0432\u044b\u0440\u0430\u0432\u043d\u0438\u0432\u0430\u043d\u0438\u0435",
    "Row": "\u0421\u0442\u0440\u043e\u043a\u0430",
    "Insert row above": "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u0443 \u0441\u0432\u0435\u0440\u0445\u0443",
    "Insert row below": "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u0443 \u0441\u043d\u0438\u0437\u0443",
    "Delete row": "\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u0443",
    "Column": "\u0421\u0442\u043e\u043b\u0431\u0435\u0446",
    "Insert column before": "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0441\u0442\u043e\u043b\u0431\u0435\u0446 \u0441\u043b\u0435\u0432\u0430",
    "Insert column after": "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0441\u0442\u043e\u043b\u0431\u0435\u0446 \u0441\u043f\u0440\u0430\u0432\u0430",
    "Delete column": "\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0441\u0442\u043e\u043b\u0431\u0435\u0446",
    "Cell": "\u042f\u0447\u0435\u0439\u043a\u0430",
    "Merge cells": "\u041e\u0431\u044a\u0435\u0434\u0438\u043d\u0438\u0442\u044c \u044f\u0447\u0435\u0439\u043a\u0438",
    "Horizontal split": "\u0420\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u044c \u0433\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u044c\u043d\u043e",
    "Vertical split": "\u0420\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u044c \u0432\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u044c\u043d\u043e",
    "Cell Background": "\u0424\u043e\u043d \u044f\u0447\u0435\u0439\u043a\u0438",
    "Vertical Align": "\u0412\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u044c\u043d\u043e\u0435 \u0432\u044b\u0440\u0430\u0432\u043d\u0438\u0432\u0430\u043d\u0438\u0435",
    "Top": "\u041f\u043e \u0432\u0435\u0440\u0445\u043d\u0435\u043c\u0443 \u043a\u0440\u0430\u044e",
    "Middle": "\u041f\u043e\u0441\u0435\u0440\u0435\u0434\u0438\u043d\u0435",
    "Bottom": "\u041f\u043e \u043d\u0438\u0436\u043d\u0435\u043c\u0443 \u043a\u0440\u0430\u044e",
    "Align Top": "\u0412\u044b\u0440\u043e\u0432\u043d\u044f\u0442\u044c \u043f\u043e \u0432\u0435\u0440\u0445\u043d\u0435\u043c\u0443 \u043a\u0440\u0430\u044e",
    "Align Middle": "\u0412\u044b\u0440\u043e\u0432\u043d\u044f\u0442\u044c \u043f\u043e \u0441\u0435\u0440\u0435\u0434\u0438\u043d\u0435",
    "Align Bottom": "\u0412\u044b\u0440\u043e\u0432\u043d\u044f\u0442\u044c \u043f\u043e \u043d\u0438\u0436\u043d\u0435\u043c\u0443 \u043a\u0440\u0430\u044e",
    "Cell Style": "\u0421\u0442\u0438\u043b\u044c \u044f\u0447\u0435\u0439\u043a\u0438",

    // Files
    "Upload File": "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0444\u0430\u0439\u043b",
    "Drop file": "\u041f\u0435\u0440\u0435\u043c\u0435\u0441\u0442\u0438\u0442\u0435 \u0441\u044e\u0434\u0430 \u0444\u0430\u0439\u043b",

    // Emoticons
    "Emoticons": "\u0421\u043c\u0430\u0439\u043b\u0438\u043a\u0438",
    "Grinning face": "\u0423\u0445\u043c\u044b\u043b\u043a\u0430 \u043d\u0430 \u043b\u0438\u0446\u0435",
    "Grinning face with smiling eyes": "\u0423\u0441\u043c\u0435\u0445\u043d\u0443\u0432\u0448\u0435\u0435\u0441\u044f \u043b\u0438\u0446\u043e \u0441 \u0443\u043b\u044b\u0431\u0430\u044e\u0449\u0438\u043c\u0438\u0441\u044f \u0433\u043b\u0430\u0437\u0430\u043c\u0438",
    "Face with tears of joy": "\u041b\u0438\u0446\u043e \u0441\u043e \u0441\u043b\u0435\u0437\u0430\u043c\u0438 \u0440\u0430\u0434\u043e\u0441\u0442\u0438",
    "Smiling face with open mouth": "\u0423\u043b\u044b\u0431\u0430\u044e\u0449\u0435\u0435\u0441\u044f \u043b\u0438\u0446\u043e \u0441 \u043e\u0442\u043a\u0440\u044b\u0442\u044b\u043c \u0440\u0442\u043e\u043c",
    "Smiling face with open mouth and smiling eyes": "\u0423\u043b\u044b\u0431\u0430\u044f\u0441\u044c \u043b\u0438\u0446\u043e \u0441 \u043e\u0442\u043a\u0440\u044b\u0442\u044b\u043c \u0440\u0442\u043e\u043c \u0438 \u0443\u043b\u044b\u0431\u0430\u044e\u0449\u0438\u0435\u0441\u044f \u0433\u043b\u0430\u0437\u0430",
    "Smiling face with open mouth and cold sweat": "\u0423\u043b\u044b\u0431\u0430\u044f\u0441\u044c \u043b\u0438\u0446\u043e \u0441 \u043e\u0442\u043a\u0440\u044b\u0442\u044b\u043c \u0440\u0442\u043e\u043c \u0438 \u0445\u043e\u043b\u043e\u0434\u043d\u044b\u0439 \u043f\u043e\u0442",
    "Smiling face with open mouth and tightly-closed eyes": "\u0423\u043b\u044b\u0431\u0430\u044f\u0441\u044c \u043b\u0438\u0446\u043e \u0441 \u043e\u0442\u043a\u0440\u044b\u0442\u044b\u043c \u0440\u0442\u043e\u043c \u0438 \u043f\u043b\u043e\u0442\u043d\u043e \u0437\u0430\u043a\u0440\u044b\u0442\u044b\u043c\u0438 \u0433\u043b\u0430\u0437\u0430\u043c\u0438",
    "Smiling face with halo": "\u0423\u043b\u044b\u0431\u0430\u044f\u0441\u044c \u043b\u0438\u0446\u043e \u0433\u0430\u043b\u043e",
    "Smiling face with horns": "\u0423\u043b\u044b\u0431\u0430\u044f\u0441\u044c \u043b\u0438\u0446\u043e \u0441 \u0440\u043e\u0433\u0430\u043c\u0438",
    "Winking face": "\u043f\u043e\u0434\u043c\u0438\u0433\u0438\u0432\u0430\u044f \u043b\u0438\u0446\u043e",
    "Smiling face with smiling eyes": "\u0423\u043b\u044b\u0431\u0430\u044f\u0441\u044c \u043b\u0438\u0446\u043e \u0441 \u0443\u043b\u044b\u0431\u0430\u044e\u0449\u0438\u043c\u0438\u0441\u044f \u0433\u043b\u0430\u0437\u0430\u043c\u0438",
    "Face savoring delicious food": "\u041b\u0438\u0446\u043e \u0441\u043c\u0430\u043a\u0443\u044e\u0449\u0435\u0435 \u0432\u043a\u0443\u0441\u043d\u0443\u044e \u0435\u0434\u0443",
    "Relieved face": "\u041e\u0441\u0432\u043e\u0431\u043e\u0436\u0434\u0435\u043d\u044b \u043b\u0438\u0446\u043e",
    "Smiling face with heart-shaped eyes": "\u0423\u043b\u044b\u0431\u0430\u044f\u0441\u044c \u043b\u0438\u0446\u043e \u0432 \u0444\u043e\u0440\u043c\u0435 \u0441\u0435\u0440\u0434\u0446\u0430 \u0433\u043b\u0430\u0437\u0430\u043c\u0438",
    "Smiling face with sunglasses": "\u0423\u043b\u044b\u0431\u0430\u044f\u0441\u044c \u043b\u0438\u0446\u043e \u0441 \u043e\u0447\u043a\u0430\u043c\u0438",
    "Smirking face": "\u0423\u0441\u043c\u0435\u0445\u043d\u0443\u0432\u0448\u0438\u0441\u044c \u043b\u0438\u0446\u043e",
    "Neutral face": "\u041e\u0431\u044b\u0447\u043d\u044b\u0439 \u043b\u0438\u0446\u043e",
    "Expressionless face": "\u041d\u0435\u0432\u044b\u0440\u0430\u0437\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043b\u0438\u0446\u043e",
    "Unamused face": "\u041d\u0435 \u0441\u043c\u0435\u0448\u043d\u043e \u043b\u0438\u0446\u043e",
    "Face with cold sweat": "\u041b\u0438\u0446\u043e \u0432 \u0445\u043e\u043b\u043e\u0434\u043d\u043e\u043c \u043f\u043e\u0442\u0443",
    "Pensive face": "\u0417\u0430\u0434\u0443\u043c\u0447\u0438\u0432\u044b\u0439 \u043b\u0438\u0446\u043e",
    "Confused face": "\u0421\u043c\u0443\u0449\u0435\u043d\u043d\u043e\u0435 \u043b\u0438\u0446\u043e",
    "Confounded face": "\u041f\u043e\u0441\u0442\u044b\u0434\u043d\u043e\u0435 \u043b\u0438\u0446\u043e",
    "Kissing face": "\u041f\u043e\u0446\u0435\u043b\u0443\u0438 \u043b\u0438\u0446\u043e",
    "Face throwing a kiss": "\u041b\u0438\u0446\u043e \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0435\u0435 \u043f\u043e\u0446\u0435\u043b\u0443\u0439",
    "Kissing face with smiling eyes": "\u041f\u043e\u0446\u0435\u043b\u0443\u0438 \u043b\u0438\u0446\u043e \u0441 \u0443\u043b\u044b\u0431\u0430\u044e\u0449\u0438\u043c\u0438\u0441\u044f \u0433\u043b\u0430\u0437\u0430\u043c\u0438",
    "Kissing face with closed eyes": "\u041f\u043e\u0446\u0435\u043b\u0443\u0438 \u043b\u0438\u0446\u043e \u0441 \u0437\u0430\u043a\u0440\u044b\u0442\u044b\u043c\u0438 \u0433\u043b\u0430\u0437\u0430\u043c\u0438",
    "Face with stuck out tongue": "\u041b\u0438\u0446\u043e \u0441 \u0442\u043e\u0440\u0447\u0430\u0449\u0438\u043c \u044f\u0437\u044b\u043a\u043e\u043c",
    "Face with stuck out tongue and winking eye": "\u041b\u0438\u0446\u043e \u0441 \u0442\u043e\u0440\u0447\u0430\u0449\u0438\u043c \u044f\u0437\u044b\u043a\u043e\u043c \u0438 \u043f\u043e\u0434\u043c\u0438\u0433\u0438\u0432\u0430\u044e\u0449\u0438\u043c \u0433\u043b\u0430\u0437\u043e\u043c",
    "Face with stuck out tongue and tightly-closed eyes": "\u041b\u0438\u0446\u043e \u0441 \u0442\u043e\u0440\u0447\u0430\u0449\u0438\u043c \u044f\u0437\u044b\u043a\u043e\u043c \u0438 \u043f\u043b\u043e\u0442\u043d\u043e \u0437\u0430\u043a\u0440\u044b\u0442\u044b\u043c\u0438 \u0433\u043b\u0430\u0437\u0430\u043c\u0438",
    "Disappointed face": "\u0420\u0430\u0437\u043e\u0447\u0430\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0435 \u043b\u0438\u0446\u043e",
    "Worried face": "\u041e\u0431\u0435\u0441\u043f\u043e\u043a\u043e\u0435\u043d\u043d\u044b\u0439 \u043b\u0438\u0446\u043e",
    "Angry face": "\u0417\u043b\u043e\u0439 \u043b\u0438\u0446\u043e",
    "Pouting face": "\u041f\u0443\u0445\u043b\u044b\u0435 \u043b\u0438\u0446\u043e",
    "Crying face": "\u041f\u043b\u0430\u0447\u0443\u0449\u0435\u0435 \u043b\u0438\u0446\u043e",
    "Persevering face": "\u041d\u0430\u0441\u0442\u043e\u0439\u0447\u0438\u0432\u0430\u044f \u043b\u0438\u0446\u043e",
    "Face with look of triumph": "\u041b\u0438\u0446\u043e \u0441 \u0432\u0438\u0434\u043e\u043c \u0442\u0440\u0438\u0443\u043c\u0444\u0430",
    "Disappointed but relieved face": "\u0420\u0430\u0437\u043e\u0447\u0430\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0435\u002c \u043d\u043e \u0441\u043f\u043e\u043a\u043e\u0439\u043d\u043e\u0435 \u043b\u0438\u0446\u043e",
    "Frowning face with open mouth": "\u041d\u0430\u0445\u043c\u0443\u0440\u0435\u043d\u043d\u043e\u0435 \u043b\u0438\u0446\u043e \u0441 \u043e\u0442\u043a\u0440\u044b\u0442\u044b\u043c \u0440\u0442\u043e\u043c",
    "Anguished face": "\u043c\u0443\u0447\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043b\u0438\u0446\u043e",
    "Fearful face": "\u041d\u0430\u043f\u0443\u0433\u0430\u043d\u043d\u043e\u0435 \u043b\u0438\u0446\u043e",
    "Weary face": "\u0423\u0441\u0442\u0430\u043b\u044b\u0439 \u043b\u0438\u0446\u043e",
    "Sleepy face": "\u0441\u043e\u043d\u043d\u043e\u0435 \u043b\u0438\u0446\u043e",
    "Tired face": "\u0423\u0441\u0442\u0430\u043b\u0438 \u043b\u0438\u0446\u043e",
    "Grimacing face": "\u0413\u0440\u0438\u043c\u0430\u0441\u0430 \u043d\u0430 \u043b\u0438\u0446\u0435",
    "Loudly crying face": "\u0413\u0440\u043e\u043c\u043a\u043e \u043f\u043b\u0430\u0447\u0430 \u043b\u0438\u0446\u043e",
    "Face with open mouth": "\u041b\u0438\u0446\u043e \u0441 \u043e\u0442\u043a\u0440\u044b\u0442\u044b\u043c \u0440\u0442\u043e\u043c",
    "Hushed face": "\u0417\u0430\u0442\u0438\u0445\u0448\u0438\u0439 \u043b\u0438\u0446\u043e",
    "Face with open mouth and cold sweat": "\u041b\u0438\u0446\u043e \u0441 \u043e\u0442\u043a\u0440\u044b\u0442\u044b\u043c \u0440\u0442\u043e\u043c \u0432 \u0445\u043e\u043b\u043e\u0434\u043d\u043e\u043c \u043f\u043e\u0442\u0443",
    "Face screaming in fear": "\u041b\u0438\u0446\u043e \u043a\u0440\u0438\u0447\u0430\u0449\u0435\u0435 \u043e\u0442 \u0441\u0442\u0440\u0430\u0445\u0430",
    "Astonished face": "\u0423\u0434\u0438\u0432\u043b\u0435\u043d\u043d\u043e\u0435 \u043b\u0438\u0446\u043e",
    "Flushed face": "\u041f\u043e\u043a\u0440\u0430\u0441\u043d\u0435\u0432\u0448\u0435\u0435 \u043b\u0438\u0446\u043e",
    "Sleeping face": "\u0421\u043f\u044f\u0449\u0430\u044f \u043b\u0438\u0446\u043e",
    "Dizzy face": "\u0414\u0438\u0437\u0437\u0438 \u043b\u0438\u0446\u043e",
    "Face without mouth": "\u041b\u0438\u0446\u043e \u0431\u0435\u0437 \u0440\u0442\u0430",
    "Face with medical mask": "\u041b\u0438\u0446\u043e \u0441 \u043c\u0435\u0434\u0438\u0446\u0438\u043d\u0441\u043a\u043e\u0439 \u043c\u0430\u0441\u043a\u043e\u0439",

    // Line breaker
    "Break": "\u041d\u043e\u0432\u0430\u044f \u0441\u0442\u0440\u043e\u043a\u0430",

    // Math
    "Subscript": "\u041d\u0438\u0436\u043d\u0438\u0439 \u0438\u043d\u0434\u0435\u043a\u0441",
    "Superscript": "\u0412\u0435\u0440\u0445\u043d\u0438\u0439 \u0438\u043d\u0434\u0435\u043a\u0441",

    // Full screen
    "Fullscreen": "\u041d\u0430 \u0432\u0435\u0441\u044c \u044d\u043a\u0440\u0430\u043d",

    // Horizontal line
    "Insert Horizontal Line": "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0433\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u044c\u043d\u0443\u044e \u043b\u0438\u043d\u0438\u044e",

    // Clear formatting
    "Clear Formatting": "\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0444\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435",

    // Undo, redo
    "Undo": "\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c",
    "Redo": "\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c",

    // Select all
    "Select All": "\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0432\u0441\u0435",

    // Code view
    "Code View": "\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440 \u0048\u0054\u004d\u004c\u002d\u043a\u043e\u0434\u0430",

    // Quote
    "Quote": "\u0446\u0438\u0442\u0430\u0442\u0430",
    "Increase": "\u0423\u0432\u0435\u043b\u0438\u0447\u0435\u043d\u0438\u0435",
    "Decrease": "\u0421\u043d\u0438\u0436\u0435\u043d\u0438\u0435",

    // Quick Insert
    "Quick Insert": "\u0411\u044b\u0441\u0442\u0440\u0430\u044f \u0432\u0441\u0442\u0430\u0432\u043a\u0430"
  },
  direction: "ltr"
};

}));
