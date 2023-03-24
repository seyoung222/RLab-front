$('#edit_info').validate({
	rules : {
		me_id : {
			required : true,
			regex : /^[a-zA-Z0-9]{5,12}$/
		},
		me_pw : {
			required : true,
			regex : /^[a-zA-Z0-9!@#]{8,19}$/
		},
		me_pw2 : {
			equalTo : me_pw
		},
		me_name : {
			required : true,
			regex : /^[a-zA-Z0-9]{2,9}$/
		},
		me_email : {
			required : true,
			email : true
		}
	},
	messages : { //유효성검사하고 메시지
		me_id : {
			required : '필수항목 입니다',
			regex : '아이디는 영문, 숫자 를 이용하여 5-13자 까지 가능합니다'
		},
		me_pw : {
			required : '필수항목 입니다',
			regex : '비밀번호는 영문, 숫자, !@#를 이용하여 8-20자 까지 가능합니다'
		},
		me_pw2 : {
			equalTo : '비밀번호가 일치하지 않습니다'
		},
		me_name : {
			required : '필수항목 입니다',
			regex : '닉네임은 한글,영어,숫자를 이용하여 2-10자 까지 가능합니다'
		},
		me_email : {
			required : '필수항목 입니다',
			email : '이메일 형식이 아닙니다'
		}

	},
	submitHandler: function(form) {
		if(!idCheck){
			alert('아이디 중복체크를 하세요.');
			return false;
		}
		if(!nameCheck){
			alert('닉네임 중복체크를 하세요.');
			return flase;
		}
		if(!emailCheck){
			alert('이메일 인증 하세요.');
			return false;
		}
		return true;
	}
})