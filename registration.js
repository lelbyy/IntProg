let form = document.getElementById('sign-up-form');

form.addEventListener("submit", function (event) {
    event.preventDefault();
    new FormData(form);
});

form.addEventListener("formdata", event => {
    const data = event.formData;
    const values = [...data.values()];
    console.log(values);
	let name = form.elements.exampleInputName1;
	let password1 = form.elements.exampleInputPassword1;
	let password2 = form.elements.exampleInputPassword2;
	let email = form.elements.exampleInputEmail1;
    if(name.value.length==0||password1.value.length==0||password2.value.length==0||email.value.length==0){
        Swal.fire('Одно из полей не заполнено!','Проверьте введенные данные','error');
        return;
    }
 if (password1.value != password2.value) {
        Swal.fire('Пароли не совпадают!', '', 'error');
        return;
    }
    if (password1.value.length < 3) {
        Swal.fire('Пароль слишком короткий!', '', 'warning');
        return;
    }
    Swal.fire('Поздравляем!', 'Вы успешно прошли регистрацию!', 'success');
});