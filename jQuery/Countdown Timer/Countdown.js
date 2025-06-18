$(function(){
  const initialSeconds = 25 * 60; // changeable to any start secs
  let totalSeconds = initialSeconds;
  let timer = null;

  // Format as HH:MM:SS and update display
  function render(sec) {
    const h = Math.floor(sec / 3600);
    const m = Math.floor((sec % 3600) / 60);
    const s = sec % 60;
    const fmt = n => String(n).padStart(2, "0");
    $('.digits').eq(0).text(fmt(h));
    $('.digits').eq(1).text(fmt(m));
    $('.digits').eq(2).text(fmt(s));
  }

  function startTimer(){
    if (timer) return;
    timer = setInterval(() => {
      totalSeconds--;
      if (totalSeconds < 0) {
        clearInterval(timer);
        timer = null;
        return;
      }
      render(totalSeconds);
    }, 1000);
  }

  function resetTimer(){
    clearInterval(timer);
    timer = null;
    totalSeconds = initialSeconds;
    render(totalSeconds);
  }

  $('#start').click(startTimer);
  $('#reset').click(resetTimer);

  render(totalSeconds);
  function editTimer() {
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;
    $('#hours').val(h);
    $('#minutes').val(m);
    $('#seconds').val(s);
    $('#edit-form').show();
  }
  function saveEdit() {
    const h = parseInt($('#hours').val()) || 0;
    const m = parseInt($('#minutes').val()) || 0;
    const s = parseInt($('#seconds').val()) || 0;
    totalSeconds = initialSeconds = h * 3600 + m * 60 + s;
    render(totalSeconds);
    $('#edit-form').hide();
  }
  $('#edit').click(editTimer);
  $('#save').click(saveEdit);

});
