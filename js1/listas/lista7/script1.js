window.addEventListener ("DOMContentLoaded", function(){
    document.getElementById('btnTransferir').addEventListener('click', function() {
            setTimeout(function() {
                const caixa1 = document.getElementById('caixa1');
                const caixa2 = document.getElementById('caixa2');
                
                caixa2.value = caixa1.value;
                
                caixa1.value = '';
            }, 2000);
        });
});