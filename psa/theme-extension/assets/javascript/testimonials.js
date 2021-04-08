var Testimonials = (function (window) {

  function initialize() {
    var links = document.querySelectorAll('.testimonials__link');
    links.forEach(function(link) {
      var target = _getLinkTargetElement(link)
      link.addEventListener('click', function() {
        var expanded = link.getAttribute('aria-expanded') === 'true' || false;
        if (expanded) return; // do not close active project
        // handle old and new active links & targets
        var activeLink = document.querySelector('.testimonials__link[aria-expanded="true"]')
        var activeTarget = _getLinkTargetElement(activeLink)
        activeLink.setAttribute('aria-expanded', false);
        activeTarget.hidden = true;
        link.setAttribute('aria-expanded', !expanded);
        target.hidden = expanded;
      })
    })
  }

  function _getLinkTargetElement(link) {
    var targetID = link.getAttribute('aria-controls')
    if (!targetID) {
      console.warn('testimonials: link with id '+link.id+' doesn\'t have corresponding target element.')
      return false
    }
    return document.getElementById(targetID);
  }

  return {
    init: initialize
  };
})(window);

Testimonials.init();

