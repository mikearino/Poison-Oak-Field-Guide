import { sum } from './sample-class.js';
import '../css/styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {

  $('.poisonButton').on('click', function() {
    $(this).addClass('poisonButtonShow');
  });

  $('#game1Change').click(function() {
    $('.game1').hide();
    $('.game2').fadeIn(1500);
  });

  $('#game2Change').click(function() {
    $('.game2').hide();
    $('.game3').fadeIn(1500);
  });

  $('#game3Change').click(function() {
    $('.game3').hide();
    $('.game1').fadeIn(1500);
  });

});
