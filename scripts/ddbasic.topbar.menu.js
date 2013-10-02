/**
 * Creates the top-bar toggle menu.
 */
(function($) {
  "use strict";

  /**
   * Toggle the search form from the top-bar menu.
   *
   * @param bool init
   *   If true the form and link is set to initialized state.
   */
  function ddbasic_search(init) {
    var link = $('.js-topbar-link.topbar-link-search');
    var header = $('.header-wrapper');
    var form = $('.js-topbar-search');

    // Handle default init value (false);
    init = typeof init !== 'undefined' ? init : false;

    if (init) {
      // If on front-page display search.
      if ($('body').hasClass('front')) {
        link.addClass('active');
        form.show();
        header.show();
      }
      else {
        link.removeClass('active');
        form.hide();
        header.hide();
      }
    }
    else {
      link.toggleClass('active');
      form.toggle();
      header.toggle();
    }
  }

  /**
   * Toggle the mobile menu from the top-bar menu.
   *
   * @param bool init
   *   If true the form and link is set to initialized state.
   */
  function ddbasic_mobile_menu(init) {
    var menu_link = $('.js-topbar-link.topbar-link-menu');
    var menu = $('.js-topbar-menu');

    // Handle default init value (false);
    init = typeof init !== 'undefined' ? init : false;

    if (init) {
      menu_link.removeClass('active');
    }
    else {
      menu_link.toggleClass('active');
      menu.toggleClass('js-topbar-toggled');
    }
  }

  /**
   * Toggle the user login form from the top-bar menu.
   *
   * @param bool init
   *   If true the form and link is set to initialized state.
   */
  function ddbasic_user_login(init) {
    var link = $('.js-topbar-link.topbar-link-user');
    var header = $('.header-wrapper');
    var form = $('.js-topbar-user');

    // Handle default init value (false);
    init = typeof init !== 'undefined' ? init : false;

    if (init) {
        form.hide();
        header.hide();
    }
    else {
      link.toggleClass('active');
      form.toggle();
      header.toggle();
    }
  }

  /**
   * When ready start the magic and handle the menu.
   *
   * @todo: We might be able to group some of the stuff together in the logic
   *        below, but for now we just need to have it working.
   */
  $(document).ready(function () {
    // Init the top bar.
    ddbasic_mobile_menu(true);
    ddbasic_user_login(true);
    ddbasic_search(true);

    // If the search link is click toggle mobile menu if shown and display search.
    $('.js-topbar-link.topbar-link-search').on('click touchstart', function(e) {
      if ($('.js-topbar-link.topbar-link-menu').hasClass('active')) {
        // Mobile menu is open, so close it.
        ddbasic_mobile_menu();
      }
      if ($('.js-topbar-link.topbar-link-user').hasClass('active')) {
        // User menu is open, so close it.
        ddbasic_user_login();
      }

      ddbasic_search();
      e.preventDefault();
    });

    // If the mobile menu is click toggle search if displayed and display menu.
    $('.js-topbar-link.topbar-link-menu').on('click touchstart', function(e) {
      if ($('.js-topbar-link.topbar-link-search').hasClass('active')) {
        // Search is open, so close it.
        ddbasic_search();
      }
      if ($('.js-topbar-link.topbar-link-user').hasClass('active')) {
        // Mobile menu is open, so close it.
        ddbasic_user_login();
      }
      ddbasic_mobile_menu();
      e.preventDefault();
    });

    // User login.
    $('.js-topbar-link.topbar-link-user').on('click touchstart', function(e) {
      if ($('.js-topbar-link.topbar-link-search').hasClass('active')) {
        // Search is open, so close it.
        ddbasic_search();
      }
      if ($('.js-topbar-link.topbar-link-menu').hasClass('active')) {
        // Mobile menu is open, so close it.
        ddbasic_mobile_menu();
      }
      ddbasic_user_login();
      e.preventDefault();
    });


    /**
     * Add news category menu as sub-menu to news in main menu
     */
    if ($(".pane-news-category-menu").length > 0) {
      $(".pane-news-category-menu .sub-menu").clone().appendTo('.menu-mlid-1793');
      // Do some class magic to get the sub-menu reacting like drupal standard sub-menus.
      $(".main-menu .sub-menu").addClass('main-menu');
      $(".main-menu .sub-menu").removeClass('sub-menu');
      // Add sub-menu-wrapper class to taxonomy menu
      $(".pane-news-category-menu").addClass('sub-menu-wrapper');
    }

    /*
     * Add event category menu as sub-menu to event in main menu
     */
    if ($(".pane-event-category-menu").length > 0) {
      $(".pane-event-category-menu .sub-menu").clone().appendTo('.menu-mlid-1816');
      // Do some class magic to get the sub-menu reacting like drupal standard sub-menus.
      $(".main-menu .sub-menu").addClass('main-menu');
      $(".main-menu .sub-menu").removeClass('sub-menu');
      // Add sub-menu-wrapper class to taxonomy menu
      $(".pane-event-category-menu").addClass('sub-menu-wrapper');
    }
  });
})(jQuery);
