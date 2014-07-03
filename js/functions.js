

function populate_categorie(id,id2){//id-supercategoria,id2-categoria
	
	string="category_id="+id2;
	$.blockUI({ message: '<img src="http://kilometri.ro/brasovtour/mobile/img/busy.gif" />' });
        $.ajax({
            type: 'POST',
            url: "http://kilometri.ro/brasovtour/mobile/ajax/ajax.php",
   		    dataType: "json",
            data:  string,
            success:function(response){
               	$('.category-name').empty().append(response[0]);
               	$('.category-locations').empty().append(response[1]);
               	
            	
            	$.unblockUI();
            
            	
		  }
		});
}



function validate_login(){
		var username = $('#username').val();
		var password = $('#password').val();
		string="username="+username+"&"+"password="+password;
		$.blockUI({ message: '<img src="http://kilometri.ro/brasovtour/mobile/img/busy.gif" />' });
        $.ajax({
            type: 'POST',
            url: "http://kilometri.ro/brasovtour/mobile/ajax/ajax.php",
   		    dataType: "json",
            data:  string,
            success:function(response){
            	if(response.length==0){
              localStorage['name']=username;
			  localStorage['password']=password;
			  window.location="#acasa";
              
             }else
             {
             	alert('Eroare:'+response);
             }
            	$.unblockUI();
            	
		  }
		});
		
	}

	function login_history(){
		// localStorage.removeItem('name');
		// localStorage.removeItem('name');
		if(localStorage['name'] && localStorage['password']){
			window.location="#acasa";
		}
		else{
			window.location="#acasa";
 		}
	}
	
	
	function populate_location(id){
		string="location_id="+id;
		$.blockUI({ message: '<img src="http://kilometri.ro/brasovtour/mobile/img/busy.gif" />' });
        $.ajax({
            type: 'POST',
            url: "http://kilometri.ro/brasovtour/mobile/ajax/ajax.php",
   		    dataType: "json",
            data:  string,
            success:function(response){
            	console.log(response);
            	dlat=response['lat'];
            	dlng=response['lng'];
            	console.log(dlng);
            	console.log(dlat);
               	$.unblockUI();
            
            	
		  }
		});
		
	}
