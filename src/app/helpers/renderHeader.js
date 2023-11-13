module.exports = function renderHeader(user) {
  let html = '';

  if (user) {
    if (user.isAdmin) {
      html +=
        "<li class='me-md-3'><a href='/admin/stored/words'>Store (admin)</a></li>";
    } else if (!user.isAdmin) {
      html += "<li><a href='/me/stored/words'>Store (me)</a></li> ";
    }
  }

  return html;
};
