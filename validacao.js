const form = document.getElementById('form');
        const campos = document.querySelectorAll('.required');
        const spans = document.querySelectorAll('.span-required');
        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        function setError(index){
            campos[index].style.border='2px solid #e63636';
            spans[index].style.display='block';

        }
        function removeError(index){
            campos[index].style.border='';
            spans[index].style.display='none';
        }
        function nameValidate(){
            if(campos[0].value.length < 3){
                setError(0);
                /*console.log('NOME DEVE TER 3 CARACTERES')*/
            }
            else{
                removeError(0);
                /*console.log('Nome Valido')*/
            }
        }
        function sbnameValidate(){
            if(campos[1].value.length < 3){
                setError(1);
                /*console.log('NOME DEVE TER 3 CARACTERES')*/
            }
            else{
                removeError(1);
                /*console.log('Nome Valido')*/
            }
        }

        function emailValidate(){
            if(!emailRegex.test(campos[2].value)){
                setError(2);
                /*console.log('Validado com sucesso')*/
            }
            else{
                removeError(2);
                /*console.log('email Invalido');*/
            }
        }
