---
title: "Outline"
draft: false
menu:
  main:
    parent: "Schedule"
---

|   | **Monday** | **Tuesday** | **Wednesday** |  | **Thursday** |  | **Friday** |  | **Saturday** |
| :---: | :---: | :---: | :---: | --- | :---: | --- | :---: | --- | :---: |
|  8:30 | Registration |  |  |  |  |  |  |  |  |
|  9:00 | Workshop | Workshop |  |  | Main Session | Codesprint | Registration |  | Community Session |
|  10:00 |  |  | Opening |  |  |  | Main Session | Codesprint |  |
|  11:00 |  |  | Main Session | Codesprint |  |  |  |  |  |
|  12:00 |  |  |  |  |  |  |  |  |  |
|  13:00 | Lunch |  |  |  |  |  |  |  |  |
|  14:30 | Workshop | Workshop | Main Session | Codesprint | Main Session | Codesprint | Main Session | Codesprint | Community Session |
|  15:30 |  |  |  |  |  |  |  |  |  |
|  16:30 |  |  |  |  |  |  |  |  |  |
|  17:30 |  |  |  |  |  |  |  |  |  |
|  18:30 | *Pub Race* | **GeoChicas I** | AGM OSGeo |  |  |  | Closing |  |  |
|  20:00 |  |  |  |  |  |  |  |  |  |
|  20:30 |  | **GeoChicas II** | Ice Breaker |  | Gala Dinner |  | *Pub Race* |  |  |
|  ... |  |  |  |  |  |  |  |  |  |

{{< rawhtml >}}
<div id="countdown"></div>
<script>
var end = new Date('09/27/2021 9:30 AM');

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            document.getElementById('countdown').innerHTML = 'EXPIRED!';

            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);

        document.getElementById('countdown').innerHTML = days + ' dias, ';
        document.getElementById('countdown').innerHTML += hours + ' horas, ';
        document.getElementById('countdown').innerHTML += minutes + ' minutos y ';
        document.getElementById('countdown').innerHTML += seconds + ' segundos';
    }

    timer = setInterval(showRemaining, 1000);
</script>

{{< /rawhtml >}}