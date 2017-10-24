function formJudge(){
		var username=$("#username").val();
		var password=$("#password").val();
		if(!username){
			$("#loginTips").html("当前手机号未注册");
			toggle();
			function toggle(){
				$("#loginTips").toggle()
			}
			setTimeout(toggle,2000);
		}else if(!password){
			$("#loginTips").html("密码错误");
			toggle();
			function toggle(){
				$("#loginTips").toggle()
			}
			setTimeout(toggle,2000);
		}else{
			$("#loading").toggle();
			function toggle(){
				$("#loading").toggle()
			}
			setTimeout(toggle,2000);
		}
		return false;
	}
$(document).ready(function(){

})