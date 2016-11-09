module.exports = function($scope, $http, $rootScope,$location){
/*
  $(document).ready(function(){
  $(".floating-box").click(function(){
   $(this).toggleClass("d1");
   var arr=[];
   i=0;
   sum=0;
  gold=0;
  silver=0;

   $(".d1").each(function(){
  arr.push($(this).attr('id'));
  i++;

  if($(this).attr('id')=="E1")
  {
    gold++;
  }
  else{
    silver=i*100;
  }
   });

  sum+=silver+(gold*200);
  $('#amt').html(sum);
  $('#totalst').html(i);
  document.getElementById("st").innerHTML=arr;
  sum=0;
  /*
  if($(this).hasClass("d1"))
  {
  arr[i]=this.id;
  i++;
  document.getElementById("st").innerHTML=arr;
  }
  else {
  alert(this.id);
  }
  */
  // });
  //
  // });
var s_seat=0,no_of_seat,no;
var countdiv=[];
  var seatOnload = function(){
  $(document).ready(function(){
    $('#Seatclass').change(function(){
      var sel=$('#Seatclass').find(":selected").text();
      if(sel=="GOLD")
      {

      $('#silver tr>td>div').addClass('grey');
      $('#gold tr>td>div').removeClass('grey');
      }

      if(sel=="SILVER")
      {
        $('#gold tr>td>div').addClass('grey');
        $('#silver tr>td>div').removeClass('grey');
      }

    $('#noofseats').change(function(){
       no = $('#noofseats').find(":selected").text();
      no_of_seat=document.getElementById("totalst").innerHTML= no;
      //alert(no);



    $('.floating-box').click(function(){

    if(!$(this).hasClass('grey')||$(this).hasClass('red'))
    {
  //alert($(this).hasClass('grey'));
      if(countdiv.length < no)
      {

        $(this).toggleClass("d1");
        var id=$(this).attr('id');
        var cn=$(this).hasClass('d1');

        if(cn)
            {

                countdiv.push(id);
                  $rootScope.TotalSeat=JSON.stringify(countdiv);
              s_seat= document.getElementById("st").innerHTML=countdiv;
              // count++;
              }

        else{
              var ind=countdiv.indexOf(id);
              countdiv.splice(ind,1);
              $rootScope.TotalSeat=JSON.stringify(countdiv);
            }
  if(sel== "SILVER")
  {
    document.getElementById("amt").innerHTML=countdiv.length*200;
  }
  else
  {
    document.getElementById("amt").innerHTML=countdiv.length*280;
  }

  }
  else {
    
          alert("Request you to  book only " + no +" seats");
    }
  }
  });


  });
  });

  });
};
seatOnload();


$scope.nextPage=function(){
$rootScope.Amount=document.getElementById("amt").innerHTML;
$rootScope.TotalSeat1= s_seat;
$rootScope.coutSeat=no_of_seat;

if(countdiv.length==no_of_seat)
{
// alert('no of seat'+no_of_seat);
$location.path('/makePayment');
}
else {
  alert('Please Reselect No. of Seats');
}

};


var init=function()
{
  var m=$rootScope.Moviename;
  var t=$rootScope.CinemaName;
  var s=$rootScope.showTime;
  var d=$rootScope.rootDate;

  $http.get('/pay/bookedseats/'+m+'/'+t+'/'+s).success(function (response) {
    for(i=0;i<response.length;i++)
    {
      for(j=0;j<response[i].SeatNo.length;j++)
      {
          $('#'+response[i].SeatNo[j]).addClass('red');
      }
    }
  });
};

init();

};
