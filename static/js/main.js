$(document).ready(function() {
  $year = $("#countdown_dashboard").data("year");
  $month = $("#countdown_dashboard").data("month");
  $day = $("#countdown_dashboard").data("day");

  $("#countdown_dashboard").countDown({
    targetDate: {
      day: $day,
      month: $month,
      year: $year,
      hour: 8,
      min: 59,
      sec: 59
    },
    omitWeeks: true
  });
});
