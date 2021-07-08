
/* 
  Aqui estão as funçoes e as variaveis gobais 
  retorna um objeto
*/

export default (function util() {
    const utilitarios = {

      // api que eu criei
      
      //rota de produção
      // urlApi  : 'http://35.198.5.116',
      
      //rota de teste
      urlApi :'http://127.0.0.1:3000',

      // api da jsonplaceholder
      urlClientes: 'https://jsonplaceholder.typicode.com/users',
    };
/*
  Essa função retorna a soma todas as dividas do usuario
  recebe o retorno da api dividas/{id do usuario}  (json)
 */
  utilitarios.soma = (data) => {
    let valor = 0;
      for(const v of data){
        valor += parseFloat(v.valor)
      }
      
    return valor
  }

  /*
  retorna dados async da api get que for passada a rota
  */
  utilitarios.getFetch = async (router) => {
      const get = await fetch(router);
      return get.json();
  }
  utilitarios.postFetch = async (router, data) => {
    console.log(router)
    const get = await fetch(router,{
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(data) 
    });

    return get.json();
  }

  utilitarios.showLoading = (title, html = null) => {
    swal.fire({
      title,
      html,
      allowOutsideClick: false,
      })
    swal.showLoading();
  }

  utilitarios.criaDivida = (id) => {
    const title = 'Adicionando divida ao cliente'
    const html = `
                <form>
                  <div>
                    <label>Motivo</label>
                    <input type="texto" nome="motivo"/>
                  </div>
                  <div>
                    <label>Valor</label>
                    <input type="texto" nome="valor"/>
                  </div>
                  <div>
                    <label>Data</label>
                    <input type="data" nome="data"/>
                  </div>
                </form>`

          swal.fire({
            title,
            html,
            showCancelButton: true,
            closeOnConfirm: false,
            confirmButtonText: 'Salvar',
            focusConfirm: true,
            animation: "slide-from-top"
            }).then(async ress =>{  
              if(ress.isConfirmed){

                const id = document.getElementsByClassName('novaDivida').id;
                const data = {
                  motivo: document.querySelector("input[nome='motivo']").value,
                  valor:  document.querySelector("input[nome='valor']").value,
                  data:   document.querySelector("input[nome='data']").value
                }

                await utilitarios.postFetch(utilitarios.urlApi + '/divida/' + id, data)
              
              }
          })

  }

  return utilitarios;

})()